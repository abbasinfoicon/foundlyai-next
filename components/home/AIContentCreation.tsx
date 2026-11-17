import {
  FiArrowUpRight,
  FiCheckCircle,
  FiEdit3,
  FiGlobe,
  FiMapPin,
  FiSearch,
  FiSettings,
  FiShare2,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import Image from "next/image";

type CardItem = {
  title: string;
  body: string;
  icon?: IconType;
  number: string;
  visual: "search" | "content" | "seo" | "ai" | "local" | "social";
  image: string;
};

function InfoCard({ item }: { item: CardItem }) {
  const Icon = item.icon || FiCheckCircle;
  return (
    <article className="group relative flex min-h-[370px] flex-col overflow-hidden rounded-[28px] border border-[#c9dcff] bg-white/90 p-6 shadow-[0_12px_30px_rgba(36,90,226,0.10)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#245ae2] hover:shadow-[0_20px_42px_rgba(36,90,226,0.18)] sm:min-h-[380px] sm:p-7">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 440 380" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={`card-wave-${item.number}`} x1="230" y1="180" x2="440" y2="380" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DBEAFE" stopOpacity="0" />
            <stop offset=".55" stopColor="#93C5FD" stopOpacity=".38" />
            <stop offset="1" stopColor="#245AE2" stopOpacity=".88" />
          </linearGradient>
        </defs>
        <path d="M440 170C360 190 365 255 290 294C235 323 180 330 115 380H440V170Z" fill={`url(#card-wave-${item.number})`} />
        <path d="M440 235C365 260 352 310 290 340C250 360 215 368 185 380H440V235Z" fill="#245AE2" fillOpacity=".15" />
        <path d="M440 170C360 190 365 255 290 294C235 323 180 330 115 380" stroke="#FFFFFF" strokeOpacity=".85" strokeWidth="2" fill="none" />
      </svg>
      <div className="relative z-10 flex items-start justify-between">
        <span className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#38BDF8] via-[#245AE2] to-[#123DBB] text-white shadow-[0_10px_22px_rgba(36,90,226,0.28)] ring-1 ring-white/70">
          <Icon className="h-8 w-8" strokeWidth={2.1} />
        </span>
        <span className="rounded-full bg-[#E5EFFF] px-4 py-1.5 text-[17px] font-extrabold tracking-tight text-[#1247C8]">{item.number}</span>
      </div>
      <h3 className="relative z-10 mt-4 max-w-[90%] text-[20px] font-bold leading-[1.12] tracking-[-0.035em] text-[#07133F] sm:text-[24px]">{item.title}</h3>
      <p className="relative z-10 mt-3 max-w-[92%] pb-16 text-[15px] leading-[1.45] text-[#253454] sm:text-[16px]">{item.body}</p>
      <span className="absolute bottom-7 left-7 z-20 block h-[5px] w-14 rounded-full bg-[#245ae2] shadow-[0_3px_10px_rgba(36,90,226,0.22)] transition-all duration-300 group-hover:w-20" />
      <Image className="absolute bottom-0 right-0 z-10" src={item.image} alt="" width={128} height={116} />
    </article>
  );
}

export default function PlatformFeatures() {
  const features: CardItem[] = [
  {
    number: "01",
    title: "Find Topics Your Audience Is Searching For",
    body: "Start with keyword research to identify relevant search terms and content opportunities. Use these insights to plan articles around the products, services and questions that matter to your audience.",
    icon: FiSearch,
    visual: "search",
    image: "/assets/image/icon/search.webp",
  },
  {
    number: "02",
    title: "Create Relevant, Search-Focused Articles",
    body: "Use AI-powered content creation to develop articles that reflect your business and its subject areas. The aim is to produce useful content that addresses the needs of the intended audience.",
    icon: FiEdit3,
    visual: "content",
    image: "/assets/image/icon/content.webp",
  },
  {
    number: "03",
    title: "Optimize Content Before Publishing",
    body: "Prepare articles for publication with relevant SEO improvements and a clear content structure. Review the content to ensure it accurately represents your business and communicates the intended information.",
    icon: FiSettings,
    visual: "seo",
    image: "/assets/image/icon/seo.webp",
  },
  {
    number: "04",
    title: "Publish Through Your Connected Website",
    body: "Use supported CMS integrations to publish content through your website. Depending on the connected platform and publishing settings, content can be managed through the available publishing workflow.",
    icon: FiGlobe,
    visual: "ai",
    image: "/assets/image/icon/ai.webp",
  },
];

  return (
    <section className="relative isolate overflow-hidden bg-[#F4F8FF] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 bg-cover bg-bottom bg-no-repeat" style={{backgroundImage:'url(/assets/image/bg/testimonial-bg.webp)'}}>      
      <div className="relative mx-auto max-w-[1400px]">
        <header className="mx-auto mb-10 max-w-[1140px] text-center sm:mb-14">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
            <span className="inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.07)] sm:text-[13px]">✦ AI CONTENT CREATION</span>
            <span className="hidden h-px w-16 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
          <h2 className="text-[32px] font-medium leading-[1.12] tracking-[-0.055em] text-[#111116] sm:text-[44px] lg:text-[52px]">Turn Your SEO Strategy <span className="text-[var(--primary-color)]">Into Consistent Content</span></h2>
          <p className="mx-auto mt-5 text-[15px] leading-[1.75] text-[#737381] sm:text-[18px]">Creating an article is only one part of content marketing. Businesses also need to identify suitable topics, understand search intent, prepare useful information, optimize the final content and publish it through their website.</p>
          <p className="mx-auto mt-5 text-[15px] leading-[1.75] text-[var(--primary-color)] sm:text-[18px]">Foundly.ai helps bring these activities into a more connected workflow.</p>
        </header>

        <div className="grid items-stretch gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => <InfoCard key={item.title} item={item} />)}
        </div>
        <div className="mt-10 text-center">
          <a href="#" className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-white/70 bg-gradient-to-r from-[#245AE2] via-[#1554E8] to-[#123DBB] px-8 py-3 text-[15px] font-bold text-white shadow-[0_14px_30px_rgba(36,90,226,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(36,90,226,0.38)]">
            Explore AI Content Creation <FiArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
