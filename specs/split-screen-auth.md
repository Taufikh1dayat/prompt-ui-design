# UI Specification: Modern Split-Screen Authentication & SSO

## 1. Context & Anti-Slop Rationale
- **Target Problem**: Typical AI-generated authentication pages suffer from severe slop: bloated floating glass containers with illegible contrast, unrequested neon gradients, generic "Welcome back! Login to your account" copy, and asymmetrical third-party SSO buttons.
- **Real-World Foundation**: Designed according to developer-first standards established by **Linear, Supabase, Vercel, and Clerk**:
  - Two-column split-screen layout on desktop: Left column contains the streamlined authentication form; right column contains an ambient engineering telemetry panel with live system health, SOC2 status, and an architectural wireframe.
  - Zero password fatigue: Prioritizes passwordless authentication (Magic Link + WebAuthn Passkeys) with one-click GitHub & Google OAuth.
  - Strict input ergonomics: Floating labels avoided in favor of high-contrast persistent labels, explicit focus rings (`#6366f1`), and uniform 40px button heights.
  - No decorative glitter: Visual interest generated through typography, hairline borders (`rgba(255, 255, 255, 0.08)`), and tabular monospace latency readouts.

---

## 2. Design Tokens
- **Canvas Root**: `#090A0F` (Deep Obsidian)
- **Form Surface**: `#11131C` (Subtle dark zinc with 1px border)
- **Telemetry Surface**: `#0C0D14` (Recessed engineering card)
- **Hairline Border**: `rgba(255, 255, 255, 0.08)`
- **Accent Primary**: `#6366F1` (Indigo / Violet primary button & focus ring)
- **Accent Hover**: `#4F46E5`
- **Status Operational**: `#10B981` (Live heartbeat dot)
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#94A3B8`
- **Typography Stack**:
  - UI Labels & Form Headings: *Inter* or *Plus Jakarta Sans*
  - Telemetry & Security Badges: *Geist Mono* (monospace tabular metrics)

---

## 3. Structural Wireframe
```text
+----------------------------------------------------+--------------------------------------------------+
|                   AUTH COLUMN (LEFT)               |               TELEMETRY COLUMN (RIGHT)           |
+----------------------------------------------------+--------------------------------------------------+
|  [Logo] ACME CLOUD                                 |  [● 99.99% Operational]     [us-east-1  14ms]   |
|                                                    |                                                  |
|  Welcome back                                      |  +--------------------------------------------+  |
|  Sign in to deploy your edge functions             |  |  INFRASTRUCTURE TELEMETRY                  |  |
|                                                    |  |  > Cluster: prod-core-01                   |  |
|  [ Continue with GitHub ]                          |  |  > Active Nodes: 48 / 48                   |  |
|  [ Continue with Google ]                          |  |  > Verified Deployments: 1,842,910        |  |
|                                                    |  |                                            |  |
|  ----------- OR CONTINUE WITH EMAIL -------------  |  |  [SVG Mini Bar Chart / Latency Sparkline]  |  |
|                                                    |  +--------------------------------------------+  |
|  WORK EMAIL                                        |                                                  |
|  [ dev@company.com                             ]   |  "Acme Cloud reduced our cold-start latency      |
|                                                    |   from 320ms to 18ms across all regions."        |
|  [ Send Magic Link  -> ]                           |  — Elena Rostova, VP Infrastructure @ Voxel      |
|                                                    |                                                  |
|  [ Key Icon ] Authenticate with Passkey / Security Key                                                |
|                                                    |  SOC2 Type II • ISO 27001 • HIPAA Compliant      |
|  By signing in, you agree to our Terms & Privacy   |                                                  |
+----------------------------------------------------+--------------------------------------------------+
```

---

## 4. Master Prompt
```text
Build a production-grade, developer-native split-screen authentication screen in React and Tailwind CSS.

Layout Requirements:
- Desktop: 2-column split (Left: 50% max-w-lg centered auth form; Right: 50% dark recessed telemetry panel).
- Mobile: Stacked, telemetry collapses into a subtle security badge under the form.
- Background: Deep obsidian (#090A0F) with hairline 1px borders (rgba(255, 255, 255, 0.08)).

Auth Column (Left):
- Brand mark: Minimalist monochrome square glyph with "Acme Cloud" logotype.
- Header: H1 "Sign in to Acme Cloud" with subtitle "Manage your infrastructure, edge routes, and deployments."
- OAuth Stack:
  * Two equal-width buttons: GitHub and Google with genuine monochrome SVG brand marks.
  * 40px height, background rgba(255,255,255,0.04), hairline border, hover:bg-white/10.
- Separator: Clean hairline rule with centered uppercase text "OR WITH EMAIL" (text-xs font-mono text-zinc-500).
- Form Controls:
  * Email input with persistent uppercase label "WORK EMAIL", placeholder "you@company.com", font-mono text, focus ring-2 ring-indigo-500/50.
  * Primary Button: "Send Magic Link" (solid Indigo #6366F1, hover:bg-indigo-600, font-semibold text-white).
- Alternative: Secondary button "Sign in with Passkey / WebAuthn" with fingerprint/key icon.
- Terms disclaimer with subtle underline hover states.

Telemetry Column (Right):
- Dark panel (#0C0D14) with subtle radial grid overlay.
- Top status pill: Live pulsing green indicator "All systems operational" + "Region: us-east-1 (12ms)".
- Code/Metric Box: Simulated JSON/terminal card showing production cluster health and active ingress requests.
- Customer quote: Verified engineering quote from a VP of Infra with verified avatar initial badge.
- Security footer: "SOC2 Type II • ISO 27001 • End-to-End Encrypted" badges in monospace.

Anti-Slop Guardrails:
- Zero purple/cyan gradient backgrounds.
- Zero floating cards with blurred rainbow drop shadows.
- Strict WCAG AA contrast (11:1 on text elements).
- Real SVG logos for Google and GitHub without colorful distortions.
```
