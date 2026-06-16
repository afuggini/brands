# Sales Intelligence — Aprendizajes de Reuniones

Síntesis de todo lo aprendido en las reuniones documentadas en `docs/transcripts/`. Consolidado por tema para uso operativo: ventas, producto, posicionamiento y go-to-market. Las fuentes son las transcripciones de reuniones con Lufthansa, Gol, Turkish, Sky, Iberia, British Airways, Intercargo, Andes Líneas Aéreas, London Supply y Pablo García (RRPP).

Período cubierto: septiembre–noviembre 2025.

---

## 1. Ecosistema tecnológico de la industria

### Sistemas vigentes en aerolíneas

| Sistema | Rol | Quién lo usa |
|---|---|---|
| **World Tracer (SITA)** | Rastreo y recuperación de equipaje perdido. Estándar global post-extravío. | Turkish, Gol, Sky, Lufthansa, Turkish |
| **SITA "Bag Manager"** | Escáneres en puntos obligatorios de la operación. Costo: ~$0,075/valija + 6 escáneres/vuelo. | Lufthansa (en proceso con AA2000) |
| **Brock Solutions / "Brock Smart"** | Handhelds con lectura de código de barras y RFID en cada punto. Vinculado al sistema de reservas en tiempo real. | British Airways (implementación global reciente) |
| **Sabre DCS** | Sistema de check-in (Departure Control System). | Sky Airlines, Gol |
| **Amadeus / Quick** | DCS alternativo. Quick es el sistema de mostrador de Turkish, enlazado a SITA. | Turkish (Quick + SITA) |
| **NDC** | Canal de distribución alternativo para reducir costos GDS. No relacionado al equipaje, pero indica presión de costos general. | Turkish (en transición) |
| **BRS (Baggage Reconciliation System)** | Sistema de conciliación automatizada. Las aerolíneas más rezagadas lo están evaluando. | Sky (evaluando) |
| **BHS (Baggage Handling System)** | Sistema físico de cintas y clasificación en aeropuertos. | Sky Lima (nuevo, con problemas de flujo) |
| **AI operativa** | Turkish menciona uso de IA para predecir comportamiento de vuelos. No relacionado a equipaje directamente. | Turkish |

### Herramientas de ground handlers

- **"Bingo sheets"**: Planilla de papel usada en rampa para conciliar equipaje manualmente. Vigente en Gol, Sky y en aerolíneas que operan con Flybondi y Aerolíneas Argentinas. El mayor punto de falla del sistema actual.
- **Troquel / colilla**: Cupón físico que queda en la aerolínea tras el escaneo del check-in. Único registro en algunos casos.
- **iPads en llegadas**: Lufthansa los usa para alertas a bordo cuando una valija no fue escaneada.
- **Pistolitas con pantalla**: Handhelds de Brock Solutions usados por British Airways para escanear RFID.

### Organismos y regulación

- **IATA Resolución 753**: Obliga a las aerolíneas a registrar el equipaje en al menos 4 puntos del ciclo (check-in, carga en contenedor, carga en avión, entrega en cinta). Aerolíneas que no la cumplen son el target primario de BagMonitor.
- **Star Alliance**: El convenio de la alianza fija responsabilidad solidaria entre aerolíneas miembro para vuelos en conexión. Si la valija se despacha en código compartido, ambas aerolíneas responden.
- **Regulación de roturas** (dato Turkish): Las aerolíneas ya no pagan roturas estéticas ni rayones. Solo destrucción total o funcional de la valija.

---

## 2. Datos económicos del mercado

| Dato | Cifra | Fuente |
|---|---|---|
| Costo por transacción World Tracer (reclamo abierto y cerrado) | ~$22 USD | Turkish, British Airways (confirmado independientemente en ambas reuniones) |
| Costo estimado IATA por caso de mishandling | ~$150 USD (traslado + personal) | Sky Airlines |
| Costo del tag BagMonitor (versión desechable) | ~$1,50 USD | Lufthansa, Pablo García |
| Cargo SITA por valija (bag manager) | ~$0,075 USD/valija | Lufthansa |
| Pasaje vuelo VIP antártico London Supply | $14.000 USD (20 pax) | London Supply |
| Robo Lufthansa rampa | Mínimo 1 celular/semana (carga VAL) | Lufthansa |
| AirPods robados por tripulación (duty free) | €379/unidad | Lufthansa |
| Volumen Turkish Airlines | 150M pax/año, 900 aviones, 135 países, 18 cintas en Estambul | Turkish |
| Volumen Lufthansa Buenos Aires | 11.000 pax / 13.000 valijas / mes | Lufthansa |
| Volumen Sky Airlines | 36 aviones, >1M valijas/año | Sky |
| Volumen Gol Buenos Aires | 40.000 pax/mes, 10,5 vuelos diarios (14-15 fines de semana) | Gol |
| Mishandlings Gol Buenos Aires | 6-7/mes (casi todos demoras, no pérdidas) | Gol |
| Robos Gol Buenos Aires | 5-6 casos/mes | Gol |
| Volumen London Supply | ~2M pax/año (Ushuaia + Calafate + Trelew) | London Supply |
| Carga VAL Lufthansa | >$1.000 USD/kg (celulares, oro, metales, computadoras) | Lufthansa |
| Carga por palé Lufthansa | 29 palés / 100 toneladas por carguero | Lufthansa |
| Precio pasaje Domus (Buenos Aires–Miami) | $3.800–4.000 USD (vs. $8.000 AA / $6.000 Aerolíneas) | Domus |
| Venta de posición "Alas del Sur" a JetSMART | Sin dato de precio. JetSMART ahorró ~1 año de trámites. | Domus |
| Venta de Virgin America a Alaska Group | $4.800M USD (referencia de Peter Hunt, socio de Domus) | Domus |

---

## 3. Segmentación de mercado validada en campo

### Segmento A — Low-cost sin automatización (target primario)

Aerolíneas que aún operan con bingo sheets o tienen conciliación manual. Mayor dolor, menor resistencia al cambio, presupuesto ajustado.

**Validados en reuniones:** Sky Airlines, Gol. **Sugeridos por contactos:** Aerolíneas Argentinas, Flybondi, JetSMART, Arajet.

- Usan Sabre u otro DCS para check-in pero el patio es 100% manual.
- Su métrica de éxito es reducir el costo por mishandling ($150 IATA) y proteger NPS.
- Necesitan el business case antes de comprometerse a un piloto.
- La decisión final no es local: siempre sube a sede central (Brasil en Gol, Santiago en Sky).
- **Pitch que funcionó:** "No compran fierros de aeropuerto. Un celular con la app crea un nodo."

### Segmento B — Legacy/full-service con infraestructura ya instalada (target a largo plazo)

Aerolíneas que ya invirtieron en SITA, Brock u otro sistema. Resistencia alta a inversión adicional.

**Validados en reuniones:** Lufthansa (SITA), British Airways (Brock), Turkish (SITA + Quick).

- Consideran sus métricas actuales "aceptables" tras sus inversiones.
- Toda decisión va a la sede central (Turquía, Londres, Alemania). No hay autonomía local.
- Apertura real: cero a corto plazo para equipaje de pasajeros.
- **Pivot identificado en Lufthansa:** Carga de alto valor (VAL). El sistema de escáneres cubre valijas pero no la carga en rampa. Robo hormiga de Intercargo es el mayor dolor identificado.
- **Validación de mercado (British Airways):** Confirmaron que el sistema sería ideal para low-cost y carriers con operación manual.

### Segmento C — Operadores de ground handling (modelo de partnership)

No compran el sistema. El modelo es alianza operativa: ellos aportan mano de obra (personal con la app en rampa), la aerolínea paga o recibe el servicio como cobertura ampliada.

**Validado:** Intercargo (Buenos Aires). Situación: proceso de privatización, sin presupuesto para innovación.

- Mayor dolor operativo: robos de contenido (no pérdida total de valijas).
- El asesor ve valor jurídico en el modelo partnership: deslindar responsabilidades (¿el robo fue en origen o en rampa?).
- Escalará al Presidente de Intercargo.
- **Condición del pitch:** Cero costo para Intercargo. Es un valor agregado que Intercargo ofrece a las aerolíneas.

### Segmento D — Concesionarios de aeropuertos (modelo de infraestructura + retail)

No son aerolíneas. Pueden ser el nodo de infraestructura (instalan gateways) y el canal de distribución (venden tags).

**Validado:** London Supply (Ushuaia, Calafate, Trelew, puertos, zonas francas).

- Muy ágiles tecnológicamente. Ya instalando mapas 3D y biometría.
- Casos de uso identificados:
  - **Cruceristas "In & Out" en Ushuaia:** Valija va del avión al barco sin que el pasajero la vea. Estrés garantizado.
  - **Equipos de esquí** enviados directamente a hoteles/cerros (Castor, Martial).
  - **VIP antártico:** Vuelos de 20 pax a $14.000 USD. Dar un tag es un regalo de bienvenida.
  - **Paquetería e-commerce:** Mercado Libre opera un vuelo diario a la Patagonia.
  - **Retail:** Tags con marca compartida en Duty Free y kioscos Open 25.
- **Ventaja competitiva:** London Supply es "menos burocrático que Aeropuertos Argentina 2000".

### Segmento E — Aerolíneas chárter / turismo (canal indirecto)

No tienen dolor de extravío (operan punto a punto). El pitch no es operativo sino comercial.

**Validado:** Andes Líneas Aéreas.

- No están en IATA ni en World Tracer.
- No usan sistemas globales (sin código IATA para emitir).
- Operan con Intercargo y Flybondi como handlers en Ezeiza.
- **Pivot identificado:** No venderle a la aerolínea, venderle al operador turístico (Travel Rock). El diferenciador comercial: "Rastreo en vivo de las valijas de tus hijos en el viaje de egresados."

### Segmento G — Aerolíneas boutique / premium startup (pitch de CX)

No tienen el problema operativo de pérdida de equipaje (punto a punto, operación controlada). El argumento de venta no es reducción de costos sino **diferenciador de experiencia del pasajero**.

**Validado:** Domus Airlines (fundador Fernando).

- Modelo: A220 configurado a 56 asientos ejecutivos. Buenos Aires–Miami a $3.800–4.000 USD, la mitad del precio de la competencia.
- Operación punto a punto → tasa de extravío mínima → el pitch de "reducir mishandlings" no aplica.
- **Pivot validado por Fernando:** El tag como regalo de bienvenida o confirmación en app de que la valija subió al avión. Coherente con el branding premium.
- A futuro: cuando se alíen con SkyTeam o Delta para conexiones, el rastreo sí tendrá valor operativo.
- **Sinergia técnica única:** Domus contará con Wi-Fi satelital gratuito a bordo (Panasonic Avionics). Esto permite que el tag reporte en vuelo sobre el Atlántico, cerrando el único punto ciego de cobertura BLE en vuelos largos.
- **Ground handling propio:** Domus rechazó explícitamente a Intercargo y apunta a tener su propia empresa de rampa (modelo AGS, de los años 90). Operación propia = control total sobre la cadena = menor fricción para implementar BagMonitor.
- **Piloto confirmado:** Vuelos de certificación CESA (50 horas, A320) en nov/dic 2025. Fernando confirmó coordinarlo.
- **Referencia de precedente fallido:** Nicolás Key (Assist Card) intentó una solución similar y no lo logró. Dato a investigar.

### Segmento F — Carga de alto valor (vertical específica)

Independiente del segmento de la aerolínea. Cualquier carrier que mueva carga VAL es un target.

**Validado:** Lufthansa (carga aérea con 29 palés / 100 toneladas, mínimo 1 celular robado/semana en rampa).

- El tag se adhiere directamente a las cajas (no a valijas).
- El sistema puede generar "cargas cebo" para detectar puntos de robo.
- Gerente de cargas en Buenos Aires: Maximiliano (a contactar vía Diego).

---

## 4. Objeciones frecuentes y cómo responderlas

| Objeción | Fuente | Respuesta validada |
|---|---|---|
| "Ya invertimos mucho en SITA/Brock, no tiene sentido duplicar." | Lufthansa, British Airways | Para pasajeros: sin argumento a corto plazo. Pivot a carga VAL (Lufthansa) o a low-cost (BA lo sugirió directamente). |
| "El pasajero va a tener la info antes que nosotros y se arma lío a bordo." | Turkish | "Por eso el control del sistema lo tiene la aerolínea, no el pasajero. ITA Airways tuvo ese problema exactamente con AirTags — nuestro sistema lo resuelve." |
| "Somos una low cost, no tenemos presupuesto." | Gol, Turkish (sugiriendo bajar a low-cost) | "El costo es de un solo dígito en dólares por valija, marginal frente al costo de $150 por mishandling." |
| "En Turkish/Gol/etc. todo se decide en la sede central." | Turkish, Gol | Aceptar. Preparar material en inglés (Turkish explícitamente lo pidió) o en portugués/castellano (Gol) para ser escalado. |
| "Si les ofrezco esto a los pasajeros, van a dudar de si sus valijas se pierden." | Turkish | "No es un producto para el pasajero. Es infraestructura operativa de la aerolínea. El pasajero no necesita saberlo." |
| "En Turkish, las implementaciones son a escala completa o no se hacen." | Turkish | Aceptar. Pivotar a aerolíneas regionales como JetSMART, Arajet, Avianca. |
| "Estamos en proceso de privatización, no hay presupuesto." | Intercargo | "No requieren inversión. El modelo es una alianza: Intercargo aporta operación, la aerolínea paga. Es un diferenciador que ustedes ofrecen." |

---

## 5. Señales de compra identificadas

- **Sky Airlines:** Arnold pidió rangos de precios y volumen para armar el business case. Indicó disposición a piloto en rutas internacionales a Lima/Santiago. Alta señal de interés.
- **Lufthansa (carga):** Diego ofreció gestionar el contacto con Maximiliano (Gerente de Cargas) para explorar "cargas cebo". También solicitó unidades de muestra para test personal.
- **London Supply:** Invitación a Ushuaia (29-30 oct) para probar la tecnología in situ. Interés explícito en retail, VIP y cruceristas.
- **British Airways:** Fernanda y Jimena se comprometieron a escalar la presentación a Martín (Station Manager). Señal débil pero abierta.
- **Domus (aerolínea boutique):** Fernando confirmó piloto en nov/dic 2025 durante vuelos de certificación CESA (A320). También recomendó contactar a Gonzalo (Operaciones Sudamérica, American Airlines).
- **Iberia:** Carolina sugirió el camino formal vía IAGI.

---

## 6. Ecosistema de competidores y actores clave

### Competidores directos / referencias de mercado

- **AirTag (Apple) / Tile**: Dispositivos de consumo. El pasajero controla, la aerolínea es pasiva. Hasta hace poco las aerolíneas los bloqueaban; ahora Lost & Found los usa como ayuda. BA, Lufthansa, Qantas, Cathay, Virgin integran Apple Share Item Location con WorldTracer. **Riesgo:** normalización del rastreo consumer puede reducir el "dolor" percibido por aerolíneas.
- **Brock Solutions**: Sistema enterprise con RFID. Caro, requiere infraestructura en cada punto, implementación global. British Airways lo adoptó recientemente.
- **SITA / WorldTracer**: No es competidor directo. Es el sistema post-extravío. BagMonitor va upstream (prevención), WorldTracer es downstream (recuperación). Son complementarios.
- **Startup "Bob" (o "Board")**: Hizo un POC de Bluetooth con Iberia. Fracasó por puntos ciegos en la cobertura. Dejó un antecedente negativo en Iberia que hay que contrarrestar con evidencia técnica.
- **Assist Card (Nicolás Key)**: Intentó una solución de rastreo de equipaje similar y no lo logró. Mencionado por Fernando de Domus. Dato a investigar para entender qué falló y diferenciarse.

### Actores de ground handling en Argentina

- **Intercargo**: Principal handler de rampa. Opera para múltiples aerolíneas. Fuente principal de robos hormiga (confirmado por Lufthansa y Gol). En proceso de privatización.
- **Ross Racer**: Handler tercerizado de Turkish Airlines en Buenos Aires. Maneja check-in y control de equipaje.
- **Flybondi**: Mencionada como handler alternativo en Ezeiza para algunas operaciones de Andes.

### Distribuidores potenciales

- **Open 25**: Kioscos en aeropuertos. BagMonitor está cerrando un punto de entrega.
- **London Supply Duty Free**: Potencial canal retail en Ushuaia, Calafate, Trelew, Iguazú.

---

## 7. Aprendizajes de producto

### Fortalezas confirmadas en campo

1. **Sin infraestructura fija**: El argumento más convincente para low-cost y aeropuertos pequeños. Un celular crea un nodo en 10 minutos.
2. **Escalabilidad incremental**: Opuesto al "todo o nada" de soluciones como Brock. Se puede pilotear en una ruta, una terminal o un tipo de carga.
3. **Doble modo** (reutilizable / desechable): Permite adaptarse a distintos modelos operativos. JetSMART usa reutilizable. Low-cost puede preferir desechable con costo marginal.
4. **Integración API con DCS**: La posibilidad de cruzar automáticamente con Sabre o Amadeus elimina el proceso manual del patio sin reemplazar el sistema existente.
5. **Control del operador, no del pasajero**: Contrarrestar el problema de ITA Airways con AirTags disruptivos. Esta distinción es un argumento de venta clave.
6. **Tracking en vuelo vía Wi-Fi a bordo**: Validado con Domus (Panasonic Avionics). Si la aerolínea tiene internet satelital, el tag puede reportar en pleno vuelo oceánico, eliminando el único punto ciego de cobertura BLE en rutas largas. Argumento de venta para aerolíneas premium con conectividad a bordo.

### Limitaciones identificadas en campo

1. **Requiere nodos en destino**: Si la maleta llega a un aeropuerto sin cobertura (personal con la app), no hay señal. Iberia lo vivió como fracaso con Bob. Respuesta: cualquiera instala la app en 10 minutos, pero la objeción persiste para aerolíneas con muchos destinos.
2. **No localiza en tiempo real sin nodo activo**: Funciona por proximidad, no por GPS. La última ubicación conocida es lo máximo disponible sin un nodo cerca.
3. **Propuesta de valor débil para aerolíneas ya automatizadas**: Lufthansa (SITA), British Airways (Brock) y Turkish no tienen razón inmediata para adoptar algo adicional en el segmento de pasajeros.
4. **Mensaje técnico complejo**: Pablo García lo confirmó: el pitch confunde con términos como BLE, IoT, gateway. Se necesita simplificar a la propuesta de valor, no al mecanismo técnico.

### Casos de uso adicionales descubiertos (no originales del pitch)

- **Carga de alto valor (VAL)**: Tags adhesivos en cajas de celulares, oro, computadoras. Detección de apertura. "Cargas cebo".
- **Cruceristas "In & Out"**: Pasajero no ve su valija por horas. La ansiedad es el dolor, la trazabilidad es la solución.
- **Equipos de esquí y carga a hoteles**: Equipaje que no viaja con el pasajero y requiere seguimiento independiente.
- **Paquetería e-commerce**: Mercado Libre opera vuelos diarios a la Patagonia. Potencial de rastreo de carga no aeronáutica.
- **Pasajeros VIP**: Regalos de experiencia premium (London Supply, vuelos antárticos de $14.000 USD).
- **Mapas de calor de activos aeroportuarios**: Cualquier activo físico en un aeropuerto puede rastrearse con la misma infraestructura de gateways.

---

## 8. Go-to-market: aprendizajes estratégicos

### Posicionamiento

- **No usar "tecnología argentina"**: El mercado aeronáutico es global y conservador. El mensaje tiene que ser "innovación global que ninguna aerolínea tiene aún."
- **No hablar de Bluetooth, BLE ni IoT**: Pablo García lo confirmó. El pitch debe ser el beneficio, no el mecanismo. Comparar con "AirTag para la aerolínea" es el shortcut más efectivo.
- **El video de 90 segundos es crítico**: Pablo García lo señaló como prerequisito para llegar a la industria. Animación, sin detalle técnico, enfocado en el beneficio operativo.

### Canal de ventas

- **Ventas directas (B2B)**: Reunión de presentación → material escrito para escalar a HQ → propuesta de pricing → piloto → rollout.
- **Partnership con handlers**: Intercargo primero, luego otros. Modelo de cero costo para el handler.
- **Canal de aeropuertos**: London Supply como primer concesionario retail y de infraestructura.
- **Canal de operadores turísticos**: Travel Rock y similares para el segmento charter/turismo de estudiantes.

### Eventos clave de la industria

- **ALTA Leaders Forum** (Lima, 19-21 oct): CEOs de aerolíneas latinoamericanas. Recomendado por Pablo García como prioridad sobre FIT.
- **Feria FIT** (Argentina): Menos específico. Andes tiene stand en el pabellón de Cuba. Oportunidad de contacto con operadores turísticos.

### Estrategia de prensa y lanzamiento

1. **Piloto cerrado controlado** (JetSMART, Andes o Domus): Depurar tecnología sin exposición pública.
2. **"Vuelo testigo" con prensa**: Invitar a Sir Chandler, InfoViajera y otros influencers de aviación. JetSMART se lleva publicidad gratuita como "aerolínea innovadora". BagMonitor obtiene el caso de éxito.
3. **Aviación News**: Primera nota en el medio de Pablo García. Cuestionario listo para responder.
4. **Escalado a otras aerolíneas por efecto FOMO**: La visibilidad mediática presiona a otras aerolíneas a adoptar el sistema.

---

## 9. Contactos clave levantados en reuniones

| Contacto | Empresa | Rol | Estado |
|---|---|---|---|
| Diego | Lufthansa | Presidente AOC | Pedirle contacto de Maximiliano (Gerente de Cargas). Enviar dispositivos de muestra. |
| Maximiliano | Lufthansa (Cargas) | Gerente de Cargas | A contactar vía Diego para explorar carga VAL y cargas cebo. |
| Martín | British Airways | Station Manager | Fernanda y Jimena lo escalarán con la presentación. |
| Carolina | Iberia Innovación | Equipo de Innovación (Madrid) | Enviar presentación técnica + casos de éxito. Evaluar postulación a IAGI. |
| Martín | Iberia Innovación | Jefe de Innovación (supervisor de Carolina) | Contacto indirecto vía Carolina. |
| Arnold Mayorga | Sky Airlines | Responsable Aeropuertos Internacionales Sudamérica | Enviar propuesta de pricing y volúmenes. Definir ruta piloto. |
| Juan Valdivia | Sky Airlines | Jefe Operaciones Terrestres Perú | Parte del equipo de decisión de Sky. |
| Asesor externo | Intercargo | Ex Director Operativo, actual Asesor | Enviar presentación ejecutiva para elevar al Presidente. |
| Pablo | Andes Líneas Aéreas | Dueño / Representante | Reunión en FIT (stand Cuba). Enfocar pitch en operadores turísticos. |
| Representante London Supply | London Supply | Ejecutivo de Innovación | Visita de campo a Ushuaia (29-30 oct). Coordinar con Jefe de Handling. |
| Pablo García | Aviación News / CBR | Consultor de RRPP | Coordinar Lima + nota en Aviación News + vuelo testigo. |
| Fernando | Domus Airlines | Fundador | Coordinar prueba piloto en nov/dic 2025 (vuelos CESA, A320). Intercambiar WhatsApp/mail. |
| Gonzalo | American Airlines | Operaciones Sudamérica | Referido por Fernando de Domus. "Tipazo y muy innovador." Prospectar como entrada al mercado AA. |

---

## 10. Industry Signals — Public Sources (c.2024)

The sections above are based on direct field meetings. This section draws from public video content featuring airline and industry executives. The source files are in `docs/research/`. These signals are not field intelligence — they are external validations that can be used to reinforce the pitch with third-party credibility.

### a) The emotional dimension of lost luggage

Julia Sattel (former President of Airlines, Amadeus) shared a personal anecdote: she arrived at a meeting with top executives wearing old jeans because her suitcase was lost. The point isn't the logistical failure — it's the social embarrassment. Passengers don't experience a "mishandling event." They experience arriving unprepared to a professional meeting, or without swimwear on vacation, or without a child's medicine.

**Sales application:** Use this framing to open B2B presentations before moving to data. The operations audience knows the problem; the emotional framing helps C-suite audiences internalize it as a customer retention issue, not just an ops metric.

### b) Technology maturity counter-argument (when buyers cite past failures)

Gus Naughton (Innovation Engineering Lead, Alaska Airlines) described a 500-passenger trial of electronic bag tags that failed in 2015. The exact same technology was retested seven years later and succeeded — because the underlying hardware, software maturity, and passenger behavior had caught up.

**Sales application:** Direct counter to buyers who say "we tried something like this before and it didn't work" (the Iberia/"Bob" situation is the local version of this). The argument: past failure is often a timing failure, not a concept failure. The infrastructure is different now.

### c) Human accountability as part of the pitch

Both Sattel and Korosis (Ground Ops, Aegean) emphasize that technology without staff alignment fails. Sattel recommends explicit education programs and incentive systems for ramp and check-in personnel. Korosis dealt with it in practice: post-pandemic new hires unfamiliar with procedures were a compounding factor in Aegean's mishandling rates.

**Sales application:** BagMonitor's pitch can go beyond "here's the system" to "here's how we help you get your team to actually use it." This is a differentiator against solutions that sell hardware or software without addressing adoption. Relevant when speaking to carriers that have already tried and underused a previous system.

### d) Adjacent opportunity: computer vision for carry-on

Alaska Airlines tested cameras at boarding gates to automatically count carry-on bags before asking passengers to gate-check. The system prevents agents from unnecessarily requesting gate checks when overhead space is still available — improving turnaround times, passenger experience, and fuel calculations (accurate hold weight data).

**Sales application:** Not directly BagMonitor's product, but a signal that Innovation buyers at airlines are actively investing in vision/tracking technology across the entire baggage journey — not just hold baggage. Opens a broader conversation about the tracking ecosystem when speaking to Innovation or Digital Transformation profiles.
