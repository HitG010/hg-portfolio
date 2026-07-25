import { useMemo } from "react";
import { buildNetwork } from "./network";

// Matched to what the 3D camera frames: at z=13 with a 45° fov the visible
// height is 2 * 13 * tan(22.5°) ≈ 10.8 world units. Keeping the poster in the
// same coordinate space means the crossfade to WebGL does not jump scale.
const VIEW = { w: 26, h: 13.8 };

/**
 * What every visitor sees first, and all that phones, coarse pointers and
 * reduced-motion users ever see.
 *
 * Drawn as inline SVG from the same seeded geometry as the WebGL scene rather
 * than as a captured bitmap: it is around 2 KB, stays sharp at any size, and
 * picks up the theme through currentColor instead of needing a second asset
 * for light mode.
 */
const HeroPoster = ({ className = "" }) => {
  const { nodes, edges } = useMemo(() => buildNetwork(), []);

  // z only supplies depth cues here — nearer nodes read slightly larger.
  const depth = (z) => (z + 0.9) / 1.8;

  return (
    <svg
      aria-hidden="true"
      viewBox={`${-VIEW.w / 2} ${-VIEW.h / 2} ${VIEW.w} ${VIEW.h}`}
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="text-secondary" stroke="currentColor" strokeWidth="0.012">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={a.x}
            y1={-a.y}
            x2={b.x}
            y2={-b.y}
            opacity={0.1 + depth((a.z + b.z) / 2) * 0.12}
          />
        ))}
      </g>
      <g className="text-secondary" fill="currentColor">
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={-n.y}
            r={0.05 + depth(n.z) * 0.025}
            opacity={0.25 + depth(n.z) * 0.25}
          />
        ))}
      </g>
    </svg>
  );
};

export default HeroPoster;
