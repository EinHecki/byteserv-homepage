import {useState} from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export function Welcome() {
    const [consent, setConsent] = useState(false);
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: any) {
        e.preventDefault();
        if (!consent) return;
        setError(null);
        if (!fullName.trim() || !email.trim() || !message.trim()) {
            setError("Bitte füllen Sie alle Felder aus.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
            return;
        }
        setLoading(true);
        try {
            const resp = await fetch("/api/contact/submit", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullName, email, message}),
            });
            const data = await resp.json().catch(() => ({}));
            if (!resp.ok || data?.ok === false) {
                throw new Error(data?.error || "Fehler beim Senden. Bitte versuchen Sie es später erneut.");
            }
            setSubmitted(true);
            setfullName("");
            setEmail("");
            setMessage("");
        } catch (err: any) {
            setError(err?.message || "Unbekannter Fehler");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-black text-white scroll-smooth overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col pt-20">
                {/* Hero Content */}
                <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            IT & Kassensysteme
                        </h1>
                        <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-8 text-gray-300">
                            Systeme für Gastronomie & Mittelstand
                        </p>
                        <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                            Ihr All-In-One Partner für den Mittelstand und Gastronomie. Alles aus einer Hand!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#contact"
                               className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                                Kostenlose Beratung
                            </a>
                            <a href="#services"
                               className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                                Unsere Leistungen
                            </a>
                            <a href="tel:+491234567890"
                               className="px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full font-semibold hover:from-blue-700 hover:to-sky-700 transition-all duration-300">
                                Jetzt anrufen!
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </section>

            {/* Über uns Section */}
            <section id="about-us" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">Wir sind ByteServ!</h2>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                Wir sind ein junges Tech-Unternehmen mit der Mission, den Mittelstand zu digitalisieren.
                                Dabei verbinden wir technische Expertise mit echter, nahbarer Branchenkenntnis aus Mittelstand,
                                Gastronomie und Hotellerie.
                            </p>
                            <p>
                                Wir wissen, wie wichtig zuverlässige Technik, einfache Abläufe und persönlicher Service sind.
                                Genau das ist unser Anspruch: Systeme, die zu Ihrem Unternehmen passen und Ihren Alltag erleichtern
                                – ohne unnötige Komplexität, aber mit echtem Servicegedanken.
                            </p>
                            <p>
                                Denn technische Betreuung, insbesondere in der Gastronomie, bedeutet für uns mehr, als nur ein
                                Kassensystem zu installieren. Es geht darum, Ihre Abläufe zu verstehen, persönlich mit Ihnen
                                zusammenzuarbeiten und Lösungen zu entwickeln, die Ihr gesamtes Unternehmen stärken.
                            </p>
                            <p className="font-semibold text-white">
                                Wir freuen uns darauf, Sie kennenzulernen und auch zukünftig zu unterstützen!
                            </p>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    alt="Team bei der Arbeit"
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section id="services" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Was wir bieten</h2>
                    <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                        Von der Beratung über Installation bis zum Support – alles aus einer Hand
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Beratung */}
                        <a href="#services-detail" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                            <div className="text-5xl mb-6">🤝</div>
                            <h3 className="text-2xl font-bold mb-4">Beratung und Service</h3>
                            <p className="text-gray-400 mb-4">
                                Echte Beratung, persönlicher Service und höchste Qualität. Wir hören zu,
                                verstehen Ihre Abläufe und finden Lösungen, die perfekt zu Ihrem Betrieb passen.
                            </p>
                            <p className="font-semibold text-white">
                                Ziel: Technik, die funktioniert. Abläufe, die einfacher werden. Service, auf den Sie sich verlassen können.
                            </p>
                        </a>

                        {/* Kassensysteme */}
                        <a href="/kassensysteme" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                            <div className="text-5xl mb-6">💳</div>
                            <h3 className="text-2xl font-bold mb-4">Kassensysteme</h3>
                            <p className="text-gray-400 mb-4">
                                Unsere Kassensysteme sind das Gehirn Ihres Betriebs. Reibungslose Abläufe,
                                klare Prozesse und intuitive Bedienung bilden die Basis Ihres Erfolgs.
                            </p>
                            <p className="text-gray-300">
                                Ob Bestellannahme, (Funk)-Bonieren oder Kassieren – unsere Systeme
                                unterstützen Sie zuverlässig im Alltag.
                            </p>
                            <div className="mt-4 text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                                Mehr erfahren →
                            </div>
                        </a>

                        {/* Digitale Gastro */}
                        <a href="/digitale-gastro" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                            <div className="text-5xl mb-6">🍽️</div>
                            <h3 className="text-2xl font-bold mb-4">Digitale Gastro</h3>
                            <p className="text-gray-400 mb-4">
                                Wir bringen Ihr Restaurant ins digitale Zeitalter: digitale Speisekarten,
                                Tischreservierungen, Self-Order-Systeme und moderne Küchenmonitore.
                            </p>
                            <p className="text-gray-300">
                                Unsere digitalen Cloud-Lösungen entlasten Ihr Team, vereinfachen Abläufe
                                und sorgen für ein besonderes Gästeerlebnis.
                            </p>
                            <div className="mt-4 text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                                Mehr erfahren →
                            </div>
                        </a>

                        {/* Webentwicklung */}
                        <a href="/webentwicklung" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                            <div className="text-5xl mb-6">🌐</div>
                            <h3 className="text-2xl font-bold mb-4">Webentwicklung</h3>
                            <p className="text-gray-400 mb-4">
                                Ihre Website ist die digitale Visitenkarte Ihres Restaurants.
                                Wir entwickeln moderne, funktionale Websites mit integrierten Bestellsystemen
                                und digitalen Speisekarten.
                            </p>
                            <p className="text-gray-300">
                                Mit echtem Support sorgen wir dafür, dass Ihre Online-Präsenz zuverlässig
                                und praxisnah funktioniert.
                            </p>
                            <div className="mt-4 text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                                Mehr erfahren →
                            </div>
                        </a>

                        {/* IT-Systeme */}
                        <a href="/it-systeme" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                            <div className="text-5xl mb-6">🖥️</div>
                            <h3 className="text-2xl font-bold mb-4">IT-Systeme</h3>
                            <p className="text-gray-400 mb-4">
                                Wir sorgen dafür, dass Ihr Restaurant digital rundläuft – vom Kassensystem
                                über IT-Infrastruktur bis zum Gäste-WLAN.
                            </p>
                            <p className="text-gray-300">
                                Unsere Lösungen: schnelles WLAN, stabile Netzwerke, Server & Cloud,
                                Datensicherung, Hardwarebetreuung, IT-Support und Sicherheitslösungen.
                            </p>
                            <div className="mt-4 text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                                Mehr erfahren →
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Kassensysteme Detail */}
            <section id="kassen" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Unsere Kassenlösungen</h2>
                    <p className="text-xl text-gray-400 text-center mb-16 max-w-4xl mx-auto">
                        Eine Kasse von ByteServ ist mehr als ein einfaches Abrechnungssystem – wir passen individuell
                        unsere Lösungen an Ihrem Betrieb an, verbunden mit persönlicher Beratung & Service.
                    </p>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {/* Stationäre Kassen */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                                <img
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                                    alt="Stationäre Kassensysteme"
                                    className="w-full h-full object-cover opacity-70"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Stationäre Kassensysteme</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Wir bieten stationäre Kassensysteme für Ihren Betrieb an. Individuell konfiguriert,
                                ob für die Gastronomie, den Einzelhandel oder Ihre ganz individuellen Anforderungen.
                            </p>
                            <p className="text-gray-300 mt-4">
                                Natürlich konform zu den neuesten rechtlichen Anforderungen, auf individueller Hardware
                                sowie nach Ihren ganz persönlichen Vorstellungen!
                            </p>
                            <p className="text-sm text-gray-400 mt-4">
                                Hierbei setzen wir auf die bewährten und seit langer Zeit etablierten Software-Lösungen
                                von PC-Cash mit sorgfältig ausgesuchter Hardware unserer Partner.
                            </p>
                        </div>

                        {/* Mobile Systeme */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-green-900/20 to-teal-900/20">
                                <img
                                    src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&q=80"
                                    alt="Mobile Touchsysteme"
                                    className="w-full h-full object-cover opacity-70"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Mobile Touchsysteme</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Bonieren & Kassieren – direkt am Tisch!
                            </p>
                            <p className="text-gray-300">
                                Mit unseren mobilen Lösungen können Sie mit einem Gerät Bestellungen aufnehmen und
                                den Gast direkt abrechnen. Auf Wunsch auch mit Kartenzahlung am Tisch ohne seperates Terminal.
                            </p>
                            <p className="text-gray-300 mt-4">
                                Wir bieten ein offenes System an. Sie entscheiden, welche Hardware Sie nutzen möchten
                                und welche Funktion Ihr mobiles Touchsystem erfüllen darf.
                            </p>
                        </div>

                        {/* Cloud */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
                                    alt="Cloud-Verbindung"
                                    className="w-full h-full object-cover opacity-70"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Verbindung in die Cloud</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Sie möchten Ihren Betrieb von zu Hause verwalten?
                            </p>
                            <p className="text-gray-300 mb-4">
                                Auch das ist mit unseren Kassen möglich!
                            </p>
                            <p className="text-gray-300 mb-4">
                                Haben Sie jederzeit ein Auge auf Ihren Betrieb und verwalten Sie Ihren Betrieb
                                bequem von zu Hause aus!
                            </p>
                            <p className="font-semibold text-white">
                                Und wenn Sie Hilfe benötigen: Wir lassen Sie nicht im Regen stehen und sind für Sie da!
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-lg text-gray-300 mb-6">
                            Entdecken Sie auch unsere digitalen Gastrolösungen – auf Wunsch verbinden wir diese gern mit unseren Kassensystemen!
                        </p>
                        <a href="#contact" className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                            Jetzt anfragen
                        </a>
                    </div>
                </div>
            </section>

            {/* Digitale Gastro */}
            <section id="digitale-gastro" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Unsere Lösungen für eine digitale Gastronomie</h2>
                    <p className="text-xl text-gray-400 text-center mb-16 max-w-4xl mx-auto">
                        Ein Restaurant ist ein Ort, an dem Menschen zusammenkommen, ob jung und alt, mit Freunden oder mit der ganzen Familie.
                        Damit Sie sich voll und ganz auf Ihre Gäste konzentrieren können, sorgen unsere digitalen Lösungen dafür,
                        dass alles reibungslos funktioniert.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Tischreservierung */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="text-4xl mb-4">📅</div>
                            <h3 className="text-2xl font-bold mb-4">Digitale Tischreservierungssysteme</h3>
                            <p className="text-gray-300 mb-6">
                                Gastfreundschaft beginnt bereits vor dem ersten Besuch in Ihrem Lokal. Bieten Sie mit uns
                                Ihren Gästen eine einfache und schnelle Möglichkeit zur Tischreservierung online.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Schnelle und einfache Planung der Reservierungen</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Multikanalfähigkeit: Online, Webseite, Telefon, KI Assistenten oder persönlich</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Erinnerungen und Bestätigungen: Vermeidung von „No-Shows"</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Einfache Verwaltung an einem Ort inkl. Dynamischer Tischplanung</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Auf Wunsch mit Vorbestellung von Gerichten oder Menüs</span>
                                </li>
                            </ul>
                        </div>

                        {/* Digital Displays */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="text-4xl mb-4">📺</div>
                            <h3 className="text-2xl font-bold mb-4">Digitale Kreidetafeln</h3>
                            <p className="text-gray-300 mb-6">
                                Sie haben oft wechselnde Angebote oder möchten auf zeitlich begrenzte Aktionen
                                (wie z.B. die Happy Hour) in Ihrem Restaurant aufmerksam machen?
                            </p>
                            <p className="text-gray-300">
                                Wir bieten die digitale Alternative zur klassischen Kreidetafel und bieten eine
                                TV Bildschirm basierte Alternative. Sie können sowohl im Restaurant als auch im Internet
                                mit Ihren Produkten und Ihren tagesaktuellen Angeboten werben. Nutzen Sie hier für die
                                Übertragung unsere Kassensysteme oder nehmen Sie Einstellung bequem im Internet/von zu Hause vor.
                            </p>
                        </div>

                        {/* Self-Order */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-2xl font-bold mb-4">Self-Order und Take-Away</h3>
                            <p className="text-gray-300 mb-4">
                                Ihre Gäste möchten direkt am Tisch bestellen? Kein Problem!
                            </p>
                            <p className="text-gray-300 mb-6">
                                Mit unserer Self-Order-Lösung ermöglichen Sie eine bequeme, selbstständige Bestellung
                                inklusive Zahlung am Platz. Dafür stellen wir Ihren Gästen ein digitales Abbild Ihrer
                                Speisekarte bereit. Auf Wunsch in mehreren Sprachen, automatisch gepflegt und mit intuitiver Bedienung.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Die QR-Code-basierte Lösung eignet sich ideal für große Außenbereiche, Biergärten oder
                                weitläufige Gastronomieflächen: ganz ohne zusätzliches Servicepersonal.
                            </p>
                            <p className="text-gray-300">
                                Alternativ bieten wir unsere Self-Order-Kioske an: zentrale Bestellstationen mit Touchscreen,
                                an denen Ihre Gäste ihre Bestellung eigenständig aufgeben können – modern, effizient und unkompliziert.
                            </p>
                        </div>

                        {/* Gutscheine */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="text-4xl mb-4">🎁</div>
                            <h3 className="text-2xl font-bold mb-4">Digitale Gutscheine</h3>
                            <p className="text-gray-300 mb-4">
                                Gutscheine für einen Restaurantbesuch sind immer ein besonderes Geschenk für die Liebsten eines Gasts.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Verwalten Sie mit unserer Gutscheinlösung digital Ihre physischen und digitalen Gutscheine.
                                Verwalten, verkaufen oder erstellen Sie Ihre Gutscheine selbst, direkt über die Webseite oder vor Ort.
                            </p>
                            <p className="text-gray-300">
                                Ob als Geschenk, Treuebonus oder als Promoaktion: Die Gutscheine sind mit unseren Kassensystemen verknüpft.
                                Kein Chaos in Tabellen und Datenbanken sondern einfache und praktikable Lösungen.
                            </p>
                        </div>

                        {/* HACCP */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:col-span-2">
                            <div className="text-4xl mb-4">📋</div>
                            <h3 className="text-2xl font-bold mb-4">Digitale Protokollierung / HACCP</h3>
                            <p className="text-gray-300">
                                Nehmen Sie Abschied von Papier und Stift und verwalten Sie Reinigungsprozesse und
                                Temperaturprotokollierung digital. Mit vorgefertigten Checklisten und sicherer Speicherung in der Cloud.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full font-semibold hover:from-blue-700 hover:to-sky-700 transition-all duration-300 transform hover:scale-105">
                            Jetzt anfragen
                        </a>
                    </div>
                </div>
            </section>

            {/* Webentwicklung */}
            <section id="webentwicklung" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Webentwicklung nach Maß</h2>
                    <p className="text-xl text-gray-400 text-center mb-16 max-w-4xl mx-auto">
                        Eine Webseite ist die digitale Visitenkarte Ihres Restaurants und repräsentiert Sie im Internet.
                        Wir bieten keine Lösungen von der Stange, sondern gehen individuell auf Ihre Anforderungen ein.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-6">
                            <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                    alt="Webentwicklung"
                                    className="w-full h-full object-cover opacity-70"
                                />
                            </div>
                            <p className="text-lg text-gray-300">
                                Mit einen hohen Anspruch für Design und Funktionalität setzen wir die Webprojekte unserer Kunden um.
                            </p>
                            <p className="text-lg text-gray-300">
                                Gleichzeitig integrieren wir hochmoderne Funktionen wie unsere Produkte der „digitalen Gastro"
                                auf Ihren Webauftritt.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="text-4xl mb-4">🚚</div>
                            <h3 className="text-2xl font-bold mb-4">Unser digitales Liefersystem</h3>
                            <p className="text-gray-300 mb-4">
                                Sie sind bereits auf den gängigen Plattformen aktiv und liefern selbst Bestellungen an Ihre Kunden aus?
                            </p>
                            <p className="text-gray-300 mb-6">
                                Mit unseren Bestellsystem bieten wir das gleiche Nutzungserlebnis Ihren Kunden, aber auf Ihrer
                                Webseite und unter Ihrer eigenen Regie! Lösen Sie die Abhängigkeit zu großen Bestellplattformen
                                und wickeln Sie die Bestellungen Ihrer Kunden selbst ab.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Digitale Bestellung auf Ihrer eigenen Website</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Integration in Ihr Restaurant und Kassensystem</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Digitale Zahlung und Kommunikationsmanagement</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="#contact" className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                            Vereinbaren Sie einen Termin
                        </a>
                    </div>
                </div>
            </section>

            {/* IT-Systeme */}
            <section id="it-systeme" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">IT-Systeme</h2>
                    <p className="text-xl text-gray-400 text-center mb-16 max-w-4xl mx-auto">
                        Neben unseren angepassten Branchenlösungen für Hotellerie & Gastronomie bieten wir auch die
                        Lösungen eines IT-Systemhauses an. Wir begleiten Ihr IT Projekt von Anfang an, planen mit Ihnen
                        gemeinsam und setzen das Vorhaben in die Tat um.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Netzwerktechnik */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="text-4xl mb-4">🌐</div>
                            <h3 className="text-2xl font-bold mb-4">Netzwerktechnik</h3>
                            <p className="text-gray-300 mb-4">
                                Wir optimieren und pflegen Ihr Netzwerk – zuverlässig, sicher und leistungsstark.
                                Profitieren Sie von Enterprise-Netzwerk- und Sicherheitslösungen aus unserem Haus,
                                individuell angepasst an die Anforderungen Ihres Betriebs.
                            </p>
                            <p className="text-gray-300">
                                Von der Planung über die Umsetzung bis zur laufenden Betreuung stellen wir sicher,
                                dass Ihre IT-Infrastruktur reibungslos funktioniert.
                            </p>
                        </div>

                        {/* Hardware & Support */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="text-4xl mb-4">🖥️</div>
                            <h3 className="text-2xl font-bold mb-4">Hardware & Support</h3>
                            <p className="text-gray-300 mb-4">
                                Wir kümmern uns um Ihre gesamte Hardware, vom PC über Drucker bis zu unseren Kassensystemen.
                                Unsere Lösungen sind zuverlässig, langlebig und optimal auf Ihre Arbeitsabläufe abgestimmt.
                            </p>
                            <p className="text-gray-300">
                                Dazu bieten wir persönlichen Support und schnelle Hilfe, vor Ort oder per Fernwartung.
                                Probleme werden zügig gelöst, damit Ihr Team reibungslos arbeiten kann.
                            </p>
                        </div>

                        {/* Hosting & Cloud */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="text-4xl mb-4">☁️</div>
                            <h3 className="text-2xl font-bold mb-4">Hosting, Mail & Cloud</h3>
                            <p className="text-gray-300 mb-4">
                                Wir bieten zuverlässiges Hosting, sicheren Mailverkehr und flexible Cloudlösungen – alles aus einer Hand.
                                Unsere Systeme laufen auf eigener, leistungsstarker Infrastruktur in der EU.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Hosting in Deutschland/EU</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>DSGVO-konforme Speicherung</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Open-Source-Technologien</span>
                                </li>
                            </ul>
                        </div>

                        {/* MDM */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-2xl font-bold mb-4">Mobile Device Management</h3>
                            <p className="text-gray-300 mb-4">
                                Mit unserem Mobile Device Management behalten Sie die volle Kontrolle über Smartphones,
                                Tablets und andere mobile Endgeräte in Ihrem Unternehmen.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Zentrale Geräteverwaltung</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Automatische Updates</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Schutz sensibler Daten</span>
                                </li>
                            </ul>
                        </div>

                        {/* Videoüberwachung */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="text-4xl mb-4">📹</div>
                            <h3 className="text-2xl font-bold mb-4">Videoüberwachung</h3>
                            <p className="text-gray-300 mb-4">
                                Wir bieten moderne Videoüberwachungslösungen, die Sicherheit, Kontrolle und Transparenz
                                für Ihr Unternehmen gewährleisten.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Echtzeit-Überwachung</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Schutz vor Diebstahl</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Skalierbare Lösungen</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full font-semibold hover:from-blue-700 hover:to-sky-700 transition-all duration-300 transform hover:scale-105">
                            Jetzt anfragen
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Jetzt kontaktieren!</h2>
                    <p className="text-xl text-gray-400 text-center mb-16">
                        Wir freuen uns auf Ihre Anfrage
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-4xl">📬</div>
                                <h3 className="text-2xl font-semibold">So erreichen Sie uns</h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">✉️</span>
                                    <a href="mailto:hello@byteserv.it"
                                       className="text-lg underline decoration-white/40 hover:decoration-white">hello@byteserv.it</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">📞</span>
                                    <a href="tel:+491234567890"
                                       className="text-lg underline decoration-white/40 hover:decoration-white">+49 123 456 7890</a>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm">
                                    Antwort i.d.R. &lt; 24h
                                </span>
                                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm">
                                    Mo–Fr 9–18 Uhr
                                </span>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                            <h3 className="text-2xl font-semibold mb-4">Kostenlose Erstberatung</h3>
                            <p className="mb-6 text-gray-300">Beschreiben Sie kurz Ihr Anliegen – wir melden uns zeitnah zurück.</p>

                            {submitted ? (
                                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
                                    <div className="text-xl font-semibold mb-2">Vielen Dank! ✅</div>
                                    <p className="text-gray-300">Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in der Regel innerhalb von 24 Stunden.</p>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={onSubmit}>
                                    <input
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                                        placeholder="Name"
                                        value={fullName}
                                        onChange={(e) => setfullName(e.target.value)}
                                    />
                                    <input
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                                        placeholder="E-Mail"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <textarea
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                                        placeholder="Nachricht"
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    {error && (
                                        <div className="text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-xl px-4 py-3">
                                            {error}
                                        </div>
                                    )}
                                    <div className="flex items-start gap-3">
                                        <input
                                            id="privacy"
                                            type="checkbox"
                                            checked={consent}
                                            onChange={(e) => setConsent(e.target.checked)}
                                            className="mt-1 h-4 w-4 rounded"
                                            required
                                        />
                                        <label htmlFor="privacy" className="text-sm text-gray-300">
                                            Ich habe die <button type="button"
                                                                 onClick={() => document.querySelector('footer')?.scrollIntoView({behavior: 'smooth'})}
                                                                 className="underline decoration-white/40 hover:decoration-white">Datenschutzerklärung</button> gelesen
                                            und stimme der Verarbeitung meiner Daten zu.
                                        </label>
                                    </div>
                                    <button
                                        className="w-full px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        type="submit"
                                        disabled={!consent || loading}
                                    >
                                        {loading ? 'Senden…' : 'Anfrage senden'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}