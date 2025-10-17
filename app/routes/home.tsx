import type { Route } from "./+types/home";
import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ByteServ IT Solutions - IT & Kassensysteme für Gastronomie & Mittelstand" },
    { name: "description", content: "Ihr All-In-One Partner für IT-Lösungen, moderne Kassensysteme, digitale Gastro-Lösungen und Webentwicklung. Von Beratung bis Support – alles aus einer Hand." },
    { name: "keywords", content: "Kassensysteme, POS-Systeme, IT-Lösungen, Gastronomie, Digitale Gastro, Webentwicklung, Cloud, Netzwerktechnik, IT-Support, Mittelstand" },
    { name: "author", content: "ByteServ IT Solutions" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: "ByteServ IT Solutions - IT & Kassensysteme für Gastronomie & Mittelstand" },
    { property: "og:description", content: "Ihr All-In-One Partner für IT-Lösungen, moderne Kassensysteme, digitale Gastro-Lösungen und Webentwicklung. Von Beratung bis Support – alles aus einer Hand." },
    { property: "og:site_name", content: "ByteServ IT Solutions" },
    { property: "og:locale", content: "de_DE" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "ByteServ IT Solutions - IT & Kassensysteme für Gastronomie & Mittelstand" },
    { name: "twitter:description", content: "Ihr All-In-One Partner für IT-Lösungen, moderne Kassensysteme, digitale Gastro-Lösungen und Webentwicklung." },

    // Additional SEO
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "language", content: "German" },
    { name: "revisit-after", content: "7 days" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

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

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 pb-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight animate-fade-in-up">
            ByteServ IT Solutions
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Ihr All-In-One Partner für IT-Lösungen
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Von modernen Kassensystemen über digitale Gastro-Lösungen bis hin zu professioneller
            Webentwicklung und IT-Infrastruktur – wir machen Ihr Unternehmen fit für die Zukunft.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#services"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70"
            >
              <span className="flex items-center justify-center gap-2">
                Unsere Leistungen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:border-white/40"
            >
              <span className="flex items-center justify-center gap-2">
                Kontakt aufnehmen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div className="absolute top-1/4 left-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '0s' }}>💳</div>
            <div className="absolute top-1/3 right-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🍽️</div>
            <div className="absolute bottom-1/4 left-20 text-4xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>💻</div>
            <div className="absolute bottom-1/3 right-20 text-4xl opacity-20 animate-float" style={{ animationDelay: '3s' }}>🖥️</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-2 leading-tight">
              Unsere Leistungen
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Spezialisiert auf die Gastronomie und den Mittelstand bieten wir maßgeschneiderte
              IT-Lösungen, die Ihr Business auf das nächste Level bringen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Kassensysteme */}
            <Link
              to="/kassensysteme"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:border-white/20"
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">💳</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 pb-1 leading-tight">Kassensysteme</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Moderne POS-Systeme für Gastronomie und Einzelhandel – stationär, mobil oder als Cloud-Lösung.
                TSE-konform und zukunftssicher.
              </p>
              <ul className="space-y-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Stationäre Kassensysteme
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Mobile Touch-Systeme
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Cloud-Anbindung
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> TSE-zertifiziert
                </li>
              </ul>
              <div className="text-blue-400 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm sm:text-base">
                Mehr erfahren <span>→</span>
              </div>
            </Link>

            {/* Digitale Gastro */}
            <Link
              to="/digitale-gastro"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:border-white/20"
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🍽️</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 pb-1 leading-tight">Digitale Gastro</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Optimieren Sie Ihren Gastro-Betrieb mit digitalen Lösungen: Online-Reservierung,
                Self-Order-Systeme, digitale Kreidetafeln und mehr.
              </p>
              <ul className="space-y-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Tischreservierungssysteme
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Self-Order Terminals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Digitale Speisekarten
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> HACCP-Protokolle
                </li>
              </ul>
              <div className="text-blue-400 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm sm:text-base">
                Mehr erfahren <span>→</span>
              </div>
            </Link>

            {/* Webentwicklung */}
            <Link
              to="/webentwicklung"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:border-white/20"
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">💻</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 pb-1 leading-tight">Webentwicklung</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Professionelle Websites und Web-Anwendungen – modern, schnell und SEO-optimiert.
                Von der Visitenkarte bis zum komplexen Liefersystem.
              </p>
              <ul className="space-y-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Individuelle Websites
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Online-Shops
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Liefersysteme
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> SEO & Performance
                </li>
              </ul>
              <div className="text-blue-400 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm sm:text-base">
                Mehr erfahren <span>→</span>
              </div>
            </Link>

            {/* IT-Systeme */}
            <Link
              to="/it-systeme"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:border-white/20"
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🖥️</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 pb-1 leading-tight">IT-Systeme</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Rundum-IT-Betreuung für Ihr Unternehmen: Netzwerk, Hardware, Cloud-Lösungen,
                Support und Sicherheit – alles aus einer Hand.
              </p>
              <ul className="space-y-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Netzwerktechnik & WLAN
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Hardware & Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Cloud & Hosting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Videoüberwachung
                </li>
              </ul>
              <div className="text-blue-400 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm sm:text-base">
                Mehr erfahren <span>→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why ByteServ */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 pb-2 leading-tight">
              Warum ByteServ?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Wir sind mehr als nur ein IT-Dienstleister – wir sind Ihr Partner für digitale Transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl mb-4">🎯</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pb-1 leading-tight">Branchenkenntnis</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Spezialisiert auf Gastronomie und Mittelstand verstehen wir Ihre spezifischen
                Anforderungen und Herausforderungen.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl mb-4">🚀</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pb-1 leading-tight">Moderne Technologie</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Wir setzen auf zukunftssichere Lösungen mit modernsten Technologien –
                damit Sie immer einen Schritt voraus sind.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl mb-4">🤝</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pb-1 leading-tight">Persönlicher Support</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Von der Beratung über die Implementierung bis zum laufenden Support –
                wir sind für Sie da.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 pb-2 leading-tight">
              Bereit für die digitale Zukunft?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContactForm() {
  return (
    <form
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
          fullName: formData.get("fullName"),
          email: formData.get("email"),
          message: formData.get("message"),
        };

        try {
          const response = await fetch("/api/contact/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          const result = await response.json();

          if (result.ok) {
            alert("Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.");
            e.currentTarget.reset();
          } else {
            alert(result.error || "Es gab ein Problem beim Versenden.");
          }
        } catch (error) {
          alert("Es gab ein Problem beim Versenden. Bitte versuchen Sie es später erneut.");
        }
      }}
    >
      <div className="space-y-5 sm:space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
            Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-500"
            placeholder="Ihr vollständiger Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-500"
            placeholder="ihre@email.de"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none placeholder:text-gray-500"
            placeholder="Beschreiben Sie Ihr Anliegen..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/30"
        >
          Nachricht senden
        </button>
      </div>
    </form>
  );
}
