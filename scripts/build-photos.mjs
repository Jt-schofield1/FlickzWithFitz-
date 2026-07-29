/**
 * Generates the responsive derivatives the gallery ships.
 * Source JPEGs are 1400-1500px prototype exports; nothing in the app reads them directly.
 *
 *   node scripts/build-photos.mjs "<source dir containing photos/>"
 *
 * Writes public/photos/<name>-{400,800,1400}.webp, public/photos/<name>.jpg
 * and data/photo-meta.json (intrinsic dimensions, so every <img> can carry
 * width/height and the grid never shifts).
 */
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WIDTHS = [400, 800, 1400];
const src = path.resolve(process.argv[2] ?? '.', 'photos');
const outDir = path.resolve('public/photos');

await mkdir(outDir, { recursive: true });

const files = (await readdir(src)).filter((f) => /\.jpe?g$/i.test(f));
files.sort();

const meta = {};
let done = 0;

for (const file of files) {
  const name = file.replace(/\.jpe?g$/i, '');
  const input = path.join(src, file);
  const image = sharp(input).rotate();
  const { width, height } = await image.metadata();
  meta[name] = { w: width, h: height };

  for (const w of WIDTHS) {
    await sharp(input)
      .rotate()
      .resize({ width: Math.min(w, width), withoutEnlargement: true })
      .webp({ quality: w >= 1400 ? 74 : 78, effort: 5 })
      .toFile(path.join(outDir, `${name}-${w}.webp`));
  }

  await sharp(input)
    .rotate()
    .resize({ width: Math.min(1400, width), withoutEnlargement: true })
    .jpeg({ quality: 78, progressive: true, mozjpeg: true })
    .toFile(path.join(outDir, `${name}.jpg`));

  done += 1;
  process.stdout.write(`\r${done}/${files.length} ${name.padEnd(28)}`);
}

await writeFile(
  path.resolve('data/photo-meta.json'),
  JSON.stringify(meta, null, 2) + '\n'
);

process.stdout.write(`\ndone — ${files.length} photos\n`);
