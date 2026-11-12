export type Category = 
  | 'All'
  | 'Buttons'
  | 'Landing'
  | 'Dashboard'
  | 'Components'
  | 'Mobile';

export type DesignStyle = 
  | 'All'
  | 'Buttons & Micro-UI'
  | 'Neo-Brutalism'
  | 'Cinematic Editorial'
  | 'Liquid Glassmorphism'
  | 'Swiss Minimal'
  | 'Bento Grid'
  | 'Developer Native'
  | 'Tactile Skeuomorphic'
  | 'Cyberpunk Terminal';

export type TargetTool = 
  | 'All'
  | 'v0.dev / Claude'
  | 'Cursor / IDE Spec'
  | 'Midjourney / Mockup';

export interface DesignToken {
  name: string;
  hex: string;
  usage: string;
}

export interface UIPrompt {
  id: string;
  title: string;
  slug: string;
  category: Exclude<Category, 'All'>;
  style: Exclude<DesignStyle, 'All'>;
  targetTool: Exclude<TargetTool, 'All'>;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  quickPrompt: string;
  markdownSpec: string;
  colorPalette: DesignToken[];
  fontStack: string;
  tags: string[];
  copyCount: number;
  previewId: string;
  antiSlopChecks: string[];
}
