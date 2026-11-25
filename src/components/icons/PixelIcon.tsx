export interface PixelRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface PixelIconProps {
  rects: PixelRect[];
  gridSize?: number;
  color?: string;
  className?: string;
  title?: string;
}

/**
 * Renders a small original pixel-art glyph from a list of grid-aligned
 * rectangles. Every icon in the site is built from this. No external
 * icon packs, no bitmap images.
 */
export function PixelIcon({ rects, gridSize = 8, color = "currentColor", className = "", title }: PixelIconProps) {
  return (
    <svg
      viewBox={`0 0 ${gridSize} ${gridSize}`}
      className={className}
      shapeRendering="crispEdges"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} fill={color} />
      ))}
    </svg>
  );
}
