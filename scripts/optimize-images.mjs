import sharp from 'sharp';
import { readdirSync, mkdirSync, renameSync, existsSync } from 'fs';
import { join, relative, parse, sep } from 'path';
import { cwd } from 'process';

const ROOT = join(cwd(), 'static', 'images');
const BACKUP = join(ROOT, '_originales');

const MAX_WIDTH_BY_DIR = {
  hero: 1920,
  colecciones: 1200,
  gallery: 800,
  servicios: 800,
  'tech-lentes': 560,
};

function getMaxWidth(filePath) {
  const rel = relative(ROOT, filePath);
  const parts = rel.split(sep);
  for (const dir of Object.keys(MAX_WIDTH_BY_DIR)) {
    if (parts.some((p) => p.startsWith(dir))) {
      return MAX_WIDTH_BY_DIR[dir];
    }
  }
  return 1920;
}

function getJpgFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== '_originales') {
      files.push(...getJpgFiles(fullPath));
    } else if (entry.isFile() && /\.jpe?g$/i.test(entry.name)) {
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

  const files = getJpgFiles(ROOT);
  console.log(`Found ${files.length} JPG files to process\n`);

  let success = 0;
  let errors = 0;

  for (const file of files) {
    const { name, dir } = parse(file);
    const webpPath = join(dir, `${name}.webp`);
    const maxWidth = getMaxWidth(file);
    const relPath = relative(ROOT, file);

    try {
      const metadata = await sharp(file).metadata();
      const width = metadata.width || 0;
      const height = metadata.height || 0;

      const pipeline = sharp(file);

      if (width > maxWidth) {
        pipeline.resize({ width: maxWidth, withoutEnlargement: true });
      }

      await pipeline.webp({ quality: 85 }).toFile(webpPath);

      const backupDir = join(BACKUP, relative(ROOT, dir));
      if (!existsSync(backupDir)) {
        mkdirSync(backupDir, { recursive: true });
      }
      renameSync(file, join(backupDir, `${name}.jpg`));

      const oldSize = (await sharp(join(backupDir, `${name}.jpg`)).metadata()).size || 0;
      const newSize = (await sharp(webpPath).metadata()).size || 0;
      const pct = oldSize ? ((1 - newSize / oldSize) * 100).toFixed(1) : '?';

      console.log(
        `✓ ${relPath}  ${width}x${height} → ${maxWidth}px  ` +
          `${(oldSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  (-${pct}%)`,
      );
      success++;
    } catch (err) {
      console.error(`✗ ${relPath}: ${err.message}`);
      errors++;
    }
  }

  console.log(`\nDone. ${success} converted, ${errors} errors.`);
}

main();
