import React from "react";

const experiences = [
  {
    title: "Blockchain Research Intern",
    company: "Delhi Technological University (Under Prof. Rahul Thakur)",
    duration: "Oct. 2024 - Dec. 2024",
    description: `<p className="mt-2">Conducted research on deepfake detection and prevention using blockchain and machine learning. Co-authored a research paper titled "HyperSwin: Preventing Deepfake Proliferation with Swin-Efficient Fusion in a Hyperledger Ecosystem". Developed a secure, decentralized system using Hyperledger Fabric to track video authenticity and ensuring verifiable tamper-proof results. Reduced processing time upto 90-99% by bypassing redundant video checks, enabling faster deepfake detection.</p>`,
    website: "https://scholar.google.com/citations?user=e51fOvMAAAAJ&hl=en&oi=ao",
  },
  {
    title: "Full-Stack Web Developer",
    company: "Delhi Police",
    duration: "May 2024 - Jul. 2024",
    description: `<p className="mt-2">Created a comprehensive web and mobile application <a href="https://www.delhicop.in" target="_blank"><b>DelhiCOP</b></a> to enable efficient tracking and report daily crimes, <b>enhancing operational efficiency</b>. Architected and implemented a modular backend using <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>, and built a full-stack interface with <b>React</b>, improving <b>scalability</b> and <b>maintainability</b>.</p>`,
    website: "https://www.delhicop.in",
  },
  {
    title: "Full-Stack Web Developer",
    company: "Skillop",
    duration: "Dec. 2023 - Jul. 2024",
    description: `<p className="mt-2">Led a team of six to design and implement a dynamic dashboard, streamlining data visualization and enhancing user interaction. Contributed to building a <b>responsive, scalable</b> platform using <b>React, RESTful APIs, Tailwind CSS</b>, and <b>MongoDB</b>, ensuring robust frontend and backend integration.</p>`,
    website: "https://skillop.in",
  },
  {
    title: "UI/UX Designer",
    company: "BigWig Media",
    duration: "Jan. 2024",
    description: `<p className="mt-2">Revamped website flows, and added user friendly functionalities. Coordinated sessions to work through functionality, site architecture, and user flow requirements.</p>`,
    website: "",
  }
];

const ExperienceSection = () => {
  return (
    <div className="bg-bgDark text-white mt-4 mx-auto w-full md:w-[60%] max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-8">
        Experience
      </h2>
      <div className="relative">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative pl-6 sm:pl-10 pb-8 flex flex-col sm:flex-row"
          >
            <div className="z-10 absolute top-1 left-0 w-4 h-4 sm:w-5 sm:h-5 bg-white border border-4 border-textSecondary rounded-full"></div> {/* Dot */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {experience.title}
                  </h3>
                  <a
                    className="relative group text-lg text-textSecondary hover:text-textPrimary w-inherit"
                    href={experience.website}
                    target="_blank"
                  >
                    {experience.company}
                    <span className="absolute inline-block h-[2px] left-0 bottom-0 w-0 bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
                <p className="text-sm text-textSecondary italic mt-2 sm:mt-0">
                  {experience.duration}
                </p>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: experience.description }}
                className="mt-4 text-sm sm:text-base"
              ></div>
            </div>
            {index !== experiences.length - 1 && (
              <div className="absolute left-[5px] sm:left-[7px] top-4 w-[6px] h-full bg-textSecondary/50"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
