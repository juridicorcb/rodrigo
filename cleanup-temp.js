import fs from 'fs';
import path from 'path';

const publicDir = './public';
const files = fs.readdirSync(publicDir);

for (const file of files) {
  if (file.startsWith('s-') && (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg'))) {
    console.log(`Deleting temporary file: ${file}`);
    fs.unlinkSync(path.join(publicDir, file));
  }
}
