import { Suspense, lazy, useCallback, useState } from "react";
import HeroPoster from "./HeroPoster";
import { useWebGLEligible } from "./useWebGLEligible";

// Lazy so three.js lands in its own chunk. If the gate below never opens, the
// browser never requests it.
const NeuralScene = lazy(() => import("./NeuralScene"));

/**
 * Site-wide background layer.
 *
 * Fixed rather than per-section, and mounted once in App above the router, so
 * it survives route changes — the canvas is never torn down and rebuilt, and
 * the network reads as one continuous space the content moves through.
 */
const Backdrop = () => {
  const eligible = useWebGLEligible();
  const [sceneReady, setSceneReady] = useState(false);

  // Driven by the scene's first drawn frame, not a timer. If the canvas
  // never paints, the poster simply stays — which is the correct fallback.
  const handleReady = useCallback(() => setSceneReady(true), []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
          sceneReady ? "opacity-0" : "opacity-100"
        }`}
      >
        <HeroPoster />
      </div>

      {eligible && (
        <Suspense fallback={null}>
          <div
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
              sceneReady ? "opacity-100" : "opacity-0"
            }`}
          >
            <NeuralScene onReady={handleReady} />
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default Backdrop;
