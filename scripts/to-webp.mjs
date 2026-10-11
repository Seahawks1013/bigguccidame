// Convert images to .webp for src/assets.
// Usage: node scripts/to-webp.mjs <file-or-folder> [out-dir=src/assets]
import sharp from 'sharp';
import { readdirSync, statSync } from 'node:fs';
import { join, parse } from 'node:path';

const [input, out = 'src/assets'] = process.argv.slice(2);
if (!input) throw new Error('Usage: node scripts/to-webp.mjs <file-or-folder> [out-dir]');

const files = statSync(input).isDirectory()
  ? readdirSync(input).map((f) => join(input, f))
  : [input];

for (const file of files.filter((f) => /\.(jpe?g|png|gif|avif|tiff?)$/i.test(f))) {
  const dest = join(out, parse(file).name + '.webp');
  const info = await sharp(file).webp({ quality: 82 }).toFile(dest);
  console.log(`${file} (${statSync(file).size} B) -> ${dest} (${info.size} B, ${info.width}x${info.height})`);
}
