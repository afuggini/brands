---
winning-variant: v15
date: 2026-06-16
---

# Decision — The Problem Section

## Winning variant

**v15** — BHS field operations angle (EZE field research, Pablo Ferrari, May 2026).

The four failure modes in v15 (BCM gap, carousel failure, no-pic diversion, paper reconciliation) mapped directly onto final.md with a 1:1 block correspondence. Chosen over data/stats variants (v16, v17) because the field-sourced failure modes are more concrete and operationally recognizable than industry aggregate stats.

## Delta: v15 → final.md

### Format change
v15 uses bullet points per block. final.md converts each block to a prose paragraph. This removes the scanning rhythm that bullets create for technical readers and adds sentence-level connective tissue. Neither is strictly better — the web layout may determine which works.

### Block reorder
v15: BCM gap → Carousel failure → No-pic diversion → Paper reconciliation  
final.md: Scanner Malfunctions → Carousel Overflows → The BCM–BPM Gap → Manual Reconciliation

The reorder moves the no-pic failure (the most surprising and operationally specific) to the front. This is a stronger hook than the BCM messaging gap, which requires industry knowledge to parse on first read.

### Block title rewrites (minor)
- "BCM gap" → "The BCM–BPM Gap" (more explicit, less jargon)
- "Carousel failure" → "Carousel Overflows" (more visual)
- "No-pic diversion" → "Scanner Malfunctions" (less specific — loses the "no-pic" term, which is the actual industry term)
- "Paper reconciliation" → "Manual Reconciliation" (more neutral)

### Subheading downgrade
v15: *"Airlines know when a bag enters the system. They don't know if it makes the flight. Everything in between is a gap."*  
final.md: *"The complexity of modern baggage operations creates multiple opportunities for visibility to break down between checkpoints, leading directly to delays, misrouting, and mishandling."*

v15's subheading is significantly stronger: it identifies the exact gap in one sentence and uses a structural contrast (know / don't know). The final.md version is correct but generic — "complexity creates opportunities for breakdowns" is language any industry could use. **If this section is revised, restore or adapt the v15 subheading.**

## Patterns to watch

- The human consistently converted bullet points to prose paragraphs → the website section format may use prose blocks rather than bullet lists. Confirm in design system before producing future sections.
- "No-pic" was the technical term in v15; the final dropped it in favor of "Scanner Malfunctions." This may be intentional for readability, or may be a loss of specificity worth flagging with a technical reviewer.

## Guidelines update

No guidelines updated. The subheading observation is specific to this section and doesn't generalize to a rule. If the bullet → prose conversion recurs across multiple sections, consider adding a note to the website-section format scaffold.
