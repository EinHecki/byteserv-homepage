import { Link } from "react-router";
import { openCookieSettings } from "~/components/CookieConsent";
import { siteConfig, serviceLinks, legalLinks } from "~/config/site";

function Footer() {
  const currentYear = new Date().getFullYear();

  const linkClass =
    "block text-sm text-gray-400 hover:text-white transition-colors underline decoration-transparent hover:decoration-white/50";

  return (
    <footer className="mt-20 w-full text-gray-300 bg-linear-to-b from-black via-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo-low_height.png"
                alt={`${siteConfig.name} Logo`}
                className="h-8 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4 max-w-md leading-relaxed">
              Ihr IT-Partner für moderne Kassensysteme, digitale Gastro-Lösungen
              und professionelle Webentwicklung in {siteConfig.location.city}{" "}
              und {siteConfig.location.region}.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors underline decoration-white/30 hover:decoration-white"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-white transition-colors underline decoration-white/30 hover:decoration-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Leistungen
            </h3>
            <nav className="space-y-2">
              {serviceLinks.map((link) => (
                <Link key={link.href} to={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Rechtliches
            </h3>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <Link key={link.href} to={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={openCookieSettings}
                className={`${linkClass} text-left`}
              >
                Cookie-Einstellungen
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs">Made with ❤️ in {siteConfig.location.city}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
