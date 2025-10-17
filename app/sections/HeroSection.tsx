import Button from "../components/Button";
import Header from "~/components/Header";

function HeroSection() {
    return (
        <section
            className="relative overflow-hidden w-full flex grow items-center justify-center px-4 py-8 sm:px-6 lg:px-8 ">

            {/* Gradient Overlay */}
            <div
                className="absolute inset-2 sm:inset-6 lg:inset-9 rounded-3xl sm:rounded-4xl bg-gradient-to-br from-blue-500 to-sky-700"/>
            {/* Grid Pattern */}
            <div
                className="absolute inset-2 sm:inset-6 lg:inset-9 pointer-events-none rounded-3xl sm:rounded-4xl opacity-40"
                aria-hidden="true"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0V40' stroke='%23e5e7eb' stroke-width='1'/%3E%3C/svg%3E\")",
                }}
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-white max-w-4xl w-full">
                <h1 className="text-center font-bold leading-tight text-3xl sm:text-5xl">Ihr All‑in‑One IT‑Partner</h1>
                <h1 className="text-center font-bold leading-tight mt-1 text-3xl sm:text-5xl">für Handel, Gastro und
                    Dienstleister</h1>
                <h2 className="text-center mt-4 text-base sm:text-2xl max-w-2xl mx-auto opacity-95">Von Kassensystemen
                    über Cloud‑Lösungen bis zur kompletten IT‑Betreuung – alles aus einer Hand. Wir digitalisieren
                    Prozesse, erhöhen Sicherheit und schaffen messbaren Mehrwert.</h2>

                <div
                    className="mt-8 flex gap-3 sm:flex-row flex-col w-full sm:w-auto sm:justify-center items-stretch sm:items-center">
                    <a href="#contact" className="w-full sm:w-auto"><Button className="w-full sm:w-auto">Kostenlose
                        Beratung</Button></a>
                    <a href="#services" className="w-full sm:w-auto"><Button
                        className="w-full sm:w-auto bg-white/5 hover:bg-white/10">Unsere Leistungen</Button></a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;