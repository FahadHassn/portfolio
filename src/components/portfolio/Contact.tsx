import { Reveal, SectionHeader } from "./Reveal";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "./SocialIcons";

const infoItems = [
  { icon: Mail,     label: "Email",         value: "fahadhassan467@gmail.com",    href: "mailto:fahadhassan467@gmail.com" },
  { icon: Phone,    label: "WhatsApp",       value: "+92 331 1470266",      href: "https://wa.me/923311470266" },
  { icon: MapPin,   label: "Location",       value: "Gujranwala, Pakistan", href: "#" },
  { icon: Clock,    label: "Response Time",  value: "Within 24 hours",      href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      <div className="absolute left-1/2 bottom-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/6 blur-[100px]" />
      <div className="container-x max-w-2xl">
        <SectionHeader
          tag="Contact"
          title="Let's Build Something Great"
          subtitle="Have a project in mind? Reach out directly — I'm one message away."
        />

        {/* Primary CTA buttons */}
        <Reveal delay={0.08}>
          <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/923311470266"
              className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary text-primary-foreground px-6 py-4 text-sm font-semibold hover:bg-primary-hover transition hover:-translate-y-[2px] duration-200"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <a
              href="mailto:fahadhassan467@gmail.com"
              className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl border border-border bg-surface text-foreground px-6 py-4 text-sm font-semibold hover:border-primary hover:text-primary transition hover:-translate-y-[2px] duration-200"
            >
              <Mail className="h-5 w-5" /> Send an Email
            </a>
          </div>
        </Reveal>

        {/* Info cards grid */}
        <Reveal delay={0.14}>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 rounded-2xl border border-border bg-surface p-4 hover:border-primary transition group"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.label}</div>
                  <div className="text-foreground font-medium text-sm truncate">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
