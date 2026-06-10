# ad-text.md — anuncio basado en texto

Formato para anuncios donde el mensaje se comunica mediante texto en pantalla
y animaciones. Sin voz humana. El texto es el canal principal.

Superficies típicas: Reel, Story, carrusel estático, bumper sin voz, ad animado.

---

## Anatomía

```
[ESCENA 1] — hook visual
[ESCENA 2–N] — desarrollo (una idea por escena)
[CTA]

NOTAS DE PRODUCCIÓN
```

Cada escena es una tarjeta o beat independiente. El lector no puede volver
atrás — cada frame debe funcionar si se ve por 1 segundo.

---

## Reglas del formato

### Una idea por escena
Nunca dos ideas en la misma tarjeta. Si la escena necesita explicación, es dos escenas.

### Corto en el hook, más largo en el desarrollo
Hook: 3–5 palabras por escena. Rápido. Interrumpir el scroll.
Desarrollo: hasta 10 palabras por escena. Ritmo más lento para explicar.
CTA: 2–4 palabras. Acción pura.

### Los saltos de línea son puntuación
En texto animado, un salto de línea = una pausa. Usarlo para crear ritmo,
no para llenar espacio. Máximo 2 líneas por escena en el hook; 3 en el desarrollo.

### El primer frame detiene el scroll
Sin contexto previo. La primera escena tiene que funcionar aislada, sin lo
que viene después. Testeá: si ves solo el frame 1, ¿querés ver el siguiente?

### Sin dependencia de audio
El anuncio tiene que funcionar con el sonido apagado. El mensaje completo
debe leerse solo del texto. La música o efectos de sonido son mejora, no
condición.

### El CTA es visual, no hablado
El texto del CTA va en pantalla como elemento de acción. Puede ir acompañado
de un indicador visual (flecha, botón, URL). Verbo concreto + objeto concreto.

---

## Formato del archivo de variante

```
---
marca:
audiencia:
estructura:
angulo:
canal: [Reel / Story / carrusel] · [largo] · texto + animación
hook-type: <tipo del catálogo hooks.md>
---

[ESCENA 1] 0–Xs — hook
[texto de la tarjeta]

[ESCENA 2] X–Ys
[texto]

[ESCENA N] ...
[texto]

[CTA] Y–Zs
[texto del botón / acción]
[referencia visual: URL / link en bio / swipe up]

NOTAS DE PRODUCCIÓN:
- Tipografía: [display / body / mix]
- Animación: [fade / slide / cut / typewriter]
- Paleta: [colores o referencia al sistema visual de la marca]
- Música / sound: [sin audio / música ambiental / efectos]
- Timing: [ritmo rápido / pausado / progresivo]
```
