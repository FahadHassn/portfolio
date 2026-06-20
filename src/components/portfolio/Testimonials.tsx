import { useState } from "react";
import { Reveal } from "./Reveal";

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

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="relative flex h-full flex-col items-center text-center rounded-3xl border border-border bg-elevated px-6 pb-7 pt-12 shadow-soft">
      {/* Avatar */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-[15px] ring-4 ring-surface shadow-soft">
        {r.initials}
      </div>
      <p className="text-muted-foreground leading-relaxed text-[14px] flex-1">"{r.text}"</p>
      <div className="mt-5 pt-5 border-t border-border w-full">
        <div className="font-display font-semibold text-foreground text-[15px]">{r.name}</div>
        <div className="text-[12px] text-muted-foreground mt-0.5">{r.title}</div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [held, setHeld] = useState(false);

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-surface">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto px-4">
            <span className="label-caps text-primary text-[12px] md:text-[13px]">Testimonials</span>
            <h2 className="mt-3 font-display text-[32px] md:text-[48px] font-semibold tracking-tight text-foreground leading-[1.15]">
              People Talk About Us
            </h2>
            <p className="mt-4 text-muted-foreground text-[15px] md:text-lg leading-relaxed">
              I got the job done in line with the scope and budget — the whole process was smooth and easy.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Continuous loop marquee — pauses on hover (desktop) and on hold (mobile) */}
      <Reveal delay={0.08}>
        <div
          className="marquee-pause mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
          onTouchStart={() => setHeld(true)}
          onTouchEnd={() => setHeld(false)}
          onTouchCancel={() => setHeld(false)}
        >
          <div className={`flex w-max items-stretch gap-6 py-10 marquee-track ${held ? "is-paused" : ""}`}>
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="w-[300px] sm:w-[360px] shrink-0">
                <Card r={r} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
