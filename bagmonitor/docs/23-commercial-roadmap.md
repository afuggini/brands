# BagMonitor — Commercial Roadmap

**Last updated:** June 2026  
**Status:** Active — airport validation phase

---

## Strategic logic

Airport operators are the validation path. Airlines are the end goal.

The Nov 2025 pivot: win one airport operator, use the live deployment as social proof, then approach airlines with a working reference. JetSMART is the recommended first airline target once a reference exists (per Sebastian Pinchinatti: *"La mejor inversión es enfocarse en ganar JetSmart."*) — but there is no existing relationship or engagement with them.

---

## Phase 1 — Ezeiza Airport Validation (Active)

**Owner:** Ariel Fuggini  
**Gatekeeper:** Gabriel Marrapodi (PSA, Responsable Operativo BHS) — +54 9 11 6250-1034  
**Technical advisor on-site:** Pablo Ferrari (Vanderlande engineer, independent consultant)

### Step 1 — Schedule the visit (July 2026)
- Ariel returns from travel → contact Gabriel to confirm date
- Coordinate Pablo Ferrari's availability for the same visit
- Gabriel facilitates PSA access to the Ezeiza BHS floor

### Step 2 — On-site BLE signal validation
Goal: confirm BLE tag signal is readable at the relevant BHS reading points.

BHS context (Ezeiza):
- Belt speed: ~0.5 m/s on standard segments
- 3 reading points: pre-tomograph arc, bag sorter (determines carousel), reinspection re-entry
- Primary PSA use case: redundancy tracking — re-link a bag that loses BHS tracking without manual search
- Secondary use case: security — double tracking loss triggers alert with location + access log

Validation criteria:
- Signal readable at all 3 reading points
- No interference from BHS metal/tray shielding
- Acceptable read latency at belt speed

### Step 3 — Full technical run
Once BLE signal is validated: conduct a full end-to-end test with live bags moving through the BHS.

Deliverable: technical validation report suitable for sharing with AA2000 and potential airline customers.

---

## Phase 2 — Proposal to AA2000 (Pending Phase 1)

Gabriel's plan: present BagMonitor jointly to AA2000 as an alternative to the costly infrastructure proposal (recirculation belt + new tomograph) that's currently on hold.

**Blocker:** PSA's current #1 priority is importing an explosive detection algorithm update. BagMonitor is #2. AA2000 pitch happens after Ezeiza validation.

---

## Phase 3 — JetSMART (First airline target, post-validation)

JetSMART is the recommended first airline to approach once the Ezeiza validation is complete. No prior engagement exists — they are a cold prospect with strong ICP fit. See `accounts/jetsmart.md`.

---

## Accounts to re-engage after Ezeiza validation

Once a live reference exists, these accounts are worth reactivating:

| Account | Contact | Last contact | Re-engage trigger |
|---|---|---|---|
| SKY Airline | Arnold Mayorga | Oct 28, 2025 | After Ezeiza validation report |
| Iberia | Martín + Carolina (Innovation) | Nov 10, 2025 | After Ezeiza validation report |
| Arajet | Ruth Gil | Oct 14, 2025 | After Ezeiza validation report |
| South African Airways | Gabriel Gomes | Nov 4, 2025 | After Ezeiza validation report |

---

## What is NOT a current priority

- Outbound cold prospecting to new airlines (until Phase 1 is complete)
- Full Apollo outreach sequences (no live reference yet)
- On-hold accounts: Domus (no aircraft), Intercargo (privatization), British Airways (Brock)
- LATAM (closed — reopen only for tamper/opening-detection product, not core BagMonitor)
