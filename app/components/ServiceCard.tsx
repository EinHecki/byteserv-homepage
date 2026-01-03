import { Link } from "react-router";
import type { ReactNode } from "react";

interface ServiceCardProps {
  to: string;
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export default function ServiceCard({
  to,
  icon,
  title,
  description,
  features,
  className = "",
}: ServiceCardProps) {
  return (
    <Link
      to={to}
      className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:border-white/20 overflow-hidden min-w-0 ${className}`}
    >
      <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 text-white/80 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 pb-1 leading-tight break-words">
        {title}
      </h3>
      <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-lg leading-relaxed break-words">
        {description}
      </p>
      <ul className="space-y-2 text-gray-300 mb-4 sm:mb-6 text-xs sm:text-base">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-green-400 flex-shrink-0">✓</span>
            <span className="break-words">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-blue-400 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm sm:text-base">
        Mehr erfahren <span>→</span>
      </div>
    </Link>
  );
}
