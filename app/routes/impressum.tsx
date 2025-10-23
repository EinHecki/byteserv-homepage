import type { Route } from "./+types/impressum";
import { Link } from "react-router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Impressum - Naumann Tech Solutions" },
    { name: "description", content: "Impressum und rechtliche Informationen von Naumann Tech Solutions." },
    { name: "robots", content: "noindex, follow" },
  ];
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <span>←</span> Zurück zur Startseite
          </Link>

          <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">Impressum</h1>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 mt-8">Angaben gemäß § 5 DDG</h2>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                <p className="text-gray-100 mb-3 text-lg"><strong>Darian Naumann</strong></p>
                <p className="text-gray-300 leading-relaxed mb-2">Maxstraße 37</p>
                <p className="text-gray-300 leading-relaxed">53111 Bonn</p>
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-6">Vertreten durch:</h3>
              <p className="text-gray-300 leading-relaxed mb-6">Darian Naumann</p>

              <h3 className="text-xl font-semibold mb-4 mt-6">Kontakt:</h3>
              <div className="text-gray-300 leading-relaxed mb-6 space-y-2">
                <p>
                  Telefon:{" "}
                  <a href="tel:015678574224" className="text-blue-400 hover:text-blue-300">
                    0156 7857 4224
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:hallo@naumann-tech.de" className="text-blue-400 hover:text-blue-300">
                    hallo@naumann-tech.de
                  </a>
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-6">Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</h3>
              <p className="text-gray-300 leading-relaxed mb-6">DE454667674</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 mt-12">Haftung für Inhalte</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Wir haben die Inhalte auf unserer Website mit größter Sorgfalt erstellt. Dennoch können wir keine Gewähr für
                die Richtigkeit, Vollständigkeit oder Aktualität übernehmen. Laut § 7 Abs. 1 TMG sind wir für eigene Inhalte
                auf dieser Seite nach den allgemeinen Gesetzen verantwortlich. Gemäß §§ 8 bis 10 TMG sind wir jedoch nicht
                verpflichtet, übermittelte oder gespeicherte Informationen Dritter zu überwachen oder nach Hinweisen auf
                rechtswidrige Tätigkeiten zu forschen. Sobald uns konkrete Rechtsverstöße bekannt werden, entfernen wir die
                entsprechenden Inhalte selbstverständlich umgehend.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 mt-12">Haftung für Links</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Unsere Website enthält möglicherweise Links zu externen Webseiten Dritter. Auf deren Inhalte haben wir keinen
                Einfluss und übernehmen dafür keine Verantwortung. Zum Zeitpunkt der Verlinkung haben wir die verlinkten
                Seiten auf mögliche Rechtsverstöße überprüft – solche waren zu diesem Zeitpunkt nicht erkennbar. Eine
                dauerhafte inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung
                nicht zumutbar. Sollten uns Rechtsverletzungen bekannt werden, entfernen wir die entsprechenden Links
                unverzüglich.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 mt-12">Urheberrecht</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Die auf dieser Website veröffentlichten Inhalte und Werke wurden – soweit nicht anders gekennzeichnet – von
                uns selbst erstellt und unterliegen dem deutschen Urheberrecht. Jede Art der Nutzung außerhalb der
                gesetzlichen Schranken – etwa Vervielfältigung, Bearbeitung oder Verbreitung – bedarf unserer vorherigen
                schriftlichen Zustimmung. Inhalte Dritter sind als solche gekennzeichnet. Wenn Sie auf eine
                Urheberrechtsverletzung aufmerksam werden, informieren Sie uns bitte. Wir werden derartige Inhalte umgehend
                entfernen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 mt-12">Datenschutz</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sie können unsere Website in der Regel nutzen, ohne personenbezogene Daten anzugeben. Wenn wir dennoch
                personenbezogene Daten wie Name oder E-Mail-Adresse erheben, erfolgt dies stets auf freiwilliger Basis. Diese
                Daten geben wir ohne Ihre ausdrückliche Zustimmung nicht weiter.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Bitte beachten Sie: Die Datenübertragung im Internet (z. B. per E-Mail) kann Sicherheitslücken aufweisen. Ein
                vollständiger Schutz vor dem Zugriff Dritter ist leider nicht möglich.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Der Nutzung unserer Kontaktdaten aus dem Impressum zur unaufgeforderten Werbung widersprechen wir
                ausdrücklich. Bei Zuwiderhandlung – etwa durch Spam-Mails – behalten wir uns rechtliche Schritte vor.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Weitere Informationen finden Sie in unserer{" "}
                <Link to="/datenschutz" className="text-blue-400 hover:text-blue-300 underline">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 mt-12">Streitbeilegung</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sie erreichen uns hierzu über die oben genannte E-Mail-Adresse.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Wir sind jedoch nicht verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
