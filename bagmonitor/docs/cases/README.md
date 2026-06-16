# Cases — How to Build a BagMonitor Business Case

Each file in this folder is a structured business case for a specific airline or operator. The Markdown file is the source of truth; the HTML report is the client-facing version generated from it.

---

## Folder structure

```
cases/
├── README.md                    ← this file
├── sky-airlines.md              ← source case (Markdown)
├── sky-airlines-report.html     ← client-facing report (HTML)
├── jetsmart.md
├── jetsmart-report.html
└── ...
```

---

## Case structure (Markdown)

Each `.md` case has the following sections in order:

### 1. Overview
Airline profile table: type, fleet, hubs, routes, check-in system, baggage conciliation method, ground handling, meeting date, contacts, pipeline status, and applicable regulatory regime.

### 2. Fixed Parameters
Parameters that don't change across the three hypotheses:
- **Operational cost / event**: $150 unless the airline gave a different number
- **World Tracer cost**: only include if the airline confirmed they use World Tracer
- **Tag cost**: $1.00 / uses per tag: 1 (disposable model default)
- **Liability cap**: determined by regulatory regime (see below)

### 3. Hypotheses — three scenarios per case

Every case must have exactly three scenarios. All three must include a minimum compensation assumption — Montreal Convention applies to all international routes, so passenger compensation is never zero.

| Scenario | Bags scope | Mishandling rate | Compensation | Call center |
|---|---|---|---|---|
| 🔴 Pessimistic | Pilot / partial | 6.3‰ (SITA global avg) | Minimum (10% claim / 30% settlement) | No |
| 🟡 Intermediate | Full estimate | Airline-specific or route avg | Standard (15% claim / 50% settlement) | No |
| 🟢 Optimistic | Expanded / full network | 11.2‰ (int'l routes avg) | Higher (25% claim / 70% settlement) | Yes ($30/event) |

Default compensation formula: `liability_cap × claim_rate × settlement_factor`

### 4. Summary Comparison
Single table with all three scenarios side by side: bags, rate, cost/event, investment, mishandling cost, break-even %.

### 5. Key Context
2–4 sentences describing the airline's operational situation and pain points, sourced exclusively from their own meeting transcript. No references to other airlines.

### 6. Field Evidence
Direct quotes from the transcript. Use the contact's name and role.

### 7. Value Proposition Angle
How to frame BagMonitor for this specific airline. For airlines where the cost-savings angle doesn't apply (boutique, charter), describe the alternative value driver (CX premium, cargo VAL, B2B2C).

### 8. Next Steps
Pending actions for the commercial process.

---

## Regulatory regime → liability cap

| Regime | Cap / Floor | USD equivalent | When to use |
|---|---|---|---|
| `montreal` | 1,519 SDRs (cap) | ~$2,050 | Default for international routes between MC99 signatories |
| `eu` | 1,519 SDRs (cap) | ~$2,050 | EU-departing flights — EC Reg 2027/97 implements MC99 |
| `usdot` | $4,700 (floor) | $4,700 | US domestic routes only |
| `custom` | Editable | — | Use when jurisdiction is unclear or airline has specific data |

Note: EC 261/2004 does **not** apply to baggage — only to delays/cancellations/denied boarding.

---

## Key formulas

```
cost_per_bag          = tag_cost / uses_per_tag
annual_hardware       = bags_per_year × cost_per_bag
total_investment      = annual_hardware + annual_subscription
annual_events         = bags_per_year × (mishandling_rate / 1000)
expected_comp/event   = liability_cap × (claim_rate / 100) × (settlement_factor / 100)
cost_per_event        = op_cost + expected_comp [+ call_center_cost if optimistic]
annual_mishcost       = annual_events × cost_per_event
breakeven_pct         = (total_investment / annual_mishcost) × 100
events_to_prevent     = total_investment / cost_per_event
```

Break-even color coding:
- 🟢 < 20% — "Achievable without pilot data"
- 🟡 20–40% — "Requires supporting evidence"
- 🔴 > 40% — "Requires strong pilot data"

---

## What NOT to include

- References to other airlines' meetings or data
- Unconfirmed costs (e.g., World Tracer if the airline didn't mention it)
- Zero compensation in any scenario — MC99 applies to all international routes
- Invented mishandling rates — use SITA benchmarks if airline-specific data is unavailable
- Internal team notes or sales strategy in the client-facing HTML report

---

## Generating the HTML report

The HTML report is a client-facing sales document derived from the Markdown case. It should:
- Present the three scenarios as a business opportunity, not a research document
- Omit internal quotes, next steps, and sales notes
- Use BagMonitor's visual identity (see `brand/DESIGN.md`)
- Be self-contained (single HTML file, no external dependencies except Google Fonts)
- Be ready to attach to an email or share as a link

---

## Airline logos

Logos are embedded as base64 in the HTML report so the file stays self-contained.

### Sources (by IATA code)

Two public CDNs serve logos without authentication:

```
https://images.kiwi.com/airlines/64/{IATA}.png   ← 64×64 PNG, preferred
https://pics.avs.io/200/200/{IATA}.png            ← 200×200 PNG, fallback
```

Known codes for active pipeline airlines:

| Airline | IATA | CDN status |
|---|---|---|
| Sky Airlines | H2 | Kiwi ✅ |
| JetSMART | JA | Kiwi redirects → use avs.io |
| Iberia | IB | Kiwi ✅ |
| GOL Airlines | G3 | Kiwi ✅ |
| Domus Airlines | — | No IATA yet — use logo from airline website |

### How to embed a logo

```bash
# 1. Download
curl -sL "https://images.kiwi.com/airlines/64/H2.png" -o /tmp/H2.png

# 2. Convert to base64 (single line, no newlines)
base64 -i /tmp/H2.png | tr -d '\n'

# 3. Paste into the HTML <img> tag
# <img src="data:image/png;base64,<OUTPUT>" alt="Airline Name">
```

Or as a one-liner to verify the image is valid before embedding:

```bash
IATA="H2"
curl -sL "https://images.kiwi.com/airlines/64/$IATA.png" -o /tmp/$IATA.png && file /tmp/$IATA.png
```

### Placement in the report

The logo goes in the hero header alongside "Prepared for · [Airline Name]", opposite the BagMonitor wordmark. See `sky-airlines-report.html` for the reference implementation (`.hero-brand-client` block).
