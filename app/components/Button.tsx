import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

// Frosted glass button using Tailwind classes. Requires backdrop-filter support.
// You can further customize via className prop.
export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-md font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer";

  const frosted =
    "bg-white/10 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 backdrop-blur-md backdrop-saturate-150 hover:bg-white/15 active:bg-white/20";

  const ring = "hover:shadow-lg hover:shadow-sky-500/10";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[base, frosted, ring, className].join(" ")}
    >
      {/* Decorative glare */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      >
        <span className="absolute -top-1 left-1/2 h-1/2 w-[140%] -translate-x-1/2 -rotate-6 bg-gradient-to-b from-white/50 to-transparent blur-[6px]" />
      </span>
      <span className="relative z-10">{children}</span>
    </button>
  );
}