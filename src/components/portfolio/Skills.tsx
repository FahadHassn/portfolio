import { SectionHeader } from "./Reveal";

type Skill = { name: string; iconBase?: string };
type Category = {
  title: string;
  glow?: boolean;
  skills: Skill[];
};

const techCategories: Category[] = [
  {
    title: "Mobile App Development",
    glow: true,
    skills: [
      { name: "Android SDK" },
      { name: "Kotlin" },
      { name: "Java" },
      { name: "Jetpack Compose" },
      { name: "Firebase" },
      { name: "Room & SQLite" },
      { name: "MVVM / Clean Arch" },
      { name: "Flutter" },
      { name: "Dart" },
    ],
  },
  {
    title: "AI & Automation Workflows",
    glow: true,
    skills: [
      { name: "n8n" },
      { name: "Zapier" },
      { name: "Make (Integromat)" },
      { name: "OpenAI API" },
      { name: "Claude API" },
      { name: "LangChain" },
      { name: "Custom AI Agents" },
    ],
  },
  {
    title: "Web & WordPress",
    skills: [
      { name: "WordPress" },
      { name: "WooCommerce" },
      { name: "Elementor" },
      { name: "PHP" },
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "MySQL" },
    ],
  },
  {
    title: "Tools & Environment",
    skills: [
      { name: "Git" },
      { name: "Android Studio" },
      { name: "VS Code" },
      { name: "Canva" },
      { name: "Figma" },
      { name: "Postman" },
      { name: "REST APIs" },
    ],
  },
];

const marqueeItems = [
  "Flutter", "Dart", "Android", "Kotlin", "Jetpack Compose", "Firebase",
  "WordPress", "WooCommerce", "n8n", "Zapier", "Make", "OpenAI", "Claude",
  "Java", "PHP", "Canva", "Figma", "Git",
];

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24 relative bg-surface">
      {/* Visual background elements */}
      <div className="absolute top-1/3 left-0 -z-10 h-[600px] w-full max-w-2xl -translate-y-1/2 rounded-[100%] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container-x">
        <SectionHeader tag="Tech Stack" title="My Digital Toolset" subtitle="The sophisticated stack I use to deliver end-to-end robust products." />

        <div className="mt-12 lg:mt-16 flex flex-nowrap items-stretch overflow-x-auto hide-scrollbar sm:grid sm:grid-cols-2 sm:overflow-visible gap-6 lg:gap-8 pb-8 sm:pb-0 snap-x snap-mandatory px-4 sm:px-0 -mx-4 sm:mx-0 py-4 -my-4 sm:py-0 sm:my-0">
          {techCategories.map((category) => (
            <div key={category.title} className="relative group overflow-hidden rounded-[20px] border border-border bg-elevated shadow-soft p-[1px] w-[80vw] sm:w-auto min-w-0 shrink-0 snap-center sm:snap-align-none self-stretch flex flex-col hover:border-primary/40 transition-colors duration-500 outline-none focus:outline-none">

                <div className="relative h-full w-full rounded-[19px] bg-elevated p-8 flex flex-col z-10 transition-colors items-center text-center sm:items-start sm:text-left">
                  
                  <div className="mb-6 flex items-center justify-center sm:justify-between w-full">
                    <h3 className="font-display text-[22px] font-semibold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-2.5">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill.name} 
                        className={`inline-flex items-center justify-center rounded-lg border border-border px-3.5 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-300 hover:scale-105 ${
                          category.glow
                            ? 'bg-primary/8 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary'
                            : 'bg-surface text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>

                </div>
            </div>
          ))}
        </div>

        {/* Improved Marquee */}
        <div className="mt-20 overflow-hidden py-8 border-y border-border [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max gap-12 marquee-track items-center">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((l, i) => (
              <span key={i} className="font-display text-xl font-medium text-primary/80 whitespace-nowrap hover:text-primary hover:scale-[1.05] transition-all duration-300 cursor-default">
                {l}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}