# BagMonitor — Design v2

This folder holds the **locked v2 visual system** for BagMonitor — brand docs, Tailwind token source, and HTML previews. The direction is decided and documented. The production app (`apps/bagmonitor`) and old brand docs (`brands/bagmonitor/brand/`) have not yet been updated; that is the next phase.

---

## ★ Direction: Swiss editorial × modern-SaaS

GT America (Light display / Regular body / Mono data) · Warm stone palette · Rare lime accent

Full spec in **`DESIGN.md`**. Brand voice and personality in **`BRAND.md`**.

Key anchors:
- **Palette: warm stone ramp** — page `#F7F6F3`, ink `#1C1917` (near-black, warm). No cold/neutral grays. No pure black.
- **Accent: lime `#D6F36D`, used sparingly** — the period after a headline, the live status dot, a selected row. ≤10% of any screen.
- **Swiss structure:** hairline dividers, baseline grid, generous whitespace. No full cell-borders around every number.
- **The trace** — live baggage waterfall (BCN → LHR → JFK) is the signature hero device. Recurs as divider, loading state, empty state.

---

## Files

| File | What it is |
|---|---|
| **`BRAND.md`** | Visual personality, formula, reference brands, emotional target, voice rules |
| **`DESIGN.md`** | Full visual system: color tokens, @theme block, type scale, components, photography, motion, don'ts |
| **`preview-swiss.html`** | Live HTML preview — hand-written CSS, Light/Dark toggle |
| **`preview-swiss-tailwind.html`** | Live HTML preview — Tailwind v4 `@theme` block; **copy-paste source for `globals.css`** |
| `assets/` | Photography references and UI reference image |
| `fonts/` | GT America VF files (licensed — do not redistribute) |

---

## Fonts & licensing (important)

- **GT America** (Grilli Type) is a **commercial, licensed** typeface. The variable-font
  files live in **`fonts/GT America VF/`**, supplied by the project owner under their own
  license. **Do not redistribute** them or commit them to any public repo. See
  `fonts/README.md`.
- Pages load GT America via `@font-face` (variable, `font-weight: 100 900`) pointing at the
  local `./fonts/...` path, with **Archivo** (Google Fonts) as a free fallback so previews
  render even if the files are absent.
- For production, subset GT America → `.woff2` (the raw `.ttf` VF is ~1.5 MB).

---

## House rules (carry into the app)

- **16px paragraph-minimum.** Running prose is never below 16px; sub-16px is for labels,
  eyebrows, chips, captions, and data-chrome only.
- **No drop-shadow/glow on buttons or icons** — shadows blur edges. Elevation comes from
  borders, fills, and tonal layering.
- **Accent used sparingly** (the lime, ≤~10% of any screen). Saturated mid-tones are never
  body-size text on light backgrounds; pair them with a darker step or use ink.
- **WCAG AA** on all prose (≥4.5:1). Real loaded font weights only (no faux-bold).
- Copy follows `v2/BRAND.md` (voice rules) + `../brand/BRAND.md` (pillars, personas, hard-no's) — operator-first, no consumer tone, avoid the "X isn't Y, it's Z" pattern; primary CTA is **Book a Demo**.

---

## Run the previews locally

```bash
cd brands/bagmonitor/v2
python3 -m http.server 8011 --bind 127.0.0.1
# → http://127.0.0.1:8011/preview-swiss.html   (toggle ☀/☾)
```

(Serving over HTTP — not `file://` — is required so the local GT America fonts load.)

---

## Next steps

1. **Update `preview-swiss-tailwind.html` `@theme`** — the preview still uses the neutral ramp (`#111110`); align it to the warm-stone tokens in `DESIGN.md`.
2. **Confirm the v2 logo mark** — current preview uses a placeholder ink-square + diagonal arrow; needs sign-off before production use.
3. **Port the system into the app:** copy the `@theme` block from `DESIGN.md §3.6` into `apps/bagmonitor/src/app/globals.css`, then restyle homepage sections (16px prose floor, one section rhythm, one card system, contrast floor).
