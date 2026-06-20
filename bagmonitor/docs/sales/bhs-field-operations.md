# BHS Field Operations — Ezeiza International Airport (EZE)

> **Scope:** This document describes the baggage handling system (BHS) as observed at Ezeiza International Airport (EZE / EZEIZA), Argentina, Level 3 inspection area. Sources: Pablo Ferrari, Vanderlande BHS systems engineer (May 2026); Gabriel Marrapodi, PSA — Policía de Seguridad Aeroportuaria (January 2026). Operational details may vary across airports and BHS configurations.

---

## BHS Flow — Level 3 Inspection Area

The standard baggage flow from check-in to aircraft at EZE:

1. **Check-in** — Bag accepted at counter. BCM (Baggage Check-in Message, also referred to as BSM / Baggage Source Message) issued via SITA standard and distributed to relevant parties.
2. **BHS entry** — Bag enters the conveyor system.
3. **Reading arches (arcos de lectura)** — Before each CT scanner, reading arches scan the bag's barcode/marbete via multiple heads and transmit the identification data to the CT scanner software over TCP.
4. **CT scanners (tomógrafos)** — Bag passes through the CT scanner. Inside the CT, bags that arrive without a readable identification are assigned an internal sequence number. After the CT, re-identification is required to confirm the bag that exits is the same one that entered — a before/after identification tick. Recommended BagMonitor reader placement: one gateway before the CT zone and one after (~30-40m total span; CT section itself ~10-12m).
5. **Pre-classification** — Routing decision: bag directed left or right.
6. **Sorting carousels** — Bag loops on the carousel (5 on each side, 10 total at EZE) until ground crew collects it. Camioncitos move bags from the carousel to the aircraft hold.
7. **Aircraft hold** — Bag loaded into the aircraft bodega.

A functional specification diagram (unifilar) showing this flow exists and is printed on-site. A GoPro/360° video of the full journey published on YouTube was mentioned by Pablo Ferrari (link pending).

---

## Belt Speed — Operational Data

Confirmed by PSA (Gabriel Marrapodi, January 2026):

- **Standard operating speed:** ~0.5 m/s across most BHS segments, including the inspection zone.
- **Higher-speed segments:** Conveyors between check-in counters and the first reading arches (pre-CT) run faster. No reads are required in these segments — the bag is simply moving toward the first scan point.
- **Implication for BagMonitor:** The higher-speed segments are irrelevant for read accuracy since no reads are needed there. Read timing in the standard 0.5 m/s zone is to be validated on-site.
- **Scale:** Thousands of trays circulate through the system simultaneously (estimated range 10,000–20,000; exact figure not confirmed).

---

## Baggage Tag Reading Points — Current System (EZE)

Three distinct points where the bag's marbete (barcode label) is read today:

1. **Reading arch before CT scanners** — Primary identification point. The bag enters the inspection system here.
2. **Bag sorter in the baggage claim apron** — Routes the bag to the correct carousel. There are two bag sorters at EZE.
3. **Re-entry after secondary inspection** — Only for bags rejected by the CT scanner, cleared manually, and reinserted into the BHS. A new reading arch confirms identity upon reintegration.

Between points 1 and 2, there is no intermediate automated read. A bag that loses its tray association between those two points becomes invisible to the system until it arrives at the bag sorter — if it arrives at all.

---

## The BCM / BPM Information Gap

This is the core operational blind spot that BagMonitor closes.

| Message | Meaning | Status |
|---|---|---|
| **BCM** (Baggage Check-in Message / BSM) | Bag accepted at check-in, tagged, entered into system | Implemented — SITA standard, consistent |
| **BPM** (Baggage Processed Message) | Bag completed the BHS process and is ready for loading | SITA standard, but **not consistently sent** |

Airlines receive the BCM at the start of the process. They should receive a BPM at the end — when the bag finishes classification — but this message is not being reliably transmitted. The result: airlines know a bag entered the system but have no automatic confirmation it reached the aircraft.

**BagMonitor's contribution:** A tag read at aircraft loading generates a more accurate BPM trigger than classification alone — because classification is not the last step. Bags can complete classification and still miss the flight (see carousel failure mode below).

---

## Carousel Failure Mode — The "Fosa"

A documented real-world failure that the BCM → BPM gap makes invisible:

If ground crew doesn't collect bags from a sorting carousel in time (due to labor slowdown, staffing issues, or operational pressure), bags pile up. The carousel has a pit at its center called the **"fosa"** — bags stacked too high fall in. The aircraft departs. If a BPM had been sent at classification, the airline's records show the bag was processed and ready — but the bag is still on the carousel at origin.

BagMonitor detects this failure: the bag's tag is not read at aircraft loading, triggering an alert before the flight departs.

This failure mode has been observed at EZE and at other airports in Pablo Ferrari's network.

---

## CT Scanner Zone — Technical Integration Notes

- Reading arches already communicate with CT scanner software via TCP — this is existing infrastructure at EZE.
- BagMonitor can share tag identification data to the CT scanner software via the same TCP channel, so the CT knows which physical bag it is processing before it enters.
- After the CT, re-identification (a second BagMonitor gateway read) confirms the bag that exited matches the one that entered.
- Interference from CT scanner equipment with BLE signal is a potential concern to verify on-site; the TCP data-sharing approach sidesteps the need for active BLE detection inside the CT itself.

---

## Manual Methods Currently in Use

At EZE and across the LATAM airports in Pablo Ferrari's network, baggage reconciliation between the carousel and aircraft loading is handled manually:

- **Handheld scanners** — Staff manually scan bag marbetes at key points
- **Paper lists** — Physical bingo-style reconciliation sheets, cross-checked before loading

Both methods require human intervention at every point and are error-prone. **Aerolíneas Argentinas** was confirmed to use paper lists as of May 2026.

Some operators have purchased small software solutions that digitize this step, but these still require manual handheld reads (see `06-competitive-positioning.md` for the Chile system and the carousel-to-aircraft reconciliation category).

---

## Tag Recovery Logistics

Airlines operating round-trip routes between fixed pairs of airports have an opportunity to recover BagMonitor tags at destination and return them on the inbound flight. Recovery rate will be less than 100% — some tags will be lost or retained by passengers — but partial recovery reduces per-tag cost and improves sustainability vs. fully disposable alternatives (paper marbetes or single-use RFID).

Operational logistics for a recovery program (who collects, where, how they're returned) are to be defined.

---

## Tracking Loss — Definition and Infrastructure Response

**Definition (confirmed by PSA):** A "tracking loss" event occurs when a bag physically leaves its BHS tray. This is not a read error or a software gap — it is a physical decoupling of bag and tray. The bag becomes untracked until it is re-identified at a downstream reading point, if at all.

**Current infrastructure response under consideration:** Aeropuertos Argentina 2000 and Vanderlande have proposed a recirculation loop where bags that lose tracking are diverted to a new conveyor branch equipped with a dedicated reading arch and an additional CT scanner. This would allow the bag to be re-identified and re-inspected before rejoining the main flow. The proposal involves:

- Breaking the existing building structure to route the new conveyor branch
- Installing new conveyor sections with a diverter
- Purchasing and integrating an additional CT scanner unit

This is a multi-million-dollar infrastructure project. It remains under evaluation and has not been approved.

**BagMonitor's position:** Continuous tag tracking identifies the exact moment and location where a tray-bag decoupling occurs. This provides the same informational output the recirculation infrastructure is designed to generate — without construction, without a new CT scanner, and in real time. PSA views this as a direct alternative to the infrastructure project, not a complement to it.

---

## Retroparo — Conveyor Stoppage from Poorly Dispatched Baggage

A recurring operational failure at EZE confirmed by PSA:

Bags dispatched without adequate preparation — particularly backpacks with external straps, frame packs, or bags with loose ties — can catch on BHS conveyor infrastructure (curves, transition points, junction gates) as they travel on the belt. When this happens, a section of the conveyor stops automatically as a safety measure. This is called a **retroparo**.

Consequences:
- A BHS segment goes offline
- Check-in for the affected lines stops
- Airlines and passengers are impacted immediately
- Recovery requires a maintenance technician to physically clear the obstruction

**Frequency:** Reported as "fairly common" by PSA. The root cause is airline check-in staff accepting bags that do not meet safe dispatch criteria. Airlines have a very high staff turnover rate at check-in counters, requiring constant re-training on baggage acceptance standards — a problem PSA describes as systemic rather than individual.

**Relevance to BagMonitor:** A tag-equipped bag that causes a retroparo can be traced to the exact check-in counter, agent, airline, and flight. This creates an accountability record that does not currently exist and gives both the airport and PSA a tool to enforce compliance with dispatch standards.

---

## PSA — Security Operations and Investigative Use Cases

PSA (Policía de Seguridad Aeroportuaria) is responsible for security within the BHS and has direct authority over the inspection zone. Gabriel Marrapodi (PSA) identified two primary use cases for BagMonitor from a security and law enforcement perspective:

### Use Case 1 — Tracking Redundancy for Investigation

When a bag loses tracking in the system, PSA currently cannot determine where the decoupling happened or who had physical access to the bag at that point. A BagMonitor tag provides a secondary tracking layer: even if the marbete read chain breaks, the tag's last known position and the precise timestamp of decoupling are recorded. This gives PSA an investigative starting point — correlatable with CCTV coverage and personnel access logs for that segment.

### Use Case 2 — Theft and Sabotage Detection

If the system detects a double tracking loss (marbete tracking lost AND tag read stops at the same point), PSA can flag it as a high-priority anomaly. The location of the event is known, the timestamp is known, and personnel who had access to that segment at that moment can be identified. Gabriel's example: a maintenance worker accessing a bag that should be in transit. BagMonitor doesn't prevent the theft — it creates the forensic record that enables investigation and eventual prosecution.

### PSA as Internal Champion

Gabriel Marrapodi explicitly stated his intent to use BagMonitor as an argument in conversations with AA2000 — presenting the tag-based solution as an alternative to the recirculation infrastructure project. His position gives him standing to raise this at the airport operator level. He is not a passive user; he is an active promoter of the solution toward the airport. This is a strategically significant relationship.

---

## CT Scanner "No Pic" — Secondary Inspection Failure Mode

CT scanners occasionally produce a "no pic" result — they fail to obtain a usable image of the bag's interior, typically due to an error in the reactive/imaging mechanism. When this happens:

1. The bag is diverted to a secondary inspection area
2. Police officers receive it physically and pass it through conventional X-ray equipment, plus spectroscopic or chemical drug tests
3. The bag rejoins the flow after manual clearance

**Recirculation was considered and rejected:** To avoid secondary inspection, bags could theoretically re-enter the CT scanner that produced the no pic. This would require a recirculation path — a conveyor branch that loops the bag back. The infrastructure cost (tearing walls, building new conveyor with a diverter) was deemed prohibitive and the proposal was put on hold. One CT scanner in particular has a failing generator that produces bursts of ~20 consecutive no pics; recirculation would have been especially useful for those cases.

**Relevance to BagMonitor:** No pic events create a gap in the bag's tracking chain. A BagMonitor gateway read before and after the CT zone, plus a read at secondary inspection entry/exit, would maintain continuous traceability even through diversion events.

---

## BLE Signal Interference — Testing Requirement

The BHS environment shares characteristics with industrial settings known to cause BLE and RFID signal interference:

- Metallic conveyor structures, belts, and trays
- Electrical motors and actuators throughout the conveyor system
- High-voltage wiring and potential electromagnetic noise from CT scanner equipment

**Field evidence of the risk:** Pablo Ferrari reported significant RFID signal loss in a Volkswagen production environment (palletizing line) due to metal density. A similar Volkswagen installation with Wi-Fi cameras failed due to coil-generated electrical noise. The BHS presents an analogous profile.

**Implication:** BLE gateway placement and signal reliability must be validated with an on-site test before any commercial deployment commitment. Optimal gateway positioning, antenna selection, and redundancy configuration cannot be determined from spec alone. A proof-of-concept installation at EZE is a prerequisite, not an optional step.
