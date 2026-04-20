import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const files = [
  { old: 's-logo.png', new: 'final-logo.png', width: 800 },
  { old: 's-perfil.jpg', new: 'final-perfil.jpg', width: 1000 },
  { old: 's-d1.jpg', new: 'final-d1.jpg', width: 800 },
  { old: 's-d2.jpg', new: 'final-d2.jpg', width: 800 },
  { old: 's-d3.jpg', new: 'final-d3.jpg', width: 800 },
  { old: 's-d4.png', new: 'final-d4.jpg', width: 800 },
  { old: 's-d5.jpg', new: 'final-d5.jpg', width: 800 },
  { old: 's-d6.jpg', new: 'final-d6.jpg', width: 800 },
  { old: 's-d7.jpg', new: 'final-d7.jpg', width: 800 },
  { old: 's-d8.jpg', new: 'final-d8.jpg', width: 800 },
  { old: 's-d9.jpg', new: 'final-d9.jpg', width: 800 },
  { old: 's-d10.jpg', new: 'final-d10.jpg', width: 800 },
  { old: 's-d11.jpg', new: 'final-d11.jpg', width: 800 },
  { old: 's-d12.jpg', new: 'final-d12.jpg', width: 800 },
  { old: 's-d13.jpg', new: 'final-d13.jpg', width: 800 },
  { old: 's-d14.jpg', new: 'final-d14.jpg', width: 800 },
];

async function processImages() {
  for (const item of files) {
    const inputPath = path.join(publicDir, item.old);
    const outputPath = path.join(publicDir, item.new);
    
    if (fs.existsSync(inputPath)) {
      console.log(`Processing ${item.old} -> ${item.new}...`);
      try {
        let pipeline = sharp(inputPath).resize({ width: item.width, withoutEnlargement: true });
        
        if (item.new.endsWith('.jpg')) {
          await pipeline.jpeg({ quality: 85, mozjpeg: true }).toFile(outputPath);
        } else {
          await pipeline.png({ quality: 85 }).toFile(outputPath);
        }
        
        console.log(`[OK] Created ${item.new}`);
      } catch (err) {
        console.error(`[ERROR] Failed ${item.old}: ${err.message}`);
      }
    } else {
      console.warn(`[SKIP] Missing ${item.old}`);
    }
  }
}

processImages();
