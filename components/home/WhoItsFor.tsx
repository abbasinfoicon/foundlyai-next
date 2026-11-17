import Image from "next/image";
import {
  FiArrowUpRight,
  FiLayers,
  FiMapPin,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type CardItem = {
  title: string;
  body: string;
  icon: IconType;
  image: string;
  imageAlt: string;
};

const audiences: CardItem[] = [
  {
    title: "Small Businesses",
    body: "Manage recurring SEO and content activities without having to coordinate every task separately.",
    icon: FiShoppingBag,
    image: "/assets/image/who-its-for/small-business.png",
    imageAlt: "Small business owner working on a laptop",
  },
  {
    title: "Local Businesses",
    body: "Support local search visibility, maintain relevant business information and build a more consistent online presence.",
    icon: FiMapPin,
    image: "/assets/image/who-its-for/local-business.png",
    imageAlt: "Local storefront and retail business",
  },
  {
    title: "Ecommerce Businesses",
    body: "Develop relevant website content and support search marketing activities that help customers discover your products.",
    icon: FiLayers,
    image: "/assets/image/who-its-for/ecommerce-business.png",
    imageAlt: "Ecommerce store displayed on a laptop",
  },
  {
    title: "Marketing Teams and Agencies",
    body: "Bring supported SEO, content creation and publishing workflows into one platform to help manage ongoing marketing activities.",
    icon: FiUsers,
    image: "/assets/image/who-its-for/marketing-team.png",
    imageAlt: "Marketing team collaborating around a laptop",
  },
];

function InfoCard({ item, index }: { item: CardItem; index: number }) {
  const Icon = item.icon;
  const featured = index === 1;

  return (
    <article
      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border bg-white/90 shadow-[0_12px_30px_rgba(36,90,226,0.09)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_18px_38px_rgba(36,90,226,0.16)] ${
        featured
          ? "border-[#245ae2] shadow-[0_12px_32px_rgba(36,90,226,0.15)]"
          : "border-[#e4eaf7] hover:border-[#9bbaff]"
      }`}
    >
      {/* Photo at the top of each card */}
      <div className="relative h-[250px] w-full overflow-hidden sm:h-[275px]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-white to-transparent" />

        <span className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#159dff] via-[#2465ed] to-[#173bd1] text-white shadow-[0_8px_18px_rgba(36,90,226,0.28)] ring-1 ring-white/80">
          <Icon className="h-6 w-6" strokeWidth={2.1} />
        </span>
        <span className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/90 text-[#245ae2] shadow-[0_5px_16px_rgba(36,90,226,0.12)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <FiArrowUpRight className="h-6 w-6" />
        </span>
      </div>

      <div className="relative flex flex-1 flex-col px-6 pb-7 pt-4 sm:px-7">
        <h3 className="text-[19px] font-bold leading-[1.2] text-[#111936] sm:text-[21px]">
          {item.title}
        </h3>
        <p className="mt-4 text-[15px] leading-[1.55] text-[var(--text-color)] sm:text-[17px]">
          {item.body}
        </p>
        <div className="mt-auto pt-7">
          <span className="block h-[6px] w-[78px] rounded-full bg-gradient-to-r from-[#174cff] to-[#3b9bff] transition-all duration-300 group-hover:w-[112px]" />
        </div>
      </div>
    </article>
  );
}

export default function WhoItsFor() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f9ff] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1195px]">
        <header className="mx-auto mb-10 max-w-[1024px] text-center sm:mb-14">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
 
            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.06)]">
              <span className="text-base leading-none">✦</span>
              WHO IT'S FOR
            </p>
 
            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
          <h2 className="title mt-4 leading-[1.08]">Built for Businesses That Want to  <span className="text-[var(--primary-color)]">Grow Their Digital Presence</span></h2>
          <p className="desc leading-[1.65] text-[var(--text-color)]">Whether you manage a small business or oversee marketing activities across multiple channels, maintaining online visibility requires consistent effort. Foundly.ai brings together tools that can support different parts of this process.</p>
        </header>
      </div>
      {/* Soft blue and violet background waves */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_8%_12%,rgba(36,90,226,0.10),transparent_35%),radial-gradient(ellipse_at_96%_8%,rgba(139,120,255,0.16),transparent_32%)]" />
      <div className="pointer-events-none absolute -right-36 -top-48 -z-10 h-[430px] w-[760px] rotate-[-28deg] rounded-[50%] bg-gradient-to-r from-[#dceaff]/20 via-[#b5d0ff]/55 to-[#245ae2]/70 blur-[1px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-36 -z-10 h-[330px] w-[780px] rotate-[8deg] rounded-[50%] bg-gradient-to-r from-[#a8c8ff]/65 via-[#e4edff]/70 to-transparent" />
      <div className="pointer-events-none absolute -bottom-56 right-[-8%] -z-10 h-[330px] w-[850px] rotate-[-7deg] rounded-[50%] bg-gradient-to-r from-[#e7edff]/20 via-[#c7dcff]/70 to-[#6da5ff]/70" />

      <div className="mx-auto max-w-[1635px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {audiences.map((item, index) => (
            <InfoCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
