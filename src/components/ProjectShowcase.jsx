import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

/**
 * Wide-viewport presentation: the preview pins while each project's details
 * scroll past it, then crossfades to the next.
 *
 * The active project is whichever block's midpoint is nearest the middle of
 * the viewport, recomputed on scroll.
 *
 * An IntersectionObserver with a narrow rootMargin band was the first
 * approach. It is cheaper, but a band can be jumped over by a fast fling,
 * which leaves the preview stuck on the previous project. Measuring four
 * elements is negligible and cannot desynchronise, and React bails out when
 * the index is unchanged so the common case is zero re-renders. If this list
 * ever grows past a handful of projects, revisit — the observer scales
 * better than per-scroll measurement.
 */
const ProjectShowcase = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef([]);

  useEffect(() => {
    const pickNearest = () => {
      const nodes = blockRefs.current.filter(Boolean);
      if (!nodes.length) return;

      const viewportMiddle = window.innerHeight / 2;
      let nearest = 0;
      let smallestGap = Infinity;

      nodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        const gap = Math.abs(rect.top + rect.height / 2 - viewportMiddle);
        if (gap < smallestGap) {
          smallestGap = gap;
          nearest = index;
        }
      });

      setActiveIndex(nearest);
    };

    pickNearest();
    window.addEventListener("scroll", pickNearest, { passive: true });
    window.addEventListener("resize", pickNearest, { passive: true });
    return () => {
      window.removeEventListener("scroll", pickNearest);
      window.removeEventListener("resize", pickNearest);
    };
  }, [projects.length]);

  const goTo = (index) => {
    blockRefs.current[index]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "center",
    });
  };

  // The preview column is the wider of the two so the work reads large. The
  // frame is 3:2 to match the thumbnails themselves (1280x832, ratio 1.54) —
  // a taller frame sized in vh looked bigger but object-cover then sliced
  // ~17% off each side, cutting titles and stat cards out of the dashboards.
  return (
    <div className="grid grid-cols-[1.5fr_1fr] gap-10">
      <div>
        <div className="sticky top-[16vh]">
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-border bg-surface">
            {projects.map((project, index) => (
              <img
                key={project.ProjectId}
                src={project.thumbnailImg}
                alt={`${project.ProjectName} preview`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                aria-hidden={index !== activeIndex}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Turns the showcase from something you only scroll past into
              something you can steer. */}
          <nav aria-label="Projects" className="mt-5 flex gap-2">
            {projects.map((project, index) => (
              <button
                key={project.ProjectId}
                type="button"
                onClick={() => goTo(index)}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`group flex-1 border-t-2 pt-3 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none ${
                  index === activeIndex
                    ? "border-accent text-primary"
                    : "border-border text-secondary hover:border-secondary hover:text-primary"
                }`}
              >
                <span className="block text-xs font-medium tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block truncate text-sm">
                  {project.ProjectName}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <ol>
        {projects.map((project, index) => (
          <li
            key={project.ProjectId}
            data-index={index}
            ref={(node) => (blockRefs.current[index] = node)}
            className="flex min-h-[68vh] flex-col justify-center"
          >
            <Reveal>
              <span
                aria-hidden="true"
                className="text-sm font-medium text-accent"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-3xl font-semibold">
                {project.ProjectName}
              </h3>
              <p
                className="mt-3 text-secondary"
                dangerouslySetInnerHTML={{ __html: project.ProjectTagline }}
              ></p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.ProjectTechUsed.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-border px-2 py-1 text-xs text-secondary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <Link
                to={`/projects/${project.ProjectId}`}
                className="group mt-7 inline-flex items-center gap-2 self-start rounded-lg border border-border px-4 py-2 font-medium text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                View details
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </Link>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProjectShowcase;
