import type { Route } from "./+types/home";
import { Link } from "react-router";
import PageLayout from "~/components/PageLayout";
import LogoCarousel from "~/components/LogoCarousel";
import ContactForm from "~/components/ContactForm";
import ServiceCard from "~/components/ServiceCard";
import {
  IconPOS,
  IconRestaurant,
  IconCode,
  IconServer,
  IconTarget,
  IconRocket,
  IconHandshake,
  IconArrowRight,
} from "~/components/icons";

export function meta({}: Route.MetaArgs) {
  const title = "IT & Kassensysteme Bonn | Gastronomie & Mittelstand - ByteServ";
  const description = "Ihr IT-Partner in Bonn & NRW: Moderne Kassensysteme, digitale Gastro-Lösungen, Webentwicklung und IT-Support. Kostenlose Beratung anfordern!";
  const url = "https://byteserv.it";
  const image = "https://byteserv.it/og-image.png";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "Kassensysteme Bonn, POS-Systeme NRW, IT-Lösungen Köln, Gastronomie Kassensystem, Digitale Gastro, Webentwicklung Bonn, IT-Support Mittelstand, TSE Kasse, PC-Cash, Digituu" },
    { name: "author", content: "ByteServ" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "ByteServ - IT & Kassensysteme für Gastronomie & Mittelstand" },
    { property: "og:site_name", content: "ByteServ" },
    { property: "og:locale", content: "de_DE" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: "ByteServ - IT & Kassensysteme für Gastronomie & Mittelstand" },

    // Additional SEO
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "googlebot", content: "index, follow" },
    { name: "language", content: "German" },
    { name: "geo.region", content: "DE-NW" },
    { name: "geo.placename", content: "Bonn" },
  ];
}

import type { Route as LinksRoute } from "./+types/home";

export const links: LinksRoute.LinksFunction = () => [
  { rel: "canonical", href: "https://byteserv.it/" },
];

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
        {/* Dezente Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Ihr IT-Partner in der Region</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 pb-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight animate-fade-in-up break-words">
            ByteServ
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed animate-fade-in-up break-words" style={{ animationDelay: '0.1s' }}>
            Ihr All-In-One Partner für IT-Lösungen
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up break-words" style={{ animationDelay: '0.2s' }}>
            Von modernen Kassen&shy;systemen über digitale Gastro-Lösungen bis hin zu professioneller
            Web&shy;entwicklung und IT-Infrastruktur – wir machen Ihr Unternehmen fit für die Zukunft.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#services"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70"
            >
              <span className="flex items-center justify-center gap-2">
                Unsere Leistungen
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:border-white/40"
            >
              <span className="flex items-center justify-center gap-2">
                Kontakt aufnehmen
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-2 leading-tight break-words">
              Unsere Leistungen
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed break-words">
              Spezialisiert auf die Gastronomie und den Mittelstand bieten wir maßgeschneiderte
              IT-Lösungen, die Ihr Business auf das nächste Level bringen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <ServiceCard
              to="/kassensysteme"
              icon={<IconPOS size={48} />}
              title="Kassensysteme"
              description="Moderne POS-Systeme für Gastronomie und Einzelhandel – stationär, mobil oder als Cloud-Lösung. TSE-konform und zukunftssicher."
              features={[
                "Stationäre Kassensysteme",
                "Mobile Touch-Systeme",
                "Cloud-Anbindung",
                "TSE-zertifiziert",
              ]}
            />
            <ServiceCard
              to="/digitale-gastro"
              icon={<IconRestaurant size={48} />}
              title="Digitale Gastro"
              description="Optimieren Sie Ihren Gastro-Betrieb mit digitalen Lösungen: Online-Reservierung, Self-Order-Systeme, digitale Kreidetafeln und mehr."
              features={[
                "Tischreservierungssysteme",
                "Self-Order Terminals",
                "Digitale Speisekarten",
                "HACCP-Protokolle",
              ]}
            />
            <ServiceCard
              to="/webentwicklung"
              icon={<IconCode size={48} />}
              title="Webentwicklung"
              description="Professionelle Websites und Web-Anwendungen – modern, schnell und SEO-optimiert. Von der Visitenkarte bis zum komplexen Liefersystem."
              features={[
                "Individuelle Websites",
                "Online-Shops",
                "Liefersysteme",
                "SEO & Performance",
              ]}
            />
            <ServiceCard
              to="/it-systeme"
              icon={<IconServer size={48} />}
              title="IT-Systeme"
              description="Rundum-IT-Betreuung für Ihr Unternehmen: Netzwerk, Hardware, Cloud-Lösungen, Support und Sicherheit – alles aus einer Hand."
              features={[
                "Netzwerktechnik & WLAN",
                "Hardware & Support",
                "Cloud & Hosting",
                "Videoüberwachung",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why ByteServ */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 pb-2 leading-tight break-words">
              Warum ByteServ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed break-words">
              Wir sind mehr als nur ein IT-Dienstleister – wir sind Ihr Partner für digitale Transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden min-w-0">
              <div className="mb-4 text-blue-400">
                <IconTarget size={40} />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 pb-1 leading-tight break-words">Branchen&shy;kenntnis</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed break-words">
                Spezialisiert auf Gastronomie und Mittelstand verstehen wir Ihre spezifischen
                Anforderungen und Heraus&shy;forderungen.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden min-w-0">
              <div className="mb-4 text-purple-400">
                <IconRocket size={40} />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 pb-1 leading-tight break-words">Moderne Technologie</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed break-words">
                Wir setzen auf zukunfts&shy;sichere Lösungen mit modernsten Technologien –
                damit Sie immer einen Schritt voraus sind.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden min-w-0">
              <div className="mb-4 text-green-400">
                <IconHandshake size={40} />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 pb-1 leading-tight break-words">Persönlicher Support</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed break-words">
                Von der Beratung über die Implementierung bis zum laufenden Support –
                wir sind für Sie da.
              </p>
            </div>
          </div>
        </div>
      </section>

        <LogoCarousel
            logos={[
                "pc-cash_logo.png",
                "digituu_logo.png",
                "HECKEL_logo.png",
                "Partner-Tech_Logo.png",
            ]}
            animationSpeed={35}
        />

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 pb-2 leading-tight break-words">
              Bereit für die digitale Zukunft?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed break-words">
              Kontaktieren Sie uns für ein unverbindliches Beratungs&shy;gespräch.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageLayout>
  );
}
