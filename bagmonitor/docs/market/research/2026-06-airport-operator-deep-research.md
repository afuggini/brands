# BagMonitor Deep Research: 8 Areas for the Airport Operator Persona

## TL;DR
- Baggage mishandling is improving globally — per SITA's Baggage IT Insights 2025 (released 12 June 2025), the rate fell to 6.3 bags per 1,000 passengers (33.4M bags, ~$5B industry cost in 2024, 67% lower than 2007) — but the structural failure is concentrated exactly where airport operators have the least visibility: transfer touchpoints (41% of delays), arrival tracking (only 107 of surveyed airports equipped), and interline handoffs across airlines, handlers, and security agencies.
- Two regulatory/standards shifts (IATA Resolution 753 / the new MBM-BIX messaging standard and the June 2026 EU261 reform) plus the post-AODB move to airport "orchestration platforms" (Heathrow/Munich/Copenhagen on AIRHART) mean the operator — not the airline — increasingly owns the terminal-wide data layer; yet baggage is conspicuously absent from these platforms.
- The ground-handling labor crisis is structural and persistent, automation is filling the gap only at pilot scale, and passengers are routing around airline tracking via AirTags — together creating a clear opening for a terminal-level intelligence layer deployed once by the operator.

## Key Findings by Area

## 1. IATA Resolution 753 — compliance status and gaps
- **Adoption is partial and stalled at the network level.** IATA's May 2025 global progress survey (155 airlines, 94 airports) found 44% of airlines have fully implemented Resolution 753 and 41% are in progress. Regional full-adoption rates: China/North Asia 88%, Americas 60%, Europe 40%, Asia-Pacific 40%, Africa 27%. (IATA press release, 9 May 2025 / AGM New Delhi)
- **The IATA R753 Implementation Executive Report (December 2025)** found that, of implementation plans received, **46% of airlines have not yet started**, while only 29% are compliant at both hub and ≥30% of network. Regional adoption vs. infrastructure-availability gaps: Americas (58% vs 61%), Africa/Middle East (54% vs 57%), Asia-Pacific (42% vs 43%).
- **Arrival tracking is the critical gap.** 164 surveyed airports support tracking at acceptance, but this drops ~35% by arrival, leaving only **107 airports equipped for end-of-journey tracking**. 75 airlines cited arrival tracking as their hardest point. (IATA R753 Executive Report, December 2025)
- **Airport infrastructure readiness exceeds airline adoption:** mega airports 82% tracking capability, major 80.9%, large 71.4%, medium 56.1%. 75% of airports surveyed have R753 capability; RFID is implemented in only 27% of airports (54% of mega airports). (IATA, 2025)
- **Enforcement is weak by design.** IATA does not issue compliance statements; compliance can only be demonstrated by an airline to IATA. Airlines may request a voluntary certificate valid 3 years (hub) / 5 years (network). There is no penalty regime — the original "June 2018" deadline was never backed by enforcement. (IATA R753 Implementation Guide)
- **MBM v2 / BIX (Baggage Information eXchange) — approved 2025.** This replaces 1980s Type B teletype messaging with XML/JSON cloud-based messaging built on IATA's AIDM model (RP 1755). Benefits: lower per-message cost (legacy Type B messaging costs the industry ~$1B/year), richer data (baggage photos, GPS coordinates), end-to-end encryption, point-to-point resilience. IATA launched the **Baggage Community System (BCS)** to bridge BIX and legacy Type B systems during transition. MBM v2 expansion includes ULD elements, baggage images, and automatic reassignment of left-behind bags. (IATA Modern Baggage Messaging; SVP Operations Nick Careen)
- **What MBM v2 requires from airlines:** transition off Type B to XML/JSON messaging — effectively a new standard implementation requiring IT integration — positioned within IATA's 10-year Global Baggage roadmap.

**Notable examples / case studies:**
- China/North Asia airlines: 88% full R753 adoption — highest globally.
- Africa: only 27% full adoption — lowest, driven by infrastructure/investment constraints.
- Red Sea International Airport (Saudi Arabia): implementing next-gen baggage solutions including off-airport check-in and real-time tracking via SITA Bag Journey.

**Persona-relevant angle:** R753 makes the airport the de facto enabler of compliance — airports control the BHS, BRS, sortation, and arrival-scan infrastructure that generate the tracking data airlines depend on — yet operators get no unified view of whether the four custody handoffs in their own terminal are actually being recorded.

## 2. EU261 reform — current status and baggage implications
- **Status: provisional political agreement reached 15 June 2026** between the European Parliament and Council via the Conciliation Committee (third-reading procedure) — the first reform since 2004, after 13 years of deadlock. Still requires formal adoption following legal-linguistic revision; EP plenary vote planned for July 2026. Rules apply 12 months after entry into force / OJ publication — practical effect expected H2 2027. (European Council press release, 15 June 2026; European Parliament 20260601IPR44411)
- **Compensation structure largely unchanged:** €250 (≤1,500km), €400 (intra-EU or 1,500–3,500km), €600 (long-haul) retained; the **3-hour delay threshold survived** attempts to raise it to 4–6 hours. No inflation indexation. The Council's June 2025 position had proposed raising the threshold to 4/6 hours (analysts estimated 60–70% of currently-qualifying passengers would have lost eligibility); the European Parliament (21 January 2026 plenary, 632–15 vote) rejected this.
- **Checked-baggage liability: essentially unchanged.** Neither the official Council nor EP releases announce new substantive provisions for lost/delayed/damaged CHECKED baggage. The Montreal Convention / Reg. 2027/97 baseline (~1,300 SDR ≈ $1,700 limit; 7-day damage / 21-day delay claim windows) remains. Secondary outlets claiming "more efficient lost/damaged luggage handling" are NOT corroborated by official EU texts and should be treated as unverified pending the full legal text.
- **The one clear new baggage-loss right is for mobility equipment:** persons with reduced mobility (PRMs) "get replacement for their mobility equipment at no cost should it get lost or damaged" and can travel with mobility equipment and assistance dogs without paying extra insurance. (Council press release, 15 June 2026)
- **Cabin baggage:** a free personal item (small bag/backpack under the seat) is guaranteed; fares must be displayed inclusive of hand-baggage allowance by default before booking. Airlines may still offer cheaper hand-luggage-free fares. Parliament's earlier demand for a guaranteed free cabin bag (100cm combined / 7kg) was diluted to a price-transparency requirement.
- **Claims handling tightened:** airlines must inform passengers electronically how to claim within 96 hours / 4 days of journey termination; passengers have 9 months to file; airlines have 30 days to pay or justify refusal (note: the Council release says "14 days" for the reply stage — a discrepancy to flag). No-show clauses banned. Family seating (child under 14 adjacent at no charge) mandated.
- **Airlines/IATA reaction:** IATA (Press Release No. 32, 15 June 2026) said the reform "stopped short of the meaningful reform needed to address the regulation's deep flaws." DG Willie Walsh: "The result will not reduce delays, but considering the whole package of changes, it will create operational challenges and add costs which will ultimately be borne by passengers. So, it's a reform in name only." IATA cited EU261's regulatory burden at €8 billion annually.

**Notable examples / case studies:**
- Ryanair: said the hand-baggage transparency rule forces "misleading price advertising"; claims over 50% of its passengers already opt for fares without a second cabin bag.
- Vicent Marzà MEP (Greens/EFA): "Today the European Parliament chose to stand with its citizens, not with corporate greed."

**Persona-relevant angle:** EU261's tightened claims-handling timelines (96h notification, 30-day pay-or-justify) raise the cost of disputes that originate from baggage failures inside the terminal — and because liability flows to the airline, operators face mounting SLA pressure to prove their infrastructure was not the failure point.

## 3. Airport operator technology investments — unified ops platforms
- **The "post-AODB" shift to orchestration platforms is the defining 2025–26 trend.** Heathrow selected the **AIRHART** Airport Operations Orchestration Platform in March 2026 as its "digital backbone," joining Munich and Copenhagen. AIRHART is provided by **Smarter Airports** (a joint venture associated with Copenhagen Airports and Netcompany) and implemented by Netcompany; it replaces the AODB with a next-gen data foundation, A-CDM, and a predictive Airport Operations Plan (AOP). (Future Travel Experience / Aerospace Global News, March 2026; Netcompany)
- **Budget scale:** Heathrow plans to spend ~£1.3 billion across 2026 on upgrades including AIRHART. Smarter Airports CEO Daniel Ezban described the implementation as "doing heart surgery while running a marathon" — phased, running legacy and new systems in parallel. COO Javier Echave: the technology must "withstand the test of time."
- **Market context:** airport operations management software was ~$3.6B (62.3% of market) in 2025; ACI World data shows average IT investment per passenger at the world's top 50 airports grew 22% between 2022 and 2025. The Next-Generation Airport Management market was valued at $3.8B in 2025 → $5.3B by 2034. (Dataintelo; 24marketreports)
- **Mega-project baggage investments:** Dubai Al Maktoum (DWC) — $35B (AED 128B) phase, West Terminal substructure ~$2.7B contract including baggage handling; BHS designed for 30,000 bags/hour; APM and BHS packages tendered 2025, phase 1 operational 2032. Changi T5 — broke ground May 2025, +50M pax capacity, opening mid-2030s, featuring automation/robotics/AI.
- **Where baggage fits — or doesn't:** orchestration platforms (AIRHART, Amadeus AODB, Veovo, TAV) are explicitly architected around flights, stands, gates, turnarounds, and passenger flow. Baggage flow is referenced as a "point solution" these platforms aim to coordinate, but baggage is NOT the core data object — it is one of the systems the orchestration layer sits above. This is the gap.

**Notable examples / case studies:**
- Heathrow (Javier Echave, COO): AIRHART will "orchestrate critical processes"; ~£1.3B 2026 spend; 80M+ pax/year.
- Auckland Airport: Veovo ML off-block predictions proved 20% more accurate than manual estimates.
- Atlanta Hartsfield-Jackson (100M+ pax): integrated platforms cited as boosting on-time performance up to 15%.

**Persona-relevant angle:** the industry is validating exactly BagMonitor's thesis — operators are buying a single platform layer that coordinates everything across stakeholders — but baggage is the orphaned data object in these deployments, leaving operators blind to the #1 driver of passenger complaints in their terminal.

## 4. Ground handling labor crisis — depth and duration
- **The shortage is structural and persistent.** Oxford Economics: aviation has lost over 2.3M jobs since 2019 (~21% below pre-pandemic). An IATA survey found 60% of ground-handling professionals felt they lacked enough qualified staff for smooth operations; 37% anticipated shortages through end-2023 and beyond. (INFORM; allthingsontimeperformance)
- **Some major airports report staffing gaps exceeding 15%, causing delays especially in peak season.** (Market Growth Reports, ground handling services market)
- **Costs are rising faster than revenue.** BCG's "Air Travel Demand Outlook 2026" (January 2026) found ground-handling costs are outpacing revenue growth; consistent with IATA's December 2025 forecast that 2026 non-fuel costs reach ~$729B (+5.8%), with labor now the single largest cost component (~28%) as wage growth outpaces inflation. Foreign-born workers make up ~20% of the US air-transport workforce, exposing it to immigration-policy tightening. (Simple Flying / BCG; IATA)
- **Acute disruption events:** the October 2025 US government shutdown left ~13,000 air-traffic controllers and ~50,000 TSA agents working without pay; ~2,200 flights delayed at Charlotte Douglas in the first two weeks; a 5-hour ground stop at Austin-Bergstrom on 13 October. (Air Cargo Week)
- **Industry responses:** IATA's Ground Operations Training Passport (credential portability), the OPS Portal (221 airlines, 259 ground handlers for gap analysis), recruitment drives (Menzies at Miami, July 2025), and the new ISAGO single-auditor model launching mid-2025.
- **Automation is filling the gap only at pilot scale** (see Area 8) — not yet at the scale needed to offset 2.3M lost jobs.

**Notable examples / case studies:**
- Japan: 61 major airport ground-handling companies had ~21,600 employees in December 2022 — 20% fewer than March 2019.
- WestJet (July 2024): a short mechanics' strike disrupted Canada Day travel, ended with a 15.5% raise but only after hundreds of cancellations affecting 100,000 passengers.

**Persona-relevant angle:** with handlers chronically short-staffed and self-reporting their own performance, the operator inherits the reputational fallout of every mishandled bag while having zero independent way to verify what actually happened on the ramp.

## 5. Real-time baggage tracking adoption — the gap between promise and delivery
- **The headline target:** SITA's Baggage IT Insights 2025 reports that "in 2024, 42% of passengers had access to real-time baggage updates, up from 38% the year before," and that SITA "anticipates real-time baggage visibility as the norm by 2027" — the basis for the widely-cited 82% target. 66% of airlines offer automated bag drop (16% more plan to by 2027); 65% of airports plan biometric self-service bag drop by 2027.
- **What implementations actually deliver:** most "real-time tracking" is event-based scan data at the four R753 points (acceptance, load, transfer, arrival) relayed via WorldTracer/airline apps — NOT continuous GPS. Coverage breaks down precisely at arrival (only 107 of surveyed airports equipped) and at interline/handoff points to non-compliant carriers.
- **Documented failure modes:** (1) arrival-tracking infrastructure gap (35% drop-off); (2) handoff to a non-compliant airline or airport breaks the chain; (3) RFID misreads from damaged tags, interference, or improper placement (error rates reported 1–2%); (4) legacy Type B message failures/rejections — a major cause of mishandling; (5) data not shared — over 40% of airlines and ~one-third of airports do not share baggage data.
- **Passenger experience vs. advertising:** SITA's Nicole Hogg: "We're making progress, but baggage still causes stress. Passengers want reassurance." Passengers increasingly distrust airline tracking and attach their own AirTags (Area 7). The IATA Bluetooth Tracker whitepaper confirms passengers resort to personal BT trackers because of airline tracking gaps and that no standardized integration exists.

**Notable examples / case studies:**
- British Airways, Lufthansa, Qantas, Cathay, Virgin Atlantic: among first to integrate Apple Share Item Location with SITA WorldTracer.
- WorldTracer Auto Reflight: automatically reflights ~70% of mishandled bags; returns 60% of mishandled bags in 1.6 days.

**Persona-relevant angle:** airlines are publicly committing to 2027 real-time tracking that their own infrastructure cannot deliver inside the terminal — the operator who owns the physical arrival and transfer infrastructure is the only party that can close the gap the airlines are advertising.

## 6. Transfer mishandling — the #1 failure mode in detail
- **Transfer is the single largest cause:** 41% of delayed bags in 2024 (down from 46% in 2023), per SITA. Other causes: failure to load 17%, ticketing/bag-switch/security 16%, operational (airport processes/weather/space-weight) 10%, loading errors 8%, arrival 4%, tagging 4%.
- **International transfers dominate:** the international mishandling rate is 11.2 vs 1.9 domestic per 1,000 pax (~8x higher); only 16% of mishandled bags are domestic. The risk concentrates at hub interline touchpoints with short connection windows.
- **Hub/network exposure:** European hubs struggle most (Europe 12.3/1,000 vs APAC 3.1, North America 5.5) due to complex multi-leg transfers and tight connections. Among US airports, a January 2025 Upgraded Points study (TSA FOIA property-complaint data, 60 busiest US airports, 2015–2023) ranked Orlando (MCO) highest at **1.81 complaints/100,000 passengers — 63% above the national average** — followed by JFK (1.72), Palm Beach/PBI (1.71), Anchorage/ANC (1.69), and Fort Lauderdale/FLL (1.68); five of the worst ten were in Florida.
- **Documented intervention with published results — Lufthansa + SITA WorldTracer Auto Reflight:** in the proof-of-concept at Munich, SITA/Lufthansa targeted automatic reflighting of up to 70% of Lufthansa's mishandled bags; over the first year at Munich the automation rate grew to cover 8 of 10 mishandled bags with no human intervention, on the original bag tag. SITA estimates a major airline could save ~$100K/year and industry-wide automation could save ~$30M/year. Now live at Munich and Zurich.
- **Minimum Connection Time engineering:** Independent Carrier Systems (tote-based, up to 10 m/s vs 2–3 m/s belt conveyors) can cut published MCT by 10–15 minutes — directly attacking the transfer-failure root cause. (Astute Analytica, December 2025)

**Notable examples / case studies:**
- Lufthansa Group at Munich: 8/10 mishandled bags auto-reflighted within first year of Auto Reflight.
- MBM v2 credited with a projected ~5% mishandling reduction by eliminating "data blind spots" during transfers.

**Persona-relevant angle:** transfer failures happen in the operator's facility, between two airlines and one or more handlers — no single airline can see the whole chain, but the operator owns the physical transfer infrastructure and is uniquely positioned to provide the cross-stakeholder visibility that prevents misconnects.

## 7. Passenger baggage behavior and expectations
- **Expectations have shifted from "hope" to "track-like-a-package."** SITA CEO David Lavorel: "Passengers now expect their baggage experience to be as easy and transparent as using a rideshare or delivery app." 47% of travelers say mobile tracking would make them more confident checking a bag; 38% say a digital ID tag would boost trust. (SITA 2025)
- **Consumer tech is reshaping behavior — and recovery.** Apple's Share Item Location (iOS 18.2, launched November 2024) lets passengers share AirTag location with airlines; integrated into SITA WorldTracer (500+ airlines, 2,800+ airports). Launch partners included 17–18 airlines (Aer Lingus, Air Canada, BA, Delta, KLM, Lufthansa, Qantas, Singapore Airlines, United, Virgin Atlantic, etc.); by late 2025 ~29–30+ airlines participate. Delta + Apple completed a deeper API integration in late 2025 pulling AirTag data directly into Delta's baggage systems. Industry reporting cites 90% reductions in permanent bag losses and 26% faster recovery times where used. (Apple Newsroom; Gadget Hacks; AppleMagazine)
- **What passengers do when bags are delayed:** file Property Irregularity Reports / DOT complaints (DOT requires acknowledgment within 30 days, written response within 60), pursue Montreal Convention claims (up to ~$1,700 international, ~$4,700 domestic US), vent on social media, and increasingly self-locate via AirTags before the airline acts.
- **Distrust is driving carry-on behavior:** passengers increasingly cram everything into carry-ons because they don't trust airlines to deliver checked bags on time and intact (cited by Azalea Robotics; International Airport Review).

**Notable examples / case studies:**
- Best US baggage handlers 2024 (DOT, per 100 enplaned bags): Allegiant 0.24, JetBlue 0.36 (–34.8% YoY, biggest improver), Southwest 0.44, Delta 0.49.
- Worst US: American Airlines 0.90 (worst, +1.5% YoY), United 0.68 (–16.7%), Alaska 0.64. American was also fined $50M in 2024 for wheelchair/mobility-aid mishandling.

**Persona-relevant angle:** when passengers can independently track their bag with an AirTag but the operator cannot, the operator is the last to know about a failure in its own terminal — exactly the visibility asymmetry a terminal-level intelligence layer resolves.

## 8. Emerging baggage tech — Bluetooth, RFID, robotics, AI
- **RFID vs. Bluetooth — complementary, not competing.** RFID is the airline/airport-side infrastructure standard (near-100% read accuracy, error rate 1–2%), endorsed under R753; Delta deployed 600+ RFID readers at 84 airports. RFID adoption remains low industry-wide (27% of airports, 54% of mega airports). Bluetooth/BLE is the passenger-side layer (AirTags, BAGTAG, BagsID, electronic bag tags / EBT). The IATA Bluetooth Tracker whitepaper notes BT faces interference challenges in dense baggage environments and that no standardized integration between BT trackers and airline systems exists.
- **Leading vendors:** SITA (WorldTracer, Bag Journey, Auto Reflight — 500+ airlines, 2,800+ airports), BEUMER Group (BHS; doubled Melbourne Airport capacity with real-time tracking), Amadeus/TAV/Veovo (AODB layer), BAGTAG and BagsID (electronic/Bluetooth tags, supported by Lufthansa; RIMOWA integrated EBT).
- **Robotics startups and ground automation:**
  - **Azalea Robotics** (YC S24, Berkeley, founded 2023): "world's first fully-mobile baggage manipulator cobot"; uses caged robotic arms (light curtains) to handle up to 50kg bags; targets a $20B+ market; also developing REACH (Robotic Element for Autonomous Cargo Handling) for the US defense sector. No fixed CapEx / scalable deployment model.
  - **Aurrigo** (Coventry, UK): Auto-DollyTug autonomous electric baggage/ULD tractor (tows 3 trailers / 4 ULDs, ~30% more than conventional tugs; robotic arms for autonomous ULD load/unload). Deployments/trials: IAG + Cincinnati (CVG, from spring 2024), Schiphol (approved for Aviation Solutions' 60+ airport network after 2024 trials), Changi (Phase 2A concluded 2024, +4 units for Phase 2B), Swissport at Zurich (2025 first global pilot). Raised £14.1M to scale.
  - British Airways: Auto-DollyTugs at London Gatwick.
  - BOOST initiative (nlmtd + FTE Baggage Innovation Working Group): Schiphol, Avinor, Incheon, Brussels, Heathrow each running robotics/automation proof-of-concepts.
- **AI / computer vision:** SITA cites computer vision and AI-powered predictions reducing mishandling; AI mishandled-bag image recognition is a named BIX use case; CT-based screening with AI algorithms; predictive analytics for baggage flow and congestion. MBM v2 enables baggage photos and GPS coordinates to flow in real time.

**Notable examples / case studies:**
- Aurrigo at Zurich (Swissport, 2025): Auto-DollyTug with 360° LiDAR for autonomous ULD load/unload — first global pilot of autonomous ground handling for the world's largest ground handler.
- Delta: 600+ RFID readers at 84 airports; deepest AirTag API integration (late 2025).

**Persona-relevant angle:** the vendor landscape is fragmented — RFID infrastructure, Bluetooth passenger tags, robotics, and AI all operate in silos with no unified terminal-level data layer; the operator who deploys one intelligence layer across all of them owns the integration point everyone else is missing.

## Recommendations
1. **Lead with the "orchestration gap."** The post-AODB platform wave (AIRHART at Heathrow/Munich/Copenhagen) proves operators are buying single coordination layers — but baggage is the orphaned data object. Position BagMonitor as the baggage-intelligence layer that plugs the one hole these multi-million-pound platforms leave open. *Benchmark to watch:* if AIRHART or Amadeus add native cross-airline baggage modules, the positioning must shift to depth/independence.
2. **Anchor the value in transfer + arrival visibility.** These are the two points where (a) failures concentrate (41% transfer, plus the arrival-infrastructure gap at all but 107 surveyed airports) and (b) no single airline can see the whole chain. Frame BagMonitor as the operator's independent verification layer across airlines, handlers, and security agencies.
3. **Use R753 / MBM-BIX as the compliance wedge, not the pitch.** Operators enable R753 compliance but get no unified view; offer BagMonitor as the terminal-level R753/BIX readiness and audit layer. *Threshold:* when MBM v2/BCS adoption crosses ~50% in a region, reframe from "compliance gap" to "data-quality advantage."
4. **Quantify the SLA/reputational exposure, not cost-per-bag.** With EU261 tightening claims timelines (96h / 30-day) and handlers self-reporting, position BagMonitor as the operator's evidence base for SLA enforcement against handlers/airlines — infrastructure-level, like a BMS/SCADA, not per-airline metrics. This directly answers the "we don't operate the bags" objection: the operator doesn't need to operate the bags to own the data layer that holds the operators accountable.
5. **Stage the automation conversation.** Robotics (Aurrigo, Azalea) are at pilot scale and need a data/tracking substrate; position BagMonitor as the visibility layer that makes ramp automation safe and measurable. *Benchmark:* when a handler moves an autonomous tug fleet from pilot to >10 units at one airport, that airport is a priority BagMonitor target.

## Caveats
- **Source-data conflict on 2024 mishandled-bag totals:** SITA's own materials cite both 33.4M bags (most releases, including the main 12 June 2025 press release) and 36.2M bags (Airport World / Passenger Terminal Today versions). The 33.4M / 6.3-per-1,000 figure is the most-cited; the higher figure may reflect a different weighting. Flagged rather than resolved.
- **EU261 checked-baggage provisions are unconfirmed.** Official EU texts (15 June 2026) do NOT announce new checked-baggage liability rules; only mobility-equipment replacement is confirmed. Secondary claims of "more efficient lost/damaged luggage handling" are unverified pending the full legal text after legal-linguistic revision. The Council ("14 days") and Parliament ("30 days") give conflicting airline-reply deadlines.
- **AirTag recovery statistics (90% fewer permanent losses, 26% faster recovery)** come from industry/trade reporting (Gadget Hacks, AppleMagazine), not peer-reviewed or audited data — treat as indicative.
- **Market-size figures** for airport ops software, ground handling, and BHS vary widely by analyst firm and should be treated as directional.
- **Vendor performance claims** (Auto Reflight 70–80%, BEUMER doubling Melbourne capacity, Veovo 20% accuracy gains) are vendor-reported.
- Several forward-looking targets (SITA's "norm by 2027," MBM v2 ~5% mishandling reduction, robotics scale-up) are projections, not realized results.
