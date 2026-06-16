# shared/copy — Método y reglas de escritura (transversal)

Reglas genéricas de escritura que aplican a todas las marcas en este workspace. Cada marca puede agregar sus propias reglas en `<marca>/copy/guidelines/`, pero nunca puede anular estas.

Leer este archivo antes de producir cualquier pieza de copy, independientemente de la marca.

---

## Anti-patterns — lo que nunca hay que hacer

### 1. Estructura de negación-y-reafirmación

**Patrón a evitar:** negar una versión incorrecta de la idea para después repetir y corregir.

> "Lo que proponemos no es que AA compre un software. Lo que proponemos es que AA ofrezca esta infraestructura..."

> "No estamos diciendo que X sea el problema. Lo que decimos es que Y..."

**Por qué es un error:** agrega ruido sin agregar información, genera confusión al introducir un concepto que el lector no tenía y obliga a leerlo dos veces. Además es una firma estilística característica de la IA que rompe la credibilidad del texto.

**La corrección:** decir directamente lo que es verdad, sin pasar por lo que no lo es.

> "La propuesta es que AA ofrezca esta infraestructura como parte del paquete de terminal."

Si la distinción importa, aclarala en una línea separada con su propia justificación — no como un par negación/afirmación.

---

## Reglas de formato — por superficie

### 1. Hero section — subheader bajo el título principal

El subheader de una hero section de landing page cumple una función de orientación: el visitante acaba de leer el título y necesita confirmar, en una sola oración, que está en el lugar correcto.

**Estructura obligatoria:** el subheader debe contener los tres elementos siguientes, en cualquier orden que fluya naturalmente:

1. **Nombre del producto** — opcional si ya aparece en el título o en el badge inmediatamente anterior.
2. **Descripción estándar del producto** — qué es y qué hace, en términos funcionales. Sin hype. Sin metáforas. Una frase que un comprador pueda repetirle a su equipo.
3. **Público al que apunta** — solo si no se nombra en el título inmediatamente anterior. Si el título dice "Baggage Infrastructure Built for Airlines", el público ya está dicho; no repetirlo.

**Ejemplos correctos:**

> "BagMonitor is enterprise baggage visibility infrastructure for airlines, ground handlers, and airport operators — built to integrate with your existing systems."

> "Enterprise infrastructure for real-time baggage monitoring, tracking, and operational intelligence for airports."
*(el segundo ejemplo omite el nombre del público porque el badge/contexto lo establece; es aceptable si el contexto inmediato es suficientemente específico)*

**Errores comunes a evitar:**

- Subheader que solo repite el título con otras palabras: no agrega información.
- Subheader que describe únicamente un beneficio genérico ("reduce costs, improve operations") sin describir el producto en sí.
- Subheader que asume que el visitante ya sabe qué es el producto — en una landing, nunca asumas contexto previo.

---
