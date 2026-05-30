// ============================================================================
// Jamlex — App bootstrap
// ----------------------------------------------------------------------------
// Coordinates the global controllers (i18n, theme, audio) for the index page
// and the screen previews.
// ============================================================================

import { initI18n, setLocale, getLocale, supportedLocales } from './i18n.js?v=mpspvfd2';
import { initTheme, setTheme, getTheme } from './theme.js?v=mpspvfd2';
import { initAudio } from './audio.js?v=mpspvfd2';
import './popup.js?v=mpspvfd2';  // side-effect: registers window.showPopup

(async function bootstrap() {
  initTheme();
  await initI18n();
  initAudio();
  wireLocalePicker();
  wireThemePicker();
})();

function wireLocalePicker() {
  const sel = document.querySelector('[data-locale-picker]');
  if (!sel) return;
  sel.value = getLocale();
  sel.addEventListener('change', () => setLocale(sel.value));
  document.addEventListener('i18n:changed', () => { sel.value = getLocale(); });
}

function wireThemePicker() {
  const sel = document.querySelector('[data-theme-picker]');
  if (!sel) return;
  sel.value = getTheme();
  sel.addEventListener('change', () => setTheme(sel.value));
  document.addEventListener('theme:changed', () => { sel.value = getTheme(); });
}
