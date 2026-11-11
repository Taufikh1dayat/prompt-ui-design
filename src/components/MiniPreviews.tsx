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
  Sparkle,
  Play,
  Pause,
  UploadCloud,
  FileText,
  Bell,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

interface MiniPreviewProps {
  previewId: string;
}

export const MiniPreview: React.FC<MiniPreviewProps> = ({ previewId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

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
              <Sparkle className="w-2.5 h-2.5 text-cyan-300" />
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
              <Sparkles className="w-2.5 h-2.5 text-violet-400" />
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

    /* 4. NOTIFICATION CENTER & ACTIVITY FLYOUT */
    case 'notification-center':
      return (
        <div className="w-full h-full p-2.5 bg-zinc-950 flex flex-col justify-between select-none font-sans">
          <div className="flex items-center justify-between pb-1 border-b border-zinc-800">
            <span className="text-[10px] font-bold text-white flex items-center gap-1.5">
              <Bell className="w-3 h-3 text-violet-400" /> Notifications
            </span>
            <span className="text-[7.5px] text-zinc-400 font-mono hover:text-white cursor-pointer">
              Mark all read
            </span>
          </div>

          <div className="space-y-1.5 my-auto">
            <div className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[8px] text-zinc-200 font-medium truncate">
                  Alex approved your pull request #128
                </div>
                <div className="text-[7px] text-zinc-500 flex items-center gap-1 mt-0.5 font-mono">
                  <Clock className="w-2.5 h-2.5" /> 5m ago
                </div>
              </div>
            </div>

            <div className="p-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[8px] text-zinc-300 font-medium truncate">
                  Invoice #902 paid ($420.00)
                </div>
                <div className="text-[7px] text-zinc-500 flex items-center gap-1 mt-0.5 font-mono">
                  <Clock className="w-2.5 h-2.5" /> 1h ago
                </div>
              </div>
            </div>
          </div>

          <div className="text-[7.5px] font-mono text-zinc-500 text-center">
            Unread dots, timestamps & quick actions
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
                  <Sparkle className="w-2.5 h-2.5 text-cyan-300" />
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

    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-zinc-950 text-zinc-600 text-xs">
          Component Preview
        </div>
      );
  }
};
