import heroImg from "@/assets/me.png";
import designImg from "@/assets/design.png";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const socials = [
  { Icon: GithubIcon, href: "https://github.com/FahadHassn", label: "GitHub" },
  { Icon: LinkedinIcon, href: "https://pk.linkedin.com/in/fahadhassan72", label: "LinkedIn" },
];

/* Background design — peach paint-splash image behind the photo. */
function BlobBg({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <img
        src={designImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden pt-24">
      {/* Desktop visual — blob + large photo bleed to the right viewport edge */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[54%]">
        <BlobBg className="absolute inset-0" />
        <div className="absolute inset-0 flex items-end justify-center">
          <img
            src={heroImg}
            alt="Fahad Hassan"
            className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-[0_24px_36px_rgba(28,43,57,0.16)]"
          />
        </div>
      </div>

      <div className="container-x relative z-10 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT — copy */}
          <div className="text-center lg:text-left max-w-[540px] mx-auto lg:mx-0 py-8">
            {/* Availability pill */}
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new projects
            </span>

            <h1 className="mt-5 font-display font-bold text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.04] tracking-tight text-foreground">
              <span className="block">Hello,</span>
              <span className="block">
                I'm{" "}
                <span
                  className="px-1"
                  style={{ background: "linear-gradient(transparent 56%, rgba(234,162,60,0.45) 56%)" }}
                >
                  Fahad
                </span>
              </span>
            </h1>

            {/* Discipline tagline */}
            <p className="mt-5 text-[16px] lg:text-[18px] font-medium text-foreground">
              Mobile Apps <span className="text-primary">·</span> Websites{" "}
              <span className="text-primary">·</span> AI Automation
            </p>

            <p className="mt-4 max-w-[440px] mx-auto lg:mx-0 text-[15px] lg:text-[16px] text-muted-foreground leading-relaxed">
              Hi, my name is Fahad and I'm a mobile app, website &amp; AI automation
              developer from Pakistan. I have 4+ years of experience building apps and
              shipping intelligent automations people love.
            </p>

            {/* CTA + socials */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 rounded-[12px] px-7 py-4 text-[15px] font-semibold shadow-soft"
              >
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-2.5">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-elevated text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile visual — shown above the copy on mobile */}
          <div className="lg:hidden relative h-[420px] order-first">
            <BlobBg className="absolute inset-0 -mr-6" />
            <div className="absolute inset-0 flex items-end justify-center">
              <img
                src={heroImg}
                alt="Fahad Hassan"
                className="relative z-10 h-[99%] w-auto object-contain object-bottom drop-shadow-[0_24px_36px_rgba(28,43,57,0.16)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}