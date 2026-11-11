import { useState, useMemo, useEffect } from 'react';
import { PROMPTS_DATA } from './data/prompts';
import type { Category, DesignStyle, TargetTool, UIPrompt } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { PromptCard } from './components/PromptCard';
import { DetailModal } from './components/DetailModal';
import { SubmitModal } from './components/SubmitModal';
import { Toast } from './components/Toast';
import { Layers, SearchX } from 'lucide-react';

const CATEGORIES: Category[] = [
  'All',
  'Buttons & Controls',
  'Hero & Landing',
  'Dashboard',
  'SaaS',
  'Mobile',
  'E-Commerce',
  'Components',
];

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>('All');
  const [selectedTool, setSelectedTool] = useState<TargetTool>('All');
  const [activePrompt, setActivePrompt] = useState<UIPrompt | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync theme with HTML class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  const isFiltered = useMemo(() => {
    return (
      searchQuery.trim() !== '' ||
      selectedCategory !== 'All' ||
      selectedStyle !== 'All' ||
      selectedTool !== 'All'
    );
  }, [searchQuery, selectedCategory, selectedStyle, selectedTool]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedStyle('All');
    setSelectedTool('All');
  };

  const filteredPrompts = useMemo(() => {
    return PROMPTS_DATA.filter((prompt) => {
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesText =
          prompt.title.toLowerCase().includes(query) ||
          prompt.summary.toLowerCase().includes(query) ||
          prompt.tags.some((t) => t.toLowerCase().includes(query)) ||
          prompt.category.toLowerCase().includes(query) ||
          prompt.style.toLowerCase().includes(query);
        if (!matchesText) return false;
      }

      if (selectedCategory !== 'All' && prompt.category !== selectedCategory) {
        return false;
      }

      if (selectedStyle !== 'All' && prompt.style !== selectedStyle) {
        return false;
      }

      if (selectedTool !== 'All' && prompt.targetTool !== selectedTool) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedStyle, selectedTool]);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] dark:bg-[#080913] text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors overflow-x-hidden">
      {/* 
        High-Performance Hardware-Accelerated Ambient Canvas
        Zero continuous CPU/GPU repaints. Pure static radial gradients + GPU-cached grid lines.
      */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 dark:ambient-gradient-dark ambient-gradient-light" 
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-blueprint-grid pointer-events-none" />
      </div>

      {/* Navigation */}
      <Navbar
        onOpenSubmit={() => setIsSubmitModalOpen(true)}
        onFocusSearch={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          const input = document.querySelector('input');
          input?.focus();
        }}
        totalPrompts={PROMPTS_DATA.length}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Semantic Main Content */}
      <main id="main-content" role="main" className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={PROMPTS_DATA.length}
        />

        {/* Sticky Filter Toolbar */}
        <FilterBar
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedStyle={selectedStyle}
          onSelectStyle={setSelectedStyle}
          selectedTool={selectedTool}
          onSelectTool={setSelectedTool}
          filteredCount={filteredPrompts.length}
          totalCount={PROMPTS_DATA.length}
          onResetFilters={handleResetFilters}
          isFiltered={isFiltered}
        />

        {/* Showcase Section */}
        <section 
          aria-label="Curated UI Design Prompts Gallery"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full pb-16"
        >
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPrompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  prompt={prompt}
                  onOpenDetail={setActivePrompt}
                  onTriggerToast={showToast}
                />
              ))}
            </div>
          ) : (
            /* Accessible Empty Search State */
            <div className="py-20 text-center flex flex-col items-center justify-center max-w-md mx-auto glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 mb-3">
                <SearchX className="w-6 h-6" />
              </div>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white mb-1">
                No prompts matched your search
              </h2>
              <p className="text-xs text-zinc-500 mb-4">
                Try searching with different keywords or reset your active filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="glass-btn px-4 py-2 rounded-xl text-xs font-semibold text-zinc-900 dark:text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Semantic Footer */}
      <footer role="contentinfo" className="border-t border-black/5 dark:border-white/10 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">PromptUI</span>
            <span>— Free open-source UI design prompts and architectural markdown specs.</span>
          </div>

          <nav aria-label="Footer Navigation" className="flex items-center gap-5">
            <a
              href="https://github.com/Taufikh1dayat"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition"
            >
              GitHub (@Taufikh1dayat)
            </a>
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition"
            >
              Submit Spec
            </button>
          </nav>
        </div>
      </footer>

      {/* Modals & Toast */}
      <DetailModal
        prompt={activePrompt}
        onClose={() => setActivePrompt(null)}
        onTriggerToast={showToast}
      />

      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onTriggerToast={showToast}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
