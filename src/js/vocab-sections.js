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
//  OPENJAM_LESSON_NAMES — hand-crafted lesson titles for select openjam
//  sub-categories. When category-words.html splits an openjam sub-cat into
//  50-word chunks, it checks here FIRST; if a names array exists, the
//  lesson uses those instead of "<name> ۱، <name> ۲…". Add entries here
//  as the dataset grows.
//
//  TODO(flutter): cover all openjam sub-categories. For each, name the
//  50-word window after the dominant theme of the words in that window
//  (semantic clustering — pick the highest-weight word vector centroid
//  in the chunk and name from a curated dictionary).
// ─────────────────────────────────────────────────────────────────────────────
export const OPENJAM_LESSON_NAMES = {
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
  'family': {
    fa: ['اعضای نزدیک خانواده', 'بستگان دور', 'نقش‌های خانوادگی', 'مراسم خانوادگی'],
    en: ['Close family members', 'Distant relatives', 'Family roles', 'Family events'],
  },
  'body': {
    fa: ['سر و صورت', 'دست و بازو', 'پا و ران', 'تنه و کمر', 'استخوان و مفصل',
         'ماهیچه و عصب', 'اندام داخلی', 'پوست و مو', 'حواس پنج‌گانه', 'دستگاه گردش خون',
         'دستگاه گوارش', 'دستگاه تنفس', 'دستگاه عصبی', 'سیستم ایمنی', 'حرکات بدن'],
    en: ['Head & face', 'Hands & arms', 'Legs & thighs', 'Torso & back', 'Bones & joints',
         'Muscles & nerves', 'Internal organs', 'Skin & hair', 'Five senses', 'Circulatory',
         'Digestive', 'Respiratory', 'Nervous', 'Immune', 'Body movements'],
  },
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
