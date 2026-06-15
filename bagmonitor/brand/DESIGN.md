# DESIGN.md — BagMonitor

Reference for any AI agent producing visual artifacts for BagMonitor — web, social, email, presentations, or any other touchpoint. Read this file in full before producing any visual output. Brand voice and strategy live in `BRAND.md`; keep them aligned.

---

## 1. Concept

BagMonitor's visual language is **enterprise dark with precision accents** — a system that reads like critical infrastructure, not a startup product. The feel is a high-stakes operational dashboard: dense, trustworthy, data-centric, always in control.

Two anchors:
- **Space Grotesk leads identity** — geometric, confident, modern. All headings, hero text, brand moments.
- **Indigo is the only saturated accent** — and it carries all interactive and identity weight. Nothing else competes with it in saturation.

The dark canvas (`#0A0E17`) is not a mood; it is the canvas that makes precision data and indigo signals read with maximum clarity. Every decision exists to serve that clarity.

---

## 2. Logo

### Mark

The BagMonitor mark is a shield with concentric circles — evoking a lock, a target, and a radar scan. It is the only approved logomark.

```
Shape:    Shield, viewBox 0 0 24 28
Fill:     Linear gradient — #818CF8 (top-left) → #4338CA (bottom-right)
Detail:   White arc (stroke-opacity 0.25), white ring (stroke-opacity 0.35),
          white center dot (fill)
```

**SVG source** (copy as-is):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28" fill="none">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="24" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#818CF8"/>
      <stop offset="100%" stop-color="#4338CA"/>
    </linearGradient>
  </defs>
  <path d="M12 1L23 5V14C23 22 17.5 27 12 28.5C6.5 27 1 22 1 14V5Z" fill="url(#g)"/>
  <path d="M4 7.5V14.5C4 19.5 7.5 24 12 26" stroke="white" stroke-width="0.7" stroke-opacity="0.25" stroke-linecap="round" fill="none"/>
  <circle cx="12" cy="15" r="5" stroke="white" stroke-width="1.2" stroke-opacity="0.35"/>
  <circle cx="12" cy="15" r="2.2" fill="white"/>
</svg>
```

### Wordmark

Set in **Space Grotesk, weight 700**, sentence case: `BagMonitor`
Color: `#F9FAFB` on dark backgrounds.

### Lockup (mark + wordmark)

Mark sits to the left of the wordmark, vertically centered.
Minimum lockup height: **32px** (mark scales proportionally to text).

### Clearspace

Minimum clearspace around the full lockup = **1× the mark height** on all sides.

### Backgrounds

| Background | Logo treatment |
|---|---|
| Dark (`#0A0E17` – `#111827`) | Full color mark + white wordmark |
| Light / white | Gradient mark + `#111827` wordmark |
| Busy photo or texture | White mark + white wordmark on a dark semi-transparent scrim |

### Logo don'ts

- Do not recolor the mark
- Do not stretch or skew
- Do not use the wordmark alone without the mark in external materials
- Do not add drop shadows (the gradient provides the depth)

---

## 3. Color

### 3.1 Primary — Indigo

The core brand color. CTAs, interactive elements, highlights, logo gradient.

| Token | Hex | Usage |
|---|---|---|
| `primary-400` | `#818CF8` | Gradient start, hover states, links, active indicators |
| `primary-500` | `#6366F1` | Primary buttons, interactive focus rings |
| `primary-600` | `#4F46E5` | Button hover, stronger accents |
| `primary-700` | `#4338CA` | Gradient end, deep accents, logo |
| `primary-800` | `#3730A3` | Dark backgrounds behind primary elements |
| `primary-900` | `#312E81` | Subtlest tint for large dark surfaces |

### 3.2 Surface — Dark Gray

| Token | Hex | Usage |
|---|---|---|
| `surface-50` | `#F9FAFB` | Primary text on dark bg, headings, white elements |
| `surface-100` | `#F3F4F6` | — |
| `surface-200` | `#E5E7EB` | Body text, secondary headings |
| `surface-300` | `#D1D5DB` | UI labels, nav links default |
| `surface-400` | `#9CA3AF` | Subheadings, descriptive text |
| `surface-500` | `#6B7280` | Muted text, placeholders |
| `surface-600` | `#4B5563` | Disabled states, inactive icons |
| `surface-700` | `#374151` | Borders, dividers, subtle outlines |
| `surface-800` | `#1F2937` | Card backgrounds, input fields |
| `surface-900` | `#111827` | Sidebar, secondary panels |
| `surface-950` | `#0A0E17` | **Page background** — the canonical dark canvas |

### 3.3 Semantic — Success (Green)

Operational status indicators, positive metrics, "live" signals. **Not for marketing or decoration.**

| Token | Hex | Usage |
|---|---|---|
| `success-400` | `#34D399` | Pulse dot, positive badges, uptime indicators |
| `success-500` | `#10B981` | Success states |
| `success-600` | `#059669` | Darker success, borders |

### 3.4 Semantic — Danger (Red)

Alert indicators and error states. **Not for marketing or decoration.**

| Token | Hex | Usage |
|---|---|---|
| `danger-400` | `#F87171` | Error text, alert indicators |
| `danger-500` | `#EF4444` | Error states |
| `danger-600` | `#DC2626` | Critical alerts |

### 3.5 Accent — Violet

| Token | Hex | Usage |
|---|---|---|
| `accent-400` | `#A78BFA` | Gradient midpoint, decorative highlights |
| `accent-500` | `#8B5CF6` | Secondary accent |

### 3.6 Brand Gradients

| Name | Value | Usage |
|---|---|---|
| **Primary gradient** | `135deg, #818CF8 → #A78BFA → #34D399` | Hero heading highlight, key callouts |
| **Warm gradient** | `135deg, #818CF8 → #A78BFA → #F472B6` | Decorative alternate, not for main headings |
| **Logo gradient** | `top-left → bottom-right, #818CF8 → #4338CA` | Logo mark only |
| **Depth glow** | `radial, rgba(30,20,80,0.6) → transparent` | Hero section depth illusion |

### 3.7 Background Depth Stack

```
surface-950  #0A0E17   Page canvas
surface-900  #111827   Cards, panels, nav sidebar
surface-800  #1F2937   Input fields, secondary cards
primary-900  #312E81   Tinted section backgrounds (use sparingly)
```

### 3.8 Color rules

1. **Indigo is the only saturated accent.** Nothing else competes with it.
2. **Semantic colors (green, red) are operational signals only.** Never in hero or marketing headings.
3. **Success green = live/operational.** Never decorative.
4. **Maximum two accent colors per screen.** Indigo + at most one semantic. Never three.
5. **Gradients are earned.** Primary gradient for hero highlights only — 1–5 words maximum in a heading. Never on full paragraphs.

---

## 4. Typography

### Typefaces

| Role | Family | Weights | Source |
|---|---|---|---|
| **Headings** | Space Grotesk | 500, 600, 700 | Google Fonts |
| **Body / UI** | Inter | 400, 500, 600, 700 | Google Fonts |
| **Fallback** | `system-ui, -apple-system, sans-serif` | — | System |

### Google Fonts import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Family | Size | Weight | Letter-spacing | Color |
|---|---|---|---|---|---|
| Display / Hero H1 | Space Grotesk | 72px / 4.5rem | 800 | −0.025em | `surface-50` |
| H1 | Space Grotesk | 48px / 3rem | 800 | −0.025em | `surface-50` |
| H2 | Space Grotesk | 36px / 2.25rem | 700 | −0.025em | `surface-50` |
| H3 | Space Grotesk | 24px / 1.5rem | 700 | −0.025em | `surface-50` |
| H4 | Space Grotesk | 20px / 1.25rem | 600 | −0.025em | `surface-50` |
| Eyebrow / label | Inter | 12px / 0.75rem | 600 | +0.2em | `primary-400` |
| Body large | Inter | 20px / 1.25rem | 400 | 0 | `surface-400` |
| Body | Inter | 16px / 1rem | 400 | 0 | `surface-400` |
| Body small | Inter | 14px / 0.875rem | 400 | 0 | `surface-400` |
| Caption / meta | Inter | 12px / 0.75rem | 400 | 0 | `surface-500` |
| UI label | Inter | 13px / 0.8125rem | 500 | 0 | `surface-300` |
| Button | Inter | 14–16px | 600 | 0 | white |
| Code / mono | `font-mono` | 14px | 400 | 0 | `primary-400` |

### Gradient Text

For primary heading highlights (hero H1):

```css
background: linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #34d399 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

Apply only to **1–5 words maximum** within a heading. Never to full paragraphs.

---

## 5. Layout & Spacing

### Grid

| Breakpoint | Max content width | Horizontal padding |
|---|---|---|
| Mobile (`< 640px`) | 100% | 24px (1.5rem) |
| Tablet (`640–1023px`) | 100% | 24px (1.5rem) |
| Desktop (`≥ 1024px`) | 1280px | 32px (2rem) |

### Section Rhythm

| Context | Vertical padding |
|---|---|
| Hero | `pt-16 pb-32` |
| Full sections | `py-24` (desktop) · `py-16` (mobile) |
| Tight sections | `py-16` |
| Component gap | `gap-4` – `gap-8` |

---

## 6. Components

### Buttons

**Primary button**

```
Background:    #4F46E5 (primary-600)
Hover:         #6366F1 (primary-500)
Text:          white, 600 weight
Border-radius: 8px
Padding:       sm: 16px/8px  ·  md: 24px/10px  ·  lg: 32px/14px
Glow:          box-shadow 0 0 20px rgba(99,102,241,0.15), 0 0 60px rgba(99,102,241,0.05)
```

**Secondary / outline button**

```
Background:    transparent
Border:        1px solid surface-600
Hover border:  primary-500
Text:          surface-200 → white on hover
Border-radius: 8px
```

**Glass button** (hero secondary)

```
Background:    rgba(255,255,255,0.18) → rgba(255,255,255,0.10)
Backdrop:      blur(12px) saturate(1.4)
Border:        1px solid rgba(255,255,255,0.22)
Text:          white/90
```

### Cards

```
Background:    surface-800 (#1F2937) or surface-900 (#111827)
Border:        1px solid surface-700 (#374151)
Border-radius: 16px (2xl)
Padding:       24–32px
```

For featured/highlighted cards: add animated gradient border.

### Badges / Pills

```
Background:    surface-900/60 with backdrop-blur-md
Border:        1px solid surface-700/50
Border-radius: 9999px (full)
Padding:       8px 20px
Text:          surface-300, 14px, Inter
```

Live status dot: `8px × 8px`, `success-400` (#34D399), with pulse animation.

### Dividers

```
Color:    surface-700 (#374151)
Style:    1px solid
```

---

## 7. Iconography

Line icons only. Stroke-based, no fills. Rounded linecaps and joins.

| Property | Value |
|---|---|
| Stroke width | 1.5px (UI) · 2px (feature icons) |
| Line cap | Round |
| Line join | Round |
| Viewbox | 24 × 24 |
| Default color | `surface-400` |
| Active / accent color | `primary-400` |

Recommended library: **Heroicons** (UI). **Phosphor Icons** (thin/regular weight) for marketing materials.

---

## 8. Elevation & Effects

### Glow

```css
/* Standard indigo glow — CTA buttons, featured elements */
box-shadow: 0 0 20px rgba(99, 102, 241, 0.15),
            0 0 60px rgba(99, 102, 241, 0.05);

/* Strong indigo glow — hero CTA hover */
box-shadow: 0 0 30px rgba(99, 102, 241, 0.25),
            0 0 80px rgba(99, 102, 241, 0.1);
```

### Blur / Glass

```css
backdrop-filter: blur(24px);                    /* Navbar */
backdrop-filter: blur(12px) saturate(1.4);      /* Glass buttons */
```

### Section depth glow

```css
background: radial-gradient(ellipse 140% 60% at 50% 110%,
  rgba(30, 20, 80, 0.6) 0%,
  rgba(15, 10, 45, 0.4) 25%,
  rgba(10, 14, 23, 0) 60%);
```

---

## 9. Motion

| Element | Duration | Easing | Notes |
|---|---|---|---|
| Hero badge / subtitle | 0.8s | `cubic-bezier(0.25,0.1,0.25,1)` | CSS animation, staggered |
| Scroll-triggered sections | 0.6s | `cubic-bezier(0.25,0.1,0.25,1)` | Once, not repeat |
| Stagger children | +0.1s per child | — | Max 5 items |
| Pulse dot | 2s | `ease-in-out` | Infinite, opacity only |
| Button hover | 0.15s | `ease` | Color/shadow only |

**Principles:**
- Animate `opacity` and `transform` only — no layout properties
- Always respect `prefers-reduced-motion: reduce`
- LCP elements render immediately visible — no `opacity: 0` initial state on above-the-fold content

---

## 10. Digital Materials Guide

### Social Media

| Platform | Size | Notes |
|---|---|---|
| LinkedIn post | 1200 × 628px | `surface-950` bg, single stat or quote |
| LinkedIn cover | 1584 × 396px | Lockup left-aligned, gradient accent right |
| Twitter/X post | 1200 × 675px | Same as LinkedIn post |
| Twitter/X header | 1500 × 500px | Minimal, logo + tagline |
| Instagram square | 1080 × 1080px | Data stat or quote card |
| Instagram story | 1080 × 1920px | Bold stat, minimal text |

**Stat card layout:**

```
Background: surface-950
Top-left:   BagMonitor lockup (small)
Center:     Stat number in Display type (gradient text), label in body
Bottom:     Divider + source attribution in caption style
Accent:     Subtle radial glow behind stat number
```

### Email

| Element | Spec |
|---|---|
| Container width | 600px |
| Background | `#0A0E17` (surface-950) |
| Body text | Inter 16px, `#E5E7EB` (surface-200) |
| Headings | Space Grotesk 24–32px, `#F9FAFB` (surface-50) |
| CTA button | Primary button spec, min 200px wide |
| Footer text | Inter 12px, `#6B7280` (surface-500) |
| Header | Logo lockup centered, `#111827` (surface-900) bg strip |

Avoid `backdrop-filter` or `clip-path` in email — fall back to flat colors.

### Presentations (Pitch / Sales Deck)

| Element | Spec |
|---|---|
| Slide size | 16:9 (1920 × 1080px or 1280 × 720px) |
| Background | `surface-950` (#0A0E17) |
| Accent slides | `primary-900` (#312E81) bg with `primary-700` border |
| Heading font | Space Grotesk 700, 48–64px |
| Body font | Inter 400, 24–28px |
| Caption / source | Inter 400, 18px, `surface-500` |
| Data callouts | Display type with gradient text, subtle radial glow |
| Charts | `primary-400/500` for main series, `success-400` for positive, `danger-400` for negative |

### Print / Light backgrounds

- Logo mark: use gradient version on white; do not invert
- Replace `surface-950` bg with white (`#FFFFFF`)
- Replace `surface-50` text with `#0A0E17`
- Replace `primary-400` with `primary-700` (#4338CA) for contrast on light
- Drop glow and blur effects entirely

---

## 11. Design Don'ts

| Don't | Do instead |
|---|---|
| Use more than 2 typefaces | Stick to Inter + Space Grotesk |
| Apply gradient text to full paragraphs | Limit to 1–5 words in headings |
| Place the logo on a busy background without a scrim | Add a dark semi-transparent overlay |
| Use bright white `#FFFFFF` as a page background | Use `surface-950` or `surface-900` |
| Stack more than 3 glows on one element | One glow per element maximum |
| Animate layout properties (width, height, margin) | Animate opacity and transform only |
| Use success green for decoration | Reserve green for live / operational status only |
| Use the warm gradient (pink) on primary materials | Keep warm gradient for editorial/decorative only |
| Add glow to every element | Glows are reserved for primary CTAs and featured highlights |
