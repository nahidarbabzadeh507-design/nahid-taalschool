import React from "react";
import { Mail, MessageCircle, Instagram, Calendar, BookOpen, Video, Star, CheckCircle2, GraduationCap, Sparkles, Clock3 } from "lucide-react";

const courses = [
  {
    level: "A0 → A1",
    title: "شروعی مطمئن برای زبان هلندی",
    meta: "12 جلسه · هر جلسه 90 دقیقه · هفته‌ای 1 جلسه",
    price: "€130",
    book: "Nederlands in gang",
    highlights: [
      "یادگیری پایه‌ها از صفر",
      "تمرکز روی مکالمه روزمره",
      "گرامر ساده و قابل فهم",
    ],
  },
  {
    level: "A1 → A2",
    title: "تقویت زبان برای زندگی روزمره",
    meta: "16 جلسه · هر جلسه 90 دقیقه",
    price: "€230",
    book: "Nederlands in gang (بخش دوم)",
    highlights: [
      "گسترش دایره لغات",
      "مکالمه کاربردی و شنیداری",
      "آمادگی بهتر برای سطح A2",
    ],
  },
  {
    level: "B1-1",
    title: "نیمه اول سطح B1",
    meta: "18 جلسه · هر جلسه 90 دقیقه · 1 تا 2 جلسه در هفته",
    price: "€300",
    book: "In Zicht",
    highlights: [
      "مکالمه عمیق‌تر و روان‌تر",
      "درک بهتر متن و گرامر",
      "آمادگی برای ادامه سطح B1",
    ],
  },
  {
    level: "B1-2",
    title: "نیمه دوم سطح B1",
    meta: "18 جلسه · هر جلسه 90 دقیقه · 1 تا 2 جلسه در هفته",
    price: "€350",
    book: "In Zicht",
    highlights: [
      "تسلط بیشتر در صحبت کردن",
      "گرامر و واژگان پیشرفته‌تر",
      "اعتمادبه‌نفس در مکالمه",
    ],
  },
  {
    level: "B2-1",
    title: "نیمه اول سطح B2",
    meta: "18 جلسه · هر جلسه 90 دقیقه",
    price: "€400",
    book: "De Finale",
    highlights: [
      "مکالمه حرفه‌ای‌تر",
      "تحلیل متن و ایده‌ها",
      "آمادگی برای موقعیت‌های رسمی",
    ],
  },
  {
    level: "B2-2",
    title: "نیمه دوم سطح B2",
    meta: "18 جلسه · هر جلسه 90 دقیقه",
    price: "€450",
    book: "De Finale",
    highlights: [
      "پیشرفت به سطح بالا",
      "بحث و استدلال قوی‌تر",
      "آمادگی بهتر برای کار و تحصیل",
    ],
  },
];

const features = [
  "تمرکز بر مکالمه واقعی و کاربردی",
  "آموزش واژگان با ترجمه فارسی",
  "توضیح گرامر به زبان ساده و عمیق‌تر از کتاب",
  "کلاس‌های آنلاین و انعطاف‌پذیر",
  "مناسب برای مهاجرت، کار، تحصیل و آزمون",
];

const testimonials = [
  {
    text: "جلسات طوری طراحی شده‌اند که زبان‌آموز واقعاً شروع به صحبت کردن می‌کند، نه فقط حفظ کردن.",
    label: "تمرکز بر نتیجه",
  },
  {
    text: "هر درس با واژگان، مثال، تمرین و بازخورد مشخص همراه است تا پیشرفت قابل اندازه‌گیری باشد.",
    label: "روش آموزشی",
  },
  {
    text: "برنامه‌ها متناسب با سطح و هدف زبان‌آموز تنظیم می‌شوند تا زمان هدر نرود.",
    label: "شخصی‌سازی",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-slate-800" dir="rtl">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#16324f] to-[#2f5d7c] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white_0,_transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4" />
                آموزش آنلاین زبان هلندی
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-6xl">
                Nahid Taalschool
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                کلاس‌هایی هدفمند، حرفه‌ای و نتیجه‌محور برای یادگیری زبان هلندی از سطح پایه تا B2.
                تمرکز ما فقط روی کتاب نیست؛ روی مکالمه، واژگان کاربردی، گرامر قابل فهم و پیشرفت واقعی شماست.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:nani.taalschool.nl@gmail.com"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-[#16324f] shadow-lg transition hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" />
                  ثبت‌نام / اطلاعات بیشتر
                </a>
                <a
                  href="https://instagram.com/nahid_taalles"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href="https://t.me/Nahid_1301"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Telegram
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-[2rem] bg-white/10 p-6 backdrop-blur-md">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                  <p className="leading-7 text-white/95">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <Video className="h-5 w-5 text-[#2f5d7c]" />
              <h2 className="text-xl font-bold">کلاس‌های آنلاین</h2>
            </div>
            <p className="mt-4 leading-8 text-slate-600">
              همه کلاس‌ها به‌صورت آنلاین برگزار می‌شوند تا بتوانید از هرجا که هستید شرکت کنید.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-[#2f5d7c]" />
              <h2 className="text-xl font-bold">کتاب‌های اصلی</h2>
            </div>
            <p className="mt-4 leading-8 text-slate-600">
              Nederlands in gang · In Zicht · De Finale
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-[#2f5d7c]" />
              <h2 className="text-xl font-bold">ساختار منظم</h2>
            </div>
            <p className="mt-4 leading-8 text-slate-600">
              هر دوره برنامه‌ریزی مشخص، هدف‌دار و مناسب برای پیشرفت مرحله‌ای دارد.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">دوره‌ها و شهریه‌ها</h2>
            <p className="mt-2 text-slate-600">
              مسیر آموزشی از سطح پایه تا B2، همراه با تمرکز بر نتیجه واقعی و اعتمادبه‌نفس در مکالمه.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article key={course.level} className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex rounded-full bg-[#dfeaf2] px-3 py-1 text-sm font-bold text-[#16324f]">
                    {course.level}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{course.title}</h3>
                </div>
                <div className="rounded-2xl bg-[#16324f] px-4 py-2 text-lg font-bold text-white">
                  {course.price}
                </div>
              </div>

              <p className="mt-4 text-sm font-medium text-slate-500">{course.meta}</p>
              <p className="mt-2 text-sm text-slate-600">کتاب: {course.book}</p>

              <ul className="mt-5 space-y-3 text-slate-700">
                {course.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 leading-7">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold">روش تدریس</h2>
              <p className="mt-4 leading-8 text-slate-600">
                کلاس‌ها فقط مرور کتاب نیستند؛ هر جلسه ترکیبی از واژگان، مکالمه، گرامر، تمرین و بازخورد دقیق است.
                هدف این است که شما بتوانید هلندی را در زندگی واقعی استفاده کنید، نه فقط آن را بشناسید.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <p className="font-bold">تمرکز بر مکالمه</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    صحبت کردن از همان جلسات اول فعال می‌شود.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <p className="font-bold">واژگان با ترجمه فارسی</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    برای یادگیری سریع‌تر و دقیق‌تر.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <p className="font-bold">گرامر ساده و کاربردی</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    توضیح روشن همراه با مثال و تمرین.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <p className="font-bold">مسیر شخصی‌سازی‌شده</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    متناسب با هدف و سطح هر زبان‌آموز.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#f7f4ef] p-8 ring-1 ring-slate-200">
              <h3 className="text-2xl font-bold">برای چه کسانی مناسب است؟</h3>
              <div className="mt-5 space-y-4">
                {[
                  "کسانی که می‌خواهند برای زندگی در هلند آماده شوند",
                  "زبان‌آموزانی که مکالمه برایشان سخت است",
                  "افرادی که به آمادگی آزمون یا کار نیاز دارند",
                  "کسانی که می‌خواهند سطح خود را با برنامه بالا ببرند",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#2f5d7c]" />
                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.label} className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#2f5d7c]">{item.label}</p>
              <p className="mt-4 leading-8 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#16324f] to-[#2f5d7c] p-8 text-white shadow-lg lg:p-10">
          <h2 className="text-3xl font-bold">آماده شروع هستید؟</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/90">
            برای دریافت مشاوره، تعیین سطح یا ثبت‌نام، پیام بدهید تا مناسب‌ترین مسیر آموزشی برای شما انتخاب شود.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:nani.taalschool.nl@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-[#16324f] transition hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              ارسال ایمیل
            </a>
            <a
              href="https://instagram.com/nahid_taalles"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" />
              Instagram: @nahid_taalles
            </a>
            <a
              href="https://t.me/Nahid_1301"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Telegram: @Nahid_1301
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
