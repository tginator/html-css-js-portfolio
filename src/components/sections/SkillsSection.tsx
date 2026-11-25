import { SectionHeading } from "@/components/ui/SectionHeading";
import { PixelPanel } from "@/components/ui/PixelPanel";
import { PixelIcon } from "@/components/icons/PixelIcon";
import { scrollGlyph, wrenchGlyph, flaskGlyph, gemGlyph } from "@/components/icons/glyphs";
import { skillCategories } from "@/data/skills";

const iconMap = { scroll: scrollGlyph, wrench: wrenchGlyph, flask: flaskGlyph, gem: gemGlyph };
const iconColorMap: Record<string, string> = {
  scroll: "#4deaff",
  wrench: "#ffc857",
  flask: "#6ee7a0",
  gem: "#a78bfa",
};

export function SkillsSection() {
  return (
    <section id="inventory" className="border-b-2 border-void-600 bg-void-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE SKILL FORGE"
          gameLabel="Inventory"
          plainLabel="Technical Skills"
          description="Grouped by kind, not ranked by score. Every item here is something I've actually used, not a self-graded bar chart."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <PixelPanel key={category.id} glow="violet" className="p-6">
              <div className="flex items-center gap-3">
                <span className="border-2 border-void-500 bg-void-800 p-2.5">
                  <PixelIcon
                    rects={iconMap[category.icon]}
                    color={iconColorMap[category.icon]}
                    className="h-5 w-5"
                    title={`${category.label} icon`}
                  />
                </span>
                <div>
                  <p className="font-pixel text-pixel-xs text-slate-100">{category.gameLabel}</p>
                  <p className="font-mono text-xs text-slate-500">{category.label}</p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    tabIndex={0}
                    className="border-2 border-void-500 bg-void-950/60 px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-cyan hover:text-cyan focus-visible:border-cyan focus-visible:text-cyan"
                    title={category.label}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </PixelPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
