import type { Route } from "./+types/kassensysteme";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  const title = "Kassensysteme Gastronomie & Einzelhandel | POS Bonn - ByteServ";
  const description = "TSE-konforme Kassensysteme für Gastronomie & Einzelhandel in Bonn & NRW. Stationär, mobil oder Cloud - mit PC-Cash & persönlicher Beratung.";
  const url = "https://byteserv.it/kassensysteme";
  const image = "https://byteserv.it/og-image.png";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "Kassensysteme Bonn, POS-Systeme Gastronomie, TSE Kasse NRW, Mobile Kassensysteme, Cloud Kasse, PC-Cash, Gastro Kasse Köln, Einzelhandel Kasse" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "ByteServ" },
    { property: "og:locale", content: "de_DE" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },

    // SEO
    { name: "robots", content: "index, follow" },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: "https://byteserv.it/kassensysteme" },
];

export default function Kassensysteme() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight break-words">
              Unsere Kassenlösungen
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed break-words">
              Eine Kasse von ByteServ ist mehr als ein einfaches Abrechnungs&shy;system – wir passen individuell
              unsere Lösungen an Ihrem Betrieb an, verbunden mit persönlicher Beratung & Service.
            </p>
          </div>

          {/* Intro */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 overflow-hidden">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 break-words">
              Wir begleiten Sie von der Beratung, der Planung, der Umsetzung, der Schulung bis hin zu Inbetriebnahme.
              Dabei setzen wir ein individuell mit Ihnen geplantes Konzept um, damit Sie sich auf Ihr Geschäft konzentrieren können.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 break-words">
              Wir möchten Ihnen Ihr System mehr als Werkzeug für Ihren Betrieb als eine zwingende Notwendigkeit umsetzen.
            </p>
            <p className="text-base sm:text-lg text-white font-semibold break-words">
              Wir möchten Ihnen hier einen kurzen Ausschnitt aus möglichen Umsetzungen geben, welche wir bereits
              für unsere Kunden umgesetzt haben:
            </p>
          </div>

          {/* Hauptprodukte */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Stationäre Kassen */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 overflow-hidden">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img
                  src="/kassensystem-stationaer.jpg"
                  alt="Stationäre Kassensysteme"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Stationäre Kassen&shy;systeme</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 break-words">
                Wir bieten stationäre Kassensysteme für Ihren Betrieb an. Individuell konfiguriert,
                ob für die Gastronomie, den Einzelhandel oder Ihre ganz individuellen Anforderungen.
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-4 break-words">
                Natürlich konform zu den neuesten rechtlichen Anforderungen, auf individueller Hardware
                sowie nach Ihren ganz persönlichen Vorstellungen!
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-xs sm:text-sm text-gray-400 break-words">
                  Hierbei setzen wir auf die bewährten und seit langer Zeit etablierten Software-Lösungen
                  von <span className="text-white font-semibold">PC-Cash</span> mit sorgfältig ausgesuchter
                  Hardware unserer Partner.
                </p>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mt-4 break-words">
                Ob Einzelkasse, Netzwerk&shy;verbund oder mehrere Filialen? Wir freuen uns über Ihre Anfrage!
              </p>
            </div>

            {/* Mobile Systeme */}
            <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 overflow-hidden">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img
                  src="/kassensystem-mobil.jpg"
                  alt="Mobile Touchsysteme"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Mobile Touch&shy;systeme</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg sm:text-xl font-semibold text-white break-words">
                  Bonieren & Kassieren – direkt am Tisch!
                </p>
                <p className="text-sm sm:text-base leading-relaxed break-words">
                  Mit unseren mobilen Lösungen können Sie mit einem Gerät Bestellungen aufnehmen und
                  den Gast direkt abrechnen.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="font-semibold text-white mb-2 text-sm sm:text-base">Highlights:</p>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className="break-words">Kartenzahlung am Tisch ohne separates Terminal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className="break-words">Offenes System - Sie wählen die Hardware</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className="break-words">Flexible Funktionen nach Ihren Wünschen</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm sm:text-base break-words">
                  Wir bieten ein offenes System an. Sie entscheiden, welche Hardware Sie nutzen möchten
                  und welche Funktion Ihr mobiles Touchsystem erfüllen darf.
                </p>
              </div>
            </div>

            {/* Cloud */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 overflow-hidden">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img
                  src="/kassensystem-cloud.jpg"
                  alt="Cloud-Verbindung"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Verbindung in die Cloud</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg sm:text-xl font-semibold text-white break-words">
                  Sie möchten Ihren Betrieb von zu Hause verwalten?
                </p>
                <p className="text-sm sm:text-base leading-relaxed break-words">
                  Auch das ist mit unseren Kassen möglich!
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="font-semibold text-white mb-2 text-sm sm:text-base">Cloud-Vorteile:</p>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className="break-words">Jederzeit Überblick über Ihren Betrieb</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className="break-words">Verwaltung bequem von zu Hause</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className="break-words">Echtzeitdaten und Auswertungen</span>
                    </li>
                  </ul>
                </div>
                <p className="font-semibold text-white text-base sm:text-lg break-words">
                  Und wenn Sie Hilfe benötigen: Wir lassen Sie nicht im Regen stehen und sind für Sie da!
                </p>
              </div>
            </div>
          </div>

          {/* Cross-Sell */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 text-center overflow-hidden">
            <p className="text-base sm:text-xl text-gray-300 mb-6 break-words">
              Entdecken Sie auch unsere digitalen Gastro&shy;lösungen – auf Wunsch verbinden wir diese gern mit unseren Kassen&shy;systemen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/digitale-gastro"
                className="px-6 sm:px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Digitale Gastro entdecken
              </a>
              <a
                href="/#contact"
                className="px-6 sm:px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                Jetzt anfragen
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
