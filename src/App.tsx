import { useCallback, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { XPBar } from "@/components/layout/XPBar";
import { HeroSection } from "@/components/hero/HeroSection";
import { WorldMap } from "@/components/world/WorldMap";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SideQuestsSection } from "@/components/sections/SideQuestsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Terminal } from "@/components/terminal/Terminal";
import { KonamiToast } from "@/components/terminal/KonamiToast";
import { useKonamiCode } from "@/hooks/useKonamiCode";

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [konamiActive, setKonamiActive] = useState(false);

  const handleKonamiUnlock = useCallback(() => {
    setKonamiActive(true);
    setTimeout(() => setKonamiActive(false), 2600);
  }, []);

  useKonamiCode(handleKonamiUnlock);

  return (
    <div className="min-h-screen bg-void-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border-2 focus:border-cyan focus:bg-void-900 focus:px-4 focus:py-2 focus:font-pixel focus:text-pixel-xs focus:text-cyan"
      >
        Skip to main content
      </a>

      <XPBar />
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <WorldMap />
        <ProfileSection />
        <ProjectsSection />
        <SkillsSection />
        <AcademySection />
        <AchievementsSection />
        <ExperienceSection />
        <SideQuestsSection />
        <ContactSection />
      </main>

      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <KonamiToast visible={konamiActive} />
    </div>
  );
}

export default App;
