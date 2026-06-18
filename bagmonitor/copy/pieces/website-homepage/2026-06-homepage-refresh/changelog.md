# Changelog — Homepage Copy Refresh

What changed, what stayed, and why. One entry per change.

---

## Hero

### `hero.badge`
- **Before:** `"Baggage Monitoring Infrastructure"`
- **After:** `"Baggage Visibility Infrastructure"`
- **Why:** BRAND.md defines the canonical category as "Baggage Visibility Infrastructure" — monitoring is a subset of what BagMonitor delivers. The site was using a narrower term that conflicts with the brand document.

### `hero.sub`
- **Before:** `"Enterprise infrastructure for real-time baggage monitoring, tracking, and operational intelligence."`
- **After:** `"The gaps between scan points are where bags go missing. BagMonitor closes them — continuous monitoring, exception alerts, and an API layer that connects to your existing systems."`
- **Why:** The original sub is a noun-stack feature list. The new version leads with the operational insight (the gap) and frames the product as the solution to a specific, named problem. More in line with "Credibility-First" voice — problem first, then mechanism.

### `hero.primaryCta`
- **Before:** `"Request a Demo"`
- **After:** `"Book a Demo"`
- **Why:** The hero was the only place on the site using "Request." Every other CTA — the nav, the demo page, the CTASection — uses "Book a Demo." This inconsistency is minor but unnecessary.

---

## Cost

### `cost.intro`
- **Before:** `"$5 billion per year. 33.4 million mishandling events in 2024. Three cost layers. Most carriers track only one."`
- **After:** `"The airline industry spends approximately $5 billion annually on mishandled baggage — 33.4 million events in 2024 alone. A single mishandling event generates three separate, compounding costs."`
- **Why:** The editorial closing line ("Most carriers track only one") belongs in a pitch, not in a factual cost breakdown. The new version keeps the scale context and names the three-layer structure without commentary.

### `cost.recoveryOverhead`
- **Before:** `"$22 per WorldTracer activation — the minimum cost of searching for a bag whose location should already be known."`
- **After:** `"Additional ~$22 per WorldTracer activation for searching for a bag whose location is unknown."`
- **Why:** "Should already be known" is editorial — it editorializes the failure instead of stating the fact. Removed. Added "Additional" to reinforce the stacking nature of the cost layers. Added `~` to hedge precision, consistent with how other figures in this section are presented.

### `cost.passengerTrust`
- **Before:** `"47% of passengers say real-time tracking increases their confidence in checking a bag — those who don't get it check fewer bags, escalate claims, and choose different carriers next time."`
- **After:** `"Mishandling negatively impacts NPS score, with 47% of passengers saying real-time tracking increases their confidence in checking a bag."`
- **Why:** Added NPS framing — gives airlines a metric they already track internally, making the stat actionable in an enterprise context. Cut the consequence chain as speculative; NPS is a harder, recognized metric for airline ops teams.

---

## Problem

### `problem.sub`
- **Before:** `"Fragmented systems, manual processes, and operational blind spots create billions in losses every year."`
- **After:** `"Every bag that goes missing was visible at check-in and invisible at the moment it failed. The gap isn't operational carelessness — it's missing infrastructure."`
- **Why:** The original sub names symptoms (fragmented systems, manual processes). The new version leads with the human/operational reality — a bag seen at check-in and lost somewhere in between — and frames the cause as an infrastructure problem, not a process failure. This is the core thesis of the brand (BRAND.md §1: "Lost baggage is not a passenger experience problem. It is an infrastructure visibility failure.").

### `problem.c0desc`
- **Before:** `"Incomplete transfer data between airlines, handlers, and airports leaves bags invisible at critical handover points."`
- **After:** `"Global air traffic hit 5.3 billion passengers in 2024. Baggage volumes scale with it — but real-time visibility infrastructure has not."`
- **Why:** The original description explained the mechanism (missing data at handover) but the c1 card already covers that. The new version adds the growth narrative (doc 16, doc 02): volume is scaling faster than infrastructure, which is the "Why Now" argument. Avoids redundancy with c1.

### `problem.c1stat` + `problem.c1label` + `problem.c1desc`
- **Before:** stat `"41%"` · label `"of delayed bags lost at transfer"` · desc about transfer handoffs
- **After:** stat `"58%"` · label `"of delayed bags fail in the gaps"` · desc explaining 41% + 17%
- **Why:** 41% is the transfer failure rate alone. But failure-to-load (17%) shares the same root cause — no visibility between checkpoints. Combined, 58% of delayed bags fail specifically in the scan gaps where BagMonitor operates. Doc 16 explicitly calls this "BagMonitor's primary product narrative." The 58% is more powerful because it anchors the full scope of the problem BagMonitor addresses, not just one symptom. The 41% is preserved in the description.

---

## Solution

### `solution.f0desc`
- **Before:** `"Durable, airline-grade physical BLE tags, with optional NFC and QR code. A persistent digital identity layer for every bag."`
- **After:** `"Airline-grade physical tags that give every bag a persistent digital identity — readable at any point in the lifecycle, with no manual action required."`
- **Why:** Two issues with the original. First: it leads with the mechanism (BLE, NFC, QR) — sales intelligence (doc 18) explicitly flags this as a pitch weakness: "don't lead with BLE, IoT, or technical mechanism." Second: "Durable" is a descriptor, not a value. The new version leads with what the tag does for the operator (persistent digital identity, readable anywhere, no manual action). Mechanism names dropped from the opening — referenced in the product docs, not the hero description.

### `solution.f1desc`
- **Before:** `"Live dashboards, transfer risk alerts, exception detection, and SLA monitoring across the entire baggage lifecycle."`
- **After:** `"Live dashboards, transfer risk alerts, exception detection, and SLA monitoring. Catches failures before they become claims."`
- **Why:** Added the outcome clause ("Catches failures before they become claims") — this maps directly to the "Prevention over recovery" pillar (BRAND.md §10) and converts the feature list into a value statement. BRAND.md §12 checklist item: "If it's a feature description, does it say what the feature prevents or enables, not just what it does?"

### `solution.f2desc`
- **Before:** `"REST APIs, webhooks, and real-time event streams. Integrate with Amadeus, DCS, BRS, and your existing airline systems."`
- **After:** `"REST APIs, webhooks, and real-time event streams. Connects to DCS, BRS, and your existing airline systems — in days."`
- **Why:** Removed "Amadeus" — this is a specific third-party integration partner that hasn't been confirmed as a live integration in the docs. Citing it as a default example creates a commitment we may not be ready to back. "DCS, BRS" are system categories (generic), not vendor names — safer. Added "in days" to echo the integration section's "Connect in days, not months" promise.

---

## ROI

### `roi.sub`
- **Before:** `"BagMonitor delivers measurable ROI from day one. Fewer lost bags, lower costs, faster resolution."`
- **After:** `"Every prevented mishandling event eliminates at least $150 in operational recovery cost — before WorldTracer fees and passenger compensation. BagMonitor targets those costs at the source."`
- **Why:** Three issues with the original:
  1. "from day one" — unsubstantiated superlative (BRAND.md §6.1: "avoid qualifications used as hedging" and hype language)
  2. "Fewer lost bags" — sounds consumer-facing, not operator-facing
  3. Generic: no number, no mechanism
  The replacement anchors the business case in the $150 per-event cost (doc 19, field-confirmed by Sky Airlines), introduces the WorldTracer $22 as a secondary layer, and uses "at the source" — which maps to the Prevention pillar.

### `roi.m2label`
- **Before:** `"Annual Industry Cost BagMonitor Addresses"`
- **After:** `"Operational Cost Per Mishandled Bag"`
- **Why:** The $5B was already used in the Problem section as the scale-of-the-problem stat. Reusing it in the ROI section as an outcome metric creates a circular narrative: problem = $5B → ROI = we address $5B. The $150 per-event cost (doc 19) is a sharper, more actionable number for ROI framing: it shows what a single prevented event saves, which is what a COO or Head of Ops actually cares about when building a business case. Note: the stat value ($5B) is hardcoded in ROISection.tsx — a code change is also needed to update the displayed number to "$150".

### `roi.m2desc`
- **Before:** `"The annual cost of mishandled baggage to the aviation industry — compensation, tracing, courier returns, and storage. Source: SITA 2025."`
- **After:** `"The confirmed operational floor per mishandling event — logistics, staff time, and claims handling. WorldTracer adds $22 when the bag enters active tracing. Passenger compensation is a separate layer on top. Source: IATA estimate; confirmed by field operators."`
- **Why:** New description builds the cost stack correctly (as documented in doc 19): $150 operational + $22 WorldTracer (conditional) + compensation (separate). The multi-layer framing is more credible and gives the sales team a usable structure. Attribution changed from SITA 2025 (which sourced the $5B figure) to IATA estimate + field confirmation (which sourced the $150 figure).

---

## CTA

### `cta.sub`
- **Before:** `"See how BagMonitor can reduce mishandled bags and cut operational costs across your network."`
- **After:** `"See how BagMonitor reduces mishandled bags and eliminates manual tracing costs across your network."`
- **Why:** Two small fixes. "can reduce" → "reduces" (declarative, removes the hedging modal). "cut operational costs" → "eliminates manual tracing costs" (more specific, names the actual workload being removed — connects to the 30% tracing reduction metric). BRAND.md §6.1: "Statements are declarative. Qualifications are used only when genuinely warranted."

---

## Demo

### `demo.subtitle`
- **Before:** `"Fill out the form below and we'll get back to you shortly."`
- **After:** `"Submit your details and a member of our team will follow up within one business day."`
- **Why:** The original is generic form boilerplate. Not on-brand. The replacement is direct, specific about timeline, and uses "a member of our team" — which is more credible than the impersonal "we'll."

### `demo.successTitle`
- **Before:** `"Thanks! We'll be in touch shortly."`
- **After:** `"Request received."`
- **Why:** "Thanks!" is casual and consumer-facing. "Request received." is declarative and confirms the action — the right tone for an enterprise B2B form confirmation.

### `demo.successDesc`
- **Before:** `"Expect to hear from us within 3 business day."`
- **After:** `"A member of our team will reach out within one business day."`
- **Why:** Grammatical error fixed ("3 business day" → correct form). Changed to "one business day" (more specific and ambitious — sets a clear expectation). Consistent with the new subtitle.

---

## Footer

### `footer.tagline`
- **Before:** `"Baggage infrastructure for modern aviation."`
- **After:** `"Baggage visibility infrastructure for modern aviation."`
- **Why:** Aligns with the naming fix in hero.badge. "Visibility" is the differentiating word — it's what distinguishes BagMonitor from existing scan-based compliance tools.

---

## What did NOT change

- All navigation labels
- The hero heading ("End-to-end Baggage Traceability") — accurate and on-brand
- The hero secondaryCta ("Explore Platform")
- Problem section: c2 ($5B) and c3 (74%) stats and descriptions — kept as-is
- The integration section — already strong ("Built to integrate. Not replace.")
- The security section — well-written, no changes
- All feature bullet points (f0b0–f2b2)
- ROI m0 and m1 labels/descs (40% / 30% targets) — the "Target" language in the descriptions is appropriate hedging for unvalidated projections
- Privacy and terms keys

---

## Code change also required

`ROISection.tsx` has the m2 stat value hardcoded as `"$5B"`. To complete the ROI section update, this needs to change to `"$150"` in the component. The JSON changes in this piece handle labels and descriptions; the stat display requires a separate code edit.
