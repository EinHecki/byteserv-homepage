import type { Route } from "./+types/webentwicklung";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  const title = "Webentwicklung Bonn | Website & Online-Shop - ByteServ";
  const description = "Professionelle Webentwicklung in Bonn & NRW: Websites, Online-Shops, Liefersysteme & Kassensystem-Integration. SEO-optimiert & modern.";
  const url = "https://byteserv.it/webentwicklung";
  const image = "https://byteserv.it/og-image.png";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "Webentwicklung Bonn, Website erstellen NRW, Online-Shop Köln, Restaurant Website, Liefersystem, Webdesign Mittelstand, SEO Bonn" },

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
  { rel: "canonical", href: "https://byteserv.it/webentwicklung" },
];

export default function Webentwicklung() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight break-words">
              Web&shy;entwicklung nach Maß
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed break-words">
              Eine Webseite ist die digitale Visitenkarte Ihres Restaurants und repräsentiert Sie im Internet.
              Wir bieten keine Lösungen von der Stange, sondern gehen individuell auf Ihre Anforderungen ein.
            </p>
          </div>

          {/* Intro Section */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20 items-center">
            <div className="space-y-6 min-w-0">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 break-words">Unser Anspruch</h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 break-words">
                  Mit einen hohen Anspruch für Design und Funktionalität setzen wir die Webprojekte unserer Kunden um.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed break-words">
                  Gleichzeitig integrieren wir hochmoderne Funktionen wie unsere Produkte der „digitalen Gastro"
                  auf Ihren Webauftritt.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-6 overflow-hidden">
                <h3 className="font-semibold text-white mb-3 text-base sm:text-lg break-words">Was wir bieten:</h3>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                    <span className="break-words">Maßgeschneidertes Design für Ihre Marke</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                    <span className="break-words">Responsive & mobile-optimiert</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                    <span className="break-words">SEO-optimiert für beste Google-Rankings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                    <span className="break-words">Integration mit Kassensystemen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                    <span className="break-words">Hosting & Support inklusive</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Webentwicklung"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Hauptfeature: Liefersystem */}
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="min-w-0">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">🚚</div>
                <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 break-words">Unser digitales Liefer&shy;system</h2>
                <p className="text-base sm:text-xl text-white font-semibold mb-4 break-words">
                  Sie sind bereits auf den gängigen Plattformen aktiv und liefern selbst Bestellungen an Ihre Kunden aus?
                </p>
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed break-words">
                  Mit unserem Bestellsystem bieten wir das gleiche Nutzungserlebnis Ihren Kunden, aber auf Ihrer
                  Webseite und unter Ihrer eigenen Regie!
                </p>
                <p className="text-base sm:text-lg text-white font-semibold mb-4 sm:mb-6 break-words">
                  Lösen Sie die Abhängigkeit zu großen Bestell&shy;plattformen und wickeln Sie die Bestellungen
                  Ihrer Kunden selbst ab.
                </p>
              </div>

              <div className="space-y-4 min-w-0">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 overflow-hidden">
                  <h3 className="font-bold text-white mb-4 text-lg sm:text-xl break-words">Inkludierte Features:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-lg sm:text-xl flex-shrink-0">✓</span>
                      <div className="min-w-0">
                        <p className="font-semibold text-white text-sm sm:text-base break-words">Digitale Bestellung</p>
                        <p className="text-xs sm:text-sm break-words">Auf Ihrer eigenen Website, unter Ihrer Kontrolle</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-lg sm:text-xl flex-shrink-0">✓</span>
                      <div className="min-w-0">
                        <p className="font-semibold text-white text-sm sm:text-base break-words">Integration ins Restaurant</p>
                        <p className="text-xs sm:text-sm break-words">Direkte Verbindung zu Ihrem Kassensystem und Küche</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-lg sm:text-xl flex-shrink-0">✓</span>
                      <div className="min-w-0">
                        <p className="font-semibold text-white text-sm sm:text-base break-words">Digitale Zahlung</p>
                        <p className="text-xs sm:text-sm break-words">Sichere Online-Bezahlung integriert</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-lg sm:text-xl flex-shrink-0">✓</span>
                      <div className="min-w-0">
                        <p className="font-semibold text-white text-sm sm:text-base break-words">Kommunikations&shy;management</p>
                        <p className="text-xs sm:text-sm break-words">Automatische Updates für Ihre Kunden</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/20 rounded-2xl p-4 sm:p-6 overflow-hidden">
                  <p className="text-white font-semibold text-base sm:text-lg mb-2 break-words">💰 Sparen Sie Gebühren!</p>
                  <p className="text-gray-300 text-xs sm:text-sm break-words">
                    Keine Provisionen an Drittanbieter. Alle Einnahmen bleiben bei Ihnen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Weitere Features */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden min-w-0">
              <div className="text-3xl sm:text-4xl mb-4">📱</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Digitale Speise&shy;karten</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 break-words">
                Interaktive, digitale Speisekarten die Ihre Gäste begeistern. Mit Bildern, Allergenen,
                Nährwertangaben und direkt mit Ihrem Bestellsystem verknüpft.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                  <span className="break-words">In mehreren Sprachen verfügbar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                  <span className="break-words">Einfache Aktualisierung vom Backoffice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                  <span className="break-words">QR-Code für kontaktlose Ansicht</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden min-w-0">
              <div className="text-3xl sm:text-4xl mb-4">🎨</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Modernes Design</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 break-words">
                Wir entwickeln Ihre Website mit modernsten Technologien und Design-Trends.
                Schnell, sicher und benutzerfreundlich.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                  <span className="break-words">Individuelles Design nach Ihren Wünschen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                  <span className="break-words">Blitzschnelle Ladezeiten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                  <span className="break-words">DSGVO-konform & sicher</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden min-w-0">
              <div className="text-3xl sm:text-4xl mb-4">📊</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Analytics & Insights</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed break-words">
                Verstehen Sie Ihre Kunden besser mit detaillierten Statistiken und Auswertungen.
                Sehen Sie, was funktioniert und optimieren Sie Ihr Angebot.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden min-w-0">
              <div className="text-3xl sm:text-4xl mb-4">🛠️</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Support & Wartung</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed break-words">
                Mit echtem Support sorgen wir dafür, dass Ihre Online-Präsenz zuverlässig
                und praxisnah funktioniert. Wir sind für Sie da, wenn Sie uns brauchen.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 text-center overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 break-words">Bereit für Ihre neue Website?</h3>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 break-words">
              Vereinbaren Sie gern einen Termin mit uns für ein unverbindliches Beratungs&shy;gespräch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-6 sm:px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Jetzt Termin vereinbaren
              </a>
              <a
                href="/digitale-gastro"
                className="px-6 sm:px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                Digitale Gastro-Lösungen
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
