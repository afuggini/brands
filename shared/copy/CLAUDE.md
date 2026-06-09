# CLAUDE.md — shared/copy

Método para generar copy de **cualquier marca** de este repo. Esto rige el
proceso; la voz la pone cada marca. Nada acá asume una marca puntual.

## Antes de escribir una sola palabra

1. **Identificá la marca.** ¿Para qué proyecto es esta pieza? (`ariel.ar`,
   `cursodevibecoding`, u otra). Si no está claro, preguntá.
2. **Leé los maestros** que apliquen:
   - `guidelines/principles.md` — principios universales de redacción.
   - `guidelines/structures.md` — estructuras de mensaje.
   - `guidelines/formats/<formato>.md` — el scaffold del formato pedido.
3. **Leé las guidelines de la marca** en `<marca>/copy/guidelines/`. Estas
   **sobre-escriben o complementan** a los maestros: voz, lexicón, personas,
   overrides de formato. Ahí está su `brand/BRAND.md` (la voz) y su
   `brand/DESIGN.md` (el diseño).
4. **Leé el brief** (o armalo desde `briefs/_template.md`).

Regla de precedencia: ante conflicto, **gana la marca**. Los maestros son el
piso, no el techo. Una marca puede ignorar un maestro entero si no le sirve.

No improvises la voz de memoria. Estos archivos son la fuente de verdad.

## Generar variantes

- Por defecto, **3 variantes** por pedido. Más si el brief lo pide.
- Genuinamente distintas: distinto ángulo, estructura o segmento de audiencia.
  No tres versiones de la misma oración.
- Guardalas en `<marca>/copy/pieces/<tipo>/<AAAA-MM-slug>/v1.md`, `v2.md`, …
- Copiá el brief a `…/<slug>/brief.md`.
- Cada variante arranca con metadata que hace explícita su apuesta:

  ```
  ---
  marca: <proyecto>
  audiencia: <a quién le habla, según las personas de la marca>
  estructura: <nombre de structures.md o de un override de la marca>
  angulo: <una línea: qué apuesta hace esta variante>
  ---
  ```

## Antes de entregar — checklist

Corré `guidelines/principles.md` + el checklist propio de la marca (si lo
tiene). En general:

- ¿Cada palabra carga peso? Cortá el resto (test del reescrito).
- ¿Respeta el lexicón de la marca (palabras que sí / que no)?
- ¿El CTA es un verbo concreto sobre un objeto concreto?
- ¿Le habla a un segmento de audiencia sin alienar al resto?
- ¿Un par podría leerlo en voz alta sin que le dé vergüenza?

Si una variante no pasa, reescribila o descartala. No entregues relleno.

## Cerrar el loop (lo más importante)

Cuando se elige o edita una variante:

1. Escribí `…/<slug>/decision.md`: qué variante ganó, qué cambió, por qué.
2. Destilá el aprendizaje al nivel correcto:
   - Sirve a **cualquier marca** (principio, estructura, scaffold) → un maestro
     de `shared/copy/`.
   - Es **de esta marca** (palabra, voz, persona, override) →
     `<marca>/copy/guidelines/`.
3. Anotá el cambio en el `changelog` correspondiente (maestro o de marca).

Regla: si editaste copy y no actualizaste ninguna guideline, preguntate qué
aprendizaje se perdió. El loop solo mejora si lo cerrás.

## Defaults

- Nombres de carpetas/archivos en inglés; contenido en el idioma de la marca.
- Slugs de pieza: `AAAA-MM-tema-corto`.
- Ante duda de voz, gana la marca. Ante duda de método, gana este archivo.
