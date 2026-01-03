import { useState } from "react";

interface LogoCarouselProps {
  logoDirectory?: string;
  logos?: string[];
  animationSpeed?: number;
}

export default function LogoCarousel({
  logoDirectory = "/logos/partners",
  logos,
  animationSpeed = 35
}: LogoCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);

  const inputLogos = logos || [
    "logo-placeholder-1.png",
    "logo-placeholder-2.png",
    "logo-placeholder-3.png",
    "logo-placeholder-4.png",
  ];

  const logoCount = inputLogos.length;
  const setWidth = `calc((var(--logo-width) + var(--logo-gap)) * ${logoCount})`;

  const LogoImage = ({ logo, idx }: { logo: string; idx: number }) => (
    <li className="logo-slide">
      <img
        src={`${logoDirectory}/${logo}`}
        alt={`Partner Logo ${(idx % logoCount) + 1}`}
        className="logo-img"
        loading="lazy"
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
          style={{ "--set-width": setWidth } as React.CSSProperties}
        >
          <ul
            className="logo-track logo-track-animated"
            style={{
              animationPlayState: isHovered ? 'paused' : 'running',
              "--animation-speed": `${animationSpeed}s`,
            } as React.CSSProperties}
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
    </section>
  );
}
