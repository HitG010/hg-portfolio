// Geometry for the hero network, shared by the static poster and the WebGL
// scene. A seeded generator keeps them identical, so the crossfade when
// three.js finishes loading lands on the same shape rather than a reshuffle.

const LAYERS = [4, 6, 6, 3];
const SPACING_X = 2.3;
const SPACING_Y = 1.15;
const EDGE_DENSITY = 0.55;

// Mulberry32 — small, fast, and deterministic for a fixed seed.
function seededRandom(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildNetwork(seed = 20240816) {
  const random = seededRandom(seed);
  const nodes = [];

  LAYERS.forEach((count, layer) => {
    for (let i = 0; i < count; i += 1) {
      nodes.push({
        layer,
        x: (layer - (LAYERS.length - 1) / 2) * SPACING_X,
        y: (i - (count - 1) / 2) * SPACING_Y,
        z: (random() - 0.5) * 1.8,
      });
    }
  });

  const edges = [];
  for (let layer = 0; layer < LAYERS.length - 1; layer += 1) {
    const from = nodes.filter((n) => n.layer === layer);
    const to = nodes.filter((n) => n.layer === layer + 1);
    from.forEach((a) => {
      to.forEach((b) => {
        if (random() < EDGE_DENSITY) edges.push([a, b]);
      });
    });
  }

  return { nodes, edges };
}

/** Reads a theme token as a CSS colour. Tokens are stored as "R G B". */
export function readToken(name, fallback) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  if (!raw) return fallback;
  return `rgb(${raw.split(/\s+/).join(",")})`;
}
