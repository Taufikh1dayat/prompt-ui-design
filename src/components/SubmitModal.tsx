import React from 'react';
import { X, GitPullRequest, Copy } from 'lucide-react';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerToast: (message: string) => void;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({
  isOpen,
  onClose,
  onTriggerToast,
}) => {
  if (!isOpen) return null;

  const sampleTemplate = `---
title: "Your Component Name"
category: "Dashboard" # or SaaS, Mobile, Auth, Settings
style: "Bento Grid" # or Minimalist Zinc, Modern FinTech
targetTool: "v0.dev / Claude"
tags: ["Tag1", "Tag2"]
---

# UI Specification: [Component Name]

## 1. Overview & Purpose
Brief description of the UI problem and solution.

## 2. Design Tokens
- Colors: Primary #hex, Background #hex
- Typography: Geist Sans, Geist Mono

## 3. Master Prompt for AI
> "Create a [component] using React, Tailwind CSS..."
`;

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(sampleTemplate);
    onTriggerToast('Markdown template copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 z-10">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <GitPullRequest className="w-5 h-5 text-violet-400" />
            <h3 className="text-lg font-bold text-white">Submit a UI Prompt Spec</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4 text-xs text-zinc-300">
          <p>
            This repository is 100% open-source and community driven. We prioritize <strong>production-ready, non-slop</strong> UI prompts that include design tokens, realistic layout hierarchy, and clear AI instructions.
          </p>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-mono text-zinc-400">Standard .md Spec Template:</span>
              <button
                onClick={handleCopyTemplate}
                className="flex items-center gap-1 text-[11px] text-violet-400 hover:text-violet-300"
              >
                <Copy className="w-3 h-3" />
                <span>Copy Template</span>
              </button>
            </div>
            <pre className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl font-mono text-[11px] leading-relaxed overflow-x-auto text-zinc-400">
              {sampleTemplate}
            </pre>
          </div>

          <div className="p-3 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center justify-between">
            <div>
              <div className="text-violet-300 font-semibold">Ready to contribute?</div>
              <div className="text-zinc-400 text-[11px]">Fork the repository and submit a Pull Request.</div>
            </div>
            <a
              href="https://github.com/Taufikh1dayat/prompt-ui-design"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs shadow-sm transition"
            >
              Open GitHub PR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
