import { useState } from "react";

/**
 * Gate for the WebGL hero.
 *
 * three.js is far larger than the entire rest of this site's entry bundle.
 * Every condition below must hold before it is fetched; otherwise the static
 * poster stays and the chunk is never requested at all.
 *
 * Checked in order of cost — cheap boolean checks before the context probe,
 * which allocates a real GL context.
 */
function probeEligibility() {
  const wideEnough = window.matchMedia("(min-width: 1024px)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const wantsMotion = !window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;
  // Reported as 0 or undefined on browsers that hide it; only reject a real
  // low value rather than an absent one.
  const cores = navigator.hardwareConcurrency;
  const enoughCores = !cores || cores >= 4;

  if (!wideEnough || !finePointer || !wantsMotion || !enoughCores) return false;

  // A device can satisfy everything above and still fail to give us a
  // context — software-rendering blocklists, exhausted context limits.
  const canvas = document.createElement("canvas");
  const gl =
    canvas.getContext("webgl2") ||
    canvas.getContext("webgl") ||
    canvas.getContext("experimental-webgl");

  if (!gl) return false;

  gl.getExtension("WEBGL_lose_context")?.loseContext();
  return true;
}

export function useWebGLEligible() {
  // A lazy initialiser rather than an effect: the probe is a one-shot,
  // synchronous capability check, and running it here avoids the extra
  // render pass that setting state from an effect would cost.
  const [eligible] = useState(probeEligibility);
  return eligible;
}
