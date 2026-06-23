import sharp from 'sharp';
import { readdirSync, mkdirSync, renameSync, existsSync, copyFileSync, unlinkSync } from 'fs';
import { join, relative, parse, sep } from 'path';
import { cwd } from 'process';

const ROOT = join(cwd(), 'src', 'lib', 'images');
const BACKUP = join(ROOT, '_originales');

const MAX_WIDTH_BY_DIR = {
  hero: 1920,
  colecciones: 600,
  gallery: 600,
  servicios: 600,
  'tech-lentes': 560,
  about: 600,
};

const PER_FILE_MAX_WIDTH = {
  'hero/6.webp': 400,
  'hero/3.webp': 400,
};

function getMaxWidth(filePath) {
  const rel = relative(ROOT, filePath);
  for (const [pattern, width] of Object.entries(PER_FILE_MAX_WIDTH)) {
    if (rel === pattern) return width;
  }
  const parts = rel.split(sep);
  for (const [dir, width] of Object.entries(MAX_WIDTH_BY_DIR)) {
    if (parts.some((p) => p.startsWith(dir))) {
      return width;
    }
  }
  return 1920;
}

function getImageFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== '_originales') {
      files.push(...getImageFiles(fullPath));
    } else if (entry.isFile() && /\.(webp|jpe?g|png|avif)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  if (!existsSync(ROOT)) {
    console.error(`Directory not found: ${ROOT}`);
    process.exit(1);
  }

  if (!existsSync(BACKUP)) {
    mkdirSync(BACKUP, { recursive: true });
  }

  const files = getImageFiles(ROOT);
  console.log(`Found ${files.length} image files to process\n`);

  let success = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    const { name, dir } = parse(file);
    const maxWidth = getMaxWidth(file);
    const relPath = relative(ROOT, file);

    try {
      const metadata = await sharp(file).metadata();
      const width = metadata.width || 0;
      const format = metadata.format || 'webp';

      if (width <= maxWidth) {
        console.log(`- ${relPath}  ${width}px <= ${maxWidth}px, skipping`);
        skipped++;
        continue;
      }

      const tmpPath = join(dir, `_tmp_${name}.${format}`);

      const pipeline = sharp(file);
      pipeline.resize({ width: maxWidth, withoutEnlargement: true });

      if (format === 'webp') {
        await pipeline.webp({ quality: 85 }).toFile(tmpPath);
      } else if (format === 'png') {
        await pipeline.png({ quality: 85 }).toFile(tmpPath);
      } else if (format === 'jpeg' || format === 'jpg') {
        await pipeline.jpeg({ quality: 85 }).toFile(tmpPath);
      } else if (format === 'avif') {
        await pipeline.avif({ quality: 80 }).toFile(tmpPath);
      }

      const backupSubDir = join(BACKUP, relative(ROOT, dir));
      if (!existsSync(backupSubDir)) {
        mkdirSync(backupSubDir, { recursive: true });
      }
      renameSync(file, join(backupSubDir, `${name}.${format}`));
      renameSync(tmpPath, file);

      const oldSize = (await sharp(join(backupSubDir, `${name}.${format}`)).metadata()).size || 0;
      const newSize = (await sharp(file).metadata()).size || 0;
      const pct = oldSize ? ((1 - newSize / oldSize) * 100).toFixed(1) : '?';

      console.log(
        `✓ ${relPath}  ${width}x${metadata.height} → ${maxWidth}px  ` +
          `${(oldSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  (-${pct}%)`,
      );
      success++;
    } catch (err) {
      console.error(`✗ ${relPath}: ${err.message}`);
      errors++;
    }
  }

  console.log(
    `\nDone. ${success} resized, ${skipped} skipped, ${errors} errors. Backup in ${BACKUP}`,
  );
}

main();
