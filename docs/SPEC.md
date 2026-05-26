# Jamlex — Design Spec

**Status**: Living document. Last updated 2026-05-27.
**Owner**: amirj4m.
**Implementation**: HTML/CSS preview at https://design.amirj4m.com, then Flutter under `C:\Users\amirj\jamlex`.

---

## 1. Vision

Jamlex is an English-vocabulary learning app for non-English speakers. The product is multi-source-language by design — any speaker can learn English with the app, and v2 will support arbitrary pair-to-pair (e.g. Arabic → Spanish, Turkish → Greek).

## 2. Audience (test phase)

The first user-validation pass targets the **Persian-speaking diaspora** (Iranians outside Iran).

- Test-phase UI default locale: **`fa`** (Persian)
- Test-phase learning language: **`en`** (English) — always
- Pricing tested in EUR/USD only

Note: this is a *test*-phase configuration, not a product anchor. The infrastructure must NOT be Persian-specific (see §11).

## 3. Roadmap

### Phase 1 — current (test)
- 2 locales in the bundle: `en` + `fa`
- 1 source→target pair: `fa → en`
- No words yet — words come from openjam when it reaches 10K + has audio. Vocabulary screen ships visually complete but empty.
- Categories come from openjam (35 categories already exist)
- All UI text in `locales/*.json`, no hardcoded strings

### Phase 2 — more source languages → English
- Add `ar`, `el`, `tr`, … `*.json` locale files
- Each new source language paired with English as target

### Phase 3 — arbitrary pair-to-pair
- On login, ask user TWO questions:
  1. Mother tongue (source)
  2. Language they want to learn (target)
- UI direction (LTR vs RTL) auto-flips based on mother-tongue writing direction

## 4. Tech stack

### App (final implementation)
- Flutter 3.x + Dart 3.x
- Riverpod (state)
- go_router (navigation)
- Supabase EU (Auth + PostgREST + Storage + Realtime)
- openjam.amirj4m.com REST API (word data — read-only, free, edge-cached)
- Stripe only (payments — no Iranian payment SDKs, Google Play distribution under US sanctions)
- flutter_local_notifications (Android daily reminder)
- sms_autofill (OTP auto-fill)
- google_sign_in (OAuth)
- audioplayers (🔊 pronunciation)
- google_fonts: Vazirmatn (default), Inter (Latin fallback for ad copy / paywall pricing)

### Preview site (this repo)
- Vanilla HTML + CSS + ES modules — no framework, no build step
- Cloudflare Pages hosting
- Custom domain via Cloudflare DNS

## 5. Design system

### Colors

**Brand**:
- `primary`: `#00B4A6` (teal) — buttons, brand, focus
- `primary-dark`: `#009688`
- `secondary`: `#4A90D9` (blue) — accents, links

**Semantic**:
- `success`: `#4CAF50`
- `warning`: `#FF9800`
- `danger`: `#F44336`

**Light surfaces**:
- `bg`: `#FFFFFF`
- `surface`: `#F5F7FA`
- `surface-alt`: `#EBEEF3`
- `border`: `#E3E8EE`
- `text-primary`: `#1A1A2E`
- `text-secondary`: `#6B7280`
- `text-disabled`: `#9CA3AF`

**Dark surfaces**:
- `bg`: `#0F0F14`
- `surface`: `#1A1A24`
- `surface-alt`: `#242432`
- `border`: `#2E2E3E`
- `text-primary`: `#F0F0F8`
- `text-secondary`: `#9099A8`
- `text-disabled`: `#5A6070`
- `primary` (slightly lighter in dark): `#00C4B4`
- `secondary` (slightly lighter in dark): `#5BA3E8`

### Typography

- **Family**: Vazirmatn (default — covers Persian + Latin; weights 300/400/500/600/700/800)
- **Latin fallback**: Inter (for ad copy, paywall pricing)
- **Roboto fallback**: required for currency symbols (`$`, `€`) — Vazirmatn renders them wrong

Scale:
- `display-l`: 32 / 1.2 / w800
- `display-m`: 24 / 1.2 / w800
- `headline-m`: 20 / 1.3 / w700
- `title`: 18 / 1.3 / w700
- `body-l`: 16 / 1.6 / w400
- `body-m`: 14 / 1.6 / w400
- `body-s`: 12 / 1.6 / w400
- `label`: 13 / 1.4 / w600
- `caption`: 11 / 1.4 / w500

### Spacing scale

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64`

### Border radius

`6 / 8 / 12 / 14 / 16 / 20 / 999 (pill)`

### Shadows

- `sm`: `0 1px 2px rgba(0,0,0,.04)`
- `md`: `0 4px 12px rgba(0,0,0,.06)`
- `lg`: `0 8px 24px rgba(0,0,0,.10)`
- `brand`: `0 8px 16px rgba(0,180,166,.18)` (primary glow)

### Z-index

- `nav`: 10
- `dialog`: 100
- `toast`: 1000

## 6. Component library

| Component | Variants | Notes |
|---|---|---|
| Button | Filled / Outlined / Text / Icon | All sizes: sm/md/lg; states: default/hover/active/disabled/loading |
| Input | Text / Password / Phone / OTP | Always inside `<form>` with autofill hints; password-toggle eye; clear-X button when filled |
| Card | Flat / Elevated | 14-radius default, 1px border in light, no border in dark |
| Chip | Selectable / Removable | Pill shape, 13px, used for CEFR levels, categories |
| Bottom-nav | 5 items | Active = primary fill + scale 1.04 |
| Top-bar | With back / With close / Plain | Back chevron is at leading edge (auto-flips with `dir`) |
| Dialog | Confirm / Form / Toast | Toast = centered popup, NOT corner SnackBar |
| Skeleton | Box / Line / Avatar | Used everywhere data loads |

## 7. Screen inventory

### 7.1 Splash
- **Purpose**: brand presence while bootstrapping (env, auth check, deep-link)
- **Inputs**: none
- **Outputs**: → `/` (always)
- **Edge cases**: deep-link to `/forgot-password` if `error_code` in URL hash

### 7.2 Login
- **Purpose**: existing user signs in
- **Inputs**: email + password OR Google OAuth OR "Sign in with phone" link
- **Outputs**: success → `/`; failure → toast
- **Standards**: `<form>` with autofill hints (`username`, `current-password`), password-toggle, password-manager hook via `finishAutofillContext` after submit
- **Edge cases**: invalid email format → inline error; wrong password → friendly toast; rate limit → friendly toast; network error → retry CTA

### 7.3 Register
- **Purpose**: new user creates account with email + password
- **Inputs**: name + email + password + (optional phone) + terms checkbox
- **Outputs**: success → `/` (auto-login if confirm-email disabled) OR `/login` with success toast
- **Standards**: real-time validation (email format, password strength meter — 8+ chars, upper+lower, digit/symbol); `<a>` tags on "privacy policy" and "terms of use" link to URLs (must NOT be styled-only — they're tappable)
- **Edge cases**: email taken → friendly toast; weak password → inline meter + checklist; uncheck terms → block submit + toast

### 7.4 Phone Auth
- **Purpose**: passwordless login via SMS OTP
- **Inputs**: country picker + phone number → 6-digit OTP
- **Outputs**: success → `/`; failure → toast
- **Standards**: country picker with search; per-country digit-length validation; OTP field auto-fills from SMS via `sms_autofill`; resend timer 60s
- **Edge cases**: SMS unavailable → fallback message; invalid number → inline error; OTP expired → "resend" CTA; OTP wrong → inline error + clear

### 7.5 Forgot Password
- **Purpose**: account recovery
- **Inputs**: email OR phone (toggle)
- **Outputs**: → check email/phone, then `/new-password` via deep-link OR OTP
- **Edge cases**: account not found → friendly toast (don't leak existence); rate limit → "try again in X minutes"

### 7.6 New Password
- **Purpose**: set new password after recovery
- **Inputs**: new password + confirm password
- **Outputs**: success → `/login` with toast
- **Edge cases**: passwords mismatch → inline; weak password → strength meter

### 7.7 Change Password
- **Purpose**: logged-in user changes password
- **Inputs**: current password + new password + confirm
- **Outputs**: success → toast, back to `/profile`
- **Standards**: Google-OAuth users → instead show "Send code to email" flow (no current-password field)
- **Edge cases**: wrong current → inline; same as old → inline

### 7.8 Home Dashboard
- **Purpose**: anchor of the app
- **Inputs**: none (reactive to user state)
- **Outputs**: bottom-nav routes; quick-action routes
- **Sections** (top → bottom):
  1. Greeting + streak badge (`{n} days`)
  2. Word of the day card (English + Persian + 🔊 audio button)
  3. Vocabulary progress card (X% learned)
  4. Quick actions row (My Words / Read a book)
  5. Lottie slot for current empty state
- **Edge cases**: guest → CTA "Sign in" instead of streak; empty DB → "Coming soon" placeholder for word-of-day; no Lottie file → skip slot

### 7.9 Leitner (box list)
- **Purpose**: review queue overview
- **Sections**:
  1. Title + "X cards" counter
  2. 5-box progress row (colored chips with count per box)
  3. "Today's review" CTA → `/leitner/review`
  4. Empty state if no cards → CTA "Go to dictionary"
- **Edge cases**: guest → AuthGate; 0 cards → no CTA, only empty state; all reviewed today → "Done 🎉" + tomorrow message

### 7.10 Leitner Review
- **Purpose**: SRS review session
- **Sections**:
  1. Compact header (X / total + close button)
  2. 5-box active indicator
  3. Card (front = English + phonetic + 🔊; back = senses + Persian + example) — tap to flip
  4. 4 mastery buttons: Don't know / Sort of / Know / Know well
  5. End-of-session summary: total, correct, accuracy, study time
- **Edge cases**: no due cards → celebration screen; record fails → toast + retry; premium-only at insert time (RLS)

### 7.11 Vocabulary / Search
- **Purpose**: dictionary lookup
- **Sections**:
  1. Search box (bilingual — accepts Persian or English)
  2. Recent searches (when query empty)
  3. Result list: English word + IPA + 🔊 + Persian meaning
  4. Tap → word-detail bottom-sheet
- **Phase-1 reality**: DB is empty; show "Coming soon" empty state with copy explaining we're growing the dictionary
- **Edge cases**: no results for query → friendly "no results for X" copy; search rate-limit (free tier 10/day) → upgrade nudge

### 7.12 Word Detail (bottom-sheet)
- **Purpose**: full info for one word
- **Sections**:
  - English + 🔊 (US) + 🔊 (UK)
  - CEFR badge + part-of-speech badge
  - IPA (US + UK rows)
  - Sense list (numbered; each has Persian meaning + example sentence)
  - Synonyms / antonyms chips
  - "Add to My Words" → picker bottom-sheet (in-place, no nav)
  - "Add to Leitner" (premium-gated)

### 7.13 My Words (list)
- **Purpose**: user's custom collections
- **Sections**:
  1. Header + "New category" CTA
  2. Collections grid (icon + color + name + count)
  3. Search box (filter by collection name)
  4. Empty state when 0 collections
- **Edge cases**: guest → AuthGate

### 7.14 My Words Detail
- **Purpose**: words inside a collection
- **Sections**:
  1. Header (collection name + ⋮ menu with "Add word" / "Delete collection")
  2. Word list (with 🔊 + remove)
  3. Delete-collection confirmation dialog
- **Edge cases**: 0 words → empty state with "Add word" inline CTA; delete fails → toast

### 7.15 Vocab Learning
- **Purpose**: study by topic
- **Sections**:
  1. Top section: 6 CEFR level cards (A1 / A2 / B1 / B2 / C1 / C2)
  2. Categories grid: 35 cards from openjam (food / drink / body / clothing / …)
  3. Tap level → `/flashcards?level=X`; tap category → `/category-words/:id`

### 7.16 Category Words
- **Purpose**: word list filtered by category
- **Sections**: header + word list with 🔊 + filter chips for CEFR
- **Phase-1 reality**: empty (no words yet)

### 7.17 Reading (library)
- **Purpose**: browse public-domain books
- **Sections** (top → bottom):
  1. Header + search/library icons
  2. Level chips (All / C2 / C1 / B2 / B1 / A2)
  3. Categories row (5 fixed: fiction / self-help / business / science / history)
  4. Featured books (horizontal carousel)
  5. In-progress books (if user logged in + has progress)
  6. Newest books (horizontal carousel)
- **Edge cases**: 0 books in category → friendly empty; search no-results → friendly

### 7.18 Book Detail
- **Purpose**: book metadata + entry to reader
- **Sections**:
  1. Cover + title + author + level badge
  2. Metadata grid (year / publisher / chapters / words / reading time)
  3. Description
  4. Two CTAs: "Download" (cache file) / "Read" (if cached)
  5. Bookmark toggle (saves to user_saved_books)
- **Edge cases**: file not uploaded → disabled "Read" + tooltip; download fails → toast; delete-cache confirmation dialog

### 7.19 Book Reader
- **Purpose**: read a book
- **Standards**:
  - Serif font (Crimson Text)
  - Chapter detection from "Chapter X" / "CHAPTER X" markers
  - Monotonic progress (never goes backwards on session)
  - Tap any word → quick-look popup (🔊 + Persian + "Add to Leitner")
  - Top bar: chapter title + close + bookmark toggle
  - Bottom bar: progress % + chapter navigation
- **Edge cases**: file load error → retry CTA; word lookup fails → fallback Google Translate link

### 7.20 Saved Books
- **Purpose**: user's bookmarked books
- **Sections**: header + list of saved books (cover + title + author + level + remove)
- **Edge cases**: guest → AuthGate; 0 saved → friendly empty + CTA to library

### 7.21 Flashcards
- **Purpose**: study mode without spaced-repetition rules
- **Inputs**: level filter (from URL `?level=`)
- **Sections**:
  1. Progress bar (X / total)
  2. Card (front = English + 🔊; back = Persian + example) — tap to flip
  3. Know / Don't Know buttons
  4. End-of-deck summary + restart
- **Edge cases**: 0 cards for level → friendly empty + level picker; record fails → silently retry

### 7.22 Quiz (3 modes)
- **Purpose**: test recall in 3 ways
- **Modes**:
  - Forward MCQ — English prompt, pick Persian translation from 4 options
  - Reverse MCQ — Persian prompt, pick English equivalent from 4 options
  - Spelling — Persian prompt, type English (Levenshtein-tolerant — single-typo accepted)
- **Shared sections**:
  1. Progress row
  2. Prompt card (CEFR badge + prompt text + 🔊)
  3. Options grid (MCQ) or text input (spelling)
  4. Correct/incorrect feedback overlay
  5. End-of-quiz summary + restart
- **Edge cases**: not enough words in DB → friendly "more words needed" copy; rate-limit free tier (3 quizzes/day) → upgrade nudge

### 7.23 Stats
- **Purpose**: progress visualization
- **Sections**:
  1. Top 4-tile grid: XP / Streak / Cards learned / Study time
  2. 7-day heatmap (today on the trailing edge)
  3. Achievements grid (3-col, locked/unlocked, tap → detail dialog)
  4. Session-type breakdown (flashcard / leitner / quiz / reading) — bar chart
  5. Compare with others CTA → `/leaderboard`

### 7.24 Leaderboard
- **Purpose**: social motivation
- **Sections**:
  1. Top-3 podium (gold/silver/bronze)
  2. Your rank card ("Your rank #X" + "Better than Y% of users")
  3. Full top-100 list (avatar + name + level + XP)
  4. Footer: "Updated every 24 hours"
- **Edge cases**: guest → AuthGate ("Sign in to view leaderboard"); 0 users → "No data yet"; load error → retry

### 7.25 Profile
- **Purpose**: user account + preferences hub (consolidates legacy Settings)
- **Sections** (top → bottom):
  1. Top bar (gear icon → `/settings`)
  2. Avatar + display name + username + level + XP bar
  3. This-week stats card (3-tile: cards / minutes / streak)
  4. Section "Leitner": daily word limit, clear all leitner
  5. Section "Notifications": toggle + time/day picker
  6. Section "Appearance": light / dark / system
  7. Section "Account": login (guest) / username / email / phone / password / logout / delete account
  8. Section "Other": language picker / notif management / guide / about
- **Edge cases**: guest gets a stripped-down version showing only the login CTA + appearance + language; delete-account requires double-confirm dialog

### 7.26 Settings
- **Purpose**: deeper preferences (subset of Profile)
- **Sections**: same as §7.25 Profile §3-§8, but presented as a dedicated screen for users who tap the gear icon
- **Decision**: in test phase, Settings = Profile sections 4-8 only. May be fully merged into Profile post-design-review.

### 7.27 Paywall
- **Purpose**: convert to premium
- **Sections**:
  1. Hero (locked feature illustration + tagline)
  2. Feature comparison table (Free vs Premium)
  3. 2 plan cards: Monthly $2.99 / Yearly $19.99 (yearly = "Save 44%")
  4. Big "Subscribe" CTA → Stripe Checkout (external)
  5. "Restore purchase" link
  6. Footer: small terms link
- **Edge cases**: already premium → "You're premium" celebration + manage subscription link; checkout fails → toast + retry

### 7.28 More
- **Purpose**: hub for screens not in bottom nav
- **Sections**: grid of links — Flashcards / Quiz / Reading / Leaderboard / Vocab Learning / Settings
- **Note**: most users never visit More because everything important is in bottom nav. Kept for discoverability.

## 8. Decisions log

- **D-001 (2026-05-16)** — Dropped Iran market + ZarinPal. Google Play + Stripe only.
- **D-004 (2026-05-18)** — Spec v2 supersedes original PRD.
- **D-005 (2026-05-26)** — International audience. v1 = many → English; v2 = pair-to-pair.
- **D-006 (2026-05-27)** — Test phase: Persian diaspora, `fa` UI default, `en` target. No pricing localization yet.
- **D-007 (2026-05-27)** — Wipe Supabase words table. Don't import openjam yet (waiting for 10K + audio). Vocab screen empty in test phase. 🔊 button required next to every English word.
- **D-008 (2026-05-27)** — Categories come from openjam (35 flat categories).

## 9. Standards (every screen must follow)

- [ ] No hardcoded text — every visible string keyed in `locales/*.json`
- [ ] No hardcoded direction — chrome uses logical CSS (`margin-inline-start`, `text-align: start`, `padding-inline`)
- [ ] Every form: `<form>` with proper `autocomplete` hints, password manager hooks, submit on Enter
- [ ] Every error: friendly l10n message via toast (centered popup) — never raw exception
- [ ] Every loading state: skeleton (not just spinner)
- [ ] Every empty state: illustration + copy + CTA — never a blank screen
- [ ] Every interactive element: hover + active + focus + disabled states
- [ ] Every dialog: tap outside or back button to dismiss
- [ ] Every audio button: same icon, same animation while playing, same accessibility label
- [ ] Light + dark theme: every screen renders correctly in both
- [ ] LTR + RTL: chrome flips, text-align follows locale, icons that have direction (arrow ‹ vs ›) flip
- [ ] Accessibility: every interactive element has aria-label or visible text label; color contrast WCAG AA

## 10. Performance & security

- Initial bundle < 80 KB gzipped (excluding Vazirmatn font)
- LCP < 2.5s on slow 3G
- Web Speech API call only on user gesture (no autoplay)
- CSP header restricts script-src to `self` + inline (no third-party JS except fonts)
- All forms POST over HTTPS to Supabase or Stripe — never to a non-TLS endpoint
- No PII in URL query params
- Session storage uses `localStorage` only for non-sensitive prefs (locale, theme); auth tokens stay in HttpOnly cookies (Supabase default)

## 11. i18n rule (the law)

**The infrastructure must never assume Persian.**

Phase 1 UI default is `fa` purely because the test audience is Persian-speaking. The system must support arbitrary locales tomorrow.

- Persian content lives in `locales/fa.json`
- Default locale set via one config constant — change to switch
- `<html lang dir>` driven by active locale
- All chrome layout uses logical CSS — `margin-inline-start` not `margin-left`
- DB uses `language_code` columns and translation join tables, never `persian` columns
- Hardcoded Persian anywhere is a regression and must be fixed
