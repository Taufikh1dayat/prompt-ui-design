# UI Specification: B2B SaaS Pricing & Feature Comparison Matrix

## 1. Context & Anti-Slop Rationale
- **Target Problem**: AI coding assistants routinely generate terrible "AI-slop" pricing pages: arbitrary glowing purple gradient cards, unreadable contrast, performative sparkle icons, and generic "Get Started" buttons with decorative trailing arrows.
- **Real-World Foundation**: Engineered following best practices from **Stripe, Linear, Supabase, and Vercel**:
  - Grounded inky dark canvas with 1px hairline borders (`rgba(255, 255, 255, 0.08)`).
  - Strict arithmetic accuracy on billing frequencies (e.g. $24/mo monthly vs $19/mo billed annually at $228/yr).
  - Defensible, concrete feature gating (quantified seat counts, API bandwidth limits, and audit log retention rather than vague "Unlimited Power").
  - Explicit, purpose-driven CTA copy ("Start Free Sandbox", "Upgrade to Team Pro", "Talk with Solutions Engineering").

---

## 2. Design Tokens
- **Canvas Base**: `#090A0F` (Deep Obsidian Charcoal)
- **Standard Card Surface**: `#111218` (Zinc 900 tint)
- **Featured Card (Team Pro)**: `#151722` with a 1px border `rgba(139, 92, 246, 0.45)` and ambient diffuse shadow `0 20px 40px -15px rgba(139, 92, 246, 0.15)`
- **Hairline Border**: `rgba(255, 255, 255, 0.08)`
- **Accent Violet**: `#8B5CF6` (Used strictly for primary CTA and featured tier accent)
- **Status Emerald**: `#10B981` (Feature checkmarks & "+20% Annual Savings" badge)
- **Primary Text**: `#FFFFFF` (Headlines, prices, active tier names)
- **Muted Text**: `#71717A` (Feature labels, tier descriptions)
- **Typography Stack**:
  - UI Labels & Headers: *Plus Jakarta Sans* or *Inter*
  - Prices, Quotas & Calculations: *Geist Mono* (tabular numbers to prevent layout jump on toggle)

---

## 3. Structural Wireframe
```text
+------------------------------------------------------------------------------------+
|                         TRANSPARENT PRICING FOR TEAMS                              |
|                Simple, predictable plans that scale with your code                 |
|                                                                                    |
|                  [ Monthly ]   [ Annual (Save 20%) ● ]                             |
+------------------------------------------------------------------------------------+
|       HOBBY                 |        TEAM PRO (Popular)     |      ENTERPRISE      |
|                             |                               |                      |
| $0                          | $19 / seat / mo               | Custom               |
| Free forever for solos      | Billed annually ($228/yr)     | For scaled platforms |
|                             |                               |                      |
| [Start Free Sandbox]        | [Upgrade to Team Pro] (Solid) | [Contact Sales]      |
|                             |                               |                      |
| INCLUDES:                   | EVERYTHING IN HOBBY, PLUS:    | EVERYTHING IN PRO:   |
| ✓ 1 Developer Seat          | ✓ Up to 25 Seats              | ✓ Unlimited Seats    |
| ✓ 3 Active Projects         | ✓ Unlimited Repos & Branches  | ✓ Dedicated Cloud VPC|
| ✓ 5GB Edge Bandwidth        | ✓ 100GB Fast Bandwidth        | ✓ 99.99% Custom SLA  |
| ✓ Community Discord Support | ✓ 90-Day Audit Log Retention  | ✓ SAML SSO & SCIM    |
| — Audit logs not included   | ✓ Priority 4h SLA Support     | ✓ 24/7 Phone Support |
| — SSO not included          | — SAML SSO not included       | ✓ Custom MSA & DPA   |
+------------------------------------------------------------------------------------+
|  14-day risk-free trial on Pro  •  No credit card required  •  Cancel anytime      |
+------------------------------------------------------------------------------------+
```

---

## 4. Master Prompt
```text
Build a high-conversion, developer-grade B2B SaaS Pricing Table component in React and Tailwind CSS inspired by Stripe and Linear.

Layout & Canvas:
- Inky dark canvas (#090A0F) with a clean max-w-6xl container.
- Header: Tracked uppercase eyebrow ("TRANSPARENT PRICING"), H2 heading ("Predictable pricing for engineering teams"), and a brief subheading.
- Billing Toggle Switcher:
  * Segmented pill control: "Monthly" vs "Annual (Save 20%)".
  * Clicking the toggle smoothly re-calculates Pro price between $24/mo (Monthly) and $19/mo (Annual, with subtitle "Billed annually at $228/year").
  * Use tabular font-mono for numbers to avoid layout jitter during state change.

Three Tier Cards (3-column responsive grid on desktop, stacked on mobile):
1. Card 1 (Hobby / $0):
   - Description: "For solo developers building side projects."
   - Action CTA: "Start Free Sandbox" (translucent glass button).
   - Features: 1 developer seat, 3 active projects, 5GB bandwidth, community support. Negative items styled with subtle dash.
2. Card 2 (Team Pro - Featured Card):
   - Highlight: Micro-badge "MOST POPULAR" in violet border pill.
   - 1px border-violet-500/40 with subtle violet glow.
   - Price: $19/mo (or $24/mo) with explicit billing frequency subtext.
   - Action CTA: "Upgrade to Team Pro" (solid vibrant violet/white button, tactile hover).
   - Features: Up to 25 seats, unlimited projects, 100GB edge bandwidth, 90-day audit log retention, 4-hour SLA.
3. Card 3 (Enterprise / Custom):
   - Description: "For scaling organizations with strict compliance."
   - Price: "Custom" (with subtext "Annual contract with tailored quotas").
   - Action CTA: "Book Architecture Review" (outline hairline button).
   - Features: Unlimited seats, dedicated VPC, 99.99% uptime SLA, SAML SSO / Okta, 24/7 dedicated engineer.

Rules & Anti-Slop:
- Zero purple-to-blue gradient text clips.
- Zero decorative sparkles or trailing arrows on buttons.
- Functional green checkmarks for included features, muted dashes for non-entitlements.
- Include footer assurance strip: "14-day free trial on Pro • No credit card required • Cancel anytime".
```
