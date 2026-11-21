import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  Command, 
  ShoppingCart, 
  Zap, 
  Sliders, 
  Layers, 
  Play, 
  Pause, 
  UploadCloud, 
  FileText, 
  Bell, 
  CheckCircle2, 
  ArrowRight, 
  Key, 
  ShieldCheck, 
  GitBranch, 
  AlertCircle 
} from 'lucide-react';

interface MiniPreviewProps {
  previewId: string;
}

export const MiniPreview: React.FC<MiniPreviewProps> = ({ previewId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [authTab, setAuthTab] = useState<'magic' | 'passkey'>('magic');

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

    /* 2. AGILE KANBAN SPRINT BOARD (Linear-Grade Issue Pipeline) */
    case 'kanban-sprint-board':
      return (
        <div className="w-full h-full p-2 sm:p-2.5 bg-[#090a0f] text-zinc-100 flex flex-col justify-between select-none font-sans overflow-hidden">
          {/* Header with Linear cycle progress & filters */}
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[8.5px]">
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-zinc-400 font-semibold tracking-tight">ENG / Platform</span>
              <span className="text-zinc-600">/</span>
              <span className="font-bold text-white flex items-center gap-1">
                Cycle 38
              </span>
              <span className="hidden sm:inline-block text-[7px] font-mono px-1 py-0.2 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                4d left
              </span>
            </div>

            {/* Cycle Burndown Mini Progress */}
            <div className="flex items-center gap-1.5 text-[7px] font-mono text-zinc-400">
              <span className="hidden sm:inline">68% Done</span>
              <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '68%' }} />
              </div>
              <span className="text-zinc-500">7 Issues</span>
            </div>
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-3 gap-1.5 my-auto">
            {/* Col 1: Todo */}
            <div className="bg-[#111218] border border-white/5 rounded-lg p-1.5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-400 mb-1 pb-1 border-b border-white/5">
                <span className="flex items-center gap-1 text-zinc-300 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full border border-zinc-400" />
                  <span>TODO</span>
                </span>
                <span className="text-[7px] text-zinc-500">2</span>
              </div>

              <div className="space-y-1">
                {/* Task 1 */}
                <div className="bg-[#181a24] p-1.5 rounded border border-white/10 shadow-xs hover:border-white/20 transition">
                  <div className="flex items-center justify-between text-[6px] font-mono text-zinc-500">
                    <span className="text-zinc-400 font-semibold">AUTH-1048</span>
                    <span className="text-amber-400 font-bold flex items-center gap-0.5">
                      <span className="w-1 h-1 rounded-full bg-amber-400" /> High
                    </span>
                  </div>
                  <div className="text-[7.5px] font-medium text-zinc-200 mt-0.5 line-clamp-1">
                    Migrate OAuth to PKCE vault
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[6px] text-zinc-500 font-mono">
                    <span className="flex items-center gap-0.5 text-zinc-400 truncate max-w-[50px]">
                      <GitBranch className="w-1.5 h-1.5" /> pkce
                    </span>
                    <span className="px-1 py-0.2 rounded bg-zinc-800 text-zinc-300 font-semibold">
                      3/5
                    </span>
                  </div>
                </div>

                {/* Task 2 */}
                <div className="bg-[#181a24] p-1.5 rounded border border-white/5 shadow-xs opacity-90">
                  <div className="flex items-center justify-between text-[6px] font-mono text-zinc-500">
                    <span>INFRA-89</span>
                    <span>Med</span>
                  </div>
                  <div className="text-[7.5px] font-medium text-zinc-300 mt-0.5 line-clamp-1">
                    Redis 3x replica failover
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[6px] text-zinc-500 font-mono">
                    <span className="text-[5.5px] text-zinc-500">2d ago</span>
                    <div className="w-3 h-3 rounded-full bg-zinc-700 text-[5.5px] font-bold text-zinc-200 flex items-center justify-center">
                      DX
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2: In Progress */}
            <div className="bg-[#111218] border border-indigo-500/30 rounded-lg p-1.5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[7.5px] font-mono text-indigo-400 mb-1 pb-1 border-b border-indigo-500/20">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span>IN PROGRESS</span>
                </span>
                <span className="text-[7px] text-indigo-400">1</span>
              </div>

              <div className="bg-[#181b28] p-1.5 rounded border border-indigo-500/40 shadow-md">
                <div className="flex items-center justify-between text-[6px] font-mono">
                  <span className="text-indigo-400 font-bold">BILL-204</span>
                  <span className="text-rose-400 font-bold flex items-center gap-0.5">
                    <AlertCircle className="w-1.5 h-1.5" /> P0
                  </span>
                </div>
                <div className="text-[7.5px] font-bold text-white mt-0.5 line-clamp-1">
                  Stripe webhook replay
                </div>
                <div className="mt-1 px-1 py-0.2 rounded bg-rose-500/15 border border-rose-500/30 text-[5.5px] font-mono text-rose-300 truncate">
                  Blocked: PR #891 review
                </div>
                <div className="flex items-center justify-between mt-1 text-[6px] text-zinc-400 font-mono">
                  <span className="flex items-center gap-0.5 truncate max-w-[50px]">
                    <GitBranch className="w-1.5 h-1.5 text-indigo-400" /> replay
                  </span>
                  <div className="w-3.5 h-3.5 rounded-full bg-indigo-600 text-[6px] font-bold text-white flex items-center justify-center border border-indigo-400/50">
                    SA
                  </div>
                </div>
              </div>
            </div>

            {/* Col 3: Done */}
            <div className="bg-[#111218] border border-white/5 rounded-lg p-1.5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[7.5px] font-mono text-emerald-400 mb-1 pb-1 border-b border-white/5">
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-1.5 h-1.5 text-emerald-400" />
                  <span>DONE</span>
                </span>
                <span className="text-[7px] text-emerald-400">4</span>
              </div>

              <div className="space-y-1">
                <div className="bg-[#181a24]/80 p-1.5 rounded border border-white/5 opacity-85">
                  <div className="flex items-center justify-between text-[6px] font-mono text-zinc-500">
                    <span>PERF-512</span>
                    <span className="text-emerald-400 font-bold">v2.4.1</span>
                  </div>
                  <div className="text-[7.5px] font-medium text-zinc-300 mt-0.5 line-clamp-1">
                    Tenant sharding query
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[5.5px] text-emerald-400 font-mono">
                    <span>✓ Merged</span>
                    <span className="text-zinc-500">#a8f10c</span>
                  </div>
                </div>

                <div className="p-1 rounded border border-dashed border-white/10 text-[6px] font-mono text-zinc-500 text-center">
                  +3 deployed
                </div>
              </div>
            </div>
          </div>

          {/* Footer Shortcuts Strip */}
          <div className="flex items-center justify-between text-[6px] font-mono text-zinc-500 pt-0.5 border-t border-white/5">
            <span>C: Create Issue</span>
            <span>J/K: Navigate</span>
            <span>↵: Detail</span>
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
        <div className="w-full h-full p-2.5 bg-[#FFE600] text-black flex flex-col justify-between font-sans select-none rounded-none border-2 border-black relative overflow-hidden">
          {/* Top Hazard Bar */}
          <div className="flex items-center justify-between border-b-2 border-black pb-1">
            <div className="flex items-center gap-1 font-black text-[10px] uppercase font-mono tracking-tight">
              <span className="w-2.5 h-2.5 bg-black rounded-none" />
              <span>RAW//BRUTAL</span>
            </div>
            <span className="text-[8px] font-black uppercase bg-[#FF2A85] text-white px-1.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000] rounded-none">
              0PX RADIUS
            </span>
          </div>

          {/* Content Card with Hard 3D Offset Shadow */}
          <div className="my-auto p-2 bg-white border-2 border-black shadow-[3px_3px_0px_#000] rounded-none flex items-center justify-between gap-1.5">
            <div>
              <div className="text-[10.5px] font-black leading-tight uppercase">
                Zero Rounded Corners.<br />Pure Tactile Physics.
              </div>
              <div className="text-[7px] font-mono text-zinc-700 mt-0.5">
                Hard 3D shadows • Solid fills
              </div>
            </div>
            <div className="w-7 h-7 bg-[#00F0FF] border-2 border-black shadow-[2px_2px_0px_#000] rounded-none flex items-center justify-center font-black text-xs shrink-0">
              !
            </div>
          </div>

          {/* Action Row with Sharp Buttons */}
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={(e) => e.stopPropagation()}
              className="py-1 px-1.5 bg-black text-white font-black text-[8px] uppercase border-2 border-black shadow-[2px_2px_0px_#FFE600] rounded-none flex items-center justify-center gap-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <Zap className="w-2.5 h-2.5 fill-current" />
              <span>Launch</span>
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              className="py-1 px-1.5 bg-[#FF2A85] text-white font-black text-[8px] uppercase border-2 border-black shadow-[2px_2px_0px_#000] rounded-none flex items-center justify-center active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <span>Copy</span>
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
        <div className="w-full h-full p-2.5 bg-[#f4f4f4] text-black flex flex-col justify-between font-sans select-none border border-black/80 rounded-none relative overflow-hidden">
          {/* Top Asymmetric Bar */}
          <div className="flex justify-between items-baseline border-b-2 border-black pb-1">
            <span className="text-[9px] font-mono font-black tracking-widest uppercase">
              HELVETICA // 1957
            </span>
            <span className="text-[7.5px] font-mono font-bold bg-[#E11D48] text-white px-1 py-0.2 rounded-none">
              ZÜRICH
            </span>
          </div>

          {/* Mathematical Grid Intersection */}
          <div className="my-auto grid grid-cols-12 gap-1 items-start">
            <div className="col-span-4 border-r-2 border-black pr-1.5">
              <div className="text-4xl font-black tracking-tighter leading-none">
                08
              </div>
              <div className="text-[6.5px] font-mono uppercase text-zinc-600 mt-1">
                MATHEMATICAL RULER
              </div>
            </div>

            <div className="col-span-8 pl-1">
              <div className="text-[10px] font-black uppercase tracking-tight leading-snug">
                FORM FOLLOWS GRID.<br />CONTENT DICTATES FORM.
              </div>
              <div className="text-[7px] text-zinc-700 mt-1 leading-tight font-medium">
                Pure International Typographic Style. 0px corner radius, strict baseline grid, zero artificial gradients.
              </div>
            </div>
          </div>

          {/* Bottom Coordinate Ruler */}
          <div className="border-t-2 border-black pt-1 flex justify-between items-center text-[7.5px] font-mono">
            <span>GRID: 12-COL ASYMMETRIC</span>
            <span className="font-black bg-black text-white px-1 py-0.2 rounded-none">
              DIN 1451
            </span>
          </div>
        </div>
      );

/* 10. SAAS BENTO GRID (Enterprise Telemetry & Revenue Bridge) */
    case 'bento-analytics':
      return (
        <div className="w-full h-full p-2.5 bg-[#090A0F] text-zinc-100 flex flex-col justify-between font-sans select-none overflow-hidden">
          {/* Top Control & Environment Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[7.5px]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-zinc-300 font-semibold tracking-tight">Telemetry Hub</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[6.5px] font-mono text-zinc-500">us-east-1</span>
            </div>

            {/* Timeframe Selector & Sync Status */}
            <div className="flex items-center gap-1.5 text-[6.5px] font-mono">
              <div className="flex items-center rounded bg-zinc-900 border border-white/10 p-0.5">
                <span className="px-1 py-0.2 text-zinc-500">7D</span>
                <span className="px-1 py-0.2 rounded bg-white/15 text-white font-bold">30D</span>
                <span className="px-1 py-0.2 text-zinc-500">QTD</span>
              </div>
              <span className="hidden sm:inline text-zinc-500">42s ago</span>
            </div>
          </div>

          {/* Primary Bento Body */}
          <div className="grid grid-cols-12 gap-1.5 my-auto">
            {/* Left 8 Cols: Net ARR Expansion Bridge */}
            <div className="col-span-8 bg-[#11131C] border border-white/10 rounded-lg p-2 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[7.5px] text-zinc-400 font-mono">Net New ARR Bridge</div>
                  <div className="text-xs sm:text-sm font-black font-mono text-white tracking-tight mt-0.5">
                    $184,290
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[7.5px] font-mono text-emerald-400 font-bold flex items-center justify-end gap-0.5">
                    <TrendingUp className="w-2 h-2" /> +11.2%
                  </div>
                  <div className="text-[6px] text-zinc-500 font-mono">+$18.4k MoM</div>
                </div>
              </div>

              {/* Stacked Histogram Bars (Expansion vs Contraction) */}
              <div className="mt-1.5 pt-1.5 border-t border-white/5">
                <div className="flex items-end justify-between h-9 gap-1 px-1">
                  {[
                    { m: 'Jan', exp: 65, churn: 15 },
                    { m: 'Feb', exp: 78, churn: 18 },
                    { m: 'Mar', exp: 70, churn: 12 },
                    { m: 'Apr', exp: 88, churn: 14 },
                    { m: 'May', exp: 95, churn: 16 },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-0.5 h-full justify-end">
                      <div className="w-full flex items-end justify-center gap-0.5 h-7">
                        <div
                          className="w-2 sm:w-2.5 rounded-t-xs bg-indigo-500/80 hover:bg-indigo-400 transition"
                          style={{ height: `${item.exp}%` }}
                          title={`Expansion: $${item.exp}k`}
                        />
                        <div
                          className="w-1.5 sm:w-2 rounded-t-xs bg-rose-500/60"
                          style={{ height: `${item.churn}%` }}
                          title={`Contraction: -$${item.churn}k`}
                        />
                      </div>
                      <span className="text-[5.5px] font-mono text-zinc-500">{item.m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Cohort N-Day Retention */}
            <div className="col-span-4 bg-[#11131C] border border-white/10 rounded-lg p-2 flex flex-col justify-between">
              <div>
                <div className="text-[7.5px] text-zinc-400 font-mono leading-tight">Retention (N-Day)</div>
                <div className="text-[6px] text-zinc-500 font-mono mt-0.5">90D active cohort</div>
              </div>

              {/* Retention Step Heat-bars */}
              <div className="space-y-1 my-auto">
                <div>
                  <div className="flex justify-between text-[6px] font-mono mb-0.5">
                    <span className="text-zinc-400">D1</span>
                    <span className="text-zinc-200 font-bold">96.4%</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: '96.4%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[6px] font-mono mb-0.5">
                    <span className="text-zinc-400">D7</span>
                    <span className="text-zinc-200 font-bold">84.2%</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-400 rounded-full" style={{ width: '84.2%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[6px] font-mono mb-0.5">
                    <span className="text-zinc-400">D30</span>
                    <span className="text-zinc-200 font-bold">78.1%</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-violet-400 rounded-full" style={{ width: '78.1%' }} />
                  </div>
                </div>
              </div>

              <div className="pt-1 border-t border-white/5 flex items-center justify-between text-[5.5px] font-mono text-zinc-500">
                <span>NDR: 124%</span>
                <span className="text-emerald-400 font-bold">Healthy</span>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Strip */}
          <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-white/5 text-[6.5px] font-mono text-zinc-400">
            <div className="flex items-center justify-between px-1 py-0.5 rounded bg-white/5 border border-white/5">
              <span className="text-zinc-500">p99 Latency</span>
              <span className="text-zinc-200 font-bold">28.4ms</span>
            </div>
            <div className="flex items-center justify-between px-1 py-0.5 rounded bg-white/5 border border-white/5">
              <span className="text-zinc-500">Ingestion</span>
              <span className="text-zinc-200 font-bold">42k req/s</span>
            </div>
            <div className="flex items-center justify-between px-1 py-0.5 rounded bg-white/5 border border-white/5">
              <span className="text-zinc-500">Gross Margin</span>
              <span className="text-emerald-400 font-bold">84.6%</span>
            </div>
          </div>
        </div>
      );

        /* 11. COMMAND PALETTE */
    case 'command-palette':
      return (
        <div className="relative w-full h-full bg-[#0d1117] flex items-center justify-center font-sans select-none overflow-hidden">
          {/* Faint IDE Background Code */}
          <div className="absolute inset-0 p-2 font-mono text-[6.5px] text-zinc-600 leading-relaxed select-none opacity-40">
            <div><span className="text-purple-400">import</span> &#123; createVault &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'@vault/core'</span>;</div>
            <div><span className="text-blue-400">const</span> session = <span className="text-purple-400">await</span> createVault.<span className="text-yellow-400">authenticate</span>(&#123;</div>
            <div className="pl-2">provider: <span className="text-emerald-400">'webauthn-pkce'</span>,</div>
            <div className="pl-2">enforceMFA: <span className="text-orange-400">true</span></div>
            <div>&#125;);</div>
          </div>

          {/* Dimmed Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

          {/* Floating Spotlight Dialog */}
          <div className="relative z-10 w-[240px] sm:w-[250px] bg-[#161822] border border-white/15 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden p-2">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-black/40 rounded-lg border border-white/10 mb-1.5">
              <Search className="w-2.5 h-2.5 text-violet-400" />
              <span className="text-[8px] text-zinc-200 font-mono">deploy --prod</span>
              <span className="ml-auto text-[6.5px] bg-zinc-800 text-zinc-400 px-1 py-0.2 rounded font-mono">ESC</span>
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center justify-between px-1.5 py-1 rounded bg-violet-600/30 border border-violet-500/40 text-white text-[8px]">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-2.5 h-2.5 text-violet-400 fill-current" />
                  <span className="font-semibold">Deploy to Production</span>
                </div>
                <span className="text-[6.5px] font-mono text-violet-300">↵</span>
              </div>

              <div className="flex items-center justify-between px-1.5 py-1 rounded text-zinc-400 text-[8px] hover:bg-white/5">
                <div className="flex items-center gap-1.5">
                  <Command className="w-2.5 h-2.5 text-zinc-500" />
                  <span>Switch Workspace</span>
                </div>
                <span className="text-[6.5px] font-mono text-zinc-500">⌘W</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* 12. MOBILE FINTECH */
    case 'fintech-cashflow-mobile':
      return (
        <div className="w-full h-full p-2 bg-[#090A0F] flex justify-center items-center select-none font-sans overflow-hidden">
          {/* Smartphone Chassis / Frame */}
          <div className="w-[168px] sm:w-[176px] bg-[#0c0d14] border-[2.5px] border-zinc-700/80 rounded-[24px] p-2 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Dynamic Island / Speaker Pill */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full flex items-center justify-center z-20 shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 ml-auto mr-1" />
            </div>

            {/* Status Bar */}
            <div className="flex justify-between items-center text-[6px] font-mono text-zinc-400 pt-0.5 pb-1 mb-0.5">
              <span>9:41</span>
              <div className="flex items-center gap-0.5">
                <span>5G</span>
                <div className="w-3 h-1.5 border border-zinc-500 rounded-xs p-0.2 flex items-center">
                  <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                </div>
              </div>
            </div>

            {/* Total Balance */}
            <div>
              <div className="text-[6.5px] text-zinc-400 font-mono">Total Balance</div>
              <div className="text-xs sm:text-sm font-black text-white font-mono tracking-tight">$48,250.80</div>
            </div>

            {/* Metallic VISA Card */}
            <div className="bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/70 rounded-xl p-2 my-1 shadow-md relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-12 h-12 rounded-full bg-white/5 blur-sm pointer-events-none" />
              <div className="flex justify-between items-center mb-2">
                <div className="w-3.5 h-2.5 rounded-xs bg-amber-400/80 border border-amber-300/40" />
                <span className="text-[7.5px] font-black text-zinc-200 tracking-wider">VISA</span>
              </div>
              <div className="text-[8px] font-mono text-zinc-300 tracking-wider">•••• 8842</div>
              <div className="flex justify-between text-[5.5px] font-mono text-zinc-400 mt-1">
                <span>EXP 08/28</span>
                <span>PLATINUM</span>
              </div>
            </div>

            {/* Quick Contacts Row */}
            <div className="flex items-center justify-between py-1 border-y border-white/5">
              <div className="text-[6px] font-mono text-zinc-400">Send:</div>
              <div className="flex items-center gap-1">
                {['AR', 'SK', 'DX'].map((ini, i) => (
                  <div key={i} className="w-3.5 h-3.5 rounded-full bg-zinc-800 border border-white/10 text-[5.5px] font-bold text-zinc-200 flex items-center justify-center">
                    {ini}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transaction Feed */}
            <div className="space-y-0.5 pt-0.5">
              <div className="flex justify-between text-[6.5px]">
                <span className="text-zinc-300 truncate">Apple Store</span>
                <span className="font-mono text-zinc-300">-$1,299</span>
              </div>
              <div className="flex justify-between text-[6.5px]">
                <span className="text-zinc-300 truncate">Stripe Payout</span>
                <span className="font-mono text-emerald-400 font-bold">+$4,800</span>
              </div>
            </div>

            {/* Home Indicator Bar */}
            <div className="w-8 h-0.5 rounded-full bg-zinc-600 mx-auto mt-1" />
          </div>
        </div>
      );

    /* 13. E-COMMERCE CART DRAWER */
    case 'checkout-slide-drawer':
      return (
        <div className="relative w-full h-full bg-[#08090E] select-none font-sans overflow-hidden">
          {/* Dimmed Background Product View */}
          <div className="p-2 opacity-35 filter blur-[0.5px]">
            <div className="flex justify-between text-[7.5px] text-zinc-400 pb-1 border-b border-white/10">
              <span className="font-bold text-white">KEYCHRON STUDIO</span>
              <span>USD $</span>
            </div>
            <div className="mt-2 text-xs font-bold text-white">Q1 Pro Mechanical Keyboard</div>
            <div className="text-[7.5px] text-zinc-400">Wireless custom mechanical keyboard with knob</div>
          </div>

          {/* Dimmed Overlay */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

          {/* Sliding Bottom Sheet Drawer */}
          <div className="absolute bottom-0 inset-x-0 bg-zinc-900/95 border-t border-white/20 rounded-t-2xl p-2.5 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
            {/* Grab Handle */}
            <div className="w-7 h-1 rounded-full bg-zinc-500 mx-auto mb-1.5" />

            <div className="flex items-center justify-between pb-1 border-b border-white/10 text-[8px]">
              <span className="font-bold text-white flex items-center gap-1">
                <ShoppingCart className="w-2.5 h-2.5 text-zinc-400" /> Cart (1 Item)
              </span>
              <span className="text-[6.5px] font-mono text-emerald-400 bg-emerald-500/15 px-1 py-0.2 rounded">
                Free Express Ship
              </span>
            </div>

            {/* Cart Item Row */}
            <div className="flex items-center gap-2 py-1.5">
              <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-[7px] font-mono text-zinc-400">
                KB
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[8px] font-semibold text-zinc-100 truncate">Q1 Pro Keyboard</div>
                <div className="text-[7px] font-mono text-zinc-400">$199.00</div>
              </div>
              <div className="flex items-center gap-1 bg-black/40 border border-white/10 rounded px-1.5 py-0.5 text-[7px] font-mono text-zinc-300">
                <span>-</span>
                <span className="font-bold text-white">1</span>
                <span>+</span>
              </div>
            </div>

            {/* Order Total & Swipe Button */}
            <div className="pt-1 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[6px] text-zinc-400 uppercase font-mono">Total</div>
                <div className="text-[10px] font-mono font-black text-white">$199.00</div>
              </div>
              <button
                onClick={(e) => e.stopPropagation()}
                className="px-3 py-1 rounded-full bg-white text-zinc-950 text-[7.5px] font-bold shadow-md hover:bg-zinc-200 transition flex items-center gap-1"
              >
                <span>Slide to Pay</span>
                <ArrowRight className="w-2 h-2" />
              </button>
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

    /* 16. MODERN SPLIT-SCREEN AUTHENTICATION & SSO */
    case 'split-screen-auth':
      return (
        <div className="w-full h-full p-2 bg-[#090A0F] text-white flex select-none font-sans overflow-hidden">
          {/* 2-Column Split: Left = Form, Right = Telemetry */}
          <div className="grid grid-cols-12 gap-1.5 w-full h-full">
            {/* Left Column (7 cols): Authentication Card */}
            <div className="col-span-7 bg-[#11131C] border border-white/10 rounded-lg p-2 flex flex-col justify-between">
              <div>
                {/* Header / Brand */}
                <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded bg-indigo-600 flex items-center justify-center text-[7px] font-black text-white">
                      ▲
                    </div>
                    <span className="text-[8px] font-bold tracking-tight text-white">Acme Cloud</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setAuthTab('magic');
                      }}
                      className={`text-[6px] font-mono px-1 py-0.2 rounded transition ${
                        authTab === 'magic'
                          ? 'bg-indigo-600/30 text-indigo-300 font-bold border border-indigo-500/40'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      Magic Link
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setAuthTab('passkey');
                      }}
                      className={`text-[6px] font-mono px-1 py-0.2 rounded transition ${
                        authTab === 'passkey'
                          ? 'bg-indigo-600/30 text-indigo-300 font-bold border border-indigo-500/40'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      Passkey
                    </button>
                  </div>
                </div>

                {/* Title */}
                <div className="mt-1">
                  <div className="text-[8px] font-bold text-zinc-100 leading-tight">Sign in to console</div>
                  <div className="text-[5.5px] text-zinc-400">Zero-password developer authentication</div>
                </div>

                {/* Quick OAuth Pills */}
                <div className="grid grid-cols-2 gap-1 mt-1.5">
                  <div className="flex items-center justify-center gap-1 py-0.5 px-1 rounded bg-white/5 border border-white/10 text-[6px] text-zinc-300 hover:bg-white/10 transition">
                    <svg className="w-2 h-2 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 py-0.5 px-1 rounded bg-white/5 border border-white/10 text-[6px] text-zinc-300 hover:bg-white/10 transition">
                    <svg className="w-2 h-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                    <span>Google</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 my-1.5">
                  <div className="h-px bg-white/10 flex-1" />
                  <span className="text-[5px] font-mono text-zinc-500 uppercase">OR WITH EMAIL</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>

                {/* Dynamic Auth Method Content */}
                {authTab === 'magic' ? (
                  <div className="space-y-1">
                    <div className="space-y-0.5">
                      <div className="text-[5.5px] font-mono text-zinc-400">WORK EMAIL</div>
                      <div className="px-1.5 py-0.5 rounded bg-black/40 border border-indigo-500/40 text-[6.5px] font-mono text-zinc-200 flex items-center justify-between">
                        <span>dev@acmecorp.dev</span>
                        <span className="w-1 h-2 bg-indigo-400 animate-pulse" />
                      </div>
                    </div>

                    <div className="py-0.5 px-1 rounded bg-indigo-600 text-white text-[6.5px] font-bold flex items-center justify-center gap-1 shadow-xs hover:bg-indigo-500 transition">
                      <span>Send Magic Link</span>
                      <ArrowRight className="w-2 h-2" />
                    </div>
                  </div>
                ) : (
                  <div className="p-1 rounded bg-indigo-950/40 border border-indigo-500/30 space-y-1">
                    <div className="flex items-center gap-1 text-[6px] text-indigo-300 font-mono">
                      <Key className="w-2.5 h-2.5 text-indigo-400" />
                      <span>Hardware Key / Biometrics</span>
                    </div>
                    <div className="py-0.5 rounded bg-indigo-600 text-white text-[6.5px] font-bold text-center">
                      Verify Passkey
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-1 border-t border-white/5 text-[5px] text-zinc-500 font-mono flex items-center justify-between">
                <span>Passkey Ready</span>
                <span className="text-zinc-400">SSO Help</span>
              </div>
            </div>

            {/* Right Column (5 cols): Telemetry & Proof Showcase */}
            <div className="col-span-5 bg-[#0C0D14] border border-white/10 rounded-lg p-2 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[6px] font-mono text-zinc-400 uppercase tracking-wider">CLUSTER STATE</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[5.5px] font-mono text-emerald-400">99.99%</span>
                  </div>
                </div>

                {/* Mini Telemetry Code Box */}
                <div className="mt-1.5 p-1 rounded bg-black/60 border border-white/5 font-mono text-[5px] space-y-0.5">
                  <div className="text-zinc-500">// active region: us-east-1</div>
                  <div className="flex justify-between text-zinc-300">
                    <span>p99 latency:</span>
                    <span className="text-emerald-400 font-bold">14.2ms</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>edge nodes:</span>
                    <span className="text-indigo-300">48 / 48</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>auth guard:</span>
                    <span className="text-zinc-400">webauthn-v2</span>
                  </div>
                </div>

                {/* Micro Quote */}
                <div className="mt-2 text-[5.5px] text-zinc-400 italic leading-snug border-l border-indigo-500/50 pl-1">
                  "Zero auth friction for our 200+ engineers."
                </div>
              </div>

              {/* Compliance strip */}
              <div className="pt-1 border-t border-white/5 flex items-center justify-between text-[5px] font-mono text-zinc-500">
                <span className="flex items-center gap-0.5">
                  <ShieldCheck className="w-2 h-2 text-indigo-400" /> SOC2
                </span>
                <span>E2E Encrypted</span>
              </div>
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
