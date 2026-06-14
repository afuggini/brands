# Funnel de conversión — Curso de Vibe Coding

**Fase:** Pre-lanzamiento  
**Objetivo:** Pre-inscripciones pagas (Founders Round)  
**Persona principal:** El Fundador  
**Canal:** Meta (Facebook + Instagram)  
**Formato principal:** Reels + retargeting de feed  

---

## Estructura general

```
TOFU → MOFU → BOFU
```

| Etapa | Nombre | Objetivo | Audiencia |
|---|---|---|---|
| TOFU | Problema | Activar el dolor del Fundador | Fría — intereses en emprendimiento, IA, startups, negocios digitales |
| MOFU | Solución | Mostrar el camino + credenciales de Ariel | Retargeting — vio 50%+ del reel TOFU o visitó la landing |
| BOFU | Conversión | Pre-inscripción paga (Founders Round) | Retargeting — visitó la landing o inició checkout |

**Ciclo estimado de conversión:** 3–7 días desde primera exposición hasta pago.

---

## TOFU — Problema

**Objetivo:** que El Fundador sienta que el reel le habla a él. No menciona el curso — activa el dolor.

**Audiencia fría sugerida:**
- Intereses: emprendimiento, startups, negocios digitales, inteligencia artificial, lanzar un negocio
- Comportamiento: small business owners, engaged shoppers
- Lookalike (activar cuando haya datos del checkout)

**Formato:** Reel 15–30s, vertical, subtítulos quemados

**Ángulo del mensaje:** El momento específico en que la idea quedó trabada — el dev que no arrancó, el socio que no apareció, el año que pasó sin avanzar. No "tenés una idea", sino el episodio concreto del bloqueo.

**Hook:** primeros 2 segundos activan la imagen del bloqueo. Ejemplo de dirección: "Tenés la idea. Lo que no tenés es cómo ejecutarla."

**CTA:** suave — llevar a la landing. No pide la compra.

**Restricciones:**
- No presentar a Ariel
- No mencionar el precio
- No hablar del curso ni pedir inscripción

---

## MOFU — Solución

**Objetivo:** mostrar que el curso es el camino, establecer credibilidad de Ariel.

**Audiencia retargeting:**
- Vio 50%+ del reel TOFU
- Visitó la landing sin convertir

**Formato:** Reel 30s o carrusel de feed

**Ángulo del mensaje:** la IA cierra la brecha entre idea y ejecución. Ariel como alguien que ya cruzó ese puente y enseña cómo. Se presenta el curso como la solución concreta al dolor activado en TOFU.

**CTA:** llevar a la landing. "Ver el programa."

**Restricciones:**
- No pedir la compra todavía
- No detallar precio ni condiciones del Founders Round

---

## BOFU — Conversión

**Objetivo:** convertir en pre-inscriptos pagos (Founders Round).

**Audiencia retargeting:**
- Visitó la landing
- Inició checkout sin completar

**Formato:** Reel corto (15s) o imagen estática de feed

**Ángulo del mensaje:** la oferta Founders Round — precio de acceso anticipado, lo que incluye, cuándo arranca. La urgencia es real (cupos limitados o fecha de cierre genuina) — nunca artificial.

**CTA:** directo al checkout. "Inscribirme al Founders Round."

**Restricciones:**
- Solo usar urgencia si es literalmente cierta (cupos, fecha)
- No prometer ingresos ni resultados mágicos
- No usar hype motivacional

---

## Notas de implementación

- Producir al menos 2–3 variantes de copy por etapa para testear ángulos
- Separar las campañas TOFU / MOFU / BOFU en grupos de anuncios distintos en Meta
- Pixel de Meta instalado y eventos configurados: ViewContent (landing), InitiateCheckout, Purchase
- Las piezas de cada etapa viven en `copy/pieces/ad-script/`
