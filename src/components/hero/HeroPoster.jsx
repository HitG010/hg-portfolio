import { useMemo } from "react";
import { buildNetwork } from "./network";
import { useMediaQuery } from "../../hooks/useMediaQuery";

// Desktop matches what the 3D camera frames: at z=13 with a 55° fov the
// visible height is ~13.5 world units, so the crossfade to WebGL does not
// jump scale.
//
// Phones need their own framing. Fitting all 26 units into a ~380px screen
// works out at ~15px per unit, which renders the nodes at well under a pixel
// — the network technically drew but you could barely see it. Zooming into a
// portion of the same graph keeps the marks at a legible size.
const VIEW_WIDE = { w: 26, h: 13.8 };
const VIEW_NARROW = { w: 7, h: 15 };

/**
 * What every visitor sees first — and on phones, coarse pointers and
 * reduced-motion, all they ever see, because the WebGL gate never opens
 * there. It therefore has to carry the scene's character on its own rather
 * than read as a flat diagram: some nodes take the accent colour, nodes
 * breathe, and dashes travel the edges to stand in for the signal pulses.
 *
 * All of that is CSS on inline SVG — about 2 KB, sharp at any size, themed
 * through currentColor, and it costs nothing on the devices that need it
 * most. Animations are disabled under prefers-reduced-motion in index.css.
 */
const HeroPoster = ({ className = "" }) => {
  const { nodes, edges } = useMemo(() => buildNetwork(), []);
  const isWide = useMediaQuery("(min-width: 640px)");
  const VIEW = isWide ? VIEW_WIDE : VIEW_NARROW;

  // z only supplies depth cues here — nearer nodes read slightly larger.
  const depth = (z) => (z + 0.9) / 1.8;

  return (
    <svg
      aria-hidden="true"
      viewBox={`${-VIEW.w / 2} ${-VIEW.h / 2} ${VIEW.w} ${VIEW.h}`}
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="text-nn-line" stroke="currentColor" strokeWidth="0.012">
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

      {/* Every third edge carries a travelling dash, so the network reads as
          active without the whole thing crawling. */}
      <g className="text-nn-accent" stroke="currentColor" strokeWidth="0.05">
        {edges
          .filter((_, i) => i % 3 === 0)
          .map(([a, b], i) => (
            <line
              key={i}
              x1={a.x}
              y1={-a.y}
              x2={b.x}
              y2={-b.y}
              className="nn-flow"
              style={{ animationDelay: `${(i % 7) * 0.9}s` }}
              opacity="0.55"
            />
          ))}
      </g>

      {nodes.map((n, i) => {
        // A third of the nodes carry the accent, scattered rather than
        // clustered, so the colour reads as highlights and not as a layer.
        const isAccent = i % 3 === 1;
        return (
          <circle
            key={i}
            cx={n.x}
            cy={-n.y}
            r={0.05 + depth(n.z) * 0.03}
            className={`nn-node ${isAccent ? "text-nn-accent" : "text-nn-node"}`}
            fill="currentColor"
            style={{ animationDelay: `${(i % 9) * 0.45}s` }}
            opacity={0.3 + depth(n.z) * 0.3}
          />
        );
      })}
    </svg>
  );
};

export default HeroPoster;
