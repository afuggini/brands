# DESIGN.md — Ariel Fuggini

Referencia de sistema de diseño para agentes de IA que producen artefactos visuales (páginas web, decks, social cards, UIs de apps, piezas de marketing) para **Ariel Fuggini**. Leé este archivo completo antes de generar cualquier cosa visual. La voz de marca está en `BRAND.md` — mantenelos alineados.

El sistema tiene una sola misión: **hacer que el lima actúe como señal.** Cada otra decisión (neutrales, densidad, tipografía, iconografía) existe para mantener el lima con significado. Si una decisión diluye el lima, está mal.

---

## 1. Concepto

Dos fuerzas opuestas, nunca balanceadas 50/50:

- **Sans manda** — DM Sans / Inter cargan la identidad. Calma, geometría, claro. El "vibe" — lo que se está pensando, el foco.
- **Mono decora** — JetBrains Mono solo cuando aporta información técnica (números de módulo, metadata, folios, versiones). El acento técnico. El código es un *resultado*, nunca el foco.

Si un layout funciona en sans puro, dejalo en sans puro. Agregá mono solo cuando omitirlo perdería información.

---

## 2. Color

### 2.1 Escala neutral — Tailwind **Zinc** (locked)

**Escala cruda:**

| Token | Hex | Notas |
|---|---|---|
| `--n-50` | `#FAFAFA` | — |
| `--n-100` | `#F4F4F5` | — |
| `--n-200` | `#E4E4E7` | bordes en superficies claras |
| `--n-300` | `#D4D4D8` | — |
| `--n-400` | `#A1A1AA` | — |
| `--n-500` | `#71717A` | — |
| `--n-700` | `#3F3F46` | — |
| `--n-800` | `#27272A` | — |
| `--n-900` | `#18181B` | — |
| `--n-950` | `#09090B` | — |

**Tokens semánticos (usá estos en componentes, no la escala cruda):**

| Token | Mapea a | Rol |
|---|---|---|
| `--bg` | `--n-950` | Fondo de página |
| `--surface` | `--n-900` | Cards, specimens |
| `--surface-2` | `--n-800` | Superficies elevadas |
| `--text` | `--n-100` | Texto principal sobre oscuro |
| `--text-soft` | `--n-300` | Texto secundario |
| `--text-mute` | `--n-500` | Metadata, labels mono |
| `--border` | `#A1A1AA26` | Hairline (zinc-400 @ ~15% alpha) |

Las secciones claras invierten: el bg de página se vuelve `--n-100`, el texto se vuelve `--n-950`, los bordes `--n-200`.

**No introduzcas otras familias neutrales.** Sin Slate, sin Stone, sin Gray. Zinc es la única fuente de verdad.

### 2.2 Escala lima — acento característico

| Token | Hex | Rol |
|---|---|---|
| `--lime-1` | `#F2FEC0` | Tono claro |
| `--lime-2` | `#E5FE7A` | Tono medio claro |
| `--lime-3` | `#D6FD3A` | **Tono principal** — CTAs, señal, énfasis |
| `--lime-4` | `#86B515` | Tono profundo (lime-600) |
| `--lime-5` | `#4A6310` | Tono oscuro (lime-900) |

`#D6FD3A` es el **ancla**. Cada vez que la marca necesita una sola voz a saturación plena, es este lima.

### 2.3 Colores funcionales de estado — solo UI

Rampas con base 500 de Tailwind. **Nunca aparecen en marketing, hero o titulares.** Solo en toasts, badges, banners, validación de formularios.

| Rol | Token | Familia | Base |
|---|---|---|---|
| Error | `--state-error` | Tailwind **Rose** | `#F43F5E` (rose-500) |
| Warning | `--state-warn` | Tailwind **Yellow** | `#EAB308` (yellow-500) |
| Info | `--state-info` | Tailwind **Sky** | `#0EA5E9` (sky-500) |

Cada rampa usa 50/100/300/500/700/900: tinte fondo · banner suave · texto sobre dark · token base · texto sobre light · reposo/ancla.

### 2.4 Las cinco reglas de color

1. **Un color por trabajo.** Nunca dos rojos, nunca dos limas. Cada matiz tiene una sola función.
2. **Estados sólo en UI.** Error/warn/info viven en toasts, badges, formularios. Nunca hero, titulares, marketing.
3. **El lima es la única voz a saturación plena.** Todo lo demás se mantiene apagado. Si otro color compite en saturación con el lima, ambos pierden significado.
4. **Máximo dos acentos por pantalla.** Lima + a lo sumo un color de estado. Nunca tres.
5. **Sin gradientes, sin mezclas.** Colores planos. La interrupción es por contraste, no por transición. Sin glow, sin neón.

---

## 3. Tipografía

Tres familias, tres roles, **sin solapamiento**.

### Tokens de tipografía

| Token | Familia | Rol |
|---|---|---|
| `--font-display` | DM Sans | Titulares, hero, identidad |
| `--font-body` | Inter | Cuerpo, formularios, micro-copy de UI |
| `--font-mono` | JetBrains Mono | Metadata, acentos técnicos |

### 3.1 DM Sans — Principal (`--font-display`)

- Rol: títulos, hero, cuerpo cuando está solo, firma, identidad. Toda el alma de la marca.
- Pesos disponibles: 400, 500, 600, 700, 800.
- Uso: 400 para lectura · 600 para énfasis · 700 para titulares.
- Tracking ajustado en tamaños grandes (`letter-spacing: -0.02em`).
- En headlines y frases de impacto, el `<em>` marca el fragmento de frase que completa la idea — se trata **solo con color lima, sin itálica** (`color: var(--lime-3)` sobre fondos oscuros, `var(--lime-4)` sobre claro). Fuera de headlines, `<em>` mantiene su comportamiento HTML por defecto.

### 3.2 Inter — Funcional (`--font-body`)

- Rol: copy de cuerpo, formularios, micro-copy de UI, mayormente digital.
- Pesos: 400 / 500 / 600 / 700.
- Permite que DM Sans lidere los titulares sin competir.
- Tamaño de cuerpo por defecto: 16px / line-height 1.55.

### 3.3 JetBrains Mono — Acento (`--font-mono`)

- Rol: el guiño técnico. Números de módulo, metadata, fechas, versiones, folios, labels técnicos de UI.
- Pesos: 400 / 500 / 700.
- **Cuándo sí:** "01 · concepto central", "folio 2026/047", `--lime-3`, "v2.2 · 2026 · Lime".
- **Cuándo no:** titulares, cuerpo, decoración "para parecer más tech". Si el mono es un disfraz, está mal.
- Los labels mono son típicamente en mayúscula, con letter-spacing (`text-transform: uppercase; letter-spacing: 0.12em`), pequeños (11–14px), en `--ink-mute`.

### 3.4 Mapeo elemento → tipografía

| Elemento | Familia | Peso |
|---|---|---|
| H1 · Hero | DM Sans | 700–800 |
| Frase de impacto | DM Sans + lima `<em>` | 600 |
| H2 sección | DM Sans | 600 |
| H3 subtítulo | DM Sans | 500 |
| Cuerpo principal | Inter | 400 |
| Énfasis en cuerpo | Inter | 600 |
| Números de módulo | JetBrains Mono | 700 |
| Metadata / labels técnicos | JetBrains Mono | 500 |
| Forms / micro-copy UI | Inter | 400 / 500 |

### 3.5 Escala (derivada del golden ratio)

| Paso | Tamaño | Token |
|---|---|---|
| Copy | 16 px | `--copy` |
| Subheading | 26 px | `--sub` |
| Heading | 42 px | `--h` |
| Display / Hero | 68 px | `--hero` |

Tamaños mínimos: 24 px en slides 1920×1080; 12 pt para impresión; áreas de toque de 44 px en mobile.

---

## 4. Layout

- Bg de página: `--cream` (zinc-950). Las secciones claras invierten a `--n-100` con texto `--n-950`.
- Contenedor: `.wrap` — `max-width: 1280px`, padding horizontal `clamp(24px, 6vw, 96px)`.
- Padding vertical de sección: `clamp(72px, 12vw, 160px)`.
- Patrón de dos columnas (`.two`): columna meta izquierda (label en mono, helper apagado opcional) + columna de contenido derecha. Ambas columnas alineadas arriba.

### 4.1 Espaciado & ritmo

Siempre preferí flex/grid con `gap:` por sobre hermanos inline o margins por elemento. Reservá el flow inline para corridas de texto (`<a>`, `<strong>`, `<em>` dentro de una oración).

---

## 5. Componentes

### 5.1 Botones

Todos los botones: `font-family: JetBrains Mono`, peso 500, `border-radius: 4px`.

| Variante | bg | borde | texto |
|---|---|---|---|
| Primary | `--lime-3` | — | `--n-950` |
| Secondary | transparente | 1px `--lime-3` | `--lime-3` |
| Dark (sobre claro) | `--n-900` | — | `--n-100` |

### 5.2 Cards

- Fondo `--n-900` o `--n-800`.
- Borde 1px `--rule`.
- `border-radius: 4px`.
- Acento opcional de borde superior (línea lima).
- Número de módulo arriba a la izquierda en JetBrains Mono 700, `--lime-3`.

### 5.3 Reglas / separadores

`border-top: 1px solid var(--rule)` (#A1A1AA26). **Estructural, no decorativo.** Si una regla llama la atención, está mal.

### 5.4 UI de estado funcional

- **Toast:** superficie oscura, borde 1px en color de estado @ 40% alpha, barra izquierda de 4px en color de estado sólido, label mono.
- **Badge:** `bg: state-color @ 10%`, `border: state-color @ 40%`, `color: state-color-300`, indicador de punto a la izquierda.
- **Banner inline:** `bg: state-color @ 6%`, `border: state-color @ 40%`, ícono mono en color de estado sólido.
- **Error de formulario:** el borde del input se vuelve `--state-error`, el helper text en tono `--state-error`.

Todos los componentes de estado: mismo padding, mismo radius (4px). Solo cambia el matiz.

---

## 6. Iconografía

- Monoline geométrica, viewBox `64×64`.
- `stroke: 1.25px`, `stroke-linecap: square`, `stroke-linejoin: miter`.
- `fill: none` — siempre. Nunca sólido.
- Ángulos de 90° y 45° solamente — sin curvas libres.
- Snap a grilla de 4px, padding mínimo de 4px.
- Color de stroke por defecto: `currentColor`, típicamente `--lime-2`.

Los íconos son **funcionales, no ilustrativos.** Extienden el sistema de líneas, no lo decoran.

---

## 7. Restricción lingüística y visual — lo que NO somos

"No"s tajantes. Cada uno carga peso.

1. **Mono como protagonista.** Todo-monospace, headlines técnicos, UI seca pierde el alma.
2. **Orgánico decorativo.** No swashes, no florituras, no curvas sin razón.
3. **Dark mode por default.** Los fondos oscuros aparecen con intención, no como estética por defecto.
4. **Glow y neón.** Colores planos siempre.
5. **Estética hacker / Web3.** Sin matrix, sin glitch, sin estética cripto.
6. **Símbolos de relleno.** Sin patrones flotantes `/ {} //` sin función.
7. **Stock photos.** La gente sonriendo a pantallas no existe en este sistema.
8. **Más de un acento por pantalla.** El lima pierde fuerza si compite con otro color saturado.
9. **Estados en marketing.** Rose, yellow, sky nunca aparecen en hero o titulares.

Si no estás seguro de si una adición es necesaria, **dejala afuera**.

---

## 8. Higiene de assets para agentes de IA

- **Placeholders > malos intentos.** Cuando no tengas un ícono o imagen, dibujá un placeholder (una caja etiquetada). No inventes ilustraciones.
- **Sin emoji** a menos que el sistema de diseño los pida explícitamente. No los pide.
- **Sin inventar colores.** Si algo necesita un tono que no está en este doc, casi siempre está mal — encontrá la forma de expresarlo en zinc + lima primero.
- **Sin contenido de relleno.** Cada sección, cada palabra, cada chip se gana su lugar. Si un slide se siente vacío, resolvelo con composición, no con contenido.
