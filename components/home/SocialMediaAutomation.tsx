import Image from "next/image";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiEdit3,
  FiGlobe,
  FiShare2,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type CardItem = {
  title: string;
  body: string;
  icon: IconType;
  number: string;
  image: string;
  imageAlt: string;
};

const features: CardItem[] = [
  {
    number: "01",
    title: "Create content around your business",
    body: "Develop posts that communicate your products, services, updates and areas of expertise.",
    icon: FiEdit3,
    image: "/assets/image/social/social-content.png",
    imageAlt: "Social media post and creative preview illustration",
  },
  {
    number: "02",
    title: "Maintain a consistent publishing schedule",
    body: "Plan content and manage publishing activities through a more organized workflow.",
    icon: FiBarChart2,
    image: "/assets/image/social/social-schedule.png",
    imageAlt: "Social media publishing calendar illustration",
  },
  {
    number: "03",
    title: "Manage connected social platforms",
    body: "Support content distribution across Instagram, Facebook, LinkedIn and X.",
    icon: FiShare2,
    image: "/assets/image/social/social-platforms.png",
    imageAlt: "Connected social media platforms illustration",
  },
  {
    number: "04",
    title: "Extend the reach of your website content",
    body: "Use relevant themes from your website and content strategy to support your wider social media presence.",
    icon: FiGlobe,
    image: "/assets/image/social/social-reach.png",
    imageAlt: "Website content reach and growth illustration",
  },
];

function InfoCard({ item }: { item: CardItem }) {
  const Icon = item.icon;

  return (
    <article className="group relative flex min-h-[395px] flex-col overflow-hidden rounded-[25px] border border-[#dce8ff] bg-white/90 p-6 shadow-[0_12px_32px_rgba(36,90,226,0.09)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9fc1ff] hover:shadow-[0_18px_42px_rgba(36,90,226,0.16)] sm:min-h-[410px] sm:p-7">
      <div className="relative z-10 mb-4 flex items-center justify-between">
        <span className="flex h-[54px] w-[54px] items-center justify-center rounded-[17px] bg-gradient-to-br from-[#168bff] via-[#2465ed] to-[#173bd1] text-white shadow-[0_8px_18px_rgba(36,90,226,0.28)] ring-1 ring-white">
          <Icon className="h-6 w-6" strokeWidth={2.1} />
        </span>
        <span className="rounded-full bg-[#e6efff] px-3.5 py-1.5 text-[14px] font-bold tracking-wide text-[#1454df]">
          {item.number}
        </span>
      </div>

      <h3 className="relative z-10 text-[18px] font-bold leading-[1.2] tracking-[-0.035em] text-[#111936] sm:text-[20px]">
        {item.title}
      </h3>
      <p className="relative z-10 mt-3 text-[14px] leading-[1.55] text-[#53617f] sm:text-[16px]">
        {item.body}
      </p>

      <div className="pointer-events-none relative mt-auto flex h-[160px] items-end justify-center pt-2 sm:h-[175px]">
        <div className="absolute bottom-2 h-20 w-[78%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(36,90,226,0.16),transparent_70%)] blur-xl transition-opacity group-hover:opacity-100" />
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={420}
          height={250}
          className="relative z-10 h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
    </article>
  );
}

export default function SocialMediaAutomation() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f7f9ff] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
      {/* Soft blue background waves */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_78%_28%,rgba(73,145,255,0.18),transparent_34%),radial-gradient(ellipse_at_18%_12%,rgba(36,90,226,0.10),transparent_35%)]" />
      <div className="pointer-events-none absolute -right-40 top-[270px] -z-10 h-[310px] w-[620px] rotate-[-12deg] rounded-[50%] bg-gradient-to-r from-[#c9e6ff]/20 via-[#8dbaff]/35 to-[#245ae2]/80 blur-[1px]" />
      <div className="pointer-events-none absolute -left-48 bottom-[-180px] -z-10 h-[300px] w-[760px] rotate-[8deg] rounded-[50%] bg-gradient-to-r from-[#dbeaff]/80 via-[#b8d6ff]/50 to-transparent" />

      <div className="mx-auto max-w-[1410px]">
        {/* Header and hero illustration */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-5">
          <header className="mx-auto w-full max-w-[760px] text-center lg:mx-0 lg:text-left">
            <div className="mb-5 flex items-center justify-center gap-4 lg:justify-start">
              <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-blue-300 sm:block" />
              <span className="inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#edf4ff] to-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#245ae2] shadow-[0_3px_14px_rgba(36,90,226,0.09)] sm:text-[13px]">
                <span className="text-base">✦</span> SOCIAL PRESENCE
              </span>
              <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-blue-300 sm:block" />
            </div>

            {/* Keep heading font sizes and family consistent with the supplied component */}
            <h2 className="text-[32px] font-medium leading-[1.12] tracking-[-0.055em] text-[#111116] sm:text-[44px] lg:text-[52px]">
              Keep Your Business Active Across{" "}
              <span className="text-[#245ae2]">Social Media</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[780px] text-[15px] leading-[1.75] text-[#53617f] sm:text-[18px] lg:mx-0">
              Your website is an important part of your online presence, but customers may also discover and interact with your business through social platforms. Maintaining those channels requires a regular supply of relevant content and a consistent publishing schedule. Foundly.ai helps streamline social media content creation and publishing through connected channels.
            </p>
          </header>

          <div className="relative mx-auto flex w-full max-w-[650px] items-center justify-center lg:ml-auto">
            <div className="absolute inset-[8%] rounded-full bg-[#78baff]/20 blur-3xl" />
            <Image
              src="/assets/image/social/social-hero.png"
              alt="Social media management dashboard with connected platforms, analytics and publishing calendar"
              width={900}
              height={590}
              priority
              className="relative z-10 h-auto w-full object-contain drop-shadow-[0_18px_24px_rgba(36,90,226,0.12)]"
            />
          </div>
        </div>

        {/* Four feature cards */}
        <div className="mt-9 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {features.map((item) => (
            <InfoCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
