import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import { cookieConsentConfig } from '~/lib/cookieconsent-config';

/**
 * Cookie Consent Komponente (DSGVO-konform)
 *
 * Google Analytics wird NUR geladen, wenn der Nutzer zustimmt.
 * Ohne Zustimmung: Keine Verbindung zu Google-Servern.
 */
export default function CookieConsentBanner() {
  useEffect(() => {
    // Enable dark mode
    document.documentElement.classList.add('cc--darkmode');

    // Cookie Consent Banner initialisieren
    // gtag.js wird nur bei Zustimmung geladen (siehe cookieConsentConfig)
    CookieConsent.run(cookieConsentConfig);
  }, []);

  return null;
}

/**
 * Öffnet die Cookie-Einstellungen
 */
export function openCookieSettings() {
  CookieConsent.showPreferences();
}
