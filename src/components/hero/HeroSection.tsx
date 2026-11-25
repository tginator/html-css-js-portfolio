import { Github, Linkedin, FileText, FolderGit2, ChevronDown } from "lucide-react";
import { PixelButton } from "@/components/ui/PixelButton";
import { StarField } from "@/components/ui/StarField";
import { Scanlines } from "@/components/ui/Scanlines";
import { HeroScene } from "./HeroScene";
import { siteConfig } from "@/config/site";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b-2 border-void-600 bg-void-950">
      <StarField count={50} />
      <Scanlines />
      <div className="absolute inset-0 bg-grid-lines bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void-950 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="font-pixel text-pixel-xs text-violet tracking-widest">
            AN 8-BIT SOFTWARE ENGINEERING ADVENTURE
          </span>

          <h1 className="font-pixel text-pixel-xl leading-relaxed text-slate-50 sm:text-pixel-2xl">
            TYLER GABRIEL
            <br />
            GORDON
          </h1>

          <p className="font-mono text-sm text-cyan sm:text-base">
            {siteConfig.role} · {siteConfig.university}
          </p>

          <p className="max-w-xl font-sans text-base text-slate-400">
            I'm a software engineering graduate who enjoys building software, data-driven
            applications and cloud-based systems that solve real problems. My interests span{" "}
            <span className="text-slate-200">software development</span>,{" "}
            <span className="text-slate-200">data science</span>,{" "}
            <span className="text-slate-200">cloud technologies</span> and{" "}
            <span className="text-slate-200">machine learning</span>.
          </p>

          <div className="flex flex-col gap-3">
            <PixelButton variant="primary" onClick={() => scrollToId("world")} className="text-pixel-sm px-6 py-3">
              Enter Portfolio
            </PixelButton>
            <span className="font-pixel text-pixel-xs text-slate-600 animate-blink" aria-hidden="true">
              &gt; PRESS START
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <PixelButton variant="secondary" onClick={() => scrollToId("quests")} icon={<FolderGit2 size={14} />}>
              Projects
            </PixelButton>
            <PixelButton variant="secondary" href={siteConfig.links.resume} icon={<FileText size={14} />}>
              Résumé
            </PixelButton>
            <PixelButton variant="ghost" href={siteConfig.links.github} icon={<Github size={14} />}>
              GitHub
            </PixelButton>
            <PixelButton variant="ghost" href={siteConfig.links.linkedin} icon={<Linkedin size={14} />}>
              LinkedIn
            </PixelButton>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroScene />
        </div>
      </div>

      <button
        onClick={() => scrollToId("world")}
        className="relative mx-auto mb-6 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan transition-colors"
        aria-label="Scroll to the world map"
      >
        <span className="font-mono text-xs">scroll</span>
        <ChevronDown size={16} className="animate-float-tiny" aria-hidden="true" />
      </button>
    </section>
  );
}
