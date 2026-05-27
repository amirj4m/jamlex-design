// Generates minimal valid Lottie JSON files for every slot. Each placeholder
// is a 200×200 canvas with a tinted disc that gently breathes. The format
// uses only shape layers (ty=4) with a single ellipse — no text layers,
// no fonts, no missing glyphs — so lottie-web renders them without
// needing any font assets.
//
// Real animations come later from lottiefiles.com.
//
// Run: node scripts/gen-placeholders.mjs

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'src', 'lottie');
mkdirSync(outDir, { recursive: true });

// Slot → tint color. Real animation arrives later; this just keeps the
// stage filled with a colored disc that pulses, matching its purpose.
const SLOTS = [
  { name: 'hero-lock',           tint: '#4ECDC4' },
  { name: 'hero-profile',        tint: '#00B4A6' },
  { name: 'hero-phone',          tint: '#6C5CE7' },
  { name: 'hero-otp',            tint: '#6C5CE7' },
  { name: 'hero-envelope-check', tint: '#4ECDC4' },
  { name: 'hero-trophy',         tint: '#F5B945' },
  { name: 'hero-crown',          tint: '#4ECDC4' },
  { name: 'empty-box-plane',     tint: '#A5DCD5' },
  { name: 'empty-book-bookmark', tint: '#A5DCD5' },
  { name: 'gate-lock-leaves',    tint: '#4ECDC4' },
  { name: 'wod-paper-plane',     tint: '#6C5CE7' },
  { name: 'vocab-banner-book',   tint: '#FFFFFF' },
  { name: 'qa-book',             tint: '#5DC1B9' },
  { name: 'qa-mywords',          tint: '#6C5CE7' },
  { name: 'bookcard-ielts',      tint: '#66BB6A' },
  { name: 'bookcard-504',        tint: '#EF5350' },
  { name: 'bookcard-gre',        tint: '#FFA726' },
  { name: 'bookcard-toefl',      tint: '#42A5F5' },
  { name: 'vocab-footer-trophy', tint: '#F5B945' },
  { name: 'quote-plant',         tint: '#7FCFC6' },
  { name: 'streak-flame',        tint: '#FF7043' },
  { name: 'splash-logo',         tint: '#00B4A6' },
];

function hexToRgbArr (hex) {
  const h = hex.replace('#', '');
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
    1,
  ];
}

/**
 * Build a tiny but VALID Lottie animation. One shape layer holding a single
 * grouped ellipse with a fill, animated with a subtle scale "breath" so it
 * looks alive while the real Lottie isn't loaded.
 *
 * Why a Group: lottie-web requires shape items to live inside a group
 * (`ty:"gr"`) with an `it` array. Top-level shapes get silently dropped.
 */
function buildLottie ({ tint }) {
  const [r, g, b, a] = hexToRgbArr(tint);
  return {
    v: '5.7.4',
    fr: 30,
    ip: 0,
    op: 60,
    w: 200,
    h: 200,
    nm: 'Placeholder',
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: 'disc',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0,  s: [92, 92, 100],   i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 30, s: [106, 106, 100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 60, s: [92, 92, 100] },
            ],
          },
        },
        ao: 0,
        shapes: [
          {
            ty: 'gr',
            nm: 'group',
            np: 2,
            it: [
              {
                ty: 'el',
                d: 1,
                s: { a: 0, k: [150, 150] },
                p: { a: 0, k: [0, 0] },
                nm: 'ellipse',
              },
              {
                ty: 'fl',
                c: { a: 0, k: [r, g, b, a] },
                o: { a: 0, k: 100 },
                r: 1,
                nm: 'fill',
              },
              {
                ty: 'tr',
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 },
                sk: { a: 0, k: 0 },
                sa: { a: 0, k: 0 },
                nm: 'transform',
              },
            ],
          },
        ],
        ip: 0,
        op: 60,
        st: 0,
        bm: 0,
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
