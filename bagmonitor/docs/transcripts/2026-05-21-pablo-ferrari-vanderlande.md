# Transcripción: Primera Reunión con Pablo Ferrari (Vanderlande)

Fecha: 21 de mayo de 2026

**Participantes:**

* **Pablo Ferrari:** Ingeniero en Vanderlande — sistemas BHS en aeropuertos de Argentina. Contacto inicial; opera bajo monotributo para consultoría y cuida no tener conflicto de interés con su empleador.
* **Ariel Fuggini:** Co-fundador de BagMonitor

---

**[00:00:00 — Prioridades de la PSA: inspección e identificación]**

**Ariel:** Entiendo cómo funciona el escaneado y el seguimiento, pero quiero confirmar: la premisa es que ellos tienen que poder identificar todas las valijas.

**Pablo:** Primero tienen que inspeccionar. Eso es lo que más les importa. La identificación es valor agregado.

**Ariel:** ¿Y con qué criterio es la inspección?

**Pablo:** El criterio es del aeropuerto, de la policía aeroportuaria. El valor agregado de una solución así es que la inspección queda atada a alguien — sabés de quién es la valija que se inspeccionó.

**Ariel:** Claro. Lo que Gabriel planteaba en nuestra reunión es que a veces les llega un dato de que tienen que ver tal valija, y si esa valija no está o algo raro pasa en el medio, no saben de quién es.

**Pablo:** Exacto. Gabriel quiere las dos cosas: resultado de inspección e identificación. En ese orden de prioridad.

**[00:01:45 — El problema de quién paga]**

**Ariel:** Con la PSA hay una complejidad central: ¿quién lo paga? La PCA no puede implementar un sistema en el que todas las valijas estén identificadas sola — necesita que las aerolíneas jueguen, o que baje de alguna regulación. Y si instalás algo en el aeropuerto, Aeropuertos Argentina también tiene que estar al tanto y quiere su parte. Hay una inevitable conjunción de actores.

**Pablo:** Sí. Ahora, pensando en esto: SITA es el servicio que le pone el nombre a la valija en el momento del check-in y lo distribuye entre los servidores de todo el mundo. Ese servicio tiene un costo, y en EZEIZA — según me dijeron, no tengo certeza — está incluido en lo que les cobran a las aerolíneas por usar las islas de facturación. Entonces todas las compañías que operan en EZEIZA podrían usar los mensajes de SITA sin pagar extra. Lo que digo con esto es: la mejor primera respuesta al "¿quién paga?" es **Aeropuertos Argentina**. Que AA le diga a las aerolíneas "tengo esto" y le diga a la PCA "tengo esto." Ellos como operador central pueden ofrecerlo como solución para todos los actores. A las aerolíneas les baja el costo de valijas reenviadas. A la PCA le da mejor identificación.

**Ariel:** Estás planteando al aeropuerto como cliente. El B2B es el aeropuerto.

**Pablo:** Sí, el B2B.

**Ariel:** Tiene todo el sentido. Justamente el próximo paso que teníamos era hablar con alguien relevante de Aeropuertos Argentina — mi ex-socio trabaja ahí en el área contable y habíamos barajado un nombre para ir a hablar.

**Pablo:** Yo todos los jueves me junto con gente de Aeropuertos Argentina. En temporada baja hacemos jueves intermedios, pero el jueves que viene voy igual. Me monto en el juego de la mejora continua y hago mis aportes de curiosidades tecnológicas.

**[00:03:07 — La PSA y el sistema de "puntitos verdes"]**

**Pablo:** La PSA tiene su departamento de sistemas donde implementan herramientas. De hecho implementaron un sistema de puntos calientes: si ven un punto verde que no se mueve, va la policía a ver qué está pasando. El liderazgo técnico de eso es la persona que se ocupó de eso.

**Ariel:** Sí, hablé con él — a través de Gabriel. Es el líder técnico del área. No recuerdo el nombre ahora.

**Pablo:** Ese es el que implementó el sistema de los puntitos.

**Ariel:** Exacto. Y con Gabriel había una situación: algunas valijas no pasaban por el checkpoint que tenían que pasar, y desde el aeropuerto estaban evaluando tirar una pared abajo y hacer más cinta transportadora para que la valija lupee una vez más. Un gasto multimillonario. Yo les dije: si las valijas están identificadas y controladas con este sistema, no necesitás hacer semejante infraestructura.

**Pablo:** Sí. Eso es lo que dejaron en pausa porque era muy caro: volver a obtener imagen de una valija que ya pasó por los tomógrafos.

**[00:05:03 — CT scanner "no pic": el problema de recirculación]**

**Pablo:** Los tomógrafos de vez en cuando dan un "no pic" — no obtienen imagen del interior de la valija, por algún error al levantar el reactivo. Cuando pasa eso, la valija se va a un sector de inspección secundaria donde hay una policía que la recibe físicamente y la pasa por rayos X convencionales más algún espectrómetro o prueba química de drogas. Si quisieras evitarte ese trabajo manual y hacer que la valija vuelva a pasar por el tomógrafo original, necesitás una recirculación — un desvío que la vuelva atrás. Eso es lo que es caro: tirar una pared, hacer una cinta transportadora con desviador, etcétera.

Además, hay un tomógrafo en particular que cuando le falla el generador — que ya tiene que cambiarse — se pone loco y tira 20 no pics seguidos. Esas hubiesen sido buenas hacerlas pasar por otro tomógrafo. Pero sin camino de retorno, no hay alternativa.

Esto no está directamente conectado con la identificación de valijas, pero Gabriel quiere las dos cosas juntas: identificación más resultado de inspección.

**[00:09:40 — Momento de asociación: check-in como punto de registro]**

**Pablo:** Todos los puestos de facturación entregan un dato a los servidores de SITA con el número que salió en el backtag. Vos te acercás y no sabés qué número te va a tocar — ese número se asocia a vuelo y persona en ese momento. Relacionándolo con BagMonitor: cuando se imprime el backtag es exactamente el momento en que podés asociar el ID del tag BLE a esa valija. Perfecto, coincide — es el momento preciso en que podés identificar la valija más adelante.

**Ariel:** Exacto. La premisa es que ese tag haya sido registrado y asociado a la persona. Y la única forma de hacerlo de manera sistemática y predecible es en el check-in, de la mano de la aerolínea, cuando ponen el tag dentro o sobre la valija.

**[00:19:01 — Tecnología del tag BLE: descripción para Pablo]**

**Ariel:** El dispositivo estándar es un circulito tipo llavero — o cuadradito. Lo importante es el chip adentro. Emite una señal con un paquete de mensajes grabado en su memoria, en intervalos configurables: cada 1, 2, 3 segundos. Los gateways y repetidores capturan esa señal; un algoritmo determina la ubicación aproximada del dispositivo en base a la potencia de la señal y la posición de los gateways. Es similar a la tecnología del AirTag, que usa los iPhones cercanos como receptores. Si no hay iPhones cerca, el AirTag es invisible. Los nuestros tienen gateways propios, independientes de dispositivos de consumo.

**Pablo:** Vi algo en la página. ¿Es reutilizable?

**Ariel:** Depende del uso. Si lo colgás en una valija y cuando llega la sacás y la guardás, es reutilizable. La pregunta logística es si la operación permite recuperarlo sistemáticamente.

**[00:24:27 — RFID en entornos industriales: lección de Pablo]**

**Pablo:** Yo tuve experiencia con RFID para identificación de ganado con caravanas chinas — funcionaban perfectamente, pasabas un mazo de caravanas y detectaba todo. Pero en entornos industriales con mucho metal, como la línea de paletizado en Volkswagen — impresoras Zebra con tags RFID + lectura radial — cada pieza de metal era una barrera. Se perdía la señal todo el tiempo.

**Ariel:** Buen punto. El entorno del BHS es también un entorno industrial con potencial ruido eléctrico. Hay que testearlo. Nada está garantizado hasta que se prueba — yo mismo tuve cámaras Wi-Fi en Volkswagen que fallaban por ruido de bobinas. En tecnología hay que testear.

**Pablo:** Sí. Lo que sí puedo decir es que el martes que viene estoy en EZEIZA y voy a buscar dos o tres puntos con la menor cantidad de obstrucciones físicas que puedan ser buenos puntos de identificación. Me hago un croquis.

**[00:29:55 — Identificación en la bandeja de la cinta (bandeja BHS)]**

**Ariel:** En la última reunión surgió la idea de poner algo en las bandejas de la cinta — en vez de identificar cada valija, tener identificación en la bandeja.

**Pablo:** Te iba a decir exactamente eso. De hecho, ya hay alguien que lo está haciendo: cuando hacen el inyectado de plástico para fabricar la bandeja, le meten algo incrustado adentro del molde. No sé qué es exactamente — puede ser un imán, algo rudimentario. Pero ya existe.

**Ariel:** Interesante para explorar. Y en la misma línea: una analogía que surgió es la del candado TSA en valijas Samsonite o American Tourister. ¿Por qué no viene la valija con un BLE incorporado desde fábrica?

**Pablo:** Es otra historia, pero es una variante válida.

**[00:31:55 — Estrategia de go-to-market: integrarse con un jugador grande]**

**Ariel:** Lo complicado es tratar de acordar entre las diferentes partes para que todas se pongan de acuerdo e implementen — es muy difícil de lograr. La alternativa más interesante es integrarse con un jugador grande que ya opere en el aeropuerto y pueda llevar la solución como parte de su oferta.

**Pablo:** Por eso digo que el mejor punto de partida es Aeropuertos Argentina. Que AA le diga a las aerolíneas "tengo esto" y a la PCA "tengo esto." Eso va a ser lo mejor.

**Ariel:** ¿Vos qué proximidad tenés con gente de AA?

**Pablo:** Todos los jueves. Me junto con ellos en el corporativo — en El Salvador. Hago mis aportes en la parte de mejora continua, toda la parte tecnológica.

**[00:28:37 — Visita a EZEIZA y próximos pasos]**

**Ariel:** ¿Podría hablar con Gabriel para ir a ver el BHS? Voy a necesitar algún tipo de permiso para ciertas áreas.

**Pablo:** Sí. Si llegás a ir con Gabriel al subsuelo del BHS, vas a pasar por donde estamos nosotros — Vanderlande tiene una oficina ahí abajo, con dos o tres personas permanentes en contacto directo con los mantenedores eléctricos y mecánicos. Yo voy de vez en cuando. Nos vamos a ver.

Eso sí — por las dudas podés decir que me conocés, pero trato de cuidarme del conflicto de interés con la empresa.

**Ariel:** No hay problema. Después charlamos la mejor manera. Lo importante es que las piezas están listas para probar — hay que instalar, testear y ajustar las tuercas.

**Pablo:** Voy a ir el martes, voy a mirar esos puntos que te digo que siempre los miro y digo "acá se podría" — los voy a mirar con esta opción ahora.

---

## Notas

* **Contexto:** Primera reunión de exploración. Pablo conoce el BHS de EZEIZA desde adentro (Vanderlande tiene oficina permanente en el subsuelo). La reunión establece el marco conceptual antes de que Pablo haga un relevamiento físico de puntos de instalación.

* **Prioridad de la PSA:** Primero inspección, luego identificación. Gabriel quiere ambas cosas. El tag BLE cubre la segunda; la inspección ya existe vía tomógrafos.

* **CT scanner "no pic":** Falla técnica donde el tomógrafo no obtiene imagen y la valija va a inspección secundaria manual. La recirculación (pasar la valija por otro tomógrafo) requeriría infraestructura costosa (desviar cintas, tirar paredes) — descartada por el momento.

* **Momento clave de asociación tag-valija:** El check-in, cuando se imprime el backtag, es exactamente el momento en que el ID del tag BLE debe asociarse a la valija y al pasajero. Coincide con el flujo existente de SITA/BCM.

* **Cliente ideal confirmado: Aeropuertos Argentina (B2B):** Pablo plantea al aeropuerto como el cliente natural — puede ofrecer la solución a aerolíneas y PSA desde una posición de autoridad central. Modelo análogo al de SITA, cuyo costo ya está incluido en lo que EZEIZA cobra a las aerolíneas por las islas de facturación.

* **Bandeja de cinta con elemento embebido:** Alguien ya está incrustando algo (¿imán?) en el molde de plástico de las bandejas BHS al fabricarlas. Pablo no conoce los detalles. A investigar.

* **RFID en entornos metálicos:** Experiencia directa de Pablo: alta interferencia en entornos industriales con metal. El BHS tiene el mismo riesgo — hay que validar con prueba real.

* **Próximos pasos acordados:**
  - **Pablo:** Relevamiento físico en EZEIZA el martes siguiente (26 mayo) — buscar puntos con mínimas obstrucciones para instalación de gateways, hacer croquis
  - **Pablo:** Aprovechar reunión semanal con Aeropuertos Argentina para tantear la conversación
  - **Ariel:** Consultar con Gabriel sobre posibilidad de visita al BHS
