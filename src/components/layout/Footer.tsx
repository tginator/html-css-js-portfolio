import { Github, Linkedin, Mail, TerminalSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FooterProps {
  onOpenTerminal: () => void;
}

export function Footer({ onOpenTerminal }: FooterProps) {
  return (
    <footer className="border-t-2 border-void-600 bg-void-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-pixel text-pixel-sm text-cyan">
              TYLER<span className="text-amber">.</span>DEV
              <span className="ml-2 text-pixel-xs text-slate-500">v1.0</span>
            </p>
            <p className="mt-2 flex items-center gap-2 font-mono text-xs text-leaf">
              <span className="inline-block h-2 w-2 animate-twinkle bg-leaf" aria-hidden="true" />
              STATUS: ONLINE
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email Tyler Gordon"
              className="border-2 border-void-500 p-2 text-slate-300 hover:text-cyan hover:border-cyan transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="border-2 border-void-500 p-2 text-slate-300 hover:text-cyan hover:border-cyan transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="border-2 border-void-500 p-2 text-slate-300 hover:text-cyan hover:border-cyan transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 border-2 border-violet/50 px-3 py-2 font-mono text-xs text-violet hover:border-violet hover:bg-violet/10 transition-colors"
              aria-label="Open terminal easter egg"
            >
              <TerminalSquare size={14} aria-hidden="true" />
              terminal
            </button>
          </div>
        </div>

        <p className="mt-8 font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} {siteConfig.name}. Built from scratch with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
