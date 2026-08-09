import { useState } from "react";
import { Character } from "./Character";
import { PixelIcon } from "@/components/icons/PixelIcon";
import { laptopGlyph } from "@/components/icons/glyphs";

const SPEECH_LINES = ["Hey — welcome in.", "Let's build something.", "Currently debugging life."];

/** Character + workstation illustration with a small hover speech bubble easter egg. */
export function HeroScene() {
  const [line] = useState(() => SPEECH_LINES[Math.floor(Math.random() * SPEECH_LINES.length)]);
  const [showSpeech, setShowSpeech] = useState(false);

  return (
    <div className="relative flex flex-col items-center gap-2">
      <div
        role="group"
        aria-label="Pixel-art avatar of Tyler at a workstation. Hover for a greeting."
        className="relative"
        onMouseEnter={() => setShowSpeech(true)}
        onMouseLeave={() => setShowSpeech(false)}
        onFocus={() => setShowSpeech(true)}
        onBlur={() => setShowSpeech(false)}
        tabIndex={0}
      >
        {showSpeech && (
          <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap border-2 border-cyan bg-void-900 px-3 py-1.5 font-mono text-xs text-cyan shadow-pixel-sm animate-pixel-in"
            role="status"
          >
            {line}
            <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-b-2 border-r-2 border-cyan bg-void-900" />
          </div>
        )}

        <div className="flex items-end gap-3">
          <Character className="h-32 w-24 animate-sprite-bob sm:h-40 sm:w-32" />
          <PixelIcon
            rects={laptopGlyph}
            color="#5b8def"
            className="mb-1 h-14 w-14 opacity-90 sm:h-16 sm:w-16"
            title="Pixel-art laptop"
          />
        </div>
      </div>

      <div className="mt-3 h-2 w-32 bg-void-900/80 blur-[2px]" aria-hidden="true" />
    </div>
  );
}
