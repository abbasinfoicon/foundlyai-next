"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FAQItem[] = [
  { question: "What is Foundly.ai?", answer: <>Foundly.ai is an AI-powered SEO and marketing automation platform designed to help businesses manage activities such as keyword research, SEO content creation, website optimization, local search workflows and social media publishing.</> },
  { question: "How does Foundly.ai automate SEO?", answer: <>Foundly.ai brings together supported SEO workflows, including keyword research, content creation, website optimization and publishing. These tools help businesses organize recurring SEO activities through one platform.</> },
  { question: "Can Foundly.ai generate SEO articles?", answer: <>Yes. Foundly.ai advertises AI-powered SEO article creation as part of its content workflow. Businesses can use this functionality to develop search-focused articles based on relevant topics and their business information.</> },
  { question: "Can I review content before publishing?", answer: <>Foundly.ai advertises content review and management through its dashboard. The available approval and publishing controls should be explained according to the options provided in the product.</> },
  { question: "Does Foundly.ai help with AI search visibility?", answer: <>Foundly.ai supports businesses looking to improve their discoverability across AI-powered search experiences. The specific monitoring, reporting and optimization capabilities depend on the functionality available within the platform.</> },
  { question: "Which AI platforms does Foundly.ai support?", answer: <>The current website references ChatGPT, Gemini, Claude, Perplexity and Microsoft Copilot in its AI search positioning. The exact platforms supported by individual tracking or optimization features should be confirmed separately.</> },
  { question: "Can Foundly.ai manage local SEO?", answer: <>Foundly.ai advertises Google Business Profile management and related local search workflows. The specific activities available can depend on the connected account and supported functionality.</> },
  { question: "Which website platforms can I connect?", answer: <>The current website lists WordPress, Shopify, Webflow, Wix, Framer and Custom API among its website and CMS integration options.</> },
  { question: "Does Foundly.ai support social media publishing?", answer: <>Yes. The platform advertises social content creation and publishing across Instagram, Facebook, LinkedIn and X.</> },
  { question: "Can I track SEO performance?", answer: <>Foundly.ai includes performance information as part of its broader SEO offering. The available metrics and reporting sources should be reviewed within the platform.</> },
];

export default function FAQ() {
  // The first FAQ is expanded by default to match the reference design.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="foundly-faq-title"
      className="bg-white px-4 py-16 text-[#101016] sm:px-6 sm:py-[82px] lg:px-8"
    >
      <div className="mx-auto max-w-[940px]">
        {/* Foundly.ai FAQ section heading */}
        <header className="mx-auto mb-[42px] max-w-[991px] text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
              <span className="text-base leading-none">✦</span>
              NEED HELP?
            </p>
            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
          <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
            Frequently Asked Questions About <span className="text-[var(--primary-color)]">Foundly.ai</span>
          </h2>
          <p className="desc mx-auto mt-5 leading-[1.65] text-[#737381]">
            Find answers to common questions about Foundly.ai, its SEO workflows, integrations and publishing features.
          </p>
        </header>

        {/* Accessible accordion list */}
        <div className="space-y-[9px]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `foundly-faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-[14px] border bg-white transition-colors duration-200 ${
                  isOpen
                    ? "border-[#d9d2ff] shadow-[0_5px_16px_rgba(108,92,255,0.08)]"
                    : "border-[#e9e9ee] hover:border-[#d9d2ff]"
                }`}
              >
                <h3 id={`foundly-faq-question-${index}`}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex min-h-[55px] w-full items-center justify-between gap-5 px-[19px] py-4 text-left text-[16px] sm:text-[20px] font-medium leading-[1.4] tracking-[-0.025em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--primary-color)]"
                  >
                    <span>{item.question}</span>
                    <span className="shrink-0 text-[var(--primary-color)]">
                      {isOpen ? (
                        <FiMinus className="h-[16px] w-[16px]" />
                      ) : (
                        <FiPlus className="h-[16px] w-[16px]" />
                      )}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={`foundly-faq-question-${index}`}
                    className="px-[19px] pb-[18px] text-[12px] sm:text-[16px] leading-[1.65] text-[#424258]"
                  >
                    {item.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Consultation callout */}
        <div className="mt-[9px] flex items-center justify-between gap-4 rounded-[14px] border border-[#d9d2ff] bg-[var(--primary-color)] px-[19px] py-[17px]">
          <div className="min-w-0">
            <strong className="block text-[16px] sm:text-[20px] font-medium tracking-[-0.025em] text-white">
              Spend Less Time Managing Marketing.
            </strong>
            <Link
              href="/contact"
              className="mt-1 block text-[12px] sm:text-[15px] text-white/70 hover:underline"
            >
              Explore Foundly.ai
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-full border border-[#d6ceff] bg-white px-6 text-[12px] sm:text-[16px] font-medium text-[var(--primary-color)] transition hover:bg-[var(--primary-color)] hover:text-white"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
