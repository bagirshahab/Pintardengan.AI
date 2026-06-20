
Action: file_editor create /app/frontend/src/App.js --file-text "import { useEffect, useState } from \"react\";
import \"@/App.css\";
import {
  Cloud,
  Globe2,
  Sparkles,
  Hammer,
  GraduationCap,
  BookOpen,
  Code2,
  Lightbulb,
  FileText,
  Users,
  Laptop,
  UserCheck,
  CheckCircle2,
  Briefcase,
  Award,
  ArrowRight,
  Languages,
  Menu,
  X,
} from \"lucide-react\";

const COPY = {
  nav: {
    items: {
      id: [\"Tentang\", \"Program\", \"Untuk Siapa\", \"Cara Belajar\", \"Hasil\"],
      en: [\"About\", \"Program\", \"Who It's For\", \"How It Works\", \"Outcomes\"],
    },
    cta: { id: \"Mulai\", en: \"Start\" },
  },
};

const SECTION_IDS = [\"tentang\", \"program\", \"untuk-siapa\", \"cara-belajar\", \"hasil\"];

const MATERIALS = [
  {
    icon: Cloud,
    id: { t: \"Cloud Computing Dasar\", d: \"Memahami apa itu komputasi awan, kenapa penting, dan bagaimana layanan cloud bekerja di balik layar.\" },
    en: { t: \"Cloud Computing Basics\", d: \"Understanding what cloud computing is, why it matters, and how cloud services work behind the scenes.\" },
  },
  {
    icon: Globe2,
    id: { t: \"Cara Kerja Internet\", d: \"Dari permintaan di browser sampai data sampai ke server — fondasi yang menopang semua teknologi digital.\" },
    en: { t: \"How the Internet Works\", d: \"From a browser request to data reaching a server — the foundation beneath every digital technology.\" },
  },
  {
    icon: Sparkles,
    id: { t: \"Dasar Gen AI\", d: \"Apa itu generative AI, bagaimana model bekerja, dan kemampuan apa saja yang bisa dimanfaatkan.\" },
    en: { t: \"Gen AI Fundamentals\", d: \"What generative AI is, how models work, and what capabilities you can put to use.\" },
  },
  {
    icon: Hammer,
    id: { t: \"Membangun Proyek Gen AI\", d: \"Praktik langsung membangun proyek menggunakan PartyRock, Kiro, dan Amazon Bedrock dari AWS.\" },
    en: { t: \"Building Gen AI Projects\", d: \"Hands-on practice building projects with AWS PartyRock, Kiro, and Amazon Bedrock.\" },
  },
];

const AUDIENCE = [
  {
    icon: GraduationCap,
    id: { t: \"Pelajar & Mahasiswa\", d: \"Membangun fondasi sejak dini untuk masa depan yang digerakkan AI.\" },
    en: { t: \"Students\", d: \"Building early foundations for an AI-driven future.\" },
  },
  {
    icon: BookOpen,
    id: { t: \"Pendidik\", d: \"Memperlengkapi pengajar untuk membawa AI ke ruang kelas.\" },
    en: { t: \"Educators\", d: \"Equipping teachers to bring AI into the classroom.\" },
  },
  {
    icon: Code2,
    id: { t: \"Developer Pemula\", d: \"Menambah kemampuan membangun aplikasi bertenaga Gen AI.\" },
    en: { t: \"Early-Stage Developers\", d: \"Leveling up to build Gen AI–powered applications.\" },
  },
  {
    icon: Lightbulb,
    id: { t: \"Siapa Pun yang Penasaran\", d: \"Tidak perlu latar belakang teknis untuk mulai memahami AI.\" },
    en: { t: \"Anyone Curious\", d: \"No technical background needed to start understanding AI.\" },
  },
];

const STEPS = [
  {
    icon: FileText,
    id: { t: \"Materi yang Disesuaikan\", d: \"Konten belajar disesuaikan dengan kebutuhan dan level peserta.\" },
    en: { t: \"Customized Materials\", d: \"Learning content tailored to each learner's needs and level.\" },
  },
  {
    icon: Users,
    id: { t: \"Pelatihan\", d: \"Sesi pelatihan terbimbing untuk membangun pemahaman yang kuat.\" },
    en: { t: \"Training\", d: \"Guided training sessions to build a solid understanding.\" },
  },
  {
    icon: Laptop,
    id: { t: \"LMS — Belajar Mandiri\", d: \"Akses platform belajar untuk mengulang materi kapan saja.\" },
    en: { t: \"Self-Paced LMS\", d: \"Access to a learning platform to revisit material anytime.\" },
  },
  {
    icon: UserCheck,
    id: { t: \"Mentoring Proyek\", d: \"Pendampingan langsung saat mengerjakan proyek AI nyata.\" },
    en: { t: \"Project Mentoring\", d: \"Direct guidance while working on real AI projects.\" },
  },
];

const OUTCOMES = [
  {
    num: \"01\",
    icon: CheckCircle2,
    id: { t: \"Pemahaman Materi\", d: \"Penguasaan konsep cloud, internet, dan Gen AI secara solid.\" },
    en: { t: \"Material Understanding\", d: \"A solid grasp of cloud, internet, and Gen AI concepts.\" },
  },
  {
    num: \"02\",
    icon: Hammer,
    id: { t: \"Proyek AI Nyata\", d: \"Portofolio proyek yang dibangun langsung dengan layanan AWS.\" },
    en: { t: \"Real AI Projects\", d: \"A project portfolio built hands-on with AWS services.\" },
  },
  {
    num: \"03\",
    icon: Award,
    id: { t: \"Sertifikasi\", d: \"Bukti kompetensi yang diakui untuk melangkah lebih jauh.\" },
    en: { t: \"Certification\", d: \"Recognized proof of competency to take the next step.\" },
  },
  {
    num: \"04\",
    icon: Briefcase,
    id: { t: \"Peluang Karier\", d: \"Jalan menuju peluang kerja di bidang yang terus bertumbuh.\" },
    en: { t: \"Employment Opportunities\", d: \"A path toward employment in a fast-growing field.\" },
  },
];

const TECH = [
  {
    name: \"AWS PartyRock\",
    id: \"Eksperimen cepat membuat aplikasi Gen AI tanpa coding.\",
    en: \"Fast, no-code experimentation building Gen AI apps.\",
  },
  {
    name: \"Kiro\",
    id: \"Pengembangan berbasis AI untuk mempercepat proses membangun.\",
    en: \"AI-assisted development to speed up the building process.\",
  },
  {
    name: \"Amazon Bedrock\",
    id: \"Membangun aplikasi Gen AI yang lebih matang dan siap produksi.\",
    en: \"Building more advanced, production-ready Gen AI applications.\",
  },
];

const STATS = [
  { num: \"2\", id: \"NEGARA TARGET\", en: \"TARGET COUNTRIES\" },
  { num: \"4\", id: \"FONDASI MATERI\", en: \"CORE TOPICS\" },
  { num: \"3\", id: \"LAYANAN AWS\", en: \"AWS SERVICES\" },
  { num: \"1:1\", id: \"MENTORING PROYEK\", en: \"PROJECT MENTORING\" },
];

const CONTACT_EMAIL = \"hello@pintardengan.ai\";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(\"Daftar Minat — Pintar dengan AI\")}`;

// Tiny helper to render bilingual text
function T({ id, en, lang, as: As = \"span\", className = \"\" }) {
  return <As className={className}>{lang === \"en\" ? en : id}</As>;
}

function Nav({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const items = COPY.nav.items[lang];

  return (
    <nav
      data-testid=\"site-nav\"
      className=\"sticky top-0 z-50 backdrop-blur-md bg-[rgba(255,255,255,0.85)] border-b border-neutral-200/80\"
    >
      <div className=\"mx-auto max-w-6xl px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4\">
        <a href=\"#top\" className=\"flex items-center gap-2.5 shrink-0\" data-testid=\"nav-logo\">
          <div className=\"w-9 h-9 rounded-lg bg-[var(--navy)] grid place-items-center text-[var(--orange)] font-display font-bold text-lg leading-none\">
            P
          </div>
          <div className=\"leading-tight\">
            <div className=\"font-display text-[15px] font-bold text-[var(--navy)] tracking-tight\">
              Pintar dengan AI
            </div>
            <div className=\"text-[10px] uppercase tracking-[0.18em] text-neutral-500 -mt-0.5\">
              by PindAI
            </div>
          </div>
        </a>

        <ul className=\"hidden lg:flex items-center gap-7 text-sm text-neutral-700\">
          {items.map((label, i) => (
            <li key={i}>
              <a
                href={`#${SECTION_IDS[i]}`}
                className=\"hover:text-[var(--navy)] transition-colors\"
                data-testid={`nav-link-${SECTION_IDS[i]}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className=\"flex items-center gap-2 sm:gap-3\">
          <button
            onClick={() => setLang(lang === \"id\" ? \"en\" : \"id\")}
            className=\"inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-semibold text-[var(--navy)] hover:border-[var(--navy)] transition-colors\"
            data-testid=\"lang-toggle\"
            aria-label=\"Toggle language\"
          >
            <Languages className=\"w-3.5 h-3.5\" />
            <span className={lang === \"id\" ? \"text-[var(--navy)]\" : \"text-neutral-400\"}>ID</span>
            <span className=\"text-neutral-300\">|</span>
            <span className={lang === \"en\" ? \"text-[var(--navy)]\" : \"text-neutral-400\"}>EN</span>
          </button>

          <a
            href={MAILTO}
            className=\"btn-primary text-sm px-4 py-2\"
            data-testid=\"nav-cta\"
          >
            {COPY.nav.cta[lang]}
            <ArrowRight className=\"w-3.5 h-3.5\" />
          </a>

          <button
            className=\"lg:hidden p-1.5 text-[var(--navy)]\"
            onClick={() => setOpen(!open)}
            aria-label=\"Menu\"
            data-testid=\"mobile-menu-toggle\"
          >
            {open ? <X className=\"w-5 h-5\" /> : <Menu className=\"w-5 h-5\" />}
          </button>
        </div>
      </div>

      {open && (
        <div className=\"lg:hidden border-t border-neutral-200 bg-white\" data-testid=\"mobile-menu\">
          <ul className=\"px-5 py-3 flex flex-col gap-1\">
            {items.map((label, i) => (
              <li key={i}>
                <a
                  href={`#${SECTION_IDS[i]}`}
                  onClick={() => setOpen(false)}
                  className=\"block py-2 text-sm text-neutral-700 hover:text-[var(--navy)]\"
                  data-testid={`mobile-nav-link-${SECTION_IDS[i]}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function Hero({ lang }) {
  return (
    <section id=\"top\" className=\"relative overflow-hidden bg-white\">
      {/* decorative grain / blob */}
      <div className=\"pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-[0.07] bg-[var(--navy)] blur-3xl\" />
      <div className=\"pointer-events-none absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full opacity-[0.08] bg-[var(--orange)] blur-3xl\" />

      <div className=\"relative mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-12 sm:pt-24 sm:pb-20\">
        <div className=\"max-w-3xl\">
          <span className=\"inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 bg-[var(--navy)]/5 px-3 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[var(--navy)]\" data-testid=\"hero-eyebrow\">
            <span className=\"w-1.5 h-1.5 rounded-full bg-[var(--orange)]\" />
            <T lang={lang} id=\"Program Belajar AI · Asia Tenggara\" en=\"AI Learning Program · Southeast Asia\" />
          </span>

          <h1 className=\"mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-[1.05] tracking-tight\" data-testid=\"hero-headline\">
            <T
              lang={lang}
              id={<>Pintar dengan <span className=\"text-[var(--orange)] italic\">AI</span>, mulai dari sini.</>}
              en={<>Get smart with <span className=\"text-[var(--orange)] italic\">AI</span>, starting here.</>}
            />
          </h1>

          <p className=\"mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl\" data-testid=\"hero-sub\">
            <T
              lang={lang}
              id=\"Program belajar AI yang membumi — dari cara kerja internet sampai membangun proyek Gen AI pertamamu. Dimulai dari Indonesia, dibangun untuk Asia Tenggara.\"
              en=\"A grounded, practical AI learning program — from how the internet works to building your first Gen AI project. Starting in Indonesia, built for Southeast Asia.\"
            />
          </p>

          <div className=\"mt-7 flex flex-wrap gap-3\">
            <a href={MAILTO} className=\"btn-primary\" data-testid=\"hero-cta-primary\">
              <T lang={lang} id=\"Mulai Belajar\" en=\"Start Learning\" />
              <ArrowRight className=\"w-4 h-4\" />
            </a>
            <a href=\"#program\" className=\"btn-secondary\" data-testid=\"hero-cta-secondary\">
              <T lang={lang} id=\"Lihat Program\" en=\"See the Program\" />
            </a>
          </div>

          {/* Stat strip inline */}
          <div className=\"mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 border-t border-neutral-200 pt-8\" data-testid=\"hero-stats\">
            {STATS.map((s, i) => (
              <div key={i} className=\"flex flex-col\" data-testid={`hero-stat-${i}`}>
                <span className=\"font-display text-3xl sm:text-4xl font-bold text-[var(--navy)] leading-none\">
                  {s.num}
                </span>
                <span className=\"mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500\">
                  {lang === \"en\" ? s.en : s.id}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, heading, lede, lang, dark = false }) {
  return (
    <div className=\"max-w-3xl\">
      <span className={`inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] ${dark ? \"text-[var(--orange)]\" : \"text-[var(--orange)]\"}`}>
        <span className=\"w-6 h-px bg-[var(--orange)]\" />
        <T lang={lang} id={eyebrow.id} en={eyebrow.en} />
      </span>
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight ${dark ? \"text-white\" : \"text-[var(--navy)]\"}`}>
        <T lang={lang} id={heading.id} en={heading.en} />
      </h2>
      {lede && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? \"text-white/75\" : \"text-neutral-600\"}`}>
          <T lang={lang} id={lede.id} en={lede.en} />
        </p>
      )}
    </div>
  );
}

function About({ lang }) {
  return (
    <section id=\"tentang\" className=\"relative bg-neutral-50 border-y border-neutral-200/70\">
      <div className=\"mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24\">
        <div className=\"grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start\">
          <SectionHead
            lang={lang}
            eyebrow={{ id: \"Tentang Kami\", en: \"About Us\" }}
            heading={{ id: \"Bagian dari PindAI\", en: \"Part of PindAI\" }}
          />
          <div>
            <p className=\"text-base sm:text-lg text-neutral-700 leading-relaxed\" data-testid=\"about-body\">
              <T
                lang={lang}
                id={<>Pintar dengan AI adalah program belajar dari <strong className=\"text-[var(--navy)]\">PindAI</strong>, inisiatif yang fokus membekali masyarakat Asia Tenggara dengan keterampilan yang relevan untuk masa kini. Kami memulai perjalanan ini di Indonesia, dan akan segera hadir di Thailand. AI di sini bukan cuma topik yang kami ajarkan — AI juga menjadi salah satu cara kami membantu orang belajar lebih cepat dan lebih dalam. Untuk saat ini, fokus kami adalah memperkenalkan AI sebagai subjek belajar: dasar-dasar yang kokoh, dengan praktik nyata.</>}
                en={<>Pintar dengan AI is a learning program by <strong className=\"text-[var(--navy)]\">PindAI</strong>, an initiative focused on equipping people across Southeast Asia with skills that matter today. We're starting this journey in Indonesia, with Thailand next. AI isn't just our subject here — it's also one of the ways we help people learn faster and go deeper. For now, our focus is introducing AI as a learning subject: solid fundamentals, paired with real practice.</>}
              />
            </p>
            <div className=\"mt-6 flex flex-wrap gap-2\" data-testid=\"region-pills\">
              <span className=\"inline-flex items-center gap-2 rounded-full bg-[var(--navy)] text-white px-3.5 py-1.5 text-xs font-semibold\">
                <span className=\"w-1.5 h-1.5 rounded-full bg-[var(--orange)]\" />
                Indonesia
                <span className=\"ml-1 text-[10px] uppercase tracking-wider opacity-70\">
                  {lang === \"en\" ? \"Active\" : \"Aktif\"}
                </span>
              </span>
              <span className=\"inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3.5 py-1.5 text-xs font-semibold text-neutral-600\">
                Thailand
                <span className=\"ml-1 text-[10px] uppercase tracking-wider opacity-70\">
                  {lang === \"en\" ? \"Soon\" : \"Segera\"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Materials({ lang }) {
  return (
    <section id=\"program\" className=\"bg-white\">
      <div className=\"mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24\">
        <SectionHead
          lang={lang}
          eyebrow={{ id: \"Materi Belajar\", en: \"What We Teach\" }}
          heading={{ id: \"Empat fondasi yang kami ajarkan\", en: \"Four foundations we teach\" }}
          lede={{ id: \"Disusun bertahap — supaya siapa pun bisa mulai dari titik yang tepat.\", en: \"Structured step by step — so anyone can start from the right point.\" }}
        />
        <div className=\"mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5\" data-testid=\"materials-grid\">
          {MATERIALS.map((m, i) => {
            const Icon = m.icon;
            return (
              <article
                key={i}
                className=\"group rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 hover:border-[var(--navy)] hover:shadow-[0_12px_40px_-12px_rgba(27,42,78,0.18)] transition-all duration-300\"
                data-testid={`material-card-${i}`}
              >
                <div className=\"w-10 h-10 rounded-xl bg-[var(--navy)]/5 grid place-items-center text-[var(--navy)] group-hover:bg-[var(--orange)] group-hover:text-white transition-colors\">
                  <Icon className=\"w-5 h-5\" />
                </div>
                <div className=\"mt-4 text-[10px] font-bold text-[var(--orange)] tracking-[0.18em]\">
                  0{i + 1}
                </div>
                <h3 className=\"mt-1 font-display text-base sm:text-lg font-bold text-[var(--navy)] leading-snug\">
                  <T lang={lang} id={m.id.t} en={m.en.t} />
                </h3>
                <p className=\"mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed\">
                  <T lang={lang} id={m.id.d} en={m.en.d} />
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Audience({ lang }) {
  return (
    <section id=\"untuk-siapa\" className=\"bg-neutral-50 border-y border-neutral-200/70\">
      <div className=\"mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24\">
        <SectionHead
          lang={lang}
          eyebrow={{ id: \"Untuk Siapa\", en: \"Who It's For\" }}
          heading={{ id: \"Belajar AI tidak mengenal latar belakang\", en: \"Learning AI has no prerequisites\" }}
          lede={{ id: \"Peserta kami datang dari berbagai latar belakang dan jalan hidup. Materi kami dirancang untuk bisa disesuaikan, apa pun titik awal kamu.\", en: \"Our learners come from many backgrounds and walks of life. Our materials are built to adapt, wherever you're starting from.\" }}
        />
        <div className=\"mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5\" data-testid=\"audience-grid\">
          {AUDIENCE.map((a, i) => {
            const Icon = a.icon;
            return (
              <article
                key={i}
                className=\"rounded-2xl bg-white border border-neutral-200 p-5 sm:p-6 hover:-translate-y-1 hover:border-[var(--orange)]/60 hover:shadow-[0_12px_40px_-12px_rgba(244,123,39,0.25)] transition-all duration-300\"
                data-testid={`audience-card-${i}`}
              >
                <div className=\"w-10 h-10 rounded-xl border-2 border-[var(--orange)] grid place-items-center text-[var(--orange)]\">
                  <Icon className=\"w-5 h-5\" />
                </div>
                <h3 className=\"mt-4 font-display text-base sm:text-lg font-bold text-[var(--navy)] leading-snug\">
                  <T lang={lang} id={a.id.t} en={a.en.t} />
                </h3>
                <p className=\"mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed\">
                  <T lang={lang} id={a.id.d} en={a.en.d} />
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowWeTeach({ lang }) {
  return (
    <section id=\"cara-belajar\" className=\"relative bg-[var(--navy)] overflow-hidden\">
      {/* subtle bg pattern */}
      <div className=\"absolute inset-0 opacity-[0.04]\" style={{
        backgroundImage: \"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)\",
        backgroundSize: \"32px 32px\",
      }} />
      <div className=\"relative mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24\">
        <SectionHead
          lang={lang}
          dark
          eyebrow={{ id: \"Cara Kami Mengajar\", en: \"How We Teach\" }}
          heading={{ id: \"Perjalanan belajar yang terstruktur\", en: \"A structured learning journey\" }}
          lede={{ id: \"Empat langkah yang saling menyambung, dari materi sampai pendampingan proyek.\", en: \"Four connected steps, from materials to project mentoring.\" }}
        />

        <ol className=\"mt-12 relative space-y-4 sm:space-y-5\" data-testid=\"steps-list\">
          {/* timeline line */}
          <div className=\"hidden sm:block absolute left-[34px] top-3 bottom-3 w-px bg-white/15\" aria-hidden />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={i}
                className=\"relative flex items-start gap-4 sm:gap-6 rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-7 hover:bg-white/[0.07] transition-colors\"
                data-testid={`step-${i + 1}`}
              >
                <div className=\"relative shrink-0\">
                  <div className=\"w-[52px] h-[52px] sm:w-[68px] sm:h-[68px] rounded-xl bg-[var(--orange)] grid place-items-center text-white shadow-lg shadow-[var(--orange)]/20\">
                    <Icon className=\"w-6 h-6 sm:w-7 sm:h-7\" />
                  </div>
                </div>
                <div className=\"flex-1 min-w-0\">
                  <div className=\"flex items-baseline gap-3\">
                    <span className=\"font-display text-xs font-bold text-[var(--orange)] tracking-[0.18em]\">
                      {`STEP 0${i + 1}`}
                    </span>
                  </div>
                  <h3 className=\"mt-1 font-display text-lg sm:text-2xl font-bold text-white leading-snug\">
                    <T lang={lang} id={s.id.t} en={s.en.t} />
                  </h3>
                  <p className=\"mt-2 text-sm sm:text-base text-white/70 leading-relaxed\">
                    <T lang={lang} id={s.id.d} en={s.en.d} />
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Outcomes({ lang }) {
  return (
    <section id=\"hasil\" className=\"bg-white\">
      <div className=\"mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24\">
        <SectionHead
          lang={lang}
          eyebrow={{ id: \"Hasil yang Diharapkan\", en: \"Expected Outcomes\" }}
          heading={{ id: \"Dari memahami sampai berkarya\", en: \"From understanding to building\" }}
        />
        <div className=\"mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5\" data-testid=\"outcomes-grid\">
          {OUTCOMES.map((o, i) => {
            const Icon = o.icon;
            return (
              <article
                key={i}
                className=\"relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 hover:border-[var(--navy)] transition-colors\"
                data-testid={`outcome-card-${i}`}
              >
                <span className=\"absolute -right-2 -top-2 font-display text-6xl sm:text-7xl font-bold text-neutral-100 select-none pointer-events-none\">
                  {o.num}
                </span>
                <div className=\"relative\">
                  <Icon className=\"w-5 h-5 text-[var(--orange)]\" />
                  <h3 className=\"mt-4 font-display text-base sm:text-lg font-bold text-[var(--navy)] leading-snug\">
                    <T lang={lang} id={o.id.t} en={o.en.t} />
                  </h3>
                  <p className=\"mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed\">
                    <T lang={lang} id={o.id.d} en={o.en.d} />
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechStrip({ lang }) {
  return (
    <section className=\"bg-neutral-50 border-y border-neutral-200/70\">
      <div className=\"mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16\">
        <div className=\"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6\">
          <div className=\"max-w-xl\">
            <span className=\"inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--orange)]\">
              <span className=\"w-6 h-px bg-[var(--orange)]\" />
              <T lang={lang} id=\"Teknologi yang Kami Gunakan\" en=\"Technology We Use\" />
            </span>
            <h2 className=\"mt-2 font-display text-2xl sm:text-3xl font-bold text-[var(--navy)] tracking-tight\">
              <T lang={lang} id=\"Didukung layanan AWS\" en=\"Powered by AWS services\" />
            </h2>
            <p className=\"mt-2 text-sm text-neutral-600 leading-relaxed\">
              <T lang={lang} id=\"Saat ini kami fokus pada tiga layanan AWS untuk eksperimen sampai pengembangan Gen AI yang lebih matang.\" en=\"We currently focus on three AWS services, from quick experiments to more advanced Gen AI development.\" />
            </p>
          </div>
          <div className=\"grid grid-cols-1 sm:grid-cols-3 gap-3 lg:max-w-xl flex-1\" data-testid=\"tech-badges\">
            {TECH.map((t, i) => (
              <div
                key={i}
                className=\"rounded-xl bg-white border border-neutral-200 px-4 py-3.5 hover:border-[var(--navy)] hover:shadow-sm transition-all\"
                data-testid={`tech-badge-${i}`}
              >
                <div className=\"font-display font-bold text-sm text-[var(--navy)]\">{t.name}</div>
                <div className=\"mt-1 text-[11px] text-neutral-600 leading-snug\">
                  <T lang={lang} id={t.id} en={t.en} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinCTA({ lang }) {
  return (
    <section id=\"gabung\" className=\"bg-white\">
      <div className=\"mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24\">
        <div className=\"relative overflow-hidden rounded-3xl bg-[var(--navy)] px-7 sm:px-14 py-12 sm:py-20\">
          <div className=\"absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[var(--orange)]/20 blur-3xl\" />
          <div className=\"absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-white/5 blur-3xl\" />

          <div className=\"relative max-w-2xl\">
            <span className=\"inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--orange)]\">
              <span className=\"w-6 h-px bg-[var(--orange)]\" />
              <T lang={lang} id=\"Gabung\" en=\"Join Us\" />
            </span>
            <h2 className=\"mt-3 font-display text-3xl sm:text-5xl font-bold text-white leading-[1.05] tracking-tight\">
              <T lang={lang} id=\"Siap mulai belajar?\" en=\"Ready to start learning?\" />
            </h2>
            <p className=\"mt-4 text-base sm:text-lg text-white/75 leading-relaxed\">
              <T lang={lang} id=\"Daftarkan minatmu, dan tim kami akan menghubungimu untuk langkah selanjutnya.\" en=\"Register your interest, and our team will reach out with next steps.\" />
            </p>
            <div className=\"mt-7 flex flex-wrap gap-3\">
              <a href={MAILTO} className=\"btn-orange\" data-testid=\"join-cta-primary\">
                <T lang={lang} id=\"Daftar Minat\" en=\"Register Interest\" />
                <ArrowRight className=\"w-4 h-4\" />
              </a>
              <a href=\"#program\" className=\"btn-ghost-light\" data-testid=\"join-cta-secondary\">
                <T lang={lang} id=\"Lihat Program Lagi\" en=\"Review the Program\" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  return (
    <footer className=\"bg-[var(--navy)] text-white/80\" data-testid=\"site-footer\">
      <div className=\"mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-14\">
        <div className=\"grid sm:grid-cols-[1.5fr_1fr_1fr] gap-8\">
          <div>
            <div className=\"flex items-center gap-2.5\">
              <div className=\"w-9 h-9 rounded-lg bg-white grid place-items-center text-[var(--navy)] font-display font-bold text-lg\">
                P
              </div>
              <div className=\"leading-tight\">
                <div className=\"font-display text-[15px] font-bold text-white tracking-tight\">
                  Pintar dengan AI
                </div>
                <div className=\"text-[10px] uppercase tracking-[0.18em] text-[var(--orange)] -mt-0.5\">
                  by PindAI
                </div>
              </div>
            </div>
            <p className=\"mt-4 text-sm leading-relaxed max-w-md\">
              <T
                lang={lang}
                id=\"Program belajar AI oleh PindAI — membekali Asia Tenggara dengan keterampilan yang relevan, dimulai dari Indonesia.\"
                en=\"An AI learning program by PindAI — equipping Southeast Asia with relevant skills, starting in Indonesia.\"
              />
            </p>
          </div>

          <div>
            <div className=\"text-[11px] uppercase tracking-[0.18em] text-[var(--orange)] font-semibold\">
              <T lang={lang} id=\"Tautan\" en=\"Links\" />
            </div>
            <ul className=\"mt-4 space-y-2 text-sm\">
              <li><a href=\"#tentang\" className=\"hover:text-white transition-colors\"><T lang={lang} id=\"Tentang\" en=\"About\" /></a></li>
              <li><a href=\"#program\" className=\"hover:text-white transition-colors\">Program</a></li>
              <li><a href=\"#gabung\" className=\"hover:text-white transition-colors\"><T lang={lang} id=\"Gabung\" en=\"Join\" /></a></li>
            </ul>
          </div>

          <div>
            <div className=\"text-[11px] uppercase tracking-[0.18em] text-[var(--orange)] font-semibold\">
              <T lang={lang} id=\"Wilayah\" en=\"Region\" />
            </div>
            <p className=\"mt-4 text-sm\">
              <T lang={lang} id=\"Indonesia · Thailand (segera)\" en=\"Indonesia · Thailand (coming soon)\" />
            </p>
            <a href={MAILTO} className=\"mt-3 inline-block text-sm text-[var(--orange)] hover:text-white transition-colors\" data-testid=\"footer-email\">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className=\"mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/55\">
          <div>© 2026 PindAI · Pintar dengan AI</div>
          <div>Made in Jakarta — for Southeast Asia.</div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window === \"undefined\") return \"id\";
    return localStorage.getItem(\"pda_lang\") || \"id\";
  });

  useEffect(() => {
    localStorage.setItem(\"pda_lang\", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className=\"min-h-screen bg-white text-neutral-900 antialiased\">
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Materials lang={lang} />
        <Audience lang={lang} />
        <HowWeTeach lang={lang} />
        <Outcomes lang={lang} />
        <TechStrip lang={lang} />
        <JoinCTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
"
Observation: Overwrite successful: /app/frontend/src/App.js
