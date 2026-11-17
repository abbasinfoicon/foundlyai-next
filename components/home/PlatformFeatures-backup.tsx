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
    { number: "01", title: "AI-Powered Keyword Research", body: "Discover search terms and topics relevant to your business. Keyword research helps identify what your potential customers are looking for and provides direction for planning content around relevant search opportunities.", icon: FiSearch, visual: "search", image:"/assets/image/icon/search.webp" },
    { number: "02", title: "AI SEO Content Creation", body: "Create search-focused articles and website content based on your business, services and target audience. Foundly.ai helps streamline content production so businesses can maintain a more consistent publishing workflow.", icon: FiEdit3, visual: "content", image:"/assets/image/icon/content.webp" },
    { number: "03", title: "Website SEO Optimization", body: "Support your website's ongoing SEO activities through on-page improvements and internal linking workflows. These activities help organize website content and strengthen the connections between relevant pages.", icon: FiSettings, visual: "seo", image:"/assets/image/icon/seo.webp" },
    { number: "04", title: "AI Search Visibility", body: "Search behaviour is expanding beyond traditional search engine results. Foundly.ai supports businesses looking to improve their discoverability across AI-powered search experiences, including platforms such as ChatGPT, Gemini and Perplexity.", icon: FiGlobe, visual: "ai", image:"/assets/image/icon/ai.webp" },
    { number: "05", title: "Local SEO Management", body: "Support your local online presence through Google Business Profile and related local search workflows. Keep relevant business information and supported profile activities within reach of your wider marketing process.", icon: FiMapPin, visual: "local", image:"/assets/image/icon/local.webp" },
    { number: "06", title: "Social Media Automation", body: "Create and manage social media content across connected platforms. Foundly.ai helps businesses maintain a more consistent publishing schedule while adapting content for channels such as Instagram, Facebook, LinkedIn and X.", icon: FiShare2, visual: "social", image:"/assets/image/icon/social.webp" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#F4F8FF] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 bg-cover bg-bottom bg-no-repeat" style={{backgroundImage:'url(/assets/image/bg/testimonial-bg.webp)'}}>      
      <div className="relative mx-auto max-w-[1400px]">
        <header className="mx-auto mb-10 max-w-[1140px] text-center sm:mb-14">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
            <span className="inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.07)] sm:text-[13px]">✦ OMNICHANNEL PRESENCE</span>
            <span className="hidden h-px w-16 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
          <h2 className="text-[32px] font-medium leading-[1.12] tracking-[-0.055em] text-[#111116] sm:text-[44px] lg:text-[52px]">Everything You Need to Manage <span className="text-[var(--primary-color)]">Your Online Visibility in One Place</span></h2>
          <p className="mx-auto mt-5 text-[15px] leading-[1.75] text-[#737381] sm:text-[18px]">Foundly.ai combines AI-powered SEO, content creation, local search activities and social media publishing in one connected platform. Rather than managing every task through a separate workflow, businesses can use the platform to support the activities involved in building and maintaining their digital presence.</p>
        </header>

        <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => <InfoCard key={item.title} item={item} />)}
        </div>
        <div className="mt-10 text-center">
          <a href="#pricing" className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-white/70 bg-gradient-to-r from-[#245AE2] via-[#1554E8] to-[#123DBB] px-8 py-3 text-[15px] font-bold text-white shadow-[0_14px_30px_rgba(36,90,226,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(36,90,226,0.38)]">
            Explore Foundly.ai Features <FiArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
