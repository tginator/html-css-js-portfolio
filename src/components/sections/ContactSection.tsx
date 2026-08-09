import { Mail, Github, Linkedin } from "lucide-react";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelIcon } from "@/components/icons/PixelIcon";
import { StarField } from "@/components/ui/StarField";
import { portalGlyph } from "@/components/icons/glyphs";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-void-950 py-20 sm:py-28">
      <StarField count={35} />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <span className="border-2 border-cyan/60 bg-cyan/10 p-4">
          <PixelIcon rects={portalGlyph} color="#4deaff" className="h-10 w-10" title="Communication portal icon" />
        </span>

        <span className="font-pixel text-pixel-xs text-violet tracking-widest">COMMUNICATION PORTAL</span>

        <h2 className="font-pixel text-pixel-lg text-slate-50 sm:text-pixel-xl">Ready For The Next Quest?</h2>
        <p className="font-mono text-sm text-amber">Contact</p>
        <p className="max-w-xl font-sans text-base text-slate-400">
          I'm currently interested in software engineering and technology opportunities — reach out any time.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <PixelButton variant="primary" href={`mailto:${siteConfig.email}`} icon={<Mail size={14} />}>
            Email Me
          </PixelButton>
          <PixelButton variant="secondary" href={siteConfig.links.linkedin} icon={<Linkedin size={14} />}>
            LinkedIn
          </PixelButton>
          <PixelButton variant="secondary" href={siteConfig.links.github} icon={<Github size={14} />}>
            GitHub
          </PixelButton>
        </div>

        <div className="mt-4 flex flex-col gap-1 font-mono text-sm text-slate-500">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan transition-colors">
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan transition-colors"
          >
            {siteConfig.links.linkedin.replace("https://", "")}
          </a>
        </div>
      </div>
    </section>
  );
}
