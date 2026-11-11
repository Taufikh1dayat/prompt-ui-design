import React from 'react';
import type { Category, DesignStyle, TargetTool } from '../types';
import { X } from 'lucide-react';

interface FilterBarProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  selectedStyle: DesignStyle;
  onSelectStyle: (style: DesignStyle) => void;
  selectedTool: TargetTool;
  onSelectTool: (tool: TargetTool) => void;
  filteredCount: number;
  totalCount: number;
  onResetFilters: () => void;
  isFiltered: boolean;
}

const STYLES: DesignStyle[] = [
  'All',
  'Buttons & Micro-UI',
  'Cinematic Editorial',
  'Neo-Brutalism',
  'Liquid Glassmorphism',
  'Swiss Minimal',
  'Bento Grid',
  'Developer Native',
];

const TOOLS: TargetTool[] = [
  'All',
  'v0.dev / Claude',
  'Cursor / IDE Spec',
  'Midjourney / Mockup',
];

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  selectedStyle,
  onSelectStyle,
  selectedTool,
  onSelectTool,
  filteredCount,
  totalCount,
  onResetFilters,
  isFiltered,
}) => {
  return (
    <div className="sticky top-15 z-30 w-full bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl border-y border-black/5 dark:border-white/10 py-3 px-4 sm:px-6 lg:px-8 mb-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="w-full md:w-auto flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-sm scale-[1.02]'
                    : 'glass-btn text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Secondary Selectors */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-3">
          {/* Aesthetic Selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-zinc-500 hidden sm:inline">Aesthetic:</span>
            <select
              value={selectedStyle}
              onChange={(e) => onSelectStyle(e.target.value as DesignStyle)}
              className="glass-btn text-zinc-800 dark:text-zinc-200 rounded-xl px-2.5 py-1.5 text-xs outline-none cursor-pointer font-medium"
            >
              {STYLES.map((st) => (
                <option key={st} value={st} className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
                  {st === 'All' ? 'All Aesthetics' : st}
                </option>
              ))}
            </select>
          </div>

          {/* Tool Selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-zinc-500 hidden sm:inline">Tool:</span>
            <select
              value={selectedTool}
              onChange={(e) => onSelectTool(e.target.value as TargetTool)}
              className="glass-btn text-zinc-800 dark:text-zinc-200 rounded-xl px-2.5 py-1.5 text-xs outline-none cursor-pointer"
            >
              {TOOLS.map((tl) => (
                <option key={tl} value={tl} className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
                  {tl === 'All' ? 'All Tools' : tl}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="glass-btn flex items-center gap-1 text-xs text-violet-600 dark:text-violet-400 hover:underline px-2.5 py-1.5 rounded-xl transition"
            >
              <X className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}

          <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 hidden lg:block pl-2 border-l border-black/10 dark:border-white/10">
            {filteredCount} of {totalCount} items
          </div>
        </div>
      </div>
    </div>
  );
};
