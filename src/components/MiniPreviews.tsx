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

    /* 3. FILE UPLOAD DROPZONE (ENGINEERED ASSET INGESTION HUB) */
    case 'file-upload-dropzone':
      return (
        <div className="w-full h-full p-2.5 bg-[#090A0E] text-zinc-200 flex flex-col justify-between select-none font-sans overflow-hidden">
          {/* Technical Dropzone with Corner Hairline Markers */}
          <div className="relative border border-dashed border-zinc-700/80 hover:border-zinc-400 rounded-lg p-2.5 text-center bg-[#111218] flex flex-col items-center justify-center gap-1 transition-colors">
            {/* Corner Precision Ticks */}
            <span className="absolute top-1 left-1.5 font-mono text-[6px] text-zinc-600">+</span>
            <span className="absolute top-1 right-1.5 font-mono text-[6px] text-zinc-600">+</span>
            <span className="absolute bottom-1 left-1.5 font-mono text-[6px] text-zinc-600">+</span>
            <span className="absolute bottom-1 right-1.5 font-mono text-[6px] text-zinc-600">+</span>

            <div className="w-5 h-5 rounded bg-zinc-800 text-zinc-300 flex items-center justify-center border border-white/10">
              <UploadCloud className="w-3 h-3" />
            </div>
            <div className="text-[8.5px] font-bold text-white tracking-tight">Drop build artifact or binary</div>
            <div className="text-[6.5px] font-mono text-zinc-500">MIME: .tar.gz, .wasm, .bin (max 100MB)</div>
          </div>

          {/* Active Ingestion Stream with Checksum & Monochromatic Bar */}
          <div className="p-1.5 rounded-lg bg-[#111218] border border-white/10 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-zinc-800 text-zinc-200 flex items-center justify-center shrink-0 border border-white/10 font-mono text-[7px] font-bold">
              GZ
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between text-[7.5px] mb-0.5 font-mono">
                <span className="text-zinc-200 font-semibold truncate">build-darwin-arm64.tar.gz</span>
                <span className="text-zinc-400 font-bold">82%</span>
              </div>
              {/* Solid Monochromatic Segmented Progress Bar (Zero Rainbow Slop) */}
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: '82%' }} />
              </div>
              <div className="flex justify-between items-center text-[5.5px] font-mono text-zinc-500 mt-1">
                <span>18.4 / 22.4 MB • 4.2 MB/s</span>
                <span className="text-zinc-400">SHA-256: 8f4c...3e2</span>
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

              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-1" />
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

    /* 5. AUDIO WAVEFORM PLAYER (TACTILE HARDWARE AUDIO DECK) */
    case 'audio-waveform-player':
      return (
        <div className="w-full h-full p-2.5 bg-[#090A0E] text-zinc-100 flex flex-col justify-between select-none font-sans overflow-hidden">
          <div className="p-2.5 rounded-lg bg-[#12141c] border border-white/10 flex flex-col gap-2 shadow-xl">
            {/* Track Info with Hardware Aesthetics */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-zinc-800 border border-white/10 flex flex-col items-center justify-center text-amber-400 font-mono text-[7px] font-black shrink-0">
                <span>96k</span>
                <span className="text-[5px] text-zinc-400 font-normal">FLAC</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[8.5px] font-bold text-white truncate tracking-tight">Analog Modular Session 04</div>
                <div className="text-[6.5px] font-mono text-zinc-400 truncate">Patch B • 124 BPM • Stereo Master</div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
                className="w-6 h-6 rounded-md bg-zinc-200 text-zinc-950 flex items-center justify-center hover:bg-white active:scale-95 transition-all shadow-xs shrink-0 font-bold"
                aria-label={isPlaying ? 'Pause playback' : 'Start playback'}
              >
                {isPlaying ? <Pause className="w-2.5 h-2.5 fill-current" /> : <Play className="w-2.5 h-2.5 fill-current ml-0.5" />}
              </button>
            </div>

            {/* Hardware Peak Meter / Waveform Bars */}
            <div className="h-5 flex items-end gap-0.5 px-1 bg-black/60 rounded border border-white/5 py-0.5 overflow-hidden">
              {[40, 65, 80, 50, 95, 75, 45, 85, 100, 60, 40, 70, 90, 80, 55, 35, 75, 95, 65, 50, 30, 60, 85, 70, 40].map((h, i) => {
                const heightVal = isPlaying ? Math.max(20, (h + (i % 3) * 15) % 100) : h * 0.7;
                const isPlayed = i < 14;
                const isPeak = heightVal > 85;
                return (
                  <div
                    key={i}
                    style={{ height: `${heightVal}%` }}
                    className={`flex-1 rounded-2xs transition-all duration-150 ${
                      isPlayed
                        ? isPeak
                          ? 'bg-amber-400'
                          : 'bg-emerald-400'
                        : 'bg-zinc-800'
                    }`}
                  />
                );
              })}
            </div>

            {/* Hardware Status Strip */}
            <div className="flex justify-between items-center text-[6.5px] font-mono text-zinc-400">
              <span className="text-zinc-200">01:42</span>
              <span className="text-[5.5px] text-zinc-500 uppercase">CH 1/2 • -6.2 dB RMS</span>
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

    /* 8. LIQUID GLASSMORPHISM (PHYSICAL SPECULAR OPTICS & CAUSTICS) */
    case 'liquid-glassmorphism':
      return (
        <div className="relative w-full h-full bg-[#0a0b12] flex flex-col justify-center items-center p-3 select-none overflow-hidden font-sans">
          {/*
            Underlying Architectural Geometric Contrast (Demonstrating Real Optical Refraction)
            Zero AI-slop neon balls. Pure monochromatic graphic typography passing under frosted glass.
          */}
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none opacity-25">
            <div className="text-4xl font-black font-mono tracking-tighter text-zinc-400 select-none">
              OPTIC
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-zinc-500/40 select-none flex items-center justify-center font-mono text-[8px] text-zinc-400">
              1.52 n
            </div>
          </div>

          {/* Diagonal Optical Caustic Sheen Line */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none" />

          {/* Physical Frosted Glass Plate */}
          <div className="relative z-10 w-full max-w-[240px] p-3 rounded-xl bg-white/[0.07] backdrop-blur-2xl border-t border-l border-white/35 border-b border-r border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.45)] text-white">
            <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Layers className="w-2.5 h-2.5 text-zinc-100" />
                </div>
                <span className="text-[9.5px] font-bold tracking-tight text-white">Specular Glass Slab</span>
              </div>
              <span className="text-[7px] font-mono bg-white/10 text-zinc-200 px-1.5 py-0.5 rounded border border-white/15">
                Crown 1.52
              </span>
            </div>

            {/* Optical Controls */}
            <div className="space-y-1.5">
              <div className="p-1.5 rounded-lg bg-black/30 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[7px] text-zinc-400 font-mono">Internal Refraction</div>
                  <div className="text-[9.5px] font-mono font-bold text-white">32px blur • 45° caustic</div>
                </div>
                <Sliders className="w-3 h-3 text-zinc-300" />
              </div>
            </div>

            <div className="mt-2 text-[6.5px] font-mono text-zinc-300 flex justify-between items-center pt-1 border-t border-white/10">
              <span>Physical dispersion</span>
              <span className="text-zinc-200">1px rim specular</span>
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

/* 14. MODERN CREATIVE DIGITAL AGENCY LANDING (ARCHITECTURAL MONOGRAPH ATELIER) */
    case 'creative-agency-landing':
      return (
        <div className="relative w-full h-full bg-[#FAF8F5] text-zinc-900 flex flex-col justify-between p-2 select-none overflow-hidden font-sans">
          {/* Top Browser Window Header */}
          <div className="relative z-10 flex items-center justify-between pb-1.5 border-b border-black/10 text-[7px] font-mono">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
              </div>
              <span className="font-bold text-zinc-950 font-sans tracking-tight ml-1">KINETIC ATELIER</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-zinc-500">
              <span className="text-zinc-950 font-bold border-b border-zinc-950 pb-0.2">Index</span>
              <span>Monograph</span>
              <span>Archive</span>
              <span>Atelier</span>
            </div>
            <span className="text-[6.5px] font-mono text-zinc-500">CH-8001 Zürich</span>
          </div>

          {/* Editorial Content Split (Zero AI-Slop Fake Stats / Zero Floating Pills) */}
          <div className="relative z-10 grid grid-cols-12 gap-2 my-auto items-center">
            {/* Left Column: Monograph Brief & Spatial Manifesto */}
            <div className="col-span-7 flex flex-col gap-1 pr-1">
              <div className="text-[6.5px] font-mono text-amber-700 uppercase tracking-widest font-bold">
                Special Edition // 2026
              </div>

              <h4 className="text-[12px] sm:text-[13px] font-black leading-[1.12] tracking-tight text-zinc-950">
                Spatial Architecture <br />
                <span className="text-zinc-600 font-serif italic font-normal">& Monolith Forms</span>
              </h4>

              <p className="text-[7px] text-zinc-600 leading-relaxed line-clamp-2">
                A 420-page retrospective documenting tactile spatial systems, brutalist typography, and monolithic physical identities across Europe.
              </p>

              <div className="flex items-center gap-2 pt-0.5">
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="px-2.5 py-1 bg-zinc-950 text-white text-[7px] font-bold rounded shadow-xs hover:bg-zinc-800 transition"
                >
                  View Case Archive
                </button>
                <span className="text-[6.5px] font-mono text-zinc-500">Fedrigoni 140gsm</span>
              </div>
            </div>

            {/* Right Column: Physical Monograph Book Artifact */}
            <div className="col-span-5 flex items-center justify-center">
              <div className="w-20 h-24 bg-[#14151a] text-zinc-100 rounded-sm shadow-xl border-l-2 border-zinc-700/80 p-2 flex flex-col justify-between relative transform rotate-1 hover:rotate-0 transition-transform">
                <div className="flex justify-between items-start text-[5.5px] font-mono text-zinc-400">
                  <span>VOL. VIII</span>
                  <span className="text-amber-400">№ 08</span>
                </div>
                <div>
                  <div className="text-[10px] font-black font-sans tracking-tight text-white leading-none">
                    KINETIC
                  </div>
                  <div className="text-[5px] font-mono text-zinc-400 mt-0.5">
                    SPATIAL SYSTEMS
                  </div>
                </div>
                <div className="pt-1 border-t border-white/10 flex justify-between items-center text-[5px] font-mono text-zinc-500">
                  <span>ZÜRICH</span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Colophon */}
          <div className="relative z-10 flex items-center justify-between text-[6px] font-mono text-zinc-500 pt-1 border-t border-black/10">
            <span>Commissioned by Kunsthalle Zürich</span>
            <span>Edition of 500 copies</span>
          </div>
        </div>
      );

    /* 15. B2B SAAS PRICING (TRANSPARENT UNIT-ECONOMICS & COMPUTE NODES) */
    case 'saas-pricing-matrix':
      return (
        <div className="w-full h-full p-2 bg-[#090A0F] text-zinc-200 flex flex-col justify-between select-none font-sans overflow-hidden">
          {/* Header & Architecture Mode Selector */}
          <div className="flex items-center justify-between pb-1 border-b border-white/10">
            <div>
              <div className="text-[6.5px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                COMPUTE & EGRESS
              </div>
              <div className="text-[8.5px] font-bold text-white tracking-tight">
                Transparent Unit Economics
              </div>
            </div>

            {/* Workload Profile Selector */}
            <div className="inline-flex p-0.5 rounded bg-zinc-900 border border-white/10 text-[6.5px] font-mono">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAnnual(false);
                }}
                className={`px-1.5 py-0.5 rounded transition ${
                  !isAnnual ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Developer
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAnnual(true);
                }}
                className={`px-1.5 py-0.5 rounded transition ${
                  isAnnual ? 'bg-zinc-100 text-zinc-950 font-bold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                High-Availability
              </button>
            </div>
          </div>

          {/* Unit Economics Comparison Table (Zero AI "Popular" Badges / Zero Glowing Borders) */}
          <div className="my-auto bg-[#111218] rounded-lg border border-white/10 p-2 font-mono text-[6.5px]">
            <div className="grid grid-cols-12 gap-1 pb-1 border-b border-white/10 text-zinc-500 font-bold">
              <span className="col-span-5">RESOURCE</span>
              <span className="col-span-4 text-right">SPECIFICATION</span>
              <span className="col-span-3 text-right">UNIT RATE</span>
            </div>

            <div className="space-y-1 py-1 text-zinc-300">
              <div className="grid grid-cols-12 gap-1 items-center">
                <span className="col-span-5 font-sans font-semibold text-white">Dedicated vCPU</span>
                <span className="col-span-4 text-right text-zinc-400">{isAnnual ? '4 Cores (AMD EPYC)' : '1 Shared Core'}</span>
                <span className="col-span-3 text-right font-bold text-emerald-400">{isAnnual ? '$0.028/hr' : '$0.00/hr'}</span>
              </div>
              <div className="grid grid-cols-12 gap-1 items-center">
                <span className="col-span-5 font-sans font-semibold text-white">NVMe Memory</span>
                <span className="col-span-4 text-right text-zinc-400">{isAnnual ? '16 GB DDR5 ECC' : '2 GB RAM'}</span>
                <span className="col-span-3 text-right font-bold text-zinc-300">{isAnnual ? '$0.004/GB-hr' : 'Included'}</span>
              </div>
              <div className="grid grid-cols-12 gap-1 items-center">
                <span className="col-span-5 font-sans font-semibold text-white">Global Edge Egress</span>
                <span className="col-span-4 text-right text-zinc-400">{isAnnual ? '10 TB Included' : '100 GB Cap'}</span>
                <span className="col-span-3 text-right font-bold text-zinc-300">{isAnnual ? '$0.05/GB' : '$0.00'}</span>
              </div>
            </div>

            <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[6px]">
              <span className="text-zinc-400 font-sans">Estimated Cost</span>
              <span className="font-bold text-white text-[8px]">{isAnnual ? '$38.20 / node / mo' : '$0.00 / free tier'}</span>
            </div>
          </div>

          {/* Action & Real Technical Guarantee */}
          <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[6px] font-mono text-zinc-400">
            <span>Automated failover • p99 read &lt; 12ms</span>
            <button
              onClick={(e) => e.stopPropagation()}
              className="px-2 py-0.5 rounded bg-zinc-200 text-zinc-950 font-bold hover:bg-white transition"
            >
              Provision Node
            </button>
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

            {/* Right Column (5 cols): Cryptographic Handshake Inspector (Zero Fake Testimonials) */}
            <div className="col-span-5 bg-[#0C0D14] border border-white/10 rounded-lg p-2 flex flex-col justify-between relative overflow-hidden font-mono text-[5.5px]">
              <div>
                <div className="flex items-center justify-between pb-1 border-b border-white/10">
                  <span className="text-zinc-400 uppercase tracking-wider font-bold">FIDO2 CEREMONY</span>
                  <span className="text-emerald-400 font-bold">SECURE</span>
                </div>

                {/* Cryptographic Handshake Step Inspector */}
                <div className="mt-1 space-y-0.5 text-zinc-400">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">challenge:</span>
                    <span className="text-zinc-300">0x7a8c...91</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">attestation:</span>
                    <span className="text-zinc-300">direct</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">alg:</span>
                    <span className="text-indigo-300 font-bold">ES256 (P-256)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">userPresence:</span>
                    <span className="text-emerald-400 font-bold">true (biometric)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">session_ttl:</span>
                    <span className="text-zinc-300">8h (rolling)</span>
                  </div>
                </div>

                <div className="mt-1.5 p-1 rounded bg-black/60 border border-white/5 text-[5px] text-zinc-400">
                  <span className="text-zinc-500">// PKCE Code Verifier validated</span>
                  <div className="text-emerald-400 font-bold mt-0.5">TLS 1.3 • Strict-Transport</div>
                </div>
              </div>

              {/* Hardware security key info */}
              <div className="pt-1 border-t border-white/5 flex items-center justify-between text-[5px] text-zinc-500">
                <span className="flex items-center gap-0.5 text-zinc-400">
                  <ShieldCheck className="w-2 h-2 text-indigo-400" /> WebAuthn L3
                </span>
                <span>FIPS 140-2</span>
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
