import type { UIPrompt, PromptFormat } from '../types';

/**
 * Converts a token name into a valid CSS variable name.
 * e.g., "Brutal Yellow" -> "brutal-yellow"
 */
function toCssVarName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Strips framework-specific opening lines from quickPrompt.
 */
function cleanPromptText(quickPrompt: string): string {
  return quickPrompt
    .replace(/^Build a [^\n]+in React and Tailwind CSS[^\n]*:?\n?/i, '')
    .replace(/^Build a [^\n]+in React[^\n]*:?\n?/i, '')
    .trim();
}

/**
 * Formats a UIPrompt into the selected target format:
 * - 'agnostic': Framework-agnostic pure design specification
 * - 'react-tailwind': Production-ready React 19 + Tailwind CSS prompt
 * - 'html-css': Standalone Semantic HTML5 + Modern CSS variables
 * - 'design-brief': Creative visual brief for Figma, Midjourney, or UI designers
 */
export function generateFormattedPrompt(prompt: UIPrompt, format: PromptFormat): string {
  switch (format) {
    case 'agnostic': {
      if (prompt.pureDesignPrompt) {
        return prompt.pureDesignPrompt;
      }

      const tokenList = prompt.colorPalette
        .map((t) => `- ${t.name}: ${t.hex} (${t.usage})`)
        .join('\n');

      const antiSlopList = prompt.antiSlopChecks
        .map((c) => `- ${c}`)
        .join('\n');

      const cleanedDetails = cleanPromptText(prompt.quickPrompt);

      return `# UI Design Specification: ${prompt.title}
Category: ${prompt.category} | Aesthetic Style: ${prompt.style}
Target: Framework-Agnostic (HTML/CSS, Vue, Svelte, Flutter, Webflow, or Native UI)

## 1. Visual Intent & Atmosphere
${prompt.summary}

## 2. Universal Design Tokens & Color Palette
${tokenList}

## 3. Typography & Font Hierarchy
- Primary Font Stack: ${prompt.fontStack}

## 4. Component Layout & Structural Hierarchy
${cleanedDetails}

## 5. Anti-Slop Safeguards & Interactive Physics
${antiSlopList}

> Note for AI: Implement this interface focusing strictly on visual hierarchy, exact token values, tactile states, and purposeful typography. Do not lock into any specific JS library or framework unless explicitly asked.`;
    }

    case 'react-tailwind': {
      return prompt.quickPrompt;
    }

    case 'html-css': {
      const cssVars = prompt.colorPalette
        .map((t) => `  --color-${toCssVarName(t.name)}: ${t.hex}; /* ${t.usage} */`)
        .join('\n');

      return `/* ========================================================
   Semantic HTML5 & Modern CSS Specification
   Component: ${prompt.title} (${prompt.style})
   ======================================================== */

/* CSS Design Tokens */
:root {
${cssVars}
  --font-primary: ${prompt.fontStack};
}

/* Architecture Requirements:
   1. Semantic HTML5 markup (<header>, <nav>, <main>, <section>, <article>, <button>).
   2. Modern CSS: Flexbox & Grid for layout, CSS variables, backdrop-filter for blur effects.
   3. Complete hover, active, focus-visible, and disabled states.
   4. Pure standard web platform: NO React, NO Tailwind, and NO external CSS dependencies.
*/

/* Implementation Directive */
${prompt.quickPrompt}`;
    }

    case 'design-brief': {
      const paletteSummary = prompt.colorPalette
        .map((t) => `• ${t.name} (${t.hex}): ${t.usage}`)
        .join('\n');

      const safeguards = prompt.antiSlopChecks
        .map((c) => `• ${c}`)
        .join('\n');

      return `# Creative UI/UX Brief & Visual Mockup Directive
Project: ${prompt.title}
Aesthetic Direction: ${prompt.style} | Complexity: ${prompt.difficulty}

## 1. Mood & Visual Atmosphere
${prompt.summary}

## 2. Color Harmony & Material Tokens
${paletteSummary}

## 3. Typographic Character
${prompt.fontStack}

## 4. Anti-Slop Design Principles
${safeguards}

## 5. Visual Prompt (For Midjourney / Figma AI / Claude Vision)
"High-fidelity UI design mockup of ${prompt.title}, ${prompt.style} aesthetic, professional digital product design. Featuring ${prompt.colorPalette.map((t) => t.name).join(', ')} color palette, clean typography (${prompt.fontStack}), high contrast, refined micro-details, zero generic AI slop, Figma studio quality, 8k resolution, clean interface design."`;
    }

    default:
      return prompt.quickPrompt;
  }
}

export const PROMPT_FORMAT_OPTIONS: {
  id: PromptFormat;
  label: string;
  badge: string;
  description: string;
}[] = [
  {
    id: 'agnostic',
    label: 'Pure Design (Agnostic)',
    badge: 'Any Stack',
    description: 'Universal layout, design tokens, and visual hierarchy without framework boilerplate.',
  },
  {
    id: 'react-tailwind',
    label: 'React + Tailwind',
    badge: 'v0 / Claude',
    description: 'Production-ready prompt optimized for React 19 and Tailwind CSS v4.',
  },
  {
    id: 'html-css',
    label: 'HTML5 + Modern CSS',
    badge: 'Vanilla Web',
    description: 'Standalone semantic HTML5 with CSS custom properties and modern styling.',
  },
  {
    id: 'design-brief',
    label: 'Design Brief',
    badge: 'Figma / AI Vision',
    description: 'Aesthetic directive for Figma wireframing and Midjourney/Claude visual mockups.',
  },
];
