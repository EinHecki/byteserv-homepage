# Integration Guide: Testimonials & Logo-Karussell

## Übersicht

Es wurden zwei neue Komponenten zur Homepage hinzugefügt:
1. **Testimonials** - Kundenrezensionen und Referenzen
2. **LogoCarousel** - Animiertes Karussell für Partner- und Kundenlogos

## 1. Testimonials (Kundenrezensionen)

### Speicherort
`app/components/Testimonials.tsx`

### Verwendung auf der Homepage
Die Komponente ist bereits in `app/welcome/welcome.tsx` integriert und erscheint zwischen der IT-Systeme-Sektion und dem Logo-Karussell.

### Rezensionen bearbeiten/hinzufügen

**Option A: Direkt in der Komponente (app/components/Testimonials.tsx)**

Öffnen Sie `app/components/Testimonials.tsx` und bearbeiten Sie das `defaultTestimonials` Array (ca. Zeile 33):

```tsx
const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Max Mustermann",
    company: "Restaurant Bella Vista",
    role: "Geschäftsführer",
    rating: 5,
    text: "Die Kassenlösung von ByteServ hat unseren Betrieb revolutioniert...",
    date: "Oktober 2024"
  },
  // Weitere Rezensionen hinzufügen...
];
```

**Option B: Via Props in welcome.tsx**

Sie können auch Testimonials von außen übergeben:

```tsx
import type { Testimonial } from "~/components/Testimonials";

const myTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ihr Kunde",
    company: "Firma XY",
    rating: 5,
    text: "Toller Service!",
  }
];

// Dann in der Komponente:
<Testimonials testimonials={myTestimonials} />
```

### Felder pro Testimonial

| Feld | Typ | Erforderlich | Beschreibung |
|------|-----|--------------|--------------|
| `id` | string | ✅ Ja | Eindeutige ID |
| `name` | string | ✅ Ja | Name des Kunden |
| `company` | string | ✅ Ja | Firmenname |
| `rating` | number (1-5) | ✅ Ja | Sternebewertung |
| `text` | string | ✅ Ja | Rezensionstext |
| `role` | string | ❌ Nein | Jobtitel/Position |
| `image` | string | ❌ Nein | Pfad zum Profilbild |
| `date` | string | ❌ Nein | Datum der Rezension |

### Profilbilder hinzufügen

1. Bild in `public/testimonials/` ablegen (Ordner muss ggf. erstellt werden)
2. Pfad im Testimonial angeben: `image: "/testimonials/kunde-foto.jpg"`

---

## 2. Logo-Karussell

### Speicherort
`app/components/LogoCarousel.tsx`

### Logo-Verzeichnis
`public/logos/partners/`

### Logos hinzufügen

**Schritt 1: Logos ins Verzeichnis legen**

Kopieren Sie Ihre Logo-Dateien nach `public/logos/partners/`:
- Unterstützte Formate: PNG, SVG, JPG, WEBP
- Empfohlene Größe: 200-400px Breite
- Transparenter Hintergrund empfohlen (PNG/SVG)

Beispiel:
```
public/logos/partners/
  ├── partner-firma-a.png
  ├── kunde-restaurant-x.svg
  └── kooperationspartner-y.png
```

**Schritt 2: Logo-Liste aktualisieren**

**Option A: In der Komponente (LogoCarousel.tsx)**

Bearbeiten Sie das `defaultLogos` Array (ca. Zeile 30):

```tsx
const defaultLogos = logos || [
  "partner-firma-a.png",
  "kunde-restaurant-x.svg",
  "kooperationspartner-y.png",
];
```

**Option B: In welcome.tsx via Props**

```tsx
<LogoCarousel
  logos={[
    "partner-firma-a.png",
    "kunde-restaurant-x.svg",
    "kooperationspartner-y.png",
  ]}
/>
```

### Karussell-Einstellungen

Sie können die Geschwindigkeit des Karussells anpassen:

```tsx
<LogoCarousel
  animationSpeed={30}  // Sekunden für eine vollständige Rotation (Standard: 30)
/>
```

Oder ein eigenes Logo-Verzeichnis verwenden:

```tsx
<LogoCarousel
  logoDirectory="/meine-logos"  // Pfad relativ zu public/
/>
```

### Platzhalter-Logos

Wenn keine echten Logos vorhanden sind, werden automatisch graue Platzhalter angezeigt.

---

## Design-Hinweise

### Testimonials
- Cards haben Hover-Effekt (vergrößern sich leicht)
- Grayscale-Filter auf ungelesenen Reviews
- Responsive Grid-Layout (1 Spalte mobile, 3 Spalten Desktop)
- Avatar wird aus Initialen generiert, wenn kein Bild vorhanden

### Logo-Karussell
- Infinite-Scroll-Animation
- Pausiert bei Hover (Mouse-Over)
- Grayscale-Filter, volle Farbe bei Hover
- Gradient-Overlays links/rechts für nahtloses Aussehen
- Automatische Fehlerbehandlung für fehlende Bilder

---

## Anpassungen

### Testimonials-Überschrift ändern

In `app/components/Testimonials.tsx` (ca. Zeile 78-82):

```tsx
<h2 className="...">
  Das sagen unsere Kunden  {/* Hier anpassen */}
</h2>
<p className="...">
  Überzeugen Sie sich von...  {/* Hier anpassen */}
</p>
```

### Logo-Karussell-Überschrift ändern

In `app/components/LogoCarousel.tsx` (ca. Zeile 40-45):

```tsx
<h2 className="...">
  Unsere Partner & Kunden  {/* Hier anpassen */}
</h2>
<p className="...">
  Vertrauen von...  {/* Hier anpassen */}
</p>
```

---

## Troubleshooting

### Logos werden nicht angezeigt
1. Überprüfen Sie den Dateipfad: `public/logos/partners/dateiname.png`
2. Stellen Sie sicher, dass der Dateiname im Array korrekt ist
3. Prüfen Sie die Browser-Konsole auf Fehler

### Testimonials erscheinen nicht
1. Überprüfen Sie, dass mindestens ein Testimonial im Array vorhanden ist
2. Stellen Sie sicher, dass alle erforderlichen Felder ausgefüllt sind
3. Prüfen Sie die Browser-Konsole auf TypeScript-Fehler

### Karussell scrollt nicht
1. Stellen Sie sicher, dass mindestens 2 Logos vorhanden sind
2. Überprüfen Sie die Browser-Konsole auf CSS/Animation-Fehler
3. Testen Sie in einem anderen Browser

---

## Weitere Änderungen in diesem Update

### Telefonnummer aktualisiert
Die Telefonnummer wurde in allen Dateien auf **0228 9727884-0** aktualisiert:
- `app/welcome/welcome.tsx`
- `app/routes/datenschutz.tsx`
- `app/routes/impressum.tsx`

### Kassensystem-Bilder lokalisiert
Die Unsplash-Bilder für die Kassensysteme wurden heruntergeladen und lokal gespeichert:
- `public/kassensystem-stationaer.jpg`
- `public/kassensystem-mobil.jpg`
- `public/kassensystem-cloud.jpg`

Alle Referenzen wurden aktualisiert, um datenschutzkonform zu sein (keine externen Ressourcen).

---

## Support

Bei Fragen zur Integration oder Anpassung der Komponenten wenden Sie sich an das Entwicklungsteam.
