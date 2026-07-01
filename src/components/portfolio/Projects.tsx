import { useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

type Cat = "Mobile App" | "Websites" | "AI Automations";

type Project = {
  title: string;
  label: string;
  description: string;
  category: Cat;
  accentColor: string;
  emoji: string;
  features: string[];
  playStore?: string;
  appStore?: string;
  website?: string;
};

const projects: Project[] = [
  {
    title: "Boshhh",
    label: "Credit Score App",
    description: "Credit-building and financial wellness app, live on the App Store.",
    category: "Mobile App",
    accentColor: "#2E7D6E",
    emoji: "💳",
    features: ["Credit Score", "Cashflow", "SIM Manager"],
    appStore: "https://apps.apple.com/ie/app/boshhh/id6446495097",
  },
  {
    title: "F&T Pizza",
    label: "Food Ordering App",
    description: "Online ordering app for a restaurant in Calw, Germany. PayPal-integrated.",
    category: "Mobile App",
    accentColor: "#EAA23C",
    emoji: "🍕",
    features: ["Online Order", "PayPal Pay", "Live Menu"],
    playStore: "https://play.google.com/store/apps/details?id=com.abdatacracker.fandtpizza",
  },
  {
    title: "ObjectsAI",
    label: "AI Photo Editor",
    description: "AI-powered object and background remover. Cross-platform on Play Store and App Store.",
    category: "Mobile App",
    accentColor: "#7c3aed",
    emoji: "✦",
    features: ["Object Erase", "BG Remove", "AI Upscale"],
    playStore: "https://play.google.com/store/apps/details?id=com.mobizion.objects.ai.eraser",
    appStore: "https://apps.apple.com/us/app/object-remover-and-ai-retouch/id6757428586",
  },
  {
    title: "AI Life Coach",
    label: "Habit Tracker App",
    description: "Habit tracking and AI coaching. 75 Hard, streaks, and daily prompts. On both stores.",
    category: "Mobile App",
    accentColor: "#10b981",
    emoji: "⚡",
    features: ["Habit Tracker", "AI Coach", "75 Hard"],
    playStore: "https://play.google.com/store/apps/details?id=com.mobizion.coach",
    appStore: "https://apps.apple.com/cy/app/habit-tracker-ai-life-coach/id6745252758",
  },
  {
    title: "La Bella Cucina",
    label: "Restaurant Website",
    description: "Italian restaurant site with online menu, table reservations, and photo gallery.",
    category: "Websites",
    accentColor: "#D2452F",
    emoji: "🍝",
    features: ["Menu", "Reservations", "Gallery"],
  },
  {
    title: "ProBuild Agency",
    label: "Construction Website",
    description: "Business website for a construction and renovation company with a quote request flow.",
    category: "Websites",
    accentColor: "#3b82f6",
    emoji: "🏗",
    features: ["Portfolio", "Quote Form", "WhatsApp"],
  },
  {
    title: "RealEstate LeadGen",
    label: "Lead Scoring Pipeline",
    description: "Facebook leads scored by OpenAI and pushed to HubSpot. Saves agents 20+ hours a week.",
    category: "AI Automations",
    accentColor: "#0ea5e9",
    emoji: "🏠",
    features: ["Lead Capture", "AI Score", "CRM Push"],
  },
  {
    title: "Gmail AutoResponder",
    label: "Email Automation",
    description: "GPT-4 reads incoming emails and sends context-aware replies. Handles 80% of support volume.",
    category: "AI Automations",
    accentColor: "#8b5cf6",
    emoji: "📧",
    features: ["Auto Read", "GPT Reply", "Smart Filter"],
  },
];

function StoreLinks({ p }: { p: Project }) {
  const links = [
    p.playStore && { href: p.playStore, label: "Play Store" },
    p.appStore && { href: p.appStore, label: "App Store" },
    p.website && { href: p.website, label: "View Live" },
  ].filter(Boolean) as { href: string; label: string }[];
  if (!links.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-foreground hover:bg-white transition"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function WorkCard({ p, className = "" }: { p: Project; className?: string }) {
  return (
    <article
      className={`relative aspect-[1.18/1] rounded-[28px] overflow-hidden shadow-card group ${className}`}
      style={{ backgroundColor: p.accentColor }}
    >
      {/* depth + texture */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.16),rgba(0,0,0,0.22))]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
      />

      {/* Title overlay top-left */}
      <div className="absolute top-6 left-6 right-6 z-20">
        <span className="text-white/85 text-[11px] font-semibold uppercase tracking-[0.12em]">{p.category}</span>
        <h3 className="text-white font-display text-[24px] sm:text-[27px] font-semibold leading-tight mt-1">{p.label}</h3>
        <p className="text-white/80 text-[12px] mt-1">{p.title}</p>
      </div>

      {/* Faux screenshot panel */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-6 w-[80%] rounded-t-2xl bg-elevated shadow-2xl px-4 pt-3 pb-6 transition-transform duration-500 group-hover:-translate-y-1">
        {/* window dots */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="h-2 w-2 rounded-full" style={{ background: p.accentColor }} />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-xl text-xl shrink-0"
            style={{ background: `${p.accentColor}1f` }}
          >
            {p.emoji}
          </span>
          <div className="min-w-0">
            <div className="font-display text-[14px] font-semibold text-foreground truncate">{p.title}</div>
            <div className="text-[11px] text-muted-foreground truncate">{p.description}</div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.features.map((f) => (
            <span
              key={f}
              className="rounded-full px-2 py-0.5 text-[10px] font-medium"
              style={{ background: `${p.accentColor}14`, color: p.accentColor }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Store links — top right */}
      <div className="absolute top-6 right-6 z-20">
        <StoreLinks p={p} />
      </div>
    </article>
  );
}

const FEATURED_COUNT = 6;

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const desktopVisible = expanded ? projects : projects.slice(0, FEATURED_COUNT);
  const hasMore = projects.length > FEATURED_COUNT;

  return (
    <section id="projects" className="py-16 lg:py-24 overflow-hidden bg-surface">
      <div className="container-x">
        {/* Header — left title + subtitle, right "Explore More Works" link */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="label-caps text-primary text-[12px] md:text-[13px]">Portfolio</span>
              <h2 className="mt-2 font-display text-[34px] md:text-[48px] font-semibold tracking-tight text-foreground leading-[1.1]">
                Selected Work
              </h2>
              <p className="mt-3 text-muted-foreground text-[15px] md:text-lg">Apps on the Play Store and App Store, live websites, and automations in production.</p>
            </div>
            {hasMore && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-1.5 text-secondary-strong font-semibold text-[14px] hover:gap-2.5 transition-all self-center sm:self-auto"
              >
                {expanded ? "Show Less" : "Explore More Works"}
                <ArrowRight className={`h-4 w-4 transition-transform ${expanded ? "-rotate-90" : "rotate-90"}`} />
              </button>
            )}
          </div>
        </Reveal>

        {/* Mobile — horizontal swipe carousel (all projects); switches to a vertical list on expand */}
        <div className="sm:hidden mt-10">
          {expanded ? (
            <div className="grid grid-cols-1 gap-6">
              {projects.map((p) => (
                <Reveal key={p.title}>
                  <WorkCard p={p} className="w-full" />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-6 px-6 pb-4">
                {projects.map((p) => (
                  <div key={p.title} className="w-[80vw] shrink-0 snap-center">
                    <WorkCard p={p} className="w-full" />
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>

        {/* Desktop — grid, first 6 by default, all on expand */}
        <div className="hidden sm:grid mt-10 lg:mt-14 grid-cols-2 lg:grid-cols-3 gap-6">
          {desktopVisible.map((p) => (
            <Reveal key={p.title}>
              <WorkCard p={p} className="w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
