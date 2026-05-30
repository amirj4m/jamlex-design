// ============================================================================
// Jamlex — Per-screen bootstrap
// ----------------------------------------------------------------------------
// Imported by every screen page to wire up i18n, theme, audio, and the
// preview controls (locale/theme picker + "back to hub" link).
// ============================================================================

import { initI18n, setLocale, getLocale, supportedLocales } from './i18n.js?v=mpsq6o8g';
import { initTheme, setTheme, getTheme } from './theme.js?v=mpsq6o8g';
import { initAudio } from './audio.js?v=mpsq6o8g';
import { injectStamps } from './hero.js?v=mpsq6o8g';
import { injectNavs } from './bottomnav.js?v=mpsq6o8g';
import { mountAllStages } from './lottie.js?v=mpsq6o8g';
import './popup.js?v=mpsq6o8g';  // side-effect: registers window.showPopup

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
