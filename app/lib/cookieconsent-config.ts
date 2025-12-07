import type { CookieConsentConfig } from 'vanilla-cookieconsent';

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'G-CKB9ZN1VJF';

/**
 * Initialisiert dataLayer und gtag Funktion (Google Standard)
 */
function ensureGtag(): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  }
}

/**
 * Lädt Google Analytics mit Consent Mode v2
 * Wird NUR aufgerufen, wenn der Nutzer zugestimmt hat (DSGVO-konform)
 */
export function loadGoogleAnalytics(): void {
  if (typeof window === 'undefined') return;

  // Prüfen ob bereits geladen
  if (document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) return;

  ensureGtag();

  // 1. Consent Mode v2: Consent-Status ZUERST setzen (vor Script-Load!)
  // Da diese Funktion nur bei Zustimmung aufgerufen wird, setzen wir 'granted'
  window.gtag('consent', 'default', {
    ad_storage: 'denied',           // Keine Werbe-Cookies
    ad_user_data: 'denied',         // Keine Werbe-Nutzerdaten
    ad_personalization: 'denied',   // Keine personalisierte Werbung
    analytics_storage: 'granted',   // Analytics erlaubt (Nutzer hat zugestimmt)
    functionality_storage: 'granted',
    personalization_storage: 'denied',
    security_storage: 'granted',
  });

  // 2. gtag.js Script laden
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // 3. GA4 konfigurieren
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    // DSGVO-konforme Einstellungen
    anonymize_ip: true,                    // IP-Anonymisierung
    allow_google_signals: false,           // Keine Google Signals (Demographics)
    allow_ad_personalization_signals: false, // Keine Werbe-Personalisierung
    restricted_data_processing: true,      // Eingeschränkte Datenverarbeitung
    send_page_view: true,
  });
}

/**
 * Entfernt alle Google Analytics Cookies
 */
export function removeGoogleAnalyticsCookies(): void {
  if (typeof document === 'undefined') return;

  // Alle aktuellen Cookies auslesen
  const allCookies = document.cookie.split(';').map(c => c.trim().split('=')[0]);

  // GA-Cookie Prefixe
  const gaCookiePrefixes = ['_ga', '_gid', '_gat', '_gcl'];

  // Finde alle GA-Cookies
  const gaCookies = allCookies.filter(name =>
    gaCookiePrefixes.some(prefix => name.startsWith(prefix))
  );

  // Verschiedene Domain-Varianten zum Löschen
  const hostname = window.location.hostname;
  const domainParts = hostname.split('.');
  const domains = [
    '',
    hostname,
    '.' + hostname,
  ];

  // Root-Domain hinzufügen (z.B. .byteserv.it)
  if (domainParts.length >= 2) {
    const rootDomain = domainParts.slice(-2).join('.');
    domains.push('.' + rootDomain);
  }

  // Lösche jeden GA-Cookie mit allen Domain/Path-Varianten
  gaCookies.forEach(cookieName => {
    domains.forEach(domain => {
      const domainPart = domain ? `; domain=${domain}` : '';
      ['/', ''].forEach(path => {
        const pathPart = path ? `; path=${path}` : '';
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC${pathPart}${domainPart}`;
      });
    });
  });
}

/**
 * DSGVO-konforme Cookie Consent Konfiguration
 */
export const cookieConsentConfig: CookieConsentConfig = {
  autoShow: true,

  cookie: {
    name: 'cc_cookie',
    domain: typeof window !== 'undefined' ? window.location.hostname : '',
    expiresAfterDays: 365,
    sameSite: 'Lax',
  },

  guiOptions: {
    consentModal: {
      layout: 'box wide',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {
      enabled: false, // WICHTIG: Standardmäßig AUS (Opt-in für DSGVO!)
      autoClear: {
        cookies: [
          { name: /^_ga/, domain: '.byteserv.it' },
          { name: /^_ga/ },
          { name: '_gid', domain: '.byteserv.it' },
          { name: '_gid' },
          { name: '_gat', domain: '.byteserv.it' },
          { name: '_gat' },
          { name: /^_gcl/, domain: '.byteserv.it' },
          { name: /^_gcl/ },
        ],
        reloadPage: true,
      },
    },
  },

  // DSGVO-konform: Script NUR bei Zustimmung laden
  onFirstConsent: ({ cookie }) => {
    if (cookie.categories.includes('analytics')) {
      loadGoogleAnalytics();
    }
  },

  onConsent: ({ cookie }) => {
    if (cookie.categories.includes('analytics')) {
      loadGoogleAnalytics();
    }
  },

  onChange: ({ cookie, changedCategories }) => {
    if (changedCategories.includes('analytics')) {
      if (cookie.categories.includes('analytics')) {
        loadGoogleAnalytics();
      } else {
        removeGoogleAnalyticsCookies();
      }
    }
  },

  language: {
    default: 'de',
    translations: {
      de: {
        consentModal: {
          title: 'Wir nutzen Cookies',
          description: 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen, die Website zu verbessern und Ihr Nutzererlebnis zu optimieren.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Nur notwendige',
          showPreferencesBtn: 'Einstellungen',
          footer: '<a href="/datenschutz">Datenschutzerklärung</a><a href="/impressum">Impressum</a>',
        },
        preferencesModal: {
          title: 'Cookie-Einstellungen',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Nur notwendige',
          savePreferencesBtn: 'Einstellungen speichern',
          closeIconLabel: 'Schließen',
          serviceCounterLabel: 'Dienst|Dienste',
          sections: [
            {
              title: 'Cookie-Nutzung',
              description: 'Wir verwenden Cookies, um grundlegende Funktionen der Website zu ermöglichen und um zu verstehen, wie Sie unsere Website nutzen. Sie können für jede Kategorie entscheiden, ob Sie diese zulassen möchten oder nicht.',
            },
            {
              title: 'Notwendige Cookies <span class="pm__badge">Immer aktiv</span>',
              description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Sie speichern z.B. Ihre Cookie-Einstellungen.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analyse & Statistik',
              description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. Wir verwenden Google Analytics 4 mit IP-Anonymisierung, deaktivierten Google Signals und eingeschränkter Datenverarbeitung.',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Cookie',
                  domain: 'Domain',
                  expiration: 'Ablauf',
                  description: 'Beschreibung',
                },
                body: [
                  {
                    name: '_ga',
                    domain: '.byteserv.it',
                    expiration: '2 Jahre',
                    description: 'Unterscheidet einzelne Nutzer',
                  },
                  {
                    name: '_ga_*',
                    domain: '.byteserv.it',
                    expiration: '2 Jahre',
                    description: 'Speichert Sitzungsstatus',
                  },
                  {
                    name: '_gid',
                    domain: '.byteserv.it',
                    expiration: '24 Stunden',
                    description: 'Unterscheidet einzelne Nutzer',
                  },
                ],
              },
            },
            {
              title: 'Weitere Informationen',
              description: 'Bei Fragen zu unseren Cookie-Richtlinien oder Ihren persönlichen Daten kontaktieren Sie uns bitte unter <a href="mailto:info@byteserv.it">info@byteserv.it</a>.',
            },
          ],
        },
      },
    },
  },
};

// TypeScript Erweiterung für window
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
