import React from 'react';
import { Layers, Plus, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenSubmit: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSubmit,
  theme,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 dark:border-white/10 bg-white/90 dark:bg-[#090a0f]/90 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-zinc-950 shadow-xs">
            <Layers className="w-4 h-4" />
          </div>
          <span className="font-bold text-zinc-900 dark:text-zinc-100 tracking-tight text-sm">
            PromptUI
          </span>
        </div>

        {/* Actions with Solid Structured Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 sm:p-1.5 rounded-lg glass-btn text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition focus-visible:ring-2 focus-visible:ring-zinc-400"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>

          <button
            onClick={onOpenSubmit}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg glass-btn text-zinc-700 dark:text-zinc-300 text-xs font-semibold transition focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Submit<span className="hidden sm:inline"> Spec</span></span>
          </button>

          <a
            href="https://github.com/Taufikh1dayat/prompt-ui-design"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold shadow-xs hover:opacity-90 transition active:scale-95 focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};
