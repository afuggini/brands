# Transcripción: Reunión Técnica con Pablo Ferrari (Vanderlande)

Fecha: 29 de mayo de 2026

**Participantes:**

* **Pablo Ferrari:** Ingeniero en Vanderlande — sistemas BHS (Baggage Handling Systems) en aeropuertos de Argentina. Actúa informalmente como consultor técnico; tiene monotributo activo para consultoría y mantendrá perfil discreto para evitar conflictos de interés con su empleo actual.
* **Ariel Fuggini:** Co-fundador de BagMonitor

---

**[00:06:55 — Recorrido del BHS]**

**Pablo:** Estuve recorriendo distintos puntos en el área de inspección de nivel tres. Voy a mostrarte el unifilar — el recorrido que hacen las valijas. Es una especificación funcional, no es un dato de producción, está hasta impreso. Hay también un video de GoPro publicado en YouTube donde le pusieron una cámara arriba de una valija y hacés todo el recorrido en 360°. Te voy a pasar el link.

*[Pablo comparte pantalla con el diagrama unifilar]*

Desde facturación hasta el patio de valijas. Lo que ves en vertical son las baterías de puestos de facturación. Lo de abajo son las líneas principales del BHS. Lo que ves en vertical amarillo son los tomógrafos. Arriba hay una preclasificación que decide si va a la derecha o a la izquierda. Al final tenés diez — cinco carruseles de cada lado. En la parte blanca imaginemos que está el playón. Los camioncitos vienen desde el avión hasta el carrusel que le corresponde, levantan las valijas y se las llevan a la bodega.

**[00:11:24 — Stakeholders y valor]**

**Pablo:** Me puse a ver distintos huecos donde precisaríamos una identificación y seguimiento preciso. Por ejemplo, en la zona de seguridad — zona de inspección — para la PSA saber qué valija es y de quién es, un golazo. Pero también lo que me parece más interesante para las aerolíneas: bajar los costos de reenvío de una valija al hotel y un vuelo nuevo. Para cuantificarlo tendría que investigar con alguien con contacto directo con las aerolíneas, para poder decir "con esto lo bajás un 30%."

Otro punto: esto es un elemento que podés poner y recuperar. Si la aerolínea opera vuelos de ida y vuelta, la misma compañía podría recuperar los tags en destino y volverlos a traer en el viaje de regreso. No va a ser el 100%, pero eficientiza costos.

**[00:14:35 — BCM, BSM y BPM: el gap de información]**

**Pablo:** Hay un mensaje que se llama BSM — si no lo escuchaste nombrar no importa, está todo documentado en la web de SITA. El BCM es el mensaje que genera cada puesto de facturación cuando se acerca el usuario: crea el número e inicia el proceso. Ese es el que inicia todo. Y debería haber al final del proceso un BPM en vez de un BCM — BPM, donde la P es de "procesado." ¿Qué significa? Que si elijo un puesto de facturación X, en el momento en que se imprime el marbete, se envía un BCM a SITA. SITA lo distribuye a los interesados. Cuando la valija ingresa al BHS y se clasifica, debería emitir y compartirle a SITA un BPM — entonces SITA entiende que entró la valija, se procesó y salió. Como un seguimiento de Mercado Libre que te dice "entró al centro de distribución, salió."

**Ariel:** Eso es un estándar de SITA y todas las aerolíneas lo están haciendo, ¿no?

**Pablo:** El BSM ya está implementado en un montón de aeropuertos. El BPM es estándar, pero no lo mandan — de hecho nos están pidiendo si tenemos la posibilidad de mandarlo al final. Hay un lugarcito donde cuando se termina la clasificación habría que mandar el BPM, pero no se está usando.

Y acá vienen los sistemas adicionales que han puesto para un seguimiento entre el carrusel y el avión. Hay distintos softwares que hacen un arqueo entre lo que llega al patio de valijas y lo que sube al avión.

**[00:19:02 — Métodos actuales: manuales]**

**Pablo:** Lo que llega al patio de valijas: hay gente con lector y van leyendo los marbetes y después cotejan con el manifiesto que todo lo que metieron en la bodega salga. Entonces tenés el BCM que terminaría con el BPM que no se está usando, y por otro lado estos sistemas adicionales que han puesto entre la clasificación y la bodega — que es administrativo con soporte digital o handheld. Pero tenés que andar leyendo, no es automático.

**Ariel:** Hoy por hoy no es automático. Es todo manual.

**Pablo:** No es automático. Lo hace cada aerolínea y hay que ver si tiene el presupuesto para pagárselo. Hay gente que tiene una listita y va haciendo así como el bingo.

**Ariel:** Aerolíneas Argentinas. Me consta que lo hacen con la listita — el bingo, y hasta le van pegando stickers.

**Pablo:** Exactamente.

**[00:20:14 — Propuesta: tags BLE viajando con la valija]**

**Pablo:** Recorriendo el BHS y viendo posibilidades, para la zona de inspección de la PSA: identificación precisa sí le va a interesar a Gabriel, pero tal vez no sea el caso de negocio más jugoso. Me parece más interesante dar una vuelta de rosca para bajar el costo de reenvío de valijas y tener un seguimiento alternativo al que están usando — donde hay como tres o cuatro soluciones y me parece que todavía no gana ninguna.

La parte en la que se podría recuperar valor: muchos de los vuelos van y vienen. La misma compañía podría estar recuperando muchos de esos tags en destino y volverlos a traer en el viaje de regreso. No va a ser el 100% — va a haber un montón que se van a perder — pero es eficientizar costos.

**Ariel:** Interesante si la logística se pudiera dar. Reduce costos y hace mucho más viable esto que generar un tag nuevo cada vez — que no es un papelito que se imprime o un RFID que salen en millonadas, sino un ítem ligeramente más sofisticado que produce otro tipo de residuo. Es más eficiente si se vuelve a utilizar al menos por un tiempo.

**Pablo:** Me lo puse a pensar: es una herramientita más sofisticada que un papel o un marbete. ¿Por qué no lo puedo volver a usar? Me sirve.

**[00:24:27 — BagMonitor como capa consistente de principio a fin]**

**Ariel:** Para repasar: hay una serie de tecnologías con diferente propósito, pero ninguna que unifique todo — son todas partecitas, lo que conlleva más puntos de fallo posibles y deja el ecosistema incompleto. Mucha mano humana entre la clasificación y la bodega. Algo que un rastreador permitiría es que, a muy bajo costo de implementación, todo ese trayecto funcionara como un sistema único — lineal, de principio a fin — vinculado con un único tag por maleta en todas las instancias. No tiene que reemplazar lo que hay, puede ser complementario. Pero agrega un punto de información consistente de principio a fin que hoy no existe.

**Pablo:** Me gusta el tema de que no se pisan, trabajan en conjunto. Más allá de que tenga el marbete impreso, tenga también el dispositivo incrustado que viaje con la valija.

**[00:26:18 — Seguridad de la batería en zona de tomógrafos]**

**Pablo:** Pensé en los tomógrafos... pero no, la pila no pasa nada. Incluso podés tener cuatro o seis alcalinas que no van a saltar. En la zona de tomógrafos a veces te dicen que si llevás una batería suelta te la hacen sacar — yo una vez la llevaba despachada y me la hicieron llevar en cabina. Pero es un porcentaje, depende de la cantidad de centímetros cúbicos de litio.

**Ariel:** Igual para el tomógrafo no necesitamos nada de eso. El dispositivo usa una pila de reloj. Mirá, acá tengo el dispositivo. La pilita finita que entra acá es la 2032.

**Pablo:** La 2032, perfecto. Sí, no — es una pila re chiquita. No pasa nada.

**[00:28:58 — Infraestructura: gateway y repetidor]**

**Ariel:** Hay otro dispositivo que funciona como repetidor para redundar la data — también inalámbrico, se pone en cualquier lado. El gateway en cambio tiene que estar conectado a Ethernet y a una corriente permanente. Y podemos llenarlo de estos. Como verás, al lado de las máquinas y tomógrafos, estos son costos que no mueven la aguja.

**Pablo:** ¿Cada cuánto conviene poner una antena, pensando en el ruido eléctrico?

**Ariel:** Eso está por verse, no conozco cómo es ahí abajo. Y hay que ver si los tomógrafos, en la forma en que funcionan, van a generar un ruido que bloquee la señal.

**[00:30:14 — Integración TCP/UDP con el software del tomógrafo]**

**Pablo:** Yo igual creo que hay una solución técnica: el dato lo recuperás antes y se lo mandás por enlace — TCP, UDP, lo que sea — directamente al software del tomógrafo. Entonces el software del tomógrafo recibe ese dato y sabe qué bulto está llegando. Ahí no hace falta hardware de detección dentro del tomógrafo.

**Ariel:** No te seguí.

**Pablo:** El tomógrafo es una caja cerrada y un producto cerrado — nosotros no sabemos cómo identifica el bulto adentro, pero sí sabemos cómo comunicarle lo que identificamos antes. ¿Ves estos que están acá abajo amarillitos antes de los tomógrafos? Son arcos de lectura. El arco de lectura lee el marbete con varios cabezales y le comparte el dato al dispositivo tomógrafo vía comunicación TCP. Adentro el tomógrafo tiene cintas — le da un número propio por las dudas, como si fuera alguien que entra a la panadería. Cuando sale la valija inspeccionada, hay que volver a darle una identificación para saber que es la misma que pasó por el tomógrafo. Por eso: identificás el dispositivo que lleva enganchado la valija antes, compartís el dato al tomógrafo, y después, cuando sale, lo identificás de nuevo para saber que es el mismo bulto que entró e hizo la inspección.

**Ariel:** O sea, son instancias de identificación una tras otra. Ese bulto es este, ese bulto es este.

**Pablo:** Exacto. Como sabés que te desaparece a la vista adentro, lo identificás antes, compartís el dato al tomógrafo — él lo relaciona con el bulto — y después de nuevo lo identificás para saber que sigue siendo el mismo. Tick de un lado y de otro. En lo técnico eso no me preocupa. Pero sí es condición para decir dónde ponemos antenas, dónde ponemos lectores — uno antes y uno después, seguro.

**[00:33:52 — Distancias en la zona de inspección]**

**Ariel:** ¿Qué distancia hay de uno y otro en distancia real?

**Pablo:** Desde la zona de facturación hasta la salida debe haber 30-40 metros. El tramo de los tomógrafos propiamente debe ser 10-12 metros. Pero digo 30, porque esa es toda la zona de tracking donde querría saber dónde está el bulto. Tal vez no lo detectás adentro del tomógrafo — por eso digo antes y después.

**[00:35:05 — Tres categorías de análisis]**

**Ariel:** Lo que venía pensando hoy se organiza en un par de categorías. Una: técnicamente es viable. Otra: ¿agrega valor y a quién? Y la tercera: ¿quién sería el cliente, quién paga? Porque le agrega valor a la PSA — Gabriel contento, PSA feliz. Ahora, ¿son ellos el cliente potencial, o su ser clientes está condicionado a que otro pague o apruebe?

**Pablo:** Después si estuviera implementado le va a servir a la PSA. Pero el argumento solo para la PSA tal vez no toma tanta fuerza. Si es "por el lado de las aerolíneas tenés esto, y le sirve también a la PSA dentro del aeropuerto desde su ingreso" — ahí sí.

**Ariel:** Y ni hablar de ir más arriba — ver cómo hacer algún convenio con SITA, que como gente que une todo el trayecto está involucrada en todo el proceso. Si ellos dicen que esto va, la aerolínea le va a dar mucho más crédito percibiendo que es algo integrado en todo el proceso.

**Pablo:** Por eso también decía que está bueno de inicio a fin y que el fin no sea acá en el patio de valijas — que sea en destino. Ahí entra SITA en el medio. Y más: la lectura del tag entrando a bodega va a generar el BPM y vas a estar siendo muchísimo más preciso — enviando un BPM cuando la valija está subiendo al avión, no cuando se clasificó. Porque pasa — y no solo acá, en otros aeropuertos también — que la valija se clasifica, llega al carrusel, circula, le dicen "fosa" a lo que está justo dentro del carrusel, y si el personal de handling no retira las valijas por paro o lo que sea, se llenan los carruseles y algunas se caen para adentro. Sale el avión, esa quedó ahí. Si estuviéramos enviando el BPM desde la clasificación — ponele que lo enviaste — llegás a destino y te dice "BPM creado." Pero la valija se quedó.

**[00:37:27 — Precisión Bluetooth: inventario de zona]**

**Ariel:** Un comentario sobre eso. Si yo acá en mi living tengo cinco valijas y pongo los gateways a leer, me va a detectar que hay cinco cosas en esta zona, pero no me va a decir cuál es cuál — porque están muy próximas. El BLE permite una aproximación de rango de metros modestamente pequeño, pero si tenés un montón uno al lado del otro, ese fino necesita complementarse con otra tecnología si se necesitara. Lo que te digo es que está en esta zona. Por ejemplo: "está en la zona de clasificación izquierda" — te dice eso. Pero "es la negra, la roja o la azul" — no.

**Pablo:** Espera, la respuesta de cada llavero no tiene un ID propio para saber que es uno u otro?

**Ariel:** Sí, tiene su ID único. Lo que no te digo es "de estas cinco, la negra es tal" — cuando están ahí juntas no podés señalarlas. Pero sí, si ponele que un avión salió muy rápido y quedaron 50 valijas abajo, vos levantás un lector y "acá está tal y tal y tal y tal." Sabés cuáles son. Cuál es cuál en el montón — eso no.

**Pablo:** No, está bien. Entonces imaginé bien: cuando estaban todas juntas pensé que no podías discriminar una de la otra. Ah, bueno — es una lista. Sí, suficiente. Con saber que está en ese lugar es suficiente porque confirmás que no falta.

**[00:41:17 — Tracking en bodega de avión]**

**Ariel:** Potencialmente en el avión — o en lo que esté más en contacto con la bodega del avión en carga y descarga — se puede llegar a poner algo también. ¿Viste que el avión es medio tabú para esas cosas?

**Pablo:** Viste que ahora todos los aviones tienen internet. Ya no es tabú eso.

**Ariel:** Exacto. Estos gateways — si les ponés un Ethernet adentro del avión, en la bodega — no tienen litio adentro. Los conectás a Ethernet y a 12V y mandan info en tiempo real como si estuvieran instalados en cualquier otro lado. Técnicamente se puede cubrir de principio a fin, incluido el avión.

**Pablo:** Sí. Me interesaba el tema del "principio a fin" donde el fin tal vez sea el destino — que el tag viaje y sepas que está en bodega.

**[00:44:47 — Comparación con RFID: Siemens y el estado actual]**

**Pablo:** Siemens en soluciones aeroportuarias estaba usando RFID y antenas radiales. No sé exactamente cómo funciona. Era para un seguimiento muy local — como las fotocélulas: de transportador a transportador, "acá está, acá está, acá está." Por obstrucción.

**Ariel:** La tecnología RFID funciona hace cuántos años y no hubo grandes avances. Lo que veo que va a pasar es que el dispositivo localizador sea cada vez más económico, más sofisticado y más masivo. La próxima generación se alimenta con luz y son como etiquetas, pero flexibles.

**Pablo:** Vi unas que eran flexibles. Sí.

**Ariel:** El próximo paso es eso. Si hacés una implementación de esto ahora, el día de mañana la tenés para la etiqueta flexible. Estás 20 pasos adelante.

**Pablo:** Yo te digo — desde el momento uno me interesó. Esto está mejor que lo que está ahora. Y cuando venga la versión dos, ya esté el escenario compatible.

**[00:48:56 — Próximos pasos: investigación de costos]**

**Pablo:** Me anoté tres cosas. Primero: tengo alguien para preguntarle a las aerolíneas. En la primera conversación las habíamos dejado fuera porque parecía que no estaban interesadas, pero hablarles y ver cuánto gastan me va a venir bien. Si de repente lo paga la aerolínea con el precio del boarding pass, o funciona para todas las aerolíneas y lo paga el aeropuerto.

**Ariel:** Las aerolíneas que operan en SEISA — la impresión que nos dieron es que a nivel local no pierden tantas valijas. "No es un problema grande" a nivel Ezeiza o Aeroparque.

**Pablo:** En SEISA una vez se quejaron porque estaban teniendo que enviar muchas valijas aparte. Puede que fuera un periodo puntual en que algo funcionaba mal. Pero sí, quiero medirlo y sé a quién pedírselo.

**[00:51:05 — Estrategia de alianzas: SITA, PSA, aerolíneas]**

**Pablo:** Lo que pasa es que si el argumento llega por las aerolíneas y le sirve también a la PCA dentro del aeropuerto, tiene más fuerza. Combinado.

**Ariel:** Y el pasajero: está comprobado que cuando los pasajeros saben dónde está su valija, sube su nivel de confianza. SITA hizo este trabajo de encuestas y está medido. Y vos esto lo podés unificar — si lo tienen aerolínea A, aerolínea B y aerolínea C, BagMonitor tiene la información de todos y todos los pasajeros pueden saber dónde está su valija.

**Pablo:** Me encanta. Tipo fidelización del pasajero.

**[00:57:02 — Aeropuertos con el problema: alcance internacional]**

**Ariel:** SEISA no es necesariamente de los aeropuertos con los problemas más complejos y costosos. Hay aeropuertos que están al horno con las valijas.

**Pablo:** Claro. Todas las semanas yo converso con Lima, con Nuevo Pudahuel en Chile, con Tocumen en Panamá, con El Prat de Barcelona — y Brasil también. Florianópolis, aunque son más chiquititos. Y acá en São Paulo hay mucho lío.

**Ariel:** Tenía data de que se comen juicios reales por pérdidas de valijas en São Paulo — les sale más caro la jodida.

**Pablo:** Sí, en São Paulo hay mucho lío.

**[01:00:16 — Analogía LED y sistema en Chile]**

**Pablo:** Yo creo que es como la lamparita incandescente — en algún momento estábamos rodeados de cosas LED, dijimos "¿cuándo vienen las lamparitas LED?" y vinieron. Al principio valían 1000 cada una, ahora valen 50 pesos. Estoy de acuerdo, en la misma línea.

Me anoté tres cosas. Aerolíneas — cuánto gastan. El sistema entre el carrusel y el avión — yo sé de uno que está operando en Chile. Lo vi, de hecho trabajé con uno de ellos que estaba en la empresa y después se fue a hacer un sistema re chiquitito para eso — el arqueo entre lo que sale del carrusel y lo que se carga en el avión. Quiero saber qué cuesta, cómo funciona, contra qué competimos.

**Ariel:** Eso sería muy bueno saberlo — cuánto le representa a quien lo usa, qué costo tiene.

**Pablo:** Claro. Y tercero: SITA. Tengo que ir con un poquito más de cuidado, haciéndome el tonto. Pero sé cómo hacerlo. Tengo alguien con el que estuve hablando un problema que teníamos, hace ya un par de semanas.

**[01:02:37 — Situación laboral de Pablo]**

**Pablo:** Además del recibo de sueldo como empleado, tengo mi monotributo al día — lo he hecho para consultoría, legal, sin problema o conflicto de intereses. No sé en este caso porque hay muchas cositas que podrían llegar a ser productos potenciales. Voy a averiguar con uno que me asesora para no tener quilombo.

**Ariel:** Siempre podemos mantenerte debajo del radar y que participes como sea.

**Pablo:** Sí, sí. Bárbaro.

**[01:03:53 — Vanderlande y alianzas]**

**Ariel:** Con una empresa como Vanderlande, a lo mejor también una asociación de alguna manera, ¿no? Como partner.

**Pablo:** Sí, como partner. Si vale la pena. Ahí tengo que preguntar porque Vanderlande tiene 1500 formularios para dar de alta a un proveedor. De hecho, mi hermana trabaja para una bodega de vinos en San Rafael y para fin de año yo le dije "hacé los regalos empresariales a Vanderlande." Tuvo que mandar el Swift de no sé cuánto, los últimos tres pagos de AFIP de la bodega... Muy difícil. Pero lo voy a averiguar si vale la pena.

**[01:04:56 — Prueba de concepto en el aeropuerto]**

**Ariel:** Cuando sea el momento correcto, hacer una pruebita técnica real en un site. Como para darse vuelta y decirle a SITA o quien sea: "Che, mira, anda."

**Pablo:** A Gabriel yo se lo plantearía y Gabriel para mí abre las puertas. Es muy pro-tecnología. Si le insistís que necesitás un permiso para hacer una prueba así, vas a terminar hablando también con los que hacen inteligencia — lo que llaman el "sistema de los puntitos verdes" — los que van mirando el patrón de los movimientos, que en realidad son personas filmadas. Van a estar abriendo los ojos.

**[01:07:04 — Cómo presentárselo a Gabriel]**

**Ariel:** ¿Cómo le puedo decir o no le digo nada sobre con quién estoy viendo esto?

**Pablo:** Podés decirle que estuviste asesorando técnicamente con alguien que hace seguimiento satelital — que casualmente es primo de Pablo — para darle contexto profesional y legítimo sin revelar los detalles completos. De hecho es verdad: Max Tracker es una empresa de seguimiento satelital y el presidente es mi primo.

**Ariel:** Entonces le puedo mencionar tu nombre y decirle "con un primo de él estamos viendo algo."

**Pablo:** Sí. O decirle "Pablo me dijo que trabaja en algo de valijas" — nada más. Para que no se imagine que fuimos tanto en detalle. Después incluso va a salir cuando estemos ahí. Tal vez no le contás la receta de Coca-Cola, pero le contás qué están viendo.

**[01:09:47 — PSA como canal de entrada para el POC]**

**Ariel:** Para hacer una prueba real y concreta, supongo que Gabriel me va a decir que alguien tiene que aprobar — el aeropuerto, Vanderlande, o ambos.

**Pablo:** Por eso digo que vayas por el lado de la PCA. Porque si PCA pide una prueba, ellos tienen mucho peso en lo que es seguridad dentro del BHS. El aeropuerto muchas veces espera que ellos decidan y aprueben. Los permisos para circular los aprueban ellos. Entonces, si la PCA dice "necesito hacer una prueba así," lo hacés escoltado con gente de la PCA, con alguien del sistema. Está todo en luz verde si estás con ellos.

**Ariel:** Entonces abro conversación con Gabriel y le planteo.

**Pablo:** Pero todo esto que acabo de decir, repreguntáselo para que te lo confirme. Yo hasta que consiga la respuesta de las aerolíneas — tengo de acá a tres semanas, y lo veo una vez por semana, así que le puedo escribir y pedir. Cualquier cosa técnica que necesites, me escribís.

**Ariel:** Quedamos así. Volvemos a hablar cuando tengas la info. Gracias, Pablo.

**Pablo:** Un abrazo. Hablamos.

---

## Notas

* **Contexto:** Primera reunión técnica de validación, en base a recorrido de Pablo por el BHS de SEISA. Pablo actúa como asesor informal con conocimiento directo del sistema. No representa a Vanderlande institucionalmente; consultará con asesor sobre posible conflicto de interés y operará bajo monotributo mientras tanto.

* **Validaciones técnicas confirmadas:**
  - Tag CR2032 seguro en entornos de tomógrafo CT (no es batería de litio de gran volumen)
  - Integración TCP/UDP con software de tomógrafo técnicamente viable — los arcos de lectura antes del CT ya hacen esto con el marbete
  - Readers deben colocarse antes y después del área de CT (zona total ~30-40m; sección CT ~10-12m)
  - Bluetooth funciona como inventario de zona (IDs presentes en una zona), no como localizador visual individual — suficiente para confirmar que una valija está en la zona esperada
  - Gateway en bodega de avión: factible con Ethernet + 12V; aviones modernos tienen internet

* **Gap crítico validado (BCM → BPM):** El BCM/BSM (Baggage Check-in Message) es estándar SITA, implementado. El BPM (Baggage Processed Message), que debería enviarse al final de la clasificación, no se está usando consistentemente. Las aerolíneas no reciben confirmación automática de que la valija llegó al avión. Un tag BagMonitor leyéndose al subir a bodega generaría un BPM más preciso que el que se enviaría desde la clasificación — donde la valija puede haberse caído a la "fosa" del carrusel.

* **Métodos actuales confirmados:** Handhelds y listas en papel (Aerolíneas Argentinas, confirmado verbalmente). No automático. Algunos operadores tienen software de arqueo pero requieren intervención humana.

* **Competidor a investigar — Chile:** Pablo conoce directamente un sistema de arqueo carrusel → bodega operando en Chile, construido por un ex-colega suyo. Investigará costos y detalles.

* **Siemens/RFID:** Estaba usando RFID + antenas radiales para tracking muy local (tipo fotocélulas de transportador a transportador, por obstrucción). No es tracking continuo.

* **Tag recovery:** En vuelos de ida y vuelta, los tags pueden recuperarse en destino y reutilizarse. No 100%, pero reduce el volumen de tags nuevos necesarios.

* **Aeropuertos con conversaciones activas de Pablo:** Lima, Nuevo Pudahuel (Chile), Tocumen (Panamá), El Prat (Barcelona), Florianópolis, São Paulo. En São Paulo: costos altos por litigios de pérdida de valijas.

* **Próximos pasos acordados:**
  - **Pablo:** Investigar con contacto en aerolíneas cuánto gastan en reenvío de valijas
  - **Pablo:** Obtener detalles y costos del sistema de arqueo en Chile
  - **Pablo:** Indagar interés de SITA vía contacto directo que ya tiene activo
  - **Pablo:** Explorar posibilidad de partnership con Vanderlande (verificar proceso de alta de proveedor)
  - **Ariel:** Contactar a Gabriel para plantear prueba de concepto técnica en aeropuerto
  - **Canal de POC:** PSA/PCA — tienen autoridad sobre el BHS y pueden otorgar permisos de circulación con escolta
