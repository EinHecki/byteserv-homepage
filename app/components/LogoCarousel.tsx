import { useState } from "react";

interface LogoCarouselProps {
  logoDirectory?: string;
  logos?: string[];
  animationSpeed?: number;
}

export default function LogoCarousel({
  logoDirectory = "/logos/partners",
  logos,
  animationSpeed = 20
}: LogoCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);

  const inputLogos = logos || [
    "logo-placeholder-1.png",
    "logo-placeholder-2.png",
    "logo-placeholder-3.png",
    "logo-placeholder-4.png",
  ];

  // Create enough logos to fill viewport + one complete set for seamless loop
  const logoCount = inputLogos.length;

  const LogoImage = ({ logo, idx }: { logo: string; idx: number }) => (
    <li className="logo-slide">
      <img
        src={`${logoDirectory}/${logo}`}
        alt={`Partner Logo ${(idx % logoCount) + 1}`}
        className="logo-img"
        onError={(e) => {
          e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' rx='8' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239CA3AF' font-family='system-ui' font-size='14'%3EPartner%3C/text%3E%3C/svg%3E`;
        }}
        draggable={false}
      />
    </li>
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

        <div
          className="logo-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ul
            className="logo-track"
            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
          >
            {/* Render logos multiple times for seamless infinite effect */}
            {[...Array(4)].map((_, setIdx) =>
              inputLogos.map((logo, logoIdx) => (
                <LogoImage
                  key={`${setIdx}-${logoIdx}`}
                  logo={logo}
                  idx={logoIdx}
                />
              ))
            )}
          </ul>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Bewegen Sie die Maus über die Logos, um die Animation zu pausieren
        </p>
      </div>

      <style>{`
        .logo-carousel {
          --logo-width: 160px;
          --logo-gap: 56px;
          --logo-count: ${logoCount};
          --set-width: calc((var(--logo-width) + var(--logo-gap)) * var(--logo-count));

          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          padding: 2rem 0;
        }

        .logo-track {
          display: flex;
          width: max-content;
          animation: marquee ${animationSpeed}s linear infinite;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .logo-slide {
          flex-shrink: 0;
          width: var(--logo-width);
          height: 100px;
          margin-right: var(--logo-gap);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.5;
          transition: filter 0.3s, opacity 0.3s;
          user-select: none;
          pointer-events: none;
        }

        .logo-slide:hover .logo-img {
          filter: grayscale(0);
          opacity: 1;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(var(--set-width) * -2));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
          }
        }

        @media (max-width: 640px) {
          .logo-carousel {
            --logo-width: 120px;
            --logo-gap: 40px;
          }
          .logo-slide {
            height: 80px;
          }
        }
      `}</style>
    </section>
  );
}
