/**
 * Jamlex hero stamps loader
 * ----------------------------------------------------------------------------
 * Drop <div data-hero="lock"></div> anywhere in a screen to inject the
 * matching SVG hero stamp. Supported keys: lock, profile, phone, key, success,
 * gate-leitner, gate-mywords, gate-books.
 *
 * The actual SVG markup is shared across screens — keeping it here avoids 100+
 * duplicated SVG blocks across screen files.
 */

const STAMPS = {
  lock: `
    <div class="hero-stamp hero-stamp--auth">
      <svg class="deco deco-1" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" transform="rotate(45 12 12)" fill="#F5B945"/>
      </svg>
      <svg class="deco deco-2" viewBox="0 0 48 48" fill="none">
        <rect x="2" y="2" width="44" height="44" rx="12" fill="#6C5CE7"/>
        <circle cx="24" cy="19" r="6" fill="#fff"/>
        <path d="M12 36c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>
      <svg class="deco deco-3" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#26D07C"/>
        <path d="M14 24l7 7 13-13" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>
      <svg class="deco deco-4" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="14" height="14" rx="2" transform="rotate(45 8 8)" fill="#8E7BFF"/>
      </svg>
      <div class="hero-stamp__shape">
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="14" y="28" width="36" height="28" rx="6" stroke="#1A2138" stroke-width="3.5" fill="none"/>
          <path d="M22 28v-7a10 10 0 0 1 20 0v7" stroke="#1A2138" stroke-width="3.5" stroke-linecap="round" fill="none"/>
          <circle cx="32" cy="42" r="2.5" fill="#1A2138"/>
          <line x1="32" y1="44" x2="32" y2="48" stroke="#1A2138" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
    </div>`,

  profile: `
    <div class="hero-stamp hero-stamp--auth hero-stamp--profile">
      <svg class="deco deco-1" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#6C5CE7"/>
        <path d="M24 14v20M14 24h20" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      </svg>
      <svg class="deco deco-3" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#26D07C"/>
        <path d="M14 24l7 7 13-13" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>
      <svg class="deco deco-2" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="3" transform="rotate(45 10 10)" fill="#F5B945"/>
      </svg>
      <svg class="deco deco-4" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="10" fill="#6C5CE7"/>
        <rect x="16" y="22" width="16" height="14" rx="3" stroke="#fff" stroke-width="2.5" fill="none"/>
        <path d="M19 22v-3a5 5 0 0 1 10 0v3" stroke="#fff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      </svg>
      <div class="hero-stamp__shape hero-stamp__shape--teal">
        <svg viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="24" r="8" fill="#fff"/>
          <path d="M18 50c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#fff" stroke-width="3.5" stroke-linecap="round" fill="none"/>
          <line x1="22" y1="56" x2="42" y2="56" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
        </svg>
      </div>
    </div>`,

  phone: `
    <div class="hero-stamp hero-stamp--auth">
      <svg class="deco deco-1" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" transform="rotate(45 12 12)" fill="#F5B945"/>
      </svg>
      <svg class="deco deco-2" viewBox="0 0 48 48" fill="none">
        <rect x="2" y="2" width="44" height="44" rx="12" fill="#6C5CE7"/>
        <path d="M20 14h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" stroke="#fff" stroke-width="2.5" fill="none"/>
        <circle cx="24" cy="30" r="1.5" fill="#fff"/>
      </svg>
      <svg class="deco deco-3" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#26D07C"/>
        <path d="M14 24l7 7 13-13" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none"/>
      </svg>
      <svg class="deco deco-4" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="14" height="14" rx="2" transform="rotate(45 8 8)" fill="#8E7BFF"/>
      </svg>
      <div class="hero-stamp__shape">
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="20" y="10" width="24" height="44" rx="5" stroke="#1A2138" stroke-width="3.5" fill="none"/>
          <line x1="20" y1="16" x2="44" y2="16" stroke="#1A2138" stroke-width="2.5"/>
          <line x1="20" y1="46" x2="44" y2="46" stroke="#1A2138" stroke-width="2.5"/>
          <circle cx="32" cy="50" r="1.5" fill="#1A2138"/>
        </svg>
      </div>
    </div>`,

  key: `
    <div class="hero-stamp hero-stamp--auth">
      <svg class="deco deco-1" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" transform="rotate(45 12 12)" fill="#F5B945"/>
      </svg>
      <svg class="deco deco-2" viewBox="0 0 48 48" fill="none">
        <rect x="2" y="2" width="44" height="44" rx="12" fill="#6C5CE7"/>
        <circle cx="24" cy="19" r="6" fill="#fff"/>
        <path d="M12 36c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>
      <svg class="deco deco-3" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#26D07C"/>
        <path d="M14 24l7 7 13-13" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none"/>
      </svg>
      <svg class="deco deco-4" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="14" height="14" rx="2" transform="rotate(45 8 8)" fill="#8E7BFF"/>
      </svg>
      <div class="hero-stamp__shape">
        <svg viewBox="0 0 64 64" fill="none">
          <circle cx="24" cy="32" r="10" stroke="#1A2138" stroke-width="3.5" fill="none"/>
          <line x1="34" y1="32" x2="52" y2="32" stroke="#1A2138" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="46" y1="32" x2="46" y2="40" stroke="#1A2138" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="52" y1="32" x2="52" y2="38" stroke="#1A2138" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="24" cy="32" r="2.5" fill="#1A2138"/>
        </svg>
      </div>
    </div>`,

  success: `
    <div class="hero-stamp hero-stamp--auth">
      <svg class="deco deco-1" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" transform="rotate(45 12 12)" fill="#F5B945"/>
      </svg>
      <svg class="deco deco-2" viewBox="0 0 48 48" fill="none">
        <rect x="2" y="2" width="44" height="44" rx="12" fill="#6C5CE7"/>
        <circle cx="24" cy="19" r="6" fill="#fff"/>
        <path d="M12 36c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>
      <svg class="deco deco-3" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#26D07C"/>
        <path d="M14 24l7 7 13-13" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none"/>
      </svg>
      <svg class="deco deco-4" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="14" height="14" rx="2" transform="rotate(45 8 8)" fill="#8E7BFF"/>
      </svg>
      <div class="hero-stamp__shape hero-stamp__shape--teal">
        <svg viewBox="0 0 64 64" fill="none">
          <path d="M16 32l11 11 21-21" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </div>
    </div>`,

  /* Auth-gate (big) illustration — same shape for any locked screen */
  'gate-leitner': makeGate(),
  'gate-mywords': makeGate(),
  'gate-books':   makeGate(),
};

function makeGate () {
  return `
    <div class="auth-gate-illo">
      <svg class="auth-gate-illo__sparkle auth-gate-illo__sparkle--1" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.5 6 6 1.5-6 1.5L12 17l-1.5-6-6-1.5 6-1.5L12 2z" fill="#A5DCD5"/>
      </svg>
      <svg class="auth-gate-illo__sparkle auth-gate-illo__sparkle--2" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.5 6 6 1.5-6 1.5L12 17l-1.5-6-6-1.5 6-1.5L12 2z" fill="#A5DCD5"/>
      </svg>
      <svg class="auth-gate-illo__sparkle auth-gate-illo__sparkle--3" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.5 6 6 1.5-6 1.5L12 17l-1.5-6-6-1.5 6-1.5L12 2z" fill="#A5DCD5"/>
      </svg>
      <svg class="auth-gate-illo__bg-card" viewBox="0 0 220 240" fill="none">
        <rect x="10" y="10" width="200" height="220" rx="22" fill="#fff" stroke="#E8F0F2" stroke-width="2"/>
      </svg>
      <svg class="auth-gate-illo__lock" viewBox="0 0 120 140" fill="none">
        <defs>
          <linearGradient id="gateLockGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4ECDC4"/>
            <stop offset="100%" stop-color="#00B4A6"/>
          </linearGradient>
        </defs>
        <rect x="20" y="58" width="80" height="70" rx="14" fill="url(#gateLockGrad)"/>
        <path d="M36 58v-18a24 24 0 0 1 48 0v18" stroke="#4ECDC4" stroke-width="10" fill="none" stroke-linecap="round"/>
        <circle cx="60" cy="86" r="6" fill="#fff"/>
        <rect x="57" y="86" width="6" height="14" rx="2" fill="#fff"/>
      </svg>
      <svg class="auth-gate-illo__plant" viewBox="0 0 80 100" fill="none">
        <path d="M20 75h40l-4 18a4 4 0 0 1-4 3h-24a4 4 0 0 1-4-3l-4-18z" fill="#E8F0F2"/>
        <path d="M40 70c-8-4-16-12-14-26 10 4 16 14 14 26z" fill="#7FCFC6"/>
        <path d="M40 70c8-4 16-12 14-26-10 4-16 14-14 26z" fill="#4ECDC4"/>
        <line x1="40" y1="72" x2="40" y2="46" stroke="#26B5AC" stroke-width="2"/>
      </svg>
      <svg class="auth-gate-illo__books" viewBox="0 0 80 60" fill="none">
        <rect x="6" y="20" width="50" height="36" rx="2" fill="#A5DCD5"/>
        <rect x="14" y="10" width="50" height="36" rx="2" fill="#7FCFC6"/>
        <line x1="20" y1="14" x2="58" y2="14" stroke="#4ECDC4" stroke-width="1.5"/>
        <line x1="20" y1="42" x2="58" y2="42" stroke="#4ECDC4" stroke-width="1.5"/>
      </svg>
    </div>`;
}

function injectStamps () {
  document.querySelectorAll('[data-hero]').forEach(el => {
    const key = el.dataset.hero;
    if (STAMPS[key]) el.innerHTML = STAMPS[key];
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectStamps);
} else {
  injectStamps();
}

export { injectStamps };
