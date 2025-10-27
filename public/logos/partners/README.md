# Partner Logos

Dieser Ordner enthält die Logos der Partner und Kunden für das Logo-Karussell auf der Homepage.

## Verwendung

1. Fügen Sie Ihre Logo-Dateien in diesen Ordner ein
2. Unterstützte Formate: PNG, SVG, JPG, WEBP
3. Empfohlene Größe: 200-400px Breite, transparenter Hintergrund bei PNG/SVG

## Dateinamen-Beispiele

- `partner-company-1.png`
- `kunde-restaurant-x.svg`
- `firma-beispiel.png`

## Integration

Die Logos werden automatisch im Logo-Karussell auf der Startseite angezeigt.
Aktualisieren Sie die `logos` Array in der LogoCarousel-Komponente oder in welcome.tsx:

```tsx
<LogoCarousel
  logos={[
    "partner-company-1.png",
    "kunde-restaurant-x.svg",
    "firma-beispiel.png"
  ]}
/>
```

## Platzhalter

Wenn keine echten Logos vorhanden sind, werden automatisch Platzhalter angezeigt.
