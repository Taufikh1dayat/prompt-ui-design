import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/95 border border-zinc-700/80 text-white text-xs shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-200">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="font-medium tracking-tight">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-zinc-400 hover:text-white p-0.5 rounded-full"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
