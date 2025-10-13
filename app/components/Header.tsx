import { useState } from "react";

function Header() {

    const headerLinks = [
        { href: "#services", label: "Kassensysteme" },
        { href: "#why-us", label: "Digitale Gastro" },
        { href: "#webdev", label: "Webentwicklung" },
        { href: "#contact", label: "Kontakt" },
    ];

  const [open, setOpen] = useState(false);
  return (
    <div className="fixed self-center top-4 z-20 px-4 py-1 rounded-full w-full max-w-5xl">
      <header className="px-10 py-4 bg-white/30 dark:bg-neutral-700/30 backdrop-blur-lg rounded-4xl border border-white/30 dark:border-neutral-800/30 shadow-lg">
        <div className="flex items-center justify-between md:justify-center">
          {/* Mobile Toggle */}
          <img
            src="/logo-low_height.png"
            alt="ByteServ Logo"
            className="h-8 "
          />
          <div className="grow" />
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex flex-col gap-[5px] p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          >
            <span
              className={`h-[2px] w-6 bg-white transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-lg font-bold text-white">
              {headerLinks.map((link) => (
                    <a key={link.href} href={link.href}>
                        {link.label}
                    </a>
              ))}
          </div>
        </div>

        {/* Mobile Panel */}
        <div
          className={`md:hidden origin-top animate-menu-bounce ${
            open ? "" : "hidden"
          }`}
        >
          <nav className="mt-3 flex flex-col gap-3 text-base font-semibold text-white">
              {headerLinks.map((link) => (
                <a onClick={() => setOpen((o) => !o)} key={link.href} className="px-3 py-2 rounded-lg hover:bg-white/10 transition" href={link.href}>
                    {link.label}
                </a>
              ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
