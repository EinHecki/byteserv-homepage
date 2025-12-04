import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import {
  cookieConsentConfig,
  initGtagConsentMode,
  loadGtagScript,
} from '~/lib/cookieconsent-config';

/**
 * Cookie Consent Komponente mit Google Consent Mode v2
 *
 * Initialisiert:
 * 1. Google Consent Mode v2 mit Default "denied" (DSGVO-konform)
 * 2. Lädt gtag.js (respektiert Consent-Einstellungen)
 * 3. Zeigt das Cookie-Banner
 *
 * Google Analytics trackt nur, wenn der Nutzer zustimmt.
 */
export default function CookieConsentBanner() {
  useEffect(() => {
    // 1. Consent Mode ZUERST initialisieren (vor gtag.js!)
    initGtagConsentMode();

    // Enable dark mode
    document.documentElement.classList.add('cc--darkmode');

    // 2. gtag.js laden (respektiert die Consent-Einstellungen)
    loadGtagScript();

    // 3. Cookie Consent Banner initialisieren
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
