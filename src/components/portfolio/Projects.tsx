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
    description: "Credit-building & financial wellness app.",
    category: "Mobile App",
    accentColor: "#2E7D6E",
    emoji: "💳",
    features: ["Credit Score", "Cashflow", "SIM Manager"],
    appStore: "https://apps.apple.com/ie/app/boshhh/id6446495097",
  },
  {
    title: "F&T Pizza",
    label: "Food Delivery App",
    description: "Restaurant food ordering app, Calw Germany.",
    category: "Mobile App",
    accentColor: "#EAA23C",
    emoji: "🍕",
    features: ["Online Order", "PayPal Pay", "Live Menu"],
    playStore: "https://play.google.com/store/apps/details?id=com.abdatacracker.fandtpizza",
  },
  {
    title: "ObjectsAI",
    label: "AI Photo Editor",
    description: "AI photo editor — remove objects & backgrounds.",
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
    description: "Habit tracker & AI life-coaching app.",
    category: "Mobile App",
    accentColor: "#10b981",
    emoji: "⚡",
    features: ["Habit Tracker", "AI Coach", "75 Hard"],
    playStore: "https://play.google.com/store/apps/details?id=com.mobizion.coach",
    appStore: "https://apps.apple.com/cy/app/habit-tracker-ai-life-coach/id6745252758",
  },
  {
    title: "La Bella Cucina",
    label: "Web Design",
    description: "Italian restaurant website with reservations.",
    category: "Websites",
    accentColor: "#D2452F",
    emoji: "🍝",
    features: ["Menu", "Reservations", "Gallery"],
  },
  {
    title: "ProBuild Agency",
    label: "Agency Website",
    description: "Construction & renovation business website.",
    category: "Websites",
    accentColor: "#3b82f6",
    emoji: "🏗",
    features: ["Portfolio", "Quote Form", "WhatsApp"],
  },
  {
    title: "RealEstate LeadGen",
    label: "AI Automation",
    description: "n8n + OpenAI lead-scoring pipeline to HubSpot.",
    category: "AI Automations",
    accentColor: "#0ea5e9",
    emoji: "🏠",
    features: ["Lead Capture", "AI Score", "CRM Push"],
  },
  {
    title: "Gmail AutoResponder",
    label: "AI Automation",
    description: "GPT-4 drafts & sends context-aware email replies.",
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

export function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="projects" className="py-16 lg:py-24 overflow-hidden">
      <div className="container-x">
        {/* Header — left title + subtitle, right "Explore More Works" link */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-center sm:text-left">
            <div>
              <h2 className="font-display text-[34px] md:text-[48px] font-semibold tracking-tight text-foreground leading-[1.1]">
                My Latest Works
              </h2>
              <p className="mt-3 text-muted-foreground text-[15px] md:text-lg">Perfect solution for digital experience.</p>
            </div>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-1.5 text-secondary font-semibold text-[14px] hover:gap-2.5 transition-all self-center sm:self-auto"
            >
              {expanded ? "Show Less" : "Explore More Works"}
              <ArrowRight className={`h-4 w-4 transition-transform ${expanded ? "rotate-90" : ""}`} />
            </button>
          </div>
        </Reveal>

        {expanded ? (
          /* Expanded — 3-column grid of all works (contained in the section) */
          <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Reveal key={p.title}>
                <WorkCard p={p} className="w-full" />
              </Reveal>
            ))}
          </div>
        ) : (
          /* Default — horizontal scroll, contained within the section width */
          <Reveal>
            <div className="mt-10 lg:mt-14 flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-6 -mx-1 px-1">
              {projects.map((p) => (
                <WorkCard key={p.title} p={p} className="w-[78vw] sm:w-[43%] lg:w-[29%] shrink-0 snap-start" />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
