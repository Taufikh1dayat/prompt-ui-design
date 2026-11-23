import React, { useState } from 'react';
import type { UIPrompt, PromptFormat } from '../types';
import { generateFormattedPrompt, PROMPT_FORMAT_OPTIONS } from '../utils/promptAdapter';
import { MiniPreview } from './MiniPreviews';
import { Copy, Check, Eye, Bookmark } from 'lucide-react';
import { copyText } from '../utils/clipboard';

interface PromptCardProps {
  prompt: UIPrompt;
  isBookmarked: boolean;
  onOpenDetail: (prompt: UIPrompt) => void;
  onToggleBookmark: (promptId: string) => void;
  onTriggerToast: (message: string) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  isBookmarked,
  onOpenDetail,
  onToggleBookmark,
  onTriggerToast,
}) => {
  const [copied, setCopied] = useState(false);

  const handleQuickCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    let format: PromptFormat = 'agnostic';
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('promptui-prompt-format');
        if (saved === 'agnostic' || saved === 'react-tailwind' || saved === 'html-css' || saved === 'design-brief') {
          format = saved;
        }
      } catch {
        format = 'agnostic';
      }
    }

    const formattedText = generateFormattedPrompt(prompt, format);
    const copiedOk = await copyText(formattedText);
    const formatLabel = PROMPT_FORMAT_OPTIONS.find((f) => f.id === format)?.badge || 'Agnostic';
    if (copiedOk) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
      onTriggerToast(`Prompt [${formatLabel}] copied for "${prompt.title}"`);
    } else {
      onTriggerToast('Clipboard unavailable. Select the prompt text and copy manually.');
    }
  };

  const handleColorClick = async (e: React.MouseEvent, hex: string, name: string) => {
    e.stopPropagation();
    const copiedOk = await copyText(hex);
    onTriggerToast(copiedOk ? `${name} (${hex}) copied` : 'Clipboard unavailable.');
  };

  // Distinct outer framing tailored to each aesthetic movement
  const cardFrameClass = React.useMemo(() => {
    switch (prompt.style) {
      case 'Neo-Brutalism':
        return 'rounded-none border-2 border-black dark:border-zinc-200 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] bg-white dark:bg-[#0c0d12]';
      case 'Swiss Minimal':
        return 'rounded-none border-2 border-black/80 dark:border-white/40 shadow-none bg-white dark:bg-[#0c0d12]';
      case 'Liquid Glassmorphism':
        return 'rounded-2xl border border-white/25 shadow-xl bg-white/40 dark:bg-[#0d0e15]/60 backdrop-blur-2xl';
      default:
        return 'rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0d0e15] shadow-xs';
    }
  }, [prompt.style]);

  const previewBorderClass = React.useMemo(() => {
    switch (prompt.style) {
      case 'Neo-Brutalism':
        return 'border-b-2 border-black dark:border-zinc-200';
      case 'Swiss Minimal':
        return 'border-b-2 border-black/80 dark:border-white/40';
      default:
        return 'border-b border-black/5 dark:border-white/10';
    }
  }, [prompt.style]);

  return (
    <article
      onClick={() => onOpenDetail(prompt)}
      className={`group relative flex flex-col overflow-hidden cursor-pointer transition-all duration-150 ${cardFrameClass}`}
      aria-label={`UI Design Spec: ${prompt.title}`}
    >
      {/* Component Preview Container */}
      <div className={`relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden ${previewBorderClass}`}>
        <div className="w-full h-full">
          <MiniPreview previewId={prompt.previewId} />
        </div>

        {/* Category Tag (Anti-Slop R-09: Functional Label, Zero Floating Slop) */}
        <div className="absolute top-2 left-2 z-10">
          <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-black/80 text-zinc-300 border border-white/10 shadow-xs">
            {prompt.category}
          </span>
        </div>

        {/* Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(prompt.id);
          }}
          aria-label={isBookmarked ? `Remove ${prompt.title} from bookmarks` : `Save ${prompt.title} to bookmarks`}
          title={isBookmarked ? 'Remove from bookmarks' : 'Save to bookmarks'}
          className={`absolute top-2 right-2 z-30 p-1.5 rounded-lg border transition-all duration-150 backdrop-blur-md focus-visible:ring-2 focus-visible:ring-white active:scale-90 ${
            isBookmarked
              ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-md'
              : 'bg-black/60 text-zinc-400 hover:text-white border-white/10 hover:bg-black/80'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-20">
          <button
            onClick={handleQuickCopy}
            className="glass-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-semibold shadow-md focus-visible:ring-2 focus-visible:ring-white"
            aria-label={`Copy quick prompt for ${prompt.title}`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-200" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(prompt);
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold shadow-md transition active:scale-95 focus-visible:ring-2 focus-visible:ring-zinc-950"
            aria-label={`Inspect full specification for ${prompt.title}`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Spec</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3.5 flex-1 flex flex-col justify-between gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
            {prompt.title}
          </h3>
          <span className="text-[10px] font-mono text-zinc-500 shrink-0">
            {prompt.targetTool.split('/')[0]}
          </span>
        </div>

        {/* Footer */}
        <div className="pt-2.5 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2" title="Palette swatches">
            {prompt.colorPalette.slice(0, 4).map((color, idx) => (
              <button
                key={idx}
                onClick={(e) => handleColorClick(e, color.hex, color.name)}
                style={{ backgroundColor: color.hex }}
                className="relative w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/20 hover:scale-125 transition-transform shadow-xs after:content-[''] after:absolute after:-inset-2"
                title={`${color.name} (${color.hex})`}
                aria-label={`Copy color ${color.name} ${color.hex}`}
              />
            ))}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(prompt);
            }}
            className="flex items-center gap-1 rounded text-[11px] font-medium text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 focus-visible:ring-2 focus-visible:ring-zinc-400"
            aria-label={`Inspect full specification for ${prompt.title}`}
          >
            <Eye className="w-3 h-3" />
            <span>{prompt.style}</span>
          </button>
        </div>
      </div>
    </article>
  );
};
