import fs from 'fs';
import path from 'path';

const publicDir = './public';

function cleanup() {
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.webp') {
      console.log(`Deleting corrupt webp: ${file}`);
      fs.unlinkSync(path.join(publicDir, file));
    }
  }
}

cleanup();
