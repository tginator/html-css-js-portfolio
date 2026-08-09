import { useState } from "react";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";
import { navLocations } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navLocations.map((loc) => loc.id);

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-void-600 bg-void-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-pixel text-pixel-sm text-cyan hover:text-cyan-glow transition-colors"
          aria-label="Scroll to top"
        >
          TYLER<span className="text-amber">.</span>DEV
        </button>

        <nav
          aria-label="Section navigation"
          className="hidden lg:flex items-center gap-1 overflow-x-auto"
        >
          {navLocations.map((loc) => {
            const isActive = activeId === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => scrollToSection(loc.id)}
                aria-current={isActive ? "true" : undefined}
                className={`whitespace-nowrap border-2 px-2.5 py-1.5 font-pixel text-[9px] tracking-wide transition-colors ${
                  isActive
                    ? "border-cyan text-cyan bg-cyan/10"
                    : "border-transparent text-slate-400 hover:text-cyan hover:border-void-500"
                }`}
              >
                {loc.hudLabel}
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border-2 border-amber/60 px-3 py-1.5 font-pixel text-[9px] text-amber hover:border-amber hover:bg-amber/10 transition-colors"
          >
            <FileText size={12} aria-hidden="true" />
            RÉSUMÉ
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="border-2 border-void-500 p-2 text-slate-300 hover:text-cyan hover:border-cyan transition-colors"
          >
            <Github size={14} />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="border-2 border-void-500 p-2 text-slate-300 hover:text-cyan hover:border-cyan transition-colors"
          >
            <Linkedin size={14} />
          </a>
        </div>

        <button
          className="lg:hidden border-2 border-void-500 p-2 text-slate-300"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile section navigation"
          className="lg:hidden border-t-2 border-void-600 bg-void-950 px-4 py-4"
        >
          <ul className="flex flex-col gap-1">
            {navLocations.map((loc) => (
              <li key={loc.id}>
                <button
                  onClick={() => {
                    scrollToSection(loc.id);
                    setMobileOpen(false);
                  }}
                  className="flex w-full items-center justify-between border-2 border-transparent px-3 py-2.5 text-left hover:border-void-500 transition-colors"
                >
                  <span className="font-pixel text-[10px] text-cyan">{loc.hudLabel}</span>
                  <span className="font-mono text-xs text-slate-400">{loc.plainLabel}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 border-t-2 border-void-700 pt-4">
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 border-2 border-amber/60 px-3 py-2 font-pixel text-[9px] text-amber"
            >
              <FileText size={12} aria-hidden="true" />
              RÉSUMÉ
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="border-2 border-void-500 p-2.5 text-slate-300"
            >
              <Github size={16} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="border-2 border-void-500 p-2.5 text-slate-300"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
