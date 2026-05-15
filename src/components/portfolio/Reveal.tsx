import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = { children: ReactNode; delay?: number; className?: string };

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

type SectionHeaderProps = { tag: string; title: string; subtitle: string };

export function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="text-center max-w-2xl mx-auto px-4">
        <span className="label-caps text-primary text-[12px] md:text-[14px] uppercase font-bold tracking-wider">{tag}</span>
        <h2 className="mt-3 font-display text-[32px] md:text-[48px] font-semibold tracking-tight text-foreground leading-[1.2]">{title}</h2>
        <p className="mt-4 text-muted-foreground text-[15px] md:text-lg leading-relaxed">{subtitle}</p>
      </div>
    </Reveal>
  );
}
