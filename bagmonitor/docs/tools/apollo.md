# Apollo Configuration — BagMonitor

Setup reference for Apollo.io as BagMonitor's outbound sales intelligence platform.

---

## Account Status (as of 2026-06-20)

| Item | Status |
|---|---|
| API key | Configured in `brands/.env` as `APOLLO_API_KEY` |
| Intent topic | "Baggage Tracking Systems" — active (Bombora) |
| Pipeline contacts | 9 contacts loaded from field meetings |
| Company search | Working — ICP filters validated |
| Company enrichment | Working — tech stack + ops headcount |
| People search (MCP) | Broken — MCP wrapper ignores filters |
| People search (API) | 403 — requires plan upgrade |
| Email account | Not connected — needed for sequences |
| News articles | 403 — not available on current plan |

---

## UI Configuration Required

### 1. Company Profile (Settings → Company)

Go to **app.apollo.io → Settings → Company Info** and fill in:

```
Company Name:     BagMonitor
Website:          bagmonitor.com
Industry:         Aviation & Aerospace
Company Size:     1-10
Description:      Baggage visibility infrastructure for airlines and ground operators.
                  Smart physical baggage tags, real-time tracking software, and
                  enterprise APIs. Reduces mishandling costs and provides end-to-end
                  traceability across the baggage lifecycle. Complements SITA and
                  WorldTracer — does not replace them.
```

### 2. Ideal Customer Profile (Settings → Ideal Customer Profile)

| Field | Value |
|---|---|
| Industries | Airlines/Aviation, Aviation & Aerospace, Ground Transportation |
| Employee count | 200–15,000 |
| Keywords | baggage, ground operations, airport operations, airline, low cost carrier |
| Locations (primary) | LATAM, Middle East, Southeast Asia, Europe (LCC segment) |
| Technologies to exclude | SITA Bag Manager, Brock Solutions (already invested, low intent) |
| Technologies that signal fit | Sabre Scribe, Amadeus DCS (have DCS but no baggage tracking) |

### 3. Email Account (Settings → Email & Calling)

Connect Gmail or Outlook for outbound sequences. Without this, Apollo sequences don't work.

---

## Pipeline Contacts Loaded (via API, 2026-06-20)

All contacts from field meetings are in Apollo CRM with segment labels:

| Contact | Company | Title | Label |
|---|---|---|---|
| Arnold Mayorga | Sky Airlines | Responsable Aeropuertos Int'l Sudamérica | Segmento A - LCC |
| Juan Valdivia | Sky Airlines | Jefe Operaciones Terrestres Perú | Segmento A - LCC |
| Gabriel Marrapodi | PSA | Responsable Operativo BHS | Champion Interno |
| Pablo García | Aviación News / CBR | Consultor RRPP | RRPP / Media |
| Fernando | Domus Airlines | Fundador | Piloto Confirmado |
| Carolina | Iberia | Equipo Innovación Madrid | Segmento B - Legacy |
| Diego | Lufthansa | Presidente AOC | Carga VAL |
| Maximiliano | Lufthansa | Gerente de Cargas | Segmento F - Carga VAL |
| Gonzalo | American Airlines | Operaciones Sudamérica | Referido Domus |

---

## ICP Company Search — Validated Parameters

Working search via API (`POST /api/apollo.io/v1/organizations/search`):

```json
{
  "q_organization_keyword_tags": ["airline", "aviation", "airport", "ground handling"],
  "organization_locations": ["Argentina", "Chile", "Brazil", "Colombia", "Peru", "Mexico"],
  "organization_num_employees_ranges": ["200,15000"]
}
```

Returns ~478 LATAM results. Top ICP matches verified (no SITA/Brock in tech stack):

| Company | Country | Employees | Ops Headcount | DCS | Baggage System |
|---|---|---|---|---|---|
| SKY Airline | Chile | 2,900 | 93 | Sabre | None ← ICP |
| Flybondi | Argentina | 1,600 | 25 | — | None ← ICP |
| JetSMART Airlines | Chile | 2,000 | 87 | — | None ← ICP |
| Viva (México) | Mexico | 5,000 | 128 | Sabre | None ← ICP |
| Air Arabia | UAE | 2,000 | 485 | Amadeus | None ← ICP |
| SpiceJet | India | 11,000 | 573 | — | None ← ICP |
| Celebi Aviation | Turkey | 15,000 | 145 | — | None (handler) |

---

## Intent Data Limitation

- Bombora's "Baggage Tracking Systems" topic returns **0 intent signals** for LATAM airlines.
- Root cause: LATAM airlines don't generate English-language intent signals for this niche topic.
- Workaround: rely on enrichment-based qualification (no SITA/Brock + Sabre DCS) + job postings as buying signals.
- SKY Airline active job: "Práctica Control de Costos Aeropuerto - Dirección Operaciones" (Jun 2026) — ops cost pressure signal.

---

## Plan Limitations

Current plan restricts:
- `mixed_people/search` → 403 (API people database search locked)
- `emailer_campaigns` → 403 (sequences locked)
- `news_articles/search` → 403 (news monitoring locked)

For full outbound functionality (sequences + people search), upgrade to **Apollo Professional** or complement with **LinkedIn Sales Navigator** for contact discovery.

---

## MCP Tools Status

| Tool | Status |
|---|---|
| `apollo_search_companies` | Working |
| `apollo_enrich_company` | Working |
| `apollo_get_complete_organization_info` | Working |
| `apollo_get_organization_job_postings` | Working |
| `apollo_search_people` | Broken — ignores all filters, returns random profiles |
| `apollo_bulk_enrich_organizations` | Broken — parameter mapping error |
| `apollo_search_news_articles` | 403 — plan restriction |
