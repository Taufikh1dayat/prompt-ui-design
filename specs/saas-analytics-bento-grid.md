# UI Specification: SaaS Analytics Bento Grid

## 1. Context & Architecture
- **Purpose**: Executive-level SaaS health overview with high information density.
- **Layout Model**: Asymmetrical 4-Column Bento Grid (`grid-cols-1 md:grid-cols-4 gap-4`).
- **Framework**: React 19 + Tailwind CSS + Lucide Icons.

## 2. Design Tokens
- **Background**: `#09090b` (Zinc 950)
- **Surfaces**: `#18181b` (Zinc 900)
- **Borders**: `#27272a` (Zinc 800) with hover to `#3f3f46` (Zinc 700)
- **Positive Accent**: `#10b981` (Emerald 500)
- **Primary Accent**: `#8b5cf6` (Violet 500)
- **Typography**: Sans-serif for labels, tabular Monospace (`font-mono`) for all financial metrics to prevent layout shifts.

## 3. Component Breakdown
### Cell A: Revenue Area Chart (col-span-2, row-span-2)
- Header with metric title, current value ($142,850.00), and +14.8% delta pill.
- Segmented pill switcher: `[ 7D | 30D | 90D | 1Y ]`.
- Responsive SVG Area Chart with linear gradient fill (`from-violet-500/20 to-transparent`).

### Cell B: Churn Health Gauge (col-span-1)
- Circular SVG progress ring indicating 1.4% churn vs 3.0% threshold target.
- Micro badge: "Healthy • Below 2% benchmark".

### Cell C: Live Realtime Sessions (col-span-1)
- Live active users counter (8,421).
- Green pulsing radar dot (`animate-ping`).
- Mini sparkline of last 30 minutes.

### Cell D: Live Feed of Conversions (col-span-2)
- 3 recent customer upgrade events with user avatar, plan type pill (Enterprise / Pro), and timestamp.

### Cell E: Geographic Distribution (col-span-2)
- Top 3 regions with custom progress track and country flag tags.

## 4. Master Prompt
```text
Build a modern dark-mode SaaS analytics bento grid using React, Tailwind CSS, and Lucide icons.
The container is an asymmetrical 4-column CSS grid on desktop (single column on mobile) with 12px gap.
Colors: background #09090b, surface cards #18181b with 1px border #27272a and rounded-2xl padding.
Include:
1. Top-left cell (col-span-2, row-span-2): Total ARR / MRR ($142,850) with +14.2% monthly growth badge, time range tabs (7d, 30d, 90d, 1y), and a smooth svg area gradient sparkline.
2. Top-right cell (col-span-1): Churn rate card (1.4%) with a subtle circular progress gauge and tooltip breakdown.
3. Mid-right cell (col-span-1): Quick active users count (8,421 online) with pulsing emerald status dot.
4. Bottom-left cell (col-span-2): Recent high-value conversion events feed with user avatars, timestamp, and transaction amounts.
5. Bottom-right cell (col-span-2): Geolocation traffic breakdown with miniature horizontal progress bars (US 48%, EU 32%, APAC 20%).
All cards should have subtle hover border-zinc-700 transitions. Use geist-mono for numbers. Avoid cheesy gradients or generic placeholder text.
```
