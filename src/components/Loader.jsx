import { useReducedMotion } from "framer-motion";
import loaderVid from "../assets/loader/neural-loader.mp4";

const Loader = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      role="status"
      aria-label="Loading"
      className="h-screen w-full flex justify-center items-center bg-bg"
    >
      <div className="flex flex-col items-center">
        {prefersReducedMotion ? (
          <p className="text-lg font-medium text-secondary">Loading…</p>
        ) : (
          // White line-art on a PURE black background — the asset was
          // re-levelled for this, because these blend modes only cancel
          // completely at pure black/white. Screen drops the black on dark;
          // on light we invert first (background becomes pure white) and
          // multiply. Either way only the artwork paints, so it sits
          // directly on the page rather than in a visible box.
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="h-auto w-[70%] max-w-[300px] invert mix-blend-multiply dark:invert-0 dark:mix-blend-screen"
          >
            <source src={loaderVid} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
};

export default Loader;
