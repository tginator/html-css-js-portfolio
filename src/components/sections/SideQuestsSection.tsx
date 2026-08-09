import { Video, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PixelPanel } from "@/components/ui/PixelPanel";
import { sideQuests } from "@/data/experience";

const icons = { "freelance-video": Video, soccer: Trophy };

export function SideQuestsSection() {
  return (
    <section id="side-quests" className="border-b-2 border-void-600 bg-void-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="OPTIONAL CONTENT"
          gameLabel="Side Quests"
          plainLabel="Interests"
          description="Life outside the codebase — video editing and soccer."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sideQuests.map((quest) => {
            const Icon = icons[quest.id as keyof typeof icons] ?? Trophy;
            return (
              <PixelPanel key={quest.id} glow="violet" className="p-6">
                <div className="flex items-center gap-3">
                  <span className="border-2 border-violet/50 bg-violet/10 p-2.5 text-violet">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-pixel text-pixel-xs text-slate-100">{quest.title}</h3>
                    <p className="font-mono text-xs text-slate-500">
                      {quest.period}
                      {quest.organisation ? ` · ${quest.organisation}` : ""}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {quest.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 font-sans text-sm text-slate-300">
                      <span className="text-violet" aria-hidden="true">
                        ▸
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </PixelPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
