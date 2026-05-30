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
  ShieldCheck,
  Sparkles,
  Users,
  X
} from "lucide-react";
import "./styles.css";

const languages = {
  nl: { label: "NL", dir: "ltr", name: "Nederlands" },
  en: { label: "EN", dir: "ltr", name: "English" },
  fa: { label: "فا", dir: "rtl", name: "فارسی" }
};

const socialLinks = {
  instagram: "https://www.instagram.com/",
  telegram: "https://t.me/"
};

const gaMeasurementId = "G-XXXXXXXXXX";
const navKeys = ["home", "about", "courses", "integration", "private", "faq", "blog", "contact"];
const legalKeys = ["privacy", "terms"];

const content = {
  nl: {
    nav: ["Home", "Over mij", "Cursussen", "Inburgering", "Privelessen", "FAQ", "Blog", "Contact"],
    legal: ["Privacybeleid", "Algemene voorwaarden"],
    heroKicker: "Online NT2 lessen voor Farsi-sprekers",
    heroTitle: "Leer Nederlands met zelfvertrouwen",
    heroText:
      "Nahid Taalschool helpt anderstaligen sneller, rustiger en praktischer Nederlands leren. Met duidelijke uitleg in Farsi, Engels en Nederlands bouw je stap voor stap aan spreken, grammatica en echte communicatie.",
    primaryCta: "Bekijk cursussen",
    secondaryCta: "Neem contact op",
    stats: [
      ["A0-B2", "Niveaus"],
      ["Online", "Wereldwijd"],
      ["3 talen", "Uitleg"]
    ],
    benefitsTitle: "Praktisch Nederlands voor jouw toekomst",
    benefits: [
      ["Spreken vanaf les 1", "Oefen met situaties die je echt nodig hebt voor werk, studie, inburgering en dagelijks leven."],
      ["Begrijpelijke grammatica", "Moeilijke regels worden duidelijk uitgelegd in Farsi, Engels en Nederlands."],
      ["Persoonlijke begeleiding", "Je krijgt structuur, feedback en hulp op het tempo dat bij jou past."]
    ],
    aboutTitle: "Over Nahid Taalschool",
    aboutText:
      "Nahid Taalschool is er voor nieuwkomers, studenten en werkenden die Nederlands willen leren zonder zich verloren te voelen in lange theorie. De lessen zijn persoonlijk, praktisch en gericht op communicatie.",
    aboutPoints: ["Focus op zelfvertrouwen", "Online lessen met flexibel rooster", "Voor beginners en halfgevorderden", "Groepslessen en privelessen"],
    coursesTitle: "Cursussen en prijzen",
    coursesIntro: "Kies het niveau dat past bij jouw startpunt. Alle lessen zijn online en gericht op actief leren.",
    privateTitle: "Privelessen",
    privateText: "Een-op-een begeleiding voor wie sneller wil groeien, specifieke doelen heeft of extra uitleg nodig heeft.",
    integrationTitle: "Inburgering",
    integrationText:
      "Bereid je gericht voor op spreken, lezen, luisteren, schrijven en communicatie in Nederland. De lessen combineren taal, praktijk en examenvoorbereiding.",
    faqTitle: "Veelgestelde vragen",
    blogTitle: "Blog",
    blogIntro: "Korte artikelen over Nederlands leren, inburgering en studietips.",
    galleryTitle: "Sfeer van de lessen",
    reviewsTitle: "Reviews",
    reviewsText: "Binnenkort verschijnen hier ervaringen van studenten.",
    contactTitle: "Contact",
    contactText: "Wil je inschrijven of eerst meer informatie? Stuur gerust een bericht via e-mail, Instagram of Telegram.",
    email: "nahidtaalschool@gmail.com",
    privacyTitle: "Privacybeleid",
    privacyText:
      "Nahid Taalschool gebruikt contactgegevens alleen om vragen te beantwoorden, inschrijvingen te verwerken en lessen te organiseren. Gegevens worden niet verkocht aan derden.",
    termsTitle: "Algemene voorwaarden",
    termsText:
      "Lessen vinden online plaats volgens het afgesproken rooster. Betaling, annulering en deelnamevoorwaarden worden vooraf duidelijk met de student gedeeld.",
    cookieText: "Deze website gebruikt functionele cookies en kan later Google Analytics gebruiken om de website te verbeteren.",
    accept: "Accepteren",
    close: "Sluiten"
  },
  en: {
    nav: ["Home", "About", "Courses", "Civic integration", "Private lessons", "FAQ", "Blog", "Contact"],
    legal: ["Privacy policy", "Terms"],
    heroKicker: "Online Dutch lessons for Persian speakers",
    heroTitle: "Learn Dutch with confidence",
    heroText:
      "Nahid Taalschool helps non-native speakers learn Dutch faster and more practically. With clear explanations in Farsi, English and Dutch, you build speaking skills, grammar and real communication.",
    primaryCta: "View courses",
    secondaryCta: "Contact",
    stats: [
      ["A0-B2", "Levels"],
      ["Online", "Worldwide"],
      ["3 languages", "Support"]
    ],
    benefitsTitle: "Practical Dutch for your future",
    benefits: [
      ["Speaking from lesson 1", "Practice real situations for work, study, integration and daily life."],
      ["Clear grammar", "Difficult rules are explained clearly in Farsi, English and Dutch."],
      ["Personal guidance", "You receive structure, feedback and support at your own pace."]
    ],
    aboutTitle: "About Nahid Taalschool",
    aboutText:
      "Nahid Taalschool is for newcomers, students and professionals who want to learn Dutch without feeling lost in theory. Lessons are personal, practical and focused on communication.",
    aboutPoints: ["Confidence-focused", "Flexible online schedule", "For beginners and intermediate learners", "Group and private lessons"],
    coursesTitle: "Courses and prices",
    coursesIntro: "Choose the level that matches your starting point. All lessons are online and focused on active learning.",
    privateTitle: "Private lessons",
    privateText: "One-to-one guidance for faster progress, specific goals or extra support.",
    integrationTitle: "Civic integration",
    integrationText:
      "Prepare for speaking, reading, listening, writing and communication in the Netherlands. Lessons combine language, practice and exam preparation.",
    faqTitle: "Frequently asked questions",
    blogTitle: "Blog",
    blogIntro: "Short articles about learning Dutch, integration and study tips.",
    galleryTitle: "Lesson atmosphere",
    reviewsTitle: "Reviews",
    reviewsText: "Student experiences will appear here soon.",
    contactTitle: "Contact",
    contactText: "Want to register or ask a question first? Send a message by email, Instagram or Telegram.",
    email: "nahidtaalschool@gmail.com",
    privacyTitle: "Privacy policy",
    privacyText:
      "Nahid Taalschool uses contact details only to answer questions, process registrations and organize lessons. Data is not sold to third parties.",
    termsTitle: "Terms and conditions",
    termsText:
      "Lessons take place online according to the agreed schedule. Payment, cancellation and participation terms are shared clearly in advance.",
    cookieText: "This website uses functional cookies and may later use Google Analytics to improve the website.",
    accept: "Accept",
    close: "Close"
  },
  fa: {
    nav: ["خانه", "درباره من", "دوره ها", "اینبرخرینگ", "کلاس خصوصی", "سوالات", "وبلاگ", "تماس"],
    legal: ["حریم خصوصی", "شرایط"],
    heroKicker: "کلاس آنلاین هلندی برای فارسی زبانان",
    heroTitle: "با اعتماد به نفس هلندی یاد بگیرید",
    heroText:
      "Nahid Taalschool به زبان آموزان کمک می کند هلندی را سریع تر، کاربردی تر و با آرامش یاد بگیرند. توضیح ها به فارسی، انگلیسی و هلندی ارائه می شود تا مکالمه، گرامر و ارتباط واقعی را قدم به قدم یاد بگیرید.",
    primaryCta: "مشاهده دوره ها",
    secondaryCta: "تماس",
    stats: [
      ["A0-B2", "سطح ها"],
      ["آنلاین", "در سراسر جهان"],
      ["۳ زبان", "توضیح"]
    ],
    benefitsTitle: "هلندی کاربردی برای آینده شما",
    benefits: [
      ["مکالمه از جلسه اول", "تمرین موقعیت های واقعی برای کار، تحصیل، اینبرخرینگ و زندگی روزمره."],
      ["گرامر قابل فهم", "قوانین سخت به زبان فارسی، انگلیسی و هلندی ساده توضیح داده می شوند."],
      ["راهنمایی شخصی", "با ساختار، بازخورد و سرعت مناسب خودتان پیش می روید."]
    ],
    aboutTitle: "درباره Nahid Taalschool",
    aboutText:
      "Nahid Taalschool برای تازه واردان، دانشجویان و افراد شاغلی است که می خواهند هلندی را بدون سردرگمی در تئوری یاد بگیرند. کلاس ها شخصی، کاربردی و مکالمه محور هستند.",
    aboutPoints: ["تمرکز بر اعتماد به نفس", "برنامه آنلاین انعطاف پذیر", "برای مبتدی و نیمه پیشرفته", "کلاس گروهی و خصوصی"],
    coursesTitle: "دوره ها و قیمت ها",
    coursesIntro: "سطح مناسب خود را انتخاب کنید. همه کلاس ها آنلاین و فعال هستند.",
    privateTitle: "کلاس خصوصی",
    privateText: "راهنمایی یک به یک برای پیشرفت سریع تر، هدف های خاص یا توضیح بیشتر.",
    integrationTitle: "اینبرخرینگ",
    integrationText:
      "برای صحبت کردن، خواندن، شنیدن، نوشتن و ارتباط در هلند آماده شوید. کلاس ها زبان، تمرین و آمادگی امتحان را ترکیب می کنند.",
    faqTitle: "سوالات متداول",
    blogTitle: "وبلاگ",
    blogIntro: "مقاله های کوتاه درباره یادگیری هلندی، اینبرخرینگ و نکات مطالعه.",
    galleryTitle: "فضای کلاس ها",
    reviewsTitle: "نظرات",
    reviewsText: "به زودی تجربه های زبان آموزان اینجا قرار می گیرد.",
    contactTitle: "تماس",
    contactText: "برای ثبت نام یا دریافت اطلاعات بیشتر از طریق ایمیل، اینستاگرام یا تلگرام پیام بدهید.",
    email: "nahidtaalschool@gmail.com",
    privacyTitle: "حریم خصوصی",
    privacyText:
      "Nahid Taalschool اطلاعات تماس را فقط برای پاسخ به سوالات، ثبت نام و برنامه ریزی کلاس ها استفاده می کند. اطلاعات به دیگران فروخته نمی شود.",
    termsTitle: "شرایط و قوانین",
    termsText:
      "کلاس ها آنلاین و طبق برنامه توافق شده برگزار می شوند. شرایط پرداخت، لغو و شرکت در کلاس از قبل واضح اعلام می شود.",
    cookieText: "این وبسایت از کوکی های ضروری استفاده می کند و ممکن است بعدا برای بهبود سایت از Google Analytics استفاده شود.",
    accept: "قبول",
    close: "بستن"
  }
};

const courseData = [
  ["A0 -> A1", "Nederlands in gang", "12 lessen", "90 minuten", "€130"],
  ["A1 -> A2", "Vervolg Nederlands in gang", "16 lessen", "90 minuten", "€230"],
  ["B1-1", "In Zicht", "18 lessen", "90 minuten", "€300"],
  ["B1-2", "Vervolg In Zicht", "18 lessen", "90 minuten", "€350"],
  ["B2-1", "De Finale", "18 lessen", "90 minuten", "€400"],
  ["B2-2", "Vervolg De Finale", "18 lessen", "90 minuten", "€450"]
];

const faqs = [
  ["Hoe werken de online lessen?", "De lessen vinden online plaats met duidelijke uitleg, spreekopdrachten en persoonlijke feedback."],
  ["Welke niveaus geef je?", "Van A0 tot en met B2, inclusief beginners, halfgevorderden en examentraining."],
  ["Geef je ook privelessen?", "Ja. Privelessen duren 60 minuten en kosten €40 per les."],
  ["Kan ik inburgeringslessen volgen?", "Ja. De lessen kunnen gericht worden op inburgering en praktische communicatie."],
  ["Welke talen spreek je?", "De uitleg kan in Farsi, Engels en Nederlands."],
  ["Hoe meld ik me aan?", "Stuur een e-mail of bericht via Instagram of Telegram. Daarna bespreken we je niveau en doel."],
  ["Welke boeken gebruiken jullie?", "Onder andere Nederlands in gang, In Zicht en De Finale, afhankelijk van je niveau."]
];

const blogPosts = [
  ["5 manieren om sneller Nederlands te spreken", "Begin met korte dagelijkse zinnen, oefen hardop en focus op situaties die je echt gebruikt."],
  ["Hoe bereid je je voor op inburgering?", "Maak een vast schema, oefen alle vaardigheden en leer woorden in context."],
  ["Waarom grammatica makkelijker wordt met voorbeelden", "Regels blijven beter hangen wanneer je ze meteen gebruikt in echte zinnen."]
];

function App() {
  const [lang, setLang] = useState("nl");
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookies, setCookies] = useState(() => localStorage.getItem("nahid-cookies") === "accepted");
  const t = content[lang];
  const isRtl = languages[lang].dir === "rtl";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = languages[lang].dir;
  }, [lang]);

  const pages = useMemo(
    () => [
      ...navKeys.map((key, index) => ({ key, label: t.nav[index] })),
      ...legalKeys.map((key, index) => ({ key, label: t.legal[index] }))
    ],
    [t]
  );

  useEffect(() => {
    if (!cookies || gaMeasurementId.includes("XXXXXXXXXX")) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaMeasurementId);
    return () => script.remove();
  }, [cookies]);

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
        {page === "home" && <Home t={t} go={go} />}
        {page === "about" && <About t={t} />}
        {page === "courses" && <Courses t={t} />}
        {page === "integration" && <Integration t={t} />}
        {page === "private" && <PrivateLessons t={t} />}
        {page === "faq" && <FaqPage t={t} />}
        {page === "blog" && <Blog t={t} />}
        {page === "contact" && <Contact t={t} />}
        {page === "privacy" && <Legal title={t.privacyTitle} text={t.privacyText} />}
        {page === "terms" && <Legal title={t.termsTitle} text={t.termsText} />}
      </main>
      <Footer t={t} go={go} pages={pages} />
      {!cookies && <CookieBanner t={t} onAccept={acceptCookies} />}
      <noscript>Google Analytics placeholder: replace {gaMeasurementId} after deployment.</noscript>
    </div>
  );
}

function Header({ t, lang, setLang, page, go, menuOpen, setMenuOpen }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => go("home")} aria-label="Nahid Taalschool home">
        <span className="brand-mark">N</span>
        <span>
          <strong>Nahid Taalschool</strong>
          <small>Leer Nederlands met zelfvertrouwen</small>
        </span>
      </button>
      <nav className="desktop-nav" aria-label="Main navigation">
        {t.nav.slice(0, 6).map((item, index) => (
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

function Home({ t, go }) {
  return (
    <>
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
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-media">
          <img src="/dutch-lessons-hero.png" alt="Online Nederlandse lessen" />
        </div>
      </section>
      <Benefits t={t} />
      <CoursesPreview t={t} go={go} />
      <section className="band split">
        <div>
          <p className="kicker"><ShieldCheck size={18} /> Nahid Taalschool</p>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </div>
        <ul className="check-list">
          {t.aboutPoints.map((point) => <li key={point}><Check size={18} />{point}</li>)}
        </ul>
      </section>
      <Gallery t={t} />
      <Reviews t={t} />
    </>
  );
}

function Benefits({ t }) {
  const icons = [MessageCircle, BookOpen, Sparkles];
  return (
    <section className="section">
      <div className="section-head">
        <p className="kicker"><GraduationCap size={18} /> NT2 Online</p>
        <h2>{t.benefitsTitle}</h2>
      </div>
      <div className="feature-grid">
        {t.benefits.map(([title, text], index) => {
          const Icon = icons[index];
          return (
            <article className="feature-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CoursesPreview({ t, go }) {
  return (
    <section className="section courses-preview">
      <div className="section-head">
        <h2>{t.coursesTitle}</h2>
        <p>{t.coursesIntro}</p>
      </div>
      <div className="course-grid compact">
        {courseData.slice(0, 3).map((course) => <CourseCard key={course[0]} course={course} />)}
      </div>
      <button className="primary centered" onClick={() => go("courses")}>{t.primaryCta}<ArrowRight size={18} /></button>
    </section>
  );
}

function Courses({ t }) {
  return (
    <section className="page section">
      <div className="section-head">
        <p className="kicker"><BookOpen size={18} /> A0 - B2</p>
        <h1>{t.coursesTitle}</h1>
        <p>{t.coursesIntro}</p>
      </div>
      <div className="course-grid">
        {courseData.map((course) => <CourseCard key={course[0]} course={course} />)}
        <article className="course-card highlighted">
          <span>{t.privateTitle}</span>
          <h3>Privelessen Nederlands</h3>
          <p>60 minuten</p>
          <strong>€40 per les</strong>
        </article>
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <span>{course[0]}</span>
      <h3>{course[1]}</h3>
      <p>{course[2]} - {course[3]}</p>
      <strong>{course[4]}</strong>
    </article>
  );
}

function About({ t }) {
  return (
    <section className="page band split">
      <div>
        <p className="kicker"><Users size={18} /> Persoonlijke begeleiding</p>
        <h1>{t.aboutTitle}</h1>
        <p>{t.aboutText}</p>
      </div>
      <ul className="check-list">
        {t.aboutPoints.map((point) => <li key={point}><Check size={18} />{point}</li>)}
      </ul>
    </section>
  );
}

function Integration({ t }) {
  return <TextPage icon={<GraduationCap size={20} />} title={t.integrationTitle} text={t.integrationText} />;
}

function PrivateLessons({ t }) {
  return <TextPage icon={<Sparkles size={20} />} title={t.privateTitle} text={t.privateText} extra="60 minuten - €40 per les" />;
}

function TextPage({ icon, title, text, extra }) {
  return (
    <section className="page section text-page">
      <p className="kicker">{icon} Online begeleiding</p>
      <h1>{title}</h1>
      <p>{text}</p>
      {extra && <strong className="price-pill">{extra}</strong>}
    </section>
  );
}

function FaqPage({ t }) {
  return (
    <section className="page section">
      <div className="section-head">
        <h1>{t.faqTitle}</h1>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer]) => <FaqItem key={question} question={question} answer={answer} />)}
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

function Blog({ t }) {
  return (
    <section className="page section">
      <div className="section-head">
        <h1>{t.blogTitle}</h1>
        <p>{t.blogIntro}</p>
      </div>
      <div className="feature-grid">
        {blogPosts.map(([title, text]) => (
          <article className="feature-card" key={title}>
            <BookOpen size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section className="page section contact-section">
      <div className="section-head">
        <h1>{t.contactTitle}</h1>
        <p>{t.contactText}</p>
      </div>
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${t.email}`}><Mail size={24} /><span>{t.email}</span></a>
        <a className="contact-card" href={socialLinks.instagram}><Instagram size={24} /><span>Instagram</span></a>
        <a className="contact-card" href={socialLinks.telegram}><MessageCircle size={24} /><span>Telegram</span></a>
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

function Reviews({ t }) {
  return (
    <section className="band reviews">
      <p className="kicker"><Sparkles size={18} /> {t.reviewsTitle}</p>
      <h2>{t.reviewsTitle}</h2>
      <p>{t.reviewsText}</p>
    </section>
  );
}

function Legal({ title, text }) {
  return (
    <section className="page section text-page">
      <h1>{title}</h1>
      <p>{text}</p>
      <p>KvK: 97121908<br />BTW: NL005249616B95</p>
    </section>
  );
}

function Footer({ t, go, pages }) {
  return (
    <footer className="footer">
      <div>
        <strong>Nahid Taalschool</strong>
        <p>Online Nederlandse lessen voor anderstaligen.</p>
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
