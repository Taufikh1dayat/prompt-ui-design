import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-zinc-950/95 border border-white/15 text-white text-xs shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 max-w-[92vw] sm:max-w-md w-max"
    >
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="font-medium tracking-tight truncate">{message}</span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="ml-2 text-zinc-400 hover:text-white p-1 rounded transition focus-visible:ring-1 focus-visible:ring-zinc-400 shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
