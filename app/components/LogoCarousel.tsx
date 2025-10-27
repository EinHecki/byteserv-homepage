import { useState } from "react";

interface LogoCarouselProps {
  /** Path to the directory containing logo images (relative to public/) */
  logoDirectory?: string;
  /** Array of logo filenames to display. If not provided, component expects logos to be passed as children */
  logos?: string[];
  /** Speed of carousel animation in seconds */
  animationSpeed?: number;
}

/**
 * LogoCarousel Component
 *
 * A horizontal scrolling carousel for displaying company logos.
 *
 * Usage:
 * 1. Place logo images in public/logos/partners/ directory
 * 2. Pass the filenames via the logos prop, or
 * 3. Manually update the defaultLogos array below
 *
 * Example logo filenames: company-1.png, company-2.svg, etc.
 */
export default function LogoCarousel({
  logoDirectory = "/logos/partners",
  logos,
  animationSpeed = 25
}: LogoCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Default logos - update this array with your actual logo filenames
  const baseLogos = logos || [
    "logo-placeholder-1.png",
    "logo-placeholder-2.png",
    "logo-placeholder-3.png",
    "logo-placeholder-4.png",
    "logo-placeholder-5.png",
    "logo-placeholder-6.png",
  ];

  // Logo component to avoid repetition
  const LogoImage = ({ logo, index }: { logo: string; index: number }) => (
    <div className="logo-item">
      <img
        src={`${logoDirectory}/${logo}`}
        alt={`Partner Logo ${index + 1}`}
        className="logo-image"
        onError={(e) => {
          const target = e.currentTarget;
          target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' rx='8' fill='%23374151'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%239CA3AF' font-family='system-ui, sans-serif' font-size='16' font-weight='600'%3EPartner%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' fill='%236B7280' font-family='system-ui, sans-serif' font-size='12'%3ELogo%3C/text%3E%3C/svg%3E`;
        }}
        draggable={false}
      />
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Unsere Partner
          </h2>
          <p className="text-gray-400 text-lg">
            Vertrauen von führenden Unternehmen
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scrolling Track with Mask */}
          <div
            className="overflow-hidden py-8"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            }}
          >
            <div
              className="logo-scroll-wrapper"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              data-paused={isHovered}
            >
              {/* First set */}
              <div className="logo-track">
                {baseLogos.map((logo, index) => (
                  <LogoImage key={`set1-${index}`} logo={logo} index={index} />
                ))}
              </div>

              {/* Second set - duplicate for seamless loop */}
              <div className="logo-track">
                {baseLogos.map((logo, index) => (
                  <LogoImage key={`set2-${index}`} logo={logo} index={index} />
                ))}
              </div>

              {/* Third set - extra buffer for ultra smooth transition */}
              <div className="logo-track">
                {baseLogos.map((logo, index) => (
                  <LogoImage key={`set3-${index}`} logo={logo} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subtle hint text */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Bewegen Sie die Maus über ein Logo, um die Animation zu pausieren
        </p>
      </div>

      {/* Ultra-Optimized CSS */}
      <style>{`
        .logo-scroll-wrapper {
          display: flex;
          animation: scroll-infinite ${animationSpeed}s linear infinite;
          /* Critical GPU acceleration properties */
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
        }

        .logo-scroll-wrapper[data-paused="true"] {
          animation-play-state: paused;
        }

        .logo-track {
          display: flex;
          gap: 3.5rem;
          flex-shrink: 0;
          padding-right: 3.5rem;
        }

        .logo-item {
          width: 160px;
          height: 100px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Optimize rendering */
          contain: layout style paint;
        }

        .logo-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.5;
          transition: filter 0.3s ease, opacity 0.3s ease;
          user-select: none;
          -webkit-user-drag: none;
          pointer-events: none;
          /* Image rendering optimization */
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        .logo-item:hover .logo-image {
          filter: grayscale(0);
          opacity: 1;
        }

        /* Optimized infinite scroll - scrolls exactly 1/3 */
        @keyframes scroll-infinite {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .logo-scroll-wrapper {
            animation: none !important;
          }
        }

        /* Responsive spacing */
        @media (max-width: 1024px) {
          .logo-track {
            gap: 3rem;
            padding-right: 3rem;
          }
        }

        @media (max-width: 640px) {
          .logo-track {
            gap: 2.5rem;
            padding-right: 2.5rem;
          }
          .logo-item {
            width: 120px;
            height: 80px;
          }
        }

        /* Force GPU layer - prevents repaint lag */
        .logo-scroll-wrapper::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
}
