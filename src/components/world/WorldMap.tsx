import {
  User,
  FlaskConical,
  Wrench,
  GraduationCap,
  Trophy,
  ScrollText,
  Gamepad2,
  Radio,
} from "lucide-react";
import { navLocations } from "@/data/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarField } from "@/components/ui/StarField";

const locationIcons: Record<string, typeof User> = {
  profile: User,
  quests: FlaskConical,
  inventory: Wrench,
  academy: GraduationCap,
  achievements: Trophy,
  log: ScrollText,
  "side-quests": Gamepad2,
  contact: Radio,
};

const locationTones: Record<string, string> = {
  profile: "hover:border-cyan hover:text-cyan",
  quests: "hover:border-amber hover:text-amber",
  inventory: "hover:border-violet hover:text-violet",
  academy: "hover:border-cyan hover:text-cyan",
  achievements: "hover:border-amber hover:text-amber",
  log: "hover:border-leaf hover:text-leaf",
  "side-quests": "hover:border-violet hover:text-violet",
  contact: "hover:border-cyan hover:text-cyan",
};

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * The "world hub" — a clickable map of every portfolio section. Purely a
 * navigation surface: no character movement required, direct clicks only.
 */
export function WorldMap() {
  return (
    <section id="world" className="relative border-b-2 border-void-600 bg-void-900 py-16 sm:py-20">
      <StarField count={20} className="opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE WORLD MAP"
          gameLabel="Choose Your Destination"
          plainLabel="Jump to any section of the portfolio"
          description="Every location below links straight to a section — click through, or use the nav bar at the top."
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {navLocations.map((loc) => {
            const Icon = locationIcons[loc.id] ?? User;
            return (
              <li key={loc.id}>
                <button
                  onClick={() => scrollToId(loc.id)}
                  className={`group flex h-full w-full flex-col items-center gap-3 border-2 border-void-500 bg-void-800/70 px-4 py-6 text-center shadow-pixel transition-all duration-150 hover:-translate-y-1 hover:shadow-pixel-sm ${locationTones[loc.id]}`}
                >
                  <span className="border-2 border-void-500 bg-void-900 p-3 text-slate-400 transition-colors group-hover:border-current group-hover:text-current">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="font-pixel text-[10px] leading-relaxed text-slate-200 group-hover:text-current">
                    {loc.hudLabel}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{loc.plainLabel}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
