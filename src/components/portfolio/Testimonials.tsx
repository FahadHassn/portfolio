import { Reveal, SectionHeader } from "./Reveal";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Built our Boshhh Android app perfectly matching the iOS version. Clean architecture, smooth animations, delivered on time.",
    name: "James Thornton",
    title: "Product Manager, Boshhh Ltd",
    initials: "JT",
  },
  {
    text: "Our F&T Pizza app works flawlessly. Customers love it and the PayPal integration was seamless. Faster than expected.",
    name: "Tariq Mehmood",
    title: "Owner, F&T Pizza Calw",
    initials: "TM",
  },
  {
    text: "The AI Life Coach app is beautifully designed. Habit tracking, AI prompts, 75 Hard — works perfectly on Android & iOS.",
    name: "Ahmed Raza",
    title: "CEO, WellnessFlow",
    initials: "AR",
  },
  {
    text: "Lead automation saves our agents 20+ hours a week. Facebook leads go straight into HubSpot, scored and ready. Game changer.",
    name: "Michael Carter",
    title: "Director, PropEdge Realty",
    initials: "MC",
  },
  {
    text: "The Gmail autoresponder handles 80% of our support emails automatically. GPT replies are so good clients don't even notice.",
    name: "Lena Fischer",
    title: "Operations Manager, TechDesk GmbH",
    initials: "LF",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container-x">
        <SectionHeader tag="Testimonials" title="Client Reviews" subtitle="What the people I've worked with have to say." />

        <div className="mt-12 lg:mt-16 flex flex-nowrap items-stretch overflow-x-auto hide-scrollbar md:grid md:grid-cols-5 md:overflow-visible gap-4 pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 py-4 -my-4 md:py-0 md:my-0">
          {reviews.map((r) => (
            <article key={r.name} className="card-hover relative w-[72vw] sm:w-[55vw] md:w-full min-w-0 shrink-0 snap-center md:snap-align-none self-stretch flex flex-col rounded-2xl border border-border bg-elevated p-5 overflow-hidden items-center text-center md:items-start md:text-left">
              {/* Gold left accent bar */}
              <div className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full bg-primary hidden md:block" />

              {/* Stars */}
              <div className="flex items-center justify-center md:justify-start gap-0.5 mb-3 w-full">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed text-[12px] flex-1 w-full">"{r.text}"</p>

              <div className="mt-4 flex flex-col md:flex-row items-center gap-2.5 pt-4 border-t border-border w-full justify-center md:justify-start">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-[11px] shrink-0">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-[11px]">{r.name}</div>
                  <div className="text-[10px] text-muted-foreground leading-tight">{r.title}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}