# formats/ad-script.md — scripts de anuncios (scaffold genérico)

Scaffold para scripts de anuncios (Meta, YouTube, redes), reutilizable por
cualquier marca. Define la **anatomía** de un anuncio; la voz, el lexicón y los
"no"s los pone la marca en `<marca>/copy/guidelines/`.

Un anuncio tiene un solo trabajo: parar el scroll y mover a una acción.

## Antes de escribir

- Definí **un solo segmento de audiencia** (según las personas de la marca). Un
  anuncio que le habla a todos no le habla a nadie.
- Definí el **canal y duración** (ej. Reel 15s, video 60s, imagen estática).
- Definí la **acción única** que persigue.

## Anatomía

1. **Hook (primeros segundos).** La tensión o el deseo de la audiencia, en su
   idioma. Sin preámbulo, sin abrir con la marca.
2. **Desarrollo.** Qué cambia / qué se ofrece. Concreto. Si se puede mostrar en
   pantalla en vez de afirmarlo, mejor.
3. **CTA.** Un verbo concreto sobre un objeto concreto. Una sola acción.

Estructura base sugerida: `problema-quiebre-prueba-accion` (ver
`../structures.md`).

## Formato del archivo de variante

```
---
marca: <proyecto>
audiencia: <segmento>
estructura: problema-quiebre-prueba-accion
angulo: <la apuesta de esta variante en una línea>
canal: <Reel 15s / video 60s / estático>
---

HOOK (primeros segundos):
<texto en pantalla + lo que se dice>

DESARROLLO:
<qué cambia / qué se ofrece>

CTA:
<verbo + objeto>

NOTAS DE PRODUCCIÓN:
<visual, b-roll, on-screen text — opcional>
```

## Reglas (genéricas)

- Respetá el lexicón y los "no"s de la marca.
- Honestidad de tiempos y resultados.
- Una sola acción por anuncio.

> Restricciones específicas (qué palabras evitar, si la cara del fundador
> aparece o no, urgencia falsa, etc.) las define cada marca en su override de
> este formato.

## Aprendizajes de formato

> Aprendizajes genéricos sobre anuncios que sirvan a cualquier marca.

_(vacío — se llena con el loop)_
