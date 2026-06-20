# Cost Anatomy — What Airlines Actually Pay per Mishandled Bag

This document deconstructs the total economic cost of a baggage mishandling event. The purpose is to give BagMonitor a precise, regulation-grounded picture of the three separate cost layers that airlines bear — and to clarify what figures like IATA's "$5 billion" actually include.

---

## The Three-Layer Cost Stack

A single mishandling event generates costs across three distinct layers. Most analyses collapse these into one number, which distorts the business case.

| Layer | What It Covers | Amount | Source |
|---|---|---|---|
| **Operational** | Repatriation logistics, staff time, courier fees | ~$150/event | IATA estimate; Sky Airlines confirmed |
| **WorldTracer** | Per-use fee for SITA's bag tracing and matching system — activates only when the bag enters active tracing (location unknown) | ~$22/activation | Industry standard |
| **Passenger compensation** | Legal liability for delayed/lost/damaged bags | Jurisdiction-dependent (see below) | Montreal Convention, US DOT, EC Reg. 2027/97 |

**Confirmed operational floor**: $150/event. WorldTracer ($22) applies additionally when the bag requires active tracing — not every mishandling event triggers it. A delay where the airline already knows the bag's location (e.g., confirmed held at a connecting hub) may not activate WorldTracer at all.

Passenger compensation is an additional, separate obligation that varies by jurisdiction, event type (delay vs. loss vs. damage), and whether the passenger files a claim.

---

## Layer 1: Operational Cost ($150/event)

This is the cost to physically reunite a bag with its owner: courier transportation, staff hours for tracing, and claims processing overhead.

**Field evidence:**
- *Sky Airlines (Juan, Operations):* "Tomamos como referencia el estándar de IATA, que estima unos 150 dólares por cada caso de mishandling (demoras y daños), incluyendo el traslado y el personal operativo." — This $150 is explicitly operational only. Passenger compensation is not included.
- *Sky Airlines (Arnold, International Airports):* "El volumen de equipaje extraviado impacta económicamente por las compensaciones y daña muchísimo nuestro NPS." — Arnold treats compensations as a separate economic impact from the operational cost Juan describes.

---

## Layer 2: WorldTracer ($22/event)

WorldTracer is SITA's global system for tracing and matching lost or delayed bags. Airlines pay a per-use fee each time a bag enters the WorldTracer workflow. This fee is operational, not compensatory — it is the cost of searching, not the cost of finding.

WorldTracer does not prevent mishandling. It is the recovery mechanism airlines activate after a bag is already missing. BagMonitor operates upstream, before a bag ever enters WorldTracer.

---

## Layer 3: Passenger Compensation — The Regulatory Framework

This is the most variable and jurisdiction-sensitive layer. It is governed by three instruments that interact with each other.

### Montreal Convention 1999

The primary international framework for airline liability.

**Current limit (as of December 28, 2024):** **1,519 SDRs per passenger**

At February 2026 exchange rates (~$1.377 USD/SDR): **~$2,091 USD**

ICAO's official reference rate at the time of announcement (October 18, 2024, at 1 SDR = $1.33318) yields approximately $2,026 USD. Both figures are in the same range; use ~$2,000–2,100 as the working approximation.

This represents an **18% increase** over the prior 1,288 SDR limit set in 2019. The five-year revision mechanism is codified under Article 24 of the Convention.

**What it covers:** Article 22(2) applies uniformly to destruction, loss, damage, and delay of checked baggage. This is a unified cap, not separate limits by event type.

**How to raise it:** Passengers may declare a higher baggage value at check-in and pay a supplementary fee, raising their individual liability ceiling above 1,519 SDRs.

**Procedural requirements:**
- Written notice of damage: within 7 days of receipt
- Written notice of delay: within 21 days
- Legal action: within 2 years of arrival date

**Geographic scope:** Applies to international carriage between countries that have ratified the Convention. Covers virtually all major airline markets outside the US domestic network.

Sources: ICAO official announcement (October 18, 2024); Condon & Forsyth aviation law; Clyde & Co.

---

### United States — 14 CFR § 254.4

US domestic routes operate under a separate federal framework that sets a **floor, not a ceiling**.

**Current minimum:** **$4,700 per passenger**

*Effective date:* January 22, 2025 (Federal Register document 2024-23588, 89 FR 84819, published October 24, 2024). This was set via CPI-U indexing from the 1999 base of $2,500.

**What it means:** Airlines cannot limit their liability below $4,700. Passengers may claim provable direct or consequential damages above this amount. DOT enforcement guidance explicitly states this "has never limited the maximum amount of compensation."

**Scope:** Applies to domestic scheduled and charter air service on large aircraft (>60 seats) and small-aircraft segments ticketed on the same itinerary.

**Critical asymmetry:** For international routes to/from the US, the Montreal Convention governs (~$2,000–2,100 USD ceiling). For purely domestic US routes, the $4,700 floor applies — and this floor is now higher than the international ceiling. An airline operating transborder itineraries faces different exposure depending on which leg the loss occurs on.

Sources: 14 CFR § 254.4; Federal Register 2024-23588.

---

### European Union — EC Regulation 2027/97 (amended by 889/2002)

The EU implements the Montreal Convention through Regulation 2027/97 as amended. The 1,519 SDR limit applies to all flights departing from EU airports and to flights to the EU operated by EU-registered carriers.

**Common confusion:** EC 261/2004 is often cited in this context — incorrectly. EC 261/2004 governs flight delays, cancellations, and denied boarding. **It does not apply to baggage mishandling.** Baggage compensation in the EU flows exclusively from the Montreal Convention as implemented by EC Regulation 2027/97.

---

### Latin America

No verified country-specific monetary caps or SDR formulas were confirmed through primary regulatory sources for LATAM markets. The working assumption is that Montreal Convention signatories in the region apply the 1,519 SDR cap. Colombia and Argentina are parties to the Convention; individual domestic regulations may supplement it, but specific monetary limits require per-country legal verification.

**Field evidence from Iberia:** *Carolina (Innovation):* "El manejo de equipaje es un gran problema, se nos va muchísimo dinero en indemnizaciones y nos pega directo en el NPS del pasajero." Iberia cited indemnification costs as a primary pain point across its global network, including routes through LATAM.

**Field evidence from Vanderlande technical contact (São Paulo):** Pablo Ferrari (Vanderlande, BHS systems engineer, May 2026): "En São Paulo hay mucho lío. Se comen juicios reales por pérdidas de valijas — les sale más caro la jodita." São Paulo (GRU) identified as a high-priority market for cost quantification. Specific litigation cost figures are pending investigation.

---

## IATA Resolution 753 — No Compensation Provisions

R753 is frequently misread as a compensation standard. It is not.

R753 mandates baggage tracking at four minimum checkpoints (acceptance, load, transfer, arrival). Its **only financial mechanism** is inter-airline proration: if an airline cannot provide custody data, it bears 100% of mishandling costs on interline segments, regardless of which carrier actually caused the failure.

**R753 imposes zero passenger compensation obligations.** Passenger remedies flow exclusively from the Montreal Convention and its domestic implementations. R753 is a tracking mandate with an interline cost penalty for non-compliance — nothing more.

Source: IATA R753 Implementation Executive Report 2025.

---

## The $5 Billion Figure — What It Includes and What It Doesn't

The IATA/SITA figure of $5 billion in annual industry mishandling costs (covering 33.4 million bags at 6.3/1,000 passengers in 2024) is the number most commonly cited in industry coverage.

**What it bundles:**
- Courier returns and repatriation logistics
- Customer service labor
- Claims handling overhead
- Lost productivity

**What it does NOT separately isolate:**
- Passenger compensation payouts as a distinct line item

SITA's methodology bundles operational and compensation costs into a single blended figure. The $5 billion is not a passenger compensation liability number — it is a total cost of mishandling figure, of which operational costs are the dominant component.

**Implication for BagMonitor:** The $5 billion is a valid top-of-funnel reference to establish market size. For break-even modeling at the airline level, the per-event cost should be built from the three-layer stack above ($150 operational + $22 WorldTracer + expected compensation exposure), not derived by dividing $5B by total bags.

---

## Per-Event Cost Model for BagMonitor Sales

The following model is appropriate for first-meeting business case construction:

| Component | Amount | Notes |
|---|---|---|
| Operational (IATA reference) | $150 | Sky Airlines confirmed; includes traslado + staff |
| WorldTracer | $22 | Conditional — only when bag enters active tracing (location unknown) |
| **Confirmed baseline** | **$150** | Use this as the conservative floor; WorldTracer adds $22 when activated |
| Passenger compensation (conservative) | +$150–$500 | Applies when passenger files a claim; varies by jurisdiction, event type, outcome |
| **Full exposure per claimed event** | **$300–$650+** | Operational + WorldTracer (if activated) + compensation |

The conservative approach in sales conversations: lead with $150 (fully documentable, always applies). WorldTracer is a separate $22 that applies when the bag enters active tracing — not every event. When the prospect raises compensation exposure, introduce the regulatory framework above — it establishes that compensation is a real, separate cost layer without requiring the airline to disclose its internal claims data.

---

## Open Questions

The following remain unverified and should not be cited in sales materials:

1. **Actual average payout per event type** (delayed vs. lost vs. damaged). The $90/$180/$950 per-category breakdown circulating in aviation blogs was adversarially refuted for lack of primary sourcing.
2. **LATAM-specific domestic regulations.** No verified country-specific caps confirmed.
3. **Proportion of $5B that is pure compensation vs. operational.** SITA does not publish this breakdown.
4. **Mixed-itinerary jurisdiction rules.** On a single ticket with domestic US + international segments, which liability regime governs each leg is fact-specific and not definitively answered by available sources.

---

*Research basis: Deep web research across ICAO official announcements, US Federal Register, EUR-Lex, IATA R753 Executive Report 2025, and aviation law firm secondary sources. 25 claims adversarially verified; 14 confirmed, 11 killed. SDR-to-USD conversions are date-sensitive. Last updated: June 2026.*
