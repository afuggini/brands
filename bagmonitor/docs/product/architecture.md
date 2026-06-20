# Product Architecture

BagMonitor is built on three integrated pillars.

## Smart Physical Tags

**Description:** Durable, airline-grade physical baggage tags that act as a persistent digital identity layer for each piece of baggage.

**Tag Technology:**

| Feature |
|---|
| BLE (Bluetooth Low Energy) module |
| Unique QR code |
| NFC |
| Airline custom branding |

**Physical Characteristics:**

- High durability construction
- Weather resistant
- Reusable or semi-permanent format
- Compatible with existing airline baggage workflows
- CR2032 coin cell battery — safe in CT scanner environments; exempt from the large lithium cell restrictions that apply to checked baggage

**Strategic Purpose:** To bind physical baggage to a digital identity that can be tracked, monitored, and reconciled across the entire journey.

**Market Context:** The industry is actively moving toward digital tag infrastructure. 38% of passengers already say a digital ID tag would increase their trust in checked baggage. Airlines are investing heavily — 42% already provide real-time baggage status to passengers, and that figure is expected to reach 82% by 2027. BagMonitor's smart tag layer is the physical foundation that makes operator-side tracking possible without relying on consumer devices like AirTags.

## SaaS Monitoring Platform

**Description:** Cloud-based operational platform for real-time baggage lifecycle monitoring, alerting, analytics, and reporting.

### Core Capabilities

**Real-Time Tracking**
- Scan-based lifecycle event capture
- Transfer monitoring
- Gate validation
- Arrival confirmation

**Operational Dashboard**
- Live baggage movement map
- Risk indicators
- Delay detection
- Missed connection alerts
- Operational KPIs

**Alerts & Automation**
- Risk-based alert triggers
- Automated passenger notification workflows
- Escalation logic

**Analytics**
- Route-level loss analysis
- Airport performance breakdown
- Transfer efficiency reporting
- Compensation risk forecasting

**Multi-Tenant Architecture**

| View | User |
|---|---|
| Airline-level dashboard | Airline ops team |
| Airport-level view | Airport operator |
| Ground operator view | Handling agent |
| Role-based access control | All user types |

**Where the Platform Adds Most Value (Informed by SITA Data)**

Transfer mishandling is the single largest cause of delayed bags — 41% of all delayed baggage is caused at the transfer stage. Failure to load accounts for another 17%. Both failure modes occur at handover points between operators — exactly where BagMonitor's real-time transfer monitoring and exception alerting provide the highest operational impact. This should be a primary product narrative in sales and marketing.

**Bluetooth Precision — Zone Inventory Model**

BLE tracking identifies which tag IDs are present within a defined zone, not the precise spatial position of individual bags. When many bags are close together (e.g., stacked on a carousel), the system cannot identify which specific bag corresponds to which physical appearance. What it can do:

- Confirm that specific bag IDs are present in the expected zone (carousel, gate area, aircraft hold)
- Alert immediately when a bag ID is not detected in an expected zone
- Read all IDs in a zone instantly — e.g., if a flight departs early and 50 bags are left on the carousel, a single scan shows all their IDs

This is sufficient for BagMonitor's core operational use cases. "Is this bag in the right zone?" is answered. "Which one is the blue bag in the pile?" is not — and does not need to be for the operator-side workflows BagMonitor addresses.

**Aircraft Hold Tracking**

Modern aircraft have internet connectivity. A gateway installed in an aircraft hold (connected to 12V power and Ethernet or SIM card) can send real-time zone data from the hold through the full flight — from loading at origin to unloading at destination. This closes the final tracking gap in the end-to-end journey.

## API & Integration Layer

**Description:** An API-first integration layer that overlays BagMonitor on top of existing airline systems without requiring full replacement.

**API Formats:**
- REST APIs
- Webhooks
- Real-time event streams

**Integration Targets:**

| System | Type |
|---|---|
| Amadeus | Primary named integration |
| Departure Control Systems (DCS) | Core airline infrastructure |
| Baggage Reconciliation Systems (BRS) | Core baggage infrastructure |
| Airline mobile apps | Passenger-facing |
| Passenger notification systems | Comms layer |
| CRM platforms | Customer data |
| Internal BI tools | Analytics layer |
| Other airline systems | Via REST/webhooks |

**Core Integration Philosophy:**
> BagMonitor augments existing infrastructure rather than disrupting it. It integrates into airline ecosystems — it does not (necessarily) replace them.

**Industry Compliance Alignment:** BagMonitor's tracking event model aligns naturally with IATA Resolution 753, which requires airlines to monitor and share tracking data at four core points in a bag's journey. Airlines already mandated to comply with Resolution 753 are natural early buyers — BagMonitor reduces the operational burden of compliance while delivering visibility beyond the minimum standard.
