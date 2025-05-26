import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import LazyLoad from 'react-lazyload';
import {projectsData} from '../data/projectsData';
import { useLocation } from 'react-router-dom';

// import quantamind from "../assets/quantamind.png";
// import adroitUIhome from "../assets/adroitUIhome.png";
// import deeptrace from "../assets/deeptrace-dashboard.png";
// import qunataMindLogo from "../assets/quantaMindLogo.png";
// import adroitUIwhitebg from "../assets/adroitUIwhitebg.png";
// import deeptrace_logo_transaprent from "../assets/deeptrace_logo_transparent.png";

// const imageArray = [quantamind, adroitUIhome, deeptrace];
// const logoArray = [qunataMindLogo, adroitUIwhitebg, deeptrace_logo_transaprent];

// const projects = [
//     {
//       Project_Name: "DeepTrace",
//       Project_Description: "Blockchain and Machine Learning based Deepfake Detection platform. ",
//       Project_TechUsed: ["JavaScript", "React", "TailwindCSS", "Node.js", "MongoDB", "Express", "Solidity", "Flask", "Figma"],
//       Project_Image: 3,
//     },
//     {
//       Project_Name: "AdroitUI",
//       Project_Description: "TailwindCSS Components UI Library for React.",
//       Project_TechUsed: ["React", "Vite", "TailwindCSS", "NPM", "Storybook", "Figma"],
//       Project_Image: 2,
//     },
//     {
//       Project_Name: "QuantaMind",
//       Project_Description: "A Self-Help Mental Health Companion.",
//       Project_TechUsed: ["HTML", "CSS", "JavaScript", "EJS", "Node.js", "Express", "Firebase", "Figma"],
//       Project_Website: "https://quantamind.dev",
//       Project_Image: 1,
//     },
// ];

const Projects = () => {
  const path = useLocation().pathname;
  // if(path === '/') {
  //   projectsData.length = 3;
  // }
  // else if (path === '/projects') {
  //   projectsData.length = 8;
  // }
  return (
    <div className="bg-bgDark text-white mt-4 w-full md:w-[60%] mx-auto px-4 md:px-0">
      <div className='flex justify-between gap-4 mb-8'>
      <h2 className="text-4xl font-bold">Projects</h2>
      {(path === '/') && <button className="flex gap-2 items-center text-textSecondary px-2 py-1 rounded-md transition-all duration-300 hover:bg-darkCard"
                onClick={() => window.location.href = '/projects/'}>View All <ArrowUpRight className='h-4 w-4'/></button>}
      </div>
      {projectsData.map((project, index) => (
        <div 
          className="group relative col-span-3 flex flex-col justify-between overflow-hidden mt-6 rounded-xl transform-gpu bg-background [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] min-h-[250px] sm:min-h-[300px] md:min-h-[500px] custom" 
          key={index}
        >
          <div>
          <LazyLoad height={200} offset={100}>
            <img 
              src={project.thumbnailImg}
              alt="background" 
              className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
            />
            </LazyLoad>
          </div>
          <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 sm:p-6 transition-all duration-300 group-hover:-translate-y-10 custom">
          {(project.ProjectLogo !== undefined) && <LazyLoad height={200} offset={100}>
            <img 
              src={project.ProjectLogo}
              alt="logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain mb-1"
            />
            </LazyLoad>}
            <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-neutral-300 m-0 custom">
              {project.ProjectName}
            </h2>
            <div className="flex gap-2 mt-1 custom flex-wrap">
              {project.ProjectTechUsed.map((tech, techIndex) => (
                <div 
                  className="text-xs sm:text-sm card px-2 py-1 flex items-center custom mb-0 border border-1 border-white/20 rounded-lg" 
                  key={techIndex}
                >
                  <div className="h-4 custom icn"></div>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
            <p className="max-w-xl text-textSecondary mt-1 custom text-sm sm:text-base" dangerouslySetInnerHTML={{__html: project.ProjectTagline}}>
            </p>
            <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-10 group-hover:opacity-100 custom">
              <div className="pointer-events-auto custom bg-white rounded-lg py-2 px-3 text-md font-semibold text-black flex gap-2 items-center cursor-pointer hover:bg-white/80 transition-colors" onClick={()=>{
                window.location.href= `/projects/${project.ProjectId}`;
              }}>
                View Details <ArrowRight className="w-4 h-4"/>
              </div>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 custom">
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;