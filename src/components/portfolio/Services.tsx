import { Reveal, SectionHeader } from "./Reveal";
import { Smartphone, Globe, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  tone: "cyan" | "purple" | "muted";
};

const services: Service[] = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "High-performance native and cross-platform apps built with Java, Kotlin, Jetpack Compose, and Flutter. Delivering seamless user experiences with clean architecture and solid backend integrations.",
    tags: ["Android", "Flutter", "Jetpack Compose", "Firebase"],
    tone: "cyan",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom WordPress websites, WooCommerce stores, and tailored business landing pages. Fast, secure, properly SEO-structured, and designed strictly to convert visitors into customers.",
    tags: ["WordPress", "WooCommerce", "Elementor", "PHP"],
    tone: "muted",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description: "Automate repetitive business tasks with intelligent n8n, Zapier, and Make workflows connected to your daily tools. Integrate AI to parse data and make informed decisions — saving hours every single week.",
    tags: ["n8n", "Zapier", "Make.com", "OpenAI / Claude"],
    tone: "purple",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 relative">
      <div className="absolute right-0 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/4 blur-[120px]" />
      <div className="container-x">
        <SectionHeader tag="Services" title="What I Offer" subtitle="End-to-end digital solutions tailored to your business needs." />

        <div className="mt-12 lg:mt-16 flex flex-nowrap items-stretch overflow-x-auto hide-scrollbar md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 gap-5 pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 py-4 -my-4 md:py-0 md:my-0">
          {services.map((s, i) => (
            <article key={s.title} className="flex flex-col self-stretch w-[75vw] sm:w-[60vw] md:w-full min-w-0 shrink-0 snap-center md:snap-align-none card-hover group rounded-2xl border border-border bg-elevated p-8 relative overflow-hidden transition-all hover:shadow-[0_4px_30px_rgba(232,87,42,0.06)] outline-none focus:outline-none items-center text-center md:items-start md:text-left">
              {/* Gold corner accent on hover */}
                <div className="absolute top-0 right-0 h-20 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-primary rounded-tr-xl" />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                  <div className={`inline-flex shrink-0 h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
                    s.tone === "cyan" ? "bg-primary/10 text-primary border border-primary/20 group-hover:shadow-[0_0_20px_rgba(232,87,42,0.25)]"
                    : s.tone === "purple" ? "bg-primary/10 text-primary border border-primary/20 group-hover:shadow-[0_0_20px_rgba(232,87,42,0.25)]"
                    : "bg-surface text-muted-foreground border border-border group-hover:text-primary group-hover:border-primary/20"
                  }`}>
                    <s.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[20px] md:text-[24px] font-semibold text-foreground leading-snug">{s.title}</h3>
                </div>

                <p className="mt-4 md:mt-5 text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">{s.description}</p>

                <div className="pt-6 md:pt-8 flex flex-wrap gap-2 mt-auto justify-center md:justify-start">
                  {s.tags.map((t) => (
                    <span key={t} className={`rounded-md border px-3 py-1.5 text-[12px] font-medium tracking-wide transition-colors ${
                      s.tone === "cyan"
                        ? "border-primary/30 text-primary bg-primary/5 group-hover:bg-primary/10"
                        : s.tone === "purple"
                        ? "border-secondary/30 text-secondary bg-secondary/5 group-hover:bg-secondary/10"
                        : "border-border text-muted-foreground bg-surface group-hover:border-primary/30 group-hover:text-primary"
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
          ))}
        </div>
      </div>
    </section>
  );
}