import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  GraduationCap,
  Globe2,
  Instagram,
  Languages,
  Mail,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X
} from "lucide-react";
import "./styles.css";

const business = {
  email: "nahidtaalschool@gmail.com",
  kvk: "97121908",
  btw: "NL005249616B95",
  instagram: "https://www.instagram.com/nahid_taalles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  telegram: "https://t.me/Nahid_1301"
};

const languages = {
  nl: { label: "NL", dir: "ltr", name: "Nederlands" },
  en: { label: "EN", dir: "ltr", name: "English" },
  fa: { label: "فا", dir: "rtl", name: "فارسی" }
};

const navKeys = ["home", "about", "courses", "integration", "private", "faq", "blog", "contact"];
const legalKeys = ["privacy", "terms"];

const content = {
  nl: {
    nav: ["Home", "Over mij", "Cursussen", "Inburgering", "Privelessen", "FAQ", "Blog", "Contact"],
    legal: ["Privacybeleid", "Algemene voorwaarden"],
    brandLine: "Online Dutch Lessons",
    announcement: "Binnenkort starten nieuwe periodes voor alle niveaus. Schrijf je op tijd in.",
    heroKicker: "Online NT2 lessen voor Farsi-sprekers",
    heroTitle: "Leer Nederlands spreken met rust, structuur en zelfvertrouwen",
    heroText:
      "Voor veel cursisten is Nederlands niet moeilijk omdat ze niet slim genoeg zijn, maar omdat ze nooit duidelijke uitleg en echte spreekoefening krijgen. Bij Nahid Taalschool leer je stap voor stap hoe je Nederlands gebruikt in gesprekken, werk, studie en inburgering.",
    primaryCta: "Bekijk cursussen",
    secondaryCta: "Stuur een bericht",
    stats: [
      ["A0-B2", "Van beginner tot gevorderd"],
      ["Online", "Flexibel vanuit elke plek"],
      ["Farsi/EN/NL", "Uitleg die je echt begrijpt"]
    ],
    benefitsTitle: "Waarom studenten voor Nahid Taalschool kiezen",
    benefits: [
      ["Je durft sneller te spreken", "Je oefent met echte situaties: kennismaken, afspraken maken, werkgesprekken, school, huisarts en dagelijkse communicatie."],
      ["Je begrijpt grammatica beter", "Geen losse regels zonder context, maar heldere uitleg met voorbeelden in Farsi, Engels en Nederlands."],
      ["Je weet precies wat je moet leren", "Je krijgt structuur, huiswerk, feedback en een duidelijk pad naar je volgende niveau."]
    ],
    aboutTitle: "Over mij",
    aboutKicker: "Persoonlijk, duidelijk en resultaatgericht",
    aboutText:
      "Mijn naam is Nahid. Ik begeleid anderstaligen die Nederlands willen leren voor hun toekomst in Nederland of België. Ik weet hoe groot het verschil is tussen woorden kennen en echt durven praten. Daarom zijn mijn lessen praktisch, persoonlijk en gericht op resultaat. Je krijgt duidelijke uitleg, veel spreekmomenten en begeleiding die past bij jouw niveau.",
    aboutExtra:
      "Mijn kracht is dat ik moeilijke taalregels rustig kan uitleggen in Farsi, Engels en Nederlands. Daardoor verlies je minder tijd aan verwarring en kun je sneller gebruiken wat je leert. Of je nu net begint, je inburgering voorbereidt of sterker wilt worden voor werk of studie: je leert Nederlands op een manier die logisch voelt.",
    aboutPoints: ["Online lessen met flexibel rooster", "Voor beginners en halfgevorderden", "Groepslessen en privelessen", "Focus op spreken, grammatica en vertrouwen"],
    coursesTitle: "Cursussen en prijzen",
    coursesIntro:
      "Elke cursus heeft een duidelijk doel: je gaat niet alleen lessen volgen, je werkt naar een concreet resultaat. Kies je niveau en bouw gericht aan spreken, begrijpen en zelfstandig Nederlands gebruiken.",
    privateTitle: "Privelessen Nederlands",
    privateText:
      "Wil je sneller vooruit, heb je weinig tijd of wil je hulp bij specifieke doelen? In privelessen werken we precies aan wat jij nodig hebt: spreken, grammatica, uitspraak, examenvoorbereiding of Nederlands voor werk en studie.",
    privateResult: "Resultaat: persoonlijke feedback, sneller overzicht en een lesplan dat volledig op jou is afgestemd.",
    integrationTitle: "Inburgering",
    integrationText:
      "Bereid je gericht voor op inburgering met lessen die taal en praktijk combineren. Je oefent niet alleen voor het examen, maar ook voor situaties die je dagelijks in Nederland tegenkomt.",
    integrationResult: "Resultaat: meer zekerheid bij spreken, luisteren, lezen en schrijven, met duidelijke uitleg in jouw taal.",
    faqTitle: "Veelgestelde vragen",
    blogTitle: "Blog",
    blogIntro: "Korte artikelen over Nederlands leren, inburgering en slim studeren.",
    galleryTitle: "Sfeer van de lessen",
    contactTitle: "Contact",
    contactText:
      "Wil je weten welk niveau bij jou past of je inschrijven voor de nieuwe periode? Stuur mij een bericht. Ik help je graag kiezen wat het beste werkt voor jouw doel.",
    emailLabel: "E-mail",
    instagramLabel: "Stuur DM via Instagram",
    telegramLabel: "Stuur bericht via Telegram",
    privacyTitle: "Privacybeleid",
    privacyText:
      "Nahid Taalschool gebruikt contactgegevens alleen om vragen te beantwoorden, inschrijvingen te verwerken en lessen te organiseren. Gegevens worden niet verkocht aan derden.",
    termsTitle: "Algemene voorwaarden",
    termsText:
      "Lessen vinden online plaats volgens het afgesproken rooster. Betaling, annulering en deelnamevoorwaarden worden vooraf duidelijk met de student gedeeld.",
    cookieText: "Deze website gebruikt functionele cookies en kan later Google Analytics gebruiken om de website te verbeteren.",
    accept: "Accepteren"
  },
  en: {
    nav: ["Home", "About", "Courses", "Integration", "Private lessons", "FAQ", "Blog", "Contact"],
    legal: ["Privacy policy", "Terms"],
    brandLine: "Online Dutch Lessons",
    announcement: "New course periods for all levels will start soon. Register in time.",
    heroKicker: "Online Dutch lessons for Persian speakers",
    heroTitle: "Learn to speak Dutch with structure and confidence",
    heroText:
      "Many learners struggle not because Dutch is impossible, but because they never receive clear explanations and real speaking practice. At Nahid Taalschool, you learn step by step how to use Dutch in conversations, work, study and integration.",
    primaryCta: "View courses",
    secondaryCta: "Send a message",
    stats: [
      ["A0-B2", "Beginner to advanced"],
      ["Online", "Flexible from anywhere"],
      ["Farsi/EN/NL", "Explanations you understand"]
    ],
    benefitsTitle: "Why students choose Nahid Taalschool",
    benefits: [
      ["You speak sooner", "Practice real situations: introductions, appointments, work conversations, school, healthcare and daily life."],
      ["Grammar becomes clear", "No isolated rules without context, but simple explanations with examples in Farsi, English and Dutch."],
      ["You know what to study", "You receive structure, homework, feedback and a clear path to your next level."]
    ],
    aboutTitle: "About me",
    aboutKicker: "Personal, clear and result-focused",
    aboutText:
      "My name is Nahid. I help non-native speakers learn Dutch for their future in the Netherlands or Belgium. I know the difference between knowing words and daring to speak. That is why my lessons are practical, personal and focused on progress.",
    aboutExtra:
      "My strength is explaining difficult language rules calmly in Farsi, English and Dutch. You lose less time in confusion and start using what you learn faster. Whether you are just starting, preparing for integration, or need Dutch for work or study, you learn in a way that feels logical.",
    aboutPoints: ["Flexible online schedule", "For beginners and intermediate learners", "Group and private lessons", "Focus on speaking, grammar and confidence"],
    coursesTitle: "Courses and prices",
    coursesIntro:
      "Every course has a clear goal: you are not just attending lessons, you are working toward a concrete result. Choose your level and build speaking, understanding and independence.",
    privateTitle: "Private Dutch lessons",
    privateText:
      "Want faster progress or support for a specific goal? In private lessons we focus exactly on what you need: speaking, grammar, pronunciation, exam preparation, work or study.",
    privateResult: "Result: personal feedback, faster clarity and a lesson plan built around you.",
    integrationTitle: "Civic integration",
    integrationText:
      "Prepare for civic integration with lessons that combine language and practice. You train for the exam and for daily situations in the Netherlands.",
    integrationResult: "Result: more confidence in speaking, listening, reading and writing, with explanations in your language.",
    faqTitle: "Frequently asked questions",
    blogTitle: "Blog",
    blogIntro: "Short articles about learning Dutch, integration and study tips.",
    galleryTitle: "Lesson atmosphere",
    contactTitle: "Contact",
    contactText:
      "Want to know which level fits you or register for the new period? Send me a message. I will help you choose the right path for your goal.",
    emailLabel: "Email",
    instagramLabel: "Send DM on Instagram",
    telegramLabel: "Send message on Telegram",
    privacyTitle: "Privacy policy",
    privacyText:
      "Nahid Taalschool uses contact details only to answer questions, process registrations and organize lessons. Data is not sold to third parties.",
    termsTitle: "Terms and conditions",
    termsText:
      "Lessons take place online according to the agreed schedule. Payment, cancellation and participation terms are shared clearly in advance.",
    cookieText: "This website uses functional cookies and may later use Google Analytics to improve the website.",
    accept: "Accept"
  },
  fa: {
    nav: ["خانه", "درباره من", "دوره ها", "اینبرخرینگ", "کلاس خصوصی", "سوالات", "وبلاگ", "تماس"],
    legal: ["حریم خصوصی", "شرایط"],
    brandLine: "کلاس آنلاین زبان هلندی",
    announcement: "به زودی دوره های جدید برای همه سطح ها شروع می شود. برای رزرو جای خود زودتر پیام بدهید.",
    heroKicker: "کلاس آنلاین هلندی برای فارسی زبانان",
    heroTitle: "هلندی را با برنامه، آرامش و اعتماد به نفس صحبت کنید",
    heroText:
      "بسیاری از زبان آموزان به خاطر سخت بودن هلندی عقب نمی مانند؛ مشکل این است که توضیح روشن و تمرین مکالمه واقعی دریافت نمی کنند. در Nahid Taalschool قدم به قدم یاد می گیرید چطور هلندی را در گفتگو، کار، تحصیل و اینبرخرینگ استفاده کنید.",
    primaryCta: "مشاهده دوره ها",
    secondaryCta: "ارسال پیام",
    stats: [
      ["A0-B2", "از مبتدی تا پیشرفته"],
      ["آنلاین", "قابل شرکت از هرجا"],
      ["فارسی/انگلیسی/هلندی", "توضیح قابل فهم"]
    ],
    benefitsTitle: "چرا زبان آموزان Nahid Taalschool را انتخاب می کنند",
    benefits: [
      ["زودتر شروع به صحبت می کنید", "با موقعیت های واقعی مثل معرفی، قرار ملاقات، کار، تحصیل، دکتر و زندگی روزمره تمرین می کنید."],
      ["گرامر را بهتر می فهمید", "قانون های سخت با مثال و به زبان فارسی، انگلیسی و هلندی واضح توضیح داده می شوند."],
      ["می دانید دقیقا چه بخوانید", "برنامه، تمرین، بازخورد و مسیر مشخص برای رسیدن به سطح بعدی دریافت می کنید."]
    ],
    aboutTitle: "درباره من",
    aboutKicker: "شخصی، روشن و نتیجه محور",
    aboutText:
      "من ناهید هستم. به فارسی زبانان و دیگر زبان آموزان کمک می کنم هلندی را برای آینده خود در هلند یا بلژیک یاد بگیرند. تفاوت زیادی بین بلد بودن چند کلمه و جرئت صحبت کردن وجود دارد. به همین دلیل کلاس های من کاربردی، شخصی و نتیجه محور هستند.",
    aboutExtra:
      "نقطه قوت من این است که قانون های سخت زبان را با آرامش و به فارسی، انگلیسی و هلندی توضیح می دهم. شما کمتر گیج می شوید و سریع تر می توانید چیزی را که یاد می گیرید استفاده کنید. چه تازه شروع کرده باشید، چه برای اینبرخرینگ آماده شوید، یا برای کار و تحصیل به هلندی نیاز داشته باشید، مسیر یادگیری برای شما واضح می شود.",
    aboutPoints: ["کلاس آنلاین با برنامه انعطاف پذیر", "برای مبتدی و نیمه پیشرفته", "کلاس گروهی و خصوصی", "تمرکز روی مکالمه، گرامر و اعتماد به نفس"],
    coursesTitle: "دوره ها و قیمت ها",
    coursesIntro:
      "هر دوره یک هدف مشخص دارد: شما فقط در کلاس شرکت نمی کنید، بلکه برای یک نتیجه واقعی تمرین می کنید. سطح خود را انتخاب کنید و قدم به قدم در مکالمه، فهمیدن و استفاده مستقل از هلندی قوی تر شوید.",
    privateTitle: "کلاس خصوصی هلندی",
    privateText:
      "اگر می خواهید سریع تر پیشرفت کنید یا هدف مشخصی دارید، کلاس خصوصی بهترین انتخاب است. در این کلاس روی نیاز شما کار می کنیم: مکالمه، گرامر، تلفظ، آمادگی امتحان، کار یا تحصیل.",
    privateResult: "نتیجه: بازخورد شخصی، پیشرفت سریع تر و برنامه ای که فقط برای شما ساخته می شود.",
    integrationTitle: "اینبرخرینگ",
    integrationText:
      "برای اینبرخرینگ با کلاس هایی آماده شوید که زبان و موقعیت های واقعی را با هم ترکیب می کنند. فقط برای امتحان نمی خوانید، بلکه برای زندگی روزمره در هلند آماده می شوید.",
    integrationResult: "نتیجه: اعتماد به نفس بیشتر در صحبت کردن، شنیدن، خواندن و نوشتن با توضیح قابل فهم به زبان شما.",
    faqTitle: "سوالات متداول",
    blogTitle: "وبلاگ",
    blogIntro: "مقاله های کوتاه درباره یادگیری هلندی، اینبرخرینگ و روش مطالعه.",
    galleryTitle: "فضای کلاس ها",
    contactTitle: "تماس",
    contactText:
      "اگر نمی دانید کدام سطح برای شما مناسب است یا می خواهید برای دوره جدید ثبت نام کنید، پیام بدهید. با هم بهترین مسیر را برای هدف شما انتخاب می کنیم.",
    emailLabel: "ایمیل",
    instagramLabel: "ارسال پیام در اینستاگرام",
    telegramLabel: "ارسال پیام در تلگرام",
    privacyTitle: "حریم خصوصی",
    privacyText:
      "Nahid Taalschool اطلاعات تماس را فقط برای پاسخ به سوالات، ثبت نام و برنامه ریزی کلاس ها استفاده می کند. اطلاعات به دیگران فروخته نمی شود.",
    termsTitle: "شرایط و قوانین",
    termsText:
      "کلاس ها آنلاین و طبق برنامه توافق شده برگزار می شوند. شرایط پرداخت، لغو و شرکت در کلاس از قبل واضح اعلام می شود.",
    cookieText: "این وبسایت از کوکی های ضروری استفاده می کند و ممکن است بعدا برای بهبود سایت از Google Analytics استفاده شود.",
    accept: "قبول"
  }
};

const courseData = [
  { level: "A0 -> A1", title: "Nederlands in gang", lessons: "12 lessen", duration: "90 minuten", price: "€130" },
  { level: "A1 -> A2", title: "Vervolg Nederlands in gang", lessons: "16 lessen", duration: "90 minuten", price: "€230" },
  { level: "B1-1", title: "In Zicht", lessons: "18 lessen", duration: "90 minuten", price: "€300" },
  { level: "B1-2", title: "Vervolg In Zicht", lessons: "18 lessen", duration: "90 minuten", price: "€350" },
  { level: "B2-1", title: "De Finale", lessons: "18 lessen", duration: "90 minuten", price: "€400" },
  { level: "B2-2", title: "Vervolg De Finale", lessons: "18 lessen", duration: "90 minuten", price: "€450" }
];

const courseCopy = {
  nl: [
    "Voor echte beginners. Je leert jezelf voorstellen, korte zinnen maken en eenvoudige gesprekken begrijpen.",
    "Je bouwt door naar A2: meer woordenschat, betere zinnen en meer zekerheid in dagelijkse communicatie.",
    "De stap naar B1 begint hier. Je leert langere gesprekken voeren en je mening eenvoudiger uitleggen.",
    "Je maakt je B1 sterker voor werk, studie en inburgering. Meer spreken, meer structuur, meer zelfstandigheid.",
    "Voor wie naar B2 wil groeien. Je leert genuanceerder spreken, teksten beter begrijpen en professioneler formuleren.",
    "Je rondt B2 sterker af met focus op vloeiendheid, argumenteren en taalgebruik voor studie of werk."
  ],
  en: [
    "For true beginners. Learn to introduce yourself, make short sentences and understand simple conversations.",
    "Build toward A2 with more vocabulary, better sentences and more confidence in daily communication.",
    "Your first step toward B1. Learn to handle longer conversations and explain your opinion more clearly.",
    "Strengthen your B1 for work, study and integration with more speaking, structure and independence.",
    "For learners growing toward B2. Speak with more nuance, understand texts better and communicate professionally.",
    "Finish B2 stronger with focus on fluency, arguments and Dutch for study or work."
  ],
  fa: [
    "برای شروع از صفر. یاد می گیرید خودتان را معرفی کنید، جمله های کوتاه بسازید و مکالمه ساده را بفهمید.",
    "برای رسیدن به A2 با واژگان بیشتر، جمله سازی بهتر و اعتماد به نفس بیشتر در ارتباط روزمره.",
    "شروع مسیر B1. یاد می گیرید مکالمه های طولانی تر داشته باشید و نظر خود را ساده تر توضیح دهید.",
    "تقویت B1 برای کار، تحصیل و اینبرخرینگ با تمرین مکالمه، ساختار و استقلال بیشتر.",
    "برای رسیدن به B2. یاد می گیرید دقیق تر صحبت کنید، متن ها را بهتر بفهمید و حرفه ای تر بنویسید.",
    "تکمیل B2 با تمرکز روی روان صحبت کردن، استدلال کردن و استفاده از هلندی برای تحصیل یا کار."
  ]
};

const faqData = {
  nl: [
    ["Hoe werken de online lessen?", "De lessen vinden online plaats met duidelijke uitleg, spreekoefeningen, huiswerk en persoonlijke feedback."],
    ["Welke niveaus geef je?", "Van A0 tot en met B2. We kiezen samen het niveau dat past bij jouw startpunt."],
    ["Geef je ook privelessen?", "Ja. Privelessen duren 60 minuten en kosten €40 per les."],
    ["Kan ik inburgeringslessen volgen?", "Ja. Je kunt gericht oefenen voor taal, communicatie en examenonderdelen."],
    ["Welke talen spreek je?", "De uitleg kan in Farsi, Engels en Nederlands."],
    ["Hoe meld ik me aan?", "Stuur een bericht via Instagram, Telegram of e-mail. Daarna bespreken we je niveau, doel en beschikbare groep."],
    ["Welke boeken gebruiken jullie?", "Onder andere Nederlands in gang, In Zicht en De Finale, afhankelijk van je niveau."]
  ],
  en: [
    ["How do the online lessons work?", "Lessons take place online with clear explanations, speaking practice, homework and personal feedback."],
    ["Which levels do you teach?", "From A0 to B2. We choose the right level based on your starting point."],
    ["Do you offer private lessons?", "Yes. Private lessons are 60 minutes and cost €40 per lesson."],
    ["Can I follow integration lessons?", "Yes. You can practice language, communication and exam parts in a focused way."],
    ["Which languages do you speak?", "Explanations can be given in Farsi, English and Dutch."],
    ["How do I register?", "Send a message through Instagram, Telegram or email. Then we discuss your level, goal and available group."],
    ["Which books do you use?", "Among others Nederlands in gang, In Zicht and De Finale, depending on your level."]
  ],
  fa: [
    ["کلاس های آنلاین چطور برگزار می شوند؟", "کلاس ها آنلاین هستند و شامل توضیح واضح، تمرین مکالمه، تکلیف و بازخورد شخصی می شوند."],
    ["چه سطح هایی تدریس می کنید؟", "از A0 تا B2. با هم سطح مناسب شما را بر اساس نقطه شروع انتخاب می کنیم."],
    ["آیا کلاس خصوصی هم دارید؟", "بله. کلاس خصوصی ۶۰ دقیقه است و هر جلسه ۴۰ یورو هزینه دارد."],
    ["آیا می توانم برای اینبرخرینگ کلاس بگیرم؟", "بله. می توانید برای زبان، ارتباط روزمره و بخش های امتحان هدفمند تمرین کنید."],
    ["به چه زبان هایی توضیح می دهید؟", "توضیح ها می توانند به فارسی، انگلیسی و هلندی باشند."],
    ["چطور ثبت نام کنم؟", "از طریق اینستاگرام، تلگرام یا ایمیل پیام بدهید. بعد سطح، هدف و گروه مناسب را بررسی می کنیم."],
    ["از چه کتاب هایی استفاده می کنید؟", "با توجه به سطح، از کتاب هایی مثل Nederlands in gang، In Zicht و De Finale استفاده می شود."]
  ]
};

const blogPosts = {
  nl: [
    ["Waarom spreken belangrijker is dan wachten tot je grammatica perfect is", "Je leert taal door te gebruiken. Begin klein, spreek vaak en verbeter onderweg."],
    ["Zo bereid je je slimmer voor op inburgering", "Een goed schema, herhaling en oefenen met echte situaties maken het verschil."],
    ["Nederlands leren naast werk of studie", "Met korte vaste leermomenten kun je toch zichtbaar vooruitgaan."]
  ],
  en: [
    ["Why speaking matters more than waiting for perfect grammar", "You learn language by using it. Start small, speak often and improve along the way."],
    ["How to prepare smarter for integration", "A clear schedule, repetition and real-life practice make the difference."],
    ["Learning Dutch next to work or study", "With short fixed study moments, you can still make visible progress."]
  ],
  fa: [
    ["چرا نباید صبر کنید تا گرامر شما کامل شود", "زبان را با استفاده کردن یاد می گیرید. از جمله های کوچک شروع کنید و در مسیر بهتر شوید."],
    ["آمادگی هوشمندانه برای اینبرخرینگ", "برنامه مشخص، تکرار و تمرین موقعیت های واقعی نتیجه را بهتر می کند."],
    ["یادگیری هلندی کنار کار یا تحصیل", "با زمان های کوتاه اما ثابت می توانید پیشرفت واقعی داشته باشید."]
  ]
};

function App() {
  const [lang, setLang] = useState("nl");
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookies, setCookies] = useState(() => localStorage.getItem("nahid-cookies") === "accepted");
  const t = content[lang];
  const isRtl = languages[lang].dir === "rtl";

  const pages = useMemo(
    () => [
      ...navKeys.map((key, index) => ({ key, label: t.nav[index] })),
      ...legalKeys.map((key, index) => ({ key, label: t.legal[index] }))
    ],
    [t]
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = languages[lang].dir;
  }, [lang]);

  function go(nextPage) {
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function acceptCookies() {
    localStorage.setItem("nahid-cookies", "accepted");
    setCookies(true);
  }

  return (
    <div className={`site ${isRtl ? "rtl" : ""}`}>
      <Header t={t} lang={lang} setLang={setLang} page={page} go={go} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        {page === "home" && <Home t={t} lang={lang} go={go} />}
        {page === "about" && <About t={t} />}
        {page === "courses" && <Courses t={t} lang={lang} go={go} />}
        {page === "integration" && <TextPage icon={<GraduationCap size={20} />} title={t.integrationTitle} text={t.integrationText} result={t.integrationResult} />}
        {page === "private" && <TextPage icon={<Sparkles size={20} />} title={t.privateTitle} text={t.privateText} result={t.privateResult} extra="60 minuten - €40 per les" />}
        {page === "faq" && <FaqPage t={t} lang={lang} />}
        {page === "blog" && <Blog t={t} lang={lang} />}
        {page === "contact" && <Contact t={t} />}
        {page === "privacy" && <Legal title={t.privacyTitle} text={t.privacyText} />}
        {page === "terms" && <Legal title={t.termsTitle} text={t.termsText} />}
      </main>
      <Footer t={t} pages={pages} go={go} />
      {!cookies && <CookieBanner t={t} onAccept={acceptCookies} />}
    </div>
  );
}

function Header({ t, lang, setLang, page, go, menuOpen, setMenuOpen }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => go("home")} aria-label="Nahid Taalschool home">
        <img src="/nahid-logo.png" alt="Nahid Taalschool logo" />
        <span>
          <strong>Nahid Taalschool</strong>
          <small>{t.brandLine}</small>
        </span>
      </button>
      <nav className="desktop-nav" aria-label="Main navigation">
        {t.nav.map((item, index) => (
          <button key={navKeys[index]} className={page === navKeys[index] ? "active" : ""} onClick={() => go(navKeys[index])}>
            {item}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageSwitch lang={lang} setLang={setLang} />
        <button className="icon-button mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          {t.nav.map((item, index) => (
            <button key={navKeys[index]} className={page === navKeys[index] ? "active" : ""} onClick={() => go(navKeys[index])}>
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function LanguageSwitch({ lang, setLang }) {
  return (
    <div className="language-switch" aria-label="Language switcher">
      <Globe2 size={16} />
      {Object.entries(languages).map(([key, language]) => (
        <button key={key} className={lang === key ? "active" : ""} onClick={() => setLang(key)} title={language.name}>
          {language.label}
        </button>
      ))}
    </div>
  );
}

function Home({ t, lang, go }) {
  return (
    <>
      <section className="announcement"><Sparkles size={18} /> {t.announcement}</section>
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker"><Languages size={18} /> {t.heroKicker}</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => go("courses")}>{t.primaryCta}<ArrowRight size={18} /></button>
            <button className="secondary" onClick={() => go("contact")}>{t.secondaryCta}</button>
          </div>
          <div className="stats">
            {t.stats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>
        <div className="hero-media portrait">
          <img src="/nahid-hero-photo.png" alt="Online Nederlandse lessen" />
        </div>
      </section>
      <Benefits t={t} />
      <CoursesPreview t={t} lang={lang} go={go} />
      <AboutBand t={t} go={go} />
      <Gallery t={t} />
    </>
  );
}

function Benefits({ t }) {
  const icons = [MessageCircle, BookOpen, Target];
  return (
    <section className="section">
      <div className="section-head">
        <p className="kicker"><GraduationCap size={18} /> NT2 Online</p>
        <h2>{t.benefitsTitle}</h2>
      </div>
      <div className="feature-grid">
        {t.benefits.map(([title, text], index) => {
          const Icon = icons[index];
          return <article className="feature-card" key={title}><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>;
        })}
      </div>
    </section>
  );
}

function CoursesPreview({ t, lang, go }) {
  return (
    <section className="section courses-preview">
      <div className="section-head">
        <p className="kicker"><BookOpen size={18} /> {t.announcement}</p>
        <h2>{t.coursesTitle}</h2>
        <p>{t.coursesIntro}</p>
      </div>
      <div className="course-grid compact">
        {courseData.slice(0, 3).map((course, index) => <CourseCard key={course.level} course={course} text={courseCopy[lang][index]} />)}
      </div>
      <button className="primary centered" onClick={() => go("courses")}>{t.primaryCta}<ArrowRight size={18} /></button>
    </section>
  );
}

function Courses({ t, lang, go }) {
  return (
    <section className="page section">
      <div className="section-head">
        <p className="kicker"><BookOpen size={18} /> {t.announcement}</p>
        <h1>{t.coursesTitle}</h1>
        <p>{t.coursesIntro}</p>
      </div>
      <div className="course-grid">
        {courseData.map((course, index) => <CourseCard key={course.level} course={course} text={courseCopy[lang][index]} />)}
        <article className="course-card highlighted">
          <span>{t.privateTitle}</span>
          <h3>{t.privateTitle}</h3>
          <p>{t.privateText}</p>
          <strong>€40 per les</strong>
          <button className="light-button" onClick={() => go("contact")}>{t.secondaryCta}</button>
        </article>
      </div>
    </section>
  );
}

function CourseCard({ course, text }) {
  return (
    <article className="course-card">
      <span>{course.level}</span>
      <h3>{course.title}</h3>
      <p>{course.lessons} - {course.duration}</p>
      <p>{text}</p>
      <strong>{course.price}</strong>
    </article>
  );
}

function AboutBand({ t, go }) {
  return (
    <section className="band split about-band">
      <div>
        <p className="kicker"><ShieldCheck size={18} /> Nahid Taalschool</p>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
        <button className="light-button" onClick={() => go("about")}>{t.nav[1]}<ArrowRight size={18} /></button>
      </div>
      <img className="about-photo large" src="/nahid-profile-photo.png" alt="Nahid, docent Nederlands" />
    </section>
  );
}

function About({ t }) {
  return (
    <section className="page section about-page">
      <div className="about-copy">
        <p className="kicker"><Users size={18} /> {t.aboutKicker}</p>
        <h1>{t.aboutTitle}</h1>
        <p>{t.aboutText}</p>
        <p>{t.aboutExtra}</p>
        <ul className="check-list light">
          {t.aboutPoints.map((point) => <li key={point}><Check size={18} />{point}</li>)}
        </ul>
      </div>
      <img className="about-photo large" src="/nahid-profile-photo.png" alt="Nahid, docent Nederlands" />
    </section>
  );
}

function TextPage({ icon, title, text, result, extra }) {
  return (
    <section className="page section text-page">
      <p className="kicker">{icon} Online begeleiding</p>
      <h1>{title}</h1>
      <p>{text}</p>
      <p className="result-box">{result}</p>
      {extra && <strong className="price-pill">{extra}</strong>}
    </section>
  );
}

function FaqPage({ t, lang }) {
  return (
    <section className="page section">
      <div className="section-head">
        <h1>{t.faqTitle}</h1>
      </div>
      <div className="faq-list">
        {faqData[lang].map(([question, answer]) => <FaqItem key={question} question={question} answer={answer} />)}
      </div>
    </section>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="faq-item">
      <button onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <ChevronDown className={open ? "rotated" : ""} size={20} />
      </button>
      {open && <p>{answer}</p>}
    </article>
  );
}

function Blog({ t, lang }) {
  return (
    <section className="page section">
      <div className="section-head">
        <h1>{t.blogTitle}</h1>
        <p>{t.blogIntro}</p>
      </div>
      <div className="feature-grid">
        {blogPosts[lang].map(([title, text]) => (
          <article className="feature-card" key={title}><BookOpen size={24} /><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section className="page section contact-page">
      <div className="contact-copy">
        <p className="kicker"><Send size={18} /> Nahid Taalschool</p>
        <h1>{t.contactTitle}</h1>
        <p>{t.contactText}</p>
        <div className="trust-box">
          <strong>KvK: {business.kvk}</strong>
          <strong>BTW: {business.btw}</strong>
        </div>
      </div>
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${business.email}`}><Mail size={24} /><span>{t.emailLabel}</span><small>{business.email}</small></a>
        <a className="contact-card" href={business.instagram} target="_blank" rel="noreferrer"><Instagram size={24} /><span>{t.instagramLabel}</span><small>@nahid_taalles</small></a>
        <a className="contact-card" href={business.telegram} target="_blank" rel="noreferrer"><MessageCircle size={24} /><span>{t.telegramLabel}</span><small>@Nahid_1301</small></a>
      </div>
    </section>
  );
}

function Gallery({ t }) {
  return (
    <section className="section">
      <div className="section-head">
        <h2>{t.galleryTitle}</h2>
      </div>
      <div className="gallery">
        <div><BookOpen size={32} /><span>Online lesmateriaal</span></div>
        <div><MessageCircle size={32} /><span>Spreekoefening</span></div>
        <div><GraduationCap size={32} /><span>Examenvoorbereiding</span></div>
      </div>
    </section>
  );
}

function Legal({ title, text }) {
  return (
    <section className="page section text-page">
      <h1>{title}</h1>
      <p>{text}</p>
      <p className="result-box">KvK: {business.kvk}<br />BTW: {business.btw}</p>
    </section>
  );
}

function Footer({ t, pages, go }) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src="/nahid-logo.png" alt="Nahid Taalschool logo" />
        <div>
          <strong>Nahid Taalschool</strong>
          <p>{t.brandLine}</p>
          <p>KvK: {business.kvk} | BTW: {business.btw}</p>
        </div>
      </div>
      <div className="footer-links">
        {pages.map((item) => <button key={item.key} onClick={() => go(item.key)}>{item.label}</button>)}
      </div>
    </footer>
  );
}

function CookieBanner({ t, onAccept }) {
  return (
    <aside className="cookie-banner">
      <p>{t.cookieText}</p>
      <button className="primary" onClick={onAccept}>{t.accept}</button>
    </aside>
  );
}

createRoot(document.getElementById("root")).render(<App />);
