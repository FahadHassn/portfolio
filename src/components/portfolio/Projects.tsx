import { useState, useEffect, useRef } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { ArrowRight } from "lucide-react";

type Cat = "All" | "Mobile App" | "Websites" | "AI Automations";

type Project = {
  title: string;
  description: string;
  category: Exclude<Cat, "All">;
  tags: string[];
  accentColor: string;
  bgColor: string;
  emoji: string;
  features: string[];
  playStore?: string;
  appStore?: string;
  website?: string;
};

const projects: Project[] = [
  // ── Mobile Apps ─────────────────────────────────────────────
  {
    title: "Boshhh",
    description:
      "Credit-building & financial wellness app. Tracks Equifax credit score, affordability score, cashflow analytics, SIM plan management, and push notification alerts.",
    category: "Mobile App",
    tags: ["Flutter", "Dart", "Firebase", "REST API", "Stripe"],
    accentColor: "#6366f1",
    bgColor: "#0e0d1f",
    emoji: "💳",
    features: ["Credit Score", "Cashflow", "SIM Manager"],
    appStore: "https://apps.apple.com/ie/app/boshhh/id6446495097",
  },
  {
    title: "F&T Pizza",
    description:
      "Restaurant food ordering app for F&T Pizza, Calw Germany. Full menu with pizza, pasta, burgers & Indian dishes — PayPal, cash, and card payments supported.",
    category: "Mobile App",
    tags: ["Java", "Android", "Firebase", "PayPal SDK"],
    accentColor: "#c0392b",
    bgColor: "#1a0a08",
    emoji: "🍕",
    features: ["Online Order", "PayPal Pay", "Live Menu"],
    playStore: "https://play.google.com/store/apps/details?id=com.abdatacracker.fandtpizza",
  },
  {
    title: "ObjectsAI",
    description:
      "AI-powered Flutter photo editor to remove objects, backgrounds & watermarks from photos. Includes AI upscaler, old photo restoration, and hairstyle changer tools.",
    category: "Mobile App",
    tags: ["Flutter", "Dart", "ML Kit", "TensorFlow", "Firebase"],
    accentColor: "#7c3aed",
    bgColor: "#110c1f",
    emoji: "✦",
    features: ["Object Erase", "BG Remove", "AI Upscale"],
    playStore: "https://play.google.com/store/apps/details?id=com.mobizion.objects.ai.eraser",
    appStore: "https://apps.apple.com/us/app/object-remover-and-ai-retouch/id6757428586",
  },
  {
    title: "AI Life Coach",
    description:
      "Flutter habit tracker & AI life coaching app. Tracks streaks, supports 75 Hard challenges, daily journaling, mood logs, and personalized AI coaching prompts.",
    category: "Mobile App",
    tags: ["Flutter", "Dart", "OpenAI", "Firebase", "RevenueCat"],
    accentColor: "#10b981",
    bgColor: "#081a12",
    emoji: "⚡",
    features: ["Habit Tracker", "AI Coach", "75 Hard"],
    playStore: "https://play.google.com/store/apps/details?id=com.mobizion.coach",
    appStore: "https://apps.apple.com/cy/app/habit-tracker-ai-life-coach/id6745252758",
  },

  // ── AI Automations ───────────────────────────────────────────
  {
    title: "RealEstate LeadGen",
    description:
      "n8n + OpenAI pipeline that captures real estate leads from Facebook Ads, scores them with AI, and instantly pushes hot leads into the agent's HubSpot CRM.",
    category: "AI Automations",
    tags: ["n8n", "OpenAI", "Facebook Ads", "HubSpot"],
    accentColor: "#f59e0b",
    bgColor: "#1a1200",
    emoji: "🏠",
    features: ["Lead Capture", "AI Score", "CRM Push"],
  },
  {
    title: "Gmail AutoResponder",
    description:
      "Make.com workflow that reads incoming Gmail threads, uses GPT-4 to draft context-aware replies, and sends them automatically — cutting email response time by 80%.",
    category: "AI Automations",
    tags: ["Make.com", "OpenAI", "Gmail", "Google Sheets"],
    accentColor: "#ea4335",
    bgColor: "#1a0808",
    emoji: "📧",
    features: ["Auto Read", "GPT Reply", "Smart Filter"],
  },
  {
    title: "AutoInvoice",
    description:
      "Make.com workflow that auto-generates branded PDF invoices from Airtable project data and emails them to clients on a schedule — zero manual effort required.",
    category: "AI Automations",
    tags: ["Make.com", "Airtable", "PDF", "Gmail", "Zapier"],
    accentColor: "#06b6d4",
    bgColor: "#041418",
    emoji: "🧾",
    features: ["PDF Invoice", "Auto Send", "Airtable Sync"],
  },
  {
    title: "Social Media Scheduler",
    description:
      "n8n automation that repurposes a single blog post into Twitter threads, LinkedIn posts, and Instagram captions using GPT-4, then schedules them across all platforms.",
    category: "AI Automations",
    tags: ["n8n", "OpenAI", "Twitter API", "LinkedIn API", "Buffer"],
    accentColor: "#ec4899",
    bgColor: "#1a0812",
    emoji: "📱",
    features: ["AI Repurpose", "Multi-Platform", "Auto Schedule"],
  },
  {
    title: "E-Commerce Order Bot",
    description:
      "Zapier + OpenAI chatbot that handles WooCommerce order status queries, refund requests, and shipping updates via WhatsApp — fully automated 24/7 customer support.",
    category: "AI Automations",
    tags: ["Zapier", "OpenAI", "WooCommerce", "WhatsApp API"],
    accentColor: "#22c55e",
    bgColor: "#061a0c",
    emoji: "🤖",
    features: ["Order Status", "Refund Flow", "WhatsApp Bot"],
  },
  {
    title: "YouTube → Blog AI",
    description:
      "n8n pipeline that takes any YouTube video, transcribes it with Whisper, rewrites it as an SEO blog post using GPT-4, and auto-publishes it to WordPress.",
    category: "AI Automations",
    tags: ["n8n", "Whisper AI", "OpenAI", "WordPress", "REST API"],
    accentColor: "#ff6b35",
    bgColor: "#1a0c06",
    emoji: "🎬",
    features: ["Transcribe", "GPT Rewrite", "Auto Publish"],
  },
  {
    title: "Support Ticket Triage",
    description:
      "Make.com automation that reads incoming support emails, uses GPT-4 to classify urgency and topic, then routes tickets to the right team channel in Slack instantly.",
    category: "AI Automations",
    tags: ["Make.com", "OpenAI", "Gmail", "Slack", "Notion"],
    accentColor: "#8b5cf6",
    bgColor: "#0d0818",
    emoji: "🎫",
    features: ["AI Classify", "Auto Route", "Slack Alert"],
  },

  // ── Websites ─────────────────────────────────────────────────
  {
    title: "La Bella Cucina",
    description:
      "Full restaurant website for an Italian dining brand with an online reservation system, full menu showcase, photo gallery, and Google Maps integration.",
    category: "Websites",
    tags: ["WordPress", "Elementor", "WooCommerce", "PHP"],
    accentColor: "#e67e22",
    bgColor: "#1a0e04",
    emoji: "🍝",
    features: ["Menu", "Reservations", "Gallery"],
  },
  {
    title: "ProBuild Agency",
    description:
      "Modern business website for a construction & renovation company. Project portfolio, service pages, quote request form, and WhatsApp contact integration.",
    category: "Websites",
    tags: ["WordPress", "Elementor", "PHP", "SMTP"],
    accentColor: "#3b82f6",
    bgColor: "#050e1a",
    emoji: "🏗",
    features: ["Portfolio", "Quote Form", "WhatsApp"],
  },
];

const filters: Cat[] = ["All", "Mobile App", "Websites", "AI Automations"];

const catColor: Record<Exclude<Cat, "All">, string> = {
  "Mobile App": "text-primary border-primary/40 bg-primary/10",
  Websites: "text-muted-foreground border-border bg-surface",
  "AI Automations": "text-primary border-primary/40 bg-primary/10",
};

function PlayStoreIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.37.2.8.2 1.18.02l12.83-7.41-2.79-2.79L3.18 23.76zm-1.15-20.5C1.76 3.6 1.6 4 1.6 4.5v15c0 .5.16.9.43 1.24l.07.06 8.4-8.4v-.2L2.1 3.2l-.07.06zM20.37 10.4l-2.83-1.63-3.12 3.12 3.12 3.12 2.84-1.64c.81-.47.81-1.5-.01-1.97zM4.36.22L17.19 7.63l-2.79 2.79L3.18.24C3.56.06 4 .06 4.36.22z"/>
    </svg>
  );
}

function AppStoreIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.3-2.17 3.87.03 3.07 2.68 4.1 2.71 4.11l-.09.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function ExternalLinkIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function useCountUp(target: number, duration = 1400) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function Stat({ n, label, suffix = "+" }: { n: number; label: string; suffix?: string }) {
  const { val, ref } = useCountUp(n);
  return (
    <div ref={ref} className="col-span-1 flex flex-col items-center justify-center rounded-[12px] border border-border/80 bg-[#121212] p-4 text-center shadow-lg transition-transform hover:-translate-y-1 duration-300">
      <div className="font-display text-[26px] md:text-[28px] font-bold text-primary mb-1 drop-shadow-[0_0_12px_rgba(200,168,75,0.4)]">{val}{suffix}</div>
      <div className="text-[12px] md:text-[13px] font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Cat>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const list = showAll ? filtered : filtered.slice(0, 6);
  const hasMore = filtered.length > 6;

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="container-x">
        <SectionHeader tag="Portfolio" title="Featured Projects" subtitle="A selection of recent work across mobile, web, and automation." />

        {/* Filter tabs */}
        <Reveal>
          <div className="mt-12 lg:mt-16 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => { setActive(f); setShowAll(false); }}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  active === f
                    ? "border border-primary bg-primary text-primary-foreground"
                    : "border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 lg:mt-12 flex flex-nowrap items-stretch overflow-x-auto hide-scrollbar md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 py-4 -my-4 md:py-0 md:my-0">
          {list.map((p) => (
            <article key={p.title} className="w-[75vw] sm:w-[60vw] md:w-full min-w-0 shrink-0 snap-center md:snap-align-none self-stretch card-hover group flex flex-col overflow-hidden rounded-2xl border border-border bg-elevated outline-none focus:outline-none">

              {/* Project image area */}
              <div
                className="relative w-full aspect-video overflow-hidden border-b border-border flex flex-col items-center justify-center"
                style={{ backgroundColor: p.bgColor }}
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `linear-gradient(${p.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${p.accentColor} 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                <div
                  className="absolute w-40 h-40 rounded-full blur-[50px] opacity-20"
                  style={{ background: p.accentColor }}
                />
                <span className={`absolute top-3 left-3 rounded-full border px-2.5 py-1 text-[11px] font-medium z-10 ${catColor[p.category]}`}>
                  {p.category}
                </span>
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-3"
                  style={{ background: `${p.accentColor}20`, border: `1px solid ${p.accentColor}44` }}
                >
                  {p.emoji}
                </div>
                <span
                  className="relative z-10 font-display text-[16px] font-bold tracking-wide mb-3"
                  style={{ color: p.accentColor }}
                >
                  {p.title}
                </span>
                <div className="relative z-10 flex flex-wrap justify-center gap-1.5 px-4">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-medium px-2.5 py-0.5 rounded-full"
                      style={{
                        background: `${p.accentColor}18`,
                        border: `1px solid ${p.accentColor}33`,
                        color: p.accentColor,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1 items-center text-center md:items-start md:text-left">
                <h3 className="font-display text-[20px] font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons — only render if link exists */}
                {(p.playStore || p.appStore || p.website) && (
                  <div className="mt-auto pt-5 flex flex-wrap justify-center md:justify-start gap-2">
                    {p.playStore && (
                      <a href={p.playStore} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary transition">
                        <PlayStoreIcon /> Play Store
                      </a>
                    )}
                    {p.appStore && (
                      <a href={p.appStore} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary transition">
                        <AppStoreIcon /> App Store
                      </a>
                    )}
                    {p.website && (
                      <a href={p.website} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary transition">
                        <ExternalLinkIcon /> View Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* See All / Show Less */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-8 py-3 text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-[2px]"
            >
              {showAll ? "Show Less" : "See All Projects"}
              <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-90" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}