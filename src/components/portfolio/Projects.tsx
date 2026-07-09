import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowRight, X } from "lucide-react";

type Cat = "Mobile App" | "Websites" | "AI Automations";

/**
 * A clickable region overlaid on a showcase image. Position/size are given as
 * percentages of the image so they stay accurate at any render size.
 * e.g. left: "11%", top: "43.2%", width: "16%", height: "7%"
 */
type Hotspot = {
  href: string;
  label: string; // accessible label, e.g. "Get F&T Pizza on Google Play"
  left: string;
  top: string;
  width: string;
  height: string;
};

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
  /** Designed graphic (already at the 1.18:1 card ratio). When set, the card shows this image instead of the faux screenshot. */
  showcase?: string;
  /** Background behind the showcase image (matches the graphic so edges blend seamlessly). */
  showcaseBg?: string;
  /** Clickable regions baked into the showcase image (e.g. a Google Play badge). */
  hotspots?: Hotspot[];
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
    showcase: "/projects/boshhh.png",
    showcaseBg: "#2E7D6E",
    hotspots: [
      { href: "https://apps.apple.com/ie/app/boshhh/id6446495097", label: "Download Boshhh on the App Store", left: "7.2%", top: "88.5%", width: "16%", height: "7%" },
    ],
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
    showcase: "/projects/f&tpizza.png",
    showcaseBg: "#FCCD10",
    hotspots: [
      {
        href: "https://play.google.com/store/apps/details?id=com.abdatacracker.fandtpizza",
        label: "Get F&T Pizza on Google Play",
        left: "6%",
        top: "35.3%",
        width: "17%",
        height: "6.5%",
      },
    ],
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
    showcase: "/projects/objectsai.jpg",
    showcaseBg: "#7c3aed",
    hotspots: [
      { href: "https://play.google.com/store/apps/details?id=com.mobizion.objects.ai.eraser", label: "Get ObjectsAI on Google Play", left: "6.1%", top: "35.9%", width: "18.9%", height: "6.4%" },
      { href: "https://apps.apple.com/us/app/object-remover-and-ai-retouch/id6757428586", label: "Download ObjectsAI on the App Store", left: "26.4%", top: "35.9%", width: "16.6%", height: "6.4%" },
    ],
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
    showcase: "/projects/ai-life-coach.jpg",
    showcaseBg: "#10b981",
    hotspots: [
      { href: "https://play.google.com/store/apps/details?id=com.mobizion.coach", label: "Get AI Life Coach on Google Play", left: "6.1%", top: "46.67%", width: "18.9%", height: "6.4%" },
      { href: "https://apps.apple.com/cy/app/habit-tracker-ai-life-coach/id6745252758", label: "Download AI Life Coach on the App Store", left: "26.4%", top: "46.67%", width: "16.6%", height: "6.4%" },
    ],
  },
  {
    title: "La Bella Cucina",
    label: "Restaurant Website",
    description: "Italian restaurant site with online menu, table reservations, and photo gallery.",
    category: "Websites",
    accentColor: "#D2452F",
    emoji: "🍝",
    features: ["Menu", "Reservations", "Gallery"],
    showcase: "/projects/la-bella-cucina.jpg",
    showcaseBg: "#D2452F",
  },
  {
    title: "ProBuild Agency",
    label: "Construction Website",
    description: "Business website for a construction and renovation company with a quote request flow.",
    category: "Websites",
    accentColor: "#3b82f6",
    emoji: "🏗",
    features: ["Portfolio", "Quote Form", "WhatsApp"],
    showcase: "/projects/probuild-agency.jpg",
    showcaseBg: "#3b82f6",
  },
  {
    title: "RealEstate LeadGen",
    label: "Lead Scoring Pipeline",
    description: "Facebook leads scored by OpenAI and pushed to HubSpot. Saves agents 20+ hours a week.",
    category: "AI Automations",
    accentColor: "#0ea5e9",
    emoji: "🏠",
    features: ["Lead Capture", "AI Score", "CRM Push"],
    showcase: "/projects/realestate-leadgen.jpg",
    showcaseBg: "#0ea5e9",
  },
  {
    title: "Gmail AutoResponder",
    label: "Email Automation",
    description: "GPT-4 reads incoming emails and sends context-aware replies. Handles 80% of support volume.",
    category: "AI Automations",
    accentColor: "#8b5cf6",
    emoji: "📧",
    features: ["Auto Read", "GPT Reply", "Smart Filter"],
    showcase: "/projects/gmail-autoresponder.jpg",
    showcaseBg: "#8b5cf6",
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
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-foreground hover:bg-white transition"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function WorkCard({ p, className = "", onOpen }: { p: Project; className?: string; onOpen?: (p: Project) => void }) {
  const openProps = onOpen
    ? {
        role: "button" as const,
        tabIndex: 0,
        onClick: () => onOpen(p),
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(p);
          }
        },
      }
    : {};
  // Showcase projects render their designed graphic filling the card (same size
  // as the other cards), with clickable hotspots baked over baked-in badges.
  if (p.showcase) {
    return (
      <article
        {...openProps}
        aria-label={`View ${p.title} — ${p.label}`}
        className={`group relative flex flex-col cursor-pointer rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
      >
        <div
          className="relative aspect-[1.18/1] w-full shrink-0 overflow-hidden rounded-[28px] shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
          style={{ backgroundColor: p.showcaseBg ?? p.accentColor }}
        >
          <img
            src={p.showcase}
            alt={`${p.title} — ${p.label}`}
            className="absolute inset-0 h-full w-full object-cover select-none"
            loading="lazy"
          />
          {p.hotspots?.map((h) => (
            <a
              key={h.label}
              href={h.href}
              target="_blank"
              rel="noreferrer"
              aria-label={h.label}
              title={h.label}
              onClick={(e) => e.stopPropagation()}
              className="absolute z-10 rounded-lg outline-none focus:outline-none focus-visible:outline-none"
              style={{ left: h.left, top: h.top, width: h.width, height: h.height }}
            />
          ))}
        </div>

        {/* Caption — description + stack sit on the section background */}
        <div className="flex flex-1 flex-col px-1.5 pt-5">
          <p className="text-[14px] leading-relaxed text-foreground/75">{p.description}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {p.features.map((f) => (
              <span
                key={f}
                className="rounded-full border px-2.5 py-1 text-[10.5px] font-semibold"
                style={{ borderColor: `${p.accentColor}33`, background: `${p.accentColor}12`, color: p.accentColor }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
  }
  return (
    <article
      {...openProps}
      aria-label={`View ${p.title} — ${p.label}`}
      className={`relative aspect-[1.18/1] rounded-[28px] overflow-hidden shadow-card group cursor-pointer transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
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

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${p.title} — ${p.label}`}
      onClick={onClose}
      className={`fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm transition-opacity duration-200 ${show ? "opacity-100" : "opacity-0"}`}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25 transition"
      >
        <X className="h-6 w-6" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative transition-all duration-200 ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <img
          src={p.showcase}
          alt={`${p.title} — ${p.label}`}
          className="block h-auto w-auto max-h-[90vh] max-w-[95vw] rounded-2xl shadow-2xl select-none"
        />
        {p.hotspots?.map((h) => (
          <a
            key={h.label}
            href={h.href}
            target="_blank"
            rel="noreferrer"
            aria-label={h.label}
            title={h.label}
            onClick={(e) => e.stopPropagation()}
            className="absolute rounded-lg outline-none focus:outline-none focus-visible:outline-none"
            style={{ left: h.left, top: h.top, width: h.width, height: h.height }}
          />
        ))}
      </div>
    </div>
  );
}

const FEATURED_COUNT = 6;

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<Project | null>(null);
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
                  <WorkCard p={p} className="w-full" onOpen={setActive} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-6 px-6 pb-4">
                {projects.map((p) => (
                  <div key={p.title} className="w-[80vw] shrink-0 snap-center">
                    <WorkCard p={p} className="w-full" onOpen={setActive} />
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
              <WorkCard p={p} className="w-full" onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
    </section>
  );
}
