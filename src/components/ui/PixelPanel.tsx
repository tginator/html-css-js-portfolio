import type { HTMLAttributes, ReactNode } from "react";

interface PixelPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glow?: "cyan" | "violet" | "amber" | "none";
}

const glowClasses: Record<NonNullable<PixelPanelProps["glow"]>, string> = {
  cyan: "hover:border-cyan/70",
  violet: "hover:border-violet/70",
  amber: "hover:border-amber/70",
  none: "",
};

/** Bordered pixel-art panel used for cards, badges and dialogue-style boxes. */
export function PixelPanel({ children, glow = "none", className = "", ...props }: PixelPanelProps) {
  return (
    <div
      className={`border-2 border-void-500 bg-void-800/80 shadow-pixel transition-colors duration-150 ${glowClasses[glow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
