// ============================================================================
// Jamlex — Theme controller
// ----------------------------------------------------------------------------
// Manages light / dark / system theme via [data-theme] on <html>.
// "system" => no data-theme attribute, falls through to prefers-color-scheme.
// ============================================================================

const STORAGE_KEY = 'jamlex.theme';
const MODES = ['light', 'dark', 'system'];

export function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  setTheme(MODES.includes(stored) ? stored : 'system', /*persist*/ false);
  // React to OS-level changes when in "system" mode.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getTheme() === 'system') applyTheme('system');
  });
}

export function setTheme(mode, persist = true) {
  if (!MODES.includes(mode)) mode = 'system';
  applyTheme(mode);
  if (persist) localStorage.setItem(STORAGE_KEY, mode);
  document.dispatchEvent(new CustomEvent('theme:changed', { detail: { mode } }));
}

export function getTheme() {
  return localStorage.getItem(STORAGE_KEY) || 'system';
}

function applyTheme(mode) {
  if (mode === 'system') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', mode);
  }
  // Update meta theme-color too for browser chrome
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const styles = getComputedStyle(document.documentElement);
    meta.setAttribute('content', styles.getPropertyValue('--jx-bg').trim());
  }
}
