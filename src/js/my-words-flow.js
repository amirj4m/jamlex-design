// ============================================================================
//  my-words-flow.js — single entry point for "Add to my words" across the app
//  LOCKED 2026-05-30
//
//  Behaviour (from product owner):
//    1. User taps any "Add to my words" button (book-reader lookup sheet,
//       lesson-words review page, …future surfaces).
//    2. If the user has NO categories yet → auto-create a default category
//       ("بدون دسته" / "Uncategorized") and add the word there. Show success.
//    3. If the user HAS categories → open a centred picker with the existing
//       categories + a "+ New category" row. After they pick, add the word
//       there and show success.
//
//  Storage (design preview only):
//    localStorage key  jamlex_word_cats
//    shape             [{ id, name, icon, color, words: [eng, …] }, …]
//    Persists across pages so library, lesson-words, my-words all see the
//    same set.
//
//  TODO(flutter): replace localStorage with a real Supabase / SQLite read.
//    Table: user_word_categories (id, user_id, name, icon, color)
//    Table: user_saved_words (id, user_id, word_id, category_id, added_at)
//    UPSERT on (user_id, word_id, category_id).
// ============================================================================

import { getLocale } from './i18n.js?v=1i74m4n9';

const STORAGE_KEY = 'jamlex_word_cats';

const I18N = {
  fa: {
    pickerTitle:  'به کدوم دسته‌بندی اضافه می‌شه؟',
    newCat:       'دسته‌بندی جدید',
    cancel:       'انصراف',
    defaultName:  'بدون دسته',
    promptName:   'اسم دسته‌بندی جدید',
    addedFmt:     function (word, cat) { return '«' + word + '» به «' + cat + '» اضافه شد'; },
    countFmt:     function (n) { return n.toLocaleString('fa-IR') + ' لغت'; },
  },
  en: {
    pickerTitle:  'Add to which category?',
    newCat:       'New category',
    cancel:       'Cancel',
    defaultName:  'Uncategorized',
    promptName:   'New category name',
    addedFmt:     function (word, cat) { return '«' + word + '» added to «' + cat + '»'; },
    countFmt:     function (n) { return n + ' words'; },
  },
};

function S () { return I18N[getLocale() === 'en' ? 'en' : 'fa']; }

function loadCats () {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) || [];
  } catch (e) { return []; }
}

function saveCats (cats) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cats)); } catch (e) { /* ignore */ }
}

const COLORS = ['#00B4A6', '#6C5CE7', '#E65100', '#C2185B', '#1565C0', '#558B2F', '#B27A12', '#283593'];
const ICONS  = ['📚', '⭐', '💡', '🔖', '🎯', '🧠', '🌟', '✨'];

function createCat (name) {
  const cats = loadCats();
  const newCat = {
    id: 'cat-' + Date.now() + '-' + Math.floor(Math.random() * 1e6),
    name: name,
    icon: ICONS[cats.length % ICONS.length],
    color: COLORS[cats.length % COLORS.length],
    words: [],
  };
  cats.push(newCat);
  saveCats(cats);
  return newCat;
}

function addWordToCat (catId, word) {
  const cats = loadCats();
  const cat = cats.find(function (c) { return c.id === catId; });
  if (!cat) return null;
  if (!cat.words.includes(word)) {
    cat.words.push(word);
    saveCats(cats);
  }
  return cat;
}

function flashSuccess (word, catName) {
  const msg = S().addedFmt(word, catName);
  if (window.popupSuccess) window.popupSuccess(msg);
  else if (window.console) console.log('[my-words]', msg);
}

// ─────────────────────────────────────────────────────────────────────────────
//  Picker UI — centred modal, built dynamically. Resolves with the chosen
//  category, or { isNew: true } if user picked "+ New category", or null
//  on cancel / outside-click.
// ─────────────────────────────────────────────────────────────────────────────
function showPicker (cats) {
  const s = S();
  return new Promise(function (resolve) {
    const overlay = document.createElement('div');
    overlay.className = 'mw-picker-scrim';
    overlay.dir = getLocale() === 'en' ? 'ltr' : 'rtl';

    const rows = cats.map(function (c) {
      const cnt = s.countFmt(c.words.length);
      return '<button type="button" class="mw-picker-row" data-cat-id="' + c.id + '">' +
        '<span class="mw-picker-icon" style="background:' + c.color + '22;color:' + c.color + ';">' + (c.icon || '📚') + '</span>' +
        '<span class="mw-picker-name">' + c.name + '</span>' +
        '<span class="mw-picker-count">' + cnt + '</span>' +
      '</button>';
    }).join('');

    overlay.innerHTML =
      '<div class="mw-picker-card">' +
        '<h3 class="mw-picker-title">' + s.pickerTitle + '</h3>' +
        '<div class="mw-picker-list">' +
          rows +
          '<button type="button" class="mw-picker-row mw-picker-row--new" data-cat-new>' +
            '<span class="mw-picker-icon mw-picker-icon--new">+</span>' +
            '<span class="mw-picker-name">' + s.newCat + '</span>' +
          '</button>' +
        '</div>' +
        '<button type="button" class="mw-picker-cancel" data-cat-cancel>' + s.cancel + '</button>' +
      '</div>';

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    function cleanup (result) {
      overlay.remove();
      document.body.style.overflow = '';
      resolve(result);
    }

    // Wire each button DIRECTLY rather than via delegation. Bit us
    // three times across the app — direct-attach is the safer default
    // for new dialogs going forward.
    overlay.querySelectorAll('[data-cat-id]').forEach(function (row) {
      row.addEventListener('click', function (e) {
        e.stopPropagation();
        const id = row.dataset.catId;
        const cat = cats.find(function (c) { return c.id === id; });
        cleanup(cat || null);
      });
    });
    const newBtn = overlay.querySelector('[data-cat-new]');
    if (newBtn) newBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      cleanup({ isNew: true });
    });
    const cancelBtn = overlay.querySelector('[data-cat-cancel]');
    if (cancelBtn) cancelBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      cleanup(null);
    });
    // Outside-click on the scrim only — fires when the user taps the
    // dimmed area around the card (e.target is literally the overlay).
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) cleanup(null);
    });
  });
}

// Browser-native prompt is good enough for design preview; Flutter will use
// a proper text-input modal.
function promptNewName () {
  const name = window.prompt(S().promptName);
  return name && name.trim() ? name.trim() : null;
}

/**
 * Main entry point. Call from any "Add to my words" button:
 *   import { addWordToMyWords } from '/js/my-words-flow.js?v=1i74m4n9';
 *   addWordToMyWords('reaction');
 *
 * Returns a Promise that resolves to the chosen category (or null if the
 * user cancelled).
 */
export async function addWordToMyWords (word) {
  if (!word) return null;
  const cats = loadCats();

  // Case A — user has NO categories yet. Auto-create the default and add.
  if (cats.length === 0) {
    const def = createCat(S().defaultName);
    addWordToCat(def.id, word);
    flashSuccess(word, def.name);
    return def;
  }

  // Case B — user HAS categories. Open the picker.
  const chosen = await showPicker(cats);
  if (!chosen) return null;

  if (chosen.isNew) {
    const name = promptNewName();
    if (!name) return null;
    const created = createCat(name);
    addWordToCat(created.id, word);
    flashSuccess(word, created.name);
    return created;
  }

  addWordToCat(chosen.id, word);
  flashSuccess(word, chosen.name);
  return chosen;
}

// Exposed for debugging / Flutter parity testing.
export function _peekCats () { return loadCats(); }
export function _clearCats () { saveCats([]); }
