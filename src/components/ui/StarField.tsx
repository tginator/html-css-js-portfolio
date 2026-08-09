import { useMemo } from "react";

interface Star {
  top: string;
  left: string;
  size: number;
  delay: string;
  color: string;
}

const STAR_COLORS = ["#ffffff", "#4deaff", "#ffc857"];

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() > 0.85 ? 3 : 2,
    delay: `${(Math.random() * 4).toFixed(2)}s`,
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
  }));
}

interface StarFieldProps {
  count?: number;
  className?: string;
}

/** A sparse field of tiny pixel stars. Purely decorative — aria-hidden. */
export function StarField({ count = 40, className = "" }: StarFieldProps) {
  const stars = useMemo(() => generateStars(count), [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
