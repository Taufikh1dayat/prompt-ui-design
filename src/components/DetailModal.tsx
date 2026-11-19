import React, { useState, useEffect, useMemo } from 'react';
import type { UIPrompt } from '../types';
import { MiniPreview } from './MiniPreviews';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Terminal, 
  FileCode2, 
  Palette,
  Share2,
  Bookmark,
  Code2
} from 'lucide-react';

interface DetailModalProps {
  prompt: UIPrompt | null;
  isBookmarked: boolean;
  onClose: () => void;
  onToggleBookmark: (promptId: string) => void;
  onTriggerToast: (message: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  prompt,
  isBookmarked,
  onClose,
  onToggleBookmark,
  onTriggerToast,
}) => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'markdown' | 'tokens' | 'rules'>('prompt');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [copiedRules, setCopiedRules] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (prompt) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [prompt, onClose]);

  const cursorRuleText = useMemo(() => {
    if (!prompt) return '';
    const tokenList = prompt.colorPalette
      .map((t) => `  - ${t.name}: ${t.hex} /* ${t.usage} */`)
      .join('\n');
    const antiSlopList = prompt.antiSlopChecks
      .map((c) => `- ${c}`)
      .join('\n');

    return `<!-- .cursorrules / CLAUDE.md Architectural Guideline -->
# Role: Senior Frontend Engineer & UI Architect
## Target Component: ${prompt.title}
- Aesthetic Style: ${prompt.style}
- Category: ${prompt.category}
- AI Target: ${prompt.targetTool}
- Complexity: ${prompt.difficulty}

### 1. Design System & Design Tokens
- Typography Font Stack: ${prompt.fontStack}
- Color Tokens:
${tokenList}

### 2. Anti-Slop Architectural Safeguards
${antiSlopList}

### 3. Component Specification (.md)
${prompt.markdownSpec}

### 4. Implementation Prompt
${prompt.quickPrompt}
`;
  }, [prompt]);

  if (!prompt) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt.quickPrompt);
    setCopiedPrompt(true);
    onTriggerToast(`Prompt for "${prompt.title}" copied`);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(prompt.markdownSpec);
    setCopiedMarkdown(true);
    onTriggerToast(`Markdown spec for "${prompt.title}" copied`);
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([prompt.markdownSpec], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${prompt.slug}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onTriggerToast(`Downloaded ${prompt.slug}.md`);
  };

  const handleCopyRules = () => {
    navigator.clipboard.writeText(cursorRuleText);
    setCopiedRules(true);
    onTriggerToast(`Copied AI rules (.cursorrules / CLAUDE.md) for "${prompt.title}"`);
    setTimeout(() => setCopiedRules(false), 2000);
  };

  const handleDownloadRules = () => {
    const blob = new Blob([cursorRuleText], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${prompt.slug}.cursorrules`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onTriggerToast(`Downloaded ${prompt.slug}.cursorrules`);
  };

  const handleCopyToken = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    onTriggerToast(`${name} (${hex}) copied`);
  };

  const handleShareLink = async () => {
    try {
      const shareUrl = `${window.location.origin}${window.location.pathname}?prompt=${prompt.slug}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = shareUrl;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      onTriggerToast(`Shareable link copied for "${prompt.title}"`);
    } catch {
      onTriggerToast('Failed to copy link to clipboard');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog (Anti-Slop R-10, R-11: Structured Solid Canvas, 12px Radius) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-prompt-title"
        className="relative w-full max-w-4xl bg-white dark:bg-[#0e0f15] border border-black/10 dark:border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-black/5 dark:border-white/10 flex items-start justify-between gap-4 bg-zinc-50 dark:bg-zinc-900/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
                {prompt.category} • {prompt.style} • {prompt.targetTool}
              </span>
            </div>
            <h2 id="modal-prompt-title" className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {prompt.title}
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 max-w-2xl">
              {prompt.summary}
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onToggleBookmark(prompt.id)}
              title={isBookmarked ? 'Remove from bookmarks' : 'Save to bookmarks'}
              aria-label={isBookmarked ? 'Remove from bookmarks' : 'Save to bookmarks'}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition focus-visible:ring-2 focus-visible:ring-zinc-400 ${
                isBookmarked
                  ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-xs'
                  : 'glass-btn text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handleShareLink}
              title="Copy direct shareable link"
              aria-label="Copy direct shareable link"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg glass-btn text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-xs font-semibold transition focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <Share2 className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
              <span className="hidden sm:inline">Share</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close specification modal"
              className="p-1.5 rounded-lg glass-btn text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Preview Container */}
        <div className="w-full h-44 sm:h-52 bg-zinc-950 border-b border-black/5 dark:border-white/10 relative overflow-hidden flex items-center justify-center">
          <div className="w-full h-full max-w-lg mx-auto py-2">
            <MiniPreview previewId={prompt.previewId} />
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="px-3 sm:px-6 border-b border-black/5 dark:border-white/10 bg-zinc-50/80 dark:bg-zinc-900/40 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-none py-1 sm:py-0 w-full sm:w-auto" role="tablist" aria-label="Specification view options">
            <button
              onClick={() => setActiveTab('prompt')}
              className={`flex items-center gap-1.5 py-2.5 sm:py-3 px-2 sm:px-0 text-xs font-semibold border-b-2 transition whitespace-nowrap shrink-0 ${
                activeTab === 'prompt'
                  ? 'border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400 font-bold'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt</span>
            </button>

            <button
              onClick={() => setActiveTab('markdown')}
              className={`flex items-center gap-1.5 py-2.5 sm:py-3 px-2 sm:px-0 text-xs font-semibold border-b-2 transition whitespace-nowrap shrink-0 ${
                activeTab === 'markdown'
                  ? 'border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400 font-bold'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>Specification (.md)</span>
            </button>

            <button
              onClick={() => setActiveTab('tokens')}
              className={`flex items-center gap-1.5 py-2.5 sm:py-3 px-2 sm:px-0 text-xs font-semibold border-b-2 transition whitespace-nowrap shrink-0 ${
                activeTab === 'tokens'
                  ? 'border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400 font-bold'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Design Tokens</span>
            </button>

            <button
              onClick={() => setActiveTab('rules')}
              className={`flex items-center gap-1.5 py-2.5 sm:py-3 px-2 sm:px-0 text-xs font-semibold border-b-2 transition whitespace-nowrap shrink-0 ${
                activeTab === 'rules'
                  ? 'border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400 font-bold'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Cursor / Claude Rules</span>
            </button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {activeTab === 'markdown' && (
              <button
                onClick={handleDownloadMarkdown}
                className="glass-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-800 dark:text-zinc-200 text-xs font-medium transition focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .md</span>
              </button>
            )}

            {activeTab === 'rules' && (
              <button
                onClick={handleDownloadRules}
                className="glass-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-800 dark:text-zinc-200 text-xs font-medium transition focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .rules</span>
              </button>
            )}

            <button
              onClick={() => {
                if (activeTab === 'rules') handleCopyRules();
                else if (activeTab === 'markdown') handleCopyMarkdown();
                else handleCopyPrompt();
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-xs transition active:scale-95 focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              {(activeTab === 'rules' ? copiedRules : activeTab === 'markdown' ? copiedMarkdown : copiedPrompt) ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy {activeTab === 'rules' ? 'AI Rules' : activeTab === 'markdown' ? 'Spec' : 'Prompt'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-zinc-50/30 dark:bg-zinc-950/30">
          {activeTab === 'prompt' && (
            <div className="space-y-3">
              <div className="text-xs text-zinc-500 font-mono">
                Direct prompt for code generation tools:
              </div>
              <pre className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-black/5 dark:border-white/10 text-zinc-800 dark:text-zinc-200 font-mono text-xs leading-relaxed whitespace-pre-wrap select-all shadow-inner">
                {prompt.quickPrompt}
              </pre>
            </div>
          )}

          {activeTab === 'markdown' && (
            <div className="space-y-3">
              <div className="text-xs text-zinc-500 font-mono">
                {prompt.slug}.md
              </div>
              <pre className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-black/5 dark:border-white/10 text-zinc-800 dark:text-zinc-300 font-mono text-xs leading-relaxed whitespace-pre-wrap select-all shadow-inner">
                {prompt.markdownSpec}
              </pre>
            </div>
          )}

          {activeTab === 'tokens' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-3">
                  Color Tokens
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {prompt.colorPalette.map((tok, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCopyToken(tok.hex, tok.name)}
                      className="glass-btn p-3 rounded-xl cursor-pointer flex items-center gap-3 transition"
                    >
                      <div
                        style={{ backgroundColor: tok.hex }}
                        className="w-8 h-8 rounded-lg border border-black/10 dark:border-white/15 shrink-0 shadow-sm"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">{tok.name}</div>
                        <div className="text-[11px] font-mono text-violet-600 dark:text-violet-400">{tok.hex}</div>
                        <div className="text-[10px] text-zinc-500 truncate">{tok.usage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="glass-btn p-3.5 rounded-xl">
                  <div className="text-zinc-500 mb-1">Typography</div>
                  <div className="font-mono text-zinc-800 dark:text-zinc-200 font-semibold">{prompt.fontStack}</div>
                </div>
                <div className="glass-btn p-3.5 rounded-xl">
                  <div className="text-zinc-500 mb-1">Layout Style</div>
                  <div className="font-mono text-zinc-800 dark:text-zinc-200 font-semibold">{prompt.style} ({prompt.category})</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rules' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Architecture rule for .cursorrules / CLAUDE.md:</span>
                <span className="text-[11px] text-violet-600 dark:text-violet-400 font-semibold">Zero-slop system prompt</span>
              </div>
              <pre className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-black/5 dark:border-white/10 text-zinc-800 dark:text-zinc-300 font-mono text-xs leading-relaxed whitespace-pre-wrap select-all shadow-inner">
                {cursorRuleText}
              </pre>
            </div>
          )}
        </div>

        {/* Mobile Action Bar (Thumb Zone) */}
        <div className="p-3 border-t border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#0e0f15] flex items-center justify-end gap-2 shrink-0 sm:hidden">
          <button
            onClick={() => onToggleBookmark(prompt.id)}
            title={isBookmarked ? 'Remove from bookmarks' : 'Save to bookmarks'}
            aria-label={isBookmarked ? 'Remove from bookmarks' : 'Save to bookmarks'}
            className={`p-2 rounded-lg border transition shrink-0 ${
              isBookmarked
                ? 'bg-amber-500 text-zinc-950 border-amber-400'
                : 'glass-btn text-zinc-600 dark:text-zinc-300'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleShareLink}
            aria-label="Share direct link"
            title="Share direct link"
            className="glass-btn p-2 rounded-lg text-zinc-600 dark:text-zinc-300 shrink-0"
          >
            <Share2 className="w-4 h-4 text-violet-500 dark:text-violet-400" />
          </button>

          {activeTab === 'markdown' && (
            <button
              onClick={handleDownloadMarkdown}
              className="glass-btn flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-zinc-800 dark:text-zinc-200 text-xs font-medium transition focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .md</span>
            </button>
          )}

          {activeTab === 'rules' && (
            <button
              onClick={handleDownloadRules}
              className="glass-btn flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-zinc-800 dark:text-zinc-200 text-xs font-medium transition focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .rules</span>
            </button>
          )}

          <button
            onClick={() => {
              if (activeTab === 'rules') handleCopyRules();
              else if (activeTab === 'markdown') handleCopyMarkdown();
              else handleCopyPrompt();
            }}
            className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-xs transition active:scale-95 focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            {(activeTab === 'rules' ? copiedRules : activeTab === 'markdown' ? copiedMarkdown : copiedPrompt) ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy {activeTab === 'rules' ? 'AI Rules' : activeTab === 'markdown' ? 'Spec' : 'Prompt'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
