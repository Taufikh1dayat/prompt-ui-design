import type { UIPrompt } from '../types';

export const PROMPTS_DATA: UIPrompt[] = [
  /* 1. BUTTON SHOWCASE MATRIX */
  {
    id: 'button-showcase-matrix',
    slug: 'interactive-button-matrix-micro-ui',
    title: 'Button Archetypes & Micro-Interactions',
    category: 'Buttons & Controls',
    style: 'Buttons & Micro-UI',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Intermediate',
    summary: 'A curated gallery of 6 production button archetypes: Neo-Brutalist 3D press, Liquid Frosted Glass, Tactile Skeuomorphic, Border-Beam Shimmer, Cyberpunk Chamfered, and Minimalist State-Morph.',
    tags: ['Buttons', 'Micro-Interactions', 'Tactile', 'Hover Effects', 'Skeuomorphic', 'Shimmer'],
    copyCount: 2950,
    previewId: 'button-showcase-matrix',
    fontStack: 'Space Grotesk, JetBrains Mono, Inter',
    colorPalette: [
      { name: 'Brutal Yellow', hex: '#FFE600', usage: 'Neo-brutalist button fill' },
      { name: 'Frosted Glass', hex: 'rgba(255, 255, 255, 0.1)', usage: 'Liquid acrylic button backdrop' },
      { name: 'Skeuo Bevel', hex: '#52525b', usage: 'Tactile 3D button rim highlight' },
      { name: 'Glow Violet', hex: '#8b5cf6', usage: 'Border-beam luminous shimmer' },
      { name: 'Cyber Cyan', hex: '#22d3ee', usage: 'Polygonal chamfered button edge' },
    ],
    antiSlopChecks: [
      'R-08: Zero decorative arrows on button labels; uses functional icons or direct text',
      'R-11: Explicit variety in corner radiuses (sharp 0px brutalist, chamfered polygon, pill, rounded-lg)',
      'R-19: Tactile click physics with physical translation rather than jarring scale loops',
      'R-34: Focus-visible states clearly defined for keyboard navigation'
    ],
    quickPrompt: `Build a versatile showcase of 6 distinct, production-ready Button Archetypes in React and Tailwind CSS:
1. Neo-Brutalist Punch: bg-[#FFE600] text-black font-black uppercase border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all.
2. Liquid Frosted Glass Pill: backdrop-blur-xl bg-white/10 border border-white/25 text-white font-semibold shadow-md hover:bg-white/20 active:scale-95 transition-all.
3. Tactile Skeuomorphic 3D Button: bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border-t border-zinc-500/80 text-zinc-100 font-bold shadow-[0_4px_8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.25)] active:translate-y-0.5 active:shadow-[0_1px_2px_rgba(0,0,0,0.6)] transition-all.
4. Border-Beam Shimmer Button: Dark zinc surface with a glowing animated violet/indigo border gradient (shadow-[0_0_15px_rgba(139,92,246,0.3)]) and subtle shine sweep on hover.
5. Cyberpunk Chamfered Button: Polygonal cut-corners using CSS clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px)), neon cyan border-l-2 and monospaced text.
6. Minimalist State-Morph Pill: Clean white button with emerald pulsing dot that morphs between default, loading spinner, and success checkmark.
Ensure each button handles hover, focus-visible, and active/pressed physics with high tactile feedback.`,
    markdownSpec: `# UI Specification: Button Archetypes & Micro-Interactions

## 1. Philosophy
Buttons are the primary interactive organ of any digital interface. Rather than relying on generic rounded-md pills with trailing arrows, this spec establishes 6 distinct tactile archetypes for different product contexts.

## 2. Archetype Implementations
### A. Neo-Brutalist Punch
\`\`\`css
border: 2px solid #000000;
box-shadow: 3px 3px 0px #000000;
transition: transform 0.1s ease, box-shadow 0.1s ease;
&:active {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #000000;
}
\`\`\`

### B. Tactile Skeuomorphic (Clay/Hardware)
\`\`\`css
background: linear-gradient(180deg, #3f3f46 0%, #18181b 100%);
border-top: 1px solid rgba(255, 255, 255, 0.25);
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2);
&:active {
  transform: translateY(2px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8), inset 0 2px 4px rgba(0, 0, 0, 0.4);
}
\`\`\`

### C. Cyberpunk Chamfered
\`\`\`css
clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
\`\`\``
  },

  /* 2. CINEMATIC HERO */
  {
    id: 'cinematic-hero',
    slug: 'cinematic-atmospheric-hero',
    title: 'Cinematic Atmospheric Hero Section',
    category: 'Hero & Landing',
    style: 'Cinematic Editorial',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Advanced',
    summary: 'Full-bleed atmospheric landing hero featuring a silhouette horizon, glowing dusk sun disc, editorial typography, and frosted glass command pill.',
    tags: ['Cinematic', 'Hero', 'Atmospheric', 'Editorial', 'Crimson Sunset'],
    copyCount: 2180,
    previewId: 'cinematic-hero',
    fontStack: 'Plus Jakarta Sans, Geist Mono for CLI pill',
    colorPalette: [
      { name: 'Dusk Canvas', hex: '#09090b', usage: 'Deep terrain silhouette base' },
      { name: 'Crimson Sky', hex: '#630b15', usage: 'Mid-horizon atmospheric gradient' },
      { name: 'Golden Ember', hex: '#fef08a', usage: 'Sun disc radial core' },
      { name: 'Rose Glow', hex: '#fb7185', usage: 'Horizon cloud rim lighting' },
      { name: 'Frosted Glass', hex: 'rgba(255, 255, 255, 0.12)', usage: 'Command terminal pill surface' },
    ],
    antiSlopChecks: [
      'R-01: Distinct atmospheric crimson palette instead of generic purple AI mesh',
      'R-05: Non-template full-bleed layout; avoids standard 2-column SaaS hero',
      'R-08: Zero trailing arrows on navigation or buttons',
      'R-10: Glassmorphism strictly restrained to the central command bar pill',
      'R-31: Art direction serves an intentional narrative theme'
    ],
    quickPrompt: `Build a cinematic atmospheric full-bleed landing page hero in React and Tailwind CSS.
Visual Theme: A solitary silhouette figure standing on a rocky mountain ridge gazing toward a glowing sunset horizon.
Color treatment: Dark crimson dusk background (#09090b base blending into deep wine red #630b15, with a soft glowing circular sun disc #fef08a behind the ridge).
Elements:
1. Minimal transparent top navbar: Project name in bold white, subtle navigation links (Rules, Skills, Agents, Docs), and an outlined "Install" pill.
2. Centered hero text:
   - Primary Headline: "Rules for AI coding agents" (large, bold, drop-shadow).
   - Subtitle: "A filter for coding agents across UI, copy, and code. 38 mandatory rules, a liveliness toolkit, and zero generic slop."
3. Command Line Pill: Centered floating pill with black/60 backdrop-blur, 1px white/20 border, monospaced text "npx antislop-ai", and a 1-click copy icon button.
Ensure absolute visual depth without cheap floating shapes or generic AI stock graphics.`,
    markdownSpec: `# UI Specification: Cinematic Atmospheric Hero

## 1. Visual Direction & Mood
- **Atmosphere**: Epic, contemplative, craft-driven dusk landscape (inspired by anti-slop aesthetic).
- **Core Contrast**: Deep dark silhouette foreground against warm crimson/ember horizon.
- **Dose Cap**: Glassmorphism is strictly applied only to the terminal input pill.`
  },

  /* 3. NEO-BRUTALISM */
  {
    id: 'neo-brutalism',
    slug: 'neo-brutalist-launchpad',
    title: 'Neo-Brutalist Component System',
    category: 'Components',
    style: 'Neo-Brutalism',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Intermediate',
    summary: 'High-energy Neo-Brutalist layout featuring hard 3px black borders, zero-blur drop shadows, canary yellow and hot magenta surfaces, and raw typography.',
    tags: ['Neo-Brutalism', 'Hard Shadow', 'Canary Yellow', 'High Contrast', 'Retro Web'],
    copyCount: 1840,
    previewId: 'neo-brutalism',
    fontStack: 'Space Grotesk, JetBrains Mono',
    colorPalette: [
      { name: 'Canary Canvas', hex: '#FFE600', usage: 'Primary background surface' },
      { name: 'Hot Magenta', hex: '#FF2A85', usage: 'High-priority badges and CTA' },
      { name: 'Electric Cyan', hex: '#00F0FF', usage: 'Accent stickers and icons' },
      { name: 'Pure Black', hex: '#000000', usage: '3px borders and offset shadow blocks' },
      { name: 'Card White', hex: '#FFFFFF', usage: 'Content card surfaces' },
    ],
    antiSlopChecks: [
      'R-01: Zero smooth gradients or soft blurs; 100% solid flat fills',
      'R-11: Zero pill rounded corners; sharp rectangular geometry with tactile weight',
      'R-12: Hard offset shadows (3px 3px 0px #000) replace generic fuzzy drop shadows',
      'R-16: Copy uses direct, unapologetic language with zero corporate buzzwords'
    ],
    quickPrompt: `Build a high-energy Neo-Brutalist card and hero section using React and Tailwind CSS.
Visual Rules for Neo-Brutalism:
- Heavy solid black borders: border-2 or border-[3px] border-black on all containers, buttons, and cards.
- Hard-edged block shadows with ZERO blur: shadow-[4px_4px_0px_0px_#000000].
- Palette: Canary yellow (#FFE600) background, hot magenta (#FF2A85) tags, electric cyan (#00F0FF) accents, crisp white cards, and deep black text.
- Typography: Heavy uppercase sans-serif (font-black) with monospace subtext.
Include:
1. Header bar with "BRUTAL//UI" logo and a "RAW 2026" badge with hard shadow.
2. Main Content Card: White surface with 3px black border, bold headline "Zero AI Slop. Pure Structure.", sticker badge, and metric highlights.
3. Interactive buttons: On click/active state, shift translate-x-1 translate-y-1 and remove shadow for a physical press feeling.
Do not use border-radius larger than rounded-none or rounded-sm. Avoid all soft blurred shadows.`,
    markdownSpec: `# UI Specification: Neo-Brutalist Component System

## 1. Design Philosophy
Neo-Brutalism rejects the generic "safe corporate tech" aesthetic. It emphasizes physical graphic design: hard ink lines, bold pop-art colors, and zero soft gradients.`
  },

  /* 4. LIQUID GLASSMORPHISM */
  {
    id: 'liquid-glassmorphism',
    slug: 'refined-liquid-glassmorphism',
    title: 'Liquid Glassmorphism Acrylic Card',
    category: 'Components',
    style: 'Liquid Glassmorphism',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Advanced',
    summary: 'Refined multi-layer frosted acrylic surface with specular edge highlights, chromatic refraction mesh, and high-contrast accessible typography.',
    tags: ['Glassmorphism', 'Frosted', 'Backdrop Blur', 'Acrylic', 'Refraction'],
    copyCount: 1530,
    previewId: 'liquid-glassmorphism',
    fontStack: 'Plus Jakarta Sans, Geist Mono',
    colorPalette: [
      { name: 'Dark Void', hex: '#0a051b', usage: 'Deep atmospheric backdrop' },
      { name: 'Frosted Glass', hex: 'rgba(255, 255, 255, 0.1)', usage: 'Acrylic card surface with backdrop-blur-2xl' },
      { name: 'Specular Border', hex: 'rgba(255, 255, 255, 0.25)', usage: '1px light-catching edge line' },
      { name: 'Cobalt Mesh', hex: '#4f46e5', usage: 'Ambient light refraction orb' },
      { name: 'Cyan Specular', hex: '#67e8f9', usage: 'Micro-interaction highlights' },
    ],
    antiSlopChecks: [
      'R-10: Glassmorphism dose cap strictly observed (applied only to primary card, not entire page)',
      'R-21: Text uses pure white and high-opacity tints to guarantee WCAG AA contrast over blurred background'
    ],
    quickPrompt: `Build a refined, non-slop Liquid Glassmorphism acrylic card in React and Tailwind CSS.
Visual Execution:
- Background: Deep indigo/violet void (#0a051b) with 2 soft chromatic mesh color blobs (cobalt #4f46e5 and fuchsia #c026d3) blurred in the background.
- Glass Surface: A centered card with bg-white/10 backdrop-blur-2xl border border-white/25 rounded-3xl shadow-2xl p-6.
- Edge Lighting: 1px crisp top/left border highlight simulating refracted light.
- Content: Header with frosted circle badge, card title, interactive slider, and high contrast typography.`,
    markdownSpec: `# UI Specification: Refined Liquid Glassmorphism

## 1. Anti-Slop Dose Cap (R-10 Compliance)
Glass is an intentional focal material applied exclusively to the hero card. The surrounding layout remains crisp and grounded.`
  },

  /* 5. AGILE KANBAN SPRINT BOARD */
  {
    id: 'kanban-sprint-board',
    slug: 'agile-kanban-sprint-board',
    title: 'Agile Sprint Board & Task Pipeline',
    category: 'SaaS',
    style: 'Developer Native',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Intermediate',
    summary: 'High-efficiency sprint task board featuring 3 status columns (To Do, In Progress, Done), priority badges, assignee avatars, and live deployment tags.',
    tags: ['Kanban', 'Sprint', 'Project Management', 'SaaS', 'Board'],
    copyCount: 1620,
    previewId: 'kanban-sprint-board',
    fontStack: 'Inter, Geist Mono',
    colorPalette: [
      { name: 'Board Surface', hex: '#09090b', usage: 'Main background' },
      { name: 'Column Track', hex: '#18181b', usage: 'Column containers' },
      { name: 'Task Card', hex: '#27272a', usage: 'Individual draggable card' },
      { name: 'Priority Amber', hex: '#f59e0b', usage: 'High-urgency task tag' },
      { name: 'Dev Violet', hex: '#8b5cf6', usage: 'In-progress active status' },
    ],
    antiSlopChecks: [
      'R-05: Non-repetitive card states with actual task metadata, assignees, and realistic issue keys',
      'R-17: Timestamps and sprint counts reflect realistic development timelines',
      'R-31: Color tags map directly to operational urgency'
    ],
    quickPrompt: `Build an Agile Kanban Sprint Board component in React and Tailwind CSS.
Include:
1. Header: "Sprint 42 Board", active task counter (7 tasks), and an "+ Add Task" button.
2. Three columns in a responsive grid:
   - "TO DO" (count 2): Cards with title ("Auth Refactor"), priority badge ("HIGH" in amber), estimation points, and assignee avatar initials.
   - "IN PROGRESS" (count 1): Active task card ("Stripe Webhooks") with violet border highlight and progress status.
   - "DONE" (count 4): Completed tasks with strikethrough titles and green "Deployed" tags.
3. Card details: 1px border-zinc-700/60, subtle hover lift, tag chips, and assignee avatar circles.
Dark zinc minimalist aesthetic, no decorative arrows.`,
    markdownSpec: `# UI Specification: Agile Kanban Sprint Board

## 1. Overview
High-performance developer workspace for tracking sprint delivery, WIP limits, and team assignments.`
  },

  /* 6. FILE UPLOAD DROPZONE */
  {
    id: 'file-upload-dropzone',
    slug: 'modern-drag-drop-file-upload',
    title: 'Drag & Drop File Upload & Progress Hub',
    category: 'Components',
    style: 'Developer Native',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Intermediate',
    summary: 'Interactive file upload dropzone with active drag state, format constraints, animated progress bars, file-type icons, and cancel triggers.',
    tags: ['Upload', 'Dropzone', 'Progress Bar', 'File Manager', 'Forms'],
    copyCount: 1240,
    previewId: 'file-upload-dropzone',
    fontStack: 'Inter, Geist Mono',
    colorPalette: [
      { name: 'Canvas Dark', hex: '#09090b', usage: 'Dropzone background' },
      { name: 'Dashed Border', hex: '#3f3f46', usage: 'Dropzone border perimeter' },
      { name: 'Progress Fill', hex: '#10b981', usage: 'Upload completion bar' },
      { name: 'File Icon Blue', hex: '#3b82f6', usage: 'PDF and document icon container' },
    ],
    antiSlopChecks: [
      'R-03: Full drag-and-drop keyboard and screen-reader file input fallbacks',
      'R-27: Dynamic upload progress state displays real percentage and byte metrics',
      'R-40: Fixed container dimensions prevent layout shifts during file drop'
    ],
    quickPrompt: `Build an interactive File Upload Dropzone component in React and Tailwind CSS.
Features:
1. Dashed Dropzone Area:
   - Border-dashed border-zinc-700 hover:border-violet-500 rounded-2xl p-6 text-center.
   - Cloud upload icon in a subtle violet pill.
   - "Drag & drop files here, or browse" with clickable file browser trigger.
   - Subtext: "Supports PDF, SVG, PNG up to 25MB".
2. Active Upload Queue:
   - Card showing file name ("design_spec_v2.pdf"), size ("2.4 MB"), and percentage ("82%").
   - Smooth animated progress bar with violet-to-emerald gradient fill.
   - Status: Cancel "X" button and retry trigger on error.
Dark zinc clean styling with clear drag-over hover feedback.`,
    markdownSpec: `# UI Specification: Drag & Drop File Upload Dropzone

## 1. Functional Scope
Universal upload component supporting drag events, file validation, and real-time upload progress.`
  },

  /* 7. NOTIFICATION FLYOUT */
  {
    id: 'notification-center',
    slug: 'notification-center-activity-flyout',
    title: 'Notification Center & Activity Flyout',
    category: 'Dashboard',
    style: 'Developer Native',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Intermediate',
    summary: 'Frosted glass notification panel with unread indicator dots, time-ago metadata, category filters (All, Mentions, System), and 1-click mark-as-read.',
    tags: ['Notifications', 'Flyout', 'Activity', 'Dropdown', 'Realtime'],
    copyCount: 1110,
    previewId: 'notification-center',
    fontStack: 'Plus Jakarta Sans, Geist Mono',
    colorPalette: [
      { name: 'Panel Dark', hex: '#121215', usage: 'Flyout surface' },
      { name: 'Unread Violet', hex: '#a78bfa', usage: 'Active unread dot indicator' },
      { name: 'Divider Line', hex: '#27272a', usage: 'Notification item separation' },
    ],
    antiSlopChecks: [
      'R-17: Realistic activity event copy and RFC-3339 relative time formatting',
      'R-24: Every notification item links to an explicit target entity'
    ],
    quickPrompt: `Build a modern Notification Center Flyout in React and Tailwind CSS.
Features:
1. Header: "Notifications" with unread count badge, and a "Mark all as read" button.
2. Segmented Filter Tabs: [ All | Mentions | System ].
3. Notification List:
   - Item 1 (Unread): Pulsing violet dot, user avatar, "Alex approved your pull request #128", "5m ago" with clock icon.
   - Item 2 (Read): Subtle gray dot, "Invoice #902 paid ($420.00)", "1h ago".
   - Item 3: "Security alert: New login from macOS in Tokyo", amber warning badge.
4. Empty state when all cleared: "All caught up" checkmark.
Frosted dark zinc panel with smooth transition.`,
    markdownSpec: `# UI Specification: Notification Center Flyout

## 1. Overview
Real-time activity drawer for SaaS applications with unread state tracking.`
  },

  /* 8. AUDIO WAVEFORM PLAYER */
  {
    id: 'audio-waveform-player',
    slug: 'minimalist-audio-waveform-player',
    title: 'Minimalist Audio & Podcast Player Widget',
    category: 'Components',
    style: 'Liquid Glassmorphism',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Intermediate',
    summary: 'Tactile media player card featuring an animated waveform visualizer, scrubber timestamps, play/pause state toggle, and track artwork.',
    tags: ['Audio', 'Waveform', 'Player', 'Media', 'Podcast'],
    copyCount: 1470,
    previewId: 'audio-waveform-player',
    fontStack: 'Plus Jakarta Sans, Geist Mono',
    colorPalette: [
      { name: 'Player Card', hex: '#121215', usage: 'Player surface' },
      { name: 'Waveform Active', hex: '#a78bfa', usage: 'Played waveform bars' },
      { name: 'Waveform Inactive', hex: '#3f3f46', usage: 'Unplayed waveform bars' },
      { name: 'Play Button', hex: '#ffffff', usage: 'High-contrast play button circle' },
    ],
    antiSlopChecks: [
      'R-17: Scrubber timecodes format correctly (MM:SS)',
      'R-19: Waveform bars respond dynamically to playing/paused states'
    ],
    quickPrompt: `Build a minimalist Audio & Podcast Player widget in React and Tailwind CSS.
Features:
1. Track Information:
   - Album artwork square (gradient or thumbnail) with rounded-lg.
   - Track title ("Synthesize Horizon") and artist/episode subtext.
   - Play/Pause circular white button with smooth state icon morph.
2. Animated Waveform Visualizer:
   - 25 vertical waveform bars with varying heights.
   - Played bars highlighted in violet-400; unplayed bars in zinc-700.
   - Subtle wave animation when audio is playing.
3. Scrubber & Timers: "01:42" elapsed on left, "03:28" remaining on right in font-mono.
Clean, compact card with subtle glassmorphic backdrop.`,
    markdownSpec: `# UI Specification: Minimalist Audio Waveform Player

## 1. Overview
Compact audio component designed for dashboards, podcast platforms, and voice message interfaces.`
  },

  /* 9. SWISS MINIMAL */
  {
    id: 'swiss-minimal',
    slug: 'swiss-international-editorial',
    title: 'Swiss International Typographic Layout',
    category: 'Hero & Landing',
    style: 'Swiss Minimal',
    targetTool: 'Cursor / IDE Spec',
    difficulty: 'Intermediate',
    summary: 'Strict mathematical grid layout inspired by mid-century Swiss graphic design: stark black/white contrast, oversized grotesque numerals, and asymmetric editorial columns.',
    tags: ['Swiss Style', 'Editorial', 'Helvetica', 'Grid System', 'Minimalist'],
    copyCount: 1390,
    previewId: 'swiss-minimal',
    fontStack: 'Helvetica Neue, Inter, Space Mono',
    colorPalette: [
      { name: 'Pure Paper', hex: '#F5F5F5', usage: 'Off-white editorial canvas' },
      { name: 'Printer Black', hex: '#0A0A0A', usage: 'Typography and hairline grid rules' },
      { name: 'Editorial Gray', hex: '#737373', usage: 'Secondary metadata and labels' },
      { name: 'Vermilion Accent', hex: '#E11D48', usage: 'Single deliberate focal anchor' },
    ],
    antiSlopChecks: [
      'R-01: Zero gradients; relies purely on typography scale and mathematical grid lines',
      'R-04: Zero decorative iconography; information conveyed through text and spatial balance',
      'R-06: Strict typographic hierarchy with generous structural whitespace',
      'R-11: Square and architectural edges with zero random pill radiuses'
    ],
    quickPrompt: `Build a Swiss International Style (Bauhaus / Zürich 1957) editorial layout using React and Tailwind CSS.
Visual Rules:
- Stark monochrome palette: Off-white canvas (#f5f5f5) and pure ink black (#0a0a0a) with hairline 1px solid black grid dividers.
- Asymmetrical 12-column grid layout with generous structural whitespace.
- Typography: Oversized heavy grotesque headings paired with compact uppercase metadata.
- Zero soft drop shadows, zero colorful gradients, zero pill buttons.`,
    markdownSpec: `# UI Specification: Swiss International Typographic Style

## 1. Principles
Hierarchy is achieved through size contrast and weight, never through decoration. Whitespace is an active structural element.`
  },

  /* 10. SAAS BENTO GRID */
  {
    id: 'bento-analytics',
    slug: 'saas-analytics-bento-grid',
    title: 'SaaS Analytics Bento Grid',
    category: 'Dashboard',
    style: 'Bento Grid',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Intermediate',
    summary: 'High-density metric dashboard combining ARR, cohort churn, SVG sparklines, and active session geo-distribution in an asymmetrical bento grid layout.',
    tags: ['Bento Grid', 'Metrics', 'SaaS', 'Charts', 'Dark Zinc'],
    copyCount: 1420,
    previewId: 'bento-analytics',
    fontStack: 'Plus Jakarta Sans, Geist Mono for figures',
    colorPalette: [
      { name: 'Canvas Dark', hex: '#09090b', usage: 'Root background' },
      { name: 'Card Surface', hex: '#18181b', usage: 'Bento cell backgrounds' },
      { name: 'Subtle Border', hex: '#27272a', usage: 'Card perimeter 1px border' },
      { name: 'Emerald Metric', hex: '#10b981', usage: 'Positive delta indicators' },
      { name: 'Violet Accent', hex: '#8b5cf6', usage: 'Primary chart area fill' },
    ],
    antiSlopChecks: [
      'R-01: Palette derived from deliberate design tokens, zero generic neon gradients',
      'R-05: Asymmetrical 4-column layout with deliberate focal hierarchy, not a uniform 3-card template',
      'R-17: Tabular monospace figures prevent numerical layout shift'
    ],
    quickPrompt: `Build a modern dark-mode SaaS analytics bento grid using React, Tailwind CSS, and Lucide icons.
The container is an asymmetrical 4-column CSS grid on desktop with 12px gap.
Colors: background #09090b, surface cards #18181b with 1px border #27272a and rounded-2xl padding.
Include: Total ARR ($142,850) with sparklines, churn rate circular gauge (1.4%), active users counter (8,421), recent upgrade events, and regional traffic progress bars.`,
    markdownSpec: `# UI Specification: SaaS Analytics Bento Grid

## 1. Context & Architecture
Executive-level SaaS health overview without generic filler.`
  },

  /* 11. COMMAND PALETTE */
  {
    id: 'command-palette',
    slug: 'command-palette-spotlight',
    title: 'Command Palette & Quick Action (Cmd+K)',
    category: 'Components',
    style: 'Developer Native',
    targetTool: 'Cursor / IDE Spec',
    difficulty: 'Advanced',
    summary: 'Spotlight-style global modal with keyboard navigation, fuzzy search group headers, recent queries, and action shortcut badges.',
    tags: ['Cmd+K', 'Modal', 'Developer', 'Keyboard-First', 'Raycast-Style'],
    copyCount: 980,
    previewId: 'command-palette',
    fontStack: 'Inter, JetBrains Mono for keyboard keys',
    colorPalette: [
      { name: 'Backdrop Blur', hex: 'rgba(0, 0, 0, 0.75)', usage: 'Screen overlay with backdrop-blur-md' },
      { name: 'Palette Surface', hex: '#121215', usage: 'Command box background' },
      { name: 'Input Border', hex: '#27272a', usage: 'Search divider line' },
      { name: 'Active Row', hex: '#27272a', usage: 'Keyboard focused item background' },
      { name: 'Kbd Keycap', hex: '#1f1f23', usage: 'Keyboard shortcut tag container' },
    ],
    antiSlopChecks: [
      'R-03: Full keyboard-only accessibility (Arrow keys, Enter, Esc)',
      'R-06: Monospace font applied strictly to keycap shortcuts',
      'R-24: Every menu item has a declared action or destination'
    ],
    quickPrompt: `Create a keyboard-first Command Palette modal (Raycast / Linear style) in React and Tailwind CSS.
Modal opens with Cmd+K (or Ctrl+K) or a trigger button.
Floating center modal with max-w-xl, rounded-2xl, background #121215, border 1px solid #27272a, shadow-2xl.
Search input with Lucide Search icon, autoFocus, and Esc badge on right.
Grouped items: Recent, Navigation, Actions. Kbd shortcut badges and arrow navigation support.`,
    markdownSpec: `# UI Specification: Command Palette (Cmd+K)

## 1. Overview
Spotlight command menu inspired by Raycast and Linear.`
  },

  /* 12. MOBILE FINTECH */
  {
    id: 'fintech-cashflow-mobile',
    slug: 'mobile-fintech-cashflow-curve',
    title: 'Mobile FinTech Cashflow & Card Feed',
    category: 'Mobile',
    style: 'Developer Native',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Advanced',
    summary: 'iPhone viewport mockup displaying virtual debit card carousel, total balance with hidden eye toggle, and categorized daily transaction feed.',
    tags: ['Mobile', 'iOS', 'FinTech', 'Transactions', 'Cards'],
    copyCount: 1120,
    previewId: 'fintech-cashflow-mobile',
    fontStack: 'SF Pro Display, SF Pro Text',
    colorPalette: [
      { name: 'App Background', hex: '#000000', usage: 'OLED pure black background' },
      { name: 'Virtual Card', hex: '#18181b', usage: 'Card with metallic border' },
      { name: 'Income Green', hex: '#22c55e', usage: 'Deposits and cashback' },
      { name: 'Expense White', hex: '#f4f4f5', usage: 'General merchant charges' },
    ],
    antiSlopChecks: [
      'R-03: Tap targets meet 44x44px minimum for mobile ergonomics',
      'R-17: Currency figures are consistently formatted with currency code and decimals',
      'R-39: Privacy toggle gives users direct control over sensitive balance figures'
    ],
    quickPrompt: `Build a clean iOS-style mobile FinTech wallet screen inside a responsive mobile frame (w-full max-w-sm mx-auto) using React and Tailwind CSS.
Include: User avatar, total balance ($48,250.80) with eye visibility toggle, quick action buttons (Send, Request, Add Money), virtual debit card preview, and categorized recent transaction list.`,
    markdownSpec: `# UI Specification: Mobile FinTech Wallet Screen

## 1. Platform Requirements
Viewport constrained to 390px (iPhone 15 Pro standard). Pure black OLED palette.`
  },

  /* 13. E-COMMERCE CART DRAWER */
  {
    id: 'checkout-slide-drawer',
    slug: 'ecommerce-slideover-checkout-drawer',
    title: 'Minimalist E-Commerce Cart Drawer',
    category: 'E-Commerce',
    style: 'Bento Grid',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Intermediate',
    summary: 'Slide-over slide drawer with animated item quantity steppers, free shipping progress bar, promo code input, and express checkout button.',
    tags: ['E-Commerce', 'Cart', 'Drawer', 'Checkout', 'Slideover'],
    copyCount: 790,
    previewId: 'checkout-slide-drawer',
    fontStack: 'Plus Jakarta Sans, Geist Mono',
    colorPalette: [
      { name: 'Drawer Surface', hex: '#121215', usage: 'Slideover panel' },
      { name: 'Progress Bar', hex: '#10b981', usage: 'Free shipping milestone indicator' },
      { name: 'Apple Pay Black', hex: '#000000', usage: 'Express checkout pill' },
      { name: 'Border Lines', hex: '#27272a', usage: 'Dividers between cart items' },
    ],
    antiSlopChecks: [
      'R-08: Checkout button labeled "Checkout Now", zero redundant arrows',
      'R-17: Item totals and tax calculations match exact arithmetic'
    ],
    quickPrompt: `Build a modern slide-over E-Commerce Cart Drawer in React and Tailwind CSS.
Features: Header with item counter, free shipping progress bar ("Add $15.00 more to unlock Free Worldwide Shipping!"), scrollable product list with quantity counters (- 1 +), and fixed checkout footer with express 1-tap checkout.`,
    markdownSpec: `# UI Specification: E-Commerce Slide-Over Cart Drawer

## 1. Overview
Frictionless shopping bag designed to increase Average Order Value (AOV).`
  }
];
