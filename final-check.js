import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';

async function checkImages() {
  const files = fs.readdirSync(publicDir);
  console.log("--- FINAL INTEGRITY CHECK ---");
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const ext = path.extname(file).toLowerCase();
    
    if (['.webp', '.png', '.jpg', '.jpeg'].includes(ext)) {
      try {
        const metadata = await sharp(filePath).metadata();
        console.log(`[OK] ${file}: ${metadata.width}x${metadata.height} (${metadata.format})`);
      } catch (err) {
        console.error(`[FAIL] ${file}:`, err.message);
      }
    }
  }
}

checkImages();
