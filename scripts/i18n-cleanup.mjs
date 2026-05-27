/**
 * i18n-cleanup
 * ----------------------------------------------------------------------------
 * Replaces hardcoded Persian strings in each screen's HTML with the matching
 * data-i18n="…" attribute. The mapping below is hand-curated so each Persian
 * literal lands on the right semantic key in /locales/{en,fa}.json.
 *
 * Strategy:
 *   - For every entry, find the EXACT inner text pattern between two tags
 *     and replace the OPENING tag to include data-i18n="...".
 *   - The Persian text inside the tag is removed (i18n.js fills it in).
 *
 * Run: node scripts/i18n-cleanup.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src', 'screens');

// Per-screen list of {persian, key, [attrs]} replacements.
// attrs lets us also add data-i18n-vars or data-i18n-html.
const SCREENS = {
  'home.html': [
    ['سلام رضا!', 'v3.home.greetingHi', { vars: { name: 'رضا' } }],
    ['خوش اومدی به Jamlex', 'v3.home.welcomeBack'],
    ['7 روز', 'v3.home.streakDays', { vars: { n: 7 } }],
    ['رکورد یادگیری', 'v3.home.streakLabel'],
    ['راست', 'v3.home.wodMeaning'],
    ['مسیر یادگیری شما', 'v3.home.vocabProgressSub'],
    ['🌱 خیلی خوب! ادامه بده', 'v3.home.vocabProgressCheer'],
    ['مطالعه و یادگیری', 'v3.home.readBookSub'],
    ['لغات ذخیره شده', 'v3.home.myWordsSub'],
  ],
  'leitner.html': [
    ['لایتنر', 'v3.leitner.title'],
    ['۱۵ کارت آماده مرور', 'v3.leitner.dueCount', { vars: { n: 15 } }],
    ['برای تقویت حافظه بلندمدت مرور کن', 'v3.leitner.dueSub'],
    ['آخرین مرور شده‌ها', 'v3.leitner.recentlyReviewed'],
    ['لایتنر شما خالیه!', 'v3.leitner.emptyTitle'],
    ['رفتن به واژه‌نامه', 'v3.leitner.emptyCta'],
  ],
  'leitner-review.html': [
    ['مال ما', 'v3.flashcards.meaning', { override: 'مال ما' }],
    ['بلد نیستم', 'v3.leitner.review.dontKnow'],
    ['تاحدی بلدم', 'v3.leitner.review.sortOf'],
    ['بلدم', 'v3.leitner.review.know'],
    ['کاملاً بلدم', 'v3.leitner.review.knowWell'],
    ['🎉 آفرین! عالی بود', 'v3.leitner.review.summary.title'],
    ['دقت شما', 'v3.leitner.review.summary.accuracy'],
    ['واژه‌های مرور شده', 'v3.leitner.review.summary.wordsReviewed'],
    ['زمان مطالعه', 'v3.leitner.review.summary.studyTime'],
    ['۲۲ دقیقه', 'v3.leitner.review.summary.minutesUnit', { vars: { n: 22 } }],
    ['ثبات تو، آینده تو رو می‌سازه!', 'v3.leitner.review.summary.quote'],
    ['ادامه مسیر', 'v3.leitner.review.summary.continueBtn'],
    ['مشاهده آمار پیشرفت', 'v3.leitner.review.summary.viewStats'],
  ],
  'vocabulary.html': [
    ['جستجوی لغت...', 'v3.vocab.searchPlaceholder', { placeholder: true }],
    ['تاریخچه جستجو', 'v3.vocab.historyTitle'],
    ['پاک کردن همه', 'v3.vocab.clearAll'],
    ['جستجو سریع‌تر، یادگیری بهتر', 'v3.vocab.advisoryTitle'],
    ['واژه‌های مورد نظر خود را جستجو کنید و دانش خود را گسترش دهید.', 'v3.vocab.advisorySub'],
    ['واژه‌نامه آماده!', 'v3.vocab.readyTitle'],
    ['معنی‌ها', 'v3.vocab.wordDetail.meanings'],
    ['مثال', 'v3.vocab.wordDetail.example'],
    ['مشاهده کامل', 'v3.vocab.wordDetail.viewFull'],
    ['افزودن به لایتنر', 'v3.vocab.wordDetail.addToLeitner'],
    ['تلفظ', 'v3.vocab.wordDetail.pronunciation'],
  ],
  'my-words.html': [
    ['واژگان من', 'v3.myWords.title'],
    ['مجموعه‌ای لغاتی که خودت ذخیره کردی', 'v3.myWords.subList'],
    ['مجموعه‌ای شخصی از لغاتی که ذخیره می‌کنید', 'v3.myWords.subEmpty'],
    ['جستجوی لغت یا دسته‌بندی...', 'v3.myWords.searchInDict', { placeholder: true }],
    ['دسته‌بندی‌ها', 'v3.myWords.categoriesLabel'],
    ['دسته‌بندی جدید', 'v3.myWords.newCategory'],
    ['هنوز دسته‌بندی‌ای ندارید', 'v3.myWords.noCategoriesTitle'],
    ['هم‌لفظ‌ها', 'v3.myWords.collections.homonyms'],
    ['۲۴ لغت', 'v3.myWords.collections.homonymsCount'],
    ['افعال مهم', 'v3.myWords.collections.verbs'],
    ['۱۸ لغت', 'v3.myWords.collections.verbsCount'],
    ['لغات کتاب Atomic Habits', 'v3.myWords.collections.atomic'],
    ['۴۲ لغت', 'v3.myWords.collections.atomicCount'],
    ['لغات آزمون تافل', 'v3.myWords.collections.toefl'],
    ['۳۶ لغت', 'v3.myWords.collections.toeflCount'],
    ['لغات فیلم و سریال', 'v3.myWords.collections.movies'],
    ['۲۷ لغت', 'v3.myWords.collections.moviesCount'],
    ['لغات سفر', 'v3.myWords.collections.travel'],
    ['۱۶ لغت', 'v3.myWords.collections.travelCount'],
  ],
  'my-words-detail.html': [
    ['هم‌لفظ‌ها', 'v3.myWords.collections.homonyms'],
    ['۲۴ لغت', 'v3.myWords.collections.homonymsCount'],
    ['۱۸٪ پیشرفت', 'v3.myWords.detailProgress', { vars: { pct: 18 } }],
    ['جستجوی لغت یا دسته‌بندی...', 'v3.myWords.searchInDict', { placeholder: true }],
    ['حذف دسته‌بندی', 'v3.myWords.deleteCategoryTitle'],
  ],
  'reading.html': [
    ['خواندن کتاب', 'v3.reading.title'],
    ['هزاران کتاب رایگان در دسته‌بندی‌های مختلف', 'v3.reading.subtitle'],
    ['همه سطوح', 'v3.reading.level.all'],
    ['پیشرفته', 'v3.reading.level.advanced'],
    ['بالا', 'v3.reading.level.upper'],
    ['متوسط بالا', 'v3.reading.level.upperMid'],
    ['متوسط', 'v3.reading.level.mid'],
    ['مبتدی', 'v3.reading.level.starter'],
    ['دسته‌بندی‌ها', 'v3.reading.categories'],
    ['مشاهده همه', 'v3.reading.seeAll'],
    ['کتاب‌های پیشنهادی', 'v3.reading.featured'],
    ['ادامه مطالعه', 'v3.reading.continueReading'],
    ['جدیدترین کتاب‌ها', 'v3.reading.newest'],
    ['داستان و رمان', 'v3.reading.category.fiction'],
    ['توسعه فردی', 'v3.reading.category.selfHelp'],
    ['کسب‌وکار', 'v3.reading.category.business'],
    ['علمی و آموزشی', 'v3.reading.category.science'],
    ['تاریخ و زندگی‌نامه', 'v3.reading.category.history'],
    ['جدید', 'v3.reading.newBadge'],
    ['آخرین مطالعه: دیروز', 'v3.reading.lastReadYesterday'],
  ],
  'saved-books.html': [
    ['کتاب‌های ذخیره شده', 'v3.savedBooks.title'],
    ['مرتب‌سازی', 'v3.savedBooks.sort'],
    ['۵ کتاب', 'v3.savedBooks.booksCount', { vars: { n: 5 } }],
    ['هنوز کتابی ذخیره نکرده‌اید', 'v3.savedBooks.emptyTitle'],
    ['جستجوی کتاب', 'v3.savedBooks.searchBook'],
    ['زبان انگلیسی', 'v3.savedBooks.tags.english'],
    ['توسعه فردی', 'v3.savedBooks.tags.selfHelp'],
    ['مالی و سرمایه‌گذاری', 'v3.savedBooks.tags.finance'],
    ['مدیریت زمان', 'v3.savedBooks.tags.timeMgmt'],
    ['عادت‌های اتمی', 'v3.savedBooks.titleAtomic'],
    ['جیمز کلیر', 'v3.savedBooks.authorAtomic'],
    ['اثر مرکب', 'v3.savedBooks.titleCompound'],
    ['دارن هاردی', 'v3.savedBooks.authorCompound'],
  ],
  'book-detail.html': [
    ['زبان: انگلیسی', 'v3.bookDetail.languageRow'],
    ['سطح: متوسط', 'v3.bookDetail.levelRow'],
    ['سال انتشار: 2012', 'v3.bookDetail.yearRow'],
    ['فصل', 'v3.bookDetail.chapters'],
    ['درس', 'v3.bookDetail.lessons'],
    ['زمان مطالعه', 'v3.bookDetail.readingTime'],
    ['پیشرفت', 'v3.bookDetail.progress'],
    ['درباره کتاب', 'v3.bookDetail.aboutTitle'],
    ['ادامه مطالعه', 'v3.bookDetail.continueRead'],
  ],
  'book-reader.html': [
    ['معنی‌ها', 'v3.bookReader.lookup.meanings'],
    ['مثال', 'v3.bookReader.lookup.example'],
    ['مشاهده کامل', 'v3.bookReader.lookup.viewFull'],
    ['افزودن به لایتنر', 'v3.bookReader.lookup.addToLeitner'],
    ['تلفظ', 'v3.bookReader.lookup.pronounce'],
  ],
  'flashcards.html': [
    ['فلش‌کارت — B1', 'v3.flashcards.title', { vars: { level: 'B1' } }],
    ['برای دیدن معنی، روی کارت بزن', 'v3.flashcards.tapToFlip'],
    ['انجام دادن، به انجام رساندن', 'v3.flashcards.meaning'],
    ['بلد نیستم', 'v3.flashcards.dontKnow'],
    ['بلدم', 'v3.flashcards.know'],
    ['🎉 تمام شد!', 'v3.flashcards.summary.title'],
    ['۲۰ فلش‌کارت رو دیدی', 'v3.flashcards.summary.subtitle'],
    ['🔁 یک دور دیگر', 'v3.flashcards.summary.again'],
    ['برگشت به خانه', 'v3.flashcards.summary.back'],
  ],
  'quiz-mcq.html': [
    ['آزمون ترجمه', 'v3.quiz.mcqTitle'],
    ['نزدیک‌ترین گزینه به ترجمه را انتخاب کنید', 'v3.quiz.mcqPrompt'],
    ['سرعت', 'v3.quiz.options.speed'],
    ['تاب‌آوری', 'v3.quiz.options.resilience'],
    ['درخشش', 'v3.quiz.options.brilliance'],
    ['سکوت', 'v3.quiz.options.silence'],
    ['بررسی', 'v3.quiz.checkBtn'],
    ['درست! 🎉', 'v3.quiz.correctTitle'],
    ['پاسخ صحیح: resilience', 'v3.quiz.correctSub'],
    ['سؤال بعدی', 'v3.quiz.next'],
    ['پایان آزمون!', 'v3.quiz.endTitle'],
    ['دقت ۸۰%', 'v3.quiz.endAccuracy', { vars: { pct: 80 } }],
    ['🔁 شروع مجدد', 'v3.quiz.endRestart'],
    ['خروج', 'v3.quiz.endExit'],
  ],
  'quiz-reverse.html': [
    ['آزمون ترجمه معکوس', 'v3.quiz.reverseTitle'],
    ['معادل انگلیسی کلمه را انتخاب کنید', 'v3.quiz.reversePrompt'],
    ['تاب‌آوری', 'v3.quiz.options.resilience'],
    ['بررسی', 'v3.quiz.checkBtn'],
  ],
  'quiz-spelling.html': [
    ['تمرین املا', 'v3.quiz.spellingTitle'],
    ['معادل انگلیسی را تایپ کنید', 'v3.quiz.spellingPrompt'],
    ['تاب‌آوری', 'v3.quiz.options.resilience'],
    ['یه typo قبول می‌شه (Levenshtein-tolerant)', 'v3.quiz.spellingHint'],
    ['بررسی', 'v3.quiz.checkBtn'],
  ],
  'stats.html': [
    ['آمار', 'v3.stats.title'],
    ['مجموع XP', 'v3.stats.totalXp'],
    ['روز', 'v3.stats.streakUnit'],
    ['رکورد فعلی', 'v3.stats.currentStreak'],
    ['کارت یاد گرفته', 'v3.stats.cardsLearned'],
    ['ساعت', 'v3.stats.hoursUnit'],
    ['زمان مطالعه', 'v3.stats.studyTime'],
    ['این هفته', 'v3.stats.thisWeek'],
    ['تفکیک جلسات', 'v3.stats.sessionBreakdown'],
    ['لایتنر', 'v3.stats.session.leitner'],
    ['فلش‌کارت', 'v3.stats.session.flashcard'],
    ['آزمون', 'v3.stats.session.quiz'],
    ['مطالعه', 'v3.stats.session.reading'],
    ['دستاوردها', 'v3.stats.achievements'],
    ['شروع', 'v3.stats.ach.start'],
    ['۳ روز', 'v3.stats.ach.streak3'],
    ['۱۰ کارت', 'v3.stats.ach.cards10'],
    ['۱۰۰ کارت', 'v3.stats.ach.cards100'],
    ['اولین کتاب', 'v3.stats.ach.firstBook'],
    ['دقت ۹۰٪', 'v3.stats.ach.acc90'],
    ['پرمیوم', 'v3.stats.ach.premium'],
    ['۳۰ روز', 'v3.stats.ach.streak30'],
    ['۱۰۰۰ کارت', 'v3.stats.ach.cards1000'],
    ['مقایسه با دیگران', 'v3.stats.compareWithOthers'],
  ],
  'leaderboard.html': [
    ['جایگاه شما در بین همه کاربران', 'v3.leaderboard.subtitle'],
    ['جایگاه شما', 'v3.leaderboard.yourRank'],
    ['برترین‌ها 🏆', 'v3.leaderboard.topTitle'],
    ['هر ۲۴ ساعت یکبار بروزرسانی می‌شود', 'v3.leaderboard.updatedHint'],
    ['(شما)', 'v3.leaderboard.you'],
    ['ورود به حساب کاربری', 'v3.leaderboard.loginCta'],
    ['سطح ۱۲', 'v3.leaderboard.level', { vars: { n: 12 } }],
    ['سطح ۲۵', 'v3.leaderboard.level', { vars: { n: 25 } }],
    ['سطح ۲۲', 'v3.leaderboard.level', { vars: { n: 22 } }],
    ['سطح ۲۱', 'v3.leaderboard.level', { vars: { n: 21 } }],
    ['سطح ۲۶', 'v3.leaderboard.level', { vars: { n: 26 } }],
    ['سطح ۲۸', 'v3.leaderboard.level', { vars: { n: 28 } }],
  ],
  'profile.html': [
    ['پروفایل', 'v3.profile.title'],
    ['رضا محمدی', 'v3.profile.name'],
    ['سطح ۶', 'v3.profile.levelChip', { vars: { n: 6 } }],
    ['پیشرفت تا سطح ۷', 'v3.profile.xpProgressLabel', { vars: { n: 7 } }],
    ['کارت این هفته', 'v3.profile.weekCards'],
    ['دقیقه', 'v3.profile.weekMinutes'],
    ['روز پیاپی', 'v3.profile.weekStreak'],
    ['لایتنر', 'v3.profile.sec.leitner'],
    ['سقف روزانه', 'v3.profile.dailyLimit'],
    ['۲۰ کارت در روز', 'v3.profile.dailyLimitSub'],
    ['پاک کردن کل لایتنر', 'v3.profile.clearLeitner'],
    ['شروع از صفر', 'v3.profile.clearLeitnerSub'],
    ['اعلان‌ها', 'v3.profile.sec.notif'],
    ['یادآور روزانه', 'v3.profile.notifTitle'],
    ['روشن — ۲۰:۳۰ · ۵ روز در هفته', 'v3.profile.notifOnSub'],
    ['حساب کاربری', 'v3.profile.sec.account'],
    ['ایمیل', 'v3.profile.email'],
    ['شماره موبایل', 'v3.profile.phone'],
    ['تغییر رمز عبور', 'v3.profile.changePwd'],
    ['خروج از حساب', 'v3.profile.logout'],
    ['ارتقا به پریمیوم', 'v3.profile.premiumCta'],
  ],
  'settings.html': [
    ['تنظیمات', 'v3.settings.title'],
    ['ظاهر', 'v3.settings.secAppearance'],
    ['حالت نمایش', 'v3.profile.displayMode'],
    ['سیستم', 'v3.profile.displaySystem'],
    ['یادگیری', 'v3.settings.secLearning'],
    ['سقف روزانه لایتنر', 'v3.profile.dailyLimit'],
    ['۲۰ کارت در روز', 'v3.profile.dailyLimitSub'],
    ['یادآور روزانه', 'v3.profile.notifTitle'],
    ['۲۰:۳۰ · ۵ روز در هفته', 'v3.profile.notifOnSub'],
    ['زبان', 'v3.settings.secLang'],
    ['زبان رابط کاربری', 'v3.profile.uiLanguage'],
    ['فارسی', 'v3.profile.uiLangValue'],
    ['حساب', 'v3.settings.secAccount'],
    ['خروج از حساب', 'v3.profile.logout'],
    ['حذف حساب کاربری', 'v3.profile.deleteAccount'],
    ['پاک شدن دائمی همه داده‌ها', 'v3.profile.deleteAccountSub'],
    ['درباره', 'v3.settings.secAbout'],
    ['درباره Jamlex', 'v3.profile.aboutApp'],
    ['تنظیم یادآوری', 'v3.settings.notif.title'],
    ['زمان و روزهای یادآوری را انتخاب کنید', 'v3.settings.notif.sub'],
    ['روزهای یادآوری', 'v3.settings.notif.days'],
    ['صدای یادآور', 'v3.settings.notif.sound'],
    ['پیش‌فرض', 'v3.settings.notif.soundDefault'],
    ['لغو', 'v3.settings.notif.cancel'],
    ['ذخیره', 'v3.settings.notif.save'],
  ],
  'paywall.html': [
    ['یادگیری بدون محدودیت، هر جا، هر زمان', 'v3.paywall.sub'],
    ['دسترسی نامحدود', 'v3.paywall.feat.unlimitedTop'],
    ['به همه واژه‌ها', 'v3.paywall.feat.unlimitedBot'],
    ['جستجوی پیشرفته', 'v3.paywall.feat.searchTop'],
    ['در تمام محتوا', 'v3.paywall.feat.searchBot'],
    ['گزارش‌های دقیق', 'v3.paywall.feat.reportsTop'],
    ['از روند یادگیری', 'v3.paywall.feat.reportsBot'],
    ['دسته‌بندی نامحدود', 'v3.paywall.feat.categoriesTop'],
    ['و مدیریت کامل', 'v3.paywall.feat.categoriesBot'],
    ['انتخاب پلن مناسب شما', 'v3.paywall.pickPlan'],
    ['محبوب‌ترین', 'v3.paywall.popular'],
    ['سالانه', 'v3.paywall.yearlyName'],
    ['بهترین انتخاب و بیشترین صرفه‌جویی', 'v3.paywall.yearlySub'],
    ['ماهانه', 'v3.paywall.monthlyName'],
    ['انعطاف‌پذیری بیشتر', 'v3.paywall.monthlySub'],
    ['ادامه و پرداخت', 'v3.paywall.checkoutBtn'],
    ['پرداخت امن و اطلاعات شما محفوظ است', 'v3.paywall.secureNote'],
  ],
  'more.html': [
    ['بیشتر', 'v3.more.title'],
    ['فلش‌کارت', 'v3.more.flashcardsTitle'],
    ['یادگیری بر اساس سطح', 'v3.more.flashcardsSub'],
    ['آزمون', 'v3.more.quizTitle'],
    ['۳ حالت — انتخابی و املا', 'v3.more.quizSub'],
    ['خواندن کتاب', 'v3.more.readingTitle'],
    ['هزاران کتاب رایگان', 'v3.more.readingSub'],
    ['رتبه‌بندی', 'v3.more.leaderboardTitle'],
    ['بروزرسانی هر ۲۴ ساعت', 'v3.more.leaderboardSub'],
    ['واژه‌آموزی', 'v3.more.vocabLearningTitle'],
    ['۳۵ دسته‌بندی موضوعی', 'v3.more.vocabLearningSub'],
    ['تنظیمات', 'v3.more.settingsTitle'],
    ['زبان، تم و یادآور', 'v3.more.settingsSub'],
    ['کتاب‌های ذخیره', 'v3.more.savedBooksTitle'],
    ['یادگیری بدون محدودیت', 'v3.more.premiumSub'],
  ],
  'vocab-learning.html': [
    ['واژه‌آموزی', 'v3.vocabLearning.title'],
    ['جستجو به انگلیسی یا فارسی...', 'v3.vocabLearning.searchPlaceholder', { placeholder: true }],
    ['یادگیری بر اساس سطح', 'v3.vocabLearning.byLevel'],
    ['کتاب‌های آموزشی', 'v3.vocabLearning.studyBooks'],
    ['واژگان موضوعی', 'v3.vocabLearning.topicWords'],
    ['پیشرفته', 'v3.vocabLearning.level.C1Label'],
    ['فوق‌متوسط', 'v3.vocabLearning.level.B2Label'],
    ['متوسط', 'v3.vocabLearning.level.B1Label'],
    ['پایه', 'v3.vocabLearning.level.A2Label'],
    ['مبتدی', 'v3.vocabLearning.level.A1Label'],
    ['504 لغت ضروری', 'v3.vocabLearning.book.fiveHundredTitle'],
    ['پیشرفت', 'v3.vocabLearning.book.progress'],
    ['طبیعت', 'v3.vocabLearning.topic.nature'],
    ['بدن انسان', 'v3.vocabLearning.topic.body'],
    ['کسب‌وکار', 'v3.vocabLearning.topic.business'],
    ['سلامت', 'v3.vocabLearning.topic.health'],
    ['حیوانات', 'v3.vocabLearning.topic.animals'],
    ['سفر', 'v3.vocabLearning.topic.travel'],
    ['خانه', 'v3.vocabLearning.topic.home'],
    ['احساسات', 'v3.vocabLearning.topic.feelings'],
    ['هدف روزانه', 'v3.vocabLearning.footer.dailyGoal'],
    ['40 واژه', 'v3.vocabLearning.footer.dailyGoalValue'],
    ['واژه‌های امروز', 'v3.vocabLearning.footer.todayLabel'],
    ['مجموع واژه‌های یادگرفته‌شده', 'v3.vocabLearning.footer.totalLabel'],
  ],
  'category-words.html': [
    ['واژه‌آموزی', 'v3.vocabLearning.title'],
    ['واژگان سطح مبتدی', 'v3.vocabLearning.category.indicator'],
    ['پیشرفت کلی', 'v3.vocabLearning.category.overall'],
    ['درس 7 از 20', 'v3.vocabLearning.category.lessonOf'],
    ['درس اول', 'v3.vocabLearning.category.lessonName1'],
    ['درس دوم', 'v3.vocabLearning.category.lessonName2'],
    ['درس سوم', 'v3.vocabLearning.category.lessonName3'],
    ['درس چهارم', 'v3.vocabLearning.category.lessonName4'],
    ['درس پنجم', 'v3.vocabLearning.category.lessonName5'],
    ['درس ششم', 'v3.vocabLearning.category.lessonName6'],
    ['افزودن به لایتنر', 'v3.vocabLearning.modal.addToLeitner'],
    ['انتخاب روش مطالعه', 'v3.vocabLearning.modal.pickMethod'],
    ['مرور لغات', 'v3.vocabLearning.modal.review'],
    ['کلمات و معنی آن‌ها را مرور کنید', 'v3.vocabLearning.modal.reviewSub'],
    ['فلش کارت', 'v3.vocabLearning.modal.flashcard'],
    ['با فلش کارت‌ها تمرین کنید', 'v3.vocabLearning.modal.flashcardSub'],
    ['آزمون', 'v3.vocabLearning.modal.quiz'],
    ['دانش خود را بسنجید', 'v3.vocabLearning.modal.quizSub'],
  ],
};

function escapeReg (s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function processFile (filename, mappings) {
  const path = join(SRC, filename);
  let html;
  try {
    html = readFileSync(path, 'utf-8');
  } catch (e) {
    console.warn(`SKIP ${filename}: ${e.message}`);
    return;
  }
  let count = 0;

  for (const [fa, key, opts] of mappings) {
    const vars = opts?.vars;
    const isPlaceholder = opts?.placeholder;
    const escaped = escapeReg(fa);

    if (isPlaceholder) {
      // Pattern: <input placeholder="فا..." ...>
      const re = new RegExp(`(<input[^>]*?)placeholder="${escaped}"([^>]*?>)`, 'g');
      html = html.replace(re, (match, before, after) => {
        count++;
        const varsAttr = vars ? ` data-i18n-vars='${JSON.stringify(vars).replace(/'/g, '&#39;')}'` : '';
        return `${before}data-i18n-attr="placeholder:${key}"${varsAttr}${after}`;
      });
      continue;
    }

    // Pattern: <tag ...>fa</tag> — text content inside opening/closing tag.
    // We match the inner text. The tag retains its attrs and gets data-i18n added.
    // Be careful: the regex looks for the SPECIFIC text between > and <.
    // Capture: opening tag (with attrs), then >, then the persian text, then <
    const re = new RegExp(`(<(\\w+)([^>]*)>)\\s*${escaped}\\s*(</\\2>)`, 'g');
    html = html.replace(re, (match, openTag, tagName, attrs, closeTag) => {
      count++;
      // skip if data-i18n already present
      if (/data-i18n/.test(attrs)) return match;
      const varsAttr = vars ? ` data-i18n-vars='${JSON.stringify(vars).replace(/'/g, '&#39;')}'` : '';
      return `<${tagName}${attrs} data-i18n="${key}"${varsAttr}>${closeTag}`;
    });
  }

  if (count) {
    writeFileSync(path, html, 'utf-8');
    console.log(`${filename}: ${count} replacements`);
  } else {
    console.log(`${filename}: no changes`);
  }
}

let total = 0;
for (const [filename, mappings] of Object.entries(SCREENS)) {
  processFile(filename, mappings);
  total += mappings.length;
}
console.log(`\nDone. Processed ${Object.keys(SCREENS).length} screens, ${total} key mappings.`);
