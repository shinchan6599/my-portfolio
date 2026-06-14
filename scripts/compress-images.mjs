// One-off media optimizer: resizes oversized images to a max dimension and
// re-encodes them in place. Auto-orients from EXIF (so phone photos don't end
// up sideways once metadata is stripped). Safe to re-run — only rewrites a file
// when the result is actually smaller.
//
//   node scripts/compress-images.mjs
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOT = "public";
const MAX_DIM = 1920;
const JPEG_QUALITY = 80;

const exts = new Set([".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

let before = 0;
let after = 0;
let processed = 0;
let skipped = 0;

for await (const file of walk(ROOT)) {
  if (!exts.has(extname(file).toLowerCase())) continue;
  const origSize = (await stat(file)).size;
  before += origSize;

  try {
    const input = await readFile(file);
    let img = sharp(input, { failOn: "none" }).rotate(); // apply EXIF orientation
    const meta = await img.metadata();

    if (meta.width && meta.height && Math.max(meta.width, meta.height) > MAX_DIM) {
      img = img.resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true });
    }

    const isPng = extname(file).toLowerCase() === ".png";
    const out = isPng
      ? await img.png({ compressionLevel: 9, palette: true }).toBuffer()
      : await img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();

    if (out.length < origSize) {
      await writeFile(file, out);
      after += out.length;
      processed++;
      const pct = Math.round((1 - out.length / origSize) * 100);
      console.log(`✓ ${file}  ${(origSize / 1e6).toFixed(1)}MB → ${(out.length / 1e6).toFixed(1)}MB (-${pct}%)`);
    } else {
      after += origSize;
      skipped++;
    }
  } catch (e) {
    after += origSize;
    skipped++;
    console.warn(`! skipped ${file}: ${e.message}`);
  }
}

console.log(
  `\nDone. ${processed} compressed, ${skipped} left as-is.\nTotal: ${(before / 1e6).toFixed(1)}MB → ${(after / 1e6).toFixed(1)}MB (saved ${((before - after) / 1e6).toFixed(1)}MB)`
);
