import { Reveal, SectionHeader } from "./Reveal";
import { Search, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  { n: "01", icon: Search, title: "Discovery", text: "Deep-dive into your goals, users, and requirements. We align on vision before writing a single line of code." },
  { n: "02", icon: FileText, title: "Planning", text: "Architecture, wireframes, and tech stack selection. You get a clear roadmap before development starts." },
  { n: "03", icon: Code2, title: "Development", text: "Clean, scalable code with regular progress updates. You're always in the loop — no surprises." },
  { n: "04", icon: Rocket, title: "Delivery", text: "Thorough testing, deployment, and post-launch support. I don't disappear after handoff." },
];

export function Process() {
  return (
    <section id="process" className="py-16 lg:py-24">
      <div className="container-x">
        <SectionHeader tag="Process" title="How I Work" subtitle="A simple, transparent process from idea to successful delivery." />

        <div className="mt-12 lg:mt-16 relative">
          {/* Desktop connecting line */}
          <div
            className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, #C8A84B 0 6px, transparent 6px 14px)", opacity: 0.4 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center gap-5">
                  {/* Step circle */}
                  <div className="relative shrink-0">
                    <div className="h-16 w-16 rounded-full border border-border bg-elevated flex items-center justify-center group transition hover:border-primary">
                      <s.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-primary flex items-center justify-center font-display text-[10px] font-bold text-primary-foreground">
                      {s.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-[220px] lg:mx-auto leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
