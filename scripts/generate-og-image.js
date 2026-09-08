import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgPath = path.resolve(__dirname, '../public/og-image.svg');
const pngPath = path.resolve(__dirname, '../public/og-image.png');

async function convertSvgToPng() {
  try {
    const svgBuffer = fs.readFileSync(svgPath);

    await sharp(svgBuffer)
      .resize(1200, 630)
      .png()
      .toFile(pngPath);

    console.log(`✅ Sucesso! Imagem salva em: ${pngPath}`);
  } catch (err) {
    console.error('❌ Erro ao converter SVG para PNG:', err);
  }
}

convertSvgToPng();

