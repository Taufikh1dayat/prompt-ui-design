import React, { useState } from 'react';
import type { UIPrompt } from '../types';
import { MiniPreview } from './MiniPreviews';
import { Copy, Check, Eye } from 'lucide-react';

interface PromptCardProps {
  prompt: UIPrompt;
  onOpenDetail: (prompt: UIPrompt) => void;
  onTriggerToast: (message: string) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  onOpenDetail,
  onTriggerToast,
}) => {
  const [copied, setCopied] = useState(false);

  const handleQuickCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.quickPrompt);
    setCopied(true);
    onTriggerToast(`Prompt copied for "${prompt.title}"`);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleColorClick = (e: React.MouseEvent, hex: string, name: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hex);
    onTriggerToast(`${name} (${hex}) copied`);
  };

  return (
    <article
      tabIndex={0}
      role="button"
      onClick={() => onOpenDetail(prompt)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenDetail(prompt);
        }
      }}
      className="glass-card group relative flex flex-col rounded-xl overflow-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
      aria-label={`UI Design Spec: ${prompt.title}. Press Enter to view full specification.`}
    >
      {/* Component Preview Container */}
      <div className="relative aspect-[16/10] w-full bg-zinc-950 border-b border-black/5 dark:border-white/10 overflow-hidden">
        <div className="w-full h-full">
          <MiniPreview previewId={prompt.previewId} />
        </div>

        {/* Category Tag (Anti-Slop R-09: Functional Label, Zero Floating Slop) */}
        <div className="absolute top-2 left-2 z-10">
          <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-black/80 text-zinc-300 border border-white/10 shadow-xs">
            {prompt.category}
          </span>
        </div>

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
          <div className="flex items-center gap-1.5" title="Palette swatches">
            {prompt.colorPalette.slice(0, 4).map((color, idx) => (
              <button
                key={idx}
                onClick={(e) => handleColorClick(e, color.hex, color.name)}
                style={{ backgroundColor: color.hex }}
                className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/20 hover:scale-125 transition-transform shadow-xs"
                title={`${color.name} (${color.hex})`}
                aria-label={`Copy color ${color.name} ${color.hex}`}
              />
            ))}
          </div>

          <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            {prompt.style}
          </span>
        </div>
      </div>
    </article>
  );
};
