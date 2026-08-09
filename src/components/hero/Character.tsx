interface CharacterProps {
  className?: string;
}

/**
 * An original, generic pixel-art developer avatar — not a likeness of any
 * real person. Built entirely from grid-aligned rectangles on a 12x16 canvas.
 */
export function Character({ className = "" }: CharacterProps) {
  const hair = "#a78bfa";
  const skin = "#e3ad82";
  const dark = "#0e1220";
  const hoodie = "#4deaff";
  const hoodieDark = "#28325a";
  const pants = "#141a2e";
  const shoe = "#05060c";

  return (
    <svg
      viewBox="0 0 12 16"
      className={className}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel-art avatar of a developer wearing a hoodie, standing beside a laptop"
    >
      <rect x="2" y="0" width="8" height="2" fill={hair} />
      <rect x="1" y="2" width="1" height="3" fill={hair} />
      <rect x="10" y="2" width="1" height="3" fill={hair} />
      <rect x="2" y="2" width="8" height="4" fill={skin} />
      <rect x="4" y="4" width="1" height="1" fill={dark} />
      <rect x="8" y="4" width="1" height="1" fill={dark} />
      <rect x="5" y="5" width="2" height="1" fill={hoodieDark} />
      <rect x="4" y="6" width="4" height="1" fill={skin} />
      <rect x="2" y="7" width="8" height="5" fill={hoodie} />
      <rect x="5" y="7" width="2" height="5" fill={hoodieDark} />
      <rect x="0" y="8" width="2" height="4" fill={hoodie} />
      <rect x="10" y="8" width="2" height="4" fill={hoodie} />
      <rect x="0" y="12" width="2" height="1" fill={skin} />
      <rect x="10" y="12" width="2" height="1" fill={skin} />
      <rect x="3" y="12" width="2" height="3" fill={pants} />
      <rect x="7" y="12" width="2" height="3" fill={pants} />
      <rect x="2" y="15" width="3" height="1" fill={shoe} />
      <rect x="7" y="15" width="3" height="1" fill={shoe} />
    </svg>
  );
}
