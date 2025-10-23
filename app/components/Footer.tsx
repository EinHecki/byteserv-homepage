import { Link } from "react-router";

function Footer() {
  return (
    <footer className="px-6 sm:px-10 py-6 mt-20 w-full text-sm text-gray-200 bg-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="opacity-90">&copy; {new Date().getFullYear()} ByteServ. Alle Rechte vorbehalten.</div>
        <nav className="flex items-center gap-4">
          <Link
            to="/impressum"
            className="underline decoration-white/30 hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 rounded transition-all"
          >
            Impressum
          </Link>
          <span className="opacity-40">|</span>
          <Link
            to="/datenschutz"
            className="underline decoration-white/30 hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 rounded transition-all"
          >
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
