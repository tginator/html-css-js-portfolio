import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuestCard } from "./QuestCard";
import { QuestModal } from "./QuestModal";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="quests" className="border-b-2 border-void-600 bg-void-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE PROJECT LAB"
          gameLabel="Quests"
          plainLabel="Selected Projects"
          description="Four engineering quests spanning data & ML, concurrent systems architecture, product-focused frontend work, and a full-stack team capstone."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <QuestCard key={project.id} project={project} onOpenCaseStudy={setActiveProject} />
          ))}
        </div>
      </div>

      <QuestModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
