# shared/copy — sistema de copy (documentos maestros)

Sistema para producir piezas de copy (scripts de anuncios, documentos
oficiales, scripts de videocursos, etc.) de **cualquier marca** de este repo.

Lo que vive acá es **maestro y genérico**: el método, los principios
universales de redacción y los scaffolds de formato. **No nombra ninguna marca
puntual** ni asume su voz, su rubro ni su audiencia. Cada marca aporta eso.

El objetivo no es solo guardar copy. Es **afinar las directivas** —las
maestras y las de cada marca— hasta que una pieza nueva nazca cerca de lo que
se busca, con la menor intervención humana posible.

## Los dos niveles

```
shared/copy/        ← MAESTRO. Genérico, sin marcas. Una marca lo hereda… o no.
   ├── guidelines/
   │   ├── principles.md   principios universales de redacción
   │   ├── structures.md   estructuras de mensaje genéricas
   │   └── formats/        scaffolds por tipo de pieza (ad-script, statement, …)
   ├── briefs/_template.md plantilla de pedido (pregunta qué marca)
   └── feedback/changelog  registro de cambios a los maestros

<marca>/copy/       ← POR MARCA. Voz, lexicón, personas, overrides.
   ├── guidelines/  hereda / sobre-escribe / complementa lo maestro
   ├── feedback/    el loop de esa marca
   └── pieces/      el output, por pieza
```

**Herencia opcional.** Los maestros son una biblioteca, no un mandato. Cada
marca decide qué hereda (vía `@`-includes), qué sobre-escribe y qué ignora. Una
marca puede no tener nada que ver con otra: distinto rubro, distinta voz,
distinto diseño.

## El loop

1. **Se pide copy** para una marca → se arma un `brief` (desde el template).
2. **Se generan N variantes** en `<marca>/copy/pieces/<tipo>/<slug>/`, leyendo
   los maestros + las guidelines de esa marca.
3. **Se elige y edita** → se registra la decisión en `decision.md`.
4. **Se destila el aprendizaje** al archivo correcto:
   - genérico (sirve a cualquier marca) → un maestro de `shared/copy/`
   - específico de la marca → `<marca>/copy/guidelines/`
   - se anota en el `changelog` correspondiente.
5. **Próxima vez** el copy nace más preciso.

Las instrucciones operativas detalladas están en `CLAUDE.md`.
