// ============================================================================
// Jamlex — i18n engine
// ----------------------------------------------------------------------------
// Loads locale JSON from /locales/{code}.json, sets <html lang dir>, applies
// translations to elements via data attributes:
//
//   <h1 data-i18n="auth.signInTitle">             — replaces textContent
//   <input data-i18n-attr="placeholder:auth.email"> — sets attribute(s)
//   <span data-i18n="home.streakDays" data-i18n-vars='{"n":5}'> — interpolates
//
// Test-phase default locale = 'fa'. The user can override via the picker;
// choice persists in localStorage.
//
// Architecture rule: the existence of this file is WHY there must never be
// hardcoded text in HTML. Anything user-visible goes through here.
// ============================================================================

const STORAGE_KEY = 'jamlex.locale';
const DEFAULT_LOCALE = 'fa';            // Phase 1 test-phase default
const SUPPORTED = ['en', 'fa'];         // Add 'ar', 'el', 'tr' here when ready

let currentLocale = null;
let dict = {};

// ─── Public API ────────────────────────────────────────────────────────────

export async function initI18n() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const initial = SUPPORTED.includes(stored) ? stored : DEFAULT_LOCALE;
  await setLocale(initial, /*persist*/ false);
}

export async function setLocale(code, persist = true) {
  if (!SUPPORTED.includes(code)) {
    console.warn(`[i18n] unsupported locale "${code}", falling back to ${DEFAULT_LOCALE}`);
    code = DEFAULT_LOCALE;
  }
  const res = await fetch(`/locales/${code}.json`, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`Failed to load locale ${code}: ${res.status}`);
  dict = await res.json();
  currentLocale = code;

  // Set <html lang dir> — this is what flips RTL / LTR across the whole site.
  document.documentElement.lang = code;
  document.documentElement.dir = dict._meta?.dir || 'ltr';
  // Set body font family per locale (Vazirmatn for fa, Inter for en).
  if (dict._meta?.fontFamily) {
    document.documentElement.style.setProperty('--font-family', dict._meta.fontFamily);
  }

  if (persist) localStorage.setItem(STORAGE_KEY, code);
  applyToDom(document);
  document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { locale: code } }));
}

export function getLocale() {
  return currentLocale;
}

export function supportedLocales() {
  return SUPPORTED.slice();
}

/**
 * Translate a dotted key. Optional vars object replaces {placeholders}.
 * If the key is missing, returns the key itself (visible in UI, easy to spot).
 */
export function t(key, vars) {
  const value = lookup(dict, key);
  if (typeof value !== 'string') return key;
  if (!vars) return value;
  return value.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}

/**
 * Apply translations to every [data-i18n] / [data-i18n-attr] / [data-i18n-html]
 * inside `root`. Call after rendering dynamic content.
 */
export function applyToDom(root = document) {
  // data-i18n="key.path"  →  set textContent
  for (const el of root.querySelectorAll('[data-i18n]')) {
    const key = el.dataset.i18n;
    const vars = parseVars(el.dataset.i18nVars);
    el.textContent = t(key, vars);
  }
  // data-i18n-html="key.path"  →  set innerHTML (use carefully, for links inside copy).
  // Also converts \n in the translation to <br/> for multi-line copy.
  for (const el of root.querySelectorAll('[data-i18n-html]')) {
    const key = el.dataset.i18nHtml;
    const vars = parseVars(el.dataset.i18nVars);
    const value = t(key, vars);
    el.innerHTML = value.replace(/\n/g, '<br/>');
  }
  // data-i18n-attr="placeholder:key.path; aria-label:key.path"
  for (const el of root.querySelectorAll('[data-i18n-attr]')) {
    const spec = el.dataset.i18nAttr;
    const vars = parseVars(el.dataset.i18nVars);
    for (const pair of spec.split(';')) {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (!attr || !key) continue;
      el.setAttribute(attr, t(key, vars));
    }
  }
}

// ─── Internals ─────────────────────────────────────────────────────────────

function lookup(obj, dottedKey) {
  return dottedKey.split('.').reduce((acc, k) => (acc && k in acc ? acc[k] : undefined), obj);
}

function parseVars(jsonStr) {
  if (!jsonStr) return undefined;
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    console.warn('[i18n] invalid data-i18n-vars JSON:', jsonStr);
    return undefined;
  }
}
