import React from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa6";
import { CgWebsite } from 'react-icons/cg';
import { Github, Globe, Figma } from 'lucide-react';

import { projectsData } from '../data/projectsData.jsx';

const linksicons = [<Github />, <Globe />, <Figma />];

const ProjectDeets = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <div className="mt-16 mx-auto w-full sm:w-[80%] md:w-[60%] px-4">
            {/* Back to projects button */}
            <button
                className="flex gap-2 items-center text-textSecondary px-4 py-2 rounded-md transition-all duration-300 hover:bg-darkCard mb-4"
                onClick={() => window.location.href = '/projects/'}
            >
                <FaChevronLeft /> Back to Projects
            </button>
            {projectsData.map((project) => {
                if (project.ProjectId == id) {
                    return (
                        <div key={project.ProjectId} className="flex flex-col justify-center">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex items-center gap-4">
                                    <img src={project.ProjectLogo} alt="logo" className="h-12 w-12 sm:h-16 sm:w-16 object-contain" />
                                    <div className="flex flex-col">
                                        <h1 className="text-3xl sm:text-4xl font-bold">{project.ProjectName}</h1>
                                        <h2 className="text-md sm:text-lg text-textSecondary">{project.ProjectTagline}</h2>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-4 mt-4 sm:mt-0">
                                    {project.ProjectLinks.map((link, idx) => (
                                        <a
                                            key={link}
                                            href={link}
                                            className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center border border-textSecondary/10 transition-all duration-300 px-2 py-2 rounded-lg"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {linksicons[idx]}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
                                {project.ProjectTechUsed.map((tech) => (
                                    <span key={tech} className="bg-darkCard text-textSecondary px-2 py-1 rounded-md text-xs sm:text-sm">{tech}</span>
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
                                        title="Project Video"
                                    ></iframe>
                                )}
                            </div>
                            <div className="mt-8">
                                {project.ProjectImages.map((image, idx) => (
                                    <img
                                        key={idx}
                                        src={image}
                                        alt="project"
                                        className="w-full rounded-xl shadow-md mt-4"
                                    />
                                ))}
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default ProjectDeets;
