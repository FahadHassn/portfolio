import { Reveal } from "./Reveal";

type Tone = "teal" | "red" | "yellow";

type Job = {
  company: string;
  period: string;
  role: string;
  description: string;
  tone: Tone;
};

const jobs: Job[] = [
  {
    company: "Self Employed",
    period: "2022 – Present",
    role: "Freelance Developer & AI Automation Specialist",
    description:
      "Building AI automation pipelines and WordPress websites for clients in the UK, Europe, and beyond. Projects range from n8n lead-gen workflows to full WooCommerce stores, scoped, shipped, and supported.",
    tone: "teal",
  },
  {
    company: "Mobizion",
    period: "Nov 2023 – Present",
    role: "Mobile App Developer",
    description:
      "Building production Android and Flutter apps with Kotlin, Jetpack Compose, and Dart. Shipped ObjectsAI (AI photo editor) and AI Life Coach, both live on the Play Store and App Store with thousands of users.",
    tone: "red",
  },
  {
    company: "Dev Valley",
    period: "Sep 2022 – Oct 2023",
    role: "Android Developer",
    description:
      "Native Android development with Java and Kotlin. Built and maintained production apps on the Play Store, integrated third-party APIs, and implemented MVVM architecture across multiple client projects.",
    tone: "yellow",
  },
];

const dotColor: Record<Tone, string> = {
  teal: "bg-primary",
  red: "bg-redaccent",
  yellow: "bg-highlight",
};

export function Process() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div className="text-center">
            <span className="label-caps text-primary text-[12px] md:text-[13px]">Career</span>
            <h2 className="mt-3 font-display text-[34px] md:text-[48px] font-semibold tracking-tight text-foreground">
              Where I've Worked
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 lg:mt-16 max-w-4xl mx-auto">
          {jobs.map((j, i) => (
            <Reveal key={j.company} delay={i * 0.08}>
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-x-10 items-start">
                {/* Left — company + period (desktop), left-aligned like the reference */}
                <div className="hidden lg:block lg:pl-2">
                  <h3 className="font-display text-[20px] font-semibold text-foreground">{j.company}</h3>
                  <p className="text-[14px] text-muted-foreground mt-1">{j.period}</p>
                </div>

                {/* Right — dotted line + dot + role/desc */}
                <div className={`relative pl-8 ${i === jobs.length - 1 ? "pb-2" : "pb-12 lg:pb-16"}`}>
                  <span className="absolute left-[7px] top-2 -bottom-2 w-px border-l border-dashed border-border" aria-hidden="true" />
                  <span className={`absolute left-0 top-1 h-4 w-4 rounded-full ring-4 ring-background ${dotColor[j.tone]}`} />
                  {/* company/period inline on mobile */}
                  <div className="lg:hidden mb-1">
                    <span className="font-display text-[16px] font-semibold text-foreground">{j.company}</span>
                    <span className="text-[13px] text-muted-foreground"> · {j.period}</span>
                  </div>
                  <h3 className="font-display text-[20px] md:text-[22px] font-semibold text-foreground leading-none">{j.role}</h3>
                  <p className="mt-2.5 text-[14px] md:text-[15px] text-muted-foreground leading-relaxed max-w-[520px]">
                    {j.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
