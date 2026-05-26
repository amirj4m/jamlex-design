# Jamlex Design Preview

Interactive HTML/CSS mockups of every screen in the Jamlex app.

**Live**: https://design.amirj4m.com

This is a **design-first** preview — clickable mockups for product review before any Flutter code is touched. When a screen is approved, the HTML + CSS becomes the spec for the Flutter implementation.

## Why this exists

The Jamlex Flutter codebase accumulated technical debt because we built features without a unified design pass. This preview reverses that: every screen lives here first, gets reviewed, then ships to Flutter.

## Stack

- Vanilla HTML + CSS + ES modules — no framework, no build step
- Cloudflare Pages hosting (free tier)
- Custom domain via Cloudflare DNS
- i18n via JSON locale files (`src/locales/{en,fa}.json`) — no hardcoded text

## i18n rule (read first, every time)

The infrastructure must **NEVER** assume Persian. Phase 1 test phase has `fa` as the default UI locale because the test audience is the Persian-speaking diaspora, but every string lives in `locales/*.json` so the system supports any language pair tomorrow.

- ✅ `data-i18n="auth.login.title"` — string keys, not text
- ❌ `<h1>ورود</h1>` — hardcoded Persian
- ✅ Layout direction follows `<html dir>` and CSS logical properties (`margin-inline-start`, `text-align: start`)
- ❌ `text-align: right` or `margin-left: 16px` for chrome

## Local dev

```bash
npm install
npm run dev          # http://localhost:8788
```

## Deploy

```bash
npm run deploy       # to preview branch
npm run deploy:prod  # to design.amirj4m.com
```

## Project structure

```
src/
├── index.html              # Design hub — links to every screen
├── _headers                # Cloudflare Pages security headers
├── _redirects              # SPA fallback (if needed)
├── locales/                # Translation JSON files
│   ├── en.json             # English (reference)
│   └── fa.json             # Persian (test-phase default UI)
├── css/
│   ├── tokens.css          # Design tokens (colors, typography, spacing)
│   ├── base.css            # Reset + base typography + html[dir] handling
│   ├── components.css      # Buttons, inputs, cards, chips, dialogs, toast
│   ├── chrome.css          # Bottom nav, top bar, phone frame
│   └── screens/            # Per-screen styles
├── js/
│   ├── i18n.js             # Locale loader + DOM applier
│   ├── theme.js            # Light/dark/system toggle
│   ├── audio.js            # 🔊 button (Web Speech API in preview)
│   ├── router.js           # Hash-based screen routing
│   └── app.js              # Bootstrap
├── screens/                # One HTML fragment per screen
│   ├── splash.html
│   ├── login.html
│   ├── home.html
│   └── ...
└── assets/                 # Icons, images (svg preferred)
```

## Spec docs

See `docs/SPEC.md` for the full product spec — vision, audience, roadmap, every screen with purpose + inputs + outputs + edge cases.
