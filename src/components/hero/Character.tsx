interface CharacterProps {
  className?: string;
}

/**
 * A pixel-art developer avatar built entirely from grid-aligned rectangles
 * on a 12x16 canvas: olive skin, black hair in a messy mod cut.
 */
export function Character({ className = "" }: CharacterProps) {
  const hair = "#15131c";
  const hairLight = "#2b2635";
  const skin = "#b98a5f";
  const skinShade = "#8e6843";
  const neck = "#946c47";
  const mouth = "#7a5436";
  const dark = "#0e1220";
  const shirt = "#f4f6fa";
  const shirtShade = "#c3c9d8";
  const tie = "#0b0c11";
  const tieKnot = "#1b1e28";
  const pants = "#141a2e";
  const shoe = "#05060c";

  return (
    <svg
      viewBox="0 0 12 16"
      className={className}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel-art avatar of a developer with olive skin and black hair in a messy mod cut, wearing a white shirt and black tie, standing beside a laptop"
    >
      {/* Face and neck */}
      <rect x="2" y="2" width="8" height="4" fill={skin} />
      <rect x="2" y="5" width="1" height="1" fill={skinShade} />
      <rect x="9" y="5" width="1" height="1" fill={skinShade} />
      <rect x="4" y="6" width="4" height="1" fill={neck} />

      {/* Hair: rounded crown with a flicked-up tuft */}
      <rect x="3" y="0" width="5" height="1" fill={hair} />
      <rect x="9" y="0" width="1" height="1" fill={hair} />
      <rect x="2" y="1" width="8" height="1" fill={hair} />

      {/* Heavy mod fringe, with uneven tips falling over the brow */}
      <rect x="1" y="2" width="10" height="1" fill={hair} />
      <rect x="3" y="3" width="1" height="1" fill={hair} />
      <rect x="6" y="3" width="1" height="1" fill={hair} />
      <rect x="9" y="3" width="1" height="1" fill={hair} />

      {/* Side hair falling over the ears */}
      <rect x="1" y="3" width="1" height="3" fill={hair} />
      <rect x="10" y="3" width="1" height="3" fill={hair} />

      {/* Texture highlights so the black reads as hair, not a silhouette */}
      <rect x="4" y="0" width="2" height="1" fill={hairLight} />
      <rect x="3" y="1" width="1" height="1" fill={hairLight} />
      <rect x="7" y="2" width="1" height="1" fill={hairLight} />

      {/* Eyes and mouth */}
      <rect x="4" y="4" width="1" height="1" fill={dark} />
      <rect x="7" y="4" width="1" height="1" fill={dark} />
      <rect x="5" y="5" width="2" height="1" fill={mouth} />

      {/* White shirt and sleeves */}
      <rect x="2" y="7" width="8" height="5" fill={shirt} />
      <rect x="0" y="8" width="2" height="4" fill={shirt} />
      <rect x="10" y="8" width="2" height="4" fill={shirt} />
      <rect x="1" y="8" width="1" height="4" fill={shirtShade} />
      <rect x="10" y="8" width="1" height="4" fill={shirtShade} />

      {/* Open collar framing the knot */}
      <rect x="4" y="7" width="1" height="1" fill={shirtShade} />
      <rect x="7" y="7" width="1" height="1" fill={shirtShade} />

      {/* Black tie */}
      <rect x="5" y="7" width="2" height="1" fill={tieKnot} />
      <rect x="5" y="8" width="2" height="3" fill={tie} />

      {/* Hands */}
      <rect x="0" y="12" width="2" height="1" fill={skin} />
      <rect x="10" y="12" width="2" height="1" fill={skin} />

      {/* Legs and shoes */}
      <rect x="3" y="12" width="2" height="3" fill={pants} />
      <rect x="7" y="12" width="2" height="3" fill={pants} />
      <rect x="2" y="15" width="3" height="1" fill={shoe} />
      <rect x="7" y="15" width="3" height="1" fill={shoe} />
    </svg>
  );
}
