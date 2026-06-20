import { Reveal } from "./Reveal";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 relative bg-surface">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left — headline + saying hi */}
        <Reveal>
          <div className="text-center lg:text-left">
            <h2 className="font-display text-[36px] md:text-[52px] font-semibold tracking-tight text-foreground leading-[1.1]">
              Let's make something amazing together.
            </h2>
            <p className="mt-10 font-display text-[28px] md:text-[34px] font-semibold text-foreground">
              Start by{" "}
              <a href="https://wa.me/923311470266" className="text-secondary font-script underline decoration-2 underline-offset-4 hover:text-secondary-hover transition-colors">
                saying hi
              </a>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/923311470266"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-primary-hover transition hover:-translate-y-[2px] duration-200 shadow-soft"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a
                href="mailto:fahadhassan467@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-elevated text-foreground px-7 py-3.5 text-sm font-semibold hover:border-primary hover:text-primary transition hover:-translate-y-[2px] duration-200"
              >
                <Mail className="h-5 w-5" /> Send an Email
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right — Information */}
        <Reveal delay={0.1}>
          <div className="lg:pl-8 text-center lg:text-left">
            <h3 className="font-display text-[22px] font-semibold text-foreground">Information</h3>

            <ul className="mt-6 space-y-4 text-[15px] text-muted-foreground">
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <MapPin className="h-5 w-5 text-primary shrink-0" /> Gujranwala, Pakistan
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:fahadhassan467@gmail.com" className="hover:text-primary transition">fahadhassan467@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <MessageCircle className="h-5 w-5 text-primary shrink-0" />
                <a href="https://wa.me/923311470266" className="hover:text-primary transition">+92 331 1470266</a>
              </li>
            </ul>

            <div className="mt-8 h-px w-full bg-border" />

            <nav className="mt-6 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="label-caps text-[12px] text-muted-foreground hover:text-primary transition w-fit mx-auto lg:mx-0">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
