import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import ProjectShowcase from "./ProjectShowcase";
import Reveal from "./Reveal";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Projects = () => {
  const isHome = useLocation().pathname === "/";
  // Side-by-side sticky needs real horizontal room; below this the stacked
  // cards are the better presentation.
  const canShowcase = useMediaQuery("(min-width: 1024px)");

  return (
    <Container as="section">
      <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
        {isHome && (
          <Link
            to="/projects"
            className="flex items-center gap-2 rounded-md px-2 py-1 text-secondary transition-colors duration-300 hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            View All <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        )}
      </Reveal>

      {canShowcase ? (
        <ProjectShowcase projects={projectsData} />
      ) : (
        projectsData.map((project, index) => (
          <ProjectCard
            key={project.ProjectId}
            project={project}
            eager={index === 0}
          />
        ))
      )}
    </Container>
  );
};

export default Projects;
