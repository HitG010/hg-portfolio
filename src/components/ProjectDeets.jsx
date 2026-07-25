import { Link, useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { Github, Globe, Figma } from "lucide-react";

import { projectsData } from "../data/projectsData.jsx";
import NotFound from "./NotFound";

// Icons used to be picked by array position, so a project whose first link
// was a live site still got a GitHub icon, and a fourth link got undefined.
const linkKinds = [
  { test: /github\.com/i, label: "source on GitHub", Icon: Github },
  { test: /figma\.com/i, label: "design in Figma", Icon: Figma },
];

const describeLink = (href) =>
  linkKinds.find(({ test }) => test.test(href)) ?? {
    label: "live site",
    Icon: Globe,
  };

const ProjectDeets = () => {
  const { id } = useParams();
  const project = projectsData.find(
    (entry) => String(entry.ProjectId) === String(id)
  );

  if (!project) {
    return (
      <NotFound
        title="Project not found"
        message="There is no project at this address. It may have been renamed or removed."
        actionTo="/projects"
        actionLabel="Back to projects"
      />
    );
  }

  return (
    <div className="mt-16 mx-auto w-full sm:w-[80%] md:w-[60%] px-4">
      <Link
        to="/projects"
        className="inline-flex gap-2 items-center text-secondary px-4 py-2 rounded-md transition-colors duration-300 hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent mb-4"
      >
        <FaChevronLeft aria-hidden="true" /> Back to Projects
      </Link>

      <div className="flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center gap-4">
            <img
              src={project.ProjectLogo}
              alt=""
              width="64"
              height="64"
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl font-bold">
                {project.ProjectName}
              </h1>
              <h2 className="text-md sm:text-lg text-secondary">
                {project.ProjectTagline}
              </h2>
            </div>
          </div>
          <ul className="flex justify-center gap-4 mt-4 sm:mt-0">
            {project.ProjectLinks.map((link) => {
              const { label, Icon } = describeLink(link);
              return (
                <li key={link}>
                  <a
                    href={link}
                    aria-label={`${project.ProjectName} — ${label}`}
                    title={`${project.ProjectName} — ${label}`}
                    className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center border border-border rounded-lg transition-colors duration-300 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
          {project.ProjectTechUsed.map((tech) => (
            <span
              key={tech}
              className="bg-surface text-secondary px-2 py-1 rounded-md text-xs sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <p
          className="text-md sm:text-lg mt-4"
          dangerouslySetInnerHTML={{ __html: project.ProjectDescription }}
        ></p>

        <div className="w-full flex justify-center">
          {project.ProjectVideo[0] && (
            <iframe
              width="100%"
              height="240"
              src={project.ProjectVideo[0]}
              className="mt-8 sm:w-[800px] sm:h-[420px]"
              title={`${project.ProjectName} demo video`}
              loading="lazy"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="mt-8">
          {project.ProjectImages.map((image, idx) => (
            <img
              key={image}
              src={image}
              alt={`${project.ProjectName} screenshot ${idx + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full rounded-xl shadow-md mt-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDeets;
