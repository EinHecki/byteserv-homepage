import type { CookieConsentConfig } from 'vanilla-cookieconsent';

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'G-CKB9ZN1VJF';

/**
 * gtag Hilfsfunktion
 */
function gtag(...args: unknown[]): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/**
 * Initialisiert gtag.js mit Google Consent Mode v2 (Default: alles denied)
 * MUSS vor dem Laden von gtag.js aufgerufen werden!
 */
export function initGtagConsentMode(): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  // Consent Mode v2: Standardmäßig alles abgelehnt (DSGVO-konform)
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted', // Sicherheits-Cookies immer erlaubt
    wait_for_update: 500, // Warte max 500ms auf Consent-Update
  });

  // Region-spezifische Einstellungen für EU/EWR (extra strikt)
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    region: ['DE', 'AT', 'CH', 'EU'], // Deutschland, Österreich, Schweiz, EU
  });
}

/**
 * Lädt das Google Analytics gtag.js Script
 */
export function loadGtagScript(): void {
  if (typeof window === 'undefined') return;

  // Prüfen ob bereits geladen
  if (document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) return;

  // gtag.js Script laden
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // GA initialisieren
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true,
  });
}

/**
 * Aktualisiert die Consent-Einstellungen via gtag
 */
export function updateGtagConsent(analyticsGranted: boolean): void {
  if (typeof window === 'undefined') return;

  gtag('consent', 'update', {
    analytics_storage: analyticsGranted ? 'granted' : 'denied',
  });
}

/**
 * Aktualisiert alle Consent-Einstellungen (für zukünftige Marketing-Cookies)
 */
export function updateFullGtagConsent(options: {
  analytics?: boolean;
  marketing?: boolean;
}): void {
  if (typeof window === 'undefined') return;

  gtag('consent', 'update', {
    analytics_storage: options.analytics ? 'granted' : 'denied',
    ad_storage: options.marketing ? 'granted' : 'denied',
    ad_user_data: options.marketing ? 'granted' : 'denied',
    ad_personalization: options.marketing ? 'granted' : 'denied',
  });
}

/**
 * Entfernt Google Analytics Cookies
 */
export function removeGoogleAnalyticsCookies(): void {
  if (typeof document === 'undefined') return;

  const cookiesToRemove = ['_ga', '_ga_', '_gid', '_gat', '_gcl'];
  const domains = [window.location.hostname, '.' + window.location.hostname];

  cookiesToRemove.forEach(cookieName => {
    domains.forEach(domain => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
      // Cookies mit Prefix (z.B. _ga_XXXXXX)
      document.cookie.split(';').forEach(cookie => {
        const name = cookie.split('=')[0].trim();
        if (name.startsWith(cookieName)) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
        }
      });
    });
  });
}

/**
 * DSGVO-konforme Cookie Consent Konfiguration mit Google Consent Mode v2
 */
export const cookieConsentConfig: CookieConsentConfig = {
  autoShow: true,

  // Cookie Einstellungen
  cookie: {
    name: 'cc_cookie',
    domain: typeof window !== 'undefined' ? window.location.hostname : '',
    expiresAfterDays: 365,
    sameSite: 'Lax',
  },

  // UI Einstellungen
  guiOptions: {
    consentModal: {
      layout: 'box wide',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  // Kategorien Definition
  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {
      enabled: false, // Standardmäßig AUS (Opt-in für DSGVO)
      autoClear: {
        cookies: [
          { name: /^_ga/ },
          { name: '_gid' },
          { name: '_gat' },
          { name: /^_gcl/ },
        ],
      },
    },
  },

  // Event Callbacks - Consent Mode v2 Integration
  onFirstConsent: ({ cookie }) => {
    const analyticsAccepted = cookie.categories.includes('analytics');
    updateGtagConsent(analyticsAccepted);
  },

  onConsent: ({ cookie }) => {
    const analyticsAccepted = cookie.categories.includes('analytics');
    updateGtagConsent(analyticsAccepted);
  },

  onChange: ({ cookie, changedCategories }) => {
    if (changedCategories.includes('analytics')) {
      const analyticsAccepted = cookie.categories.includes('analytics');
      updateGtagConsent(analyticsAccepted);

      if (!analyticsAccepted) {
        removeGoogleAnalyticsCookies();
      }
    }
  },

  // Deutsche Spracheinstellungen
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
              description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. Wir verwenden Google Analytics mit aktiviertem Consent Mode v2 und IP-Anonymisierung für maximalen Datenschutz.',
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
                    domain: 'byteserv.it',
                    expiration: '2 Jahre',
                    description: 'Speichert eine eindeutige ID zur Unterscheidung von Nutzern',
                  },
                  {
                    name: '_ga_*',
                    domain: 'byteserv.it',
                    expiration: '2 Jahre',
                    description: 'Speichert den Sitzungsstatus',
                  },
                  {
                    name: '_gid',
                    domain: 'byteserv.it',
                    expiration: '24 Stunden',
                    description: 'Speichert eine eindeutige ID zur Unterscheidung von Nutzern',
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
  }
}
