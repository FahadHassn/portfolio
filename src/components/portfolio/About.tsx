import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    <div ref={ref} className="rounded-2xl border border-border bg-elevated p-5 text-center">
      <div className="font-display text-3xl font-bold text-primary">{val}{suffix}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const highlights = [
  "Android (Java · Kotlin · Jetpack Compose)",
  "Cross-platform Flutter & Dart apps",
  "WordPress, WooCommerce & Elementor",
  "AI automations with n8n, Zapier & Make",
  "UI design with Canva",
];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 relative">
      {/* Faint gold accent */}
      <div className="absolute left-0 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <Reveal>
          <div className="space-y-8">
            {/* Avatar card */}
            <div className="relative mx-auto lg:mx-0 h-72 w-72">
              <div className="h-full w-full rounded-3xl border-2 border-border bg-elevated flex items-center justify-center overflow-hidden" style={{ boxShadow: "inset 0 0 40px rgba(232,87,42,0.06)" }}>
                <div className="text-center">
                  <div className="font-display text-7xl font-bold text-primary">SF</div>
                  <div className="mt-2 label-caps text-muted-foreground">Fahad Hassan</div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 h-8 w-8 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
              <div className="absolute -bottom-1 -right-1 h-8 w-8 border-b-2 border-r-2 border-primary rounded-br-2xl" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <Stat n={50} label="Projects Done" />
              <Stat n={40} label="Happy Clients" />
              <Stat n={4} label="Years Experience" />
              <Stat n={20} label="AI Workflows Built" />
            </div>
          </div>
        </Reveal>

        {/* Right */}
        <Reveal delay={0.1}>
          <div className="space-y-6">
            <span className="label-caps text-primary">About Me</span>
            <h2 className="font-display text-3xl sm:text-[40px] font-semibold leading-tight tracking-tight text-foreground">
              Passionate Developer with a Love for Automation
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a developer with 4+ years of experience specializing in mobile app development, WordPress websites, and AI-powered workflow automation. I build scalable Android and Flutter apps using Java, Kotlin, Jetpack Compose, and Dart.
              </p>
              <p>
                Beyond code, I design intelligent automation pipelines using n8n, Zapier, and Make — turning repetitive tasks into efficient systems that free up time for what matters most.
              </p>
            </div>

            {/* Highlights list */}
            <ul className="space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>

            {/* Values pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Fast Delivery", "Clean Code", "Client-First", "Always Learning"].map((v) => (
                <span key={v} className="rounded-full border border-border bg-elevated px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                  {v}
                </span>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold">
              Let's Talk <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
