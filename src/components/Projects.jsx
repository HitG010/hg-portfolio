import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projectsData } from "../data/projectsData";
import { useLocation } from "react-router-dom";
const Projects = () => {
  const path = useLocation().pathname;
  return (
    <div className="bg-bg text-primary mt-4 w-full md:w-[60%] mx-auto px-4 md:px-0">
      <div className="flex justify-between gap-4 mb-8">
        <h2 className="text-4xl font-bold">Projects</h2>
        {path === "/" && (
          <button
            className="flex gap-2 items-center text-secondary px-2 py-1 rounded-md transition-all duration-300 hover:bg-surface"
            onClick={() => (window.location.href = "/projects/")}
          >
            View All <ArrowUpRight className="h-4 w-4" />
          </button>
        )}
      </div>
      {projectsData.map((project, index) => (
        <div
          className="group relative col-span-3 flex flex-col justify-between overflow-hidden mt-6 rounded-xl transform-gpu border border-border [box-shadow:0_-20px_80px_-20px_#0000000f_inset] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] min-h-[250px] sm:min-h-[300px] md:min-h-[500px]"
          key={index}
        >
          <div>
            <img
              src={project.thumbnailImg}
              alt="background"
              loading="lazy"
              decoding="async"
              className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
            />
          </div>
          <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 sm:p-6 transition-all duration-300 group-hover:-translate-y-10 custom">
            {project.ProjectLogo !== undefined && (
              <img
                src={project.ProjectLogo}
                alt="logo"
                loading="lazy"
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
              <div
                className="pointer-events-auto custom bg-primary rounded-lg py-2 px-3 text-md font-semibold text-bg flex gap-2 items-center cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => {
                  window.location.href = `/projects/${project.ProjectId}`;
                }}
              >
                View Details <ArrowRight className="w-4 h-4" />
              </div>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/[0.03]"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
