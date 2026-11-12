# PromptUI (prompt-ui-design)

A curated catalog and repository of production-ready UI design prompts, design token specifications, and architectural Markdown (`.md`) context documents engineered for AI developers working with v0, Claude Artifacts, Cursor, Windsurf, and GitHub Copilot.

---

## Overview

<img width="1535" height="786" alt="image" src="https://github.com/user-attachments/assets/c9c4f0b8-c911-4797-9fcc-b3493d78f9ce" />
Modern AI coding agents frequently generate generic, repetitive user interfaces when given brief or unconstrained prompts (commonly referred to as "AI slop" — arbitrary gradient texts, gratuitous pill badges, trailing arrows on buttons, and non-functional glows). 

`prompt-ui-design` provides structured, battle-tested UI prompts and architectural specifications. Each specification defines explicit layout hierarchies, verified Tailwind CSS classes, strict color palettes, and component states (hover, active, focus, disabled, loading, and empty states) to ensure deterministic, production-grade output from LLMs.

---

## Anti-Slop Design Principles

This project adheres to the anti-slop guidelines formulated in `miqdadbadjuber/anti-slop`:

- **Rule 01 (Color Tokens)**: Palettes are derived from deliberate design tokens. Zero unearned neon accents, zero arbitrary blue-to-purple gradient text clips.
- **Rule 04 (Functional Iconography)**: Icons strictly serve a semantic purpose. No decorative sparkles, magic wands, or non-functional accent icons.
- **Rule 08 (Direct Action Buttons)**: No decorative trailing arrows (`->`) on action buttons unless representing direct directional movement.
- **Rule 09 (Clean Hero Hierarchy)**: Clean space above primary headings; no performative capsule badges placed above H1 titles.
- **Rule 11 (Proportional Border Radii)**: Hierarchy-based border radiuses instead of uniform pill shapes across every container.
- **Rule 15 (Purpose-Driven Actions)**: Explicit labels (e.g., "Deploy Architecture", "Download Markdown Spec") instead of generic "Get Started".
- **Rule 21 (Theme Support)**: Native dark and light mode adaptation with verified accessible contrast ratios (WCAG AA).
- **Rule 31 (Defensible Metrics)**: Written architectural rationale for every component layout and metric display.

---

## Catalog Categories

The repository includes curated prompts and downloadable specifications covering:

1. **Buttons & Controls**: Neo-Brutalism tactile button, frosted acrylic glass button, 3D skeuomorphic push button, border-beam shimmer button, cyberpunk cut-corner button, and minimal morphing states.
2. **Hero & Landing Pages**: Cinematic atmospheric landing view, Swiss typography grid, high-contrast dark mode portfolios.
3. **Dashboards**: Asymmetrical bento grid analytics, FinTech cash flow monitor, developer API key usage manager.
4. **SaaS & Workflows**: Kanban sprint pipeline, file upload dropzone with micro-interactions, floating command palette (`Cmd + K`).
5. **Mobile & Overlays**: iOS-style frosted notification drawer, mobile checkout slider sheet.

Each item includes:
- **Instant Copy Prompt**: Pre-formatted for v0, Claude, or Cursor prompt inputs.
- **Downloadable `.md` Specification**: A context file detailing layout structure, states, and accessibility requirements.
- **Design Token Picker**: Direct copy of primary, secondary, surface, and border hex color values.
- **Live Component Preview**: Real-time rendering inside the web application.

---

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Typography**: Bricolage Grotesque, Instrument Serif, Plus Jakarta Sans, Space Grotesk

---

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm (recommended), npm, or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Taufikh1dayat/prompt-ui-design.git
cd prompt-ui-design

# Install dependencies
pnpm install

# Start local development server
pnpm dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build

```bash
# Typecheck and compile assets
pnpm build

# Preview production build locally
pnpm preview
```

---

## Directory Structure

```
prompt-ui-design/
├── specs/                           # Offline Markdown specifications for IDE context
│   ├── button-showcase-matrix.md
│   ├── cinematic-hero.md
│   ├── neo-brutalism-dashboard.md
│   ├── liquid-glassmorphism.md
│   ├── swiss-minimal-grid.md
│   ├── saas-analytics-bento-grid.md
│   ├── command-palette-spotlight.md
│   ├── developer-api-key-manager.md
│   ├── kanban-sprint-board.md
│   ├── file-upload-dropzone.md
│   ├── notification-center-glass.md
│   ├── fintech-cashflow-mobile.md
│   └── checkout-slide-drawer.md
├── src/
│   ├── components/
│   │   ├── MiniPreviews.tsx         # Live interactive UI components
│   │   ├── PromptCard.tsx           # Catalog card with copy & modal triggers
│   │   ├── DetailModal.tsx          # Full prompt inspection, tokens & spec download
│   │   ├── FilterBar.tsx            # Category and design style filtering
│   │   ├── Hero.tsx                 # Headline and search input
│   │   ├── Navbar.tsx               # Header with search shortcut & theme toggle
│   │   ├── SubmitModal.tsx          # Contribution guidelines
│   │   └── Toast.tsx                # Action feedback notifications
│   ├── data/
│   │   └── prompts.ts               # Core database of prompts and tokens
│   ├── types.ts                     # TypeScript data contracts
│   ├── index.css                    # Tailwind v4 configuration and utilities
│   ├── App.tsx                      # Root catalog application
│   └── main.tsx                     # Entry point
├── index.html                       # SEO metadata, Open Graph, and font imports
└── package.json
```

---

## Contributing

Contributions of new UI prompt specifications are welcome. All submissions must follow these criteria:

1. Create a specification file in `/specs/[slug].md` following the standard template.
2. Register the entry in `src/data/prompts.ts` with verified design tokens and live mini-preview component.
3. Validate that the design conforms to the Anti-Slop Design Principles (no unnecessary gradients, no fake metrics, explicit interactive states).
4. Submit a Pull Request targeting the `main` branch.

---

## Author

**Taufik Hidayat**
- GitHub: [@Taufikh1dayat](https://github.com/Taufikh1dayat)
- Repository: [https://github.com/Taufikh1dayat/prompt-ui-design](https://github.com/Taufikh1dayat/prompt-ui-design)

---

## License

This project is licensed under the MIT License.
