import type { UIPrompt } from '../types';

export const PROMPTS_DATA: UIPrompt[] = [
  /* 1. BUTTON SHOWCASE MATRIX */
  {
    id: 'button-showcase-matrix',
    slug: 'interactive-button-matrix-micro-ui',
    title: 'Button Archetypes & Micro-Interactions',
    category: 'Buttons',
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
    category: 'Landing',
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
    category: 'Dashboard',
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
    slug: 'linear-activity-inbox-notification-flyout',
    title: 'Linear-Style Activity Inbox & Notification Flyout',
    category: 'Dashboard',
    style: 'Developer Native',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Intermediate',
    summary: 'Keyboard-first activity triage inbox inspired by Linear and Raycast: inky obsidian canvas, 1px hairline borders, integration event badges (GitHub PR, Vercel deploy, Linear issues), and hotkey navigation (J/K/E).',
    tags: ['Linear Inbox', 'Raycast', 'Notifications', 'Activity Feed', 'Keyboard First', 'Triage'],
    copyCount: 1640,
    previewId: 'notification-center',
    fontStack: 'Plus Jakarta Sans, Geist Mono',
    colorPalette: [
      { name: 'Obsidian Surface', hex: '#090A0E', usage: 'Flyout base canvas' },
      { name: 'Electric Violet', hex: '#8B5CF6', usage: 'Unread counter badge & indicator dot' },
      { name: 'Emerald Live', hex: '#10B981', usage: 'Cloud deployment & merged PR status' },
      { name: 'Amber Priority', hex: '#F59E0B', usage: 'High-urgency issue priority tag' },
      { name: 'Hairline Border', hex: 'rgba(255, 255, 255, 0.1)', usage: '1px crisp border separation' },
    ],
    antiSlopChecks: [
      'R-05: Actionable triage inbox queue rather than passive decorative notification stream',
      'R-17: Realistic developer activity event copy and RFC-3339 relative time formatting',
      'R-24: Every item links to an explicit target entity (PR #142, Production Edge deploy, ENG-2041)',
      'R-34: Keyboard navigation affordances (J/K, E, ↵) clearly exposed in footer bar'
    ],
    quickPrompt: `Build a modern, developer-grade Activity Inbox & Notification Flyout in React and Tailwind CSS inspired by Linear.app and Raycast.

Layout & Styling:
- Floating popover panel (w-full max-w-sm rounded-2xl bg-[#090A0E] text-zinc-200 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden).
- Typography: Sans-serif for titles with crisp Monospace (Geist Mono) for commits, latencies, and hotkeys.

1. Header Bar:
- Left: Bell icon in violet rounded pill + "Inbox" + glowing counter pill "3 new" (bg-violet-500/20 text-violet-300 border border-violet-500/40).
- Right: Filter pill tabs: [ All (active) | Mentions | System ].

2. Notification Feed (Actionable Triage Rows):
- Row 1 (GitHub PR Merge):
  * Avatar initials "AR" (gradient violet) with green checkmark badge overlay.
  * Headline: "Alex Rivera merged PR #142" with relative time "2m ago".
  * Subtext: "feat(auth): token rotation & session guard".
  * Unread state: Glowing violet dot indicator with hover quick actions ("View PR ↗", "Mark Read ✓").
- Row 2 (Vercel Cloud Deployment):
  * Minimalist black square icon with white Vercel triangle.
  * Headline: "Edge Deploy: Production" with live pulsing green dot + "14m ago".
  * Subtext: "api.promptui.dev • 38ms latency".
- Row 3 (Linear Issue Assignment):
  * Amber priority tag badge "P1".
  * Headline: "Assigned to ENG-2041" + "1h ago".
  * Subtext: "Audit WCAG AA color contrast on light mode".

3. Footer Triage Toolbar:
- Left: Keyboard shortcuts hint: "[J][K] Navigate", "[E] Done".
- Right: Interactive text button: "Mark all read ✓".`,
    markdownSpec: `# UI Specification: Linear-Style Activity Inbox & Notification Flyout

## 1. Context & Design Ethos
- **Inspiration**: Linear.app Inbox, Raycast activity flyout, and Vercel edge activity monitor.
- **Philosophy**: Notifications are treated as an **actionable triage work queue**, not a passive stream. Every row represents an explicit entity with immediate keyboard or 1-click triage actions.

## 2. Design Tokens
- **Canvas Base**: \`#090A0E\` (Obsidian Black)
- **Card Surface**: \`#121318\` with hover state \`#181920\`
- **Hairline Borders**: \`rgba(255, 255, 255, 0.08)\`
- **Active Accent**: \`#8B5CF6\` (Electric Violet, unread indicator dot)
- **Success Accent**: \`#10B981\` (Emerald, deployment & merge signals)
- **Warning Accent**: \`#F59E0B\` (Amber, P1 priority badge)
- **Typography**: Plus Jakarta Sans / Geist Mono

## 3. Structural Wireframe
\`\`\`text
+-------------------------------------------------------------+
| (🔔) Inbox [3 new]                         [All] Mentions System |
+-------------------------------------------------------------+
| [AR✓] Alex Rivera merged PR #142                        2m ●|
|       feat(auth): token rotation & session guard            |
+-------------------------------------------------------------+
| [▲]   Edge Deploy: Production (●)                      14m  |
|       api.promptui.dev • 38ms latency                       |
+-------------------------------------------------------------+
| [P1]  Assigned to ENG-2041                              1h  |
|       Audit WCAG AA color contrast on light mode            |
+-------------------------------------------------------------+
| [J][K] Nav   [E] Done                       Mark all read ✓ |
+-------------------------------------------------------------+
\`\`\``
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
    category: 'Landing',
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
    category: 'Components',
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
  },

  /* 14. MODERN CREATIVE DIGITAL AGENCY LANDING (TURNOVER) */
  {
    id: 'creative-agency-landing',
    slug: 'modern-creative-digital-agency-landing',
    title: 'Modern Creative Digital Agency Landing Page Design',
    category: 'Landing',
    style: 'Liquid Glassmorphism',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Advanced',
    summary: 'High-impact creative agency landing page featuring a futuristic 3D hero bust with glowing neon orange visor, helical typographic ribbon, floating frosted acrylic glass cards with connection nodes, and social proof metrics on a pristine warm-light canvas.',
    tags: ['Agency', 'Landing Page', '3D Element', 'Frosted Glass', 'Warm Minimalist', 'Neon Orange', 'Brand Identity'],
    copyCount: 3120,
    previewId: 'creative-agency-landing',
    fontStack: 'Plus Jakarta Sans, Syne, Inter',
    colorPalette: [
      { name: 'Warm Studio Canvas', hex: '#FAF8F5', usage: 'Main background canvas with ambient center warmth' },
      { name: 'Laser Neon Orange', hex: '#FF5000', usage: 'Primary CTA, highlighted text & neon visor illumination' },
      { name: 'Charcoal Onyx', hex: '#111113', usage: 'High-contrast headline and primary text' },
      { name: 'Frosted Acrylic', hex: 'rgba(255, 255, 255, 0.72)', usage: 'Floating glassmorphic feature cards' },
      { name: 'Cyber Slate', hex: '#334155', usage: 'Futuristic 3D mannequin sculpted shading' },
    ],
    antiSlopChecks: [
      'R-01: Intentional mono-accent palette (laser orange on warm cream) avoiding generic blue/purple AI meshes',
      'R-04: Floating cards use functional service glyphs with semantic directional links',
      'R-09: Spacious editorial headline hierarchy with dedicated breathing room and zero clutter',
      'R-10: Restrained frosted glass with realistic refraction borders and diffuse contact shadows',
      'R-31: Quantified social proof metrics with authentic client and project KPIs'
    ],
    quickPrompt: `Build a modern, award-winning Creative Digital Agency Landing Page in React and Tailwind CSS (inspired by cutting-edge Awwwards and Turnover Agency design).

### 1. Visual Theme & Canvas
- Canvas: Warm, pristine studio off-white/cream (#FAF8F5) with a subtle radial ambient light glow at the center (#FFF3EB at 35% opacity).
- Primary Accent: High-energy electric laser orange (#FF5000 / #FF4500) for focal branding, glowing visor, and primary CTAs.
- Typography: Heavy modern grotesque ("Plus Jakarta Sans" or "Inter") for headlines, coupled with crisp geometric typography for labels.

### 2. Header & Navigation (Sticky Backdrop)
- Logo: "Turnover" in bold charcoal typography with a stylized upward diagonal orange arrow accent over the 'o'.
- Nav Links: Minimalist text links (Home, Services, About, Work, Blog, Contact) with an active orange dot indicator on "Home".
- Header CTA: Pill button "Get Started →" in vibrant orange with white bold text (hover:scale-105 active:scale-95 transition).

### 3. Hero Section (Asymmetrical Split Layout)
#### Left Column: Content & Social Proof
- Micro-Badge: Small vibrant orange dot + "Creative Digital Agency" in tracked uppercase text (text-[11px] font-semibold text-zinc-600).
- Headline: Massive bold typography:
  - Line 1: "We Build Brands" (charcoal onyx #111113, font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-7xl).
  - Line 2: "That Stand Out" (vibrant laser orange #FF5000, font-extrabold).
- Subtitle: "Turnover is a creative agency helping modern businesses grow through strategy, design, and digital experiences." (text-zinc-600 leading-relaxed max-w-lg).
- Action Buttons (Dual CTA):
  1. Primary Button: "Let's Work Together →" (solid vibrant orange pill, px-7 py-3.5, font-bold text-white shadow-[0_10px_25px_rgba(255,80,0,0.35)]).
  2. Secondary Action: Glass circular play button with pulsing glow ring + "Watch Our Story (2 min)" text link.
- Social Proof Metrics Grid (4 items in a horizontal strip):
  - "320+" Happy Clients
  - "5+" Years Experience
  - "150+" Projects Completed
  - "98%" Client Satisfaction

#### Center & Right Column: 3D Art & Floating Glass Feature Cards
- Central 3D Visual Centerpiece:
  - Futuristic dark slate mannequin/bust featuring a glowing neon orange cybernetic visor display with illuminated text ("TURNOVER MARKETING").
  - Soundwave-like layered horizontal fin slats sculpted on the side of the head.
  - A 3D helical orange ribbon swirling dynamically from background to foreground with typography: "Strategy • Design • Digital • Growth".
- Floating Frosted Acrylic Cards (Connected with subtle vector node lines):
  1. Top-Right: Glass card "Brand Strategy" ("Turn ideas into powerful brand stories. →") with an amber briefcase icon.
  2. Mid-Right: Glass card "Creative Design" ("Beautiful designs that make an impact. →") with a pen/leaf icon.
  3. Lower-Right: Glass card "Digital Growth" ("More traffic. More leads. More growth. →") with an analytics bar chart icon.
  4. Bottom-Left: Floating thumbnail card "Our Latest Work" with a neon visor project thumbnail and description ("Branding for a modern tech company. →").

### 4. Interactive Details & Micro-Interactions
- Glass cards use: bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_20px_45px_rgba(0,0,0,0.06)] rounded-2xl hover:-translate-y-1 transition-transform.
- Bottom right: Minimalist "Scroll Down" mouse scrollwheel indicator.
- Fully responsive layout: gracefully collapses 3D elements behind text or stacks vertically on mobile viewports.`,
    markdownSpec: `# UI Specification: Modern Creative Digital Agency Landing Page (Turnover)

## 1. Context & Architecture
- **Purpose**: Award-winning creative digital agency landing page engineered to communicate premium brand positioning, high-impact strategy, and modern digital craft.
- **Aesthetic Direction**: High-energy futuristic 3D focal art (neon-illuminated cyber visor bust and helical typography ribbon) set on an airy, warm studio canvas.
- **Framework Compatibility**: React 19 + Tailwind CSS + Lucide Icons (optimized for v0, Claude Artifacts, and Cursor).

## 2. Design Tokens
- **Canvas Base**: \`#FAF8F5\` (Warm Studio Off-White)
- **Ambient Radial Warmth**: \`radial-gradient(circle at 65% 50%, rgba(255, 80, 0, 0.08), transparent 60%)\`
- **Primary Accent**: \`#FF5000\` (Electric Laser Orange, WCAG AA compliant on light canvas)
- **Headline / Dark Text**: \`#111113\` (Charcoal Onyx)
- **Secondary Body Text**: \`#52525B\` (Zinc 600)
- **Acrylic Frosted Glass**: \`rgba(255, 255, 255, 0.72)\` with \`backdrop-blur-xl\` and \`1px solid rgba(255, 255, 255, 0.85)\`
- **Soft Contact Shadow**: \`0 20px 40px -15px rgba(0, 0, 0, 0.07)\`

## 3. Structural Wireframe & Breakdown
\`\`\`text
+-----------------------------------------------------------------------------------+
| [Turn↗ver]                 Home  Services  About  Work  Blog  Contact  [Get Started →] |
+-----------------------------------------------------------------------------------+
|  ● Creative Digital Agency                                                        |
|                                                               [Brand Strategy →]  |
|  We Build Brands                   [ 3D Bust / Visor ]             (Glass Pill)   |
|  That Stand Out                    [ TURNOVER MARKETING ]                         |
|                                    [ Swirling Orange Ribbon ] [Creative Design →] |
|  Turnover is a creative agency...  [ Strategy • Design • ]         (Glass Pill)   |
|                                                                                   |
|  [Let's Work Together →] (▶) Story                            [Digital Growth →]  |
|                                                                    (Glass Pill)   |
|  320+        5+          150+         98%                                         |
|  Clients    Years       Projects     Satisfaction                                 |
|                                                                                   |
|  [Our Latest Work →]                                                  Scroll Down |
|  (Thumbnail Pill)                                                         (Mouse) |
+-----------------------------------------------------------------------------------+
\`\`\`

## 4. Master Prompt
See quickPrompt above for the ready-to-run prompt.`
  },

  /* 15. B2B SAAS PRICING & FEATURE COMPARISON MATRIX */
  {
    id: 'saas-pricing-matrix',
    slug: 'b2b-saas-pricing-feature-matrix',
    title: 'B2B SaaS Pricing & Feature Comparison Matrix',
    category: 'Components',
    style: 'Developer Native',
    targetTool: 'v0.dev / Claude',
    difficulty: 'Intermediate',
    summary: 'High-conversion, zero-slop B2B SaaS pricing matrix inspired by Stripe and Linear: interactive Annual/Monthly billing toggle with exact arithmetic, 3 distinct tiers (Hobby, Team Pro, Enterprise), explicit entitlement limits, and transparent feature breakdown without arbitrary gradient cards.',
    tags: ['Pricing', 'Billing', 'SaaS', 'Stripe', 'Linear', 'Tiers', 'Toggle', 'Anti-Slop'],
    copyCount: 2890,
    previewId: 'saas-pricing-matrix',
    fontStack: 'Plus Jakarta Sans, Geist Mono',
    colorPalette: [
      { name: 'Obsidian Base', hex: '#090A0F', usage: 'Main background surface' },
      { name: 'Featured Pro Card', hex: '#151722', usage: 'Highlighted tier background' },
      { name: 'Accent Violet', hex: '#8B5CF6', usage: 'Primary CTA and pro tier border accent' },
      { name: 'Status Emerald', hex: '#10B981', usage: 'Feature checkmarks and annual discount badge' },
      { name: 'Hairline Border', hex: 'rgba(255, 255, 255, 0.08)', usage: '1px crisp border separation' },
    ],
    antiSlopChecks: [
      'R-01: Zero rainbow multi-gradients or glowing gradient text; grounded slate surfaces with 1px hairline borders',
      'R-04: Functional status icons only (subtle green checks for included features, muted dashes for non-entitlements)',
      'R-08: Action buttons have purpose-driven labels ("Start Free Sandbox", "Upgrade to Team Pro", "Book Architecture Review")',
      'R-11: Proportional radii (8px for toggles, 16px for tier containers, 10px for action buttons)',
      'R-17: Accurate arithmetic on annual discount (Toggle calculates $24/mo -> $19/mo billed annually)',
      'R-31: Defensible tier boundaries (explicit seat limits, API compute quotas, and audit log retentions)'
    ],
    quickPrompt: `Build a high-conversion, developer-grade B2B SaaS Pricing Table component in React and Tailwind CSS inspired by Stripe and Linear.

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
- Include footer assurance strip: "14-day free trial on Pro • No credit card required • Cancel anytime".`,
    markdownSpec: `# UI Specification: B2B SaaS Pricing & Feature Comparison Matrix

## 1. Context & Anti-Slop Rationale
- **Target Problem**: AI coding assistants routinely generate terrible "AI-slop" pricing pages: arbitrary glowing purple gradient cards, unreadable contrast, performative sparkle icons, and generic "Get Started" buttons with decorative trailing arrows.
- **Real-World Foundation**: Engineered following best practices from **Stripe, Linear, Supabase, and Vercel**:
  - Grounded inky dark canvas with 1px hairline borders (\`rgba(255, 255, 255, 0.08)\`).
  - Strict arithmetic accuracy on billing frequencies (e.g. $24/mo monthly vs $19/mo billed annually at $228/yr).
  - Defensible, concrete feature gating (quantified seat counts, API bandwidth limits, and audit log retention rather than vague "Unlimited Power").
  - Explicit, purpose-driven CTA copy ("Start Free Sandbox", "Upgrade to Team Pro", "Talk with Solutions Engineering").

## 2. Design Tokens
- **Canvas Base**: \`#090A0F\`
- **Standard Card Surface**: \`#111218\`
- **Featured Card (Team Pro)**: \`#151722\` with a 1px border \`rgba(139, 92, 246, 0.45)\`
- **Hairline Border**: \`rgba(255, 255, 255, 0.08)\`
- **Accent Violet**: \`#8B5CF6\`
- **Status Emerald**: \`#10B981\`
- **Primary Text**: \`#FFFFFF\`
- **Muted Text**: \`#71717A\`

## 3. Master Prompt
See quickPrompt above for the ready-to-run prompt.`
  }
];
