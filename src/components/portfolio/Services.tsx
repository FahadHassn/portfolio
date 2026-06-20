import { Reveal } from "./Reveal";
import { Smartphone, Globe, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tone = "teal" | "yellow" | "red";

type Service = {
  icon: LucideIcon;
  title: string;
  projects: string;
  tone: Tone;
};

const services: Service[] = [
  { icon: Smartphone, title: "Mobile App Development", projects: "20+ Projects", tone: "teal" },
  { icon: Globe, title: "Website Development", projects: "18+ Projects", tone: "yellow" },
  { icon: Workflow, title: "AI Automation", projects: "20+ Workflows", tone: "red" },
];

const toneIcon: Record<Tone, string> = {
  teal: "bg-primary text-primary-foreground",
  yellow: "bg-highlight text-white",
  red: "bg-redaccent text-white",
};

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 relative bg-surface">
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
                  <p className="text-[13px] text-muted-foreground mt-0.5">{s.projects}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right — heading, copy, stats */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="text-center lg:text-left">
            <span className="label-caps text-primary text-[20px] md:text-[24px]">Services</span>
            <h2 className="mt-3 font-display text-[34px] md:text-[44px] font-semibold tracking-tight text-foreground leading-[1.1]">
              What Do I Help?
            </h2>
            <div className="mt-5 space-y-4 text-[15px] text-muted-foreground leading-relaxed max-w-[480px] mx-auto lg:mx-0">
              <p>
                I help you find a solution and solve your problems. I use a process-driven approach to design and build digital products that also grow your business.
              </p>
              <p>
                From mobile apps to websites and intelligent automations — I deliver end-to-end, scalable products tailored to your goals.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-12">
              <div>
                <div className="font-display text-[40px] md:text-[48px] font-bold text-foreground leading-none">50+</div>
                <div className="mt-1 text-[13px] text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="font-display text-[40px] md:text-[48px] font-bold text-foreground leading-none">40+</div>
                <div className="mt-1 text-[13px] text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
