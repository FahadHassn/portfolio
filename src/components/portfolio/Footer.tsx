import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-surface">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        {/* Brand */}
        <a href="#home" className="font-script font-medium text-2xl text-foreground">
          Fahad<span className="text-primary">.</span>
        </a>

        {/* Copyright */}
        <p className="text-[13px] text-muted-foreground order-last sm:order-none">
          © {new Date().getFullYear()} Syed Muhammad Fahad Hassan. All Rights Reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-2">
          {[
            { Icon: GithubIcon, href: "https://github.com/FahadHassn" },
            { Icon: LinkedinIcon, href: "https://pk.linkedin.com/in/fahadhassan72" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border bg-elevated text-muted-foreground hover:text-primary hover:border-primary transition"
            >
              <Icon width={16} height={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
