import { Reveal } from "./Reveal";
import { Smartphone, Globe, Workflow, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tone = "teal" | "yellow" | "red";

type Service = {
  icon: LucideIcon;
  title: string;
  sub: string;
  tone: Tone;
};

const services: Service[] = [
  { icon: Smartphone, title: "Mobile App Development", sub: "Android & Flutter, shipped to the stores", tone: "teal" },
  { icon: Globe, title: "Website Development", sub: "WordPress, WooCommerce & custom builds", tone: "yellow" },
  { icon: Workflow, title: "AI Automation", sub: "n8n, Zapier & Make pipelines", tone: "red" },
];

const toneIcon: Record<Tone, string> = {
  teal: "bg-primary text-primary-foreground",
  yellow: "bg-highlight text-foreground",
  red: "bg-redaccent text-white",
};

export function Services() {
  return (
    <section id="services" className="pt-28 pb-16 lg:pt-40 lg:pb-24 relative bg-surface">
      <Reveal className="container-x text-center mb-12 lg:mb-16">
        <span className="label-caps text-primary text-[12px] md:text-[13px]">Services</span>
        <h2 className="mt-3 font-display text-[34px] md:text-[44px] font-semibold tracking-tight text-foreground leading-[1.1]">
          What I Build
        </h2>
      </Reveal>

      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — stacked service list cards */}
        <Reveal className="order-2 lg:order-1">
          <div className="flex flex-col gap-5 max-w-[440px] mx-auto lg:mx-0 w-full">
            {services.map((s) => (
              <a
                key={s.title}
                href="#projects"
                className="card-hover group flex items-center gap-5 rounded-2xl border border-border bg-elevated p-5 shadow-soft"
              >
                <div className={`inline-flex shrink-0 h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${toneIcon[s.tone]}`}>
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-[18px] md:text-[19px] font-semibold text-foreground leading-tight">{s.title}</h3>
                  <p className="text-[13px] text-muted-foreground mt-0.5">{s.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right — heading, copy, stats */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="text-center lg:text-left">
            <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed max-w-[480px] mx-auto lg:mx-0">
              <p>
                Whether you need an Android app, a WordPress site, or an AI workflow that eliminates hours of manual work, I scope it, build it, and ship it without surprises.
              </p>
              <p>
                You bring the problem. I handle the architecture, implementation, and delivery. On time, without surprises.
              </p>
            </div>

            <a
              href="#contact"
              className="btn-primary mt-8 inline-flex items-center gap-2 rounded-[10px] px-6 py-3.5 text-sm font-semibold shadow-soft"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
