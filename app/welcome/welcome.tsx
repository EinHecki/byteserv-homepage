import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import {useState} from "react";
import Header from "~/components/Header";
import HeroSection from "~/sections/HeroSection";
import GenericSection from "~/components/GenericSection";
import FeatureCard from "~/components/FeatureCard";
import Card from "~/components/Card";
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
        // Minimal client-side validation
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
        <div
            className="min-h-screen flex flex-col items-center justify-center dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 scroll-smooth">
            <Header/>
            <HeroSection/>
            <GenericSection title={"Über uns"} id="about-us">
                <div className="flex mt-16">
                    <div className="grow w-full text-lg">
                        WIR BEI BYTESERV IT SOLUTIONS Stehen für lecker Bierchen und smarte IT-Lösungen. Als junges, dynamisches Team
                    </div>
                    <div className="grow w-full hidden lg:visible lg:block" >
                        <img src="/about-us-section.jpg" className="rounded-xl" />
                    </div>
                </div>
            </GenericSection>
            <GenericSection title={"Unsere Leistungen"} id="services">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    <FeatureCard
                        title="Kassensysteme & POS"
                        description="Moderne, TSE-konforme Kassenlösungen mit integrierter Warenwirtschaft und Kundenverwaltung."
                        emoji="💻"
                        features={[
                            "All-in-One Kassensysteme",
                            "Mobile Tablet-Lösungen",
                            "Gastronomie-Spezialkassen",
                            "Self-Service Terminals",
                            "Warenwirtschaftssystem",
                            "Kassenschnittstellen & Integrationen",
                        ]}
                    />

                    <FeatureCard
                        title="IT-Infrastruktur & Cloud"
                        description="Sichere, skalierbare IT-Lösungen mit europäischen Cloud-Services und professionellem Netzwerk-Management."
                        emoji="🌐"
                        features={[
                            "Netzwerkplanung & -installation",
                            "DSGVO-Konforme Cloud-Migration",
                            "Server & Backup-Lösungen",
                            "WLAN-Marketing Systeme",
                            "IT-Sicherheit & Monitoring",
                            "Website & Hosting",
                        ]}
                    />

                    <FeatureCard
                        title="Service & Beratung"
                        description="Rundum-Betreuung mit persönlichem Ansprechpartner, damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
                        emoji="🛠️"
                        features={[
                            "24/7 Support-Hotline",
                            "Remote-Wartung & Überwachung",
                            "Vor-Ort Service & Installation",
                            "Mitarbeiterschulungen",
                            "Strategische IT-Beratung",
                            "Prozessoptimierung & Automatisierung",
                        ]}
                    />
                </div>
            </GenericSection>
            <GenericSection title={"Warum ByteServ?"} id="why-us">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    <Card title="Schnelle Umsetzung"
                          description="Kurze Reaktionszeiten und pragmatische Lösungen – damit Ihr Betrieb läuft, wenn es darauf ankommt."
                          emoji="⚡"/>
                    <Card title="Datenschutz & Compliance"
                          description="DSGVO-konforme Systeme, Hosting in der EU und nachvollziehbare Sicherheitskonzepte."
                          emoji="🛡️"/>
                    <Card title="Alles aus einer Hand"
                          description="Von Beratung über Installation bis Support. Ein Ansprechpartner, klare Verantwortung."
                          emoji="🤝"/>
                </div>
            </GenericSection>
            <GenericSection title={"Kontakt"} id="contact">
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="text-3xl">📬</div>
                            <h3 className="text-2xl font-semibold">So erreichen Sie uns</h3>
                        </div>

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span aria-hidden>✉️</span>
                                <a href="mailto:hello@byteserv.it"
                                   className="underline decoration-white/40 hover:decoration-white">hello@byteserv.it</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span aria-hidden>📞</span>
                                <a href="tel:+491234567890"
                                   className="underline decoration-white/40 hover:decoration-white">+49 123 456 7890</a>
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2 text-xs">
                            <span
                                className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20">Antwort i.d.R. &lt; 24h</span>
                            <span
                                className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20">Mo–Fr 9–18 Uhr</span>
                        </div>
                    </div>
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-2xl font-semibold mb-2">Kostenlose Erstberatung</h3>
                        <p className="mb-4">Beschreiben Sie kurz Ihr Anliegen – wir melden uns zeitnah zurück.</p>
                        {submitted ? (
                            <div
                                className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-100">
                                <div className="text-lg font-semibold mb-1">Vielen Dank! ✅</div>
                                <p>Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in der Regel innerhalb von
                                    24 Stunden.</p>
                            </div>
                        ) : (
                            <form className="grid grid-cols-1 gap-3" onSubmit={onSubmit}>
                                <input
                                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/20"
                                    placeholder="Name"
                                    value={fullName}
                                    onChange={(e) => setfullName(e.target.value)}
                                />
                                <input
                                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/20"
                                    placeholder="E-Mail"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <textarea
                                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/20"
                                    placeholder="Nachricht"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                {error && (
                                    <div
                                        className="text-sm text-red-200 bg-red-500/10 border border-red-400/30 rounded-lg px-3 py-2">{error}</div>
                                )}
                                <div className="flex items-start gap-3 text-sm">
                                    <input
                                        id="privacy"
                                        type="checkbox"
                                        checked={consent}
                                        onChange={(e) => setConsent(e.target.checked)}
                                        className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10"
                                        required
                                    />
                                    <label htmlFor="privacy" className="select-none">
                                        Ich habe die <button type="button"
                                                             onClick={() => document.querySelector('footer')?.scrollIntoView({behavior: 'smooth'})}
                                                             className="underline decoration-white/40 hover:decoration-white">Datenschutzerklärung</button> gelesen
                                        und stimme der Verarbeitung meiner Daten zu.
                                    </label>
                                </div>
                                <button
                                    className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-md font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer bg-white/10 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 backdrop-blur-md backdrop-saturate-150 hover:bg-white/15 active:bg-white/20"
                                    type="submit"
                                    disabled={!consent || loading}
                                >
                                    {loading ? 'Senden…' : 'Anfrage senden'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </GenericSection>
            <Footer/>
        </div>
    );
}