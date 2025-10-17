import type { Route } from "./+types/webentwicklung";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Webentwicklung - ByteServ IT Solutions" },
    { name: "description", content: "Professionelle Webentwicklung für Restaurants und Mittelstand. Individuelle Websites mit Online-Bestellsystem und Integration Ihrer Kassensysteme." },
    { name: "keywords", content: "Webentwicklung, Website erstellen, Online-Bestellsystem, Restaurant Website, Digitale Speisekarte, Liefersystem" },
  ];
}

export default function Webentwicklung() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              Webentwicklung nach Maß
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Eine Webseite ist die digitale Visitenkarte Ihres Restaurants und repräsentiert Sie im Internet.
              Wir bieten keine Lösungen von der Stange, sondern gehen individuell auf Ihre Anforderungen ein.
            </p>
          </div>

          {/* Intro Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-4">Unser Anspruch</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Mit einen hohen Anspruch für Design und Funktionalität setzen wir die Webprojekte unserer Kunden um.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Gleichzeitig integrieren wir hochmoderne Funktionen wie unsere Produkte der „digitalen Gastro"
                  auf Ihren Webauftritt.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-6">
                <h3 className="font-semibold text-white mb-3 text-lg">Was wir bieten:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Maßgeschneidertes Design für Ihre Marke</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Responsive & mobile-optimiert</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>SEO-optimiert für beste Google-Rankings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Integration mit Kassensystemen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Hosting & Support inklusive</span>
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
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-5xl mb-6">🚚</div>
                <h2 className="text-4xl font-bold mb-6">Unser digitales Liefersystem</h2>
                <p className="text-xl text-white font-semibold mb-4">
                  Sie sind bereits auf den gängigen Plattformen aktiv und liefern selbst Bestellungen an Ihre Kunden aus?
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Mit unserem Bestellsystem bieten wir das gleiche Nutzungserlebnis Ihren Kunden, aber auf Ihrer
                  Webseite und unter Ihrer eigenen Regie!
                </p>
                <p className="text-lg text-white font-semibold mb-6">
                  Lösen Sie die Abhängigkeit zu großen Bestellplattformen und wickeln Sie die Bestellungen
                  Ihrer Kunden selbst ab.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-bold text-white mb-4 text-xl">Inkludierte Features:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-white">Digitale Bestellung</p>
                        <p className="text-sm">Auf Ihrer eigenen Website, unter Ihrer Kontrolle</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-white">Integration ins Restaurant</p>
                        <p className="text-sm">Direkte Verbindung zu Ihrem Kassensystem und Küche</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-white">Digitale Zahlung</p>
                        <p className="text-sm">Sichere Online-Bezahlung integriert</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-white">Kommunikationsmanagement</p>
                        <p className="text-sm">Automatische Updates für Ihre Kunden</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/20 rounded-2xl p-6">
                  <p className="text-white font-semibold text-lg mb-2">💰 Sparen Sie Gebühren!</p>
                  <p className="text-gray-300 text-sm">
                    Keine Provisionen an Drittanbieter. Alle Einnahmen bleiben bei Ihnen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Weitere Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4">Digitale Speisekarten</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Interaktive, digitale Speisekarten die Ihre Gäste begeistern. Mit Bildern, Allergenen,
                Nährwertangaben und direkt mit Ihrem Bestellsystem verknüpft.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>In mehreren Sprachen verfügbar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Einfache Aktualisierung vom Backoffice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>QR-Code für kontaktlose Ansicht</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4">Modernes Design</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Wir entwickeln Ihre Website mit modernsten Technologien und Design-Trends.
                Schnell, sicher und benutzerfreundlich.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Individuelles Design nach Ihren Wünschen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Blitzschnelle Ladezeiten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>DSGVO-konform & sicher</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Analytics & Insights</h3>
              <p className="text-gray-300 leading-relaxed">
                Verstehen Sie Ihre Kunden besser mit detaillierten Statistiken und Auswertungen.
                Sehen Sie, was funktioniert und optimieren Sie Ihr Angebot.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold mb-4">Support & Wartung</h3>
              <p className="text-gray-300 leading-relaxed">
                Mit echtem Support sorgen wir dafür, dass Ihre Online-Präsenz zuverlässig
                und praxisnah funktioniert. Wir sind für Sie da, wenn Sie uns brauchen.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Bereit für Ihre neue Website?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Vereinbaren Sie gern einen Termin mit uns für ein unverbindliches Beratungsgespräch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                Jetzt Termin vereinbaren
              </a>
              <a
                href="/digitale-gastro"
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
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
