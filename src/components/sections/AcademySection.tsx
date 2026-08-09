import { SectionHeading } from "@/components/ui/SectionHeading";
import { PixelPanel } from "@/components/ui/PixelPanel";
import { Badge } from "@/components/ui/Badge";
import { PixelIcon } from "@/components/icons/PixelIcon";
import { academyGlyph } from "@/components/icons/glyphs";
import { academyResults, otherCoursework } from "@/data/education";
import { siteConfig } from "@/config/site";

export function AcademySection() {
  const highDistinctions = academyResults.filter((r) => r.grade === "High Distinction");
  const distinctions = academyResults.filter((r) => r.grade === "Distinction");

  return (
    <section id="academy" className="border-b-2 border-void-600 bg-void-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE ACADEMY"
          gameLabel="Completed Modules"
          plainLabel="Education"
          description="Real university results — not in-game achievements."
        />

        <PixelPanel glow="cyan" className="mt-10 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="border-2 border-void-500 bg-void-800 p-3">
              <PixelIcon rects={academyGlyph} color="#4deaff" className="h-7 w-7" title="Academy icon" />
            </span>
            <div>
              <p className="font-pixel text-pixel-sm text-slate-100">{siteConfig.university}</p>
              <p className="mt-1 font-mono text-sm text-cyan">Bachelor of Computing — Software Engineering</p>
            </div>
          </div>
          <Badge tone="amber">Expected Completion: December 2026</Badge>
        </PixelPanel>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <PixelPanel className="p-6">
            <p className="font-pixel text-pixel-xs text-amber">HIGH DISTINCTION</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {highDistinctions.map((r) => (
                <li key={r.module} className="flex items-center gap-2 font-sans text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 shrink-0 bg-amber" aria-hidden="true" />
                  {r.module}
                </li>
              ))}
            </ul>
          </PixelPanel>

          <PixelPanel className="p-6">
            <p className="font-pixel text-pixel-xs text-violet">DISTINCTION</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {distinctions.map((r) => (
                <li key={r.module} className="flex items-center gap-2 font-sans text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 shrink-0 bg-violet" aria-hidden="true" />
                  {r.module}
                </li>
              ))}
            </ul>
          </PixelPanel>
        </div>

        <PixelPanel className="mt-6 p-6">
          <p className="font-pixel text-pixel-xs text-slate-300">OTHER RELEVANT COURSEWORK</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherCoursework.map((course) => (
              <Badge key={course} tone="cyan">
                {course}
              </Badge>
            ))}
          </div>
        </PixelPanel>
      </div>
    </section>
  );
}
