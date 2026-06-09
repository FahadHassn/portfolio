import { GithubIcon, LinkedinIcon } from "./SocialIcons";


const quickLinks = ["Home", "About", "Services", "Projects", "Skills", "Contact"];
const services = ["Mobile App Development", "Website Development", "AI Automation"];

export function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-border">
      <div className="container-x">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-xs text-primary-foreground">F</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">Fahad<span className="text-primary">.</span>dev</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto sm:mx-0">
              Mobile app, Websites & AI automation specialist building thoughtful software for ambitious teams.
            </p>
            <div className="mt-5 flex items-center justify-center sm:justify-start gap-2">
              {[
                { Icon: GithubIcon, href: "https://github.com/FahadHassn" },
                { Icon: LinkedinIcon, href: "https://pk.linkedin.com/in/fahadhassan72" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border bg-elevated text-muted-foreground hover:text-primary hover:border-primary transition">
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition flex items-center justify-center sm:justify-start gap-2">
                    <span className="h-px w-3 bg-primary/40 inline-block" />{l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {services.map((l) => (
                <li key={l}>
                  <a href="#services" className="hover:text-primary transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="mailto:fahadhassan467@gmail.com" className="hover:text-primary transition">fahadhassan467@gmail.com</a></li>
              <li><a href="https://wa.me/923311470266" className="hover:text-primary transition">+92 331 1470266</a></li>
              <li>Gujranwala, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-border" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground text-center sm:text-left">
          <p>© {new Date().getFullYear()} Syed Muhammad Fahad Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
