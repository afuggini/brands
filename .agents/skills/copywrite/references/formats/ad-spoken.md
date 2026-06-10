# ad-spoken.md — anuncio con voz humana

Formato para anuncios donde hay una persona hablando a cámara o una voz en off.
El audio es el canal principal; el visual acompaña o refuerza.

Superficies típicas: Reel, Story, YouTube pre-roll, TikTok, podcast ad.

---

## Anatomía

```
HOOK (0–8s)
DESARROLLO (8–22s)
CTA (22–30s)

NOTAS DE PRODUCCIÓN
```

Ajustar tiempos según el largo del anuncio (15s / 30s / 60s). El hook
siempre ocupa ~25% del total; el CTA, ~15–20%.

---

## Reglas del formato

### Una idea por oración
El oyente no puede releer. Si una oración tiene dos ideas, pierde una.
Máximo 10 palabras por línea. Si es más larga, cortala en dos.

### Ritmo: corto–corto–medio
Alterna oraciones cortas con una más larga. Evitá tres oraciones del mismo
largo seguidas — la voz se vuelve monótona.

### Sin guión largo (—)
El `—` no tiene equivalente oral claro. Reemplazá con punto, coma o salto
de línea. Ver `principles.md §10`.

### Hook: los primeros 3 segundos deciden
Las primeras palabras tienen que interrumpir. Empezar con una pregunta,
una afirmación inesperada o el nombre del dolor. No con contexto.

### El CTA se dice, no se lee
El CTA final debe poder decirse en voz alta en menos de 3 segundos.
Verbo concreto + objeto concreto. No más de 5 palabras.

---

## Formato del archivo de variante

```
---
marca:
audiencia:
estructura:
angulo:
canal: [Reel / Story / YouTube pre-roll] · [largo] · voz humana
hook-type: <tipo del catálogo hooks.md>
---

HOOK (0–Xs):
[línea]
[línea]

DESARROLLO (X–Ys):
[línea]
[línea]

CTA (Y–Zs):
[texto hablado del CTA]
[referencia visual: link en bio / URL en pantalla / etc.]

NOTAS DE PRODUCCIÓN:
- Tono: [calmado / urgente / íntimo / directo]
- Música: [sin música / instrumental suave / sin letra]
- Visual: [cámara directa / voz en off con pantalla / texto superpuesto]
- Ritmo: [pausas largas / fluido / cortes rápidos]
```
