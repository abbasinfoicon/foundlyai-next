"use client";

import { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FiCalendar, FiArrowUpRight, FiSearch, FiTarget, FiActivity, FiEye } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type Metric = { label: string; value: string; change: string; icon: string };
type ReportTab = {
  id: string;
  tab: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics: Metric[];
  primaryLabel: string;
  secondaryLabel: string;
  primaryBase: number;
  secondaryBase: number;
  primaryColor: string;
  secondaryColor: string;
  tags: string[];
  chartTitle: string;
};

const reports: ReportTab[] = [
  {
    id: "organic",
    tab: "Organic Search Performance",
    title: "Monitor Organic Search Performance",
    description: "Review relevant search performance information, including clicks and impressions, to understand how people are discovering your website through organic search.",
    icon: <FiSearch />,
    metrics: [
      { label: "Organic clicks", value: "24.8K", change: "+18.6%", icon: "↗" },
      { label: "Search impressions", value: "1.42M", change: "+24.3%", icon: "◉" },
      { label: "Average CTR", value: "3.8%", change: "+0.6%", icon: "▥" },
    ],
    primaryLabel: "Organic clicks",
    secondaryLabel: "Search impressions",
    primaryBase: 42,
    secondaryBase: 2350,
    primaryColor: "#245ae2",
    secondaryColor: "#8151ed",
    tags: ["Organic traffic", "Clicks", "Impressions"],
    chartTitle: "Organic search activity over time",
  },
  {
    id: "keywords",
    tab: "Keyword Visibility",
    title: "Understand Keyword Visibility",
    description: "Use available keyword and ranking information to assess how your website performs for relevant search terms.",
    icon: <FiTarget />,
    metrics: [
      { label: "Tracked keywords", value: "186", change: "+12.4%", icon: "⌕" },
      { label: "Top 10 keywords", value: "64", change: "+16.8%", icon: "◎" },
      { label: "Average position", value: "12.6", change: "+2.1", icon: "↗" },
    ],
    primaryLabel: "Top 10 keywords",
    secondaryLabel: "Tracked keywords",
    primaryBase: 18,
    secondaryBase: 95,
    primaryColor: "#245ae2",
    secondaryColor: "#8151ed",
    tags: ["Keyword rankings", "Search terms", "Visibility"],
    chartTitle: "Keyword visibility trend",
  },
  {
    id: "marketing",
    tab: "Marketing Activities",
    title: "Review Your Marketing Activities",
    description: "Keep track of content and publishing workflows while using available performance information to evaluate your ongoing marketing efforts.",
    icon: <FiActivity />,
    metrics: [
      { label: "Published content", value: "48", change: "+14.2%", icon: "▤" },
      { label: "Active workflows", value: "12", change: "+3", icon: "◌" },
      { label: "Completed tasks", value: "92%", change: "+8.5%", icon: "✓" },
    ],
    primaryLabel: "Published content",
    secondaryLabel: "Completed tasks",
    primaryBase: 12,
    secondaryBase: 72,
    primaryColor: "#245ae2",
    secondaryColor: "#8151ed",
    tags: ["Content", "Publishing", "Workflows"],
    chartTitle: "Marketing activity over time",
  },
  {
    id: "ai-search",
    tab: "AI Search Visibility",
    title: "Consider AI Search Visibility",
    description: "As AI-powered search becomes another discovery channel, understanding your brand's visibility across these platforms can provide additional context alongside conventional SEO reporting.",
    icon: <FiEye />,
    metrics: [
      { label: "AI visibility mentions", value: "326", change: "+22.7%", icon: "✦" },
      { label: "Tracked AI prompts", value: "84", change: "+11.3%", icon: "⌕" },
      { label: "Platforms monitored", value: "4", change: "+1", icon: "◎" },
    ],
    primaryLabel: "AI visibility mentions",
    secondaryLabel: "Tracked AI prompts",
    primaryBase: 14,
    secondaryBase: 55,
    primaryColor: "#245ae2",
    secondaryColor: "#8151ed",
    tags: ["AI discovery", "Brand mentions", "AI platforms"],
    chartTitle: "AI search visibility trend",
  },
];

const monthLabels = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

function MiniTrend({ color, seed }: { color: string; seed: number }) {
  const values = Array.from({ length: 18 }, (_, index) => {
    const progress = index / 17;
    return 8 + progress * 28 + Math.sin(index * 1.45 + seed) * 2.2 + Math.cos(index * 0.7 + seed) * 1.2;
  });
  const points = values.map((value, index) => `${(index / 17) * 100},${42 - value}`).join(" ");
  return (
    <svg viewBox="0 0 100 44" preserveAspectRatio="none" aria-hidden="true" className="h-[38px] w-full overflow-visible">
      <defs>
        <linearGradient id={`mini-fill-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,44 ${points} 100,44`} fill={`url(#mini-fill-${seed})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
};

export default function ProvenImpact() {
  const [selectedId, setSelectedId] = useState("organic");
  const selected = reports.find((report) => report.id === selectedId) ?? reports[0];

  const chartData = useMemo<ChartData<"line">>(() => {
    const makeSeries = (base: number, multiplier: number) =>
      Array.from({ length: 12 }, (_, index) => {
        const progress = index / 11;
        const variation = Math.sin(index * 1.7) * base * 0.12 + Math.cos(index * 0.8) * base * 0.07;
        return Math.max(1, Math.round(base + progress * base * multiplier + variation));
      });
    return {
      labels: monthLabels,
      datasets: [
        {
          label: selected.secondaryLabel,
          data: makeSeries(selected.secondaryBase, 1.15),
          borderColor: selected.secondaryColor,
          backgroundColor: "rgba(129, 81, 237, 0.10)",
          borderWidth: 2,
          pointRadius: 2,
          pointHoverRadius: 5,
          tension: 0.38,
          fill: true,
        },
        {
          label: selected.primaryLabel,
          data: makeSeries(selected.primaryBase, 1.35),
          borderColor: selected.primaryColor,
          backgroundColor: "rgba(36, 90, 226, 0.12)",
          borderWidth: 2.2,
          pointRadius: 2,
          pointHoverRadius: 5,
          tension: 0.38,
          fill: true,
        },
      ],
    };
  }, [selected]);

  const chartOptions = useMemo<ChartOptions<"line">>(() => ({
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false, mode: "index" },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#171721",
        padding: 10,
        titleFont: { size: 11 },
        bodyFont: { size: 11 },
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#9293a3", maxRotation: 0, font: { size: 10 } },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(221,229,245,0.75)", drawTicks: false },
        border: { display: false },
        ticks: { color: "#9293a3", count: 5, padding: 8, font: { size: 10 } },
      },
    },
  }), []);

  return (
    <section id="results-proof" aria-labelledby="measured-results-title" className="mr-results-section w-full overflow-hidden bg-[#f3f6ff] bg-contain bg-right-top bg-no-repeat px-4 pb-[76px] pt-[84px] text-[var(--text-color2)] sm:px-6 lg:px-8" style={{ backgroundImage: "url('/assets/image/bg/chart-bg.webp')" }}>
      {/* Header intentionally unchanged */}
      <header className="mx-auto flex flex-col items-center text-center max-w-[1199px]">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
          <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.06)]">
            <span className="text-base leading-none">✦</span>PROVEN IMPACT
          </p>
          <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
        </div>
        <h2 className="title mt-4 leading-[1.08]">
          Understand Your SEO <span className="text-[var(--primary-color)] block">Performance and Online Visibility</span>
        </h2>
        <p className="desc mt-5 leading-[1.65] text-[var(--text-color)]">Managing digital marketing activities is one part of the process. Understanding how those activities perform is equally important. <strong> Foundly.ai</strong> brings available performance information into the wider marketing workflow, helping businesses review their search presence and assess where further improvements may be needed.</p>
      </header>

      <div className="mx-auto mt-[50px] max-w-[1240px]">
        {/* Four content-based report cards — compact layout matching the reference */}
        <div role="tablist" aria-label="Choose a performance report" className="grid grid-cols-1 gap-3 pb-4 sm:grid-cols-2 xl:grid-cols-4">
          {reports.map((report, index) => {
            const active = selectedId === report.id;
            const metric = report.metrics[0];
            const trendColors = ["#245ae2", "#8b5cf6", "#ff8068", "#16b8b0"];
            return (
              <button
                key={report.id}
                id={`report-tab-${report.id}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="report-panel"
                onClick={() => setSelectedId(report.id)}
                className={`group relative flex min-h-[190px] min-w-0 w-full flex-col rounded-[20px] border bg-white px-4 pb-3 pt-4 text-left shadow-[0_7px_22px_rgba(38,60,120,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(38,60,120,0.12)] ${active ? "border-[#397bff] ring-2 ring-[#397bff]/20 shadow-[0_10px_25px_rgba(57,123,255,0.16)]" : "border-[#e8edf7]"}`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border border-white bg-white text-[19px] text-[#245ae2] shadow-[0_3px_12px_rgba(37,70,130,0.12)]">
                    {report.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="block line-clamp-2 text-[13px] font-semibold leading-[1.2] text-[#111a35] sm:text-[14px]">{report.tab}</strong>
                    <span className="mt-1 block truncate text-[11px] leading-tight text-[var(--text-color)]">{report.description}</span>
                  </span>
                </span>
                {active && <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#477cff] text-white shadow-lg"><BsArrowRight /></span>}
                <span className="mt-3 block w-full">
                  <MiniTrend color={trendColors[index]} seed={index + 1} />
                </span>
                <span className="mt-auto flex items-center gap-2 pt-2">
                  <strong className="text-[18px] font-bold text-[#111a35]">{metric.value}</strong>
                  <span className="rounded-full bg-[#e9fbf2] px-2 py-0.5 text-[10px] font-semibold text-[#07934f]">↑ {metric.change}</span>
                </span>
                <span className="text-[11px] text-[var(--text-color)]">{metric.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected report dashboard */}
        <div id="report-panel" role="tabpanel" aria-labelledby={`report-tab-${selected.id}`} className="relative overflow-hidden rounded-[25px] border border-white/90 bg-white/75 p-4 shadow-[0_18px_50px_rgba(45,67,130,0.12)] backdrop-blur-2xl sm:p-5 lg:p-6 bg-contain bg-right-top bg-no-repeat" style={{ backgroundImage: "url('/assets/image/bg/chart-bg.webp')" }}>
          <div className="pointer-events-none absolute -right-10 -top-24 h-[340px] w-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(142,112,255,0.24),rgba(84,170,255,0.13)_45%,transparent_72%)] blur-2xl" />
          <div className="pointer-events-none absolute right-[9%] top-[-35px] h-[240px] w-[300px] rotate-[-18deg] rounded-[48%] bg-gradient-to-br from-[#d8c5ff]/70 via-[#b8dfff]/50 to-transparent blur-xl" />
          
          <div className="relative z-10 flex flex-wrap items-start justify-between gap-5">
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase text-[#245ae2]">Performance overview</p>
              <h3 className="mt-2 text-[20px] font-bold leading-tight text-[var(--primary-color)] sm:text-[25px]">{selected.title}</h3>
              <p className="mt-2 max-w-[760px] text-[14px] leading-[1.65] text-[var(--text-color)] sm:text-[17px]">{selected.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.tags.map((tag) => <span key={tag} className="inline-flex items-center rounded-full bg-[#e7efff] px-3 py-1.5 text-[11px] font-semibold text-[#2464e9] sm:text-[12px]">{tag}</span>)}
              </div>
            </div>
            <span className="relative z-10 inline-flex h-[48px] shrink-0 items-center gap-3 rounded-[16px] border border-white bg-white/90 px-4 text-[13px] font-semibold text-[#182342] shadow-[0_6px_20px_rgba(52,70,130,0.09)]">
              <FiCalendar className="h-5 w-5 text-[#475a8b]" />Last 12 months <BiChevronDown className="h-5 w-5 text-[#475a8b]" />
            </span>
          </div>

          <div className="relative z-10 mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            {selected.metrics.map((metric, index) => (
              <div key={metric.label} className={`relative min-h-[145px] overflow-hidden rounded-[19px] p-5 text-white shadow-[0_10px_25px_rgba(34,126,255,0.18)] sm:p-6 ${index === 0 ? "bg-gradient-to-br from-[#168fff] via-[#3289f7] to-[#245ae2]" : index === 1 ? "bg-gradient-to-br from-[#8151e7] via-[#7041d2] to-[#5d35bb]" : "border border-white bg-white/90 !text-[var(--primary-color)] shadow-[0_8px_22px_rgba(52,70,130,0.08)]"}`}>
                <div className="absolute -bottom-5 right-3 flex h-28 items-end gap-1.5 opacity-15">{[35, 52, 70, 90].map((height, i) => <span key={i} style={{ height: `${height}px` }} className={`w-[18px] rounded-t-md ${index === 2 ? "bg-[#338cff]" : "bg-white"}`} />)}</div>
                <div className="relative flex items-center gap-3"><span className={`flex h-[46px] w-[46px] items-center justify-center rounded-full text-[24px] ${index === 2 ? "bg-[#edf3ff] text-[#245ae2]" : "bg-white/20"}`}>{metric.icon}</span><span className="text-[14px] font-semibold">{metric.label}</span></div>
                <p className="relative mt-3 text-[36px] font-bold leading-none sm:text-[41px]">{metric.value}</p>
                <p className={`relative mt-3 inline-flex rounded-full px-3 py-1 text-[11px] font-bold ${index === 2 ? "bg-[#e9fbf2] text-[#078b50]" : "bg-white/95 text-[#078b50]"}`}>↑ {metric.change} <span className="ml-2 font-medium text-[#71809e]">vs previous period</span></p>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-5 rounded-[20px] border border-white bg-white/90 p-4 shadow-[0_8px_25px_rgba(46,67,125,0.07)] sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-[14px] sm:text-[17px] font-bold text-[#172343]">{selected.chartTitle}</h4>
                <p className="mt-1 text-[11px] text-[var(--text-color)]">Illustrative trend data · Last 12 months</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-[12px] font-semibold text-[#596789]">
                <span className="inline-flex items-center gap-2"><i className="h-3 w-3 rounded-full" style={{ backgroundColor: selected.primaryColor }} />{selected.primaryLabel}</span>
                <span className="inline-flex items-center gap-2"><i className="h-3 w-3 rounded-full" style={{ backgroundColor: selected.secondaryColor }} />{selected.secondaryLabel}</span>
              </div>
            </div>
            <div className="relative h-[260px] w-full sm:h-[310px] lg:h-[330px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="relative z-10 mt-5 flex flex-wrap items-center justify-between gap-3 px-1">
            <p className="inline-flex items-center gap-3 text-[12px] text-[var(--text-color)] sm:text-[14px]"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[20px] text-[#245ae2] shadow">✦</span>Illustrative performance data for demonstration purposes.</p>
            <a href="#" className="inline-flex items-center gap-3 rounded-full border border-[#dce7ff] bg-white px-5 py-3 text-[13px] font-bold text-[#1768ff] shadow-[0_5px_18px_rgba(50,110,255,0.12)] transition hover:-translate-y-0.5 hover:shadow-lg sm:text-[15px]">
              Explore performance <FiArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
