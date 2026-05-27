/**
 * Jamlex bottom-nav injector
 * ----------------------------------------------------------------------------
 * Drop <div data-bottomnav="home"></div> (or leitner/vocabulary/stats/profile)
 * on any shell-routed screen and we'll inject the matching nav with the
 * correct tab marked active. Keeps all 5 SVG icons + i18n keys in a single
 * source of truth.
 */
const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z"/>
  </svg>`,
  homeActive: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z"/>
  </svg>`,
  leitner: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2"/><line x1="3" y1="13" x2="21" y2="13"/>
  </svg>`,
  leitnerActive: `<svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <rect x="3" y="13" width="18" height="6" rx="2" opacity="0.55"/>
  </svg>`,
  vocabulary: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16" y2="16"/>
  </svg>`,
  vocabularyActive: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16" y2="16"/>
  </svg>`,
  stats: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/>
  </svg>`,
  statsActive: `<svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="10" width="4" height="10" rx="1"/>
    <rect x="10" y="4" width="4" height="16" rx="1"/>
    <rect x="16" y="14" width="4" height="6" rx="1"/>
  </svg>`,
  profile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
  </svg>`,
  profileActive: `<svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z"/>
  </svg>`,
};

// Visual order (right→left in RTL displays correctly because we put HOME LAST)
const TABS = [
  { key: 'profile',    href: '/screens/profile.html',    i18n: 'nav.profile'    },
  { key: 'stats',      href: '/screens/stats.html',      i18n: 'nav.stats'      },
  { key: 'vocabulary', href: '/screens/vocabulary.html', i18n: 'nav.vocabulary' },
  { key: 'leitner',    href: '/screens/leitner.html',    i18n: 'nav.leitner'    },
  { key: 'home',       href: '/screens/home.html',       i18n: 'nav.home'       },
];

function renderNav (activeKey) {
  return `<nav class="bottomnav" aria-label="Bottom navigation">
    ${TABS.map(t => {
      const active = t.key === activeKey;
      const icon = active ? ICONS[t.key + 'Active'] : ICONS[t.key];
      return `<a href="${t.href}" class="bottomnav__item"${active ? ' data-active="true"' : ''}>
        <span class="bottomnav__icon">${icon}</span>
        <span data-i18n="${t.i18n}"></span>
      </a>`;
    }).join('')}
  </nav>`;
}

function injectNavs () {
  document.querySelectorAll('[data-bottomnav]').forEach(el => {
    el.outerHTML = renderNav(el.dataset.bottomnav);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectNavs);
} else {
  injectNavs();
}

export { injectNavs };
