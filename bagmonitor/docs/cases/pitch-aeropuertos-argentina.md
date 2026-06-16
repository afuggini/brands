# Draft: Pitch a Aeropuertos Argentina

> **Estado:** Borrador exploratorio. Estructura para la primera conversación.

---

## Objetivo

Conseguir una reunión exploratoria con un decisor de AA (Aeropuertos Argentina 2000 S.A.) en el área de Tecnología, Innovación u Operaciones, con el propósito de presentar BagMonitor como infraestructura de visibilidad de equipaje para sus terminales y explorar un modelo de distribución en el que AA actúe como canal hacia las aerolíneas operadoras.

---

## Por qué AA y no una aerolínea

El problema de "quién paga" es el principal obstáculo para vender BagMonitor aerolínea por aerolínea. Cada aerolínea tiene incentivos para que el sistema lo pague otro. AA resuelve ese problema estructuralmente:

- AA ya tiene relación comercial activa con todas las aerolíneas que operan en sus terminales
- Puede incorporar el costo de BagMonitor en los fees que cobra a las aerolíneas — igual que SITA ya está incluido en el costo de las islas de check-in en EZEIZA (fuente: Pablo Ferrari, Vanderlande, mayo 2026)
- Una sola negociación activa el sistema para todas las aerolíneas; no hay que venderle a cada una por separado
- AA tiene autoridad para coordinar el despliegue con la PSA y los handlers de rampa simultáneamente

AA incorpora BagMonitor como **infraestructura de terminal** y la distribuye a sus operadores cliente.

---

## El problema que AA tiene hoy

AA gestiona 35 aeropuertos en Argentina. La calidad de las operaciones de equipaje en sus terminales impacta directamente en su reputación como operador:

- Las reclamaciones de equipaje dañan el NPS del aeropuerto, no solo el de la aerolínea
- Los métodos actuales en terminales como Ezeiza son manuales: scanners de mano y listas de papel (confirmado en Aerolíneas Argentinas, mayo 2026)
- La PSA necesita identificación de equipaje para sus procesos de seguridad — hoy lo hace con métodos también manuales
- No existe visibilidad en tiempo real entre clasificación y carga a bodega. El BPM (Baggage Processed Message) no se envía de forma consistente — nadie sabe si un bolso clasificado llegó al avión hasta que el vuelo ya salió
- Cuando un tomógrafo genera un "no pic" — falla en obtener la imagen de la valija — la valija se desvía a inspección secundaria y desaparece del sistema hasta que la PSA la libera. Hoy no existe ninguna alerta automática si esa valija no regresa a tiempo antes del cierre del vuelo. En Ezeiza hay un tomógrafo con el generador fallado que genera ráfagas de hasta 20 no pics consecutivos: 20 valijas desviadas al mismo tiempo, sin visibilidad, sin alerta

El costo operativo confirmado de un evento de mishandling es de al menos **$150 por valija** (logística de repatriación, staff, gestión del caso). WorldTracer suma $22 adicionales cuando la valija entra en trazado activo — no aplica en todos los casos. Más compensación al pasajero si presenta reclamo. En ciudades como São Paulo, aeropuertos similares ya enfrentan juicios reales por pérdidas — una tendencia que avanza hacia el mercado argentino.

---

## Lo que BagMonitor propone

BagMonitor es infraestructura de visibilidad de equipaje, que se integra a los sistemas existentes.

En términos concretos para AA:

| Qué es | Tags físicos inteligentes (BLE) + plataforma SaaS + APIs de integración |
|---|---|
| Cómo funciona | Gateways BLE instalados en puntos clave del BHS generan lectura automática de cada valija sin intervención humana |
| Qué ve AA | Dashboard en tiempo real de todas las valijas en todas las terminales |
| Qué ven las aerolíneas | Visibilidad individual de sus vuelos — alertas antes de que salga un avión con valijas faltantes |
| Qué ve la PSA | Identificación de equipaje en tiempo real para sus procesos de inspección |

El sistema se instala sobre la infraestructura existente — no reemplaza nada. El BHS de Ezeiza ya tiene arcos de lectura con TCP antes de cada tomógrafo: BagMonitor puede integrarse en ese canal sin modificar la infraestructura central.

---

## Cómo estructurar la primera conversación

### Apertura
No abrir con el producto. Abrir con la observación operativa:

> *"Estamos mapeando cómo funciona hoy la visibilidad de equipaje en aeropuertos de LATAM. En Ezeiza específicamente, el gap está entre que una valija termina la clasificación y el momento en que sube al avión — ahí no hay confirmación automática. Queremos entender si eso es algo que AA ve como un problema o si ya tienen algo en marcha."*

### El movimiento central
Una vez confirmado el problema, presentar el modelo de distribución — no el precio ni el producto en detalle:

> *"La propuesta es que AA ofrezca BagMonitor a las aerolíneas como parte del paquete de terminal — de la misma forma que hoy el uso de SITA ya está incluido en lo que las aerolíneas pagan por las islas de check-in."*

Esto desplaza la conversación de "¿cuánto cuesta?" a "¿cómo lo estructuramos?".

### Preguntas para hacer en la reunión
1. ¿AA tiene visibilidad centralizada de los eventos de mishandling en sus terminales?
2. ¿Tienen alguna relación directa con la PSA en términos de identificación de equipaje?
3. ¿Existe alguna iniciativa de tecnología de operaciones de rampa en curso?
4. ¿Hay interés en diferenciar terminales AA frente a otros operadores regionales?

---

## Posibles objeciones y respuestas

**"Eso es un problema de las aerolíneas, no nuestro."**
→ Parcialmente correcto — pero las reclamaciones de equipaje generan fricción para el aeropuerto también. AA como operador de infraestructura puede tomar una posición proactiva: diferenciarse ofreciendo terminales con trazabilidad real, como diferencial competitivo ante aeropuertos de la región.

**"Las aerolíneas no van a querer pagar por esto."**
→ No tienen que negociarlo individualmente. Si AA lo incorpora como infraestructura de terminal, el costo puede distribuirse en los fees existentes. El precedente SITA ya demuestra que ese modelo funciona.

**"Ya tenemos sistemas."**
→ BagMonitor se integra vía API sobre DCS, BRS y los sistemas SITA existentes. El stack actual sigue intacto.

---

## El ask

Una reunión de 30 minutos con el área de **Tecnología u Operaciones de Terminal** para:

1. Validar si el gap de visibilidad entre clasificación y bodega es un problema conocido para AA
2. Explorar si el modelo de distribución vía operador aeroportuario tiene viabilidad en el contexto de AA2000
3. Definir si hay interés en un piloto en Ezeiza

---

## Pendiente antes de la reunión

- Identificar el interlocutor correcto dentro de AA2000 (área de Operaciones de Terminal, Tecnología o Innovación)
- Confirmar con una fuente directa si el bundling SITA/islas de check-in aplica exactamente a AA2000 o solo a EZEIZA como operador de handling
- Investigar si AA tiene iniciativas de modernización de infraestructura activas (licitaciones, proyectos en curso)
- Entender la relación contractual AA → PSA en terminales propias

---

*Fuentes principales: Pablo Ferrari (Vanderlande, mayo 2026), `09-go-to-market.md`, `03-target-audience-icp.md`, `21-bhs-field-operations.md`.*
