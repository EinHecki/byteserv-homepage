# ByteServ Homepage - Entwickler-Dokumentation

## Deine neue geile Webseite! 🚀

Ich habe dir eine mega moderne, Apple-style Webseite gebaut mit allen Inhalten aus deinen Dokumenten!

## Was ist neu?

### Design
- **Schwarzes Apple-Style Design** - Modern, clean und minimalistisch
- **Glassmorphism-Effekte** - Backdrop blur, subtile Borders und smooth Transitions
- **Responsive auf allen Geräten** - Von Mobile bis Desktop, alles optimiert
- **Smooth Scroll Animations** - Professionelle Animationen und Hover-Effekte
- **Unsplash Stock-Bilder** - Placeholder-Bilder für professionelles Aussehen

### Sektionen
1. **Hero Section** - Großer, imposanter Header mit Gradient-Text
2. **Über uns** - Mit Team-Bild und ausführlicher Beschreibung
3. **Leistungsübersicht** - 5 Service-Cards mit Links zu Details
4. **Kassensysteme** - Detaillierte Beschreibung mit 3 Untertypen
5. **Digitale Gastro** - 5 Lösungen (Reservierung, Kreidetafeln, Self-Order, Gutscheine, HACCP)
6. **Webentwicklung** - Mit Liefersystem-Feature
7. **IT-Systeme** - 5 Bereiche (Netzwerk, Hardware, Cloud, MDM, Videoüberwachung)
8. **Kontakt** - Funktionierendes Formular mit API-Endpoint

### Features
- ✅ **SEO-optimiert** - Alle Meta-Tags, Open Graph, Twitter Cards
- ✅ **Server-Side Rendering** - Perfekt für Google Indexierung
- ✅ **Mobile-first** - Alle Breakpoints optimiert (sm, md, lg, xl)
- ✅ **Contact Form API** - Backend-Route funktioniert (loggt in Console)
- ✅ **Fixed Header** - Bleibt beim Scrollen oben
- ✅ **Smooth Navigation** - Alle Links funktionieren

## Installation & Start

### Problem mit Rollup auf WSL
Es gibt ein bekanntes npm-Problem mit Rollup auf WSL. Um es zu fixen:

```bash
# 1. Lösche node_modules und package-lock.json
rm -rf node_modules package-lock.json

# 2. Installiere neu
npm install

# 3. Falls es immer noch nicht geht, installiere Rollup manuell:
npm install @rollup/rollup-linux-x64-gnu --save-optional
```

### Development Server starten
```bash
npm run dev
```
Dann öffne: `http://localhost:5173`

### Production Build
```bash
npm run build
npm run start
```

### Type Checking
```bash
npm run typecheck
```

## Struktur

```
app/
├── routes/
│   ├── home.tsx                    # Hauptseite mit SEO Meta-Tags
│   └── api.contact.submit.tsx      # Contact Form API Endpoint
├── welcome/
│   └── welcome.tsx                 # NEUE Hauptkomponente mit allem Content
├── components/
│   ├── Header.tsx                  # Fixed Header mit Navigation
│   ├── Footer.tsx                  # Footer (du kannst noch anpassen)
│   ├── Button.tsx                  # Alte Components (kannst löschen)
│   ├── Card.tsx
│   ├── FeatureCard.tsx
│   └── ...
└── sections/
    └── HeroSection.tsx              # Alte Hero (kannst löschen)
```

## Was du noch machen kannst

### 1. Contact Form Backend
Aktuell loggt das Formular nur in die Console. Du kannst es erweitern:
- E-Mail versenden (z.B. mit SendGrid, AWS SES, Resend)
- In Datenbank speichern
- Rate Limiting hinzufügen

Siehe: `app/routes/api.contact.submit.tsx`

### 2. Footer anpassen
Der Footer ist noch basic. Du kannst ihn in `app/components/Footer.tsx` aufpimpen mit:
- Social Media Links
- Weitere Kontaktinfos
- RustDesk Link (wie in deinen Docs erwähnt)
- Impressum, Datenschutz

### 3. Logo
Stelle sicher, dass `/logo-low_height.png` im `public/` Ordner existiert!

### 4. Echte Bilder
Ich habe Unsplash-Placeholder verwendet. Ersetze sie mit echten Bildern:
- Team-Foto für "Über uns"
- Produkt-Fotos für Kassensysteme
- Weitere Bilder nach Bedarf

### 5. Animation hinzufügen
Du kannst noch mehr Animationen hinzufügen mit:
- Framer Motion
- CSS Animations on scroll
- AOS (Animate On Scroll)

## Technologie-Stack

- **React Router v7** - Modernes Full-Stack Framework mit SSR
- **TypeScript** - Type-safe development
- **TailwindCSS v4** - Utility-first CSS
- **Vite** - Super schneller Build-Tool
- **Node.js** - Server-side rendering

## Deployment

### Docker
```bash
docker build -t byteserv-homepage .
docker run -p 3000:3000 byteserv-homepage
```

### Andere Plattformen
- Vercel
- Netlify
- Railway
- Fly.io
- AWS / Google Cloud / Azure

Einfach `npm run build` und das `build/` Verzeichnis deployen!

## Troubleshooting

### "Cannot find module @rollup/rollup-linux-x64-gnu"
Siehe Installation oben - npm hat einen Bug mit optional dependencies auf WSL.

### Bilder werden nicht angezeigt
Stelle sicher, dass die Bilder im `public/` Ordner sind!

### Contact Form funktioniert nicht
Check die Browser Console - der API Endpoint loggt die Submissions.

## Support

Bei Fragen einfach melden! Die Seite ist jetzt richtig geil geworden 🔥

---

Made with ❤️ and Claude Code
