/**
 * Jamlex Lottie loader
 * ----------------------------------------------------------------------------
 * Render Lottie animations into <div class="lottie-stage" data-lottie="KEY"></div>.
 * The KEY maps to a file under /lottie/KEY.json.
 *
 * The real `lottie-web` library is loaded from CDN once on first call.
 * Animations autoplay + loop. Replace the .json file in /lottie/ to swap
 * the visual without touching any HTML.
 *
 * To turn off the autoplay, add data-lottie-static to the stage element.
 * To control speed, add data-lottie-speed="0.5" (default 1).
 */

// Self-hosted lottie-web — no external CDN dependency.
// Lives under /vendor/ so the strict CSP (script-src 'self') allows it.
const LOTTIE_SRC = '/vendor/lottie.min.js';

let libPromise = null;

function loadLib () {
  if (libPromise) return libPromise;
  libPromise = new Promise((resolve, reject) => {
    if (window.lottie) return resolve(window.lottie);
    const script = document.createElement('script');
    script.src = LOTTIE_SRC;
    script.async = true;
    script.onload = () => resolve(window.lottie);
    script.onerror = () => reject(new Error('failed to load lottie-web from ' + LOTTIE_SRC));
    document.head.appendChild(script);
  });
  return libPromise;
}

async function mountStage (el) {
  if (el.dataset.lottieMounted === 'true') return;
  el.dataset.lottieMounted = 'true';

  const key = el.dataset.lottie;
  if (!key) return;

  // Mark the element so CSS can show a graceful gradient-disc placeholder
  // until lottie-web finishes rendering (or, if it can't, indefinitely).
  el.classList.add('lottie-stage--pending');

  try {
    const lib = await loadLib();
    const url = `/lottie/${encodeURIComponent(key)}.json`;
    const speed = parseFloat(el.dataset.lottieSpeed || '1');
    const isStatic = el.hasAttribute('data-lottie-static');

    const anim = lib.loadAnimation({
      container: el,
      renderer: 'svg',
      loop: !isStatic,
      autoplay: !isStatic,
      path: url,
    });
    anim.setSpeed(speed);

    // The DOM_LOADED event fires only when the SVG is actually painted.
    // Until then, the CSS placeholder fills the space.
    anim.addEventListener('DOMLoaded', () => {
      el.classList.remove('lottie-stage--pending');
    });
    // If lottie can't make sense of the JSON, the data_failed event fires
    // and we just leave the CSS placeholder in place — no ugly red text.
    anim.addEventListener('data_failed', () => {
      // Stay in the --pending visual; do not flash an error.
    });
  } catch (err) {
    // Network down or the lottie-web library itself failed to load.
    // The CSS placeholder stays visible — silent graceful degradation.
  }
}

function mountAllStages () {
  document.querySelectorAll('.lottie-stage[data-lottie]').forEach(mountStage);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountAllStages);
} else {
  mountAllStages();
}

export { mountAllStages };
