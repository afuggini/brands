# Fonts — GT America (licensed, project-supplied)

`preview-ramp-gt.html` uses **GT America** (commercial typeface by
[Grilli Type](https://www.grillitype.com/)) for all text and headlines.

The licensed files live in `./GT America VF/` and are supplied by the project
owner under their own GT America license. They are **not** redistributable — do
not publish these files publicly or commit them to an open repo.

## Wiring

`preview-ramp-gt.html` loads the Latin variable font via `@font-face`:

- Upright: `GT America VF/GT-America-Intl-VF_0.ttf` (`font-weight: 100 900`)
- Italic:  `GT America VF/GT-America-Intl-VF-Italic-VF.ttf`

A free **Archivo** webfont is kept as the fallback (renders while GT America
loads, or if the files are ever missing).

When porting to the production app, convert these to `.woff2` (subset to the
characters actually used) for performance, and keep them behind the same
license terms.
