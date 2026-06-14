---
name: copywrite
description: Genera piezas de copy para cualquier marca del workspace (ariel.ar, cursodevibecoding, u otras). Usá esta skill siempre que el usuario pida crear un anuncio, script de video o reel, declaración oficial, texto de landing, post, email, manifiesto, o cualquier pieza de comunicación escrita — incluso si no lo llama explícitamente "copy". La skill carga automáticamente la voz de la marca correcta, genera N variantes genuinamente distintas con sus ángulos declarados, guarda los archivos en el path correcto y cierra el loop de aprendizaje.
---

# Copy Generator

Genera copy para marcas del workspace siguiendo un método de brief → variantes → guardado → loop.

## Paso 1 — Identificar marca y formato

Parsear `$ARGUMENTS`:
- **Marca**: `ariel.ar`, `cursodevibecoding`, u otra (si no está en el workspace, preguntar)
- **Formato**: `ad-script`, `official-statement`, u otro libre
- **Brief en línea** (opcional): texto adicional que funciona como brief abreviado

Si falta la marca o el formato y no se pueden inferir del contexto, preguntar antes de avanzar. No es necesario preguntar ambas cosas si una es obvia.

## Paso 2 — Cargar la marca

Leer con `Read`:

1. `brands/<marca>/brand/BRAND.md` — voz, personas, pilares, valores, "no"s tajantes
2. Todos los archivos en `brands/<marca>/copy/guidelines/` — lexicón, estructuras override, formats override

Si algún archivo no existe, continuar sin él (no es error — la marca puede no tener overrides todavía).

**Regla de precedencia:** la marca siempre gana sobre los maestros de esta skill. Si hay conflicto entre una regla de `references/` y una de `brands/<marca>/copy/guidelines/`, aplica la de la marca.

## Paso 3 — Cargar maestros

Siempre leer:
- `references/principles.md` — principios universales de escritura
- `references/structures.md` — estructuras genéricas de mensaje
- `references/hooks.md` — catálogo de ganchos de apertura (aplica a todos los formatos)

Para el formato pedido, leer también:
- `references/formats/<formato>.md` — scaffold del formato (si existe)

Si el formato no tiene scaffold en `references/`, pedirle al usuario las características básicas (anatomía, largo, superficie).

## Paso 4 — Tomar el brief

**Doc fuente (opcional):** Si el argumento incluye una referencia del tipo `docs/<archivo>.md` o una ruta a un `.md`, leerlo con `Read` antes de hacer cualquier pregunta. El doc puede ser:
- `brands/<marca>/docs/<archivo>.md` — específico de la marca
- `brands/shared/docs/<archivo>.md` — transversal a varias marcas
- Cualquier ruta `.md` que pase el usuario

Extraer del doc: tema central, datos clave, ángulos potenciales, citas o frases reutilizables. Usarlos como insumo de contexto en el brief y en las variantes. Registrar la referencia en `brief.md` como `fuente: <ruta>`.

Si los argumentos ya incluyen suficiente contexto (finalidad + audiencia + canal), usarlos directamente.

Si no, hacer solo las preguntas que no se pueden inferir de BRAND.md ni del doc fuente:
- ¿Qué tiene que lograr esta pieza? (una oración)
- ¿A qué persona le habla? (según las personas de BRAND.md — no pedir si hay una sola)
- ¿Canal y largo? (Reel 15s · landing · email · manifiesto · etc.)
- ¿Restricciones o contexto específico? (lanzamiento, fecha, evento)

No hacer preguntas cuya respuesta ya está en BRAND.md o en el doc fuente.

## Paso 5 — Generar variantes

Por defecto: **3 variantes**. Ajustar si el brief lo especifica.

Cada variante:

1. **Elegí el hook primero**: antes de escribir la variante, elegí un tipo del catálogo `hooks.md` que encaje con el ángulo. Declaralo en `hook-type:`. El hook va al inicio de la pieza, dentro de la ventana que corresponde al canal (ver tabla en `hooks.md`). Cada variante debe usar un tipo de hook distinto.

2. **Apuesta distinto**: diferente ángulo, estructura o segmento de audiencia. Tres versiones de la misma oración no cuenta como explorar.

3. **Arranca con metadata**:
   ```
   ---
   marca: <proyecto>
   audiencia: <segmento según personas de BRAND.md>
   estructura: <nombre de la estructura usada>
   angulo: <la apuesta de esta variante en una línea>
   canal: <superficie · formato · largo>
   hook-type: <tipo del catálogo en hooks.md>
   ---
   ```

4. **Pasa el checklist antes de entregar**:
   - ¿Cada palabra carga peso? (test del reescrito: sacá la palabra, si la oración sigue igual, cortala)
   - ¿Respeta el lexicón de la marca (voseo, palabras prohibidas)?
   - ¿El CTA es verbo concreto + objeto concreto?
   - ¿Le habla a un segmento sin alienar a los otros?
   - ¿Se puede leer en voz alta sin que suene a folleto?

Si una variante no pasa, reescribirla o descartarla. No entregar relleno.

## Paso 6 — Guardar

```
brands/<marca>/copy/pieces/<formato>/YYYY-MM-<slug>/
├── brief.md       ← el brief acordado (lo que se usó en el Paso 4)
├── v1.md
├── v2.md
├── v3.md
├── feedback.md    ← placeholders para cada variante; se llena en el Paso 7
├── decision.md    ← se completa en el Paso 7
└── final.md       ← plantilla lista; el usuario la edita para construir la versión final
```

Reglas de naming:
- Slug: fecha + tema corto en kebab-case (ej. `2026-06-primer-anuncio`)
- Nombres de carpeta y archivos en inglés; contenido en el idioma de la marca

**Crear `final.md` siempre en este paso**, con la estructura del formato vacía y el campo `basada-en` listo para completar. Es el documento donde el usuario construye la versión final — puede partir de una variante y editarla, o escribir desde cero. No esperar al Paso 7 para crearlo.

Plantilla base:
```
---
marca: <marca>
basada-en: (indicar variante ganadora, ej: v2)
canal: <superficie · formato · largo>
---

[estructura del formato vacía, lista para completar]
```

**Crear `feedback.md`** con un placeholder por variante generada:
```
## v1
<!-- tu feedback acá -->

## v2
<!-- tu feedback acá -->
```

## Paso 7 — Cerrar el loop

Después de entregar las variantes, preguntar:

1. **¿Cuál variante ganó?**
2. **¿Está lista la versión final en `final.md`?** — el usuario edita `final.md` directamente (ya existe desde el Paso 6). Cuando esté completo, comparar.
3. **Comparar la variante ganadora con `final.md`** — identificar qué cambió el humano y por qué. Eso es el aprendizaje real del loop.
4. **¿Algo merece quedar en guidelines?**
   - Aplica a cualquier marca → proponer actualización de `references/` de esta skill
   - Específico de esta marca → proponer actualización de `brands/<marca>/copy/guidelines/`
5. **Guardar `decision.md`** con:
   - Qué variante ganó y por qué
   - Qué cambió entre la variante y `final.md` (delta humano → patrón a aprender)
   - Qué se actualizó en guidelines (o por qué no se actualizó nada)
6. **Anotar en el changelog** correspondiente.

El loop solo mejora si se cierra. El delta entre la variante ganadora y `final.md` es la señal más valiosa: muestra qué genera sistemáticamente el agente que el humano corrige.

---

## Opción: Generar con ChatGPT en lugar de Claude

Si el usuario pide usar ChatGPT como generador de copy, el flujo es:

1. **Preparar archivos de contexto** — copiar al directorio temporal los archivos de marca relevantes (`BRAND.md`, guidelines) más los archivos de variantes existentes (para evitar repetición).
2. **Interactuar con ChatGPT** — usar la skill `chatgpt-via-cdp` para subir los archivos y enviar el prompt en el proyecto de ChatGPT de la marca.
3. **Traer la respuesta** — leer la respuesta via CDP y guardar las variantes en la estructura de carpetas habitual (`vN.md`).

**Cuándo tiene sentido:** Cuando el usuario quiere perspectiva externa, cuando se está iterando mucho y se quiere un "segundo modelo", o cuando ya hay un proyecto de ChatGPT configurado con contexto de marca.

**Proyecto de ChatGPT de ariel.ar:** `g-p-6a2f157b076c8191812c394d67b3e2fa-ariel-ar-branding-copy`

---

## Referencias de esta skill

- `references/principles.md` — principios universales (siempre cargar)
- `references/structures.md` — estructuras genéricas (siempre cargar)
- `references/brief-template.md` — guía para tomar el brief
- `references/formats/ad-script.md` — scaffold de scripts de anuncios
- `references/formats/official-statement.md` — scaffold de documentos oficiales
