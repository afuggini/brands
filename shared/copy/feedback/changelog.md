# changelog — evolución de los documentos maestros

Registro de cada ajuste a los **maestros** de `shared/copy/` (principios,
estructuras, scaffolds de formato, template de brief, método). Los cambios
específicos de una marca van en `<marca>/copy/feedback/changelog.md`.

Formato de entrada:

```
## AAAA-MM-DD — <qué cambió>
- Archivo: <guidelines/principles.md | structures.md | formats/... | CLAUDE.md>
- Cambio: <qué se agregó/sacó/ajustó>
- Origen: <de qué pieza o decisión salió el aprendizaje>
```

---

## 2026-06-09 — sistema de copy creado y separado en dos niveles
- Archivo: shared/copy/ (todos)
- Cambio: el sistema se dividió en **maestros genéricos** (acá, sin nombrar
  marcas) y **guidelines por marca**. Se creó `principles.md`; `structures.md`,
  `formats/` y el brief se despojaron de toda referencia a marcas o rubros
  puntuales. El lexicón y la voz bajaron a las carpetas de cada marca.
- Origen: definición del modelo multi-marca con herencia opcional.
