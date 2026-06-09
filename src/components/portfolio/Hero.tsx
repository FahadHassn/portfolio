import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/me.png"; 

const ROLES = ["Mobile App Developer", "Website Developer", "AI Automation Engineer"];

function useTypewriter(words: string[], typeSpeed = 85, deleteSpeed = 45, pause = 2000) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let timeout: number;
    if (!deleting && text === word) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
    } else {
      timeout = window.setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

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
    <div ref={ref} className="flex flex-col items-center justify-center rounded-[12px] border border-border/80 bg-[#202024] p-3 text-center shadow-lg transition-transform hover:-translate-y-1 duration-300">
      <div className="font-display text-[22px] md:text-[24px] font-bold text-primary mb-0.5 drop-shadow-[0_0_12px_rgba(232,87,42,0.4)]">{val}{suffix}</div>
      <div className="text-[11px] md:text-[12px] font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

export function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

      <div className="container-x w-full mx-auto">

        {/* Top: Left text + Right image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          
          {/* Left Column - Text Details */}
          <div className="flex flex-col space-y-6 w-full items-center lg:items-start text-center lg:text-left">
            
            {/* Headline */}
            <div>
              <p className="font-display text-[22px] lg:text-[30px] text-foreground mb-3 font-semibold">Hi, I'm Fahad Hassan</p>
              <h1 className="font-display font-bold text-[28px] md:text-[36px] lg:text-[46px] leading-[1.1] tracking-tight text-foreground">
                <span className="text-primary">{role}</span>
                <span className="caret align-middle ml-1 border-r-[3px] border-primary" style={{ height: "0.85em" }} />
              </h1>
            </div>

            {/* About text */}
            <div className="space-y-4 text-[14px] lg:text-[16px] text-muted-foreground leading-[1.6]">
              <p>
                I am a passionate developer with over 4 years of experience. I specialize in mobile app development, WordPress websites, and AI-powered workflow automation. I create scalable Android and cross-platform applications that help turn ideas into real products.
              </p>
              <p>
                In addition to coding, I design smart automation systems using tools like n8n, Zapier, and Make. These systems help reduce repetitive tasks and improve efficiency, so you can focus on more important work.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-[8px] bg-primary text-primary-foreground hover:bg-primary-hover transition-colors px-6 py-2.5 text-[14px] font-semibold hover:-translate-y-[1px] duration-200">
                What I Offer
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-[8px] border border-border bg-transparent text-foreground hover:border-primary/50 hover:bg-surface transition-colors px-6 py-2.5 text-[14px] font-semibold hover:-translate-y-[1px] duration-200">
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Image only */}
          <div className="flex w-full items-center justify-center lg:justify-end lg:pl-6">
            <div className="relative w-full max-w-[320px] lg:max-w-[480px] aspect-[3/3.2] rounded-[24px] border border-border/50 bg-[#0f0f0f] shadow-2xl group p-1 flex items-center justify-center">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-surface">
                <img 
                  src={heroImg} 
                  alt="Developer profile" 
                  className="h-full w-full object-cover object-bottom transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom: Stats — full width single row, centered */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
          <Stat n={50} label="Projects Done" />
          <Stat n={40} label="Happy Clients" />
          <Stat n={4} label="Years Experience" />
          <Stat n={20} label="AI Workflows Built" />
        </div>

      </div>
    </section>
  );
}