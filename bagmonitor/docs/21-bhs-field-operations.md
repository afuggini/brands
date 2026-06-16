# BHS Field Operations — Ezeiza International Airport (EZE)

> **Scope:** This document describes the baggage handling system (BHS) as observed at Ezeiza International Airport (EZE / EZEIZA), Argentina, Level 3 inspection area. Source: Pablo Ferrari, Vanderlande BHS systems engineer, May 2026. Operational details may vary across airports and BHS configurations.

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
