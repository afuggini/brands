---
name: homepage-refresh-2026-06
description: Refresh of the BagMonitor homepage English copy (en.json) — fixes inconsistencies, integrates field intelligence from docs, sharpens voice
metadata:
  type: project
  format: website-copy-refresh
  surface: homepage · en.json
  source: brands/bagmonitor/docs/ + apps/bagmonitor/src/messages/en.json audit
---

# Brief — Homepage Copy Refresh

## What this is

A copy refresh of `apps/bagmonitor/src/messages/en.json` — the English source of truth for the BagMonitor homepage. Scope is homepage only (hero, problem, solution, integration, ROI, security, CTA, demo, footer).

Solution pages (airlines, handlers, airports) are out of scope for this iteration.

## Why now

A cross-reference of the current copy against BRAND.md and the research docs (docs/13 through docs/21) surfaced several issues worth fixing:

1. **Category naming inconsistency** — The hero badge and footer tagline say "Baggage Monitoring Infrastructure." BRAND.md defines the canonical category as **"Baggage Visibility Infrastructure."** The site was out of sync with the brand document.

2. **Underutilized field intelligence** — The most powerful data point in the docs — that **58% of delayed bags fail in the gaps between scan points** (41% transfer + 17% failure to load) — was not on the site. The current copy used only the 41% stat, missing the larger framing.

3. **CTA inconsistency** — The primary hero CTA said "Request a Demo." The rest of the site, BRAND.md, and the demo page all say "Book a Demo." The hero was the only exception.

4. **ROI section narrative conflict** — The third ROI metric showed "$5B Annual Industry Cost BagMonitor Addresses" — the same number that leads the Problem section. This positioned the problem stat as an ROI outcome, creating a narrative loop that didn't make sense. Replaced with the confirmed per-event cost ($150 operational floor), which is a sharper and more specific business case anchor.

5. **Demo page boilerplate** — "Fill out the form below and we'll get back to you shortly." is soft, passive, and off-brand. Also: grammatical error in success message ("within 3 business day").

6. **Voice drift in smart tag description** — The feature description for Smart Tags led with the mechanism ("physical BLE tags, with optional NFC and QR code"), not the value. Sales intelligence explicitly flagged this: don't lead with BLE, IoT, or technical mechanisms in the opening.

7. **ROI section sub** — "delivers measurable ROI from day one" and "Fewer lost bags" both fail the BRAND.md voice test: the first is an unsubstantiated claim, the second is consumer-sounding.

## What we're NOT changing

- Overall structure and section order (hero → problem → solution → integration → ROI → security → CTA)
- Stats that are verified and attributed (33.4M, $5B, 74%) — kept as-is
- The integration section copy ("Built to integrate. Not replace.") — already strong
- The security section — already well-written and on-brand
- Feature bullet lists (f0b0–f2b2) — minor, not worth touching
- Navigation labels

## Sources used

- `brands/bagmonitor/brand/BRAND.md` — category naming, voice rules, hard no's
- `brands/bagmonitor/docs/13-metrics-roi-benchmarks.md` — confirmed industry benchmarks
- `brands/bagmonitor/docs/16-market-intelligence.md` — 58% framing, gap narrative
- `brands/bagmonitor/docs/18-sales-intelligence.md` — field objections, pitch insights, "don't lead with BLE"
- `brands/bagmonitor/docs/19-cost-anatomy.md` — $150 per-event cost, WorldTracer $22
- `apps/bagmonitor/src/messages/en.json` — current copy (audited in full)

## Note on ROI section component

The ROI stat values (40%, 30%, $5B) are hardcoded in `ROISection.tsx`, not in en.json. The copy piece updates the labels and descriptions (which ARE in JSON). The component will also need a code change to update the m2 stat from "$5B" to "$150" when this copy is applied.
