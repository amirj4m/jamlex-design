// Adds ?v=<timestamp> to every /css/* and /js/* href/src in all screen
// HTML files. Forces browsers to fetch the new version even when the CDN
// is serving max-age=14400.
//
// Run: node scripts/cache-bust.mjs

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src');
const SCREENS = join(SRC, 'screens');

const version = Date.now().toString(36); // short, unique per run

function bust (html) {
  // /css/foo.css → /css/foo.css?v=XX (strips any existing ?v=)
  html = html.replace(
    /(<link[^>]*\bhref=")(\/css\/[^"?]+\.css)(\?[^"]*)?"/g,
    `$1$2?v=${version}"`
  );
  // /js/foo.js → /js/foo.js?v=XX
  html = html.replace(
    /(<script[^>]*\bsrc=")(\/js\/[^"?]+\.js)(\?[^"]*)?"/g,
    `$1$2?v=${version}"`
  );
  // Inline module imports like `import { t } from '/js/i18n.js'`
  html = html.replace(
    /(from\s+["'])(\/js\/[^"'?]+\.js)(\?[^"']*)?(["'])/g,
    `$1$2?v=${version}$4`
  );
  return html;
}

let n = 0;
// Screen HTML files
for (const f of readdirSync(SCREENS)) {
  if (!f.endsWith('.html')) continue;
  const p = join(SCREENS, f);
  const before = readFileSync(p, 'utf-8');
  const after = bust(before);
  if (after !== before) {
    writeFileSync(p, after);
    n++;
  }
}
// Also the hub index
const idx = join(SRC, 'index.html');
const before = readFileSync(idx, 'utf-8');
const after = bust(before);
if (after !== before) {
  writeFileSync(idx, after);
  n++;
}

// Bust JS-side imports inside /js/*.js too (screen-shell imports etc.)
const JS = join(SRC, 'js');
for (const f of readdirSync(JS)) {
  if (!f.endsWith('.js')) continue;
  const p = join(JS, f);
  const before = readFileSync(p, 'utf-8');
  const after = before.replace(
    /(from\s+["'])(\.\/[^"'?]+\.js)(\?[^"']*)?(["'])/g,
    `$1$2?v=${version}$4`
  );
  if (after !== before) {
    writeFileSync(p, after);
    n++;
  }
}

console.log(`Cache-busted ${n} file(s) with v=${version}`);
