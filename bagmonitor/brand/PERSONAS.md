# PERSONAS.md — BagMonitor Buyer Personas

Reference for how to speak to each of BagMonitor's four primary buyer types. Read alongside `BRAND.md` — voice, pillars, and hard no's apply universally. This document defines the angle, language, and value prop to lead with per buyer.

---

## 1. Airport Operator

### Role
VP Operations, Commercial Director, or Chief Operations Officer at an airport operator or concessionaire — from major hub operators to regional concession managers.

### Owns
Terminal-wide infrastructure and service quality. Contracts with ground handlers and airlines. SLA compliance at the terminal level. Long-term capital investment decisions.

### Success metrics
- Passenger satisfaction scores (ASQ / NPS)
- On-time departure performance
- Operational cost per passenger
- Terminal throughput and congestion incidents
- Airline retention and terminal share

### Core pain
Bag mishandlings damage the airport's reputation and strain airline relationships, but the airport operator has no direct visibility into what's happening. Airlines and handlers self-report. When something goes wrong, the operator finds out last — and absorbs the reputational damage.

### Mental model
Thinks in infrastructure, not workflows. A good terminal has good systems. Today, multiple airlines and multiple handlers operate in the same terminal with no unified visibility layer. The operator coordinates, but can't observe.

### Buying trigger
- A mishandling incident that made the news or prompted a formal complaint from an airline
- An airline threatening to reduce operations or citing baggage performance in commercial negotiations
- A terminal expansion or modernization project with a mandate to deploy modern infrastructure
- Field-validated in LATAM context: the airport operator as single-buyer distributes access to all airlines and handlers, collapsing a three-party coordination problem into one enterprise sale

### Top objections
- "We don't operate the bags — airlines and handlers do."
- "How do we get all the airlines in the terminal to use the same system?"
- "What's our ROI if we're not the ones paying for mishandlings?"

### Tone guide
**Speak infrastructure, not airline ops.** Frame BagMonitor as a terminal-level intelligence layer — analogous to a BMS or SCADA system for the physical operation. Avoid passenger experience framing. Avoid airline-specific metrics.

Use: *terminal-wide visibility, unified intelligence layer, infrastructure deployment, operator-controlled, single integration point*

Avoid: *reduce mishandlings, lower claims, passenger app, per-airline pricing*

### Primary value prop
Terminal-wide baggage visibility infrastructure that unifies airlines, handlers, and security under a single intelligence layer — deployed once by the operator, available to every actor in the terminal.

---

## 2. Airport Security / PSA

### Role
Director of Security or Operations Chief at a national or regional public security agency responsible for airside operations — TSA (US), PSA (Argentina), or equivalent. Reports to a government ministry or regulatory body, not to the airport operator.

### Owns
Baggage screening and airside security compliance. Chain-of-custody documentation for all items in secure areas. Incident reporting and audit trails. Regulatory adherence to ICAO and national aviation security standards.

### Success metrics
- Audit pass rates and regulatory compliance
- Zero unauthorized bag movements in secure zones
- Incident documentation completeness
- Response time to security incidents involving baggage

### Core pain
Reconstructing a bag's chain of custody after a security incident is slow and dependent on data from third parties — airlines and handlers — who have their own reporting interests. If a bag was accessed or moved without authorization, the current system detects it after the fact, through manual CCTV review or reconciliation. Regulatory exposure grows with every gap in the audit trail.

### Mental model
Bags are security objects, not passenger amenities. The question is not "where is this bag?" but "who had access to it, when, and can I prove it?" Current documentation is a patchwork of CCTV, paper logs, and airline-reported data. Reactive by design.

### Buying trigger
- A security incident or audit finding that exposed chain-of-custody gaps
- A regulatory mandate requiring improved airside tracking documentation
- A national aviation security modernization program
- A partner agency or airport operator deploying the system at their terminal

### Top objections
- "We don't control the tags — airlines do."
- "How does this integrate with our existing screening infrastructure?"
- "Is the data tamper-proof and audit-ready?"

### Tone guide
**Speak compliance and accountability, not operations.** The value is the verifiable record, not the operational efficiency. Lead with chain of custody, audit trail integrity, and regulatory exposure. Never lead with cost or passenger experience.

Use: *chain of custody, verifiable audit trail, time-stamped record, airside accountability, incident reconstruction, regulatory compliance*

Avoid: *passenger tracking, reduce mishandlings, cost per bag, operational efficiency*

### Primary value prop
An immutable, real-time chain-of-custody record for every bag in the airside — eliminating dependence on third-party self-reporting and reducing regulatory exposure in the event of a security incident.

---

## 3. Airline — Full-service / Legacy

### Role
Head of Baggage Operations or Head of Ground Operations at a major or legacy carrier — Lufthansa, Turkish Airlines, British Airways, Iberia, and equivalents. Reports to a regional or global operations director; most purchasing decisions escalate to HQ.

### Owns
Baggage handling SLAs across all stations. WorldTracer case management and mishandling reporting. Ground handler contracts and performance oversight. IATA Resolution 753 compliance. Transfer connection baggage performance at hub airports.

### Success metrics
- Mishandling rate per 1,000 passengers
- WorldTracer cost per open/closed claim (~$22 per transaction)
- Transfer connection delivery rate
- IATA 753 compliance status
- Cost per mishandling event (~$150 fully loaded)

### Core pain
The existing system — SITA, Brock, WorldTracer — covers the mandatory touchpoints but doesn't provide continuous visibility. Transfer mishandling is the #1 failure mode (41% of delayed bags), and it happens in the gap between the mandatory scan points their system already monitors. By the time a bag enters WorldTracer, it's already lost. The cost is real and recurrent; the problem is accepted as structural.

### Mental model
"We've already invested in infrastructure. The system is adequate. What problem does adding another layer solve?" Skeptical of new tech that overlaps with existing investments. Open to augmentation if it closes a specific, documented gap — not if it requires justifying the whole stack again.

### Buying trigger
- A persistent transfer mishandling rate at a specific hub connection that existing tooling can't address
- High-value cargo theft on ramp that SITA/Brock doesn't cover
- A HQ request for data granularity their current system can't provide
- An IATA 753 audit that revealed gaps between mandatory scan points
- A peer carrier deploying real-time tracking at the transfer level

### Top objections
- "We already have SITA / Brock. Why add another system?"
- "Our mishandling rate is already at acceptable levels given our investment."
- "Any new system requires approval from global HQ — this isn't a local decision."

### Tone guide
**Never compete with their existing stack — augment it.** Lead with the specific gap, not the general category. Reference their systems by name. Use domain vocabulary without explanation: transfer mishandling, IATA 753, WorldTracer, DCS, BRS. The pitch is additive intelligence, not replacement.

Use: *continuous visibility, transfer monitoring, exception detection between checkpoints, augment your existing stack, API integration with DCS/BRS*

Avoid: *replace, rip-and-replace, better than SITA, end-to-end solution, passenger app*

### Primary value prop
Continuous visibility in the gaps between the mandatory scan points your current system already tracks — specifically at transfers, the single largest source of mishandling your current infrastructure logs after the fact but doesn't prevent.

---

## 4. Airline — Low-cost / Regional

### Role
Head of Ground Operations or Airport Operations Manager at a low-cost or regional carrier. Typically owns operations at a country or region level; purchasing decisions escalate to HQ (often in a different country).

### Owns
Ground handling contracts or in-house ramp operations. Baggage check-in-to-delivery SLA. Mishandling reporting to HQ. Ground turnaround time and cost control.

### Success metrics
- Cost per mishandling event (IATA benchmark: ~$150)
- Ground turnaround time
- Baggage NPS impact and formal complaints
- Cost per bag processed
- Handler performance against contract SLAs

### Core pain
Operating with manual or semi-manual reconciliation — bingo sheets, paper cupones, handhelds without real-time sync. No visibility into where bags are between check-in and delivery. When something goes wrong, it's discovered at the belt, not on the ramp. The cost is documented and recurring; the tooling to prevent it feels out of reach.

### Mental model
"We know we have a problem. We can't afford an enterprise system." Accustomed to workarounds. Past technology experiences may have required fixed infrastructure that didn't fit the operation. Decision to move forward requires a business case strong enough to survive the escalation to HQ.

### Buying trigger
- A mishandling rate or cost that shows up as a line item in an HQ operations review
- A competitor advertising baggage tracking as a differentiator
- A cost-reduction mandate from HQ that includes ground operations as a target
- A ground handler proposing a new operational model that requires visibility infrastructure

### Top objections
- "We don't have budget for this."
- "How much does it cost per bag?" — needs a number that compares favorably to $150/mishandling
- "The decision isn't mine — HQ needs to approve."
- "We've seen similar things before and they required infrastructure we don't have."

### Tone guide
**Lead with cost math, not technology.** The frame is economic, not operational modernization. The no-fixed-infrastructure point is load-bearing — it removes the most common objection before it's raised. Prepare collateral in the buyer's HQ language (English, Portuguese, Spanish) — escalation to HQ is not an exception, it's the standard path.

Use: *no infrastructure to install, pilotable on a single route, ROI visible before the pilot ends, cost per bag vs. cost per mishandling*

Avoid: *enterprise platform, system integration, digital transformation, cutting-edge, full deployment*

### Primary value prop
Real-time baggage visibility with no fixed infrastructure required — pilotable on a single route, with ROI visible from the first mishandling event it prevents.
