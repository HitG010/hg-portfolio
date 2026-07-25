import { useMemo } from "react";
import { buildNetwork } from "./network";

const VIEW = { w: 40, h: 22 };

/**
 * What every visitor sees first, and all that phones, coarse pointers and
 * reduced-motion users ever see.
 *
 * Drawn as inline SVG from the same geometry as the WebGL scene rather than
 * as a captured bitmap: it is around 2 KB, stays sharp at any size, and picks
 * up the theme through currentColor instead of needing a second asset for
 * light mode.
 */
const HeroPoster = ({ className = "" }) => {
  const { nodes, edges } = useMemo(() => buildNetwork(), []);

  // z only affects depth cues here — nearer nodes read slightly larger.
  const depth = (z) => (z + 0.9) / 1.8;

  return (
    <svg
      aria-hidden="true"
      viewBox={`${-VIEW.w / 2} ${-VIEW.h / 2} ${VIEW.w} ${VIEW.h}`}
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="text-secondary" stroke="currentColor" strokeWidth="0.035">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={a.x * 4}
            y1={-a.y * 4}
            x2={b.x * 4}
            y2={-b.y * 4}
            opacity={0.18 + depth((a.z + b.z) / 2) * 0.22}
          />
        ))}
      </g>
      <g className="text-accent" fill="currentColor">
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x * 4}
            cy={-n.y * 4}
            r={0.34 + depth(n.z) * 0.2}
            opacity={0.55 + depth(n.z) * 0.45}
          />
        ))}
      </g>
    </svg>
  );
};

export default HeroPoster;
