import { Github, ExternalLink, BookOpenText } from "lucide-react";
import { PixelPanel } from "@/components/ui/PixelPanel";
import { PixelButton } from "@/components/ui/PixelButton";
import { Badge } from "@/components/ui/Badge";
import { PixelIcon } from "@/components/icons/PixelIcon";
import { energyGlyph, radarGlyph, focusGlyph, layersGlyph } from "@/components/icons/glyphs";
import type { Project } from "@/data/types";

const iconMap = { energy: energyGlyph, radar: radarGlyph, focus: focusGlyph, layers: layersGlyph };
const iconColorMap = { energy: "#ffc857", radar: "#4deaff", focus: "#a78bfa", layers: "#5eead4" };

interface QuestCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function QuestCard({ project, onOpenCaseStudy }: QuestCardProps) {
  return (
    <PixelPanel glow="amber" className="flex flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-pixel text-pixel-xs text-amber">QUEST {String(project.questNumber).padStart(2, "0")}</p>
          <h3 className="mt-2 font-pixel text-pixel-sm leading-relaxed text-slate-100">{project.title}</h3>
        </div>
        <span className="shrink-0 border-2 border-void-500 bg-void-900 p-2.5">
          <PixelIcon
            rects={iconMap[project.icon]}
            color={iconColorMap[project.icon]}
            className="h-6 w-6"
            title={`${project.category} icon`}
          />
        </span>
      </div>

      <p className="font-mono text-xs text-cyan">{project.category}</p>
      <p className="font-sans text-sm leading-relaxed text-slate-400">{project.tagline}</p>
      <p className="font-sans text-sm leading-relaxed text-slate-300">{project.description}</p>

      <ul className="flex flex-col gap-1.5">
        {project.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex gap-2 font-sans text-sm text-slate-400">
            <span className="text-leaf" aria-hidden="true">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-3 border-t-2 border-void-700 pt-4">
        {project.githubUrl && (
          <PixelButton variant="primary" href={project.githubUrl} icon={<Github size={14} />}>
            GitHub
          </PixelButton>
        )}
        {project.demoUrl && (
          <PixelButton variant="secondary" href={project.demoUrl} icon={<ExternalLink size={14} />}>
            Live Demo
          </PixelButton>
        )}
        <PixelButton variant="ghost" onClick={() => onOpenCaseStudy(project)} icon={<BookOpenText size={14} />}>
          Case Study
        </PixelButton>
      </div>
    </PixelPanel>
  );
}
