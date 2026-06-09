import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = links.map((l) => document.getElementById(l.href.slice(1)));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= y) { setActive(el.id); break; }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b", scrolled ? "py-3 bg-background/90 backdrop-blur-xl border-border" : "py-5 border-transparent bg-background")}
    >
      <nav className="container-x flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <a href="#home" className="flex items-center group">
            <span className="font-display font-bold text-[20px] tracking-tight text-foreground">
              Fahad<span className="text-primary">.</span>dev
            </span>
          </a>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center justify-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "relative py-1.5 text-[15px] font-medium transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {l.label}
                  {isActive && <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary rounded-full" />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-[8px] bg-primary text-primary-foreground hover:bg-primary-hover transition-colors px-6 py-2.5 text-[14px] font-semibold">
            Hire Me
          </a>
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center h-9 w-9 text-foreground rounded-md hover:bg-surface transition-colors"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={cn("fixed inset-0 top-0 h-[100dvh] w-full z-50 bg-[#0E0E10] transition-opacity lg:hidden flex flex-col", open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
        <div className="flex items-center justify-between p-5 border-b border-border bg-[#0E0E10]">
          <span className="font-display font-bold text-xl text-foreground">Fahad<span className="text-primary">.</span>dev</span>
          <button aria-label="Close menu" className="h-9 w-9 inline-flex items-center justify-center text-foreground rounded-md hover:bg-surface transition-colors" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex-1 flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="font-display text-3xl font-semibold text-foreground hover:text-primary transition">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center justify-center rounded-[8px] bg-primary text-primary-foreground px-8 py-3 text-base font-semibold">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}