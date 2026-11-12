# UI Specification: Modern Creative Digital Agency Landing Page (Turnover)

## 1. Context & Architecture
- **Purpose**: Award-winning creative digital agency landing page engineered to communicate premium brand positioning, high-impact strategy, and modern digital craft.
- **Aesthetic Direction**: High-energy futuristic 3D focal art (neon-illuminated cyber visor bust and helical typography ribbon) set on an airy, warm studio canvas.
- **Framework Compatibility**: React 19 + Tailwind CSS + Lucide Icons (optimized for v0, Claude Artifacts, and Cursor).

---

## 2. Design Tokens
- **Canvas Base**: `#FAF8F5` (Warm Studio Off-White)
- **Ambient Radial Warmth**: `radial-gradient(circle at 65% 50%, rgba(255, 80, 0, 0.08), transparent 60%)`
- **Primary Accent**: `#FF5000` (Electric Laser Orange, WCAG AA compliant on light canvas)
- **Headline / Dark Text**: `#111113` (Charcoal Onyx)
- **Secondary Body Text**: `#52525B` (Zinc 600)
- **Acrylic Frosted Glass**: `rgba(255, 255, 255, 0.72)` with `backdrop-blur-xl` and `1px solid rgba(255, 255, 255, 0.85)`
- **Soft Contact Shadow**: `0 20px 40px -15px rgba(0, 0, 0, 0.07)`
- **Typography**:
  - Headings: *Plus Jakarta Sans* or *Syne* (Font Weight: 800)
  - Body: *Inter* / *Plus Jakarta Sans Regular*
  - Visor & Metadata: *JetBrains Mono* / *Geist Mono*

---

## 3. Structural Wireframe & Hierarchy
```text
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
```

---

## 4. Key Components & Implementation Spec

### A. Navigation Bar (Sticky Top)
- **Brand Logo**: "Turnover" featuring a custom diagonal arrow embedded into the 'o' glyph.
- **Center Nav Links**: Clean horizontal items (`Home`, `Services`, `About`, `Work`, `Blog`, `Contact`) with an active orange dot indicator.
- **Action CTA**: Pill button "Get Started →" in vibrant orange (`#FF5000`).

### B. Left Column (Hero Copy & Proof)
1. **Micro-Badge**: Small glowing orange dot + "Creative Digital Agency" in tracked uppercase text (`text-[11px] font-semibold text-zinc-600`).
2. **Display Headline**:
   - Line 1: `We Build Brands` in deep charcoal onyx (`#111113`).
   - Line 2: `That Stand Out` highlighted in electric laser orange (`#FF5000`).
3. **Value Proposition**: "Turnover is a creative agency helping modern businesses grow through strategy, design, and digital experiences."
4. **Dual Conversion CTAs**:
   - Primary: `[Let's Work Together →]` (solid orange pill with ambient drop shadow).
   - Secondary: `(▶) Watch Our Story • 2 min` (glass circular play ring with soft ripple effect).
5. **Social Proof KPI Strip**:
   - `320+` Happy Clients
   - `5+` Years Experience
   - `150+` Projects Completed
   - `98%` Client Satisfaction

### C. Center/Right Column (3D Bust & Glass Service Pills)
- **Futuristic Sculptural Focal**: Dark matte slate 3D bust with an illuminated neon orange visor reading `"TURNOVER MARKETING"` and layered acoustic head fin slats.
- **Swirling Helical Ribbon**: 3D spiral ribbon looping around the subject with typography: `"Strategy • Design • Digital • Growth"`.
- **4 Floating Frosted Glass Cards** (with subtle vector connection nodes):
  1. `Brand Strategy`: "Turn ideas into powerful brand stories. →"
  2. `Creative Design`: "Beautiful designs that make an impact. →"
  3. `Digital Growth`: "More traffic. More leads. More growth. →"
  4. `Our Latest Work`: Bottom-left floating thumbnail pill previewing the latest client showcase.

---

## 5. Master Generation Prompt
```text
Build a modern, award-winning Creative Digital Agency Landing Page in React and Tailwind CSS (inspired by cutting-edge Awwwards and Turnover Agency design).

Canvas & Styling:
- Background: Warm off-white/cream studio canvas (#FAF8F5) with a subtle radial orange ambient glow (#FFF3EB at 35% opacity in the center).
- Accent Colors: Electric laser orange (#FF5000) for primary CTA, glowing visor, and highlighted headline.
- Fonts: Heavy modern sans-serif ("Plus Jakarta Sans" or "Inter") for headlines, crisp geometric sans for labels.

1. Sticky Header:
- Logo: "Turnover" with an orange upward-diagonal accent arrow integrated into the "o".
- Centered links: Home (with active indicator), Services, About, Work, Blog, Contact.
- CTA: "Get Started →" in an orange pill button.

2. Hero Section (Asymmetrical Split Layout):
- Left Side:
  * Category Pill: Glowing orange dot + "Creative Digital Agency".
  * Headline: "We Build Brands" in heavy charcoal text, followed by "That Stand Out" in vibrant laser orange.
  * Subtitle: "Turnover is a creative agency helping modern businesses grow through strategy, design, and digital experiences."
  * Dual Action: Solid orange pill button "Let's Work Together →" and circular glass play button "Watch Our Story (2 min)".
  * Social Proof (4-col strip): "320+" Happy Clients, "5+" Years Experience, "150+" Projects Completed, "98%" Client Satisfaction.

- Right / Center Side:
  * Futuristic dark slate 3D bust featuring a glowing neon orange cybernetic visor display with illuminated text ("TURNOVER MARKETING") and acoustic fin slats.
  * A 3D helical orange ribbon swirling around the figure with repeating typography: "Strategy • Design • Digital • Growth".
  * 4 Floating Frosted Glass Cards (bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg rounded-2xl):
    1. "Brand Strategy" ("Turn ideas into powerful brand stories. →")
    2. "Creative Design" ("Beautiful designs that make an impact. →")
    3. "Digital Growth" ("More traffic. More leads. More growth. →")
    4. "Our Latest Work" (thumbnail preview pill at the bottom-left).
  * Bottom Right: Minimalist "Scroll Down" mouse scrollwheel indicator.

Include smooth hover transitions, glass refraction borders, and responsive mobile adaptation.
```
