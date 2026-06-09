# brands/ — contenido y marcas

Repo único de todo lo que **no es código**: voz de marca, sistema visual, copy
y documentos de las distintas marcas. El código de cada app vive en sus propios
repos, bajo `../apps/`.

## El modelo: maestros compartidos + marcas

No hay una marca maestra. Hay **documentos maestros genéricos** que cualquier
marca puede heredar, y **marcas** —cada una con sus propios lineamientos— que
heredan, sobre-escriben o ignoran esos maestros.

```
brands/
├── shared/                 MAESTROS genéricos. No nombran ninguna marca.
│   └── copy/               método + principios + estructuras + scaffolds + brief
│
├── ariel.ar/               una MARCA (voz + diseño + copy propios)
│   ├── brand/              BRAND.md, DESIGN.md  (la fuente de verdad de esta marca)
│   ├── copy/               guidelines (lexicón, overrides), feedback, pieces
│   └── docs/
│
└── cursodevibecoding/      PRODUCTO de ariel.ar (hereda su voz y diseño)
    ├── brand/              @../../ariel.ar/brand/… + lo específico del curso
    ├── copy/               overrides del curso, pieces
    └── docs/
```

Una marca futura sin relación con ariel.ar tendría su propia carpeta y heredaría
solo de `shared/` (o de nada), **nunca** de ariel.ar.

## Reglas de herencia

- **Los maestros (`shared/`) son genéricos.** Nunca nombran una marca, un rubro
  ni una voz puntual. Son el piso común, no un mandato.
- **Cada marca elige qué hereda.** Vía `@`-includes y referencias. Puede
  sobre-escribir un maestro o ignorarlo.
- **Ante conflicto, gana la marca.**
- **Un producto hereda de su marca padre.** `cursodevibecoding` hereda de
  `ariel.ar` (`@../../ariel.ar/brand/BRAND.md`), no de `shared/`.
- Nunca dupliques contenido que ya vive más arriba; heredalo.

## Generar copy

El método vive en `shared/copy/CLAUDE.md` (genérico). Antes de producir una
pieza: identificá la marca, leé los maestros que apliquen + las guidelines de
esa marca, generá las variantes y cerrá el loop. Las pieces van en
`<marca>/copy/pieces/`.

## Assets sueltos (fuera del repo)

Viven en la raíz del workspace, sin versionar acá:

- `../fonts/` — tipografías compartidas (las consume el build de las apps).
- `../firma/` — firma de email (HTML + imágenes).
