import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projectsData } from "../data/projectsData";
import { Link, useLocation } from "react-router-dom";
const Projects = () => {
  const path = useLocation().pathname;
  return (
    <div className="bg-bg text-primary mt-4 w-full md:w-[60%] mx-auto px-4 md:px-0">
      <div className="flex justify-between gap-4 mb-8">
        <h2 className="text-4xl font-bold">Projects</h2>
        {path === "/" && (
          <Link
            to="/projects"
            className="flex gap-2 items-center text-secondary px-2 py-1 rounded-md transition-colors duration-300 hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            View All <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        )}
      </div>
      {projectsData.map((project, index) => (
        <div
          className="group relative col-span-3 flex flex-col justify-between overflow-hidden mt-6 rounded-xl transform-gpu border border-border [box-shadow:0_-20px_80px_-20px_#0000000f_inset] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] min-h-[250px] sm:min-h-[300px] md:min-h-[500px]"
          key={index}
        >
          {/* 70% reads as a moody backdrop against the dark card but washes
              out to a ghost against white, so light mode keeps the thumbnail
              nearly opaque. The mask still clears the bottom of the card
              where the title and tags sit. */}
          <div>
            <img
              src={project.thumbnailImg}
              alt="background"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-95 dark:opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
            />
          </div>
          <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 sm:p-6 transition-all duration-300 group-hover:-translate-y-10 custom">
            {project.ProjectLogo !== undefined && (
              <img
                src={project.ProjectLogo}
                alt={`${project.ProjectName} logo`}
                width="48"
                height="48"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain mb-1"
              />
            )}
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary m-0 custom">
              {project.ProjectName}
            </h2>
            <div className="flex gap-2 mt-1 custom flex-wrap">
              {project.ProjectTechUsed.map((tech, techIndex) => (
                <div
                  className="text-xs sm:text-sm card px-2 py-1 flex items-center custom mb-0 border border-1 border-border rounded-lg"
                  key={techIndex}
                >
                  <div className="h-4 custom icn"></div>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
            <p
              className="max-w-xl text-secondary mt-1 custom text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: project.ProjectTagline }}
            ></p>
            <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-10 group-hover:opacity-100 custom">
              <Link
                to={`/projects/${project.ProjectId}`}
                aria-label={`View details for ${project.ProjectName}`}
                className="pointer-events-auto bg-primary rounded-lg py-2 px-3 text-md font-semibold text-bg flex gap-2 items-center hover:bg-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                View Details <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </Link>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/[0.03]"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
