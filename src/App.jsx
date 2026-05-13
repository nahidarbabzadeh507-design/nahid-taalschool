import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  BookOpenText,
  CheckCircle2,
  Clock3,
  Globe2,
  GraduationCap,
  HelpCircle,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Star,
  Users,
  FileText,
  UserRound,
  X,
} from "lucide-react";

const content = {
  fa: {
    nav: { home: "خانه", about: "درباره من", courses: "دوره‌ها", inburgering: "Inburgering", blog: "وبلاگ", faq: "سوالات", contact: "تماس" },
    cta: "شروع ثبت‌نام / اطلاعات بیشتر",
    heroTag: "کلاس‌های آنلاین زبان هلندی برای هدف واقعی",
    heroTitle: "هلندی را طوری یاد بگیرید که واقعاً بتوانید از آن استفاده کنید",
    heroText:
      "کلاس‌ها بر پایه‌ی مکالمه، واژگان کاربردی، گرامر قابل فهم و مسیر مشخص برای پیشرفت طراحی شده‌اند. هدف من فقط گذراندن کتاب نیست؛ هدف این است که شما با اعتمادبه‌نفس صحبت کنید، بهتر در هلند جا بیفتید و نتیجه‌ی واقعی ببینید.",
    heroButtons: { courses: "مشاهده دوره‌ها", contact: "ارتباط با من" },
    heroBullets: [
      "تدریس با توضیح فارسی، انگلیسی و هلندی",
      "مناسب برای کار، تحصیل و inburgering",
      "کلاس خصوصی و گروهی",
    ],
    stats: [
      ["۶ سطح آموزشی", "از A0 تا B2"],
      ["آنلاین", "از هرجا قابل دسترسی"],
      ["محتوای شخصی", "متناسب با هدف شما"],
    ],
    aboutTitle: "درباره من",
    aboutText: [
      "من Nahid Arbabzadeh هستم. دانشجوی رشته‌ی Commercial Economics هستم و حدود چهار سال پیش به هلند آمدم. چون خودم مسیر یادگیری زبان را با سرعت و پشتکار طی کردم، حالا می‌خواهم تجربه‌ام را با شما به اشتراک بگذارم تا شما هم سریع‌تر و با اعتمادبه‌نفس بیشتر پیشرفت کنید.",
      "من به زبان انگلیسی هم مسلط هستم و همین باعث می‌شود بتوانم گرامر هلندی را خیلی روشن‌تر توضیح بدهم. خیلی از ساختارهای هلندی برای فارسی‌زبان‌ها عجیب به‌نظر می‌رسند، اما وقتی با انگلیسی مقایسه می‌شوند، درکشان راحت‌تر می‌شود. همچنین تجربه‌ی تدریس زبان انگلیسی و درس‌های دیگر مثل فیزیک را هم داشته‌ام.",
      "روش من ترکیبی از پیش رفتن با کتاب، تمرین‌های مکمل، توضیح شخصی‌سازی‌شده و پاسخ‌گویی کوتاه در اینستاگرام و تلگرام است. من دوست دارم زبان‌آموز فقط درس نخواند؛ بلکه واقعاً بتواند از زبان استفاده کند.",
    ],
    aboutHighlights: [
      "تدریس با توضیح فارسی، انگلیسی و هلندی",
      "تمرکز بر speaking و اعتمادبه‌نفس",
      "گروه‌های کوچک و برنامه‌ی منعطف",
      "پشتیبانی کوتاه خارج از کلاس در Instagram و Telegram",
      "تمرین‌های اضافی متناسب با سطح و هدف",
    ],
    featuresTitle: "چرا این کلاس‌ها متفاوت‌اند؟",
    featuresIntro: "آنچه زبان‌آموزان دریافت می‌کنند",
    features: [
      { title: "مکالمه‌محور", text: "از همان جلسه اول، زبان‌آموز را وارد صحبت کردن می‌کنم تا اعتمادبه‌نفس واقعی شکل بگیرد." },
      { title: "واژگان با ترجمه فارسی", text: "واژگان هر جلسه با ترجمه و مثال‌های واضح کار می‌شوند تا یادگیری سریع‌تر و عمیق‌تر باشد." },
      { title: "گرامر ساده و دقیق", text: "گرامر را فقط حفظ نمی‌کنیم؛ آن را با مثال، تمرین و توضیح کاربردی تبدیل به مهارت می‌کنیم." },
      { title: "برنامه شخصی‌سازی‌شده", text: "سطح، هدف و سرعت هر زبان‌آموز را در برنامه درس لحاظ می‌کنم تا زمان هدر نرود." },
    ],
    shortBenefits: [
      ["تمرکز بر مکالمه", "از جلسه‌ی اول"],
      ["واژگان با ترجمه فارسی", "برای یادگیری سریع‌تر"],
      ["گرامر قابل فهم", "به‌صورت کاربردی"],
      ["پیشرفت قابل پیگیری", "با برنامه و بازخورد"],
    ],
    courseHeading: "دوره‌ها و شهریه‌ها",
    courseSub: "مسیر آموزشی برای زبان‌آموزانی که می‌خواهند از سطح پایه تا B2 با نظم، تمرین و محتوای هدفمند پیشرفت کنند.",
    courseFooter: "دوره‌ها می‌توانند با توجه به هدف شما شخصی‌سازی شوند.",
    courseCards: [
      { level: "A0 → A1", title: "شروعی مطمئن برای زبان هلندی", price: "€130", duration: "12 جلسه · هر جلسه 90 دقیقه · هفته‌ای 1 جلسه", book: "Nederlands in gang", points: ["پایه‌سازی از صفر", "مکالمه‌های روزمره", "گرامر ساده و قابل فهم"] },
      { level: "A1 → A2", title: "تقویت و تثبیت مهارت‌ها", price: "€230", duration: "16 جلسه · هر جلسه 90 دقیقه", book: "Nederlands in gang (بخش دوم)", points: ["واژگان کاربردی بیشتر", "شنیداری و جمله‌سازی", "آمادگی برای A2"] },
      { level: "B1-1", title: "نیمه اول سطح B1", price: "€300", duration: "18 جلسه · هر جلسه 90 دقیقه · 1 تا 2 جلسه در هفته", book: "In Zicht", points: ["مکالمه روان‌تر", "درک متن و گرامر", "اعتمادبه‌نفس در صحبت کردن"] },
      { level: "B1-2", title: "نیمه دوم سطح B1", price: "€350", duration: "18 جلسه · هر جلسه 90 دقیقه · 1 تا 2 جلسه در هفته", book: "In Zicht", points: ["واژگان پیشرفته‌تر", "تمرین‌های عمیق‌تر", "آمادگی برای B1 کامل"] },
      { level: "B2-1", title: "نیمه اول سطح B2", price: "€400", duration: "18 جلسه · هر جلسه 90 دقیقه", book: "De Finale", points: ["مکالمه حرفه‌ای", "تحلیل و استدلال", "آمادگی برای موقعیت‌های رسمی"] },
      { level: "B2-2", title: "نیمه دوم سطح B2", price: "€450", duration: "18 جلسه · هر جلسه 90 دقیقه", book: "De Finale", points: ["سطح بالاتر از مکالمه", "دقت بیشتر در نوشتار", "آمادگی بهتر برای کار و تحصیل"] },
    ],
    methodTitle: "روش تدریس",
    methodText:
      "کلاس‌ها فقط مرور کتاب نیستند. هر جلسه با هدف مشخص طراحی می‌شود: ابتدا واژگان، بعد مکالمه، سپس گرامر، و در پایان تمرین و بازخورد. این مدل باعث می‌شود زبان‌آموز هم بهتر بفهمد و هم بهتر صحبت کند.",
    processSteps: [
      ["01", "تعیین سطح و هدف", "اول مشخص می‌کنیم زبان‌آموز الان کجاست و دقیقاً برای چه هدفی درس می‌گیرد."],
      ["02", "برنامه آموزشی روشن", "برای هر سطح، مسیر درس، کتاب، تعداد جلسات و تمرکز اصلی از قبل مشخص می‌شود."],
      ["03", "تمرین، بازخورد و پیشرفت", "هر جلسه با تمرین هدفمند و بازخورد دقیق همراه است تا پیشرفت قابل مشاهده باشد."],
    ],
    whoTitle: "برای چه کسانی مناسب است؟",
    whoItems: [
      "کسانی که می‌خواهند برای زندگی در هلند آماده شوند",
      "افرادی که مکالمه برایشان سخت است",
      "زبان‌آموزانی که به آمادگی آزمون نیاز دارند",
      "افرادی که می‌خواهند در کار و زندگی روزمره بهتر صحبت کنند",
    ],
    trustTitle: "چه چیزهایی را در کلاس‌ها دریافت می‌کنید؟",
    trustItems: ["پشتیبانی از طریق Instagram و Telegram", "تمرکز روی speaking و درک واقعی زبان", "گروه‌های کوچک و فضای صمیمی", "تمرین‌های مکمل و شخصی‌سازی‌شده", "پیشرفت سریع‌تر با مسیر آموزشی شفاف"],
    inburgeringTitle: "Inburgering و آمادگی آزمون",
    inburgeringText:
      "برای inburgering، آمادگی آزمون، و موضوعات خاص مثل کار، زندگی روزمره و ادغام در جامعه، معمولاً کلاس خصوصی بهترین گزینه است. در این جلسات بیشتر روی نیاز دقیق شما کار می‌کنیم تا آمادگی‌تان سریع‌تر و هدفمندتر شود.",
    blogTitle: "وبلاگ / نکات آموزشی",
    blogItems: ["تفاوت‌های مهم بین هلندی و فارسی در گرامر", "واژگان کاربردی برای زندگی در هلند", "چطور سریع‌تر برای speaking آماده شویم"],
    faqTitle: "سوالات متداول",
    faqs: [
      ["آیا کلاس‌ها آنلاین هستند؟", "بله، تمام کلاس‌ها به‌صورت آنلاین برگزار می‌شوند و برای افراد داخل و خارج از هلند مناسب‌اند."],
      ["آیا کلاس خصوصی هم دارید؟", "بله، کلاس خصوصی و در بعضی موارد نیمه‌خصوصی قابل تنظیم است و بر اساس نیاز زبان‌آموز برنامه‌ریزی می‌شود."],
      ["از چه کتاب‌هایی استفاده می‌کنید؟", "بسته به سطح، از Nederlands in gang، In Zicht و De Finale استفاده می‌شود."],
      ["آیا برای آمادگی آزمون هم کار می‌کنید؟", "بله، تمرین مکالمه، واژگان، گرامر و نمونه‌سؤال می‌تواند برای آمادگی آزمون هم تنظیم شود."],
    ],
    finalTitle: "آماده شروع هستید؟",
    finalText: "اگر هدفتان مکالمه بهتر، آمادگی آزمون، یا یادگیری منظم و حرفه‌ای است، می‌توانیم از همین هفته شروع کنیم.",
    finalButtons: { email: "ایمیل", instagram: "Instagram", telegram: "Telegram" },
    footer: "طراحی برای تجربه حرفه‌ای، ساده، گرم و نتیجه‌محور",
  },
  en: {
    nav: { home: "Home", about: "About", courses: "Courses", inburgering: "Inburgering", blog: "Blog", faq: "FAQ", contact: "Contact" },
    cta: "Contact & Enrollment",
    heroTag: "Online Dutch lessons with a real goal",
    heroTitle: "Learn Dutch in a way you can actually use",
    heroText:
      "Each lesson is built around conversation, practical vocabulary, clear grammar, and a structured path to progress. The goal is not just finishing a book; the goal is confidence in speaking and measurable results.",
    heroButtons: { courses: "View courses", contact: "Contact me" },
    heroBullets: ["Taught in Persian, English, and Dutch", "Ideal for work, study, and inburgering", "Private and group lessons available"],
    stats: [["6 levels", "From A0 to B2"], ["Online", "Accessible from anywhere"], ["Personal content", "Built around your goals"]],
    aboutTitle: "About me",
    aboutText: [
      "My name is Nahid Arbabzadeh. I study Commercial Economics and arrived in the Netherlands about four years ago. Because I learned Dutch through my own experience and a fast, consistent routine, I now want to share that experience with my students so they can progress faster and with more confidence.",
      "I also speak English well, which helps me explain Dutch grammar more clearly. Many Dutch structures feel strange for Persian speakers, but when we compare them with English, they become much easier to understand. I also have teaching experience in English and other subjects such as physics.",
      "My method combines the book, extra exercises, personalized explanation, and short support through Instagram and Telegram. I want students not only to study Dutch, but to actually use it in real life.",
    ],
    aboutHighlights: ["Teaching in Persian, English, and Dutch", "Speaking confidence first", "Small groups and flexible scheduling", "Short support outside class via Instagram and Telegram", "Extra exercises matched to level and goal"],
    featuresTitle: "What makes these lessons different?",
    featuresIntro: "What students receive",
    features: [
      { title: "Conversation-first", text: "From the first lesson, students are encouraged to speak so real confidence can grow." },
      { title: "Vocabulary with Persian translation", text: "Every lesson includes useful vocabulary with translation and clear examples for faster, deeper learning." },
      { title: "Simple, accurate grammar", text: "Grammar is not just memorized; it becomes a skill through examples, practice, and practical explanation." },
      { title: "Personalized planning", text: "Each student’s level, goal, and pace are included in the plan so time is not wasted." },
    ],
    shortBenefits: [["Conversation focus", "From day one"], ["Vocabulary with Persian translation", "Faster learning"], ["Clear grammar", "Practical and usable"], ["Trackable progress", "With structure and feedback"]],
    courseHeading: "Courses & Pricing",
    courseSub: "A learning path for students who want to progress from beginner to B2 with structure, practice, and purposeful content.",
    courseFooter: "Course details can be adjusted to your level and goals.",
    courseCards: [
      { level: "A0 → A1", title: "A confident start to Dutch", price: "€130", duration: "12 lessons · 90 minutes each · 1 lesson per week", book: "Nederlands in gang", points: ["Build foundations from zero", "Everyday conversations", "Simple, understandable grammar"] },
      { level: "A1 → A2", title: "Strengthen and consolidate skills", price: "€230", duration: "16 lessons · 90 minutes each", book: "Nederlands in gang (part 2)", points: ["More practical vocabulary", "Listening and sentence building", "Preparation for A2"] },
      { level: "B1-1", title: "First half of B1", price: "€300", duration: "18 lessons · 90 minutes each · 1–2 lessons per week", book: "In Zicht", points: ["More fluent conversation", "Reading and grammar understanding", "Confidence in speaking"] },
      { level: "B1-2", title: "Second half of B1", price: "€350", duration: "18 lessons · 90 minutes each · 1–2 lessons per week", book: "In Zicht", points: ["More advanced vocabulary", "Deeper exercises", "Preparation for full B1"] },
      { level: "B2-1", title: "First half of B2", price: "€400", duration: "18 lessons · 90 minutes each", book: "De Finale", points: ["Professional conversation", "Analysis and argumentation", "Preparation for formal situations"] },
      { level: "B2-2", title: "Second half of B2", price: "€450", duration: "18 lessons · 90 minutes each", book: "De Finale", points: ["Higher-level speaking", "More accurate writing", "Better preparation for work and study"] },
    ],
    methodTitle: "Teaching method",
    methodText:
      "Lessons are not just book reviews. Every session is designed with a clear purpose: first vocabulary, then conversation, then grammar, and finally practice and feedback. This helps students understand better and speak better.",
    processSteps: [["01", "Level & goal", "We first determine where the student is now and what exactly they are studying for."], ["02", "Clear learning plan", "For each level, the route, book, number of lessons, and main focus are defined in advance."], ["03", "Practice, feedback & progress", "Every lesson includes targeted practice and precise feedback so progress is visible."]],
    whoTitle: "Who is it for?",
    whoItems: ["People preparing for life in the Netherlands", "Learners who struggle with speaking", "Students who need exam preparation", "People who want to speak better at work and in daily life"],
    trustTitle: "Why students choose this school",
    trustItems: ["Support via Instagram and Telegram", "Speaking and real understanding first", "Small groups and a friendly atmosphere", "Extra exercises tailored to the goal", "Faster progress with a clear roadmap"],
    inburgeringTitle: "Inburgering & exam preparation",
    inburgeringText: "For inburgering, exam preparation, and specific goals such as work, daily life, or integration, private lessons are usually the best choice. In these sessions we focus on your exact needs so preparation becomes faster and more targeted.",
    blogTitle: "Blog / learning tips",
    blogItems: ["Key grammar differences between Dutch and Persian", "Practical Dutch vocabulary for daily life in the Netherlands", "How to prepare faster for speaking"],
    faqTitle: "Frequently asked questions",
    faqs: [["Are the lessons online?", "Yes, all lessons are online and suitable for students inside and outside the Netherlands."], ["Do you offer private lessons?", "Yes, private lessons and sometimes semi-private lessons can be arranged based on the student’s needs."], ["Which books do you use?", "Depending on the level, I use Nederlands in gang, In Zicht, and De Finale."], ["Do you also prepare students for exams?", "Yes, conversation, vocabulary, grammar, and sample questions can be tailored for exam preparation."]],
    finalTitle: "Ready to begin?",
    finalText: "If your goal is better speaking, exam preparation, or structured professional learning, we can start this week.",
    finalButtons: { email: "Email", instagram: "Instagram", telegram: "Telegram" },
    footer: "Designed for a professional, simple, warm, and results-driven experience",
  },
  nl: {
    nav: { home: "Home", about: "Over mij", courses: "Cursussen", inburgering: "Inburgering", blog: "Blog", faq: "FAQ", contact: "Contact" },
    cta: "Contact & Inschrijven",
    heroTag: "Online Nederlandse lessen met een duidelijk doel",
    heroTitle: "Leer Nederlands op een manier die je echt kunt gebruiken",
    heroText:
      "Elke les is opgebouwd rond conversatie, praktische woordenschat, duidelijke grammatica en een gestructureerd groeipad. Het doel is niet alleen een boek afronden; het doel is zelfvertrouwen in spreken en meetbare vooruitgang.",
    heroButtons: { courses: "Bekijk cursussen", contact: "Neem contact op" },
    heroBullets: ["Les in het Perzisch, Engels en Nederlands", "Ideaal voor werk, studie en inburgering", "Privé- en groepslessen mogelijk"],
    stats: [["6 niveaus", "Van A0 tot B2"], ["Online", "Vanaf elke locatie"], ["Persoonlijk materiaal", "Afgestemd op jouw doel"]],
    aboutTitle: "Over mij",
    aboutText: [
      "Mijn naam is Nahid Arbabzadeh. Ik studeer Commerciële Economie en ben ongeveer vier jaar geleden naar Nederland gekomen. Omdat ik zelf het Nederlands snel en gestructureerd heb geleerd, wil ik die ervaring nu doorgeven aan mijn studenten zodat zij sneller en met meer vertrouwen vooruitgang kunnen boeken.",
      "Ik spreek ook Engels, en dat helpt om de grammatica van het Nederlands duidelijker uit te leggen. Veel Nederlandse structuren voelen voor Perzischsprekers vreemd aan, maar wanneer je ze vergelijkt met het Engels, worden ze vaak veel begrijpelijker. Ik heb ook ervaring met het lesgeven van Engels en andere vakken zoals natuurkunde.",
      "Mijn methode bestaat uit het volgen van een boek, extra oefeningen op niveau en doel, en korte ondersteuning via Instagram en Telegram. Ik wil dat studenten niet alleen leren, maar ook echt durven spreken en de taal in het dagelijks leven gebruiken.",
    ],
    aboutHighlights: ["Uitleg in het Perzisch, Engels en Nederlands", "Focus op spreken en zelfvertrouwen", "Kleine groepen en flexibel rooster", "Korte ondersteuning buiten de les via Instagram en Telegram", "Extra oefeningen op niveau en doel"],
    featuresTitle: "Waarom deze lessen anders zijn",
    featuresIntro: "Wat studenten krijgen",
    features: [
      { title: "Gespreksgericht", text: "Vanaf de eerste les wordt de student actief aan het spreken gezet, zodat echt zelfvertrouwen groeit." },
      { title: "Woordenschat met Farsi-vertaling", text: "Elke les bevat bruikbare woordenschat met vertaling en duidelijke voorbeelden voor sneller en dieper leren." },
      { title: "Eenvoudige en precieze grammatica", text: "Grammatica wordt niet alleen uit het hoofd geleerd; het wordt een vaardigheid door voorbeelden, oefening en duidelijke uitleg." },
      { title: "Persoonlijke planning", text: "Niveau, doel en tempo van elke student worden meegenomen in het plan, zodat tijd niet verloren gaat." },
    ],
    shortBenefits: [["Focus op spreken", "Vanaf de eerste les"], ["Woordenschat met Farsi-vertaling", "Sneller leren"], ["Duidelijke grammatica", "Praktisch en bruikbaar"], ["Meetbare vooruitgang", "Met structuur en feedback"]],
    courseHeading: "Cursussen & tarieven",
    courseSub: "Een leerpad voor studenten die met structuur, oefening en doelgerichte inhoud willen doorgroeien van beginner tot B2.",
    courseFooter: "De inhoud van de cursus kan worden aangepast aan jouw niveau en doelen.",
    courseCards: [
      { level: "A0 → A1", title: "Een zelfverzekerde start met Nederlands", price: "€130", duration: "12 lessen · 90 minuten per les · 1 les per week", book: "Nederlands in gang", points: ["Basis vanaf nul opbouwen", "Dagelijkse gesprekken", "Simpele, duidelijke grammatica"] },
      { level: "A1 → A2", title: "Vaardigheden versterken en vastzetten", price: "€230", duration: "16 lessen · 90 minuten per les", book: "Nederlands in gang (deel 2)", points: ["Meer praktische woordenschat", "Luisteren en zinnen maken", "Voorbereiding op A2"] },
      { level: "B1-1", title: "Eerste helft van B1", price: "€300", duration: "18 lessen · 90 minuten per les · 1–2 lessen per week", book: "In Zicht", points: ["Vlotter spreken", "Lezen en grammatica begrijpen", "Zelfvertrouwen in gesprekken"] },
      { level: "B1-2", title: "Tweede helft van B1", price: "€350", duration: "18 lessen · 90 minuten per les · 1–2 lessen per week", book: "In Zicht", points: ["Meer gevorderde woordenschat", "Diepere oefeningen", "Voorbereiding op volledig B1"] },
      { level: "B2-1", title: "Eerste helft van B2", price: "€400", duration: "18 lessen · 90 minuten per les", book: "De Finale", points: ["Professioneler spreken", "Analyseren en argumenteren", "Voorbereiding op formele situaties"] },
      { level: "B2-2", title: "Tweede helft van B2", price: "€450", duration: "18 lessen · 90 minuten per les", book: "De Finale", points: ["Hoger niveau spreken", "Nauwkeuriger schrijven", "Betere voorbereiding op werk en studie"] },
    ],
    methodTitle: "Lesmethode",
    methodText:
      "De lessen zijn niet alleen een herhaling van het boek. Elke sessie heeft een duidelijk doel: eerst woordenschat, dan conversatie, daarna grammatica, en aan het einde oefening en feedback. Zo begrijpt de student beter én spreekt hij of zij beter.",
    processSteps: [["01", "Niveau & doel", "We bepalen eerst waar de student nu staat en waarvoor hij of zij precies leert."], ["02", "Duidelijk leerplan", "Voor elk niveau zijn route, boek, aantal lessen en hoofdfocus vooraf vastgelegd."], ["03", "Oefenen, feedback & groei", "Elke les bevat gerichte oefening en precieze feedback zodat vooruitgang zichtbaar wordt."]],
    whoTitle: "Voor wie is dit geschikt?",
    whoItems: ["Mensen die zich voorbereiden op leven in Nederland", "Studenten die spreken lastig vinden", "Leerlingen die examenvoorbereiding nodig hebben", "Mensen die beter willen spreken op werk en in het dagelijks leven"],
    trustTitle: "Wat studenten belangrijk vinden",
    trustItems: ["Ondersteuning via Instagram en Telegram", "Spreken en echt begrip eerst", "Kleine groepen en een warme sfeer", "Extra oefeningen op maat", "Snellere vooruitgang met een duidelijke route"],
    inburgeringTitle: "Inburgering & examenvoorbereiding",
    inburgeringText:
      "Voor inburgering, examenvoorbereiding en specifieke doelen zoals werk, dagelijks leven of integratie zijn privélessen meestal de beste keuze. In die lessen richten we ons op jouw exacte behoeften, zodat de voorbereiding sneller en gerichter verloopt.",
    blogTitle: "Blog / leertips",
    blogItems: ["Belangrijke grammatica-verschillen tussen Nederlands en Perzisch", "Praktische Nederlandse woordenschat voor het dagelijks leven in Nederland", "Hoe je sneller kunt voorbereiden op spreken"],
    faqTitle: "Veelgestelde vragen",
    faqs: [["Zijn de lessen online?", "Ja, alle lessen zijn online en geschikt voor studenten binnen en buiten Nederland."], ["Geef je ook privélessen?", "Ja, privélessen en soms semi-privélessen kunnen worden afgestemd op de behoefte van de student."], ["Welke boeken gebruik je?", "Afhankelijk van het niveau gebruik ik Nederlands in gang, In Zicht en De Finale."], ["Bereid je ook voor op examens?", "Ja, conversatie, woordenschat, grammatica en voorbeeldvragen kunnen worden afgestemd op examenvoorbereiding."]],
    finalTitle: "Klaar om te beginnen?",
    finalText: "Als jouw doel beter spreken, examenvoorbereiding of gestructureerd professioneel leren is, kunnen we deze week starten.",
    finalButtons: { email: "E-mail", instagram: "Instagram", telegram: "Telegram" },
    footer: "Ontworpen voor een professionele, eenvoudige, warme en resultaatgerichte ervaring",
  },
};

const locales = [
  { code: "fa", label: "فارسی" },
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
];

function SectionHeading({ label, title, text, align = "text-left" }) {
  return (
    <div className={align}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f5d7c]">{label}</p>
      <h2 className="mt-2 text-3xl font-black sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{text}</p> : null}
    </div>
  );
}

function SectionPill({ children }) {
  return <span className="rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200">{children}</span>;
}

export default function App() {
  const [lang, setLang] = useState("fa");
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useMemo(() => content[lang], [lang]);
  const isFa = lang === "fa";
  const textAlign = isFa ? "text-right" : "text-left";
  const dir = isFa ? "rtl" : "ltr";

  const navItems = [
    ["home", t.nav.home],
    ["about", t.nav.about],
    ["courses", t.nav.courses],
    ["inburgering", t.nav.inburgering],
    ["blog", t.nav.blog],
    ["faq", t.nav.faq],
    ["contact", t.nav.contact],
  ];

  return (
    <div dir={dir} className="min-h-screen bg-[#f6f3ef] text-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#2f5d7c]/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-[22rem] h-96 w-96 rounded-full bg-[#16324f]/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <a href="#home" className={`flex items-center gap-3 ${textAlign}`}>
            <img src="/nahid-logo.png" alt="Nahid Taalschool logo" className="h-12 w-12 rounded-2xl object-contain" />
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#2f5d7c]">Nahid Taalschool</p>
              <p className="text-xs text-slate-500">Online Dutch lessons · مکالمه‌محور · resultaatgericht</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-2xl bg-slate-100 p-1 md:flex">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${lang === l.code ? "bg-[#16324f] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:nani.taalschool.nl@gmail.com"
              className="hidden items-center gap-2 rounded-2xl bg-[#16324f] px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#22486b] md:inline-flex"
            >
              <Mail className="h-4 w-4" />
              {t.cta}
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <div className="mb-4 flex flex-wrap gap-2">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${lang === l.code ? "bg-[#16324f] text-white" : "bg-slate-100 text-slate-700"}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="grid gap-2 text-sm font-medium text-slate-700">
              {navItems.map(([href, label]) => (
                <a key={href} href={`#${href}`} onClick={() => setMobileOpen(false)} className="rounded-xl bg-slate-50 px-4 py-3">
                  {label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative overflow-hidden" id="home">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
          <div className={`relative ${textAlign}`}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2f5d7c]/15 bg-white px-4 py-2 text-sm font-medium text-[#2f5d7c] shadow-sm">
              <Sparkles className="h-4 w-4" />
              {t.heroTag}
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.heroText}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.heroBullets.map((item) => <SectionPill key={item}>{item}</SectionPill>)}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#courses" className="inline-flex items-center gap-2 rounded-2xl bg-[#16324f] px-5 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#22486b]">
                {t.heroButtons.courses}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-[#2f5d7c] hover:text-[#2f5d7c]">
                <UserRound className="h-4 w-4" />
                {t.heroButtons.contact}
              </a>
              <a href="https://t.me/Nahid_1301" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-[#2f5d7c] hover:text-[#2f5d7c]">
                <MessageCircle className="h-4 w-4" />
                {t.heroButtons.telegram}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.stats.map(([big, small]) => (
                <div key={big} className="rounded-3xl bg-white p-4 shadow-soft ring-1 ring-slate-200">
                  <div className="text-2xl font-black text-[#16324f]">{big}</div>
                  <div className="mt-1 text-sm text-slate-500">{small}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-slate-200">
              <img src="/nahid-photo.jpg" alt="Nahid Arbabzadeh" className="h-[360px] w-full object-cover object-center sm:h-[460px]" />
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#dfeaf2] p-3 text-[#16324f]"><Star className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm text-slate-500">Professional, warm, and practical</p>
                    <h2 className="text-xl font-bold">Friendly guidance with a clear learning path</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className={`grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start ${textAlign}`}>
          <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <img src="/nahid-photo.jpg" alt="Nahid Arbabzadeh portrait" className="h-[380px] w-full rounded-[1.5rem] object-cover object-center" />
          </div>
          <div>
            <SectionHeading label={t.nav.about} title={t.aboutTitle} />
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              {t.aboutText.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.aboutHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.shortBenefits.map(([title, subtitle]) => (
            <div key={title} className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-slate-200">
              <div className="font-bold text-slate-900">{title}</div>
              <div className="mt-1 text-sm text-slate-500">{subtitle}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <SectionHeading label={t.nav.courses} title={t.courseHeading} text={t.courseSub} />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.courseCards.map((course) => (
            <article key={course.level} className="group rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex rounded-full bg-[#dfeaf2] px-3 py-1 text-sm font-bold text-[#16324f]">{course.level}</div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{course.title}</h3>
                </div>
                <div className="rounded-2xl bg-[#16324f] px-4 py-2 text-lg font-black text-white">{course.price}</div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500"><Clock3 className="h-4 w-4" />{course.duration}</div>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500"><BookOpen className="h-4 w-4" />{lang === "nl" ? "Boek" : lang === "en" ? "Book" : "کتاب"}: {course.book}</div>
              <ul className="mt-5 space-y-3">
                {course.points.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className={`mt-6 text-sm text-slate-500 ${textAlign}`}>{t.courseFooter}</p>
      </section>

      <section id="method" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
          <div className={`grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start ${textAlign}`}>
            <div>
              <SectionHeading label={t.nav.home} title={t.methodTitle} text={t.methodText} />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {t.processSteps.map(([step, title, text]) => (
                <div key={step} className="rounded-[2rem] bg-[#f6f3ef] p-6 ring-1 ring-slate-200">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#2f5d7c]">{step}</div>
                  <h3 className="mt-3 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inburgering" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#16324f] p-8 text-white shadow-soft">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-[#9ed0e6]" />
              <h2 className="text-2xl font-black">{t.inburgeringTitle}</h2>
            </div>
            <p className="mt-5 leading-8 text-white/90">{t.inburgeringText}</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <BookOpenText className="h-5 w-5 text-[#2f5d7c]" />
              <h3 className="text-2xl font-bold">{t.blogTitle}</h3>
            </div>
            <div className="mt-5 space-y-3">
              {t.blogItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <FileText className="mt-0.5 h-5 w-5 flex-none text-[#2f5d7c]" />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <HelpCircle className="h-5 w-5 text-[#2f5d7c]" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f5d7c]">FAQ</p>
        </div>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">{t.faqTitle}</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {t.faqs.map(([q, a]) => (
            <details key={q} className="group rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <summary className="cursor-pointer list-none text-lg font-bold text-slate-900">{q}</summary>
              <p className="mt-4 leading-8 text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#16324f] to-[#2f5d7c] p-8 text-white shadow-soft lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">{t.finalTitle}</h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/90">{t.finalText}</p>
              <p className="mt-4 text-sm text-white/70">برای اطلاعات بیشتر، زمان شروع کلاس‌ها و ثبت‌نام، پیام بدهید.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href="mailto:nani.taalschool.nl@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-[#16324f] transition hover:-translate-y-0.5">
                <Mail className="h-4 w-4" />
                {t.finalButtons.email}
              </a>
              <a href="https://instagram.com/nahid_taalles" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15">
                <MessageCircle className="h-4 w-4" />
                {t.finalButtons.instagram}
              </a>
              <a href="https://t.me/Nahid_1301" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15">
                <MessageCircle className="h-4 w-4" />
                {t.finalButtons.telegram}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-[#2f5d7c]" />
              <h3 className="text-xl font-bold">Persoonlijke begeleiding</h3>
            </div>
            <p className="mt-4 leading-7 text-slate-600">
              Geen standaard lessen zonder aandacht. Iedere student krijgt begeleiding op basis van niveau, doel en tempo.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <Globe2 className="h-5 w-5 text-[#2f5d7c]" />
              <h3 className="text-xl font-bold">Praktisch & begrijpelijk</h3>
            </div>
            <p className="mt-4 leading-7 text-slate-600">
              Moeilijke grammatica wordt uitgelegd op een simpele manier met voorbeelden in Farsi en Engels wanneer nodig.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[#2f5d7c]" />
              <h3 className="text-xl font-bold">Snellere vooruitgang</h3>
            </div>
            <p className="mt-4 leading-7 text-slate-600">
              Door structuur, speaking, herhaling en persoonlijke oefeningen maken studenten sneller echte vooruitgang.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className={`mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 ${textAlign}`}>
          <div>
            <p>© {new Date().getFullYear()} Nahid Taalschool. Online Dutch lessons.</p>
            <p className="mt-1 text-xs text-slate-400">KVK: 97121908</p>
          </div>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
