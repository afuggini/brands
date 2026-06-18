---
name: copywrite
description: Genera piezas de copy para cualquier marca del workspace (ariel.ar, cursodevibecoding, u otras). Usá esta skill siempre que el usuario pida crear un anuncio, script de video o reel, declaración oficial, texto de landing, post, email, manifiesto, o cualquier pieza de comunicación escrita — incluso si no lo llama explícitamente "copy". También usá esta skill cuando el usuario pida idear, brainstormear o explorar temas o conceptos para contenido (blogs, artículos, newsletters). La skill carga automáticamente la voz de la marca correcta, genera variantes genuinamente distintas con sus ángulos declarados, guarda los archivos en el path correcto y cierra el loop de aprendizaje.
---

# Copy Generator

Genera copy para marcas del workspace siguiendo un pipeline de tres modos que pueden usarse juntos o por separado:

- **Modo Ideación** — explorar temas y conceptos antes de comprometerse con una pieza
- **Modo Plan** — definir el ángulo y la estructura de una pieza concreta antes de escribir
- **Modo Escritura** — generar variantes, iterar y cerrar el loop

No toda ideación termina en contenido. No todo contenido requiere ideación previa. Cada modo puede invocarse de forma independiente.

---

## Modo Ideación

**Cuándo activar:** el usuario pide brainstormear temas, explorar conceptos, generar ideas de artículos, o el formato es `blog`/`article`/`newsletter` y no hay un tema definido todavía.

### I-1 — Cargar la marca

Leer:
1. `brands/<marca>/brand/BRAND.md`
2. Todos los archivos en `brands/<marca>/copy/guidelines/`
3. Si existen: `brands/<marca>/copy/guidelines/ideation.md` — guidelines específicas de ideación para esta marca (qué tipos de ángulos funcionan, qué se descartó antes)

### I-2 — Tomar el brief de ideación

Preguntar solo lo que no se puede inferir de BRAND.md o del contexto:
- ¿Qué área temática o problema querés explorar? (puede ser amplio)
- ¿Para qué audiencia principal?
- ¿Alguna restricción de formato o canal?

Si el usuario ya dio suficiente contexto en `$ARGUMENTS`, usarlo directamente.

### I-3 — Generar conceptos

Por defecto: **8–10 conceptos**. Ajustar si el brief lo especifica.

Cada concepto en el formato:
```
## concept-N
title: <título concreto y específico>
angle: <la apuesta de este artículo en una oración — qué argumenta, no qué cubre>
reader: <a qué persona le habla y qué cree cuando llega>
```

Reglas:
- Cada concepto debe apostar distinto: ángulo diferente, persona diferente, o estructura diferente
- El título debe ser suficientemente específico para que el lector sepa exactamente qué va a leer
- El ángulo no es el tema — es la tesis. "Por qué el 41% de los bags fallan en el mismo punto" es un tema. "Las fallas de transfer son un problema de información, no de logística" es un ángulo.

### I-4 — Guardar la sesión

```
brands/<marca>/copy/ideation/YYYY-MM-<slug>/
├── session.md     ← brief que produjo estos conceptos
├── concepts.md    ← todos los conceptos generados
├── feedback.md    ← placeholder por concepto; el usuario lo completa
└── decision.md    ← se completa al cerrar el loop
```

**`session.md`:**
```
---
marca: <marca>
fecha: YYYY-MM-DD
tema: <área explorada>
audiencia: <persona principal>
docs-fuente: <lista de docs leídos, si aplica>
---

<brief de una oración>
```

**`feedback.md`** con placeholder por concepto:
```
## concept-1
<!-- tu feedback acá -->

## concept-2
<!-- tu feedback acá -->
```

**`decision.md`** — plantilla vacía lista para completar en I-5:
```
## Concepto elegido
<!-- indicar concept-N, o "ninguno" si la sesión no derivó en contenido -->

## Por qué ganó
<!-- -->

## Por qué se descartaron los otros
<!-- uno por uno, si aplica -->

## Aprendizajes para guidelines
<!-- patrones en los rechazos o en lo que funcionó -->

## Se actualizó guidelines
<!-- sí/no — qué se cambió -->
```

### I-5 — Cerrar el loop de ideación

Después de que el usuario revise los conceptos:

1. **¿Cuál concepto avanza?** (puede ser ninguno — eso es válido)
2. **¿Por qué se descartaron los otros?** — identificar patrones en los rechazos
3. **¿Algo merece quedar en guidelines de ideación?**
   - Ejemplo: *"Para BagMonitor, los ángulos funcionan mejor cuando están anclados a un dato específico, no a un problema general"*
   - Si sí → crear o actualizar `brands/<marca>/copy/guidelines/ideation.md`
4. **Completar `decision.md`**

Si un concepto avanza → preguntar si el usuario quiere continuar con **Modo Plan** o ir directo a escritura.

---

## Modo Plan

**Cuándo activar:** hay un concepto o tema definido (venga de ideación o no) y el usuario quiere planificar antes de escribir. Especialmente útil para formatos largos (blog, whitepaper, landing page).

### P-1 — Cargar contexto

Si se viene de Modo Ideación, el contexto de marca ya está cargado. Si no:
1. `brands/<marca>/brand/BRAND.md`
2. `brands/<marca>/copy/guidelines/`

Leer también el concepto elegido de `ideation/` si existe.

### P-2 — Generar el plan

Producir un único `plan.md` con:

```
---
marca: <marca>
basado-en: <concept-N de ideation/YYYY-MM-slug, o "direct" si no vino de ideación>
---

## goal
Qué debe sentir / saber / hacer el lector al terminar (una oración)

## reader
Qué persona, qué cree cuando llega, qué objeción tiene

## angle
La única apuesta de esta pieza (lo que argumenta, no lo que cubre)

## structure
1. <beat 1>
2. <beat 2>
3. <beat 3>
4. <beat 4>
5. <beat 5>

## hook-type
Tipo de gancho candidato del catálogo (ver references/hooks.md)
```

Presentar el plan al usuario. Ajustar si pide cambios. No avanzar a escritura sin aprobación explícita.

### P-3 — Guardar el plan

El plan vive en la carpeta de la pieza (que se crea en este paso si no existe):

```
brands/<marca>/copy/pieces/<formato>/YYYY-MM-<slug>/
└── plan.md
```

Cuando el usuario aprueba el plan → continuar con **Modo Escritura** desde Paso 4 (el brief puede tomarse del plan; Pasos 1–3 se omiten si el contexto ya está cargado).

---

## Modo Escritura

**Cuándo activar:** hay un brief claro (con o sin plan previo) y el usuario quiere generar variantes.

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

- `references/principles.md` — principios universales (siempre cargar en Modo Escritura)
- `references/structures.md` — estructuras genéricas (siempre cargar en Modo Escritura)
- `references/hooks.md` — catálogo de ganchos (cargar en Modo Plan y Modo Escritura)
- `references/brief-template.md` — guía para tomar el brief
- `references/formats/ad-script.md` — scaffold de scripts de anuncios
- `references/formats/official-statement.md` — scaffold de documentos oficiales

## Estructura de carpetas por modo

```
brands/<marca>/copy/
├── guidelines/
│   ├── README.md
│   ├── writing-rules.md
│   └── ideation.md          ← guidelines aprendidas de sesiones de ideación (se crea cuando hay algo que guardar)
│
├── ideation/                 ← sesiones de ideación (no todas derivan en piezas)
│   └── YYYY-MM-<slug>/
│       ├── session.md
│       ├── concepts.md
│       ├── feedback.md
│       └── decision.md
│
└── pieces/                   ← piezas que sí se desarrollaron
    └── <formato>/
        └── YYYY-MM-<slug>/
            ├── plan.md       ← presente si pasó por Modo Plan
            ├── brief.md
            ├── v1.md / v2.md / v3.md
            ├── feedback.md
            ├── decision.md
            └── final.md
```
