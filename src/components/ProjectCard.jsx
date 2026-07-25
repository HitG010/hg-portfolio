import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

// Long stacks (Edunate carries twelve) wrapped into four rows of pills and
// swamped the card at phone width.
const MAX_VISIBLE_TECH = 3;

/**
 * The narrow-viewport presentation, below the showcase breakpoint.
 *
 * Rebuilt away from the previous treatment, which laid title, tags and
 * tagline directly over a masked screenshot. That reads fine at 500px tall on
 * a desktop card and becomes a busy, low-contrast block on a phone.
 *
 * Two things it fixes beyond density: the image and the text no longer fight
 * each other, and the whole card is now the link. Previously the only way in
 * was a "View Details" button revealed on hover — which does not exist on
 * touch, so on a phone there was effectively no visible affordance at all.
 */
const ProjectCard = ({ project, eager = false }) => {
  const visible = project.ProjectTechUsed.slice(0, MAX_VISIBLE_TECH);
  const overflow = project.ProjectTechUsed.length - visible.length;

  return (
    <Reveal as="li">
      <Link
        to={`/projects/${project.ProjectId}`}
        className="group block overflow-hidden rounded-xl border border-border bg-surface/30 transition-colors duration-300 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none"
      >
        <div className="aspect-[16/10] overflow-hidden border-b border-border bg-surface">
          <img
            src={project.thumbnailImg}
            alt=""
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-snug">
              {project.ProjectName}
            </h3>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 h-4 w-4 shrink-0 text-secondary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transition-none"
            />
          </div>

          <p
            className="mt-1 text-sm text-secondary"
            dangerouslySetInnerHTML={{ __html: project.ProjectTagline }}
          />

          <ul className="mt-3 flex flex-wrap gap-1.5">
            {visible.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border px-2 py-0.5 text-xs text-secondary"
              >
                {tech}
              </li>
            ))}
            {overflow > 0 && (
              <li className="px-1 py-0.5 text-xs text-secondary">
                +{overflow} more
              </li>
            )}
          </ul>
        </div>
      </Link>
    </Reveal>
  );
};

export default ProjectCard;
