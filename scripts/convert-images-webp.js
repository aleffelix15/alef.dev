import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const publicDir = 'public';

const imageDirs = [
  'public/assets',
  'public/geekfilme',
  'public/vertice',
];

const extensions = ['.png', '.jpg', '.jpeg'];

async function convertToWebp(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!extensions.includes(ext)) return;
  
  const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const name = basename(filePath);
  
  // Skip avatar poster (it's used as video poster and needs to stay jpg)
  if (name === 'hero-avatar-poster.jpg') {
    console.log(`  SKIP (video poster): ${filePath}`);
    return;
  }
  
  try {
    await sharp(filePath)
      .webp({ quality: 82, effort: 4 })
      .toFile(outputPath);
    
    const origSize = statSync(filePath).size;
    const webpSize = statSync(outputPath).size;
    const savings = ((1 - webpSize / origSize) * 100).toFixed(1);
    console.log(`  ✓ ${name} → .webp (${(origSize/1024).toFixed(0)}KB → ${(webpSize/1024).toFixed(0)}KB, -${savings}%)`);
  } catch (err) {
    console.error(`  ✗ Failed: ${filePath}`, err.message);
  }
}

async function processDir(dir) {
  console.log(`\nProcessing: ${dir}/`);
  try {
    const files = readdirSync(dir);
    for (const file of files) {
      const filePath = join(dir, file);
      const stat = statSync(filePath);
      if (stat.isFile() && extensions.includes(extname(file).toLowerCase())) {
        await convertToWebp(filePath);
      }
    }
  } catch (err) {
    console.log(`  Directory not found or empty: ${dir}`);
  }
}

async function main() {
  console.log('Converting images to WebP...\n');
  for (const dir of imageDirs) {
    await processDir(dir);
  }
  console.log('\nDone!');
}

main();
