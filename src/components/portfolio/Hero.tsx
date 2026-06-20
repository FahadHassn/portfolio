import heroImg from "@/assets/me.png";
import designImg from "@/assets/design.png";
import { Send } from "lucide-react";

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
            <h1 className="font-display font-bold text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.04] tracking-tight text-foreground">
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

            <a
              href="#experience"
              className="inline-block mt-7 text-[18px] lg:text-[22px] font-medium text-foreground underline underline-offset-[6px] decoration-1 hover:text-secondary transition-colors"
            >
              Mobile App Developer at Mobizion
            </a>

            <p className="mt-6 max-w-[440px] mx-auto lg:mx-0 text-[15px] lg:text-[16px] text-muted-foreground leading-relaxed">
              Hi, my name is Fahad and I'm a mobile app, website &amp; AI automation
              developer from Pakistan. I have 4+ years of experience building apps and
              shipping intelligent automations people love.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-4 rounded-[12px] bg-foreground text-background pl-7 pr-6 py-4 text-[15px] font-semibold hover:bg-foreground/90 transition-colors shadow-soft"
            >
              Message <Send className="h-4 w-4 text-highlight" />
            </a>
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