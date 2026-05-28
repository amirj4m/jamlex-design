/**
 * Jamlex library renderer
 * ----------------------------------------------------------------------------
 * Pulls book data from /data/books.js and renders card lists into:
 *   - reading.html             (horizontal-scroll Featured + Newest sections)
 *   - books-all.html?list=…    (3-column grid)
 *   - categories-all.html      (3-column category grid)
 *
 * Categories metadata (icon + bg color) lives here, NOT in books.js, because
 * it's UI presentation. The category KEY is the contract with i18n.
 */

import { BOOKS, FEATURED, NEWEST, CATEGORY_COUNTS, localizeNum } from '/data/books.js?v=mppivpzo';
import { applyToDom, t } from '/js/i18n.js?v=mppivpzo';

const CATEGORIES = [
  { key: 'fiction',  emoji: '📖', bg: 'rgba(74,144,217,0.16)', fg: '#4A90D9' },
  { key: 'selfHelp', emoji: '🌱', bg: 'rgba(76,175,80,0.16)',  fg: '#2A8E4D' },
  { key: 'business', emoji: '💼', bg: 'rgba(244,67,54,0.16)',  fg: '#C62828' },
  { key: 'science',  emoji: '🎓', bg: 'rgba(0,180,166,0.16)',  fg: '#1F9389' },
  { key: 'history',  emoji: '🏛',  bg: 'rgba(245,185,69,0.18)', fg: '#B27A12' },
];

function escapeHtml (s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ─── Card renderers ────────────────────────────────────────────────────

/** Rating-only row (★ + numeric). Page count was dropped per user request —
 *  cards now show just the community rating beneath the title/author. */
function renderRating (b) {
  return `
    <div class="bcard__rating">
      <span style="color:#F5B945;">★</span>
      <span class="font-latin">${b.rating.toFixed(1)}</span>
    </div>
  `;
}

/** Horizontal-scroll card (used inside .book-h-scroll on reading.html). */
function renderBookHCard (b, isNewBadge = false) {
  const badge = isNewBadge
    ? `<span class="bcard__badge bcard__badge--new" data-i18n="v3.reading.newBadge"></span>`
    : `<span class="bcard__badge">${escapeHtml(b.level)}</span>`;
  return `
    <a href="/screens/book-detail.html?id=${encodeURIComponent(b.id)}" class="bcard">
      <div class="bcard__cover" style="background:${b.cover};">
        ${badge}
        <div class="bcard__cover-title">${escapeHtml(b.title)}</div>
      </div>
      <div class="bcard__title">${escapeHtml(b.title)}</div>
      <div class="bcard__author">${escapeHtml(b.author)}</div>
      ${renderRating(b)}
    </a>
  `;
}

/** 3-column grid card (used on books-all.html). */
function renderBookGridCard (b) {
  return `
    <a href="/screens/book-detail.html?id=${encodeURIComponent(b.id)}" class="bcard bcard--grid">
      <div class="bcard__cover" style="background:${b.cover};">
        <span class="bcard__badge">${escapeHtml(b.level)}</span>
        <div class="bcard__cover-title">${escapeHtml(b.title)}</div>
      </div>
      <div class="bcard__title">${escapeHtml(b.title)}</div>
      <div class="bcard__author">${escapeHtml(b.author)}</div>
      ${renderRating(b)}
    </a>
  `;
}

/** Horizontal-scroll category disc (used on reading.html). */
function renderCategoryDisc (c) {
  const count = CATEGORY_COUNTS[c.key] || 0;
  return `
    <a href="/screens/books-all.html?cat=${c.key}" class="cat-disc">
      <span class="cat-disc__icon" style="background:${c.bg};color:${c.fg};">${c.emoji}</span>
      <span class="cat-disc__name" data-i18n="v3.reading.category.${c.key}"></span>
      <span class="cat-disc__count" data-i18n="v3.reading.category.books" data-i18n-vars='{"n":"${count}"}'></span>
    </a>
  `;
}

/** 3-column grid category tile (used on categories-all.html). */
function renderCategoryGridTile (c) {
  const count = CATEGORY_COUNTS[c.key] || 0;
  return `
    <a href="/screens/books-all.html?cat=${c.key}" class="cat-tile">
      <span class="cat-tile__icon" style="background:${c.bg};color:${c.fg};">${c.emoji}</span>
      <span class="cat-tile__name" data-i18n="v3.reading.category.${c.key}"></span>
      <span class="cat-tile__count" data-i18n="v3.reading.category.books" data-i18n-vars='{"n":"${count}"}'></span>
    </a>
  `;
}

// ─── Mounters ──────────────────────────────────────────────────────────

/** reading.html: featured + newest + categories. */
export function mountReadingScreen () {
  const featured = document.querySelector('[data-render="featured"]');
  if (featured) {
    featured.innerHTML = FEATURED.slice(0, 10).map((b) => renderBookHCard(b)).join('');
  }
  const newest = document.querySelector('[data-render="newest"]');
  if (newest) {
    newest.innerHTML = NEWEST.slice(0, 10).map((b) => renderBookHCard(b, /*isNew*/true)).join('');
  }
  const cats = document.querySelector('[data-render="categories"]');
  if (cats) {
    cats.innerHTML = CATEGORIES.map(renderCategoryDisc).join('');
  }
  applyToDom(document);
}

/** categories-all.html: 3-col grid of all categories. */
export function mountCategoriesAll () {
  const root = document.querySelector('[data-render="categories-grid"]');
  if (!root) return;
  root.innerHTML = CATEGORIES.map(renderCategoryGridTile).join('');
  applyToDom(document);
}

/** books-all.html: 3-col grid of books, filtered by ?list=featured|newest or ?cat=<key>. */
export function mountBooksAll () {
  const root = document.querySelector('[data-render="books-grid"]');
  if (!root) return;
  const params = new URLSearchParams(location.search);
  const list = params.get('list');
  const cat = params.get('cat');
  let books = BOOKS;
  let titleKey = 'v3.booksAll.title';
  if (list === 'featured') { books = FEATURED; titleKey = 'v3.reading.featured'; }
  else if (list === 'newest') { books = NEWEST; titleKey = 'v3.reading.newest'; }
  else if (cat) { books = BOOKS.filter((b) => b.category === cat); titleKey = `v3.reading.category.${cat}`; }
  root.innerHTML = books.map(renderBookGridCard).join('');
  const titleEl = document.querySelector('[data-render="title"]');
  if (titleEl) {
    titleEl.setAttribute('data-i18n', titleKey);
    titleEl.textContent = t(titleKey);
  }
  applyToDom(document);
}

// Re-apply i18n whenever the locale changes (counts/text refresh).
document.addEventListener('i18n:changed', () => {
  const screen = document.body.dataset.libraryScreen;
  if (screen === 'reading') mountReadingScreen();
  else if (screen === 'categories-all') mountCategoriesAll();
  else if (screen === 'books-all') mountBooksAll();
});
