// ============================================================================
//  vocab-sections.js — LOCKED 2026-05-29
//
//  The Vocab Learning screen now surfaces FIVE sections, not three. Three of
//  them come from openjam (topic groups, CEFR levels, study books). The two
//  in this file are JAMLEX-SIDE synthetic groupings — curated word sets that
//  share word_ids with openjam (per the cross-set progress rule in
//  architecture_openjam.md). The user can graduate a word inside ANY section
//  and it counts for the others.
//
//  Lessons inside these new sections have HAND-CRAFTED names. Generic
//  "Nature 1, Nature 2 … Nature 50" naming is forbidden in jamlex going
//  forward — every lesson row carries a thematic name that tells the user
//  what they'll learn in those 50 words.
//
//  Designed to scale: when the dataset grows from 20k → 30k words, adding
//  a new section here + appending its categories is enough. Every existing
//  surface that imports this file picks the new categories up automatically.
//
//  Section 4 — واژگان روزمره (Daily Life)        2,780 words · 57 lessons
//  Section 5 — واژگان حرفه‌ای (Professional)     5,140 words · 100 lessons
//
//  Combined with openjam topics + CEFR + books, the vocab-learning screen
//  shows 35+ tappable cards — feels full of the 20k-word library it backs.
// ============================================================================

export const VOCAB_SECTIONS = {

  // ────────────────────────────────────────────────────────────────────────
  //  Section 4 · واژگان روزمره (Daily Life)
  //  Practical, situational vocabulary the learner uses every day.
  //  All categories are intentionally sized so no lesson exceeds 50 words.
  // ────────────────────────────────────────────────────────────────────────
  daily: {
    name_fa: 'واژگان روزمره',
    name_en: 'Daily life',
    intro_fa: 'لغاتی که هر روز در زندگی به کارت می‌آد',
    intro_en: 'Words you use in everyday life',
    categories: [

      { slug: 'cooking', name_fa: 'آشپزی و خوراک', name_en: 'Cooking & food',
        icon: '🍳', tint: { bg: '#FFF3E0', fg: '#E65100' }, word_count: 600,
        lessons: [
          { name_fa: 'ابزار آشپزخانه',          name_en: 'Kitchen tools',          word_count: 50 },
          { name_fa: 'مواد اولیه پایه',         name_en: 'Basic ingredients',      word_count: 50 },
          { name_fa: 'سبزیجات',                 name_en: 'Vegetables',             word_count: 50 },
          { name_fa: 'میوه‌ها',                 name_en: 'Fruits',                 word_count: 50 },
          { name_fa: 'گوشت و دریایی',           name_en: 'Meat & seafood',         word_count: 50 },
          { name_fa: 'لبنیات و تخم‌مرغ',       name_en: 'Dairy & eggs',           word_count: 50 },
          { name_fa: 'ادویه و چاشنی',           name_en: 'Spices & seasoning',     word_count: 50 },
          { name_fa: 'نان و غلات',              name_en: 'Bread & grains',         word_count: 50 },
          { name_fa: 'شیرینی و دسر',            name_en: 'Sweets & desserts',      word_count: 50 },
          { name_fa: 'تکنیک‌های پخت',          name_en: 'Cooking techniques',     word_count: 50 },
          { name_fa: 'وعده‌های غذایی',         name_en: 'Meals',                  word_count: 50 },
          { name_fa: 'رستوران و کافه',          name_en: 'Restaurant & cafe',      word_count: 50 },
        ]},

      { slug: 'shopping', name_fa: 'خرید و فروشگاه', name_en: 'Shopping',
        icon: '🛒', tint: { bg: '#FFECB3', fg: '#B27A12' }, word_count: 350,
        lessons: [
          { name_fa: 'در سوپرمارکت',           name_en: 'At the supermarket',     word_count: 50 },
          { name_fa: 'فروشگاه‌های اختصاصی',   name_en: 'Specialty stores',       word_count: 50 },
          { name_fa: 'قیمت و پرداخت',          name_en: 'Pricing & payment',      word_count: 50 },
          { name_fa: 'تخفیف و حراج',            name_en: 'Discounts & sales',      word_count: 50 },
          { name_fa: 'بسته‌بندی و کیسه',       name_en: 'Packaging',              word_count: 50 },
          { name_fa: 'ضمانت و بازگشت',         name_en: 'Warranty & returns',     word_count: 50 },
          { name_fa: 'خرید آنلاین',             name_en: 'Online shopping',        word_count: 50 },
        ]},

      { slug: 'home-family', name_fa: 'خانه و خانواده', name_en: 'Home & family',
        icon: '🏠', tint: { bg: '#FFF8E1', fg: '#B27A12' }, word_count: 580,
        lessons: [
          { name_fa: 'اتاق نشیمن',             name_en: 'Living room',            word_count: 50 },
          { name_fa: 'اتاق خواب',              name_en: 'Bedroom',                word_count: 50 },
          { name_fa: 'حمام و سرویس',           name_en: 'Bathroom',               word_count: 50 },
          { name_fa: 'حیاط و باغچه',          name_en: 'Yard & garden',          word_count: 48 },
          { name_fa: 'لوازم منزل',             name_en: 'Household items',        word_count: 50 },
          { name_fa: 'نظافت و تمیزی',          name_en: 'Cleaning',               word_count: 48 },
          { name_fa: 'تعمیر و نگهداری',        name_en: 'Maintenance & repair',   word_count: 48 },
          { name_fa: 'اعضای خانواده',          name_en: 'Family members',         word_count: 50 },
          { name_fa: 'روابط خانوادگی',        name_en: 'Family relationships',   word_count: 48 },
          { name_fa: 'نوزاد و کودک',           name_en: 'Babies & kids',          word_count: 48 },
          { name_fa: 'مراسم خانوادگی',        name_en: 'Family celebrations',    word_count: 45 },
          { name_fa: 'مهمان و میهمانی',       name_en: 'Guests & parties',       word_count: 45 },
        ]},

      { slug: 'exercise', name_fa: 'ورزش و تمرین', name_en: 'Sports & exercise',
        icon: '🏃', tint: { bg: '#F1F8E9', fg: '#558B2F' }, word_count: 300,
        lessons: [
          { name_fa: 'ورزش‌های توپی',          name_en: 'Ball sports',            word_count: 50 },
          { name_fa: 'دو و میدانی',            name_en: 'Track & field',          word_count: 50 },
          { name_fa: 'ورزش‌های آبی',           name_en: 'Water sports',           word_count: 50 },
          { name_fa: 'بدنسازی و فیتنس',       name_en: 'Bodybuilding & fitness', word_count: 50 },
          { name_fa: 'یوگا و مدیتیشن',         name_en: 'Yoga & meditation',      word_count: 50 },
          { name_fa: 'تجهیزات ورزشی',         name_en: 'Sports equipment',       word_count: 50 },
        ]},

      { slug: 'travel', name_fa: 'سفر و گردشگری', name_en: 'Travel & tourism',
        icon: '✈️', tint: { bg: '#E3F2FD', fg: '#1565C0' }, word_count: 420,
        lessons: [
          { name_fa: 'برنامه‌ریزی سفر',       name_en: 'Trip planning',          word_count: 47 },
          { name_fa: 'فرودگاه و پرواز',       name_en: 'Airport & flight',       word_count: 47 },
          { name_fa: 'در هتل',                   name_en: 'At the hotel',           word_count: 47 },
          { name_fa: 'رزرو و چک‌این',           name_en: 'Booking & check-in',     word_count: 47 },
          { name_fa: 'دیدنی‌ها و جاذبه‌ها',   name_en: 'Sights & attractions',   word_count: 47 },
          { name_fa: 'حمل‌ونقل عمومی',          name_en: 'Public transport',       word_count: 47 },
          { name_fa: 'گمرک و گذرنامه',         name_en: 'Customs & passport',     word_count: 47 },
          { name_fa: 'راهنما و مترجم',          name_en: 'Guides & translators',   word_count: 46 },
          { name_fa: 'سوغاتی و خرید سفر',     name_en: 'Souvenirs',              word_count: 45 },
        ]},

      { slug: 'fashion', name_fa: 'پوشاک و سبک', name_en: 'Fashion & style',
        icon: '👔', tint: { bg: '#FCE4EC', fg: '#C2185B' }, word_count: 290,
        lessons: [
          { name_fa: 'لباس روزمره',            name_en: 'Casual wear',            word_count: 49 },
          { name_fa: 'لباس رسمی',              name_en: 'Formal wear',            word_count: 48 },
          { name_fa: 'کفش و کیف',               name_en: 'Shoes & bags',           word_count: 48 },
          { name_fa: 'زیورآلات',                name_en: 'Jewelry & accessories',  word_count: 48 },
          { name_fa: 'رنگ‌ها و طرح‌ها',       name_en: 'Colors & patterns',      word_count: 48 },
          { name_fa: 'زیبایی و آرایش',         name_en: 'Beauty & makeup',        word_count: 49 },
        ]},

      { slug: 'transport', name_fa: 'حمل و نقل', name_en: 'Transportation',
        icon: '🚗', tint: { bg: '#E8EAF6', fg: '#283593' }, word_count: 240,
        lessons: [
          { name_fa: 'خودرو و رانندگی',        name_en: 'Cars & driving',         word_count: 48 },
          { name_fa: 'مترو و اتوبوس',          name_en: 'Metro & bus',            word_count: 48 },
          { name_fa: 'دوچرخه و موتورسیکلت',   name_en: 'Bike & motorcycle',      word_count: 48 },
          { name_fa: 'تصادف و جریمه',          name_en: 'Accidents & tickets',    word_count: 48 },
          { name_fa: 'مسیر و نقشه',            name_en: 'Routes & maps',          word_count: 48 },
        ]},
    ]
  },

  // ────────────────────────────────────────────────────────────────────────
  //  Section 5 · واژگان حرفه‌ای (Professional)
  //  Academic, work, and specialist vocabulary. Picks up the biggest
  //  openjam sub-categories (science, qualities, abstract) and re-slices
  //  them into intent-named lessons.
  // ────────────────────────────────────────────────────────────────────────
  professional: {
    name_fa: 'واژگان حرفه‌ای',
    name_en: 'Professional',
    intro_fa: 'لغات تخصصی برای کار و تحصیل',
    intro_en: 'Specialist vocabulary for work and study',
    categories: [

      { slug: 'science', name_fa: 'علم و پژوهش', name_en: 'Science & research',
        icon: '🔬', tint: { bg: '#E0F7FA', fg: '#00838F' }, word_count: 1000,
        lessons: [
          { name_fa: 'مفاهیم علمی پایه',      name_en: 'Basic science concepts', word_count: 50 },
          { name_fa: 'شیمی عمومی',             name_en: 'General chemistry',      word_count: 50 },
          { name_fa: 'شیمی آلی',               name_en: 'Organic chemistry',      word_count: 50 },
          { name_fa: 'فیزیک کلاسیک',          name_en: 'Classical physics',      word_count: 50 },
          { name_fa: 'فیزیک نوین',             name_en: 'Modern physics',         word_count: 50 },
          { name_fa: 'زیست‌شناسی سلولی',     name_en: 'Cell biology',           word_count: 50 },
          { name_fa: 'ژنتیک',                   name_en: 'Genetics',               word_count: 50 },
          { name_fa: 'ریاضی پایه',             name_en: 'Basic mathematics',      word_count: 50 },
          { name_fa: 'هندسه',                   name_en: 'Geometry',               word_count: 50 },
          { name_fa: 'آمار و احتمال',          name_en: 'Statistics & probability', word_count: 50 },
          { name_fa: 'زمین‌شناسی',             name_en: 'Geology',                word_count: 50 },
          { name_fa: 'نجوم و کیهان',           name_en: 'Astronomy & cosmos',     word_count: 50 },
          { name_fa: 'آزمایشگاه و ابزار',     name_en: 'Lab & equipment',        word_count: 50 },
          { name_fa: 'روش تحقیق',              name_en: 'Research methods',       word_count: 50 },
          { name_fa: 'مقاله و کنفرانس',       name_en: 'Papers & conferences',   word_count: 50 },
          { name_fa: 'تئوری‌ها و قوانین',     name_en: 'Theories & laws',        word_count: 50 },
          { name_fa: 'واحدها و اندازه‌گیری',  name_en: 'Units & measurement',    word_count: 50 },
          { name_fa: 'میکروبیولوژی',          name_en: 'Microbiology',           word_count: 50 },
          { name_fa: 'بیوشیمی',                 name_en: 'Biochemistry',           word_count: 50 },
          { name_fa: 'نوآوری علمی',            name_en: 'Scientific innovation',  word_count: 50 },
        ]},

      { slug: 'technology', name_fa: 'فناوری و کامپیوتر', name_en: 'Technology',
        icon: '💻', tint: { bg: '#E3F2FD', fg: '#1565C0' }, word_count: 480,
        lessons: [
          { name_fa: 'سخت‌افزار',               name_en: 'Hardware',               word_count: 48 },
          { name_fa: 'نرم‌افزار',               name_en: 'Software',               word_count: 48 },
          { name_fa: 'اینترنت و وب',            name_en: 'Internet & web',         word_count: 48 },
          { name_fa: 'شبکه و سرور',             name_en: 'Networks & servers',     word_count: 48 },
          { name_fa: 'برنامه‌نویسی',           name_en: 'Programming',            word_count: 48 },
          { name_fa: 'امنیت سایبری',           name_en: 'Cybersecurity',          word_count: 48 },
          { name_fa: 'هوش مصنوعی',              name_en: 'Artificial intelligence', word_count: 48 },
          { name_fa: 'موبایل و گجت',           name_en: 'Mobile & gadgets',       word_count: 48 },
          { name_fa: 'رسانه‌های دیجیتال',     name_en: 'Digital media',          word_count: 48 },
          { name_fa: 'فناوری‌های نوظهور',     name_en: 'Emerging tech',          word_count: 48 },
        ]},

      { slug: 'medicine', name_fa: 'پزشکی و سلامت', name_en: 'Medicine',
        icon: '⚕️', tint: { bg: '#FCE4E4', fg: '#C62828' }, word_count: 1100,
        lessons: [
          { name_fa: 'آناتومی پایه',           name_en: 'Basic anatomy',          word_count: 50 },
          { name_fa: 'دستگاه گردش خون',       name_en: 'Circulatory system',     word_count: 50 },
          { name_fa: 'دستگاه گوارش',           name_en: 'Digestive system',       word_count: 50 },
          { name_fa: 'دستگاه تنفس',            name_en: 'Respiratory system',     word_count: 50 },
          { name_fa: 'سیستم عصبی',             name_en: 'Nervous system',         word_count: 50 },
          { name_fa: 'سیستم ایمنی',            name_en: 'Immune system',          word_count: 50 },
          { name_fa: 'بیماری‌های شایع',       name_en: 'Common illnesses',       word_count: 50 },
          { name_fa: 'بیماری‌های جدی',        name_en: 'Serious diseases',       word_count: 50 },
          { name_fa: 'علائم بیماری',           name_en: 'Symptoms',               word_count: 50 },
          { name_fa: 'تشخیص پزشکی',            name_en: 'Medical diagnosis',      word_count: 50 },
          { name_fa: 'دارو و درمان',           name_en: 'Drugs & treatment',      word_count: 50 },
          { name_fa: 'جراحی',                   name_en: 'Surgery',                word_count: 50 },
          { name_fa: 'بارداری و زایمان',       name_en: 'Pregnancy & birth',      word_count: 50 },
          { name_fa: 'دندانپزشکی',             name_en: 'Dentistry',              word_count: 50 },
          { name_fa: 'چشم‌پزشکی',              name_en: 'Ophthalmology',          word_count: 50 },
          { name_fa: 'پوست و دما',             name_en: 'Skin & temperature',     word_count: 50 },
          { name_fa: 'روان‌پزشکی',             name_en: 'Psychiatry',             word_count: 50 },
          { name_fa: 'اورژانس',                 name_en: 'Emergency care',         word_count: 50 },
          { name_fa: 'تجهیزات پزشکی',         name_en: 'Medical equipment',      word_count: 50 },
          { name_fa: 'بیمارستان و درمانگاه',  name_en: 'Hospital & clinic',      word_count: 50 },
          { name_fa: 'بهداشت عمومی',           name_en: 'Public health',          word_count: 50 },
          { name_fa: 'تغذیه‌ی درمانی',         name_en: 'Therapeutic nutrition',  word_count: 50 },
        ]},

      { slug: 'business', name_fa: 'کسب‌وکار و مالی', name_en: 'Business & finance',
        icon: '💼', tint: { bg: '#E8EAF6', fg: '#283593' }, word_count: 1180,
        lessons: [
          { name_fa: 'مدیریت کسب‌وکار',       name_en: 'Business management',    word_count: 50 },
          { name_fa: 'بازاریابی',              name_en: 'Marketing',              word_count: 50 },
          { name_fa: 'فروش',                     name_en: 'Sales',                  word_count: 50 },
          { name_fa: 'حسابداری',                name_en: 'Accounting',             word_count: 50 },
          { name_fa: 'مالیات',                  name_en: 'Taxation',               word_count: 50 },
          { name_fa: 'بانکداری',                name_en: 'Banking',                word_count: 50 },
          { name_fa: 'سرمایه‌گذاری',          name_en: 'Investing',              word_count: 50 },
          { name_fa: 'بورس و سهام',             name_en: 'Stock market',           word_count: 50 },
          { name_fa: 'اقتصاد کلان',            name_en: 'Macroeconomics',         word_count: 50 },
          { name_fa: 'استارت‌آپ و کارآفرینی', name_en: 'Startups & entrepreneurship', word_count: 50 },
          { name_fa: 'منابع انسانی',           name_en: 'Human resources',        word_count: 50 },
          { name_fa: 'بازار کار',               name_en: 'Labor market',           word_count: 50 },
          { name_fa: 'مذاکره',                  name_en: 'Negotiation',            word_count: 50 },
          { name_fa: 'قراردادها',               name_en: 'Contracts',              word_count: 50 },
          { name_fa: 'تجارت بین‌المللی',      name_en: 'International trade',    word_count: 50 },
          { name_fa: 'بیمه',                    name_en: 'Insurance',              word_count: 50 },
          { name_fa: 'وام و اعتبار',            name_en: 'Loans & credit',         word_count: 50 },
          { name_fa: 'رمزارز',                  name_en: 'Cryptocurrency',         word_count: 50 },
          { name_fa: 'بودجه و پیش‌بینی',      name_en: 'Budget & forecasting',   word_count: 50 },
          { name_fa: 'گزارش مالی',              name_en: 'Financial reports',      word_count: 50 },
          { name_fa: 'استراتژی',                name_en: 'Strategy',               word_count: 50 },
          { name_fa: 'مدیریت پروژه',           name_en: 'Project management',     word_count: 50 },
          { name_fa: 'فناوری مالی',            name_en: 'Fintech',                word_count: 50 },
          { name_fa: 'اخلاق کاری',              name_en: 'Work ethics',            word_count: 30 },
        ]},

      { slug: 'law', name_fa: 'حقوق و قانون', name_en: 'Law',
        icon: '⚖️', tint: { bg: '#F3E5F5', fg: '#6A1B9A' }, word_count: 380,
        lessons: [
          { name_fa: 'قانون اساسی',            name_en: 'Constitutional law',     word_count: 48 },
          { name_fa: 'حقوق مدنی',              name_en: 'Civil law',              word_count: 48 },
          { name_fa: 'حقوق کیفری',             name_en: 'Criminal law',           word_count: 48 },
          { name_fa: 'حقوق خانواده',           name_en: 'Family law',             word_count: 48 },
          { name_fa: 'حقوق تجارت',             name_en: 'Commercial law',         word_count: 48 },
          { name_fa: 'دادگاه و وکیل',          name_en: 'Court & attorney',       word_count: 48 },
          { name_fa: 'قراردادها',               name_en: 'Contracts',              word_count: 46 },
          { name_fa: 'مالکیت فکری',            name_en: 'Intellectual property',  word_count: 46 },
        ]},

      { slug: 'higher-ed', name_fa: 'آموزش عالی', name_en: 'Higher education',
        icon: '🎓', tint: { bg: '#E0F2F1', fg: '#00695C' }, word_count: 400,
        lessons: [
          { name_fa: 'دانشگاه و کالج',         name_en: 'University & college',   word_count: 50 },
          { name_fa: 'رشته‌ها و دروس',         name_en: 'Majors & courses',       word_count: 50 },
          { name_fa: 'استاد و دانشجو',         name_en: 'Faculty & students',     word_count: 50 },
          { name_fa: 'کلاس و سخنرانی',         name_en: 'Class & lecture',        word_count: 50 },
          { name_fa: 'تکلیف و امتحان',         name_en: 'Assignments & exams',    word_count: 50 },
          { name_fa: 'پایان‌نامه',              name_en: 'Thesis',                 word_count: 50 },
          { name_fa: 'بورسیه و فاند',          name_en: 'Scholarships & funding', word_count: 50 },
          { name_fa: 'مدرک و فارغ‌التحصیلی', name_en: 'Degrees & graduation',   word_count: 50 },
        ]},

      { slug: 'arts', name_fa: 'ادبیات و هنر', name_en: 'Arts & literature',
        icon: '🎨', tint: { bg: '#FFECB3', fg: '#B27A12' }, word_count: 600,
        lessons: [
          { name_fa: 'شعر و نظم',               name_en: 'Poetry',                 word_count: 50 },
          { name_fa: 'نثر و رمان',              name_en: 'Prose & novels',         word_count: 50 },
          { name_fa: 'نمایش‌نامه',              name_en: 'Plays',                  word_count: 50 },
          { name_fa: 'نقد ادبی',                name_en: 'Literary criticism',     word_count: 50 },
          { name_fa: 'موسیقی',                  name_en: 'Music',                  word_count: 50 },
          { name_fa: 'نقاشی',                   name_en: 'Painting',               word_count: 50 },
          { name_fa: 'مجسمه‌سازی',              name_en: 'Sculpture',              word_count: 50 },
          { name_fa: 'سینما و فیلم',           name_en: 'Cinema & film',          word_count: 50 },
          { name_fa: 'تئاتر',                   name_en: 'Theater',                word_count: 50 },
          { name_fa: 'عکاسی',                   name_en: 'Photography',            word_count: 50 },
          { name_fa: 'معماری',                  name_en: 'Architecture',           word_count: 50 },
          { name_fa: 'تاریخ هنر',               name_en: 'Art history',            word_count: 50 },
        ]},
    ]
  },

};


// ─────────────────────────────────────────────────────────────────────────────
//  OPENJAM_LESSON_NAMES — hand-crafted lesson titles for openjam
//  sub-categories. When category-words.html splits an openjam sub-cat
//  into 50-word chunks, it checks here FIRST; if a names array exists,
//  the lesson uses that name instead of "<name> ۱، <name> ۲…".
//
//  Coverage as of 2026-05-29: every openjam sub-category with > 5
//  lessons has a hand-crafted name array, sized to its chunk count
//  exactly. That includes the big ones the product owner specifically
//  called out ("احساسات ۱، احساسات ۲… این چه مسخره‌بازیه"): emotion,
//  quality, abstract, action — all named theme-by-theme.
//
//  ⚠️ CRITICAL Flutter contract (LOCKED 2026-05-29):
//
//  The lesson NAME is a PROMISE about what's in the lesson. Flutter
//  MUST honour that promise by clustering the parent sub-cat's words
//  semantically and aligning each cluster to its named lesson —
//  i.e., the 50 words shown under "ابزار آشپزخانه" must ACTUALLY be
//  kitchen tools, not the next 50 words sorted by rank.
//
//  Implementation guidance:
//    1. Run an embedding model (e.g. sentence-transformers) over all
//       words in the sub-category. Cluster into N groups where
//       N = ceil(word_count / 50). k-means or HDBSCAN both work.
//    2. For each cluster, compute the centroid and find the lesson
//       NAME in OPENJAM_LESSON_NAMES whose meaning best matches the
//       centroid (cosine similarity against the name's embedding).
//    3. Bind cluster → named lesson. Persist the binding so
//       lesson-words.html?sub=X&chunk=N returns the cluster's words.
//    4. If a cluster has < 50 words, OK — last lesson can be smaller.
//       If clusters are >50, split the cluster, keep the same name
//       with a part number ("ابزار آشپزخانه ۲").
//
//  Product owner: "اون لغاتی رو که توی اون درس می‌ذاری حتماً
//  مرتبط با اون درس باشه". This rule is non-negotiable.
// ─────────────────────────────────────────────────────────────────────────────
export const OPENJAM_LESSON_NAMES = {

  // ── food-drink ───────────────────────────────────────────────
  'food': {
    fa: ['اصول آشپزی', 'صبحانه', 'ناهار و شام', 'دسر و شیرینی', 'سبزیجات و سالاد',
         'گوشت و مرغ', 'دریایی', 'پنیر و لبنیات', 'ادویه و چاشنی', 'نان و غلات',
         'میوه‌ها', 'فست‌فود'],
    en: ['Cooking basics', 'Breakfast', 'Lunch & dinner', 'Desserts & sweets',
         'Vegetables & salads', 'Meat & poultry', 'Seafood', 'Cheese & dairy',
         'Spices & seasoning', 'Bread & grains', 'Fruits', 'Fast food'],
  },
  'drink': {
    fa: ['نوشیدنی‌های گرم', 'نوشیدنی‌های سرد', 'نوشیدنی‌های الکلی'],
    en: ['Hot drinks', 'Cold drinks', 'Alcoholic drinks'],
  },

  // ── people-family ────────────────────────────────────────────
  'family': {
    fa: ['اعضای نزدیک خانواده', 'بستگان دور', 'نقش‌های خانوادگی', 'مراسم خانوادگی'],
    en: ['Close family members', 'Distant relatives', 'Family roles', 'Family events'],
  },
  'person': {
    fa: ['اسامی شخصی', 'اعضای نزدیک خانواده', 'پدربزرگ و مادربزرگ', 'خواهر و برادر',
         'عمو و عمه و خاله و دایی', 'والدین', 'فرزندان', 'همسر و زوجین',
         'دوستان', 'آشنایان', 'همسایه‌ها', 'همکاران', 'رئیس و کارمند',
         'استاد و دانشجو', 'معلم و شاگرد', 'پزشک و بیمار', 'وکیل و موکل',
         'مردم و توده', 'زن و مرد', 'کودک و نوزاد', 'نوجوان', 'جوان',
         'میانسال', 'سالخورده', 'شخصیت‌های مشهور', 'رهبران', 'هنرمندان',
         'ورزشکاران', 'نویسندگان', 'دانشمندان', 'فیلسوفان', 'سیاستمداران',
         'کارآفرینان', 'مدیران', 'شهروندان', 'مهاجران', 'گردشگران',
         'مسافران', 'مهمانان', 'میزبانان', 'غریبه‌ها', 'آشنایان دور',
         'شریک', 'رقیب', 'دشمن', 'دوست صمیمی', 'نامزد', 'عاشق',
         'متخصص', 'آماتور', 'تازه‌وارد'],
    en: ['Personal names', 'Close family members', 'Grandparents', 'Siblings',
         'Uncles & aunts', 'Parents', 'Children', 'Spouse & couples',
         'Friends', 'Acquaintances', 'Neighbors', 'Colleagues', 'Boss & employee',
         'Professor & student', 'Teacher & pupil', 'Doctor & patient', 'Lawyer & client',
         'People & masses', 'Women & men', 'Children & babies', 'Teenagers', 'Youth',
         'Middle-aged', 'Elderly', 'Famous figures', 'Leaders', 'Artists',
         'Athletes', 'Writers', 'Scientists', 'Philosophers', 'Politicians',
         'Entrepreneurs', 'Managers', 'Citizens', 'Immigrants', 'Tourists',
         'Travelers', 'Guests', 'Hosts', 'Strangers', 'Distant acquaintances',
         'Partners', 'Rivals', 'Enemies', 'Close friends', 'Fiancés', 'Lovers',
         'Experts', 'Amateurs', 'Newcomers'],
  },
  'profession': {
    fa: ['شغل‌های پزشکی', 'شغل‌های آموزشی', 'شغل‌های فنی', 'شغل‌های مهندسی',
         'شغل‌های هنری', 'شغل‌های اداری', 'شغل‌های خدماتی', 'شغل‌های فروش',
         'شغل‌های امنیتی', 'شغل‌های نظامی', 'شغل‌های دولتی', 'شغل‌های آزاد',
         'شغل‌های روحانی', 'شغل‌های ورزشی', 'شغل‌های رسانه‌ای',
         'شغل‌های کشاورزی', 'شغل‌های صنعتی'],
    en: ['Medical jobs', 'Education jobs', 'Technical jobs', 'Engineering jobs',
         'Art jobs', 'Office jobs', 'Service jobs', 'Sales jobs',
         'Security jobs', 'Military jobs', 'Government jobs', 'Freelance jobs',
         'Clergy jobs', 'Sports jobs', 'Media jobs',
         'Agriculture jobs', 'Industry jobs'],
  },
  'relationship': {
    fa: ['دوستی', 'رابطه عاطفی', 'ازدواج', 'خویشاوندی',
         'روابط کاری', 'روابط همسایگی', 'روابط رسمی'],
    en: ['Friendship', 'Romantic relationships', 'Marriage', 'Kinship',
         'Work relationships', 'Neighborly relations', 'Formal relations'],
  },

  // ── body-health ──────────────────────────────────────────────
  'body': {
    fa: ['سر و صورت', 'دست و بازو', 'پا و ران', 'تنه و کمر', 'استخوان و مفصل',
         'ماهیچه و عصب', 'اندام داخلی', 'پوست و مو', 'حواس پنج‌گانه', 'دستگاه گردش خون',
         'دستگاه گوارش', 'دستگاه تنفس', 'دستگاه عصبی', 'سیستم ایمنی', 'حرکات بدن'],
    en: ['Head & face', 'Hands & arms', 'Legs & thighs', 'Torso & back', 'Bones & joints',
         'Muscles & nerves', 'Internal organs', 'Skin & hair', 'Five senses', 'Circulatory',
         'Digestive', 'Respiratory', 'Nervous', 'Immune', 'Body movements'],
  },
  'health': {
    fa: ['بیماری‌های شایع', 'سرماخوردگی و آنفلوآنزا', 'سردرد و سرگیجه',
         'مشکلات گوارشی', 'بیماری‌های قلبی', 'دیابت', 'فشار خون', 'آلرژی',
         'سرطان', 'عفونت', 'التهاب', 'درد و ناراحتی', 'تشخیص پزشکی',
         'دارو و قرص', 'تزریق و واکسن', 'جراحی', 'بستری در بیمارستان',
         'اورژانس', 'تجهیزات پزشکی', 'آزمایش', 'تصویربرداری پزشکی',
         'کلینیک و درمانگاه', 'نسخه و دارو', 'بهداشت فردی', 'تغذیه و رژیم',
         'ورزش درمانی'],
    en: ['Common illnesses', 'Cold & flu', 'Headache & dizziness',
         'Digestive issues', 'Heart diseases', 'Diabetes', 'Blood pressure', 'Allergies',
         'Cancer', 'Infection', 'Inflammation', 'Pain & discomfort', 'Medical diagnosis',
         'Medication & pills', 'Injections & vaccines', 'Surgery', 'Hospitalization',
         'Emergency care', 'Medical equipment', 'Lab tests', 'Medical imaging',
         'Clinic & care center', 'Prescription & drugs', 'Personal hygiene', 'Nutrition & diet',
         'Therapeutic exercise'],
  },

  // ── nature-animals ───────────────────────────────────────────
  'nature': {
    fa: ['آب‌وهوای روزانه', 'فصل‌ها', 'باد و طوفان', 'بارش و رطوبت', 'دما و گرما',
         'کوه و دشت', 'دریا و رود', 'جنگل', 'بیابان', 'قطب و یخ',
         'ابر و آسمان', 'خاک و سنگ', 'آتشفشان و زلزله', 'بلایای طبیعی', 'محیط زیست',
         'انرژی پاک', 'پدیده‌های طبیعی', 'اقیانوس'],
    en: ['Daily weather', 'Seasons', 'Wind & storm', 'Rain & humidity', 'Temperature',
         'Mountains & plains', 'Sea & rivers', 'Forest', 'Desert', 'Poles & ice',
         'Clouds & sky', 'Soil & rocks', 'Volcano & quake', 'Natural disasters', 'Environment',
         'Clean energy', 'Natural phenomena', 'Ocean'],
  },
  'animal': {
    fa: ['حیوانات خانگی', 'حیوانات اهلی', 'حیوانات وحشی', 'پرندگان',
         'ماهی‌ها و آبزیان', 'حشرات', 'خزندگان', 'پستانداران',
         'حیوانات جنگل', 'حیوانات دریایی', 'حیوانات نادر و در حال انقراض'],
    en: ['Pets', 'Farm animals', 'Wild animals', 'Birds',
         'Fish & aquatic', 'Insects', 'Reptiles', 'Mammals',
         'Forest animals', 'Sea creatures', 'Rare & endangered animals'],
  },
  'plant': {
    fa: ['گل‌ها', 'درخت‌ها', 'سبزیجات', 'میوه‌های درختی', 'گیاهان دارویی',
         'علف و بوته', 'گیاهان زینتی', 'کاکتوس و ساکولنت', 'گیاهان آبزی'],
    en: ['Flowers', 'Trees', 'Vegetables', 'Tree fruits', 'Medicinal plants',
         'Grass & shrubs', 'Ornamental plants', 'Cactus & succulents', 'Aquatic plants'],
  },

  // ── home-objects ─────────────────────────────────────────────
  'home': {
    fa: ['اتاق نشیمن', 'اتاق خواب', 'آشپزخانه', 'حمام', 'سرویس بهداشتی',
         'حیاط و باغچه', 'گاراژ و انباری', 'لوازم اتاق', 'مبلمان',
         'دکوراسیون', 'لوازم برقی منزل', 'لوازم منزل'],
    en: ['Living room', 'Bedroom', 'Kitchen', 'Bathroom', 'Restroom',
         'Yard & garden', 'Garage & storage', 'Room items', 'Furniture',
         'Decoration', 'Home appliances', 'Household goods'],
  },
  'clothing': {
    fa: ['لباس روزمره', 'لباس رسمی', 'لباس زنانه', 'لباس مردانه',
         'لباس کودک', 'کفش و کیف', 'زیورآلات'],
    en: ['Casual wear', 'Formal wear', 'Women\'s clothing', 'Men\'s clothing',
         'Children\'s clothing', 'Shoes & bags', 'Jewelry'],
  },
  'tool': {
    fa: ['ابزار آشپزخانه', 'ابزار باغبانی', 'ابزار تعمیر', 'ابزار نقاشی',
         'ابزار نجاری', 'ابزار برقی', 'ابزار ماشینی', 'ابزار اندازه‌گیری',
         'ابزار بهداشتی', 'ابزار اداری', 'ابزار صنعتی', 'ابزار پزشکی',
         'ابزار ساختمانی', 'ابزار خیاطی', 'ابزار آرایش'],
    en: ['Kitchen tools', 'Garden tools', 'Repair tools', 'Painting tools',
         'Woodworking tools', 'Power tools', 'Machine tools', 'Measuring tools',
         'Hygiene tools', 'Office tools', 'Industrial tools', 'Medical tools',
         'Construction tools', 'Sewing tools', 'Cosmetic tools'],
  },

  // ── places-travel ────────────────────────────────────────────
  'place': {
    fa: ['خانه و آپارتمان', 'مدرسه', 'دانشگاه', 'بیمارستان', 'مغازه و فروشگاه',
         'رستوران', 'کافه', 'هتل', 'فرودگاه', 'ایستگاه قطار',
         'ایستگاه اتوبوس', 'بازار', 'مرکز خرید', 'پارک', 'زمین بازی',
         'باشگاه ورزشی', 'استخر', 'ساحل', 'کوه', 'جنگل',
         'مزرعه', 'کارخانه', 'اداره', 'بانک', 'اداره پست',
         'کلیسا و مسجد', 'موزه', 'تئاتر و سینما', 'کتابخانه', 'باغ وحش'],
    en: ['Home & apartment', 'School', 'University', 'Hospital', 'Shop & store',
         'Restaurant', 'Cafe', 'Hotel', 'Airport', 'Train station',
         'Bus station', 'Bazaar', 'Mall', 'Park', 'Playground',
         'Gym', 'Pool', 'Beach', 'Mountain', 'Forest',
         'Farm', 'Factory', 'Office', 'Bank', 'Post office',
         'Church & mosque', 'Museum', 'Theater & cinema', 'Library', 'Zoo'],
  },
  'country': {
    fa: ['کشورهای اروپایی', 'کشورهای آسیایی', 'کشورهای آفریقایی',
         'کشورهای امریکای شمالی', 'کشورهای امریکای جنوبی',
         'خاورمیانه', 'کشورهای عربی', 'اتحادیه اروپا', 'کشورهای انگلیسی‌زبان',
         'کشورهای فرانسوی‌زبان', 'شرق آسیا', 'جنوب شرقی آسیا', 'اقیانوسیه'],
    en: ['European countries', 'Asian countries', 'African countries',
         'North American countries', 'South American countries',
         'Middle East', 'Arab countries', 'European Union', 'English-speaking countries',
         'French-speaking countries', 'East Asia', 'Southeast Asia', 'Oceania'],
  },
  'city': {
    fa: ['شهرهای بزرگ امریکا', 'شهرهای اروپا', 'پایتخت‌ها', 'شهرهای آسیا',
         'شهرهای تاریخی', 'شهرهای ساحلی', 'شهرهای کوهستانی', 'شهرهای صنعتی'],
    en: ['Major US cities', 'European cities', 'Capitals', 'Asian cities',
         'Historic cities', 'Coastal cities', 'Mountain cities', 'Industrial cities'],
  },
  'travel': {
    fa: ['برنامه‌ریزی سفر', 'حمل و نقل سفر', 'اقامتگاه', 'جاذبه‌های گردشگری',
         'مدارک سفر', 'گردشگری ساحلی', 'گردشگری کوهستانی', 'گردشگری شهری'],
    en: ['Trip planning', 'Travel transport', 'Accommodation', 'Tourist attractions',
         'Travel documents', 'Beach tourism', 'Mountain tourism', 'City tourism'],
  },
  'vehicle': {
    fa: ['خودرو سواری', 'کامیون و وانت', 'اتوبوس و وسیله نقلیه عمومی',
         'موتورسیکلت و دوچرخه', 'قطار', 'هواپیما', 'کشتی'],
    en: ['Passenger cars', 'Trucks & vans', 'Buses & public transport',
         'Motorcycles & bikes', 'Trains', 'Airplanes', 'Ships'],
  },

  // ── work-money ───────────────────────────────────────────────
  'work': {
    fa: ['مدیریت', 'بازاریابی', 'فروش', 'حسابداری', 'منابع انسانی',
         'توسعه محصول', 'خدمات مشتری', 'کسب‌وکار آنلاین', 'تجارت',
         'صادرات و واردات', 'صنعت', 'تولید', 'کشاورزی', 'خدمات',
         'فناوری اطلاعات', 'مهندسی', 'هنر و طراحی', 'ساخت و ساز',
         'حمل و نقل', 'لجستیک', 'آموزش', 'سلامت', 'رسانه',
         'سرگرمی', 'ورزش', 'خدمات اجتماعی'],
    en: ['Management', 'Marketing', 'Sales', 'Accounting', 'HR',
         'Product development', 'Customer service', 'Online business', 'Commerce',
         'Import & export', 'Industry', 'Manufacturing', 'Agriculture', 'Services',
         'IT', 'Engineering', 'Art & design', 'Construction',
         'Transportation', 'Logistics', 'Education', 'Healthcare', 'Media',
         'Entertainment', 'Sports', 'Social services'],
  },
  'money': {
    fa: ['پول نقد', 'کارت اعتباری', 'تراکنش بانکی', 'سپرده و حساب',
         'وام و قرض', 'سود و بهره', 'ارز خارجی', 'سرمایه‌گذاری',
         'مالیات', 'بیمه', 'صرفه‌جویی', 'خیریه'],
    en: ['Cash', 'Credit cards', 'Bank transactions', 'Deposits & accounts',
         'Loans & debt', 'Interest & profit', 'Foreign exchange', 'Investing',
         'Taxes', 'Insurance', 'Savings', 'Charity'],
  },

  // ── society-culture ──────────────────────────────────────────
  'society': {
    fa: ['حکومت و دولت', 'سیاست', 'انتخابات', 'مجلس و پارلمان', 'وزارت',
         'شهرداری', 'قانون و قاعده', 'عدالت اجتماعی', 'حقوق بشر',
         'آزادی و دموکراسی', 'حزب سیاسی', 'اعتراض و تظاهرات', 'اخبار و سیاست',
         'روابط بین‌الملل', 'سفارت', 'صلح و جنگ', 'مذاکره سیاسی',
         'توافق‌نامه', 'تحریم', 'مهاجرت', 'پناهندگی', 'جامعه و گروه',
         'طبقه اجتماعی', 'خانواده در جامعه', 'ازدواج و طلاق', 'حقوق زنان',
         'کودکان و نوجوانان', 'سالمندان', 'کارگران', 'کارمندان دولت',
         'فعالان مدنی', 'سازمان‌های غیردولتی', 'عدالت کیفری'],
    en: ['Government & state', 'Politics', 'Elections', 'Parliament', 'Ministry',
         'Municipality', 'Law & rules', 'Social justice', 'Human rights',
         'Freedom & democracy', 'Political parties', 'Protests', 'News & politics',
         'International relations', 'Embassy', 'Peace & war', 'Political negotiation',
         'Treaties', 'Sanctions', 'Immigration', 'Asylum', 'Society & groups',
         'Social class', 'Family in society', 'Marriage & divorce', 'Women\'s rights',
         'Children & youth', 'Elderly', 'Workers', 'Civil servants',
         'Civic activists', 'NGOs', 'Criminal justice'],
  },
  'religion': {
    fa: ['باور دینی', 'عبادت', 'مراسم مذهبی', 'اعیاد دینی', 'کتاب‌های مقدس',
         'پیامبران', 'خدا و فرشتگان', 'اخلاق دینی', 'مساجد و کلیساها',
         'روحانیون', 'زیارت', 'اسلام', 'مسیحیت', 'یهودیت',
         'ادیان شرقی', 'معنویت'],
    en: ['Religious belief', 'Worship', 'Religious ceremonies', 'Religious holidays',
         'Sacred texts', 'Prophets', 'God & angels', 'Religious ethics',
         'Mosques & churches', 'Clergy', 'Pilgrimage', 'Islam', 'Christianity',
         'Judaism', 'Eastern religions', 'Spirituality'],
  },
  'media': {
    fa: ['روزنامه و مجله', 'تلویزیون', 'رادیو', 'اینترنت و وبسایت',
         'شبکه‌های اجتماعی', 'خبرگزاری', 'فیلم و سریال', 'تبلیغات'],
    en: ['Newspapers & magazines', 'Television', 'Radio', 'Internet & websites',
         'Social networks', 'News agencies', 'Films & series', 'Advertising'],
  },
  'arts': {
    fa: ['نقاشی', 'مجسمه‌سازی', 'عکاسی', 'خوشنویسی', 'طراحی گرافیک',
         'موسیقی کلاسیک', 'موسیقی مدرن', 'سازهای موسیقی', 'آوازخوانی',
         'رقص', 'تئاتر', 'اپرا', 'سینما', 'فیلم‌سازی', 'نویسندگی',
         'شعر', 'رمان', 'ادبیات کلاسیک', 'ادبیات معاصر', 'نقد ادبی',
         'هنرهای تزئینی', 'سرامیک و سفال', 'صنایع دستی', 'معماری', 'تاریخ هنر'],
    en: ['Painting', 'Sculpture', 'Photography', 'Calligraphy', 'Graphic design',
         'Classical music', 'Modern music', 'Musical instruments', 'Singing',
         'Dance', 'Theater', 'Opera', 'Cinema', 'Filmmaking', 'Writing',
         'Poetry', 'Novels', 'Classical literature', 'Contemporary literature', 'Literary criticism',
         'Decorative arts', 'Ceramics & pottery', 'Crafts', 'Architecture', 'Art history'],
  },

  // ── science-tech ─────────────────────────────────────────────
  'science': {
    fa: ['شیمی پایه', 'شیمی آلی', 'شیمی فیزیک', 'شیمی تحلیلی',
         'فیزیک کلاسیک', 'مکانیک', 'ترمودینامیک', 'الکترومغناطیس',
         'فیزیک کوانتوم', 'اپتیک', 'زیست‌شناسی سلولی', 'ژنتیک',
         'زیست‌شناسی تکاملی', 'اکولوژی', 'بوم‌شناسی', 'میکروبیولوژی',
         'ویروس‌شناسی', 'بیوشیمی', 'مهندسی ژنتیک', 'ریاضی پایه',
         'جبر', 'هندسه', 'حساب دیفرانسیل', 'آمار', 'احتمال',
         'زمین‌شناسی', 'اقیانوس‌شناسی', 'هواشناسی', 'نجوم', 'کیهان‌شناسی',
         'اخترفیزیک', 'علوم اعصاب', 'روان‌شناسی علمی', 'آزمایشگاه',
         'روش تحقیق', 'تحلیل داده', 'علم داده', 'هوش مصنوعی',
         'علوم محاسباتی', 'واحدها و اندازه‌گیری', 'نظریه و قانون',
         'کشف و نوآوری'],
    en: ['Basic chemistry', 'Organic chemistry', 'Physical chemistry', 'Analytical chemistry',
         'Classical physics', 'Mechanics', 'Thermodynamics', 'Electromagnetism',
         'Quantum physics', 'Optics', 'Cell biology', 'Genetics',
         'Evolutionary biology', 'Ecology', 'Ecosystems', 'Microbiology',
         'Virology', 'Biochemistry', 'Genetic engineering', 'Basic math',
         'Algebra', 'Geometry', 'Calculus', 'Statistics', 'Probability',
         'Geology', 'Oceanography', 'Meteorology', 'Astronomy', 'Cosmology',
         'Astrophysics', 'Neuroscience', 'Scientific psychology', 'Laboratory',
         'Research methods', 'Data analysis', 'Data science', 'AI',
         'Computational science', 'Units & measurement', 'Theories & laws',
         'Discovery & innovation'],
  },
  'technology': {
    fa: ['سخت‌افزار کامپیوتر', 'نرم‌افزار', 'اینترنت', 'شبکه',
         'امنیت سایبری', 'هوش مصنوعی', 'روبوتیک', 'واقعیت مجازی',
         'نانوتکنولوژی', 'بیوتکنولوژی', 'فناوری‌های نوظهور'],
    en: ['Computer hardware', 'Software', 'Internet', 'Networks',
         'Cybersecurity', 'AI', 'Robotics', 'Virtual reality',
         'Nanotechnology', 'Biotechnology', 'Emerging tech'],
  },

  // ── sport-action ─────────────────────────────────────────────
  'sport': {
    fa: ['فوتبال', 'بسکتبال', 'والیبال', 'تنیس',
         'شنا', 'دو و میدانی', 'ورزش‌های رزمی', 'ورزش‌های زمستانی'],
    en: ['Football', 'Basketball', 'Volleyball', 'Tennis',
         'Swimming', 'Track & field', 'Martial arts', 'Winter sports'],
  },
  'action': {
    fa: ['حرکت و جابجایی', 'راه رفتن و دویدن', 'پریدن و خیز برداشتن',
         'خوابیدن و استراحت', 'نشستن و ایستادن', 'خوردن و آشامیدن',
         'صحبت کردن و حرف زدن', 'گوش دادن', 'دیدن و نگاه کردن',
         'لمس کردن و گرفتن', 'حمل و جابجایی اشیا', 'باز کردن و بستن',
         'شکستن و خراب کردن', 'ساختن و درست کردن', 'تعمیر و درست کردن',
         'شستن و تمیز کردن', 'نوشتن و کشیدن', 'خواندن و مطالعه',
         'فکر کردن', 'به‌یاد آوردن و فراموش کردن', 'یاد گرفتن و آموختن',
         'آموزش دادن', 'تصمیم گرفتن', 'انتخاب کردن', 'خریدن و فروختن',
         'دادن و گرفتن', 'کمک کردن', 'جنگیدن و دفاع', 'حمله کردن',
         'فرار کردن', 'مخفی کردن', 'پیدا کردن و گم کردن',
         'شروع کردن و تمام کردن', 'ادامه دادن', 'تلاش و کوشش',
         'پیشرفت و موفقیت', 'شکست خوردن', 'آماده کردن', 'کنترل کردن',
         'هدایت کردن', 'پیروی و اطاعت', 'مبارزه و مقاومت',
         'بازی و سرگرمی', 'خندیدن و گریه کردن', 'آواز خواندن',
         'رقصیدن', 'ورزش کردن', 'شکار و صید', 'کشت و کار',
         'حمل و نقل و سفر', 'ملاقات و دیدار', 'مکالمه و گفتگو',
         'مذاکره', 'توافق و قول', 'مخالفت و اعتراض', 'ابراز احساس',
         'تشویق و ستایش', 'سرزنش و انتقاد', 'تشکر و عذرخواهی',
         'درخواست و خواهش', 'دستور و امر', 'اجازه دادن', 'منع کردن',
         'اعتراف و انکار', 'اعتماد و خیانت', 'وعده و قرار',
         'خوش‌آمدگویی و خداحافظی', 'تعجب و واکنش', 'ابراز نظر',
         'مشاوره و توصیه', 'اختراع و کشف', 'نوآوری', 'تولید و ساخت',
         'خرید و فروش', 'پرداخت', 'حساب و کتاب', 'اندازه‌گیری',
         'تحقیق و بررسی', 'آزمایش', 'تجربه', 'مشاهده', 'توضیح و تفسیر',
         'اثبات و رد', 'تعریف', 'نشان دادن', 'نمایش دادن',
         'اعلام و خبر', 'گزارش', 'ارسال و دریافت', 'ذخیره و آرشیو',
         'جستجو و یافتن', 'تغییر و تحول'],
    en: ['Movement', 'Walking & running', 'Jumping & leaping',
         'Sleeping & resting', 'Sitting & standing', 'Eating & drinking',
         'Speaking', 'Listening', 'Seeing & looking',
         'Touching & grabbing', 'Carrying objects', 'Opening & closing',
         'Breaking & destroying', 'Building & making', 'Repair & fixing',
         'Washing & cleaning', 'Writing & drawing', 'Reading & studying',
         'Thinking', 'Remembering & forgetting', 'Learning',
         'Teaching', 'Deciding', 'Choosing', 'Buying & selling',
         'Giving & receiving', 'Helping', 'Fighting & defending', 'Attacking',
         'Escaping', 'Hiding', 'Finding & losing',
         'Starting & finishing', 'Continuing', 'Effort & trying',
         'Progress & success', 'Failing', 'Preparing', 'Controlling',
         'Leading', 'Following & obeying', 'Resisting',
         'Playing & entertaining', 'Laughing & crying', 'Singing',
         'Dancing', 'Exercising', 'Hunting', 'Farming',
         'Transport & travel', 'Meeting', 'Conversation',
         'Negotiating', 'Agreeing & promising', 'Objecting', 'Expressing emotion',
         'Praising', 'Criticizing', 'Thanking & apologizing',
         'Requesting', 'Commanding', 'Permitting', 'Forbidding',
         'Confessing & denying', 'Trusting & betraying', 'Promising',
         'Greeting & saying goodbye', 'Reacting', 'Opining',
         'Advising', 'Inventing & discovering', 'Innovating', 'Producing',
         'Trading', 'Paying', 'Accounting', 'Measuring',
         'Researching', 'Experimenting', 'Experiencing', 'Observing', 'Explaining',
         'Proving & refuting', 'Defining', 'Showing', 'Displaying',
         'Announcing', 'Reporting', 'Sending & receiving', 'Archiving',
         'Searching', 'Changing'],
  },
  'event': {
    fa: ['جشن تولد', 'عروسی', 'کنفرانس', 'مسابقه ورزشی', 'کنسرت',
         'نمایشگاه', 'جشنواره', 'تعطیلات ملی', 'اعیاد مذهبی',
         'مراسم سوگ', 'گردهمایی خانوادگی', 'رویدادهای علمی'],
    en: ['Birthday party', 'Wedding', 'Conference', 'Sports match', 'Concert',
         'Exhibition', 'Festival', 'National holidays', 'Religious holidays',
         'Mourning ceremonies', 'Family gatherings', 'Scientific events'],
  },

  // ── feelings-qualities ───────────────────────────────────────
  'emotion': {
    fa: ['شادی و خوشحالی', 'غم و اندوه', 'خشم و عصبانیت', 'ترس و وحشت',
         'عشق و دلبستگی', 'تنفر و بیزاری', 'شگفتی و حیرت', 'اعتماد و اطمینان',
         'تردید و شک', 'آرامش روحی', 'هیجان و شور', 'اضطراب و نگرانی',
         'غرور و افتخار', 'شرم و خجالت', 'حسادت', 'تنهایی و انزوا',
         'امید و آرزو', 'ناامیدی و یأس', 'کنجکاوی و علاقه', 'نفرت و کینه',
         'توجه و دقت', 'خستگی و رخوت', 'شجاعت و جسارت', 'ترحم و دلسوزی',
         'قدردانی و سپاس', 'ابراز احساس', 'صفات شخصیتی', 'واکنش‌های هیجانی',
         'حالات روحی مثبت', 'حالات روحی منفی', 'حساسیت و واکنش',
         'تنش و فشار روانی', 'آرامش و سکون', 'تحول احساسی', 'سلامت روان',
         'کنترل احساس'],
    en: ['Joy & happiness', 'Sadness & grief', 'Anger', 'Fear & terror',
         'Love & affection', 'Hate & disgust', 'Surprise', 'Trust & confidence',
         'Doubt', 'Inner peace', 'Excitement', 'Anxiety & worry',
         'Pride', 'Shame & embarrassment', 'Jealousy', 'Loneliness',
         'Hope', 'Despair', 'Curiosity & interest', 'Hatred',
         'Attention', 'Fatigue', 'Courage', 'Compassion',
         'Gratitude', 'Expressing emotion', 'Personality traits', 'Emotional reactions',
         'Positive moods', 'Negative moods', 'Sensitivity',
         'Mental tension', 'Calm & stillness', 'Emotional change', 'Mental wellness',
         'Emotion control'],
  },
  'quality': {
    fa: ['اندازه - بزرگ و کوچک', 'اندازه - عرض و طول', 'اندازه - ارتفاع',
         'اندازه - عمق', 'شکل و فرم', 'رنگ‌های اصلی', 'رنگ‌های فرعی',
         'تن و سایه رنگ', 'بافت - سختی و نرمی', 'بافت - زبری و صافی',
         'وزن - سبک و سنگین', 'دما - گرم و سرد', 'نور و تاریکی',
         'صدا - بلند و آرام', 'صدا - زیر و بم', 'بو', 'طعم - شیرین و تلخ',
         'طعم - ترش و شور', 'سرعت - تند و کند', 'قدرت - قوی و ضعیف',
         'زیبایی و جذابیت', 'زشتی و ناخوشایندی', 'کیفیت بالا', 'کیفیت پایین',
         'تازگی', 'کهنگی', 'جوانی و پیری', 'تمیزی و کثیفی',
         'منظمی و نامنظمی', 'روشنی و وضوح', 'ابهام و گیجی', 'سختی و آسانی',
         'سادگی و پیچیدگی', 'عمومیت و خاصیت', 'اهمیت و بی‌اهمیتی',
         'ارزش و بهای کالا', 'کمیابی و فراوانی', 'سلامت و بیماری',
         'شدت و ملایمت', 'واقعیت و خیال', 'درستی و نادرستی', 'راستی و دروغ',
         'مفید و بی‌فایده', 'مناسب و نامناسب', 'شایسته و ناشایسته',
         'پاک و ناپاک', 'کامل و ناقص', 'مساوی و نابرابر', 'مشابه و متفاوت',
         'عادی و عجیب', 'معمولی و خاص', 'متوسط و حد', 'سن - جوان و مسن',
         'خوش‌آمد و ناخوش‌آمد', 'مهربان و سختگیر', 'صبور و عجول',
         'هوشمند و کودن', 'زرنگ و ساده‌لوح', 'شجاع و ترسو',
         'خشن و ملایم', 'صادق و فریبکار', 'وفادار و خائن',
         'سخاوتمند و خسیس', 'متواضع و مغرور', 'خوش‌خلق و بدخلق',
         'شوخ‌طبع و جدی', 'اجتماعی و گوشه‌گیر', 'مرتب و شلخته',
         'منظم و بی‌نظم', 'عاقل و دیوانه', 'مثبت و منفی',
         'قابل اعتماد و بی‌اعتماد', 'حساس و بی‌تفاوت', 'پرکار و تنبل',
         'خلاق و تقلیدی', 'مستقل و وابسته', 'منطقی و احساسی',
         'تجربی و نظری', 'شدت و خفت', 'زیاد و کم', 'اول و آخر',
         'بالا و پایین', 'درون و بیرون', 'جلو و عقب', 'زیر و رو',
         'نزدیک و دور', 'اصلی و فرعی', 'ابتدایی و پیشرفته', 'آغاز و پایان',
         'وقت‌شناس و دیرکار', 'سرگرم‌کننده و کسل‌کننده',
         'هیجان‌انگیز و ملال‌آور', 'ساکت و پرسروصدا', 'خشک و تر',
         'باز و بسته', 'روشن و خاموش', 'نوآور و سنتی', 'مدرن و قدیمی',
         'زنده و مرده', 'واقعی و مصنوعی', 'طبیعی و ساختگی', 'آماده و ناآماده'],
    en: ['Size - big & small', 'Size - width & length', 'Size - height',
         'Size - depth', 'Shape & form', 'Primary colors', 'Secondary colors',
         'Color tone & shade', 'Texture - hard & soft', 'Texture - rough & smooth',
         'Weight - light & heavy', 'Temperature - hot & cold', 'Light & dark',
         'Sound - loud & quiet', 'Sound - high & low', 'Smell', 'Taste - sweet & bitter',
         'Taste - sour & salty', 'Speed - fast & slow', 'Strength - strong & weak',
         'Beauty', 'Ugliness', 'High quality', 'Low quality',
         'Freshness', 'Staleness', 'Youth & old age', 'Clean & dirty',
         'Tidy & untidy', 'Brightness & clarity', 'Confusion', 'Hard & easy',
         'Simple & complex', 'General & specific', 'Important & unimportant',
         'Value & price', 'Rare & abundant', 'Healthy & sick',
         'Intense & mild', 'Real & imaginary', 'Right & wrong', 'Truth & lies',
         'Useful & useless', 'Suitable & unsuitable', 'Worthy & unworthy',
         'Pure & impure', 'Complete & incomplete', 'Equal & unequal', 'Same & different',
         'Normal & strange', 'Ordinary & special', 'Average & limit', 'Age - young & old',
         'Pleasant & unpleasant', 'Kind & harsh', 'Patient & impatient',
         'Smart & dumb', 'Clever & naive', 'Brave & cowardly',
         'Rough & gentle', 'Honest & deceitful', 'Loyal & traitorous',
         'Generous & stingy', 'Humble & proud', 'Cheerful & grumpy',
         'Humorous & serious', 'Sociable & reclusive', 'Neat & messy',
         'Orderly & disorderly', 'Sane & insane', 'Positive & negative',
         'Trustworthy & untrustworthy', 'Sensitive & indifferent', 'Hardworking & lazy',
         'Creative & imitative', 'Independent & dependent', 'Logical & emotional',
         'Empirical & theoretical', 'Intense & mild', 'Many & few', 'First & last',
         'Up & down', 'Inside & outside', 'Front & back', 'Top & bottom',
         'Near & far', 'Main & secondary', 'Basic & advanced', 'Beginning & end',
         'Punctual & late', 'Fun & boring',
         'Exciting & dull', 'Quiet & noisy', 'Dry & wet',
         'Open & closed', 'On & off', 'Innovative & traditional', 'Modern & old',
         'Alive & dead', 'Real & artificial', 'Natural & synthetic', 'Ready & unready'],
  },
  'abstract': {
    fa: ['زمان و دوران', 'مکان و فضا', 'کمیت و عدد', 'ترتیب و توالی',
         'علت و معلول', 'هدف و قصد', 'روش و راه', 'وسیله و ابزار',
         'منبع و سرچشمه', 'نتیجه و حاصل', 'حقیقت و واقعیت', 'کذب و دروغ',
         'خوب و بد', 'زیبا و زشت', 'اخلاق و رفتار', 'عدالت و انصاف',
         'قانون و قاعده', 'آزادی و اختیار', 'مسئولیت و وظیفه', 'حق و تکلیف',
         'ارزش و معنویت', 'باور و اعتقاد', 'دانش و علم', 'اطلاعات و داده',
         'فکر و اندیشه', 'ایده و طرح', 'تخیل و خلاقیت', 'حافظه و خاطره',
         'توجه و تمرکز', 'فهم و درک', 'منطق و استدلال', 'شک و تردید',
         'ایمان و یقین', 'آگاهی و خودآگاهی', 'غریزه و طبیعت', 'روح و روان',
         'ذهن و فکر', 'شخصیت', 'هویت', 'فردیت', 'اجتماع و جمع',
         'فرهنگ', 'تمدن', 'تاریخ', 'آینده', 'تغییر و تحول',
         'پیشرفت', 'پسرفت و انحطاط', 'تکامل', 'توسعه',
         'مفهوم و معنا', 'نماد و علامت', 'شکل و قالب', 'ساختار',
         'سیستم و نظام', 'ارتباط و تعامل', 'تأثیر متقابل', 'کیفیت و چگونگی',
         'کمیت و چقدری', 'تعادل', 'هماهنگی', 'تضاد و تقابل',
         'وحدت و یکپارچگی', 'تنوع و کثرت', 'عمومیت و کلیت', 'جزئیت و خاصیت',
         'اصل و ریشه', 'فرع و شاخه', 'کل و جزء', 'درون‌مایه و محتوا',
         'ظاهر و باطن', 'ذات و عرض', 'وجود و هستی', 'عدم و نیستی',
         'واقعیت و امکان', 'ضرورت و احتمال', 'نسبیت و مطلقیت'],
    en: ['Time & era', 'Place & space', 'Quantity & number', 'Order & sequence',
         'Cause & effect', 'Goal & intent', 'Method & way', 'Means & tools',
         'Source & origin', 'Result & outcome', 'Truth & reality', 'Falsehood & lies',
         'Good & bad', 'Beautiful & ugly', 'Ethics & behavior', 'Justice & fairness',
         'Law & rules', 'Freedom & choice', 'Responsibility & duty', 'Rights & duties',
         'Value & spirituality', 'Belief & faith', 'Knowledge & science', 'Information & data',
         'Thought & idea', 'Plan & design', 'Imagination & creativity', 'Memory',
         'Attention & focus', 'Understanding', 'Logic & reasoning', 'Doubt',
         'Faith & certainty', 'Awareness & self-awareness', 'Instinct & nature', 'Soul & psyche',
         'Mind & thought', 'Personality', 'Identity', 'Individuality', 'Society & community',
         'Culture', 'Civilization', 'History', 'Future', 'Change & transformation',
         'Progress', 'Regression & decline', 'Evolution', 'Development',
         'Concept & meaning', 'Symbol & sign', 'Form & format', 'Structure',
         'System & order', 'Communication & interaction', 'Mutual influence', 'Quality & how',
         'Quantity & how much', 'Balance', 'Harmony', 'Contrast & opposition',
         'Unity & coherence', 'Diversity & plurality', 'Generality & totality', 'Particularity',
         'Origin & root', 'Branch', 'Whole & part', 'Theme & content',
         'Surface & depth', 'Essence & accident', 'Existence & being', 'Nothingness',
         'Reality & possibility', 'Necessity & probability', 'Relativity & absoluteness'],
  },

  // ── time-learning ────────────────────────────────────────────
  'time': {
    fa: ['ساعت و دقیقه', 'روز و شب', 'روزهای هفته', 'ماه‌های سال',
         'فصل‌ها', 'تاریخ و تقویم', 'گذشته', 'حال', 'آینده',
         'مدت زمان', 'سرعت زمان'],
    en: ['Hours & minutes', 'Day & night', 'Days of week', 'Months of year',
         'Seasons', 'Date & calendar', 'Past', 'Present', 'Future',
         'Duration', 'Pace of time'],
  },
  'school': {
    fa: ['کلاس درس', 'دانش‌آموزان', 'معلم', 'درس‌ها', 'کتاب درسی',
         'امتحان', 'مدرسه ابتدایی', 'دبیرستان', 'ورزش مدرسه', 'کتابخانه مدرسه'],
    en: ['Classroom', 'Students', 'Teachers', 'Subjects', 'Textbooks',
         'Exams', 'Elementary school', 'High school', 'School sports', 'School library'],
  },
};


// ─────────────────────────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────────────────────────

// Find a category by slug across ALL synthetic sections.
// Returns { section, sectionKey, category } or null.
export function findVocabCategoryBySlug (slug) {
  for (const [key, section] of Object.entries(VOCAB_SECTIONS)) {
    const cat = section.categories.find(c => c.slug === slug);
    if (cat) return { section, sectionKey: key, category: cat };
  }
  return null;
}

// Total lesson count for a synthetic category.
export function lessonCountForCategory (category) {
  return (category.lessons || []).length;
}
