import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PixelPanel } from "@/components/ui/PixelPanel";
import { PixelIcon } from "@/components/icons/PixelIcon";
import { trophyGlyph } from "@/components/icons/glyphs";
import { certifications } from "@/data/certifications";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AchievementsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15% 0px -15% 0px" });
  const [showBanner, setShowBanner] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    setShowBanner(true);
    const timer = setTimeout(() => setShowBanner(false), 2400);
    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <section id="achievements" className="relative border-b-2 border-void-600 bg-void-900 py-16 sm:py-20">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE ACHIEVEMENT HALL"
          gameLabel="Achievements"
          plainLabel="Certifications"
          description="Certifications earned outside the classroom."
        />

        <AnimatePresence>
          {showBanner && (
            <motion.div
              role="status"
              className="mt-6 inline-flex items-center gap-2 border-2 border-amber bg-amber/10 px-4 py-2 font-pixel text-pixel-xs text-amber"
              initial={{ opacity: 0, y: reducedMotion ? 0 : -8, scale: reducedMotion ? 1 : 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3 }}
            >
              ★ ACHIEVEMENT UNLOCKED ★
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: reducedMotion ? 0 : 0.35, delay: reducedMotion ? 0 : index * 0.1 }}
            >
              <PixelPanel glow="amber" className="flex items-start gap-4 p-6">
                <span className="shrink-0 border-2 border-amber/60 bg-amber/10 p-3">
                  <PixelIcon rects={trophyGlyph} color="#ffc857" className="h-7 w-7" title="Trophy icon" />
                </span>
                <div>
                  <p className="font-pixel text-pixel-xs leading-relaxed text-slate-100">{cert.title}</p>
                  <p className="mt-2 font-mono text-xs text-cyan">
                    {cert.issuer} · {cert.date}
                  </p>
                  {cert.detail && <p className="mt-2 font-sans text-sm text-slate-400">{cert.detail}</p>}
                </div>
              </PixelPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
