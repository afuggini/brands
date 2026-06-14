---
name: chatgpt-via-cdp
description: Use when needing to interact with ChatGPT in the browser programmatically and in background — uploading files to a project, sending prompts, reading responses — without requiring Chrome to be in focus or visible.
---

# ChatGPT via Chrome DevTools Protocol (CDP)

Interactúa con ChatGPT completamente en background usando CDP. Chrome no necesita estar en foco ni visible. El flujo base: lanzar Chrome con debugging habilitado → conectar por WebSocket → navegar al proyecto → subir archivos → enviar prompt → leer respuesta.

## Prerequisites

- **Chrome** instalado (testeado en Chrome 149)
- **Python 3** con `websocket-client`: `pip install websocket-client`
- Una sesión activa de ChatGPT en el perfil CDP (ver Paso 1 — primera vez)

## Paso 1 — Lanzar Chrome con CDP

Lanzar Chrome con remote debugging habilitado en un perfil aislado:

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --remote-debugging-port=9222 \
  --user-data-dir=/tmp/chrome-cdp-profile \
  &
```

**Primera vez solamente:** el usuario debe loguearse manualmente en ChatGPT en esta instancia (el perfil `/tmp/chrome-cdp-profile` es nuevo, sin sesión previa). Una vez logueado, todas las interacciones posteriores operan 100% en background sin intervención del usuario.

La REST API de control queda disponible en `http://localhost:9222/json`.

## Paso 2 — Importar los helpers

Este skill incluye `cdp_helpers.py` con todas las funciones reutilizables. Ajustar el path según donde viva la skill:

```python
import sys, time, json
sys.path.insert(0, "/path/to/skills/chatgpt-via-cdp")
import websocket
from cdp_helpers import (make_cdp_client, send, js,
                          mouse_click, get_coords,
                          upload_files, type_and_send,
                          wait_for_response, get_last_response)
```

Conectar al tab:

```python
tabs = make_cdp_client(port=9222)
# Buscar el tab por URL o usar el primero disponible
tab = next((t for t in tabs if "chatgpt.com" in t.get("url", "")), tabs[0])
ws = websocket.create_connection(tab["webSocketDebuggerUrl"])
```

## Paso 3 — Navegar a un proyecto de ChatGPT

Los proyectos tienen URLs del formato:
`https://chatgpt.com/g/g-p-<PROJECT_ID>-<slug>/project`

```python
project_url = "https://chatgpt.com/g/g-p-6a2f157b076c8191812c394d67b3e2fa-ariel-ar-branding-copy/project"
send(ws, "Page.navigate", {"url": project_url})
time.sleep(4)  # Esperar carga completa de la SPA
```

**Proyectos conocidos:**
- `ariel.ar Branding & Copy`: `g-p-6a2f157b076c8191812c394d67b3e2fa-ariel-ar-branding-copy`

## Paso 4 — Subir archivos markdown

El mecanismo correcto es `DOM.setFileInputFiles`. No usar el file picker del OS.

```python
files = [
    "/ruta/absoluta/contexto-marca.md",
    "/ruta/absoluta/variantes-existentes.md",
]
upload_files(ws, files, selector="#upload-files")
time.sleep(2)  # Dar tiempo a ChatGPT para procesar los archivos
```

Los paths deben ser **absolutos**. Esperar al menos 2 segundos antes de enviar el prompt.

## Paso 5 — Escribir y enviar el prompt

```python
prompt = "Generá 3 variantes de copy para un reel de 15 segundos. Contexto en los archivos adjuntos."
type_and_send(ws, prompt)
```

## Paso 6 — Leer la respuesta

```python
wait_for_response(ws, timeout=120)  # Polling hasta que ChatGPT deje de generar
response = get_last_response(ws)
```

Para guardar en archivo:

```python
with open("/ruta/output.md", "w") as f:
    f.write(response)
```

## Paso 7 — Parsear y guardar como vN.md

La respuesta viene como texto plano. Parsear según el formato pedido en el prompt y guardar en la estructura estándar de `copywrite`:

```python
# Ejemplo: el prompt pidió que las variantes estén separadas por "---"
variants = [v.strip() for v in response.split("\n---\n") if v.strip()]
base_dir = "/path/to/brands/ariel.ar/copy/pieces/ad-script/2026-06-ejemplo"
for i, variant in enumerate(variants, start=1):
    with open(f"{base_dir}/v{i}.md", "w") as f:
        f.write(variant)
```

## Flujo completo de ejemplo

```python
import sys, time
sys.path.insert(0, "/path/to/skills/chatgpt-via-cdp")
import websocket
from cdp_helpers import (make_cdp_client, send, upload_files,
                          type_and_send, wait_for_response, get_last_response)

# Conectar
tabs = make_cdp_client()
ws = websocket.create_connection(tabs[0]["webSocketDebuggerUrl"])

# Navegar al proyecto
send(ws, "Page.navigate", {
    "url": "https://chatgpt.com/g/g-p-6a2f157b076c8191812c394d67b3e2fa-ariel-ar-branding-copy/project"
})
time.sleep(4)

# Subir contexto
upload_files(ws, ["/tmp/brand.md", "/tmp/brief.md"])
time.sleep(2)

# Prompt
type_and_send(ws, "Generá 3 variantes de ad-script para reel 15s. Seguí el formato del brief adjunto.")

# Esperar y leer
wait_for_response(ws, timeout=120)
response = get_last_response(ws)

# Guardar
with open("/tmp/chatgpt-response.md", "w") as f:
    f.write(response)

ws.close()
```

---

## Patrones que NO funcionan

| Patrón | Por qué falla |
|--------|---------------|
| `Runtime.evaluate` con `.click()` en elementos React | No es gesto real — no dispara handlers de React ni abre menús contextuales |
| `Page.setInterceptFileChooser` | Method not found en Chrome 149 (`-32601`) |
| `System Events` de AppleScript para subir archivos | Requiere permiso de Accesibilidad del usuario en macOS |
| `window.HTMLInputElement.prototype.value` setter en file inputs | No aplicable a `<input type="file">` por seguridad del browser |
| Clicks con `Runtime.evaluate` + `dispatchEvent(new MouseEvent(...))` | No equivale a `Input.dispatchMouseEvent` — React no responde igual |

---

## Archivo de soporte

Este directorio incluye `cdp_helpers.py` con las funciones: `make_cdp_client`, `send`, `js`, `mouse_click`, `get_coords`, `upload_files`, `type_and_send`, `wait_for_response`, `get_last_response`.
