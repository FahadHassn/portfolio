import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowRight, MapPin } from "lucide-react";

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

function StatTile({ n, label, suffix = "+", accent = false, className = "" }: {
  n: number; label: string; suffix?: string; accent?: boolean; className?: string;
}) {
  const { val, ref } = useCountUp(n);
  return (
    <div
      ref={ref}
      className={`card-hover flex flex-col justify-center rounded-3xl border p-5 sm:p-6 ${
        accent
          ? "border-transparent bg-primary text-primary-foreground shadow-card"
          : "border-border bg-elevated shadow-soft"
      } ${className}`}
    >
      <div className={`font-display text-[34px] sm:text-[40px] font-bold leading-none ${accent ? "text-primary-foreground" : "text-primary"}`}>
        {val}{suffix}
      </div>
      <div className={`mt-2 text-[13px] font-medium ${accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {label}
      </div>
    </div>
  );
}

const values = ["Fast Delivery", "Clean Code", "Client-First", "Always Learning"];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Faint accent glow */}
      <div className="absolute right-0 top-1/3 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container-x">
        {/* Section header */}
        <Reveal>
          <div className="max-w-2xl">
            <span className="label-caps text-primary text-[12px] md:text-[13px]">About Me</span>
            <h2 className="mt-3 font-display text-[32px] md:text-[44px] font-semibold leading-[1.1] tracking-tight text-foreground">
              I build smart apps and AI automations that solve real business problems.
            </h2>
          </div>
        </Reveal>

        {/* Bento grid */}
        <div className="mt-10 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {/* Bio tile — anchor */}
          <Reveal className="col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="h-full flex flex-col rounded-3xl border border-border bg-elevated p-7 sm:p-8 shadow-soft">
              <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                <p>
                  Over the past 4+ years I've shipped mobile apps and websites for clients across the UK, Europe, and beyond. More recently I've expanded into AI automation, building pipelines that eliminate repetitive work and keep businesses running without manual effort.
                </p>
                <p>
                  I care about the details that users never see but always feel: clean architecture, fast load times, and products that keep working long after launch.
                </p>
              </div>

              {/* Values */}
              <div className="mt-6 flex flex-wrap gap-2">
                {values.map((v) => (
                  <span key={v} className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                    {v}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-7 flex items-center justify-between gap-4">
                <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-[12px] px-6 py-3.5 text-sm font-semibold shadow-soft">
                  Let's work together <ArrowRight className="h-4 w-4" />
                </a>
                <span className="font-script text-[22px] font-medium text-foreground/70 whitespace-nowrap">
                  Fahad<span className="text-primary">.</span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Stats — 2x2 on the right */}
          <Reveal><StatTile n={50} label="Projects Shipped" accent className="h-full" /></Reveal>
          <Reveal delay={0.05}><StatTile n={40} label="Happy Clients" className="h-full" /></Reveal>
          <Reveal delay={0.1}><StatTile n={4} label="Years Experience" className="h-full" /></Reveal>
          <Reveal delay={0.15}><StatTile n={20} label="AI Workflows Built" className="h-full" /></Reveal>

          {/* Availability tile */}
          <Reveal className="col-span-2" delay={0.1}>
            <div className="dot-grid card-hover h-full flex flex-col justify-center rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-7">
              <span className="inline-flex items-center gap-2.5 text-primary font-semibold text-[15px]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                Available for new projects
              </span>
              <p className="mt-2 text-[13px] text-muted-foreground">
                Currently taking on freelance and contract work. Typically reply within a few hours.
              </p>
            </div>
          </Reveal>

          {/* Location tile */}
          <Reveal className="col-span-2" delay={0.15}>
            <div className="card-hover h-full flex items-center gap-4 rounded-3xl border border-border bg-elevated p-6 sm:p-7 shadow-soft">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="font-display font-semibold text-foreground leading-tight">Gujranwala, Pakistan</div>
                <p className="text-[13px] text-muted-foreground mt-0.5">Working remotely with clients worldwide.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
