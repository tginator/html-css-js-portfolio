import { SectionHeading } from "@/components/ui/SectionHeading";
import { PixelPanel } from "@/components/ui/PixelPanel";
import { Character } from "@/components/hero/Character";

export function ProfileSection() {
  return (
    <section id="profile" className="border-b-2 border-void-600 bg-void-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="CHARACTER SHEET" gameLabel="Player Profile" plainLabel="About Me" />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <PixelPanel glow="cyan" className="flex flex-col items-center gap-4 p-6">
            <Character className="h-36 w-28" />
            <div className="text-center">
              <p className="font-pixel text-pixel-xs text-slate-100">TYLER GORDON</p>
              <p className="mt-1 font-mono text-xs text-cyan">CLASS: Software Engineer</p>
              <p className="font-mono text-xs text-slate-500">LVL: Graduate</p>
            </div>
          </PixelPanel>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <PixelPanel className="p-6">
              <p className="font-sans text-base leading-relaxed text-slate-300">
                I'm a software engineering graduate from Curtin University who likes figuring out how
                systems work and then building my own. My interests span software development, machine
                learning and cloud technologies, and I particularly enjoy projects where software interacts
                with real-world data or complex systems, things like forecasting emissions from a decade of
                energy data, or keeping a simulation thread-safe under real concurrent load.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-slate-300">
                Outside of study, I edit video freelance and play soccer. Different kinds of problem
                solving, but the same instinct for iterating until something actually works.
              </p>
            </PixelPanel>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <PixelPanel className="p-4">
                <p className="font-pixel text-pixel-xs text-amber">FOCUS</p>
                <p className="mt-2 font-mono text-xs text-slate-400">
                  Software Development, Data Science, Cloud, Machine Learning
                </p>
              </PixelPanel>
              <PixelPanel className="p-4">
                <p className="font-pixel text-pixel-xs text-violet">BASED IN</p>
                <p className="mt-2 font-mono text-xs text-slate-400">Perth, Western Australia</p>
              </PixelPanel>
              <PixelPanel className="p-4">
                <p className="font-pixel text-pixel-xs text-leaf">STATUS</p>
                <p className="mt-2 font-mono text-xs text-slate-400">Graduated December 2026</p>
              </PixelPanel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
