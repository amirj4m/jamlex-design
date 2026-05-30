// ============================================================================
// Jamlex — Per-screen bootstrap
// ----------------------------------------------------------------------------
// Imported by every screen page to wire up i18n, theme, audio, and the
// preview controls (locale/theme picker + "back to hub" link).
// ============================================================================

import { initI18n, setLocale, getLocale, supportedLocales } from './i18n.js?v=k1jfm8cu';
import { initTheme, setTheme, getTheme } from './theme.js?v=k1jfm8cu';
import { initAudio } from './audio.js?v=k1jfm8cu';
import { injectStamps } from './hero.js?v=k1jfm8cu';
import { injectNavs } from './bottomnav.js?v=k1jfm8cu';
import { mountAllStages } from './lottie.js?v=k1jfm8cu';
import './popup.js?v=k1jfm8cu';  // side-effect: registers window.showPopup

(async function bootstrap() {
  initTheme();
  injectNavs();         // before i18n so the injected i18n attrs get applied
  await initI18n();
  initAudio();
  injectStamps();       // SVG fallback hero stamps (legacy, will be retired)
  mountAllStages();     // Lottie stages (the new way)
  wireControls();
})();

function wireControls() {
  const locale = document.querySelector('[data-locale-picker]');
  if (locale) {
    locale.value = getLocale();
    locale.addEventListener('change', () => setLocale(locale.value));
    document.addEventListener('i18n:changed', () => { locale.value = getLocale(); });
  }

  const theme = document.querySelector('[data-theme-picker]');
  if (theme) {
    theme.value = getTheme();
    theme.addEventListener('change', () => setTheme(theme.value));
    document.addEventListener('theme:changed', () => { theme.value = getTheme(); });
  }
}
