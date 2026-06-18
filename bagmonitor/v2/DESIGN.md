# DESIGN.md — BagMonitor v2

Reference for any AI agent or designer producing visual artifacts for BagMonitor in the v2 system — website, product UI, email, presentations, social. Read in full before producing any visual output. Strategy and voice live in `BRAND.md`; the full brand strategy (pillars, hard-no's, personas) is in `../brand/BRAND.md`.

This document **supersedes** `../brand/DESIGN.md`. The old dark/indigo system is retired.

---

## 1. Concept

The v2 visual language is **Swiss editorial × modern SaaS** — bright, calm, and precise. The feeling is critical infrastructure made understandable. Not a dashboard; not a startup. Something closer to an airport operations system that happens to be beautiful.

Three anchors:

- **GT America leads identity.** Light weight for display; Regular for headings and body; Mono for data. One family throughout — no pairing needed.
- **Warm stone is the canvas.** Off-white pages, warm gray surfaces, near-black warm ink. No cold grays. No pure black.
- **Lime is rare.** `#D6F36D` appears as a period mark after a headline, a live-status dot, a selected-row indicator. Never as a fill, never dominant, never on large text. Its rarity is the point.

### The trace

The live baggage "trace" — a bag's journey rendered as a distributed-trace waterfall (BCN → LHR → JFK), with spans drawing in, a traveling dot, and a scan line — is the brand's **signature visual device**. It functions as the hero element on the marketing site and recurs as a motif (section dividers, loading states, empty states). It is what makes BagMonitor's brand feel distinct from every SaaS dashboard cliché. Keep it.

### Resolved design decisions

| Question | Decision | Reason |
|---|---|---|
| Dark mode | **Kept** | Light is the default/marketing surface; dark is supported for product UI. The guidelines' "bright, not dark" applies to the marketing default, not a ban on dark product themes. |
| Grays | **Warm stone ramp + near-black warm ink** | Cold/neutral grays feel tech-generic. Warm stone reads premium and slightly editorial. Ink is `#1C1917`, never pure `#000`. |
| Hero visual | **Trace kept** | Photography is used in supporting sections; the trace is the unique brand device for the hero. |
| Grid lines | **Lightened** | Swiss structure is maintained, but fewer rules — dividers and baseline grid only, not full cell-borders around every number. The interface should disappear. |

---

## 2. Logo

### Mark (v2 — open for confirmation)

The v2 preview mark is a solid near-black square with a diagonal arrow motif — minimal, architectural, typographically consistent with GT America's geometry. The old indigo-gradient shield from `../brand/DESIGN.md` is retired.

> **Open item:** The v2 logo mark has not been formally locked. The current preview mark is a placeholder that fits the system; confirm before using in production materials.

### Wordmark

Set in **GT America, weight 400 (Regular)**, sentence case: `BagMonitor`

Color: `--color-ink` (`#1C1917`) on light backgrounds; `--color-paper` (`#F7F6F3`) on dark.

### Lockup

Mark sits to the left of the wordmark, vertically centered. Minimum clearspace: `1×` mark height on all sides.

### Backgrounds

| Background | Treatment |
|---|---|
| Light / paper | Ink mark + ink wordmark |
| Dark | Paper mark + paper wordmark |
| Photography | White mark + white wordmark on a warm-stone scrim |

---

## 3. Color

### 3.1 Stone ramp (full scale)

| Token | Hex | OKLCH (approx) |
|---|---|---|
| Stone 50 | `#FAFAF9` | `L 0.98` |
| Stone 100 | `#F5F5F4` | `L 0.96` |
| Stone 200 | `#E7E5E4` | `L 0.91` |
| Stone 300 | `#D6D3D1` | `L 0.84` |
| Stone 400 | `#A8A29E` | `L 0.67` |
| Stone 500 | `#78716C` | `L 0.51` |
| Stone 600 | `#57534E` | `L 0.39` |
| Stone 700 | `#44403C` | `L 0.31` |
| Stone 800 | `#292524` | `L 0.20` |
| Stone 900 | `#1C1917` | `L 0.14` |
| Stone 950 | `#0C0A09` | `L 0.08` |

Reference tone: OKLCH(55.3% 0.013 58.071) — this is approximately Stone 500. The hue is warm (toward yellow-brown), never cold.

### 3.2 Semantic role tokens

These are the tokens used in code. Light mode defaults; dark mode flips their values (see §3.4).

| Token | Light value | Role |
|---|---|---|
| `--color-paper` | `#F7F6F3` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, panels, elevated surfaces |
| `--color-ink` | `#1C1917` | Headings, primary text (near-black, warm) |
| `--color-body` | `#44403C` | Body copy (Stone 700) |
| `--color-muted` | `#78716C` | Labels, captions, secondary text (Stone 500) |
| `--color-line` | `#E7E5E4` | Dividers, hairlines (Stone 200) |
| `--color-line-strong` | `#D6D3D1` | Stronger borders (Stone 300) |
| `--color-btn` | `#1C1917` | Primary button background |
| `--color-btn-fg` | `#F7F6F3` | Primary button text |
| `--color-inv-bg` | `#1C1917` | Inverted statement block background |
| `--color-inv-text` | `#F7F6F3` | Inverted block heading |
| `--color-inv-muted` | `#A8A29E` | Inverted block body text |
| `--color-inv-border` | `#292524` | Inverted block border |
| `--color-inv-accent` | `#D6F36D` | Inverted block accent (lime on dark) |

### 3.3 Accent — BagMonitor Lime

| Token | Value |
|---|---|
| `--color-lime` | `#D6F36D` |
| `--color-ok` | `#5E7D14` (lime dark, for text on light) |
| `--color-risk` | `#B07A1E` (amber, for text on light) |
| `--color-alert` | `#9A3B2E` (muted red, for text on light) |

**Lime usage rules:**
- The "period" after a display headline or large number
- Live-status dot (8px, pulsing)
- Active/selected row indicator
- Key metric highlight in a data strip
- The accent inside the inverted statement block (dark surface)

**Never:**
- As a dominant fill or background
- As body or heading text on a light surface (fails contrast)
- In marketing imagery or decorative areas
- On more than ~10% of any screen

### 3.4 Status system

| State | Color | Token |
|---|---|---|
| Normal / neutral | Stone gray | `--color-muted` |
| Active / live / OK | Lime | `--color-ok` (text) / `--color-lime` (dot) |
| Warning / at risk | Soft amber | `--color-risk` |
| Critical / alert | Muted red | `--color-alert` |

### 3.5 Dark mode token flip

In dark mode, the same semantic tokens are overridden. All utilities automatically re-theme.

| Token | Dark value |
|---|---|
| `--color-paper` | `#1C1917` |
| `--color-surface` | `#292524` |
| `--color-ink` | `#F5F5F4` |
| `--color-body` | `#D6D3D1` |
| `--color-muted` | `#A8A29E` |
| `--color-line` | `#292524` |
| `--color-line-strong` | `#44403C` |
| `--color-btn` | `#D6F36D` |
| `--color-btn-fg` | `#1C1917` |
| `--color-inv-bg` | `#F7F6F3` |
| `--color-inv-text` | `#1C1917` |
| `--color-inv-muted` | `#57534E` |
| `--color-inv-border` | `#E7E5E4` |
| `--color-inv-accent` | `#5E7D14` |
| `--color-ok` | `#C2E85A` |
| `--color-risk` | `#E2B85A` |
| `--color-alert` | `#E08A7E` |

### 3.6 Tailwind v4 `@theme` block

This is the normative, copy-paste-ready token layer for `apps/bagmonitor/src/app/globals.css`:

```css
@theme {
  /* Fonts */
  --font-sans: "GT America", "Archivo", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "GT America Mono", "Geist Mono", ui-monospace, monospace;

  /* Stone ramp */
  --color-stone-50:  #FAFAF9;
  --color-stone-100: #F5F5F4;
  --color-stone-200: #E7E5E4;
  --color-stone-300: #D6D3D1;
  --color-stone-400: #A8A29E;
  --color-stone-500: #78716C;
  --color-stone-600: #57534E;
  --color-stone-700: #44403C;
  --color-stone-800: #292524;
  --color-stone-900: #1C1917;
  --color-stone-950: #0C0A09;

  /* Accent */
  --color-lime: #D6F36D;

  /* Semantic role tokens — light defaults */
  --color-paper:        #F7F6F3;
  --color-surface:      #FFFFFF;
  --color-ink:          #1C1917;
  --color-body:         #44403C;
  --color-muted:        #78716C;
  --color-line:         #E7E5E4;
  --color-line-strong:  #D6D3D1;
  --color-btn:          #1C1917;
  --color-btn-fg:       #F7F6F3;
  --color-inv-bg:       #1C1917;
  --color-inv-text:     #F7F6F3;
  --color-inv-muted:    #A8A29E;
  --color-inv-border:   #292524;
  --color-inv-accent:   #D6F36D;

  /* Status */
  --color-ok:    #5E7D14;
  --color-risk:  #B07A1E;
  --color-alert: #9A3B2E;

  /* Type sizes */
  --text-display: clamp(2.75rem, 7vw, 5.25rem);   /* line-height: 1.04, letter-spacing: -0.012em */
  --text-h2:      clamp(1.75rem, 3.5vw, 2.75rem);
  --text-h3:      1.25rem;
  --text-stat:    clamp(2.25rem, 4vw, 3.25rem);
  --text-body:    1rem;
  --text-label:   0.8125rem;
  --text-caption: 0.75rem;
  --text-mono:    0.875rem;

  /* Radii */
  --radius-card: 10px;
  --radius-btn:  6px;
  --radius-chip: 9999px;
}

/* Dark mode — flip semantic tokens */
html[data-mode="dark"] {
  --color-paper:       #1C1917;
  --color-surface:     #292524;
  --color-ink:         #F5F5F4;
  --color-body:        #D6D3D1;
  --color-muted:       #A8A29E;
  --color-line:        #292524;
  --color-line-strong: #44403C;
  --color-btn:         #D6F36D;
  --color-btn-fg:      #1C1917;
  --color-inv-bg:      #F7F6F3;
  --color-inv-text:    #1C1917;
  --color-inv-muted:   #57534E;
  --color-inv-border:  #E7E5E4;
  --color-inv-accent:  #5E7D14;
  --color-ok:          #C2E85A;
  --color-risk:        #E2B85A;
  --color-alert:       #E08A7E;
}
```

### 3.7 Color rules

1. **No pure black.** Ink is `#1C1917`. Background is `#F7F6F3`. Neither endpoint is `#000` or `#FFFFFF`.
2. **No cold/neutral grays.** Everything tints warm (toward Stone hue).
3. **Lime is earned.** If it appears in more than 3–4 places on a screen, pull it back.
4. **Body text contrast floor:** `--color-body` (`#44403C`) on `--color-paper` (`#F7F6F3`) passes WCAG AA (≥4.5:1). Do not use `--color-muted` for prose sentences.
5. **Status colors are operational, not decorative.** Lime ≠ "success" for general UI; it means *live* or *active* in the baggage context.

---

## 4. Typography

### Family

**GT America** (Grilli Type) — variable font, licensed. One family throughout. No pairing.

| Role | Weight | Notes |
|---|---|---|
| Display / hero H1 | 300 (Light) | The editorial signal — large, airy, confident |
| H2 / H3 | 400 (Regular) | Clean and structural |
| Body | 400 (Regular) | Same weight as headings — the system reads as one voice |
| Data / labels / IDs | GT America Mono 400 | Flight numbers, timestamps, metrics, telemetry |

**Fallback:** Archivo (Google Fonts free) — geometric sans, acceptable stand-in when GT America files are unavailable.

### Font loading

```css
@font-face {
  font-family: "GT America";
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  src: url("./fonts/GT America VF/GT-America-Intl-VF_0.ttf") format("truetype-variations");
}
@font-face {
  font-family: "GT America";
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
  src: url("./fonts/GT America VF/GT-America-Intl-VF-Italic-VF.ttf") format("truetype-variations");
}
@font-face {
  font-family: "GT America Mono";
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  src: url("./fonts/GT America VF/GT-America-Intl-VF-Mono-VF_0.ttf") format("truetype-variations");
}
```

> GT America is a commercial, licensed typeface. Do not redistribute the font files or commit them to any public repo. For production, subset to `.woff2` (the raw VF `.ttf` is ~1.5 MB). See `fonts/README.md`.

### Type scale

| Role | Size | Weight | Line height | Letter-spacing |
|---|---|---|---|---|
| Display / Hero H1 | `clamp(2.75rem, 7vw, 5.25rem)` | 300 | 1.04 | −0.012em |
| Section H2 | `clamp(1.75rem, 3.5vw, 2.75rem)` | 400 | 1.15 | −0.010em |
| Card H3 | `1.25rem` (20px) | 400 | 1.3 | 0 |
| Stat / large number | `clamp(2.25rem, 4vw, 3.25rem)` | 300 | 1.0 | −0.014em |
| Body (default) | `1rem` (16px) | 400 | 1.65 | 0 |
| Body large / lede | `1.125rem` (18px) | 400 | 1.6 | 0 |
| Label / eyebrow | `0.8125rem` (13px) | 400–500 | 1.2 | +0.08em |
| Caption / meta | `0.75rem` (12px) | 400 | 1.4 | 0 |
| Mono / telemetry | `0.875rem` (14px) | 400 | 1.5 | 0 |

### The 16px paragraph floor

Running prose is **never smaller than 16px (`1rem`)**. Sub-16px is for labels, eyebrows, badges, captions, and data-chrome — elements that are read at a glance, not as sentences. If you can read it as a full sentence, it is ≥16px.

### The lime period

The soft lime `#D6F36D` placed as a period mark (`.`) after a display headline or large number is the brand's typographic signature. It signals precision and serves as the accent's primary role. Use it in one or two places per page — never scatter it.

---

## 5. Layout & Spacing

### Philosophy

Layouts breathe. Large margins, generous gutters, asymmetric compositions. Swiss editorial structure means the grid is strong but the content isn't imprisoned by it — white space is content.

### Grid

| Breakpoint | Max content width | Horizontal padding |
|---|---|---|
| Mobile (`< 640px`) | 100% | 24px (1.5rem) |
| Tablet (`640–1023px`) | 100% | 32px (2rem) |
| Desktop (`≥ 1024px`) | 1280px | 48px (3rem) |

### Section rhythm

| Context | Vertical padding |
|---|---|
| Hero | `pt-24 pb-32` (96px / 128px) |
| Full sections | `clamp(5rem, 8vw, 7rem)` block (80–112px) |
| Emphasis / CTA section | One step larger |
| Component gap | `2rem`–`3rem` |

One rhythm value per section type — no per-section improvisation.

### Grid lines (lightened)

The Swiss grid is structural, not decorative. Use:
- Thin hairline dividers between sections and metric items (`1px solid --color-line`)
- A baseline grid to align type
- No full cell borders enclosing every number or card in a grid
- Borders on components only when they carry functional meaning (card boundary, table row, input focus)

The interface should disappear. Data and hierarchy should remain.

### Max line length

Body prose: 65–75ch. Use `text-wrap: balance` on H1–H3 for even line lengths.

---

## 6. Components

### Buttons

**Primary (ink)**

```
Background:    --color-btn (#1C1917)
Text:          --color-btn-fg (#F7F6F3), GT America 400, 15px
Border-radius: --radius-btn (6px)
Padding:       10px 20px (sm) · 12px 28px (md) · 14px 36px (lg)
Arrow:         →  appended, same color
No shadow.     Elevation comes from the ink fill contrasting the stone surface.
```

**Secondary (outline)**

```
Background:    transparent
Border:        1px solid --color-line-strong
Text:          --color-ink
Hover border:  --color-ink
Border-radius: --radius-btn
No shadow.
```

**Tertiary (underline link)**

```
Color:         --color-ink
Text-decoration: underline
Underline color: --color-line-strong
Hover underline: --color-ink
No border. No background.
```

### Status chips

```
Background:    tint of the status color (10% opacity) or --color-surface
Border:        1px solid the status color at 30% opacity
Border-radius: --radius-chip (9999px)
Padding:       4px 12px
Text:          --color-ok / --color-risk / --color-alert, 12px, GT America Mono
Dot:           8px circle, full status color, pulsing (for "live" state only)
```

### Cards

```
Background:    --color-surface (#FFFFFF)
Border:        1px solid --color-line
Border-radius: --radius-card (10px)
Padding:       1.5rem (compact) · 2rem (feature)
No shadow.
```

Nested elements step down one radius (7px). No nested cards.

### Data tables

Design goals: calm, readable, operational. Not enterprise-dense.

```
Header row:    --color-paper background, --color-muted text, GT America label size
Data rows:     --color-surface background, --color-body text
Row divider:   1px --color-line (horizontal only)
No column grid lines.
Selected row:  left edge indicator 2px solid --color-lime, row bg tinted stone-100
Hover row:     --color-paper bg
```

### Inputs

```
Background:    --color-surface
Border:        1px solid --color-line-strong
Border-radius: --radius-btn
Padding:       10px 14px
Text:          --color-ink, 15px
Focus border:  --color-ink, 1.5px
Placeholder:   --color-muted (≥4.5:1 contrast — do not use lighter gray)
No shadow.
```

### The trace (signature device)

The distributed-trace waterfall is the hero visual for the marketing site. Implementation:

```
Structure:   Horizontal timeline with 3 scan-point rows (e.g. BCN · LHR · JFK)
Spans:       Rectangles of varying width, --color-stone-200 fill (light) or stone-700 (dark)
Active span: --color-lime fill or left-border indicator
Traveling dot: 8px circle, --color-lime, animates along the active span path
Scan line:   Vertical hairline, --color-lime, sweeping left→right
Alert span:  --color-risk fill with flag icon above
Labels:      GT America Mono, 12px, --color-muted
Timing:      Spans draw in with opacity+scaleX, dot travels, scan sweeps — all staggered
```

Recur as: section transition divider (simplified, static), loading state (dot animates), empty state (dimmed, waiting).

---

## 7. Photography

Photography is one of the most important parts of the brand. Images make the claim "critical infrastructure" real. They should feel real, bright, calm, optimistic, and premium.

### Color treatment

- Slightly desaturated, high-key, soft contrast, bright shadows, controlled highlights
- Airport environments are inherently cool-toned (white ceilings, chrome, concrete) — don't force a warm filter over them. Warmth is carried by subject selection (stone surfaces, warm lighting where it exists naturally) and by the lime accent, not by grading
- Shadows stay open and bright — no deep blacks, harsh contrast, moody atmosphere, or dramatic spotlight lighting
- Reference feeling: Apple product photography + airport infrastructure documentation

### Subjects

**Primary:**
- Baggage sortation systems and conveyors
- Airport operational interiors and corridors
- Metal baggage handling structures
- Luggage in transit (organized, operational — not lost or scattered)
- Airport architecture with leading lines and negative space

**Secondary:**
- Bag tags and monitoring hardware (never as the hero — supporting detail)
- Minimal airport exterior (gates, jetways) when composition is clean

**Never:**
- Smiling passengers or vacation imagery
- Airplanes taking off or dramatic sky shots
- Dark environments or night scenes
- Colored / dramatic / spotlight lighting
- Generic travel stock photography

### Composition

Use clean geometry, leading lines, repetition, and large negative space. Images should feel organized — the same organizational discipline that BagMonitor brings to operations.

### Product photography

Products (hardware, tags) should be photographed cleanly, brightly, against neutral warm-stone backgrounds with subtle lime detail accents. The feeling is Apple hardware — not industrial product sheet.

---

## 8. Iconography

Line icons only. No fills. Rounded linecaps and joins.

| Property | Value |
|---|---|
| Stroke width | 1.5px (UI / nav) · 1.75px (feature icons) |
| Line cap | Round |
| Line join | Round |
| Viewbox | 24 × 24 |
| Default color | `--color-muted` |
| Active / accent | `--color-ink` or `--color-lime` dot indicator |

No drop shadow, no glow, no box-shadow on icons. If an icon needs to stand out, change its color or increase its stroke weight — not add shadow.

---

## 9. Motion

Motion is subtle and purposeful. The brand is calm — animation should communicate progress and precision, not excitement.

| Element | Duration | Easing | Notes |
|---|---|---|---|
| Trace span draw-in | 0.6–1.2s staggered | `cubic-bezier(0.25,0,0,1)` | `scaleX` from 0, transform-origin left |
| Traveling dot | 2–4s | `linear` | Loops or plays once on entry |
| Scan line sweep | 3s | `linear` | Loops on the hero |
| Scroll-triggered sections | 0.5s | `cubic-bezier(0.25,0,0,1)` | `opacity` + `translateY(12px → 0)` |
| Status dot pulse | 2s | `ease-in-out` | Infinite, `opacity` only |
| Button hover | 0.12s | `ease` | Background color transition only |
| Page transitions | 0.3s | `ease-out` | Opacity only |

**Principles:**
- Animate `opacity` and `transform` only. No layout property animation.
- Content is visible by default — reveal animations enhance what's already there; they do not gate visibility.
- Every animation has a `@media (prefers-reduced-motion: reduce)` alternative (typically instant or crossfade).
- No bounce or elastic curves.
- Stagger items within a list intentionally; don't apply the same entrance to every section.

---

## 10. Don'ts

| Don't | Do instead |
|---|---|
| Use pure black (`#000`) or pure white (`#FFF`) | Use `--color-ink` (`#1C1917`) and `--color-paper` (`#F7F6F3`) |
| Use cold or neutral grays | Use warm Stone ramp |
| Make lime dominant | Lime is a rare accent — ≤10% of any screen |
| Use lime as body text on a light surface | Use `--color-body` or `--color-ok` only for small text |
| Add drop-shadow or glow to buttons or icons | Elevation via ink fill, border, and tonal layering only |
| Use dashboards, metrics grids, or complex UI as the hero visual | Use the trace as the hero device |
| Use vacation imagery, smiling passengers, or planes taking off | Use operational airport and baggage infrastructure imagery |
| Use neon, cyberpunk, or futuristic aesthetics | Calm, precise, architectural |
| Add grid lines around every cell | Use hairline dividers and a baseline grid only |
| Write body prose smaller than 16px | 16px is the floor — sub-16px for labels, captions, data only |
| Use more than one typeface | GT America for everything; GT America Mono for data |
| Use font weights not loaded (faux-bold) | Only loaded VF weights; specify an actual numeric weight |
| Use gradient text | Solid color only; emphasis via weight or size |
| Use identical card grids (icon + heading + text repeated) | Vary layout; use numbered rows, stats, or prose instead |
| Use section eyebrows on every section | Reserve small-caps labels for 1–2 deliberate brand moments |
