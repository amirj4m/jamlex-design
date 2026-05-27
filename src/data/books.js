/**
 * Jamlex library seed — 50 curated titles from Standard Ebooks.
 * ------------------------------------------------------------------
 * Why SE: cleaner formatting + better typography + standardized EPUB/TXT
 *         than raw Project Gutenberg dumps. See memory/project_jamlex_library.md
 *
 * Schema (per book):
 *   id          kebab-case stable identifier
 *   title       English title (display verbatim, no translation in cards)
 *   author      English author name
 *   year        publication year (number)
 *   category    one of: fiction | selfHelp | business | science | history
 *   level       CEFR — A1..C2
 *   pages       approximate page count
 *   rating      0..5 (community rating, mocked)
 *   downloads   sort key — top 30 by downloads = "Featured", rest = "Newest"
 *   cover       CSS background string (gradient) used on the cover tile
 *
 * Total: 50. Counts per category:
 *   fiction   20
 *   science   10
 *   history    8
 *   selfHelp   7
 *   business   5
 */

export const BOOKS = [
  // ─── Fiction & Novel (20) ────────────────────────────────────────────
  { id: 'pride-and-prejudice',         title: 'Pride and Prejudice',                       author: 'Jane Austen',           year: 1813, category: 'fiction',  level: 'C1', pages: 432, rating: 4.7, downloads: 9821, cover: 'linear-gradient(135deg,#6E3A85,#D4A8C8)' },
  { id: 'sherlock-holmes',             title: 'The Adventures of Sherlock Holmes',         author: 'Arthur Conan Doyle',     year: 1892, category: 'fiction',  level: 'B2', pages: 307, rating: 4.8, downloads: 8956, cover: 'linear-gradient(135deg,#1A2138,#3D4566)' },
  { id: 'great-gatsby',                title: 'The Great Gatsby',                          author: 'F. Scott Fitzgerald',    year: 1925, category: 'fiction',  level: 'B2', pages: 180, rating: 4.5, downloads: 8821, cover: 'linear-gradient(135deg,#3B5BA5,#E8B647)' },
  { id: 'frankenstein',                title: 'Frankenstein',                              author: 'Mary Shelley',           year: 1818, category: 'fiction',  level: 'B2', pages: 280, rating: 4.6, downloads: 8643, cover: 'linear-gradient(135deg,#1E3320,#4A6741)' },
  { id: 'a-christmas-carol',           title: 'A Christmas Carol',                         author: 'Charles Dickens',        year: 1843, category: 'fiction',  level: 'B2', pages: 112, rating: 4.7, downloads: 8312, cover: 'linear-gradient(135deg,#7B0F1A,#C9302C)' },
  { id: 'dorian-gray',                 title: 'The Picture of Dorian Gray',                author: 'Oscar Wilde',            year: 1890, category: 'fiction',  level: 'C1', pages: 254, rating: 4.6, downloads: 8210, cover: 'linear-gradient(135deg,#1B5E20,#4CAF50)' },
  { id: 'dracula',                     title: 'Dracula',                                   author: 'Bram Stoker',            year: 1897, category: 'fiction',  level: 'C1', pages: 418, rating: 4.5, downloads: 7892, cover: 'linear-gradient(135deg,#0D0D0D,#7B1A1A)' },
  { id: 'treasure-island',             title: 'Treasure Island',                           author: 'Robert Louis Stevenson', year: 1883, category: 'fiction',  level: 'B1', pages: 224, rating: 4.5, downloads: 7689, cover: 'linear-gradient(135deg,#0F4C5C,#E36414)' },
  { id: 'jekyll-and-hyde',             title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', author: 'Robert Louis Stevenson', year: 1886, category: 'fiction',  level: 'B2', pages:  88, rating: 4.5, downloads: 7456, cover: 'linear-gradient(135deg,#2C2C54,#474787)' },
  { id: 'crime-and-punishment',        title: 'Crime and Punishment',                      author: 'Fyodor Dostoyevsky',     year: 1866, category: 'fiction',  level: 'C1', pages: 543, rating: 4.7, downloads: 7234, cover: 'linear-gradient(135deg,#3D0000,#950101)' },
  { id: 'huckleberry-finn',            title: 'The Adventures of Huckleberry Finn',        author: 'Mark Twain',             year: 1884, category: 'fiction',  level: 'B1', pages: 366, rating: 4.4, downloads: 7102, cover: 'linear-gradient(135deg,#8B5A2B,#D4A574)' },
  { id: 'count-of-monte-cristo',       title: 'The Count of Monte Cristo',                 author: 'Alexandre Dumas',        year: 1844, category: 'fiction',  level: 'C1', pages:1276, rating: 4.8, downloads: 7012, cover: 'linear-gradient(135deg,#7A1F1F,#D4AF37)' },
  { id: 'time-machine',                title: 'The Time Machine',                          author: 'H. G. Wells',            year: 1895, category: 'fiction',  level: 'B2', pages: 118, rating: 4.5, downloads: 6890, cover: 'linear-gradient(135deg,#3A1F5C,#7E57C2)' },
  { id: 'war-of-the-worlds',           title: 'The War of the Worlds',                     author: 'H. G. Wells',            year: 1898, category: 'fiction',  level: 'B2', pages: 196, rating: 4.5, downloads: 6743, cover: 'linear-gradient(135deg,#7C0B0B,#C0392B)' },
  { id: 'hound-of-the-baskervilles',   title: 'The Hound of the Baskervilles',             author: 'Arthur Conan Doyle',     year: 1902, category: 'fiction',  level: 'B2', pages: 248, rating: 4.6, downloads: 6543, cover: 'linear-gradient(135deg,#1B1B2F,#162447)' },
  { id: 'jane-eyre',                   title: 'Jane Eyre',                                 author: 'Charlotte Brontë',       year: 1847, category: 'fiction',  level: 'C1', pages: 532, rating: 4.6, downloads: 6432, cover: 'linear-gradient(135deg,#1F0B3D,#5E3A87)' },
  { id: 'anne-of-green-gables',        title: 'Anne of Green Gables',                      author: 'L. M. Montgomery',       year: 1908, category: 'fiction',  level: 'B1', pages: 320, rating: 4.7, downloads: 6234, cover: 'linear-gradient(135deg,#2E7D32,#A5D6A7)' },
  { id: 'moby-dick',                   title: 'Moby-Dick',                                 author: 'Herman Melville',        year: 1851, category: 'fiction',  level: 'C2', pages: 720, rating: 4.4, downloads: 6234, cover: 'linear-gradient(135deg,#0B1D33,#2E5077)' },
  { id: 'wuthering-heights',           title: 'Wuthering Heights',                         author: 'Emily Brontë',           year: 1847, category: 'fiction',  level: 'C1', pages: 416, rating: 4.4, downloads: 5876, cover: 'linear-gradient(135deg,#3E2723,#8D6E63)' },
  { id: 'importance-of-being-earnest', title: 'The Importance of Being Earnest',           author: 'Oscar Wilde',            year: 1895, category: 'fiction',  level: 'B2', pages:  76, rating: 4.6, downloads: 5432, cover: 'linear-gradient(135deg,#3D2645,#A06CD5)' },

  // ─── Self-help (7) ────────────────────────────────────────────────────
  { id: 'meditations',                 title: 'Meditations',                               author: 'Marcus Aurelius',        year:  180, category: 'selfHelp', level: 'C1', pages: 254, rating: 4.8, downloads: 8912, cover: 'linear-gradient(135deg,#8D6E63,#D7CCC8)' },
  { id: 'tao-te-ching',                title: 'Tao Te Ching',                              author: 'Lao Tzu',                year: -400, category: 'selfHelp', level: 'C1', pages:  88, rating: 4.7, downloads: 6321, cover: 'linear-gradient(135deg,#1B5E20,#FBC02D)' },
  { id: 'as-a-man-thinketh',           title: 'As a Man Thinketh',                         author: 'James Allen',            year: 1903, category: 'selfHelp', level: 'B2', pages:  86, rating: 4.6, downloads: 5876, cover: 'linear-gradient(135deg,#4A148C,#CE93D8)' },
  { id: 'science-of-getting-rich',     title: 'The Science of Getting Rich',               author: 'Wallace D. Wattles',     year: 1910, category: 'selfHelp', level: 'B2', pages: 102, rating: 4.4, downloads: 4890, cover: 'linear-gradient(135deg,#B7791F,#F6E05E)' },
  { id: 'power-of-concentration',      title: 'The Power of Concentration',                author: 'William W. Atkinson',    year: 1918, category: 'selfHelp', level: 'B2', pages: 178, rating: 4.4, downloads: 4567, cover: 'linear-gradient(135deg,#1A237E,#7986CB)' },
  { id: 'self-help',                   title: 'Self-Help',                                 author: 'Samuel Smiles',          year: 1859, category: 'selfHelp', level: 'C1', pages: 412, rating: 4.3, downloads: 4321, cover: 'linear-gradient(135deg,#4E342E,#A1887F)' },
  { id: 'acres-of-diamonds',           title: 'Acres of Diamonds',                         author: 'Russell H. Conwell',     year: 1890, category: 'selfHelp', level: 'B2', pages:  64, rating: 4.5, downloads: 4123, cover: 'linear-gradient(135deg,#006064,#80DEEA)' },

  // ─── Business (5) ─────────────────────────────────────────────────────
  { id: 'wealth-of-nations',           title: 'The Wealth of Nations',                     author: 'Adam Smith',             year: 1776, category: 'business', level: 'C2', pages:1264, rating: 4.6, downloads: 4234, cover: 'linear-gradient(135deg,#1B5E20,#388E3C)' },
  { id: 'art-of-money-getting',        title: 'The Art of Money Getting',                  author: 'P. T. Barnum',           year: 1880, category: 'business', level: 'B2', pages:  96, rating: 4.3, downloads: 3567, cover: 'linear-gradient(135deg,#33691E,#AED581)' },
  { id: 'theory-of-the-leisure-class', title: 'The Theory of the Leisure Class',           author: 'Thorstein Veblen',       year: 1899, category: 'business', level: 'C2', pages: 412, rating: 4.2, downloads: 3210, cover: 'linear-gradient(135deg,#263238,#607D8B)' },
  { id: 'principles-of-political-economy', title: 'Principles of Political Economy',       author: 'John Stuart Mill',       year: 1848, category: 'business', level: 'C2', pages: 968, rating: 4.3, downloads: 2876, cover: 'linear-gradient(135deg,#1A237E,#3949AB)' },
  { id: 'risk-uncertainty-and-profit', title: 'Risk, Uncertainty, and Profit',             author: 'Frank H. Knight',        year: 1921, category: 'business', level: 'C2', pages: 384, rating: 4.2, downloads: 2543, cover: 'linear-gradient(135deg,#212121,#616161)' },

  // ─── Science & Education (10) ─────────────────────────────────────────
  { id: 'origin-of-species',           title: 'On the Origin of Species',                  author: 'Charles Darwin',         year: 1859, category: 'science',  level: 'C1', pages: 502, rating: 4.7, downloads: 6890, cover: 'linear-gradient(135deg,#004D40,#26A69A)' },
  { id: '20000-leagues-under-the-sea', title: 'Twenty Thousand Leagues Under the Sea',     author: 'Jules Verne',            year: 1870, category: 'science',  level: 'B2', pages: 384, rating: 4.6, downloads: 6234, cover: 'linear-gradient(135deg,#01579B,#4FC3F7)' },
  { id: 'journey-center-earth',        title: 'Journey to the Center of the Earth',        author: 'Jules Verne',            year: 1864, category: 'science',  level: 'B2', pages: 224, rating: 4.5, downloads: 5876, cover: 'linear-gradient(135deg,#3E2723,#FF7043)' },
  { id: 'lost-world',                  title: 'The Lost World',                            author: 'Arthur Conan Doyle',     year: 1912, category: 'science',  level: 'B2', pages: 256, rating: 4.4, downloads: 5432, cover: 'linear-gradient(135deg,#1B5E20,#FFB300)' },
  { id: 'relativity',                  title: 'Relativity: The Special and General Theory', author: 'Albert Einstein',       year: 1916, category: 'science',  level: 'C1', pages: 168, rating: 4.6, downloads: 5234, cover: 'linear-gradient(135deg,#0D47A1,#42A5F5)' },
  { id: 'story-of-mankind',            title: 'The Story of Mankind',                      author: 'Hendrik Willem van Loon', year:1921, category: 'science',  level: 'B2', pages: 478, rating: 4.5, downloads: 4567, cover: 'linear-gradient(135deg,#5D4037,#A1887F)' },
  { id: 'voyage-of-the-beagle',        title: 'The Voyage of the Beagle',                  author: 'Charles Darwin',         year: 1839, category: 'science',  level: 'C1', pages: 526, rating: 4.5, downloads: 4123, cover: 'linear-gradient(135deg,#006064,#4DD0E1)' },
  { id: 'cosmic-consciousness',        title: 'Cosmic Consciousness',                      author: 'Richard M. Bucke',       year: 1901, category: 'science',  level: 'C2', pages: 384, rating: 4.4, downloads: 3890, cover: 'linear-gradient(135deg,#311B92,#9575CD)' },
  { id: 'outline-of-science',          title: 'The Outline of Science',                    author: 'J. Arthur Thomson',      year: 1922, category: 'science',  level: 'B2', pages:1248, rating: 4.3, downloads: 3210, cover: 'linear-gradient(135deg,#1A237E,#5C6BC0)' },
  { id: 'mind-and-its-education',      title: 'The Mind and Its Education',                author: 'George Herbert Betts',   year: 1906, category: 'science',  level: 'C1', pages: 312, rating: 4.2, downloads: 2890, cover: 'linear-gradient(135deg,#4A148C,#7B1FA2)' },

  // ─── History & Biography (8) ──────────────────────────────────────────
  { id: 'the-prince',                  title: 'The Prince',                                author: 'Niccolò Machiavelli',    year: 1532, category: 'history',  level: 'C1', pages: 102, rating: 4.5, downloads: 5234, cover: 'linear-gradient(135deg,#3E2723,#D7CCC8)' },
  { id: 'the-republic',                title: 'The Republic',                              author: 'Plato',                  year: -375, category: 'history',  level: 'C1', pages: 412, rating: 4.5, downloads: 5234, cover: 'linear-gradient(135deg,#1B5E20,#C8E6C9)' },
  { id: 'autobiography-franklin',      title: 'The Autobiography of Benjamin Franklin',    author: 'Benjamin Franklin',      year: 1791, category: 'history',  level: 'B2', pages: 304, rating: 4.6, downloads: 4567, cover: 'linear-gradient(135deg,#1A237E,#BDBDBD)' },
  { id: 'up-from-slavery',             title: 'Up from Slavery',                           author: 'Booker T. Washington',   year: 1901, category: 'history',  level: 'B2', pages: 192, rating: 4.6, downloads: 4234, cover: 'linear-gradient(135deg,#3E2723,#FFB300)' },
  { id: 'confessions',                 title: 'The Confessions',                           author: 'Saint Augustine',        year:  400, category: 'history',  level: 'C2', pages: 392, rating: 4.4, downloads: 3567, cover: 'linear-gradient(135deg,#4A148C,#D1C4E9)' },
  { id: 'diary-of-samuel-pepys',       title: 'The Diary of Samuel Pepys',                 author: 'Samuel Pepys',           year: 1660, category: 'history',  level: 'C1', pages: 568, rating: 4.3, downloads: 3210, cover: 'linear-gradient(135deg,#33691E,#DCE775)' },
  { id: 'travels-of-marco-polo',       title: 'The Travels of Marco Polo',                 author: 'Marco Polo',             year: 1300, category: 'history',  level: 'C1', pages: 478, rating: 4.3, downloads: 3210, cover: 'linear-gradient(135deg,#BF360C,#FF8A65)' },
  { id: 'life-of-samuel-johnson',      title: 'The Life of Samuel Johnson',                author: 'James Boswell',          year: 1791, category: 'history',  level: 'C2', pages:1432, rating: 4.4, downloads: 2890, cover: 'linear-gradient(135deg,#212121,#9E9E9E)' },
];

// ─── Helpers ──────────────────────────────────────────────────────────

/** Books sorted by download count, descending. */
export const BOOKS_BY_POPULARITY = [...BOOKS].sort((a, b) => b.downloads - a.downloads);

/** Top 30 by downloads — "Featured / Recommended". */
export const FEATURED = BOOKS_BY_POPULARITY.slice(0, 30);

/** Remaining 20 — "Newest" (treated as recent additions for the design preview). */
export const NEWEST = BOOKS_BY_POPULARITY.slice(30);

/** Live count per category — drives the "X کتاب" pill on category tiles. */
export const CATEGORY_COUNTS = BOOKS.reduce((acc, b) => {
  acc[b.category] = (acc[b.category] || 0) + 1;
  return acc;
}, {});

/** Look up a single book by id (used by book-detail.html via ?id=…). */
export function findBook(id) {
  return BOOKS.find((b) => b.id === id);
}

/** Convert an integer to localized digits (Persian when document lang=fa). */
export function localizeNum(n) {
  const lang = document.documentElement.lang || 'en';
  if (lang !== 'fa') return String(n);
  const fa = '۰۱۲۳۴۵۶۷۸۹';
  return String(n).replace(/\d/g, (d) => fa[+d]);
}

/** Format a year (negative = BC). */
export function formatYear(y) {
  if (y < 0) return `${Math.abs(y)} BC`;
  return String(y);
}
