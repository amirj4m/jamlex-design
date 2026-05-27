// Generates minimal valid Lottie JSON files for every slot. Each placeholder
// is a 200×200 canvas with a colored rounded square + an emoji-ish hint of
// what should sit there. Real animations come later from lottiefiles.com.
//
// Run: node scripts/gen-placeholders.mjs

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'src', 'lottie');
mkdirSync(outDir, { recursive: true });

// Every slot — name → { tint, label }
const SLOTS = [
  { name: 'hero-lock',           tint: '#4ECDC4', glyph: 'L' },
  { name: 'hero-profile',        tint: '#4ECDC4', glyph: 'P' },
  { name: 'hero-phone',          tint: '#6C5CE7', glyph: '☏' },
  { name: 'hero-otp',            tint: '#6C5CE7', glyph: '#' },
  { name: 'hero-envelope-check', tint: '#4ECDC4', glyph: '✉' },
  { name: 'hero-trophy',         tint: '#F5B945', glyph: '★' },
  { name: 'hero-crown',          tint: '#4ECDC4', glyph: '♛' },
  { name: 'empty-box-plane',     tint: '#A5DCD5', glyph: '✈' },
  { name: 'empty-book-bookmark', tint: '#A5DCD5', glyph: '⌘' },
  { name: 'gate-lock-leaves',    tint: '#4ECDC4', glyph: '✦' },
  { name: 'wod-paper-plane',     tint: '#6C5CE7', glyph: '➤' },
  { name: 'vocab-banner-book',   tint: '#fff',    glyph: '📕' },
  { name: 'qa-book',             tint: '#5DC1B9', glyph: '◫' },
  { name: 'qa-mywords',          tint: '#6C5CE7', glyph: '☰' },
  { name: 'bookcard-ielts',      tint: '#66BB6A', glyph: 'E' },
  { name: 'bookcard-504',        tint: '#EF5350', glyph: '5' },
  { name: 'bookcard-gre',        tint: '#FFA726', glyph: 'G' },
  { name: 'bookcard-toefl',      tint: '#42A5F5', glyph: 'T' },
  { name: 'vocab-footer-trophy', tint: '#F5B945', glyph: '🏆' },
  { name: 'quote-plant',         tint: '#7FCFC6', glyph: '⚘' },
  { name: 'streak-flame',        tint: '#FF7043', glyph: '🔥' },
  { name: 'splash-logo',         tint: '#00B4A6', glyph: 'J' },
];

/**
 * Build a tiny Lottie animation that just shows the colored circle
 * with a glyph in the middle. 60 fps, 60-frame loop, gentle "breath" scale.
 */
function buildLottie ({ tint, glyph }) {
  const rgbHex = tint.replace('#', '');
  const r = parseInt(rgbHex.slice(0, 2), 16) / 255;
  const g = parseInt(rgbHex.slice(2, 4), 16) / 255;
  const b = parseInt(rgbHex.slice(4, 6), 16) / 255;
  return {
    v: '5.7.4',
    fr: 60,
    ip: 0,
    op: 120,
    w: 200,
    h: 200,
    nm: 'Placeholder',
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0, ind: 1, ty: 4, nm: 'circle', sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1, k: [
              { t: 0,   s: [92, 92, 100], h: 0, i: { x: 0.4, y: 1 }, o: { x: 0.6, y: 0 } },
              { t: 60,  s: [104, 104, 100], h: 0, i: { x: 0.4, y: 1 }, o: { x: 0.6, y: 0 } },
              { t: 120, s: [92, 92, 100] },
            ],
          },
        },
        shapes: [
          {
            ty: 'el',
            d: 1,
            s: { a: 0, k: [140, 140] },
            p: { a: 0, k: [0, 0] },
            nm: 'disc',
          },
          {
            ty: 'fl',
            c: { a: 0, k: [r, g, b, 1] },
            o: { a: 0, k: 100 },
            nm: 'fill',
          },
          { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
      {
        ddd: 0, ind: 2, ty: 5, nm: 'text', sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          p: { a: 0, k: [100, 124, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        t: {
          d: { k: [{ t: 0, s: { s: 64, f: 'Arial', t: glyph, j: 2, tr: 0, lh: 76.8, ls: 0, fc: [1, 1, 1] } }] },
          p: {},
          m: { g: 1, a: { a: 0, k: [0, 0] } },
        },
      },
    ],
    markers: [],
  };
}

let count = 0;
for (const slot of SLOTS) {
  const json = buildLottie(slot);
  writeFileSync(join(outDir, slot.name + '.json'), JSON.stringify(json));
  count++;
}
console.log(`Wrote ${count} placeholder lottie files to ${outDir}`);
