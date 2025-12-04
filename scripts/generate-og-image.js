import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateOGImage() {
  const width = 1200;
  const height = 630;

  // Create dark gradient background
  const background = Buffer.from(`
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a"/>
          <stop offset="50%" style="stop-color:#111827"/>
          <stop offset="100%" style="stop-color:#0a0a0a"/>
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#3b82f6"/>
          <stop offset="100%" style="stop-color:#8b5cf6"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      <!-- Subtle grid pattern -->
      <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
        <path d="M 64 0 L 0 0 0 64" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
      </pattern>
      <rect width="${width}" height="${height}" fill="url(#grid)"/>
      <!-- Gradient accent circles -->
      <circle cx="100" cy="100" r="200" fill="rgba(99, 102, 241, 0.1)" filter="blur(60px)"/>
      <circle cx="1100" cy="530" r="200" fill="rgba(139, 92, 246, 0.1)" filter="blur(60px)"/>
      <!-- Text -->
      <text x="${width/2}" y="280" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">ByteServ</text>
      <text x="${width/2}" y="360" font-family="Arial, sans-serif" font-size="32" fill="#9ca3af" text-anchor="middle">IT &amp; Kassensysteme für Gastronomie &amp; Mittelstand</text>
      <text x="${width/2}" y="420" font-family="Arial, sans-serif" font-size="24" fill="#6b7280" text-anchor="middle">Direkt vor Ort in Bonn</text>
      <!-- Bottom accent line -->
<!--      <rect x="400" y="500" width="400" height="4" rx="2" fill="url(#accent)"/>-->
    </svg>
  `);

  await sharp(background)
    .png()
    .toFile(path.join(__dirname, '../public/og-image.png'));

  console.log('OG-Image generated: public/og-image.png');
}

generateOGImage().catch(console.error);
