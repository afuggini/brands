# Competitive Positioning

## What BagMonitor Is NOT

| Not | Reason It Matters |
|---|---|
| A consumer AirTag alternative | We sell to operators, not passengers |
| A gadget tracking app | We are infrastructure, not a product accessory |
| A passenger-side solution | The problem is operational, not consumer |
| A system replacement | We integrate on top of existing systems |

## What BagMonitor IS

- Infrastructure layer for baggage visibility
- Enterprise-grade monitoring system
- Data intelligence platform
- API-driven aviation tool
- Operational performance system

## Category Framing

BagMonitor should be understood as **Baggage Visibility Infrastructure** — analogous to how monitoring and observability platforms work in software engineering (e.g., Datadog for infrastructure), but applied to physical baggage operations.

## Competitive Landscape Notes

- **SITA WorldTracer** is the dominant global baggage tracing and matching system — used by most major airlines. BagMonitor's positioning should acknowledge this: BagMonitor does not compete with WorldTracer's lost-bag recovery function; it provides the upstream visibility layer that prevents bags from entering WorldTracer in the first place.
- **Consumer tracking (AirTag, Tile):** Passengers are increasingly using consumer-grade trackers. Airlines including British Airways, Lufthansa, Qantas, Cathay Pacific, and Virgin Atlantic have begun integrating Apple's Share Item Location feature with WorldTracer. BagMonitor's response to this trend: consumer trackers depend on passenger behavior and consumer hardware; BagMonitor provides operator-owned, operator-controlled infrastructure that does not rely on the passenger owning or using a third-party device.
- **No known direct enterprise competitor** in the smart-tag + SaaS monitoring + API integration bundle. [To be validated with market research.]

## BagMonitor vs. SITA Bag Manager — Not the Same Category

SITA Bag Manager is a compliance scanning tool: staff manually scan a bag at a fixed checkpoint, and the system records that the bag passed through that point. It fulfills IATA Resolution 753 and nothing more. It answers the question "did this bag pass through this point?" — but only when a human actively scanned it.

BagMonitor answers a different question entirely: **"where is this bag right now?"** — at any moment, without any manual action.

| Dimension | SITA Bag Manager | BagMonitor |
|---|---|---|
| Tracking model | Manual scan at fixed checkpoints | Continuous real-time location |
| Requires staff action | Yes — at every point | No |
| Visibility between checkpoints | None | Full |
| Primary purpose | Regulatory compliance (R753) | Operational intelligence |
| Transfer gap coverage | No | Yes — the #1 failure point |

The critical implication: **SITA Bag Manager does not see what happens between mandatory scan points.** Those gaps — the tarmac, the transfer, the loading — are where 58% of baggage failures occur (41% transfer mishandling + 17% failure to load). BagMonitor was built precisely for that blind spot.

**BagMonitor sees what SITA doesn't see.**

This distinction must never be collapsed in sales or marketing. Comparing BagMonitor's price to SITA Bag Manager's per-scan fee ($0.075/bag) is a category error — they are not substitutes. BagMonitor's value is anchored to the cost of what happens in the gaps SITA leaves uncovered, not to the cost of compliance scanning.
