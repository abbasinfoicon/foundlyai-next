import { FiArrowUpRight, FiCheckCircle, FiFileText, FiMapPin, FiMessageCircle, FiSearch, FiSettings, FiShare2 } from "react-icons/fi";
import type { IconType } from "react-icons";

type CardItem = { title: string; body: string; icon?: IconType };

function InfoCard({ item, index }: { item: CardItem; index: number }) {
  const Icon = item.icon || FiCheckCircle;
  const accent = index % 3 === 1 ? "violet" : "blue";

  return (
    <article className="group relative isolate flex min-h-[218px] overflow-hidden rounded-[24px] border border-[#e3e9ff] bg-white p-6 shadow-[0_10px_30px_rgba(38,67,145,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9d7ff] hover:shadow-[0_18px_42px_rgba(49,82,190,0.13)] sm:p-7">
      {/* Decorative curved SVG background */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -right-px -z-10 h-[118px] w-[220px] opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        viewBox="0 0 220 118"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`card-wave-${index}`} x1="30" y1="118" x2="220" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor={accent === "violet" ? "#a78bfa" : "#60a5fa"} stopOpacity=".02" />
            <stop offset="1" stopColor={accent === "violet" ? "#c4b5fd" : "#93c5fd"} stopOpacity=".42" />
          </linearGradient>
        </defs>
        <path d="M0 118C62 118 80 104 112 73C143 43 164 16 220 0V118H0Z" fill={`url(#card-wave-${index})`} />
        <path d="M62 118C112 112 139 81 164 57C185 37 202 27 220 22" stroke={accent === "violet" ? "#c4b5fd" : "#93c5fd"} strokeOpacity=".55" strokeWidth="1.2" />
      </svg>

      <div className="relative z-10 flex w-full items-start gap-5 sm:gap-7">
        <div className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[20px] border shadow-[0_8px_20px_rgba(67,105,220,0.08)] transition-transform duration-300 group-hover:scale-105 ${accent === "violet"
          ? "border-violet-100 bg-gradient-to-br from-violet-50 to-purple-100 text-violet-600"
          : "border-blue-100 bg-gradient-to-br from-blue-50 to-sky-100 text-blue-600"
          }`}>
          <Icon className="h-9 w-9" strokeWidth={1.8} />
        </div>

        <div className="min-w-0 flex-1 pr-8">
          <h3 className="text-[19px] font-bold leading-[1.25] text-[#101735] sm:text-[23px]">
            {item.title}
          </h3>
          <p className="mt-4 text-[15px] leading-[1.6] text-[var(--text-color)] sm:text-[17px]">
            {item.body}
          </p>
        </div>

        <span className="absolute right-0 top-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e9eaff] bg-white/80 text-[#3422d6] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-violet-200 group-hover:bg-violet-50">
          <FiArrowUpRight className="h-6 w-6" />
        </span>
      </div>
    </article>
  );
}

export default function BusinessChallenges() {
  const challenges: CardItem[] = [
    { title: "Finding the right keywords", body: "Understanding what potential customers search for and identifying relevant content opportunities.", icon: FiSearch },
    { title: "Creating useful website content", body: "Publishing informative articles and pages that address customer questions and search intent.", icon: FiFileText },
    { title: "Maintaining website SEO", body: "Improving on-page elements, content structure and internal links.", icon: FiSettings },
    { title: "Managing local visibility", body: "Keeping business information and supported Google Business Profile activities up to date.", icon: FiMapPin },
    { title: "Adapting to AI-powered search", body: "Considering how your business and its content appear across emerging search experiences.", icon: FiMessageCircle },
    { title: "Staying active on social media", body: "Creating and publishing relevant content across connected social platforms.", icon: FiShare2 },
  ];

  return (
    <section className="relative isolate overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 bg-[length:100%] bg-no-repeat" style={{ backgroundImage: 'url("/assets/image/bg/bg-img-1.webp")' }}>
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-36 -z-10 h-[340px] w-[340px] rounded-full bg-blue-100/60 blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 -z-10 h-[340px] w-[340px] rounded-full bg-violet-100/60 blur-[100px]" />
      <div className="mx-auto max-w-[1430px]">
        <header className="mx-auto mb-10 max-w-[850px] text-center sm:mb-14">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
              <span className="text-base leading-none">✦</span>
              A CONNECTED APPROACH
            </p>
            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
          <h2 className="title leading-[1.08]">Growing Online Takes More Than <span className="text-[var(--primary-color)]">Just Having a Website</span></h2>
          <p className="desc mt-3 leading-[1.65] text-[var(--text-color)]">Your website may explain what your business offers, but potential customers still need to find it when they search for relevant products, services or information.</p>
          <p className="desc mt-5 leading-[1.65] text-[var(--primary-color)]">Maintaining that visibility requires regular work across several areas:</p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6">
          {challenges.map((item, index) => (
            <InfoCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <div className="relative mt-9 overflow-hidden rounded-[26px] bg-gradient-to-r from-[var(--primary-color)] via-[#4936e8] to-[#9b45f4] px-6 py-7 text-white shadow-[0_18px_40px_rgba(76,70,220,0.22)] sm:mt-12 sm:px-10 sm:py-8">
          <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border-[34px] border-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 right-24 h-64 w-64 rounded-full border-[26px] border-white/10" />
          <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-5 text-center sm:flex-row sm:gap-8 sm:text-left">
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15 shadow-[0_8px_24px_rgba(15,23,42,0.16)] backdrop-blur-sm">
              <FiCheckCircle className="h-10 w-10" />
            </div>
            <span className="hidden h-14 w-px shrink-0 bg-white/35 sm:block" />
            <p className="max-w-[1080px] text-[15px] font-medium leading-[1.7] text-white sm:text-[18px] sm:leading-[1.65]">
              Handling these activities separately can make digital marketing difficult to manage consistently. Foundly.ai brings several of these workflows together, helping businesses spend less time coordinating routine marketing tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
