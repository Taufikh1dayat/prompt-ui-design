import React, { useRef, useEffect } from 'react';
import { Search, Terminal, FileCode2, Palette } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
}

export const Hero: React.FC<HeroProps> = ({ searchQuery, onSearchChange, totalCount }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="pt-14 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      {/* 
        Solid, Unapologetic High-Contrast Headline (Zero AI-Slop Muted Split / Zero Gradients)
        Unified stark white/black across both lines for a confident, human-designed editorial weight.
      */}
      <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-zinc-950 dark:text-white tracking-[-0.035em] leading-[1.08] mb-5 select-none">
        <span>Production UI Prompts</span>{' '}
        <span className="font-editorial italic font-normal text-zinc-400 dark:text-zinc-500 text-[0.88em] mx-1">
          &
        </span>{' '}
        <br className="hidden sm:inline" />
        <span>Markdown Specs for AI</span>
      </h1>

      {/* Strong Value Proposition */}
      <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
        Stop writing generic prompts like <span className="text-zinc-900 dark:text-zinc-200 italic font-medium font-serif">"buatkan dashboard modern"</span>. 
        Steal battle-tested prompt architectures, exact design tokens, and structured <code className="text-zinc-800 dark:text-zinc-200 bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono font-semibold border border-black/5 dark:border-white/10">.md</code> specs ready for v0, Claude, and Cursor.
      </p>

      {/* Accessible Frosted Glass Search Input */}
      <div className="max-w-xl mx-auto mb-8">
        <label htmlFor="prompt-search-input" className="sr-only">
          Search UI Prompts
        </label>
        <div className="relative flex items-center rounded-2xl glass-card p-1">
          <Search className="absolute left-4 w-4 h-4 text-zinc-400 dark:text-zinc-500 pointer-events-none" />
          <input
            id="prompt-search-input"
            ref={searchInputRef}
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={`Search across ${totalCount} production prompts (e.g. buttons, brutalism, bento)...`}
            className="w-full pl-11 pr-24 py-3 bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm outline-none"
            aria-label={`Search across ${totalCount} UI design prompts and specs`}
          />
          <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none" aria-hidden="true">
            <kbd className="hidden sm:inline-block font-mono text-[10px] bg-black/5 dark:bg-white/10 text-zinc-500 dark:text-zinc-400 px-2 py-1 rounded border border-black/5 dark:border-white/10">
              Press /
            </kbd>
          </div>
        </div>
      </div>

      {/* Spec Markers */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-btn">
          <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>1-Click Copy for v0 & Claude</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-btn">
          <FileCode2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Downloadable .md Context Files</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-btn">
          <Palette className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
          <span>Design Tokens & Hex Inspection</span>
        </div>
      </div>
    </header>
  );
};
