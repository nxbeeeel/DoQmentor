import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');
const srcSvg = join(root, 'public', 'logo.svg');
const outPng = join(root, 'public', 'logo.png');

async function ensureDir(filePath) {
  await mkdir(dirname(filePath), { recursive: true });
}

async function run() {
  const svgBuffer = await readFile(srcSvg);
  await ensureDir(outPng);
  // Generate a crisp, balanced PNG sized for UI usage
  const size = 512; // square; adjust if needed
  const png = await sharp(svgBuffer)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
  await writeFile(outPng, png);
  console.log(`Exported ${outPng}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});


