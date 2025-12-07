# ByteServ - Homepage

Eine moderne, professionelle Website für ByteServ - Ihr Partner für IT-Lösungen, Kassensysteme und digitale Gastro-Lösungen.

## Features

- 🚀 Server-side rendering für optimale SEO
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling und optimization
- 🔄 Dedizierte Unterseiten für jeden Service-Bereich
- 🔒 TypeScript mit strict mode
- 🎨 Modernes Apple-inspiriertes Design mit Glassmorphismus
- 📧 Kontaktformular mit Nodemailer Email-Integration
- 📱 Vollständig responsive für alle Geräte
- 🔍 SEO-optimiert mit Meta Tags
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Installiere alle Dependencies:

```bash
npm install
```

### Email-Konfiguration (Nodemailer)

Das Kontaktformular verwendet Nodemailer um Emails über deinen eigenen Mailserver zu versenden.

#### 1. Environment Variables einrichten

Kopiere die `.env.example` Datei und erstelle eine `.env` Datei:

```bash
cp .env.example .env
```

#### 2. SMTP-Einstellungen konfigurieren

Bearbeite die `.env` Datei mit deinen Mailserver-Daten:

```env
# SMTP Configuration für E-Mail-Versand
SMTP_HOST=mail.deinserver.de          # Dein Mailserver Hostname
SMTP_PORT=465                          # 465 für SSL, 587 für TLS
SMTP_USER=kontakt@byteserv.it         # Dein SMTP Benutzername
SMTP_PASS=dein_sicheres_passwort      # Dein SMTP Passwort

# Absender und Empfänger E-Mail Adressen
SMTP_FROM=kontakt@byteserv.it         # Absender-Adresse
SMTP_TO=hello@byteserv.it             # Empfänger-Adresse für Kontaktanfragen
```

#### 3. Port-Auswahl: SSL vs TLS

- **Port 465**: Verwendet SSL (Secure Sockets Layer)
  - `secure: true` wird automatisch gesetzt
  - Direkte verschlüsselte Verbindung von Anfang an

- **Port 587**: Verwendet TLS (STARTTLS)
  - `secure: false` wird automatisch gesetzt
  - Verbindung startet unverschlüsselt und wechselt dann zu TLS

#### 4. Häufige SMTP-Anbieter

| Anbieter | SMTP Host | Port | Hinweise |
|----------|-----------|------|----------|
| **Eigener Server** | `mail.deinedomain.de` | 465 oder 587 | Prüfe deine Hosting-Dokumentation |
| **IONOS** | `smtp.ionos.de` | 465 oder 587 | - |
| **Strato** | `smtp.strato.de` | 465 oder 587 | - |
| **1&1** | `smtp.1und1.de` | 587 | - |
| **Gmail** | `smtp.gmail.com` | 587 | App-Passwort erforderlich |

#### 5. Selbst-signierte Zertifikate (optional)

Falls dein Mailserver selbst-signierte Zertifikate verwendet, kannst du die Zertifikatsprüfung deaktivieren. Bearbeite `app/routes/api.contact.submit.tsx`:

```typescript
const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: parseInt(smtpPort),
  secure: parseInt(smtpPort) === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
  tls: {
    rejectUnauthorized: false  // ⚠️ Nur für selbst-signierte Zertifikate
  }
});
```

#### 6. Email-Funktionalität testen

1. Starte den Development Server:
   ```bash
   npm run dev
   ```

2. Öffne http://localhost:5173 im Browser

3. Scrolle zum Kontaktformular am Ende der Seite

4. Fülle das Formular aus und sende es ab

5. Überprüfe die Server-Logs für Email-Status:
   - ✅ `Email sent successfully` - Email wurde versendet
   - ❌ `Error sending email` - Es gab einen Fehler (siehe Details im Log)

#### 7. Troubleshooting

**Problem**: `Error: connect ECONNREFUSED`
- **Lösung**: Überprüfe SMTP_HOST und SMTP_PORT - Server ist nicht erreichbar

**Problem**: `Error: Invalid login`
- **Lösung**: Überprüfe SMTP_USER und SMTP_PASS - Zugangsdaten sind falsch

**Problem**: `Error: self signed certificate`
- **Lösung**: Aktiviere `rejectUnauthorized: false` in TLS-Optionen (siehe oben)

**Problem**: Email wird nicht versendet, aber kein Fehler
- **Lösung**: Überprüfe Spam-Ordner und Server-Logs
- Stelle sicher, dass SMTP_TO korrekt ist

**Problem**: `Error: Missing credentials`
- **Lösung**: Stelle sicher, dass alle SMTP_* Environment Variables gesetzt sind

### Development

Starte den Development Server mit HMR:

```bash
npm run dev
```

Die Anwendung ist verfügbar unter `http://localhost:5173`.

## Projekt-Struktur

```
byteserv-homepage/
├── app/
│   ├── routes/                      # Route-Dateien
│   │   ├── home.tsx                 # Startseite (/)
│   │   ├── kassensysteme.tsx        # Kassensysteme Unterseite
│   │   ├── digitale-gastro.tsx      # Digitale Gastro Unterseite
│   │   ├── webentwicklung.tsx       # Webentwicklung Unterseite
│   │   ├── it-systeme.tsx           # IT-Systeme Unterseite
│   │   └── api.contact.submit.tsx   # Email API Route
│   ├── components/                  # Wiederverwendbare Komponenten
│   │   ├── Header.tsx               # Fixed Header mit Navigation
│   │   ├── Footer.tsx               # Footer Komponente
│   │   ├── Button.tsx               # Button Komponente
│   │   ├── Card.tsx                 # Card Komponente
│   │   ├── FeatureCard.tsx          # Feature Card Komponente
│   │   ├── GenericSection.tsx       # Generische Section
│   │   └── Modal.tsx                # Modal Komponente
│   ├── welcome/
│   │   └── welcome.tsx              # Haupt-Homepage Content
│   ├── routes.ts                    # Route-Konfiguration
│   └── root.tsx                     # Root Layout
├── Inhalte/                         # Content-Dateien (Markdown)
│   ├── Startseite.md
│   ├── Kassen.md
│   ├── DigitaleGastro.md
│   ├── Webentwicklung.md
│   └── IT Systeme.md
├── .env.example                     # Environment Variables Template
├── package.json
└── README.md
```

## Building for Production

Erstelle einen Production Build:

```bash
npm run build
```

Starte den Production Server:

```bash
npm run start
```

Der Production Server läuft auf Port 3000.

### TypeScript Prüfung

Prüfe den Code auf TypeScript-Fehler:

```bash
npm run typecheck
```

## Deployment

> **📖 Ausführliche Deployment-Anleitung**: Siehe [DEPLOYMENT.md](./DEPLOYMENT.md) für eine vollständige Schritt-für-Schritt Anleitung zum Deployment mit Coolify oder Docker.

### Umgebungsvariablen in Production

**Wichtig**: Stelle sicher, dass alle SMTP Environment Variables in deiner Production-Umgebung gesetzt sind:

```bash
SMTP_HOST=mail.deinserver.de
SMTP_PORT=465
SMTP_USER=kontakt@byteserv.it
SMTP_PASS=dein_sicheres_passwort
SMTP_FROM=kontakt@byteserv.it
SMTP_TO=hello@byteserv.it
```

### Docker Deployment

Build und run mit Docker:

```bash
docker build -t byteserv-homepage .

# Run den Container
docker run -p 3000:3000 \
  -e SMTP_HOST=mail.deinserver.de \
  -e SMTP_PORT=465 \
  -e SMTP_USER=kontakt@byteserv.it \
  -e SMTP_PASS=dein_passwort \
  -e SMTP_FROM=kontakt@byteserv.it \
  -e SMTP_TO=hello@byteserv.it \
  byteserv-homepage
```

Die Containerisierte Anwendung kann auf folgenden Plattformen deployed werden:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment (Node.js Server)

Wenn du mit Node.js Deployments vertraut bist, ist der built-in App Server production-ready.

Deploye die folgenden Dateien:

```
├── package.json
├── package-lock.json
├── .env                 # Mit deinen SMTP-Einstellungen
├── build/
│   ├── client/          # Static assets
│   └── server/          # Server-side code
```

Auf dem Server:

```bash
# Dependencies installieren
npm ci --production

# Server starten
npm run start
```

### Reverse Proxy (Nginx/Apache)

Für Production empfiehlt sich ein Reverse Proxy vor dem Node.js Server:

**Nginx Beispiel:**

```nginx
server {
    listen 80;
    server_name byteserv.it www.byteserv.it;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Technologie-Stack

- **Framework**: React Router v7 (SSR-fähig)
- **Runtime**: Node.js
- **Sprache**: TypeScript
- **Styling**: TailwindCSS v4
- **Email**: Nodemailer
- **Build Tool**: Vite
- **Package Manager**: npm

## SEO & Performance

- ✅ Server-Side Rendering für optimale Google-Indexierung
- ✅ Meta Tags (Title, Description, Open Graph, Twitter Cards)
- ✅ Semantic HTML
- ✅ Responsive Design
- ✅ Optimierte Bilder (Placeholders für Stock-Fotos)
- ✅ Fast Page Load durch Vite Build Optimization

## Support & Dokumentation

- [React Router Docs](https://reactrouter.com/)
- [Nodemailer Docs](https://nodemailer.com/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [TypeScript Docs](https://www.typescriptlang.org/)

---

Built with ❤️ for ByteServ using React Router.
