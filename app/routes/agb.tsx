import type { Route } from "./+types/agb";
import { Link } from "react-router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AGB - ByteServ" },
    { name: "description", content: "Allgemeine Geschäftsbedingungen der ByteServ." },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function AGB() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>

            <div className="bg-white/5 p-8 rounded-xl border border-white/10 text-center">
              <p className="text-gray-400 text-lg">
                Die AGB werden in Kürze veröffentlicht.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
