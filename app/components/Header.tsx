import { useState } from "react";
import { Link } from "react-router";

function Header() {

    const headerLinks = [
        { href: "/", label: "Home" },
        { href: "/kassensysteme", label: "Kassensysteme" },
        { href: "/digitale-gastro", label: "Digitale Gastro" },
        { href: "/webentwicklung", label: "Webentwicklung" },
        { href: "/it-systeme", label: "IT-Systeme" },
        { href: "/#contact", label: "Kontakt" },
    ];

  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <header className="max-w-7xl mx-auto px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl lg:rounded-full transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo-low_height.png"
              alt="ByteServ Logo"
              className="h-8"
              loading="eager"
              width={120}
              height={32}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
              {headerLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
                    >
                        {link.label}
                    </Link>
              ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex flex-col gap-[5px] p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Panel */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-2 pt-4 border-t border-white/10">
              {headerLinks.map((link) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={link.href}
                  className="px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white font-semibold"
                  to={link.href}
                >
                    {link.label}
                </Link>
              ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
