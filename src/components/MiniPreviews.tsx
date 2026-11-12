import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Search, 
  Command, 
  Smartphone, 
  CreditCard, 
  ShoppingCart,
  Zap,
  ArrowUpRight,
  Sliders,
  Layers,
  Play,
  Pause,
  UploadCloud,
  FileText,
  Bell,
  CheckCircle2
} from 'lucide-react';

interface MiniPreviewProps {
  previewId: string;
}

export const MiniPreview: React.FC<MiniPreviewProps> = ({ previewId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);

  switch (previewId) {
    /* 1. BUTTON SHOWCASE MATRIX (6 Unique Button Archetypes) */
    case 'button-showcase-matrix':
      return (
        <div className="w-full h-full p-2.5 bg-zinc-950 flex flex-col justify-between select-none font-sans">
          {/* Header */}
          <div className="flex items-center justify-between pb-1 border-b border-zinc-800 text-[9px] font-mono text-zinc-400">
            <span>BUTTON ARCHETYPES</span>
            <span className="text-violet-400">6 Interactive Styles</span>
          </div>

          {/* 6-Button Interactive Grid */}
          <div className="grid grid-cols-2 gap-2 my-auto">
            {/* A. Neo-Brutalism Button */}
            <button
              onClick={(e) => e.stopPropagation()}
              className="py-1 px-2 bg-[#FFE600] text-black font-black text-[9px] uppercase border-2 border-black shadow-[2.5px_2.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1"
            >
              <Zap className="w-2.5 h-2.5 fill-current" />
              Neo-Brutal
            </button>

            {/* B. Liquid Frosted Glass */}
            <button
              onClick={(e) => e.stopPropagation()}
              className="py-1 px-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/25 text-white text-[9px] font-semibold hover:bg-white/20 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1"
            >
              <Layers className="w-2.5 h-2.5 text-cyan-300" />
              Frosted Glass
            </button>

            {/* C. Tactile Skeuomorphic Button */}
            <button
              onClick={(e) => e.stopPropagation()}
              className="py-1 px-2 rounded-lg bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border-t border-zinc-500/80 text-zinc-200 text-[9px] font-bold shadow-[0_3px_6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.25)] active:translate-y-0.5 active:shadow-[0_1px_2px_rgba(0,0,0,0.6)] transition-all flex items-center justify-center"
            >
              Tactile 3D
            </button>

            {/* D. Border-Beam Shimmer Button */}
            <button
              onClick={(e) => e.stopPropagation()}
              className="relative py-1 px-2 rounded-lg bg-zinc-900 text-white text-[9px] font-semibold border border-violet-500/60 shadow-[0_0_12px_rgba(139,92,246,0.35)] hover:border-violet-400 active:scale-95 transition-all flex items-center justify-center gap-1 overflow-hidden group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
              <span>Glow Shimmer</span>
            </button>

            {/* E. Cyberpunk Cut-Corner */}
            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
              }}
              className="py-1 px-2 bg-zinc-900 border-l-2 border-cyan-400 text-cyan-400 text-[8.5px] font-mono font-bold tracking-wider hover:bg-cyan-950/60 transition-all flex items-center justify-center"
            >
              [CYBER_EXEC]
            </button>

            {/* F. Minimalist Bento Pill */}
            <button
              onClick={(e) => e.stopPropagation()}
              className="py-1 px-2 rounded-full bg-white text-zinc-950 text-[9px] font-bold hover:bg-zinc-200 active:scale-95 transition-all shadow-xs flex items-center justify-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>State Morph</span>
            </button>
          </div>

          <div className="text-[7.5px] font-mono text-zinc-500 text-center">
            Click each button to test tactile physics
          </div>
        </div>
      );

    /* 2. AGILE KANBAN SPRINT BOARD */
    case 'kanban-sprint-board':
      return (
        <div className="w-full h-full p-2.5 bg-zinc-950 flex flex-col justify-between select-none font-sans">
          {/* Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800 text-[9px]">
            <span className="font-bold text-white flex items-center gap-1">
              <span className="w-2 h-2 rounded bg-violet-500" /> Sprint 42 Board
            </span>
            <span className="text-[8px] font-mono bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">
              3 Columns
            </span>
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-3 gap-1.5 my-auto">
            {/* Col 1: Todo */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-lg p-1.5">
              <div className="flex justify-between text-[8px] font-mono text-zinc-400 mb-1">
                <span>TO DO</span>
                <span>2</span>
              </div>
              <div className="bg-zinc-800/80 p-1.5 rounded border border-zinc-700/60 shadow-xs mb-1">
                <div className="text-[8px] font-semibold text-zinc-200 truncate">Auth Refactor</div>
                <div className="flex justify-between items-center mt-1 text-[6.5px]">
                  <span className="bg-amber-500/20 text-amber-400 px-1 py-0.2 rounded font-mono">HIGH</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-zinc-700 text-[6px] flex items-center justify-center text-white">AK</div>
                </div>
              </div>
            </div>

            {/* Col 2: In Progress */}
            <div className="bg-zinc-900/60 border border-violet-500/30 rounded-lg p-1.5">
              <div className="flex justify-between text-[8px] font-mono text-violet-400 mb-1">
                <span>IN PROGRESS</span>
                <span>1</span>
              </div>
              <div className="bg-zinc-800/90 p-1.5 rounded border border-violet-500/40 shadow-xs">
                <div className="text-[8px] font-semibold text-white truncate">Stripe Webhooks</div>
                <div className="flex justify-between items-center mt-1 text-[6.5px]">
                  <span className="bg-violet-500/20 text-violet-300 px-1 py-0.2 rounded font-mono">DEV</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-violet-600 text-[6px] flex items-center justify-center text-white">SA</div>
                </div>
              </div>
            </div>

            {/* Col 3: Done */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-lg p-1.5">
              <div className="flex justify-between text-[8px] font-mono text-emerald-400 mb-1">
                <span>DONE</span>
                <span>4</span>
              </div>
              <div className="bg-zinc-800/80 p-1.5 rounded border border-zinc-700/60 opacity-80">
                <div className="text-[8px] font-semibold text-zinc-300 line-through truncate">Dark Mode UI</div>
                <div className="text-[6.5px] text-emerald-400 mt-1 flex items-center gap-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Deployed
                </div>
              </div>
            </div>
          </div>

          <div className="text-[7.5px] font-mono text-zinc-500 text-center">
            Drag-and-drop board with priority chips & avatars
          </div>
        </div>
      );

    /* 3. FILE UPLOAD DROPZONE */
    case 'file-upload-dropzone':
      return (
        <div className="w-full h-full p-2.5 bg-zinc-950 flex flex-col justify-between select-none font-sans">
          {/* Dashed Dropzone */}
          <div className="border border-dashed border-zinc-700 hover:border-violet-500 rounded-xl p-2.5 text-center bg-zinc-900/40 flex flex-col items-center justify-center gap-1 transition-colors">
            <div className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 flex items-center justify-center">
              <UploadCloud className="w-3.5 h-3.5" />
            </div>
            <div className="text-[9px] font-semibold text-white">Drag & drop files here</div>
            <div className="text-[7.5px] text-zinc-500">PNG, SVG, PDF up to 25MB</div>
          </div>

          {/* Upload Progress Item */}
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <FileText className="w-3 h-3" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between text-[8px] mb-1">
                <span className="text-zinc-200 font-medium truncate">design_spec_v2.pdf</span>
                <span className="font-mono text-zinc-400">82%</span>
              </div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 w-[82%]" />
              </div>
            </div>
          </div>
        </div>
      );

    /* 4. NOTIFICATION CENTER & ACTIVITY FLYOUT (LINEAR / RAYCAST INBOX PATTERN) */
    case 'notification-center':
      return (
        <div className="w-full h-full p-2 bg-[#090A0E] text-zinc-200 flex flex-col justify-between select-none font-sans overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-1 border-b border-white/10 text-[7.5px]">
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">
                <Bell className="w-2 h-2" />
              </span>
              <span className="font-bold text-white tracking-tight">Inbox</span>
              <span className="px-1.5 py-0.2 rounded-full bg-violet-500/25 text-violet-300 font-mono text-[6px] border border-violet-500/40 font-semibold">
                3 new
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 text-[6.5px] text-zinc-400">
              <span className="px-1 py-0.2 rounded bg-white/10 text-white font-semibold">All</span>
              <span className="hover:text-zinc-200">Mentions</span>
              <span className="hover:text-zinc-200">System</span>
            </div>
          </div>

          {/* Activity Item List */}
          <div className="space-y-1 my-auto">
            {/* Item 1: PR Merge (Alex Rivera) */}
            <div className="p-1 rounded-lg bg-zinc-900/90 border border-white/10 hover:border-violet-500/50 transition-all flex items-start gap-1.5 shadow-xs">
              <div className="relative shrink-0 mt-0.5">
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-[6px] font-black text-white shadow-xs">
                  AR
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-[#090A0E] flex items-center justify-center text-[4.5px] text-black font-black">
                  ✓
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <div className="text-[7px] font-bold text-white truncate">
                    Alex Rivera <span className="text-zinc-400 font-normal">merged PR #142</span>
                  </div>
                  <span className="text-[6px] font-mono text-zinc-500 shrink-0">2m</span>
                </div>
                <div className="text-[6px] text-zinc-400 font-mono truncate">
                  feat(auth): token rotation & session guard
                </div>
              </div>

              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-1 shadow-[0_0_6px_rgba(167,139,250,0.8)]" />
            </div>

            {/* Item 2: Vercel Cloud Deployment */}
            <div className="p-1 rounded-lg bg-zinc-900/50 border border-white/5 flex items-start gap-1.5">
              <div className="w-4 h-4 rounded bg-black border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-2 h-2 fill-white" viewBox="0 0 24 24">
                  <path d="M12 1L24 22H0L12 1Z" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <div className="text-[7px] font-bold text-zinc-200 truncate flex items-center gap-1">
                    <span>Edge Deploy: Production</span>
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <span className="text-[6px] font-mono text-zinc-500 shrink-0">14m</span>
                </div>
                <div className="text-[6px] text-zinc-400 font-mono truncate">
                  api.promptui.dev • 38ms latency
                </div>
              </div>

              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0 mt-1" />
            </div>

            {/* Item 3: Linear Issue Mention */}
            <div className="p-1 rounded-lg bg-zinc-900/50 border border-white/5 flex items-start gap-1.5">
              <div className="w-4 h-4 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[6px] font-bold">
                P1
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <div className="text-[7px] font-bold text-zinc-300 truncate">
                    Assigned to <span className="text-amber-400 font-semibold">ENG-2041</span>
                  </div>
                  <span className="text-[6px] font-mono text-zinc-500 shrink-0">1h</span>
                </div>
                <div className="text-[6px] text-zinc-400 font-mono truncate">
                  Audit WCAG AA color contrast on light mode
                </div>
              </div>

              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0 mt-1" />
            </div>
          </div>

          {/* Footer Bar: Linear Triage Hotkeys */}
          <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[6px] font-mono text-zinc-500">
            <div className="flex items-center gap-1">
              <span><kbd className="px-1 py-0.2 rounded bg-white/10 text-zinc-300">J</kbd><kbd className="px-1 py-0.2 rounded bg-white/10 text-zinc-300 ml-0.5">K</kbd> Nav</span>
              <span><kbd className="px-1 py-0.2 rounded bg-white/10 text-zinc-300">E</kbd> Done</span>
            </div>
            <span className="text-violet-400 font-bold hover:underline cursor-pointer flex items-center gap-0.5">
              Mark all read
            </span>
          </div>
        </div>
      );

    /* 5. AUDIO WAVEFORM PLAYER */
    case 'audio-waveform-player':
      return (
        <div className="w-full h-full p-2.5 bg-zinc-950 flex flex-col justify-between select-none font-sans">
          <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col gap-2 shadow-lg">
            {/* Track Info */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-rose-500 flex items-center justify-center text-white text-[9px] font-black shrink-0 shadow-sm">
                UI
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] font-bold text-white truncate">Synthesize Horizon</div>
                <div className="text-[7.5px] text-zinc-400 truncate">Ambient Soundscape • Episode 04</div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
                className="w-6 h-6 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md shrink-0"
              >
                {isPlaying ? <Pause className="w-2.5 h-2.5 fill-current" /> : <Play className="w-2.5 h-2.5 fill-current ml-0.5" />}
              </button>
            </div>

            {/* Simulated Animated Waveform Bars */}
            <div className="h-5 flex items-end gap-0.5 px-1 bg-zinc-950/80 rounded-md py-0.5 overflow-hidden">
              {[40, 65, 80, 50, 95, 75, 45, 85, 100, 60, 40, 70, 90, 80, 55, 35, 75, 95, 65, 50, 30, 60, 85, 70, 40].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${isPlaying ? Math.max(20, (h + (i % 3) * 15) % 100) : h * 0.7}%` }}
                  className={`flex-1 rounded-full transition-all duration-150 ${
                    i < 13 ? 'bg-violet-400' : 'bg-zinc-700'
                  }`}
                />
              ))}
            </div>

            {/* Scrubber Timer */}
            <div className="flex justify-between text-[7px] font-mono text-zinc-400">
              <span>01:42</span>
              <span>03:28</span>
            </div>
          </div>
        </div>
      );

    /* 6. NEO-BRUTALISM */
    case 'neo-brutalism':
      return (
        <div className="w-full h-full p-3 bg-[#FFE600] flex flex-col justify-between font-sans select-none text-black">
          <div className="flex items-center justify-between border-b-2 border-black pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-black" />
              <span className="font-extrabold text-[11px] tracking-wider uppercase font-mono">
                BRUTAL//UI
              </span>
            </div>
            <span className="text-[9px] font-black uppercase bg-[#FF2A85] text-white px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000]">
              RAW 2026
            </span>
          </div>

          <div className="my-1.5 p-2.5 bg-white border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-between gap-2">
            <div>
              <div className="text-[12px] font-black leading-tight uppercase">
                Zero AI Slop.<br />Pure Structure.
              </div>
              <div className="text-[8px] font-mono text-zinc-700 mt-1">
                4px solid borders • 0px blur
              </div>
            </div>
            <div className="w-8 h-8 rounded-none bg-[#00F0FF] border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center font-black text-sm">
              !
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="py-1 px-2 bg-black text-white font-black text-[9px] uppercase border-2 border-black shadow-[2px_2px_0px_#FFF] flex items-center justify-center gap-1">
              <Zap className="w-2.5 h-2.5 fill-current" />
              Launch Spec
            </button>
            <button className="py-1 px-2 bg-[#FF2A85] text-white font-black text-[9px] uppercase border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center">
              Copy Tokens
            </button>
          </div>
        </div>
      );

    /* 7. CINEMATIC HERO */
    case 'cinematic-hero':
      return (
        <div className="relative w-full h-full bg-gradient-to-b from-[#2a080c] via-[#630b15] to-[#09090b] flex flex-col justify-between p-3 select-none text-white overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-t from-[#fb7185] via-[#f43f5e] to-[#fef08a] opacity-80 blur-[2px] pointer-events-none" />

          <svg className="absolute bottom-0 left-0 w-full h-16 pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,40 L0,25 Q20,10 40,22 T75,18 T100,28 L100,40 Z" fill="#09090b" />
            <path d="M45,22 L48,14 L52,14 L55,22 Z" fill="#09090b" />
            <circle cx="50" cy="12" r="2.5" fill="#09090b" />
          </svg>

          <div className="relative z-10 flex items-center justify-between text-[8px] text-zinc-300 font-mono">
            <span className="font-bold text-white tracking-wider">/cinematic</span>
            <div className="flex items-center gap-2">
              <span>Rules</span>
              <span>Agents</span>
              <span className="bg-white/10 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/20">Install</span>
            </div>
          </div>

          <div className="relative z-10 text-center my-auto">
            <h4 className="text-xs sm:text-sm font-extrabold tracking-tight text-white drop-shadow-md">
              Rules for AI coding agents
            </h4>
            <p className="text-[7.5px] text-zinc-300 max-w-[200px] mx-auto mt-0.5 line-clamp-1">
              Atmospheric landscape with editorial typographic clarity
            </p>

            <div className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[7px] font-mono text-zinc-200">
              <span className="text-rose-400">$</span>
              <span>npx antislop-ai</span>
            </div>
          </div>

          <div className="relative z-10 text-[7px] font-mono text-zinc-500 text-center">
            Illustrated Full-Bleed Atmosphere
          </div>
        </div>
      );

    /* 8. LIQUID GLASSMORPHISM */
    case 'liquid-glassmorphism':
      return (
        <div className="relative w-full h-full bg-[#0a051b] flex flex-col justify-center items-center p-3 select-none overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-indigo-600/70 blur-xl pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-fuchsia-600/70 blur-xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-cyan-400/50 blur-lg pointer-events-none" />

          <div className="relative z-10 w-full max-w-[240px] p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/25 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Layers className="w-2.5 h-2.5 text-cyan-300" />
                </div>
                <span className="text-[10px] font-semibold tracking-tight">Liquid Glass</span>
              </div>
              <span className="text-[8px] font-mono bg-white/15 px-1.5 py-0.5 rounded-full border border-white/20">
                Frosted
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[8px] text-zinc-300">Acrylic Depth</div>
                  <div className="text-xs font-bold font-mono">backdrop-blur-2xl</div>
                </div>
                <Sliders className="w-3 h-3 text-cyan-300" />
              </div>
            </div>

            <div className="mt-2 text-[7.5px] text-zinc-300 flex justify-between items-center">
              <span>Dynamic specular highlight</span>
              <span className="font-mono text-cyan-300">1px border</span>
            </div>
          </div>
        </div>
      );

    /* 9. SWISS MINIMAL */
    case 'swiss-minimal':
      return (
        <div className="w-full h-full p-3 bg-[#f5f5f5] text-black flex flex-col justify-between font-sans select-none border-b border-zinc-300">
          <div className="flex justify-between items-baseline border-b border-black pb-1">
            <span className="text-[9px] font-mono font-bold tracking-widest uppercase">
              ARCH_01 / HELVETICA
            </span>
            <span className="text-[8px] font-mono">ZÜRICH • 1957</span>
          </div>

          <div className="my-auto grid grid-cols-3 gap-2 items-end">
            <div className="col-span-1">
              <span className="text-3xl font-black tracking-tighter leading-none block">
                08
              </span>
              <span className="text-[8px] font-mono text-zinc-600 block mt-0.5">
                INDEX_RULER
              </span>
            </div>
            <div className="col-span-2 border-l border-black pl-2">
              <div className="text-[10px] font-extrabold uppercase tracking-tight leading-snug">
                Form Follows Grid. Content Dictates Form.
              </div>
              <div className="text-[7.5px] text-zinc-600 mt-1 leading-relaxed">
                International Typographic Style. Strict mathematical baseline, no gradients.
              </div>
            </div>
          </div>

          <div className="border-t border-black pt-1 flex justify-between items-center text-[8px] font-mono">
            <span>GRID: 12-COL ASYMMETRIC</span>
            <span className="flex items-center gap-0.5 font-bold">
              VIEW SPEC <ArrowUpRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>
      );

    /* 10. SAAS BENTO GRID */
    case 'bento-analytics':
      return (
        <div className="w-full h-full p-3 bg-zinc-950 flex flex-col justify-between font-sans select-none overflow-hidden">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-medium text-zinc-300">Live ARR Metrics</span>
            </div>
            <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">30D</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-1">
            <div className="col-span-2 bg-zinc-900/90 border border-zinc-800 rounded-lg p-2 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[9px] text-zinc-400">Total Revenue</div>
                  <div className="text-sm font-semibold text-white font-mono tracking-tight">$142,850</div>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded flex items-center gap-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +14.2%
                </span>
              </div>
              <div className="h-6 w-full mt-2">
                <svg viewBox="0 0 100 24" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="grad-bento-mini" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0,20 Q 20,18 35,10 T 70,12 T 100,4 L 100,24 L 0,24 Z" fill="url(#grad-bento-mini)" />
                  <path d="M 0,20 Q 20,18 35,10 T 70,12 T 100,4" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="col-span-1 bg-zinc-900/90 border border-zinc-800 rounded-lg p-2 flex flex-col items-center justify-center text-center">
              <div className="text-[9px] text-zinc-400 mb-1">Churn</div>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg className="w-8 h-8 -rotate-90">
                  <circle cx="16" cy="16" r="12" stroke="#27272a" strokeWidth="2.5" fill="none" />
                  <circle cx="16" cy="16" r="12" stroke="#10b981" strokeWidth="2.5" fill="none" strokeDasharray="75" strokeDashoffset="55" strokeLinecap="round" />
                </svg>
                <span className="absolute text-[8px] font-mono text-zinc-200">1.4%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded p-1.5 flex items-center justify-between">
              <span className="text-[9px] text-zinc-400 flex items-center gap-1">
                <Users className="w-2.5 h-2.5 text-zinc-500" /> Active
              </span>
              <span className="text-[9px] font-mono text-white">8,421</span>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded p-1.5 flex items-center justify-between">
              <span className="text-[9px] text-zinc-400 flex items-center gap-1">
                <DollarSign className="w-2.5 h-2.5 text-zinc-500" /> ARPU
              </span>
              <span className="text-[9px] font-mono text-white">$42.10</span>
            </div>
          </div>
        </div>
      );

    /* 11. COMMAND PALETTE */
    case 'command-palette':
      return (
        <div className="w-full h-full p-4 bg-zinc-950 flex flex-col justify-center items-center font-sans select-none">
          <div className="w-full max-w-[260px] bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden p-2">
            <div className="flex items-center gap-2 px-2 py-1.5 bg-zinc-950/80 rounded-md border border-zinc-800/80 mb-2">
              <Search className="w-3 h-3 text-zinc-500" />
              <span className="text-[10px] text-zinc-400">Type a command...</span>
              <span className="ml-auto text-[8px] bg-zinc-800 text-zinc-400 px-1 py-0.5 rounded font-mono">ESC</span>
            </div>
            <div className="space-y-1">
              <div className="text-[8px] font-mono text-zinc-500 px-1 pt-0.5">SUGGESTIONS</div>
              <div className="flex items-center justify-between px-2 py-1 rounded bg-zinc-800 text-white text-[10px]">
                <div className="flex items-center gap-1.5">
                  <Command className="w-2.5 h-2.5 text-violet-400" />
                  <span>Create Project</span>
                </div>
                <span className="text-[8px] font-mono text-zinc-400 bg-zinc-900 px-1 py-0.2 rounded">⌘N</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 rounded text-zinc-400 text-[10px] hover:bg-zinc-800/50">
                <div className="flex items-center gap-1.5">
                  <Users className="w-2.5 h-2.5 text-zinc-500" />
                  <span>Invite Teammate</span>
                </div>
                <span className="text-[8px] font-mono text-zinc-500">⌘I</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* 12. MOBILE FINTECH */
    case 'fintech-cashflow-mobile':
      return (
        <div className="w-full h-full p-2 bg-zinc-950 flex justify-center items-center select-none font-sans">
          <div className="w-[180px] bg-black border border-zinc-800 rounded-2xl p-2.5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <div className="w-4 h-4 rounded-full bg-zinc-800" />
                <span className="text-[7px] font-mono text-zinc-500">9:41</span>
                <Smartphone className="w-2.5 h-2.5 text-zinc-600" />
              </div>
              <div className="text-[8px] text-zinc-400">Total Balance</div>
              <div className="text-sm font-bold text-white font-mono">$48,250.80</div>
            </div>

            <div className="bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/60 rounded-xl p-2 my-1.5 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <CreditCard className="w-3 h-3 text-zinc-300" />
                <span className="text-[8px] font-bold text-zinc-200 tracking-wider">VISA</span>
              </div>
              <div className="text-[9px] font-mono text-zinc-300">•••• 8842</div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[8px]">
                <span className="text-zinc-300">Apple Store</span>
                <span className="font-mono text-zinc-300">-$1,299</span>
              </div>
              <div className="flex justify-between text-[8px]">
                <span className="text-zinc-300">Stripe Payout</span>
                <span className="font-mono text-emerald-400">+$4,800</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* 13. E-COMMERCE CART DRAWER */
    case 'checkout-slide-drawer':
      return (
        <div className="w-full h-full p-3 bg-zinc-950 flex flex-col justify-between select-none font-sans">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
            <span className="text-[10px] font-semibold text-white flex items-center gap-1">
              <ShoppingCart className="w-2.5 h-2.5 text-zinc-400" /> Your Cart (2)
            </span>
            <span className="text-[8px] text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded font-mono">
              Free Ship
            </span>
          </div>

          <div className="flex items-center gap-2 py-1.5 bg-zinc-900/60 border border-zinc-800/80 rounded p-1.5 my-auto">
            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-[8px] text-zinc-500">
              IMG
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] text-zinc-200 font-medium truncate">Mechanical Keyboard</div>
              <div className="text-[8px] font-mono text-zinc-400">$120.00</div>
            </div>
            <div className="text-[8px] font-mono bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded">
              Qty: 1
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[9px] font-mono text-zinc-400">
              <span>Total</span>
              <span className="text-white font-bold">$165.00</span>
            </div>
            <div className="w-full py-1 bg-white text-black font-semibold text-center rounded text-[9px]">
              Checkout Now
            </div>
          </div>
        </div>
      );

    /* 14. MODERN CREATIVE DIGITAL AGENCY LANDING (TURNOVER) */
    case 'creative-agency-landing':
      return (
        <div className="relative w-full h-full bg-[#FAF8F5] text-zinc-900 flex flex-col justify-between p-2 select-none overflow-hidden font-sans">
          {/* Ambient Warm Radial Center Glow */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 rounded-full bg-orange-500/12 blur-2xl pointer-events-none" />

          {/* Top Mini Nav */}
          <div className="relative z-10 flex items-center justify-between pb-1 border-b border-black/5 text-[7.5px]">
            <div className="flex items-center gap-0.5 font-black text-zinc-950 tracking-tight">
              <span>Turn</span>
              <span className="text-orange-500 font-bold">↗</span>
              <span>ver</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[6.5px] text-zinc-400">
              <span className="text-zinc-900 font-bold border-b border-orange-500 pb-0.5">Home</span>
              <span>Services</span>
              <span>About</span>
              <span>Work</span>
            </div>
            <span className="bg-orange-500 text-white font-bold text-[6.5px] px-2 py-0.5 rounded-full shadow-xs">
              Explore Work
            </span>
          </div>

          {/* Hero Content Split */}
          <div className="relative z-10 grid grid-cols-12 gap-1 my-auto items-center">
            {/* Left Column: Copy & Stats */}
            <div className="col-span-7 flex flex-col gap-0.5 pr-1">
              <div className="inline-flex items-center gap-1 text-[6.5px] font-bold text-orange-600">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Creative Digital Agency</span>
              </div>

              <h4 className="text-[11px] sm:text-[12px] font-black leading-[1.15] tracking-tight text-zinc-950">
                We Build Brands <br />
                <span className="text-orange-500">That Stand Out</span>
              </h4>

              {/* CTAs */}
              <div className="flex items-center gap-1.5 mt-1">
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="px-2.5 py-0.5 bg-orange-500 text-white text-[7px] font-bold rounded-full shadow-xs hover:bg-orange-600 transition flex items-center"
                >
                  <span>Start Project</span>
                </button>
                <div className="flex items-center gap-0.5 text-[6.5px] text-zinc-600 font-semibold">
                  <div className="w-3.5 h-3.5 rounded-full bg-white shadow-xs border border-black/5 flex items-center justify-center">
                    <Play className="w-1.5 h-1.5 text-orange-500 fill-current ml-0.5" />
                  </div>
                  <span>Watch Story</span>
                </div>
              </div>

              {/* Mini Stats Row */}
              <div className="grid grid-cols-4 gap-0.5 pt-1 mt-1 border-t border-black/5 text-center">
                <div>
                  <div className="font-black text-[7.5px] text-zinc-950">320+</div>
                  <div className="text-[5px] text-zinc-400">Clients</div>
                </div>
                <div>
                  <div className="font-black text-[7.5px] text-zinc-950">5+</div>
                  <div className="text-[5px] text-zinc-400">Years</div>
                </div>
                <div>
                  <div className="font-black text-[7.5px] text-zinc-950">150+</div>
                  <div className="text-[5px] text-zinc-400">Projects</div>
                </div>
                <div>
                  <div className="font-black text-[7.5px] text-zinc-950">98%</div>
                  <div className="text-[5px] text-zinc-400">Satisfied</div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Visual & Floating Glass Cards */}
            <div className="col-span-5 relative h-26 flex items-center justify-center">
              {/* 3D Mannequin Silhouette with Neon Visor */}
              <div className="relative w-18 h-22 flex items-center justify-center">
                {/* Acoustic Head Fins */}
                <div className="absolute right-1 top-2 flex flex-col gap-0.5 opacity-70">
                  <div className="w-2 h-0.5 bg-zinc-400 rounded-full" />
                  <div className="w-3 h-0.5 bg-zinc-400 rounded-full" />
                  <div className="w-4 h-0.5 bg-zinc-500 rounded-full" />
                  <div className="w-3.5 h-0.5 bg-zinc-500 rounded-full" />
                  <div className="w-2 h-0.5 bg-zinc-400 rounded-full" />
                </div>

                {/* Bust Silhouette */}
                <svg className="w-14 h-20 drop-shadow-md" viewBox="0 0 60 80" fill="none">
                  {/* Shoulders & Torso */}
                  <path d="M10 75 Q15 50 25 45 L35 45 Q45 50 50 75 Z" fill="#1e293b" />
                  {/* Neck */}
                  <path d="M26 35 L26 48 L34 48 L34 35 Z" fill="#334155" />
                  {/* Head Shape */}
                  <ellipse cx="30" cy="25" rx="13" ry="17" fill="#0f172a" />
                  {/* Glowing Orange Cyber Visor */}
                  <rect x="14" y="20" width="30" height="9" rx="3.5" fill="#ff5500" filter="drop-shadow(0 0 5px #ff5500)" />
                  <text x="29" y="26.5" fontSize="3.5" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle" letterSpacing="0.4">
                    TURNOVER
                  </text>
                </svg>

                {/* Swirling 3D Orange Ribbon */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 70 80" fill="none">
                  <path
                    d="M 5 45 C 10 15, 55 25, 60 55 C 65 72, 20 78, 8 68"
                    stroke="#ff5500"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    className="opacity-95 drop-shadow-[0_2px_6px_rgba(255,85,0,0.6)]"
                  />
                  <path
                    d="M 8 46 C 13 18, 52 28, 57 55"
                    stroke="#ffffff"
                    strokeWidth="0.6"
                    strokeDasharray="1.5 1.5"
                    className="opacity-75"
                  />
                </svg>
              </div>

              {/* Floating Frosted Glass Cards */}
              <div className="absolute -top-0.5 -right-1 px-1.5 py-0.5 rounded-md bg-white/85 backdrop-blur-md border border-white shadow-xs flex items-center gap-1 text-[5.5px] font-bold text-zinc-800">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                <span>Brand Strategy</span>
              </div>

              <div className="absolute top-8 -right-1 px-1.5 py-0.5 rounded-md bg-white/85 backdrop-blur-md border border-white shadow-xs flex items-center gap-1 text-[5.5px] font-bold text-zinc-800">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                <span>Creative Design</span>
              </div>

              <div className="absolute bottom-1 -left-2 px-1.5 py-0.5 rounded-md bg-white/85 backdrop-blur-md border border-white shadow-xs flex items-center gap-1 text-[5.5px] font-bold text-zinc-800">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                <span>Digital Growth</span>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="relative z-10 flex items-center justify-between text-[6px] font-mono text-zinc-400 pt-0.5 border-t border-black/5">
            <span>Modern 3D Studio Canvas</span>
            <span>Case Studies</span>
          </div>
        </div>
      );

    /* 15. B2B SAAS PRICING & FEATURE MATRIX */
    case 'saas-pricing-matrix':
      return (
        <div className="w-full h-full p-2 bg-[#090A0F] text-zinc-200 flex flex-col justify-between select-none font-sans overflow-hidden">
          {/* Header & Toggle */}
          <div className="flex items-center justify-between pb-1 border-b border-white/10">
            <div>
              <div className="text-[6.5px] font-mono font-bold tracking-wider text-violet-400 uppercase">
                PLANS & BILLING
              </div>
              <div className="text-[8px] font-black text-white">
                Predictable tiers
              </div>
            </div>

            {/* Interactive Billing Frequency Switcher */}
            <div className="inline-flex p-0.5 rounded-lg bg-zinc-900 border border-white/10 text-[6.5px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAnnual(false);
                }}
                className={`px-1.5 py-0.5 rounded transition-all font-semibold ${
                  !isAnnual ? 'bg-white/15 text-white shadow-xs' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAnnual(true);
                }}
                className={`px-1.5 py-0.5 rounded transition-all font-semibold flex items-center gap-1 ${
                  isAnnual ? 'bg-violet-600 text-white shadow-xs' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <span>Annual</span>
                <span className="text-[5.5px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold">
                  -20%
                </span>
              </button>
            </div>
          </div>

          {/* 3-Tier Grid */}
          <div className="grid grid-cols-3 gap-1 my-auto">
            {/* 1. Hobby Tier */}
            <div className="p-1.5 rounded-lg bg-zinc-900/60 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-[7px] font-bold text-zinc-300">Hobby</div>
                <div className="text-[10px] font-black font-mono text-white mt-0.5">$0</div>
                <div className="text-[5.5px] text-zinc-500">Free forever</div>

                <div className="space-y-0.5 mt-1 pt-1 border-t border-white/5 text-[6px] text-zinc-400 font-mono">
                  <div className="flex items-center gap-1 text-zinc-300">
                    <span className="text-emerald-400">✓</span> 1 Seat
                  </div>
                  <div className="flex items-center gap-1 text-zinc-300">
                    <span className="text-emerald-400">✓</span> 3 Projects
                  </div>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <span className="text-zinc-600 font-bold">✕</span> No audit log
                  </div>
                </div>
              </div>

              <div className="mt-1.5 py-0.5 rounded bg-white/10 text-zinc-300 text-[6.5px] font-bold text-center border border-white/10">
                Start Free Sandbox
              </div>
            </div>

            {/* 2. Team Pro (Featured) */}
            <div className="p-1.5 rounded-lg bg-[#151722] border border-violet-500/50 shadow-[0_0_12px_rgba(139,92,246,0.15)] flex flex-col justify-between relative">
              <div className="absolute -top-1.5 right-1 px-1 py-0.2 rounded bg-violet-600 text-white font-mono text-[5px] font-black uppercase tracking-wider">
                POPULAR
              </div>

              <div>
                <div className="text-[7px] font-bold text-violet-300">Team Pro</div>
                <div className="flex items-baseline gap-0.5 mt-0.5">
                  <span className="text-[10px] font-black font-mono text-white">
                    {isAnnual ? '$19' : '$24'}
                  </span>
                  <span className="text-[5.5px] font-mono text-zinc-400">/seat/mo</span>
                </div>
                <div className="text-[5.5px] text-violet-300/80 font-mono">
                  {isAnnual ? 'Billed $228/yr' : 'Billed monthly'}
                </div>

                <div className="space-y-0.5 mt-1 pt-1 border-t border-white/10 text-[6px] text-zinc-300 font-mono">
                  <div className="flex items-center gap-1">
                    <span className="text-emerald-400">✓</span> 25 Seats
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-emerald-400">✓</span> Unlimited Repos
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-emerald-400">✓</span> 90d Audit Logs
                  </div>
                </div>
              </div>

              <div className="mt-1.5 py-0.5 rounded bg-violet-600 text-white text-[6.5px] font-bold text-center shadow-xs">
                Choose Team Pro
              </div>
            </div>

            {/* 3. Enterprise Tier */}
            <div className="p-1.5 rounded-lg bg-zinc-900/60 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-[7px] font-bold text-zinc-300">Enterprise</div>
                <div className="text-[10px] font-black font-mono text-white mt-0.5">Custom</div>
                <div className="text-[5.5px] text-zinc-500">Dedicated VPC</div>

                <div className="space-y-0.5 mt-1 pt-1 border-t border-white/5 text-[6px] text-zinc-400 font-mono">
                  <div className="flex items-center gap-1 text-zinc-300">
                    <span className="text-emerald-400">✓</span> Unlimited
                  </div>
                  <div className="flex items-center gap-1 text-zinc-300">
                    <span className="text-emerald-400">✓</span> 99.99% SLA
                  </div>
                  <div className="flex items-center gap-1 text-zinc-300">
                    <span className="text-emerald-400">✓</span> SAML / SSO
                  </div>
                </div>
              </div>

              <div className="mt-1.5 py-0.5 rounded bg-white/5 text-zinc-400 text-[6.5px] font-bold text-center border border-white/10">
                Contact Sales
              </div>
            </div>
          </div>

          {/* Footer assurance */}
          <div className="pt-0.5 border-t border-white/10 flex items-center justify-between text-[5.5px] font-mono text-zinc-500">
            <span>14-day risk-free trial</span>
            <span>Zero credit card required</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-zinc-950 text-zinc-600 text-xs">
          Component Preview
        </div>
      );
  }
};
