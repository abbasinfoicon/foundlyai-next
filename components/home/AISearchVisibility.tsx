"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import {
  FiSearch,
  FiChevronRight,
  FiGlobe,
  FiTrendingUp,
  FiEdit3,
  FiMessageCircle,
  FiFileText,
} from "react-icons/fi";

type Tag = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

type SearchResult = {
  query: string;
  brand: string;
  domain: string;
  favicon: string;
  title: string;
  description: string;
  tags: Tag[];
  stats: string;
  href: string;
};


const results: SearchResult[] = [
  {
    query: "AI search visibility and traditional SEO",
    brand: "Foundly.ai",
    domain: "foundly.ai",
    favicon: "/assets/image/favicon.png",
    title: "Stay Relevant Beyond Traditional Search Rankings",
    description:
      "Traditional SEO focuses on helping relevant website pages appear in search results. AI search introduces another layer of discoverability, where information from different sources may be used to generate answers.",
    tags: [
      { label: "Traditional SEO", icon: FiSearch },
      { label: "AI Search", icon: FiGlobe },
      { label: "Search Rankings", icon: FiTrendingUp },
    ],
    stats: "SEO visibility, AI search presence",
    href: "#",
  },
  {
    query: "SEO content based on customer questions",
    brand: "Foundly.ai Content Studio",
    domain: "foundly.ai",
    favicon: "/assets/image/favicon.png",
    title: "Create Content Around Real Customer Questions",
    description:
      "Useful, relevant and clearly structured content gives search systems information about your business, products and services. Addressing the questions your audience is asking also makes your website more helpful to potential customers.",
    tags: [
      { label: "Content Creation", icon: FiEdit3 },
      { label: "Customer Questions", icon: FiMessageCircle },
      { label: "Content Strategy", icon: FiFileText },
    ],
    stats: "SEO articles, website content",
    href: "#",
  },
  {
    query: "Brand discoverability across AI platforms",
    brand: "Foundly.ai AI Search",
    domain: "foundly.ai",
    favicon: "/assets/image/favicon.png",
    title: "Improve Your Brand's Discoverability Across AI Platforms",
    description:
      "Build your online presence with AI search experiences in mind. Foundly.ai brings AI search visibility into its broader SEO and content workflow, helping businesses consider how their information is presented across platforms such as ChatGPT, Gemini and Perplexity.",
    tags: [
      { label: "ChatGPT", icon: FiGlobe },
      { label: "Gemini", icon: FiSearch },
      { label: "Perplexity", icon: FiMessageCircle },
    ],
    stats: "AI visibility, brand discoverability",
    href: "#",
  },
];


const aiLogos = [
  { src: "/assets/image/gpt.svg", alt: "ChatGPT" },
  { src: "/assets/image/gemini.svg", alt: "Gemini" },
  { src: "/assets/image/claude.svg", alt: "Claude" },
  { src: "/assets/image/perplexity-boundless-book.png", alt: "Perplexity" },
  { src: "/assets/image/microsoft-copilot.svg", alt: "Copilot" },
];

function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${className}`}>
      <Image
        src="/assets/image/google.svg"
        alt="Google"
        width={19}
        height={19}
        className="h-[19px] w-[19px] object-contain"
      />
    </span>
  );
}

function SearchCard({ result }: { result: SearchResult }) {
  return (
    <article className="flex h-full w-full shrink-0 flex-col rounded-[19px] border border-[#e9e9ee] bg-white px-[22px] pb-[23px] pt-[22px] shadow-[0_4px_10px_rgba(17,17,25,0.06)] hover:shadow-[0_4px_10px_rgba(17,17,25,0.1)] transition-all duration-500 ease-in-out mt-[5px] hover:mt-[0px]">
      {/* Search query bar */}
      <div className="flex h-[41px] min-w-0 items-center gap-[9px] rounded-full border border-[#e9e9ee] px-[13px] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <GoogleMark />
        <span className="min-w-0 flex-1 truncate text-[12px] sm:text-[15px] font-medium text-[var(--text-color)]">
          {result.query}
        </span>
        <FiSearch className="h-[15px] w-[15px] shrink-0 text-[#9393a0]" />
      </div>

      {/* Search result source */}
      <div className="mt-[13px] flex min-w-0 items-center gap-[10px]">
        <span className="flex h-[35px] w-[35px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#ededf1] bg-white">
          <Image
            src="/assets/image/logo.png"
            alt=""
            width={35}
            height={35}
            className="h-full w-full object-contain"
          />
        </span>
        <div className="flex min-w-0 flex-col gap-[3px]">
          <strong className="truncate text-[12px] sm:text-[14px] font-medium leading-[1.2] text-[var(--text-color)]">
            {result.brand}
          </strong>
          <span className="truncate text-[10px] sm:text-[12px] leading-[1.2] text-[var(--text-color)]">
            {result.domain}
          </span>
        </div>
      </div>

      {/* Search result title and description */}
      <h3 className="mt-3 line-clamp-2 min-h-[48px] text-[17px] sm:text-[20px] font-normal leading-[1.32] text-[var(--primary-color)]">
        {result.title}
      </h3>
      <p className="mt-3 line-clamp-3 min-h-[53px] text-[12px] sm:text-[14px] leading-[1.55] text-[var(--text-color)]">
        {result.description}
      </p>

      {/* Topic tags */}
      <ul className="mt-3 mb-3 flex min-h-[61px] flex-wrap content-start gap-[6px]">
        {result.tags.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="inline-flex h-[30px] items-center gap-[5px] rounded-full bg-[#f0eeff] px-[11px] text-[10px] sm:text-[13px] font-medium text-[var(--primary-color)]"
          >
            <Icon className="h-[12px] w-[12px]" />
            {label}
          </li>
        ))}
      </ul>

      {/* Published content metrics and case study link */}
      <div className="mt-auto border-t border-[#ececf0] pt-[12px]">
        <p className="truncate text-[11px] sm:text-[13px] font-medium text-[var(--text-color)]">
          {result.stats}
        </p>
        <Link
          href={result.href}
          className="mt-[5px] inline-flex items-center gap-1 text-[10px] sm:text-[12px] text-[var(--primary-color)] hover:text-[#4533e9]"
        >
          Read the case study
          <FiChevronRight className="h-[11px] w-[11px]" />
        </Link>
      </div>
    </article>
  );
}

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  autoplay: false,
  speed: 600,
  pauseOnHover: true,
  pauseOnFocus: true,
  swipeToSlide: true,
  draggable: true,
  variableWidth: false,
  centerMode: false,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
      },
    },
  ],
};

const GoogleAI = () => {
  return (
    <section
      id="content"
      aria-labelledby="foundly-found-title"
      className="w-full overflow-hidden bg-white px-5 pb-[72px] pt-[89px] text-[#101014] sm:px-8 sm:pt-[94px] lg:pb-[76px]"
    >
      {/* Section heading */}
      <header className="relative z-40 mx-auto max-w-[1199px] text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
          <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
            <span className="text-base leading-none">✦</span>
            AI SEARCH READY
          </p>
          <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
        </div>
        <h2 className="title mt-4 leading-[1.08]">
          Get Your Business Ready for   {' '}
          <span className="block font-normal text-[var(--primary-color)]">the Future of Search</span>
        </h2>

        {/* Search platform logos */}
        <div className="mt-[18px] flex h-[34px] items-center justify-center gap-[12px]">
          {aiLogos.map((logo) => (
            <span
              key={logo.alt}
              title={logo.alt}
              className="flex h-[41px] w-[41px] items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={41}
                height={41}
                className="h-[41px] w-[41px] object-contain"
              />
            </span>
          ))}
        </div>

        <p className="desc mx-auto mt-5 leading-[1.65] text-[var(--text-color)]">Customers are no longer discovering businesses exclusively through traditional search engine results. AI-powered platforms are also becoming part of how people research services, compare options and find answers to their questions.
        This creates another consideration for businesses: how does your brand appear when potential customers use AI tools to find what they need?
        Foundly.ai supports your efforts to build a stronger presence across this changing search environment.
        </p>
      </header>

      {/* React Slick slider — card design and dimensions are preserved */}
      <div className="google-ai-results-slider mx-auto mt-[58px] max-w-[1240px] pb-[6px] sm:mt-[60px] lg:mt-[59px]">
        <Slider {...settings}>
          {results.map((result) => (
            <div key={result.domain} className="box-border px-[11.5px] pb-4">
              <SearchCard result={result} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GoogleAI;
