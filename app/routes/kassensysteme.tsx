import type { Route } from "./+types/kassensysteme";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kassensysteme - ByteServ IT Solutions" },
    { name: "description", content: "Moderne Kassensysteme für Gastronomie und Einzelhandel. Stationär, mobil oder in der Cloud - individuell konfiguriert nach Ihren Anforderungen." },
    { name: "keywords", content: "Kassensysteme, POS-Systeme, Gastronomie Kasse, Mobile Kassensysteme, Cloud Kasse, PC-Cash" },
  ];
}

export default function Kassensysteme() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              Unsere Kassenlösungen
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Eine Kasse von ByteServ ist mehr als ein einfaches Abrechnungssystem – wir passen individuell
              unsere Lösungen an Ihrem Betrieb an, verbunden mit persönlicher Beratung & Service.
            </p>
          </div>

          {/* Intro */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 mb-16">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Wir begleiten Sie von der Beratung, der Planung, der Umsetzung, der Schulung bis hin zu Inbetriebnahme.
              Dabei setzen wir ein individuell mit Ihnen geplantes Konzept um, damit Sie sich auf Ihr Geschäft konzentrieren können.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Wir möchten Ihnen Ihr System mehr als Werkzeug für Ihren Betrieb als eine zwingende Notwendigkeit umsetzen.
            </p>
            <p className="text-lg text-white font-semibold">
              Wir möchten Ihnen hier einen kurzen Ausschnitt aus möglichen Umsetzungen geben, welche wir bereits
              für unsere Kunden umgesetzt haben:
            </p>
          </div>

          {/* Hauptprodukte */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Stationäre Kassen */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt="Stationäre Kassensysteme"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Stationäre Kassensysteme</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Wir bieten stationäre Kassensysteme für Ihren Betrieb an. Individuell konfiguriert,
                ob für die Gastronomie, den Einzelhandel oder Ihre ganz individuellen Anforderungen.
              </p>
              <p className="text-gray-300 mb-4">
                Natürlich konform zu den neuesten rechtlichen Anforderungen, auf individueller Hardware
                sowie nach Ihren ganz persönlichen Vorstellungen!
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-sm text-gray-400">
                  Hierbei setzen wir auf die bewährten und seit langer Zeit etablierten Software-Lösungen
                  von <span className="text-white font-semibold">PC-Cash</span> mit sorgfältig ausgesuchter
                  Hardware unserer Partner.
                </p>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Ob Einzelkasse, Netzwerkverbund oder mehrere Filialen? Wir freuen uns über Ihre Anfrage!
              </p>
            </div>

            {/* Mobile Systeme */}
            <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80"
                  alt="Mobile Touchsysteme"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile Touchsysteme</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-xl font-semibold text-white">
                  Bonieren & Kassieren – direkt am Tisch!
                </p>
                <p className="leading-relaxed">
                  Mit unseren mobilen Lösungen können Sie mit einem Gerät Bestellungen aufnehmen und
                  den Gast direkt abrechnen.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="font-semibold text-white mb-2">Highlights:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Kartenzahlung am Tisch ohne separates Terminal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Offenes System - Sie wählen die Hardware</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Flexible Funktionen nach Ihren Wünschen</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Wir bieten ein offenes System an. Sie entscheiden, welche Hardware Sie nutzen möchten
                  und welche Funktion Ihr mobiles Touchsystem erfüllen darf.
                </p>
              </div>
            </div>

            {/* Cloud */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Cloud-Verbindung"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Verbindung in die Cloud</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-xl font-semibold text-white">
                  Sie möchten Ihren Betrieb von zu Hause verwalten?
                </p>
                <p className="leading-relaxed">
                  Auch das ist mit unseren Kassen möglich!
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="font-semibold text-white mb-2">Cloud-Vorteile:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Jederzeit Überblick über Ihren Betrieb</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Verwaltung bequem von zu Hause</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Echtzeitdaten und Auswertungen</span>
                    </li>
                  </ul>
                </div>
                <p className="font-semibold text-white text-lg">
                  Und wenn Sie Hilfe benötigen: Wir lassen Sie nicht im Regen stehen und sind für Sie da!
                </p>
              </div>
            </div>
          </div>

          {/* Cross-Sell */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 text-center">
            <p className="text-xl text-gray-300 mb-6">
              Entdecken Sie auch unsere digitalen Gastrolösungen – auf Wunsch verbinden wir diese gern mit unseren Kassensystemen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/digitale-gastro"
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                Digitale Gastro entdecken
              </a>
              <a
                href="/#contact"
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
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
