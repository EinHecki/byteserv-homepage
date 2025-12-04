import type { Route } from "./+types/it-systeme";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  const title = "IT-Systeme & Support Bonn | Netzwerk & Cloud - ByteServ";
  const description = "IT-Lösungen für Mittelstand in Bonn & NRW: Netzwerktechnik, Cloud-Hosting, Hardware-Support & Videoüberwachung. Persönlicher IT-Partner.";
  const url = "https://byteserv.it/it-systeme";
  const image = "https://byteserv.it/og-image.png";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "IT-Systeme Bonn, Netzwerktechnik NRW, IT-Support Köln, Cloud-Hosting, MDM, Videoüberwachung, IT-Infrastruktur Mittelstand, WLAN Installation" },

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
  { rel: "canonical", href: "https://byteserv.it/it-systeme" },
];

export default function ITSysteme() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              IT-Systeme
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Neben unseren angepassten Branchenlösungen für Hotellerie & Gastronomie bieten wir auch die
              Lösungen eines IT-Systemhauses an.
            </p>
          </div>

          {/* Intro */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 mb-16 text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              Wir begleiten Ihr IT Projekt von Anfang an, planen mit Ihnen gemeinsam und setzen das Vorhaben in die Tat um.
            </p>
            <p className="text-lg text-white font-semibold mt-4">
              Unsere Leistungen sind vielfältig, ausgerichtet für den Mittelstand.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Netzwerktechnik */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🌐</div>
              <h2 className="text-2xl font-bold mb-4">Netzwerktechnik</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Wir optimieren und pflegen Ihr Netzwerk – zuverlässig, sicher und leistungsstark.
                Profitieren Sie von Enterprise-Netzwerk- und Sicherheitslösungen aus unserem Haus,
                individuell angepasst an die Anforderungen Ihres Betriebs.
              </p>
              <p className="text-gray-300 mb-6">
                Von der Planung über die Umsetzung bis zur laufenden Betreuung stellen wir sicher,
                dass Ihre IT-Infrastruktur reibungslos funktioniert. Dazu gehören stabile Netzwerkverbindungen,
                Sicherheitslösungen gegen Hackerangriffe und Viren sowie regelmäßige Updates, damit Ihr
                Betrieb jederzeit abgesichert ist.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-white font-semibold mb-2">Gäste-WLAN für Gastronomie:</p>
                <p className="text-sm text-gray-300">
                  Schnelles und sicheres Gäste-WLAN, das Ihre Gäste begeistert, ohne die internen Abläufe
                  zu beeinträchtigen. So verbinden wir effiziente Technik, zufriedene Gäste und sichere
                  Betriebsprozesse in einem durchdachten System.
                </p>
              </div>
            </div>

            {/* Hardware & Support */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🖥️</div>
              <h2 className="text-2xl font-bold mb-4">Hardware & Support</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Wir kümmern uns um Ihre gesamte Hardware, vom PC über Drucker bis zu unseren Kassensystemen.
                Unsere Lösungen sind zuverlässig, langlebig und optimal auf Ihre Arbeitsabläufe abgestimmt.
              </p>
              <p className="text-gray-300 mb-6">
                Dazu bieten wir persönlichen Support und schnelle Hilfe, vor Ort oder per Fernwartung.
                Probleme werden zügig gelöst, damit Ihr Team reibungslos arbeiten kann.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-white font-semibold mb-2">Unser Support umfasst:</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Schnelle Vor-Ort-Hilfe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Remote-Support via Fernwartung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Hardware-Beschaffung & Installation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hosting & Cloud */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">☁️</div>
              <h2 className="text-2xl font-bold mb-4">Hosting, Mailverkehr & Cloud</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Wir bieten zuverlässiges Hosting, sicheren Mailverkehr und flexible Cloudlösungen – alles aus einer Hand.
                Unsere Systeme laufen auf eigener, leistungsstarker Infrastruktur in der EU, sodass Ihre Daten
                DSGVO-konform, sicher und jederzeit verfügbar sind.
              </p>
              <p className="text-gray-300 mb-6">
                Wir setzen dabei auf moderne Open-Source-Technologien, die flexibel, transparent und zuverlässig sind.
                So profitieren Sie von bewährten Lösungen, die sich leicht an Ihre individuellen Anforderungen anpassen
                lassen – ohne Abhängigkeit von externen Anbietern.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-white font-semibold mb-2">Vorteile für Sie:</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Hosting auf eigener Infrastruktur in Deutschland/EU</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Sichere, skalierbare Cloudlösungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Open-Source-Technologien</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>DSGVO-konforme Datenverwaltung</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* MDM */}
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">📱</div>
              <h2 className="text-2xl font-bold mb-4">Mobile Device Management (MDM)</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Mit unserem Mobile Device Management behalten Sie die volle Kontrolle über Smartphones,
                Tablets und andere mobile Endgeräte in Ihrem Unternehmen. Wir sorgen dafür, dass Software,
                Sicherheitsupdates und Zugriffsrechte zentral verwaltet werden – schnell, zuverlässig und unkompliziert.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-white font-semibold mb-2">Vorteile für Sie:</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Zentrale Verwaltung aller mobilen Geräte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Automatische Updates und Sicherheitspatches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Schutz sensibler Unternehmensdaten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Effiziente Bereitstellung neuer Geräte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Kontrolle über Zugriffsrechte und Apps</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Videoüberwachung */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">📹</div>
              <h2 className="text-2xl font-bold mb-4">Überwachungstechnik & Videoüberwachung</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Wir bieten moderne Videoüberwachungslösungen, die Sicherheit, Kontrolle und Transparenz
                für Ihr Unternehmen gewährleisten. Unsere Systeme lassen sich flexibel an Ihre Anforderungen
                anpassen – von einzelnen Kameras bis hin zu kompletten Überwachungssystemen.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-white font-semibold mb-2">Vorteile für Sie:</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Echtzeit-Überwachung Ihrer Räumlichkeiten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Schutz vor Diebstahl, Vandalismus und unbefugtem Zutritt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Aufzeichnung für maximale Sicherheit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Integration in bestehende IT-Strukturen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Skalierbare Lösungen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Bereit für Ihre IT-Transformation?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Lassen Sie uns gemeinsam die perfekte IT-Lösung für Ihr Unternehmen entwickeln!
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
