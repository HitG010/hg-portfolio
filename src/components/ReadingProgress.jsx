import { useEffect, useState } from "react";

/**
 * How far through the article you are. Measured against the article element
 * rather than the whole document, so the footer and any trailing space do not
 * count as unread content and leave the bar short of the end.
 */
const ReadingProgress = ({ targetRef }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = targetRef.current;
      if (!el) return;

      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;

      if (scrollable <= 0) {
        setProgress(1);
        return;
      }

      setProgress(Math.min(1, Math.max(0, -top / scrollable)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetRef]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-30 h-0.5 bg-transparent"
    >
      <div
        className="h-full origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};

export default ReadingProgress;
