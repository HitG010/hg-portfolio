import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

/**
 * The stacked card, used below the showcase breakpoint. Extracted so the
 * narrow and wide layouts share one definition of a project's presentation.
 */
const ProjectCard = ({ project, eager = false }) => (
  <Reveal className="group relative mt-6 flex min-h-[250px] transform-gpu flex-col justify-between overflow-hidden rounded-xl border border-border [box-shadow:0_-20px_80px_-20px_#0000000f_inset] sm:min-h-[300px] md:min-h-[420px] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
    {/* 70% reads as a moody backdrop against the dark card but washes out to
        a ghost against white, so light mode keeps the thumbnail nearly
        opaque. The mask still clears the bottom where the text sits. */}
    <img
      src={project.thumbnailImg}
      alt=""
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      className="absolute left-0 top-0 h-full w-full border-none object-cover opacity-95 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 motion-reduce:transition-none dark:opacity-70"
    />
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 group-hover:-translate-y-10 motion-reduce:transition-none sm:p-6">
      {project.ProjectLogo !== undefined && (
        <img
          src={project.ProjectLogo}
          alt=""
          width="48"
          height="48"
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="mb-1 h-10 w-10 object-contain sm:h-12 sm:w-12"
        />
      )}
      <h3 className="m-0 text-2xl font-semibold text-primary sm:text-3xl">
        {project.ProjectName}
      </h3>
      <ul className="mt-1 flex flex-wrap gap-2">
        {project.ProjectTechUsed.map((tech) => (
          <li
            key={tech}
            className="mb-0 flex items-center rounded-lg border border-border px-2 py-1 text-xs sm:text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>
      <p
        className="mt-1 max-w-xl text-sm text-secondary sm:text-base"
        dangerouslySetInnerHTML={{ __html: project.ProjectTagline }}
      ></p>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center pb-4 opacity-0 transition-all duration-300 group-hover:opacity-100 motion-reduce:transition-none">
        <Link
          to={`/projects/${project.ProjectId}`}
          aria-label={`View details for ${project.ProjectName}`}
          className="pointer-events-auto flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-md font-semibold text-bg transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          View Details <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </Reveal>
);

export default ProjectCard;
