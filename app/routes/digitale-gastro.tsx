import type { Route } from "./+types/digitale-gastro";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Digitale Gastro - ByteServ" },
    { name: "description", content: "Digitale Lösungen für Restaurants: Tischreservierung, Self-Order-Systeme, digitale Speisekarten, Gutscheine und HACCP-Protokollierung." },
    { name: "keywords", content: "Digitale Gastronomie, Tischreservierung, Self-Order, QR-Code Bestellung, Digitale Speisekarte, Restaurant Software" },
  ];
}

export default function DigitaleGastro() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              Digitale Gastronomie
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ein Restaurant ist ein Ort, an dem Menschen zusammenkommen, ob jung und alt, mit Freunden oder mit der ganzen Familie.
              Damit Sie sich voll und ganz auf Ihre Gäste konzentrieren können, sorgen unsere digitalen Lösungen dafür,
              dass alles reibungslos funktioniert.
            </p>
          </div>

          {/* Intro Quote */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 mb-16 text-center">
            <p className="text-2xl text-white font-semibold mb-4">
              Von dem ersten Kontakt mit dem Gast bis zum Abschied mit einem zufriedenen Lächeln am Tisch.
            </p>
            <p className="text-lg text-gray-400">
              Angefangen von dem ersten Kontakt mit dem Gast bis zum Abschied mit einem zufriedenen Lächeln am Tisch.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-8 mb-16">
            {/* Tischreservierung */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-5xl mb-4">📅</div>
                  <h2 className="text-3xl font-bold mb-4">Digitale Tischreservierungssysteme</h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Gastfreundschaft beginnt bereits vor dem ersten Besuch in Ihrem Lokal. Bieten Sie mit uns
                    Ihren Gästen eine einfache und schnelle Möglichkeit zur Tischreservierung online.
                    Verwalten Sie kinderleicht Ihre freien Plätze und reduzieren gleichzeitig den Aufwand für Ihr Personal.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-4 text-xl">Die wichtigsten Vorteile im Überblick</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-xl">✓</span>
                      <span>Schnelle und einfache Planung der Reservierungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-xl">✓</span>
                      <span>Multikanalfähigkeit: Gäste können online, über Ihre Webseite, Telefon, KI Assistenten oder persönlich vor Ort einen Tisch reservieren</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-xl">✓</span>
                      <span>Erinnerungen und Bestätigungen: Vermeidung von „No-Shows" in Ihrem Restaurant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-xl">✓</span>
                      <span>Einfache Verwaltung an einem Ort inkl. Dynamischer Tischplanung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-xl">✓</span>
                      <span>Auf Wunsch mit Vorbestellung von Gerichten oder Menüs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Digitale Kreidetafeln */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 bg-white/5 border border-white/10 rounded-2xl p-6">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                    alt="Digitale Displays"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-5xl mb-4">📺</div>
                  <h2 className="text-3xl font-bold mb-4">Digitale Kreidetafeln</h2>
                  <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    Sie haben oft wechselnde Angebote oder möchten auf zeitlich begrenzte Aktionen
                    (wie z.B. die Happy Hour) in Ihrem Restaurant aufmerksam machen?
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Wir bieten die digitale Alternative zur klassischen Kreidetafel und bieten eine
                    TV Bildschirm basierte Alternative. Sie können sowohl im Restaurant als auch im Internet
                    mit Ihren Produkten und Ihren tagesaktuellen Angeboten werben. Nutzen Sie hier für die
                    Übertragung unsere Kassensysteme oder nehmen Sie Einstellung bequem im Internet/von zu Hause vor.
                  </p>
                </div>
              </div>
            </div>

            {/* Self-Order */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">📱</div>
                <h2 className="text-3xl font-bold mb-4">Self-Order und Take-Away</h2>
                <p className="text-xl text-white font-semibold mb-6">
                  Ihre Gäste möchten direkt am Tisch bestellen? Kein Problem!
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">QR-Code Bestellung am Tisch</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Mit unserer Self-Order-Lösung ermöglichen Sie eine bequeme, selbstständige Bestellung
                    inklusive Zahlung am Platz. Dafür stellen wir Ihren Gästen ein digitales Abbild Ihrer
                    Speisekarte bereit.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Auf Wunsch in mehreren Sprachen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Automatisch gepflegt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Intuitive Bedienung</span>
                    </li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-4">
                    Ideal für große Außenbereiche, Biergärten oder weitläufige Gastronomieflächen
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Self-Order-Kioske</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Alternativ bieten wir unsere Self-Order-Kioske an: zentrale Bestellstationen mit Touchscreen,
                    an denen Ihre Gäste ihre Bestellung eigenständig aufgeben können – modern, effizient und unkompliziert.
                  </p>
                  <p className="text-white font-semibold mt-4">
                    Beide Systeme lassen sich auch für den Take-Away-Betrieb nutzen!
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    Gäste bestellen und bezahlen digital, erhalten eine Abholnummer und können ihre Bestellung einfach mitnehmen.
                  </p>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-2xl p-6">
                <p className="text-lg text-white font-semibold">
                  So sparen Sie Zeit, entlasten Ihr Team und schaffen gleichzeitig ein rundum zeitgemäßes Gästeerlebnis.
                </p>
              </div>
            </div>

            {/* Gutscheine */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4">🎁</div>
              <h2 className="text-3xl font-bold mb-4">Digitale Gutscheine</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Gutscheine für einen Restaurantbesuch sind immer ein besonderes Geschenk für die Liebsten eines Gasts.
                Verwalten Sie mit unserer Gutscheinlösung digital Ihre physischen und digitalen Gutscheine.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">
                    Verwalten, verkaufen oder erstellen Sie Ihre Gutscheine selbst, direkt über die Webseite oder vor Ort.
                  </p>
                  <p className="text-white font-semibold">
                    Ob als Geschenk, Treuebonus oder als Promoaktion: Die Gutscheine sind mit unseren Kassensystemen verknüpft.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-white font-semibold mb-2">Ihre Vorteile:</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Kein Chaos in Tabellen und Datenbanken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Einfache und praktikable Lösungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Automatische Verwaltung und Einlösung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* HACCP */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4">📋</div>
              <h2 className="text-3xl font-bold mb-4">Digitale Protokollierung / HACCP</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nehmen Sie Abschied von Papier und Stift und verwalten Sie Reinigungsprozesse und
                Temperaturprotokollierung digital. Mit vorgefertigten Checklisten und sicherer Speicherung in der Cloud.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Sprechen Sie uns gern an!</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Wir beraten Sie ausführlich zu allen digitalen Gastro-Lösungen und finden die perfekte Kombination für Ihren Betrieb.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                Jetzt anfragen
              </a>
              <a
                href="/kassensysteme"
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Kassensysteme ansehen
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
