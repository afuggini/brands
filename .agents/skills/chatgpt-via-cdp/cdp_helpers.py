"""
cdp_helpers.py — Helper functions para interactuar con Chrome via CDP.

Testeado con Chrome 149 + ChatGPT. Requiere: pip install websocket-client
"""

import json
import time
import urllib.request
import websocket as ws_lib


# ──────────────────────────────────────────────
# Conexión
# ──────────────────────────────────────────────

def make_cdp_client(port=9222):
    """Devuelve la lista de tabs disponibles via REST API de CDP."""
    with urllib.request.urlopen(f"http://localhost:{port}/json") as r:
        return json.loads(r.read())


def connect_tab(port=9222, url_contains="chatgpt.com"):
    """
    Conecta al primer tab cuya URL contenga `url_contains`.
    Si no encuentra ninguno, conecta al primer tab disponible.
    Devuelve un objeto websocket abierto.
    """
    tabs = make_cdp_client(port)
    tab = next((t for t in tabs if url_contains in t.get("url", "")), tabs[0])
    return ws_lib.create_connection(tab["webSocketDebuggerUrl"])


# ──────────────────────────────────────────────
# Comunicación CDP
# ──────────────────────────────────────────────

_id = 0


def send(ws, method, params=None):
    """
    Envía un comando CDP y espera la respuesta con el mismo id.
    Timeout: 15 segundos.
    """
    global _id
    _id += 1
    req_id = _id
    ws.send(json.dumps({"id": req_id, "method": method, "params": params or {}}))
    deadline = time.time() + 15
    while time.time() < deadline:
        ws.settimeout(2)
        try:
            msg = json.loads(ws.recv())
        except Exception:
            continue
        if msg.get("id") == req_id:
            return msg
    return {"result": {}, "error": "timeout"}


def js(ws, expr):
    """
    Evalúa una expresión JavaScript y devuelve el valor primitivo resultante.
    Funciona con promesas (awaitPromise=True).
    """
    r = send(ws, "Runtime.evaluate", {
        "expression": expr,
        "returnByValue": True,
        "awaitPromise": True,
    })
    return r.get("result", {}).get("result", {}).get("value")


# ──────────────────────────────────────────────
# Input — clicks reales (disparan handlers de React)
# ──────────────────────────────────────────────

def mouse_click(ws, x, y):
    """
    Dispara un click real via Input.dispatchMouseEvent.
    A diferencia de .click() en JS, este mecanismo activa los handlers
    de React y abre menús contextuales correctamente.
    """
    send(ws, "Input.dispatchMouseEvent", {
        "type": "mousePressed",
        "x": x, "y": y,
        "button": "left",
        "clickCount": 1,
    })
    time.sleep(0.05)
    send(ws, "Input.dispatchMouseEvent", {
        "type": "mouseReleased",
        "x": x, "y": y,
        "button": "left",
        "clickCount": 1,
    })


def get_coords(ws, selector):
    """
    Devuelve las coordenadas del centro del elemento que coincide con `selector`.
    Retorna un dict {"x": float, "y": float}.
    """
    raw = js(ws, f"""JSON.stringify((function(){{
        var el = document.querySelector('{selector}');
        if (!el) return null;
        var r = el.getBoundingClientRect();
        return {{x: r.left + r.width / 2, y: r.top + r.height / 2}};
    }})())""")
    if raw is None:
        raise ValueError(f"Elemento no encontrado: {selector}")
    return json.loads(raw)


# ──────────────────────────────────────────────
# Upload de archivos (sin file picker del OS)
# ──────────────────────────────────────────────

def upload_files(ws, file_paths, selector="#upload-files"):
    """
    Sube archivos a un <input type="file"> via DOM.setFileInputFiles.
    No requiere interacción con el file picker del OS.

    - file_paths: lista de rutas absolutas (strings)
    - selector: CSS selector del input file (default: "#upload-files")

    Después del upload, disparar el change event para que React lo detecte.
    """
    # 1. Habilitar DOM domain
    send(ws, "DOM.enable")

    # 2. Obtener nodeId del input
    doc = send(ws, "DOM.getDocument", {"depth": 0})
    root_id = doc["result"]["root"]["nodeId"]
    inp = send(ws, "DOM.querySelector", {"nodeId": root_id, "selector": selector})
    node_id = inp["result"]["nodeId"]

    # 3. Setear archivos
    send(ws, "DOM.setFileInputFiles", {"files": file_paths, "nodeId": node_id})

    # 4. Disparar change event con el truco del _valueTracker de React
    js(ws, f"""
    (function(){{
        var input = document.querySelector('{selector}');
        var tracker = input._valueTracker;
        if (tracker) tracker.setValue('');
        input.dispatchEvent(new Event('change', {{bubbles: true, cancelable: true}}));
    }})()
    """)


# ──────────────────────────────────────────────
# Texto y envío
# ──────────────────────────────────────────────

def type_and_send(ws, text, textarea_selector="#prompt-textarea", send_button_selector='[data-testid="send-button"]'):
    """
    Hace click en el textarea, inserta el texto y hace click en Send.
    Usa Input.insertText (no simula tecla por tecla).
    """
    # Focus en textarea
    ta_pos = get_coords(ws, textarea_selector)
    mouse_click(ws, ta_pos["x"], ta_pos["y"])
    time.sleep(0.3)

    # Insertar texto
    send(ws, "Input.insertText", {"text": text})
    time.sleep(0.5)

    # Click en Send
    send_pos = get_coords(ws, send_button_selector)
    mouse_click(ws, send_pos["x"], send_pos["y"])


# ──────────────────────────────────────────────
# Lectura de respuestas
# ──────────────────────────────────────────────

def wait_for_response(ws, timeout=120, poll_interval=5):
    """
    Espera hasta que ChatGPT deje de generar (el botón Stop desaparece).
    Polling cada `poll_interval` segundos hasta `timeout` segundos.
    """
    start = time.time()
    while time.time() - start < timeout:
        time.sleep(poll_interval)
        status = js(ws, """
            (function(){
                var stopBtn = document.querySelector('[data-testid="stop-button"]');
                return stopBtn ? 'generating' : 'done';
            })()
        """)
        if status == "done":
            return
    # Si llegamos aquí, hubo timeout — continuar igual (la respuesta puede estar parcial)


def get_last_response(ws):
    """
    Devuelve el innerText del último mensaje del assistant en el chat.
    """
    return js(ws, """
        (function(){
            var msgs = document.querySelectorAll('[data-message-author-role="assistant"]');
            var last = msgs[msgs.length - 1];
            return last ? last.innerText : '';
        })()
    """)
