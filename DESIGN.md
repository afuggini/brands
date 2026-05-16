# DESIGN.md — Ariel Fuggini

Design system reference for AI agents producing visual artifacts (web pages, decks, social cards, app UIs, marketing pieces) for **Ariel Fuggini**. Consume this file in full before generating anything visual. The brand voice is in `BRAND.md` — keep them aligned.

The system has one job: **make the lime act as a signal.** Every other choice (neutrals, density, type, iconography) exists to keep the lime meaningful. If a decision dilutes the lime, it is wrong.

---

## 1. Concept

Two opposed forces, never balanced 50/50:

- **Sans rules** — DM Sans / Inter carry the identity. Calm, geometric, claro. The "vibe" — what is being thought, the focus.
- **Mono decorates** — JetBrains Mono only when it adds technical information (module numbers, metadata, folios, versions). The technical accent. Code is a *result*, never the focus.

If a layout works in pure sans, leave it pure sans. Add mono only when omitting it would lose information.

---

## 2. Color

### 2.1 Neutral scale — Tailwind **Zinc** (locked)

**Raw scale:**

| Token | Hex | Notes |
|---|---|---|
| `--n-50` | `#FAFAFA` | — |
| `--n-100` | `#F4F4F5` | — |
| `--n-200` | `#E4E4E7` | borders on light surfaces |
| `--n-300` | `#D4D4D8` | — |
| `--n-400` | `#A1A1AA` | — |
| `--n-500` | `#71717A` | — |
| `--n-700` | `#3F3F46` | — |
| `--n-800` | `#27272A` | — |
| `--n-900` | `#18181B` | — |
| `--n-950` | `#09090B` | — |

**Semantic tokens (use these in components, not the raw scale):**

| Token | Maps to | Role |
|---|---|---|
| `--bg` | `--n-950` | Page background |
| `--surface` | `--n-900` | Cards, specimens |
| `--surface-2` | `--n-800` | Raised surfaces |
| `--text` | `--n-100` | Primary text on dark |
| `--text-soft` | `--n-300` | Secondary text |
| `--text-mute` | `--n-500` | Metadata, mono labels |
| `--border` | `#A1A1AA26` | Hairline (zinc-400 @ ~15% alpha) |

Light sections invert: page bg becomes `--n-100`, text becomes `--n-950`, borders `--n-200`.

**Do not introduce other neutral families.** No Slate, no Stone, no Gray. Zinc is the single source of truth.

### 2.2 Lime scale — signature accent

| Token | Hex | Role |
|---|---|---|
| `--lime-1` | `#F2FEC0` | Tono claro |
| `--lime-2` | `#E5FE7A` | Tono medio claro |
| `--lime-3` | `#D6FD3A` | **Tono principal** — CTAs, signal, em |
| `--lime-4` | `#86B515` | Tono profundo (lime-600) |
| `--lime-5` | `#4A6310` | Tono oscuro (lime-900) |

`#D6FD3A` is the **anchor**. Any time the brand needs a single voice at full saturation, it is this lime.

### 2.3 Functional state colors — UI only

Tailwind 500-base ramps. **Never appear in marketing, hero, or headlines.** Only in toasts, badges, banners, form validation.

| Role | Token | Family | Base |
|---|---|---|---|
| Error | `--state-error` | Tailwind **Rose** | `#F43F5E` (rose-500) |
| Warning | `--state-warn` | Tailwind **Yellow** | `#EAB308` (yellow-500) |
| Info | `--state-info` | Tailwind **Sky** | `#0EA5E9` (sky-500) |

Each ramp uses 50/100/300/500/700/900: tinte fondo · banner suave · texto sobre dark · token base · texto sobre light · reposo/ancla.

### 2.4 The five color rules

1. **Un color por trabajo.** Never two reds, never two limes. Each hue has a single function.
2. **Estados sólo en UI.** Error/warn/info live in toasts, badges, forms. Never hero, headlines, marketing.
3. **El lima es la única voz a saturación plena.** Everything else stays muted. If another color competes in saturation with the lime, both lose meaning.
4. **Máximo dos acentos por pantalla.** Lime + at most one state color. Never three.
5. **Sin gradientes, sin mezclas.** Colores planos. Interruption is by contrast, not transition. No glow, no neon.

---

## 3. Typography

Three families, three roles, **no overlap**.

### Font tokens

| Token | Family | Role |
|---|---|---|
| `--font-display` | DM Sans | Headlines, hero, identity |
| `--font-body` | Inter | Body, forms, UI micro-copy |
| `--font-mono` | JetBrains Mono | Metadata, technical accents |

### 3.1 DM Sans — Principal (`--font-display`)

- Role: titles, hero, body when alone, signature, identity. The whole soul of the brand.
- Weights available: 400, 500, 600, 700, 800 (each with italic).
- Use: 400 for reading · 600 for emphasis · 700 for headlines.
- Tracking tightened on large sizes (`letter-spacing: -0.02em`).
- Italic carries semantic weight — used on the lime-colored phrase fragment that completes a thought (`<em>` styled with `color: var(--lime-4)` on dark, `var(--lime-3)` on dark backgrounds).

### 3.2 Inter — Funcional (`--font-body`)

- Role: body copy, forms, UI micro-copy, mostly digital.
- Weights: 400 / 500 / 600 / 700.
- Lets DM Sans lead headlines without competing.
- Default body size: 16px / line-height 1.55.

### 3.3 JetBrains Mono — Acento (`--font-mono`)

- Role: the technical wink. Module numbers, metadata, dates, versions, folios, technical UI labels.
- Weights: 400 / 500 / 700.
- **When yes:** "01 · concepto central", "folio 2026/047", `--lime-3`, "v2.2 · 2026 · Lime".
- **When no:** headlines, body, decoration "to look more tech". If the mono is a costume, it's wrong.
- Mono labels are typically uppercase, letter-spaced (`text-transform: uppercase; letter-spacing: 0.12em`), small (11–14px), in `--ink-mute`.

### 3.4 Element → Type mapping

| Element | Family | Weight |
|---|---|---|
| H1 · Hero | DM Sans | 700–800 |
| Frase de impacto | DM Sans + lime `<em>` | 600 |
| H2 sección | DM Sans | 600 |
| H3 subtítulo | DM Sans | 500 |
| Cuerpo principal | Inter | 400 |
| Énfasis en cuerpo | Inter | 600 |
| Números de módulo | JetBrains Mono | 700 |
| Metadata / labels técnicos | JetBrains Mono | 500 |
| Forms / micro-copy UI | Inter | 400 / 500 |

### 3.5 Scale (golden-ratio derived)

| Step | Size | Token |
|---|---|---|
| Copy | 16 px | `--copy` |
| Subheading | 26 px | `--sub` |
| Heading | 42 px | `--h` |
| Display / Hero | 68 px | `--hero` |

Minimum sizes: 24 px on 1920×1080 slides; 12 pt for print; 44 px hit targets on mobile.

---

## 4. Layout

- Page bg: `--cream` (zinc-950). Light sections invert to `--n-100` with `--n-950` text.
- Container: `.wrap` — `max-width: 1280px`, horizontal padding `clamp(24px, 6vw, 96px)`.
- Section vertical padding: `clamp(72px, 12vw, 160px)`.
- Two-column pattern (`.two`): left meta column (label in mono, optional muted helper) + right content column. Both columns top-aligned.

### 4.1 Spacing & rhythm

Always prefer flex/grid with `gap:` over inline siblings or per-element margins. Reserve inline flow for runs of text (`<a>`, `<strong>`, `<em>` inside a sentence).

---

## 5. Components

### 5.1 Buttons

All buttons: `font-family: JetBrains Mono`, weight 500, `border-radius: 4px`.

| Variant | bg | border | text |
|---|---|---|---|
| Primary | `--lime-3` | — | `--n-950` |
| Secondary | transparent | 1px `--lime-3` | `--lime-3` |
| Dark (sobre claro) | `--n-900` | — | `--n-100` |

### 5.2 Cards

- Background `--n-900` or `--n-800`.
- Border 1px `--rule`.
- `border-radius: 4px`.
- Optional top border accent (lime line).
- Module number top-left in JetBrains Mono 700, `--lime-3`.

### 5.3 Rules / separators

`border-top: 1px solid var(--rule)` (#A1A1AA26). **Structural, not decorative.** If a rule calls attention, it's wrong.

### 5.4 Functional state UI

- **Toast:** dark surface, 1px border in state color @ 40% alpha, 4px left bar in solid state color, mono label.
- **Badge:** `bg: state-color @ 10%`, `border: state-color @ 40%`, `color: state-color-300`, dot indicator on the left.
- **Banner inline:** `bg: state-color @ 6%`, `border: state-color @ 40%`, mono icon in solid state color.
- **Form error:** input border becomes `--state-error`, helper text in `--state-error` shade.

All state components: same padding, same radius (4px). Only the hue changes.

---

## 6. Iconography

- Monoline geometric, `64×64` viewBox.
- `stroke: 1.25px`, `stroke-linecap: square`, `stroke-linejoin: miter`.
- `fill: none` — always. Never solid.
- Angles 90° and 45° only — no free curves.
- Snap to 4px grid, minimum 4px padding.
- Default stroke color: `currentColor`, typically `--lime-2`.

Icons are **functional, not illustrative.** They extend the line system, not decorate it.

---

## 7. Linguistic & visual restraint — what we are NOT

Hard "no"s. Each is load-bearing.

1. **Mono como protagonista.** Todo-monospace, headlines técnicos, UI seca pierde el alma.
2. **Orgánico decorativo.** No swashes, no florituras, no curves without reason.
3. **Dark mode por default.** Dark backgrounds appear with intention, not as a fallback aesthetic.
4. **Glow y neón.** Flat colors always.
5. **Estética hacker / Web3.** No matrix, no glitch, no crypto-aesthetic.
6. **Símbolos de relleno.** No floating `/ {} //` patterns without function.
7. **Stock photos.** People smiling at screens does not exist in this system.
8. **Más de un acento por pantalla.** Lime loses force if it competes with another saturated color.
9. **Estados en marketing.** Rose, yellow, sky never appear in hero or headlines.

If unsure whether an addition is needed, **leave it out**.

---

## 8. Asset hygiene for AI agents

- **Placeholders > bad attempts.** When you don't have an icon or image, draw a placeholder (a labeled box). Do not invent illustrations.
- **No emoji** unless the design system explicitly calls for them. It doesn't.
- **No inventing colors.** If something needs a hue not in this doc, it's almost always wrong — find a way to express it in zinc + lime first.
- **No filler content.** Every section, every word, every chip earns its place. If a slide feels empty, solve it with composition, not content.
