# Jamlex Lottie animations

Every illustration in the app lives here as a `.json` Lottie animation. The
files shipped in this folder are **placeholder stubs** — they render a
simple colored shape so the layout looks right, but they are NOT the final
art. The owner downloads the real animations from
[lottiefiles.com](https://lottiefiles.com) and replaces the matching file
in this folder.

## How to replace a placeholder

1. Open https://lottiefiles.com and find the animation you want
2. Click **Download** → **Lottie JSON** (or **dotLottie** — both work)
3. Save the file with the exact name below (the key) — e.g. `hero-lock.json`
4. Drop it into `src/lottie/` overwriting the placeholder
5. Refresh the page — the new animation loads automatically

The slot names are intentional so a single replacement updates every screen
that uses the same logical asset (e.g. the lock illustration is reused on
Login, Forgot Password, New Password, Change Password and the Auth Gate).

## Asset slots

| File                          | Used on                                         |
|-------------------------------|-------------------------------------------------|
| `hero-lock.json`              | Login, Forgot Password, New Password, Change Password |
| `hero-profile.json`           | Register                                        |
| `hero-phone.json`             | Phone Auth (step 1)                             |
| `hero-otp.json`               | Phone Auth (step 2 — OTP)                       |
| `hero-envelope-check.json`    | Forgot Password "Email sent" confirmation       |
| `hero-trophy.json`            | Leitner Review summary                          |
| `hero-crown.json`             | Paywall                                         |
| `empty-box-plane.json`        | Leitner empty, My Words empty                   |
| `empty-book-bookmark.json`    | Saved Books empty                               |
| `gate-lock-leaves.json`       | My Words / Leaderboard / Saved Books auth gates |
| `wod-paper-plane.json`        | Home — Word of Day floating decoration          |
| `vocab-banner-book.json`      | Home — vocab learning gradient banner            |
| `qa-book.json`                | Home quick-action "خواندن کتاب"                  |
| `qa-mywords.json`             | Home quick-action "واژگان من"                    |
| `bookcard-ielts.json`         | Vocab Learning IELTS card                       |
| `bookcard-504.json`           | Vocab Learning 504-Essential card               |
| `bookcard-gre.json`           | Vocab Learning GRE card                         |
| `bookcard-toefl.json`         | Vocab Learning TOEFL card                       |
| `vocab-footer-trophy.json`    | Vocab Learning footer purple card               |
| `quote-plant.json`            | Leitner summary — quote card                    |
| `streak-flame.json`           | Home streak chip                                |
| `splash-logo.json`            | Splash screen                                   |

## How it works under the hood

`src/js/lottie.js` loads `lottie-web` from CDN and injects each `.json`
into elements like `<div class="lottie-stage" data-lottie="hero-lock"></div>`.
You do NOT need to call any JS — adding the attribute is enough.

The placeholders ship as tiny valid Lottie files so the player doesn't
error during development. Each placeholder shows a colored stamp shape
matching the slot's intent (teal lock, purple profile, yellow trophy …).
