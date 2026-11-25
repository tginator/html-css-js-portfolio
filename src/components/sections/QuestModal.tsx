import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { PixelButton } from "@/components/ui/PixelButton";
import type { Project } from "@/data/types";

interface QuestModalProps {
  project: Project | null;
  onClose: () => void;
}

const flowSteps: { label: string; key: keyof Project["caseStudy"] | "tools" }[] = [
  { label: "Problem", key: "problem" },
  { label: "Engineering Approach", key: "approach" },
  { label: "Tools", key: "tools" },
  { label: "Technical Challenges", key: "challenges" },
  { label: "Result", key: "result" },
];

export function QuestModal({ project, onClose }: QuestModalProps) {
  if (!project) return null;
  const titleId = `quest-modal-${project.id}`;

  return (
    <Modal isOpen={Boolean(project)} onClose={onClose} titleId={titleId}>
      <p className="font-pixel text-pixel-xs text-amber">QUEST {String(project.questNumber).padStart(2, "0")}</p>
      <h3 id={titleId} className="mt-2 font-pixel text-pixel-base text-slate-100 sm:text-pixel-lg">
        {project.title}
      </h3>
      <p className="mt-2 font-mono text-xs text-cyan">{project.category}</p>

      <div className="mt-6 flex flex-col gap-4">
        {flowSteps.map((step, index) => (
          <div key={step.key} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="border-2 border-violet/60 bg-violet/10 px-2 py-1 font-pixel text-[9px] text-violet">
                {step.label.toUpperCase()}
              </span>
            </div>
            {step.key === "tools" ? (
              <div className="flex flex-wrap gap-2 pl-1">
                {project.caseStudy.tools.map((tool) => (
                  <Badge key={tool} tone="violet">
                    {tool}
                  </Badge>
                ))}
              </div>
            ) : step.key === "challenges" ? (
              <ul className="flex flex-col gap-1.5 pl-1">
                {project.caseStudy.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-2 font-sans text-sm text-slate-300">
                    <span className="text-amber" aria-hidden="true">
                      ▸
                    </span>
                    {challenge}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="pl-1 font-sans text-sm leading-relaxed text-slate-300">
                {project.caseStudy[step.key as "problem" | "approach" | "result"]}
              </p>
            )}
            {index < flowSteps.length - 1 && (
              <ChevronDown size={16} className="ml-1 text-void-500" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3 border-t-2 border-void-700 pt-6">
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
      </div>
    </Modal>
  );
}
