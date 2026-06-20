# bagmonitor/ — brand & content

BagMonitor is an enterprise B2B infrastructure company providing smart physical baggage tags, real-time tracking software, and enterprise APIs to airlines and transport operators. It is an independent brand — not related to ariel.ar.

**Working language: English.** All copy, guidelines, and content for this brand are produced in English.

## Structure

```
bagmonitor/
├── brand/
│   ├── BRAND.md      Voice, positioning, pillars, hard no's
│   ├── PERSONAS.md   Buyer personas: tone, objections, value prop per buyer type
│   └── DESIGN.md     Visual system: color, typography, components, motion
├── copy/
│   ├── guidelines/   Lexicon, structures, format overrides
│   ├── feedback/     Copy feedback log
│   └── pieces/       Produced copy, organized by format and date
├── accounts/         Local CRM — one file per account + INDEX.md
│   ├── INDEX.md      One-line status board for all accounts
│   ├── _template.md  Blank template for new accounts
│   └── *.md          Individual account files (16 accounts as of Jun 2026)
├── contacts/
│   └── contacts.csv  60 contacts: name, title, company, email, phone, LinkedIn
├── docs/             Source documents: transcripts, strategy, ICP, GTM
│   └── transcripts/  Verbatim meeting transcripts (source of truth for account intel)
├── sources/          Raw data exports (HubSpot CSVs — already extracted, don't re-import)
└── data/             Supplementary data files
```

## Quick orientation

- **BRAND.md** is the single source of truth for voice, positioning, and messaging.
- **DESIGN.md** is the single source of truth for all visual decisions.
- **accounts/INDEX.md** is the starting point for any sales or pipeline work.
- **docs/sales/transcripts/** contains verbatim meeting transcripts — primary source for account intel.
- **docs/** contains the raw research and strategy documents that informed BRAND.md and DESIGN.md. They remain available as source material but BRAND.md and DESIGN.md take precedence in case of any conflict.
- BagMonitor sells to airlines and operators — not to passengers. This distinction drives nearly every copy decision.
- The primary CTA is always **Book a Demo**.
- The company was previously called **BagTag SRL** — old contacts and documents use this name.

## Before producing any content

1. Read `brand/BRAND.md` in full.
2. Read `brand/PERSONAS.md` in full — required for any copy or content targeting a specific buyer.
3. Read `brand/DESIGN.md` if producing visual artifacts.
4. Check `copy/guidelines/` for any format-specific overrides.
5. Pieces go in `copy/pieces/<format>/<YYYY-MM-slug>/`.

## Before doing any sales or pipeline work

1. Read `docs/strategy/commercial-roadmap.md` — current phase, what's active, what's not a priority.
2. Read `accounts/INDEX.md` for pipeline status across all accounts.
3. Open the relevant account file(s) for full intel, deal history, and contacts.
4. Cross-reference `docs/sales/transcripts/` if deeper context on a meeting is needed.
5. Contacts with emails/phones are in `contacts/contacts.csv` and in each account file.
6. Apollo (`brands/.env` → `APOLLO_API_KEY`) is used for enrichment and prospecting only — not as a CRM. Account intel lives in `accounts/`.

## Inheritance

BagMonitor is a standalone brand. It does **not** inherit from `ariel.ar/` or `cursodevibecoding/`. It may inherit generic methods from `../shared/copy/` where applicable, but its own guidelines always take precedence.
