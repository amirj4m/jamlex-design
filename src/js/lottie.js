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

    // If the JSON 404s the player silently no-ops. Show a soft fallback chip
    // with the key so we can spot missing assets during preview.
    setTimeout(() => {
      if (!el.querySelector('svg')) {
        el.innerHTML = `<div style="
          width:100%;height:100%;display:flex;align-items:center;
          justify-content:center;background:var(--jx-stamp-bg);
          border-radius:28px;color:var(--jx-text-2);font-size:11px;
          font-family:var(--font-family-mono);text-align:center;
          padding:8px;">[lottie missing]<br/>${key}</div>`;
      }
    }, 1200);
  } catch (err) {
    el.innerHTML = `<div style="
      width:100%;height:100%;display:flex;align-items:center;
      justify-content:center;background:var(--jx-stamp-bg);
      border-radius:28px;color:var(--jx-danger);font-size:11px;">
      ⚠ lottie load failed</div>`;
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
