# formats/official-statement.md — documentos oficiales (scaffold genérico)

Scaffold para documentos que fijan el **discurso público** de una marca:
manifiestos, declaraciones de posición, anuncios institucionales, "sobre
nosotros", respuestas públicas. Reutilizable por cualquier marca; la voz y las
creencias las pone la marca.

## Qué los distingue de un anuncio

- No persiguen una conversión inmediata. **Fijan una postura.**
- Le pueden hablar a toda la audiencia a la vez (es discurso, no targeting).
- Duran en el tiempo: se escriben para citarse, no para una campaña.
- El tono sube en convicción, no necesariamente en volumen.

## De dónde sale el contenido

La materia prima es la marca: su voz (`<marca>/brand/BRAND.md`), sus valores y
su posicionamiento. Un documento oficial **articula** esas creencias en prosa.

## Anatomía (estructura `declaracion`)

1. **La creencia.** Abrí con la convicción, no con la marca. Esta primera oración es el hook del documento — tiene que detener al lector con la misma fuerza que un titular. Los tipos más afines para declaraciones: *contrarian claim*, *hot take* o *empathy hook* (ver `hooks.md`). El registro sube en convicción, no en volumen.
2. **El contexto.** Qué cambió en el mundo que hace relevante esta postura.
3. **La consecuencia.** Qué se vuelve posible / qué está en juego.
4. **La postura.** Qué defiende la marca y qué rechaza. Concreto.
5. **El cierre.** Una afirmación que se pueda citar sola.

## Formato del archivo de variante

```
---
marca: <proyecto>
tipo: manifiesto | posicion | anuncio | bio
estructura: declaracion
angulo: <la apuesta de esta variante en una línea>
hook-type: <tipo del catálogo hooks.md>
---

<el documento, en prosa. Párrafos cortos. Una idea por oración cuando se pueda.>
```

## Reglas (genéricas)

- Convicción sí; el límite de "volumen" lo define la marca.
- Honestidad: no promete lo que no se puede entregar.
- Debe poder leerse en voz alta sin sonar a folleto.

> El registro exacto (cuánta épica, qué puntuación, qué palabras evitar) lo
> define cada marca en su override de este formato.

## Aprendizajes de formato

> Aprendizajes genéricos sobre documentos oficiales.

_(vacío — se llena con el loop)_
