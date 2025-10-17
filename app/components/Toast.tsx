import { useEffect } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
  };

  const styles = {
    success: "border-emerald-400/40 bg-emerald-500/20 text-emerald-100",
    error: "border-red-400/40 bg-red-500/20 text-red-100",
    info: "border-blue-400/40 bg-blue-500/20 text-blue-100",
  };

  const progressStyles = {
    success: "bg-emerald-400",
    error: "bg-red-400",
    info: "bg-blue-400",
  };

  return (
    <div
      className={`fixed top-8 right-8 z-50 max-w-md w-full mx-4 sm:mx-0 rounded-2xl border backdrop-blur-sm shadow-2xl overflow-hidden animate-slide-in-right ${styles[type]}`}
      role="alert"
    >
      <div className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
        <div className="text-2xl sm:text-3xl flex-shrink-0">{icons[type]}</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base font-medium leading-relaxed break-words">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-white/60 hover:text-white transition-colors ml-2"
          aria-label="Schließen"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/10">
        <div
          className={`h-full ${progressStyles[type]} animate-progress`}
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
}
