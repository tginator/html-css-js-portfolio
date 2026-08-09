import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface KonamiToastProps {
  visible: boolean;
}

/** Harmless celebratory toast triggered by the Konami code. */
export function KonamiToast({ visible }: KonamiToastProps) {
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 border-2 border-amber bg-void-900 px-5 py-3 font-pixel text-pixel-xs text-amber shadow-pixel"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          transition={{ duration: reducedMotion ? 0 : 0.25 }}
        >
          ★ CHEAT CODE ACCEPTED — +30 LIVES ★
        </motion.div>
      )}
    </AnimatePresence>
  );
}
