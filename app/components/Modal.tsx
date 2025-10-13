import React, { useEffect } from "react";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label={title || "Modal"}
    >
      {/* Backdrop */}
      <button
        aria-hidden
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative max-w-2xl w-full bg-white/15 dark:bg-neutral-800/60 text-white border border-white/25 dark:border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/15">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Modal schließen"
            className="rounded-md p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
          >
            ✕
          </button>
        </div>
        <div className="px-5 py-4 max-h-[70vh] overflow-auto text-sm leading-relaxed text-neutral-50 bg-white/5 rounded-b-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
