/**
 * Site-wide configuration constants
 * Centralized location for contact info, branding, and other shared data
 */

export const siteConfig = {
  name: "ByteServ",
  tagline: "Ihr All-In-One Partner für IT-Lösungen",
  url: "https://byteserv.it",

  contact: {
    email: "info@byteserv.it",
    emailSupport: "hello@byteserv.it",
    phone: "+49 228 972 788 40",
    phoneRaw: "+4922897278840",
  },

  location: {
    city: "Bonn",
    region: "NRW",
    country: "DE",
  },

  social: {
    // Add social links as needed
  },
} as const;

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/kassensysteme", label: "Kassensysteme" },
  { href: "/digitale-gastro", label: "Digitale Gastro" },
  { href: "/webentwicklung", label: "Webentwicklung" },
  { href: "/it-systeme", label: "IT-Systeme" },
  { href: "/#contact", label: "Kontakt" },
] as const;

export const serviceLinks = [
  { href: "/kassensysteme", label: "Kassensysteme" },
  { href: "/digitale-gastro", label: "Digitale Gastro" },
  { href: "/webentwicklung", label: "Webentwicklung" },
  { href: "/it-systeme", label: "IT-Systeme" },
] as const;

export const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
] as const;

export const partnerLogos = [
  "pc-cash_logo.png",
  "digituu_logo.png",
  "HECKEL_logo.png",
  "Partner-Tech_Logo.png",
] as const;
