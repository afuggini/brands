# Sky Airlines

## Overview

| Field | Value |
|---|---|
| Type | Low-cost carrier (LCC) |
| Fleet | 36 aircraft |
| Hubs | Santiago (SCL), Lima (LIM) |
| Routes | International — Argentina, Brazil, Peru, Chile |
| Check-in system | Sabre DCS |
| Baggage conciliation | Manual — bingo sheets (paper colillas) |
| Ground handling | Own staff at hubs · third-party at international stations |
| Interline agreements | KLM, Air France, GOL, Aerolíneas Argentinas, United |
| Meeting date | 2025-10-15 |
| Contacts | Arnold Mayorga (Head of International Airports, South America) · Juan Valdivia (Head of Ground Operations, Peru) |
| Status | 🟢 Active prospect — requested formal business case and pricing ranges |
| Regulatory regime | Montreal Convention 1999 — all routes operate between MC99 signatory states (CHL, ARG, BRA, PER) |

---

## Fixed Parameters (all three scenarios)

| Parameter | Value | Source |
|---|---|---|
| Operational cost / event | $150 | IATA standard — Juan Valdivia confirmed explicitly in meeting |
| World Tracer cost / event | not included | World Tracer triggers only on formal loss claims, not on every delay — and Sky's use of the system is unconfirmed |
| Tag cost | $1.00 | BagMonitor pricing |
| Uses per tag | 1 | Disposable model |
| Cost per bag (hardware) | $1.00 | $1.00 ÷ 1 use |
| Liability cap | $2,050 | Montreal Convention 1999 — 1,519 SDRs @ Feb 2026 rates, effective Dec 28, 2024 |

---

## Hypotheses

### 🔴 Pessimistic
> Single-route pilot. Global-average mishandling rate (best case for airline). Minimum compensation risk — conservative claim and settlement rates.

| Input | Value | Rationale |
|---|---|---|
| Bags covered / year | 80,000 | One route only (e.g., Buenos Aires–Santiago) |
| Mishandling rate (per 1,000) | 6.3 | SITA 2025 global average — assumes this route performs at industry best |
| Annual subscription | $15,000 | Pilot scope |
| Compensation included | Yes | Arnold named compensation as a confirmed economic impact, separate from the $150 operational cost |
| Claim rate | 10% | Minimum conservative — small proportion of passengers file formal claims |
| Settlement factor | 30% | Below-average settlement — airline at low end of liability exposure |

| Output | Value |
|---|---|
| Annual hardware cost | $80,000 |
| Total annual investment | $95,000 |
| Annual mishandling events | 504 |
| Expected compensation / event | $62 ($2,050 × 10% × 30%) |
| Cost per event | $212 ($150 op + $62 comp) |
| Annual mishandling cost | $106,848 |
| **Break-even reduction required** | **88.9%** 🔴 |
| Events to prevent | 448 out of 504 |

**Reading:** At global-average rate and pilot scale, BagMonitor would need to prevent nearly 9 out of every 10 mishandling events — a bar that requires strong empirical evidence from the pilot itself. This scenario shows the minimum conditions for viability: the business case only becomes compelling at higher coverage or at the actual international-route rate.

---

### 🟡 Intermediate
> Full international segment. Airline-specific rate. Standard compensation assumptions.

| Input | Value | Rationale |
|---|---|---|
| Bags covered / year | 300,000 | All international airports (ARG/BRA) feeding SCL + LIM hubs |
| Mishandling rate (per 1,000) | 11.2 | SITA 2025 international routes average — matches Sky's operational profile |
| Annual subscription | $50,000 | Full international segment |
| Compensation included | Yes | |
| Claim rate | 15% | Moderate — not all delayed bags result in formal claims |
| Settlement factor | 50% | Airline settles at roughly half the regulatory cap on average |

| Output | Value |
|---|---|
| Annual hardware cost | $300,000 |
| Total annual investment | $350,000 |
| Annual mishandling events | 3,360 |
| Expected compensation / event | $154 ($2,050 × 15% × 50%) |
| Cost per event | $304 ($150 op + $154 comp) |
| Annual mishandling cost | $1,021,440 |
| **Break-even reduction required** | **34.3%** 🟡 |
| Events to prevent | 1,151 |

**Reading:** BagMonitor needs to prevent roughly 1 in 3 mishandling events to fully recover the investment. Credible for a carrier whose manual conciliation process (bingo sheets, no electronic checkpoints between check-in and destination) is the primary failure point on transfer and loading gaps.

---

### 🟢 Optimistic
> Expanded network. Full cost exposure visible — compensation at higher rates plus call center costs included.

| Input | Value | Rationale |
|---|---|---|
| Bags covered / year | 500,000 | Full international network + key domestic feeder routes into SCL and LIM |
| Mishandling rate (per 1,000) | 11.2 | Same — international routes remain the pain point |
| Annual subscription | $65,000 | Expanded coverage |
| Compensation included | Yes | |
| Claim rate | 25% | Higher — more informed passengers on established international routes |
| Settlement factor | 70% | Higher settlements on routes with greater consumer rights awareness |
| Call center | Yes | 3 calls/event × $10/call = $30/event — cost of managing each mishandling claim |

| Output | Value |
|---|---|
| Annual hardware cost | $500,000 |
| Total annual investment | $565,000 |
| Annual mishandling events | 5,600 |
| Expected compensation / event | $359 ($2,050 × 25% × 70%) |
| Cost per event | $539 ($150 op + $359 comp + $30 CC) |
| Annual mishandling cost | $3,018,400 |
| **Break-even reduction required** | **18.7%** 🟢 |
| Events to prevent | 1,048 |

**Reading:** With full cost exposure visible, BagMonitor only needs to prevent 1 in 5.3 events to break even. The case is compelling if Sky accepts that compensation and call center costs are real and attributable per mishandling event — which the transcript confirms they are (Arnold separated compensation from the $150 operational number).

---

## Summary Comparison

| Scenario | Bags | Rate | Cost / Event | Investment | Mishandling Cost | **Break-even** |
|---|---|---|---|---|---|---|
| 🔴 Pessimistic | 80,000 | 6.3‰ | $212 | $95,000 | $106,848 | **88.9%** |
| 🟡 Intermediate | 300,000 | 11.2‰ | $304 | $350,000 | $1,021,440 | **34.3%** |
| 🟢 Optimistic | 500,000 | 11.2‰ | $539 | $565,000 | $3,018,400 | **18.7%** |

---

## Key Context

Sky Airlines is a mid-size Chilean LCC with 36 aircraft and over 1 million bags handled per year across its full network. Their baggage reconciliation is entirely manual — paper bingo sheets at the ramp with no electronic checkpoints beyond the initial QR scan at check-in. A newly installed BHS in Lima is creating flow problems at that hub.

Their international pain is structural: routes from Argentina and Brazil feed the Santiago and Lima hubs through manual transfer processes. When a customs handover occurs, trazability is lost entirely. They also manage interline through-check connections with KLM, Air France, GOL, Aerolíneas Argentinas, and United — each interline leg introduces a transfer gap that the current manual system cannot cover.

The economic impact has two confirmed components: the $150 IATA operational cost per event (Juan's number, covering traslado and staff) and passenger compensation as a separate and additional cost (Arnold's framing). Both contacts signaled willingness to invest but require a business case sized for a low-cost budget — "no big airport infrastructure" is a hard constraint.

---

## Field Evidence

> "Tomamos como referencia el estándar de IATA, que estima unos 150 dólares por cada caso de mishandling (demoras y daños), incluyendo el traslado y el personal operativo."
> — Juan Valdivia, Head of Ground Operations (Peru)

> "El volumen de equipaje extraviado impacta económicamente por las compensaciones y daña muchísimo nuestro NPS."
> — Arnold Mayorga, Head of International Airports (South America)

> "La conciliación de equipaje en patio es totalmente manual usando 'bingo sheets' (colillas de papel). A veces, en conexiones aduaneras, la trazabilidad se pierde por la manualidad del proceso."
> — Juan Valdivia

> "Le veo mucho valor, pero la decisión depende del business case (costo/beneficio)."
> — Arnold Mayorga

---

## Value Proposition Angle

Sky is budget-constrained — the pitch must close on payback period, not features. The intermediate scenario (32% reduction required) is the opening position for the business case conversation. The smartphone-as-node model is critical: Sky cannot afford RFID gates or fixed scanners at every station, and BagMonitor's architecture removes that barrier entirely.

The transfer gap argument is particularly strong: Sky's interline agreements create exactly the blind spot BagMonitor addresses — bags changing custody between carriers at Santiago and Lima with zero electronic handover. That's where Arnold's compensation exposure lives.

---

## Next Steps

- [ ] Send pricing ranges by volume as requested by Arnold
- [ ] Build formal business case anchored to intermediate scenario ($350k investment / 32% break-even)
- [ ] Propose pilot on a single international route (Buenos Aires–Santiago or Buenos Aires–Lima)
- [ ] Request Sky's actual mishandling rate to replace SITA estimate in pessimistic scenario — if it exceeds 6.3‰, pessimistic improves materially
- [ ] If Sky can share even a rough compensation figure (without NDA), shift anchor to optimistic framing
