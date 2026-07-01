import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
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

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", scrolled ? "py-3 bg-background/85 backdrop-blur-xl shadow-soft" : "py-5 bg-transparent")}
    >
      <nav className="container-x flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <a href="#home" className="flex items-center group">
            <span className="font-script font-medium text-[24px] tracking-tight text-foreground">
              Fahad<span className="text-primary">.</span>
            </span>
          </a>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center justify-center gap-1.5">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "inline-flex items-center rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                    isActive
                      ? "text-primary border border-primary/40 bg-primary/5"
                      : "text-muted-foreground border border-transparent hover:text-foreground"
                  )}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-2.5 text-[14px] font-semibold text-background hover:bg-foreground/90 transition-colors shadow-soft">
            Hire Me <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center h-9 w-9 text-foreground rounded-md hover:bg-muted transition-colors"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu" className={cn("fixed inset-0 top-0 h-[100dvh] w-full z-50 bg-background transition-opacity lg:hidden flex flex-col", open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
        <div className="flex items-center justify-between p-5 border-b border-border bg-background">
          <span className="font-script font-medium text-2xl text-foreground">Fahad<span className="text-primary">.</span></span>
          <button aria-label="Close menu" className="h-9 w-9 inline-flex items-center justify-center text-foreground rounded-md hover:bg-muted transition-colors" onClick={() => setOpen(false)}>
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
            <a href="#contact" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-base font-semibold shadow-soft">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}