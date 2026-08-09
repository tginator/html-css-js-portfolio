import { SectionHeading } from "@/components/ui/SectionHeading";
import { PixelPanel } from "@/components/ui/PixelPanel";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="log" className="border-b-2 border-void-600 bg-void-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE QUEST LOG"
          gameLabel="Quest Log"
          plainLabel="Experience"
          description="My work history, and what it's actually taught me — none of it is a software engineering role, and I'm not pretending otherwise."
        />

        <ol className="relative mt-10 flex flex-col gap-8 border-l-2 border-void-600 pl-6 sm:pl-10">
          {experience.map((entry) => (
            <li key={entry.id} className="relative">
              <span
                className="absolute -left-[31px] top-1 h-3 w-3 border-2 border-cyan bg-void-950 sm:-left-[43px]"
                aria-hidden="true"
              />
              <PixelPanel className="p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-pixel text-pixel-sm text-slate-100">{entry.role}</h3>
                  <span className="font-mono text-xs text-slate-500">{entry.period}</span>
                </div>
                <p className="mt-1 font-mono text-sm text-cyan">{entry.organisation}</p>

                <ul className="mt-4 flex flex-col gap-2">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 font-sans text-sm text-slate-300">
                      <span className="text-leaf" aria-hidden="true">
                        ▸
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 border-t-2 border-void-700 pt-4 font-sans text-sm italic text-slate-400">
                  {entry.transferableValue}
                </p>
              </PixelPanel>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
