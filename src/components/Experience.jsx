import React from "react";

const experiences = [
  {
    title: "ML Research Intern",
    company: "Delhi Technological University (Under Prof. Rahul Thakur)",
    duration: "Aug. 2024 - Dec. 2024",
    description: `<p className="mt-2">I developed a hybrid deep learning model combining Swin Transformer and EfficientNet-B0, achieving 98.32% accuracy on a dataset of 800+ videos and improving deepfake detection performance by 9.2%. Additionally, I engineered a Swin Transformer + FPN-based segmentation pipeline for image forgery detection, reducing false positives by 15% and significantly enhancing feature extraction capabilities. By optimizing training strategies through advanced data augmentation and fine-tuning, I achieved a 12% increase in model generalization on real vs. deepfake datasets.</p>`,
    website:
      "https://scholar.google.com/citations?user=e51fOvMAAAAJ&hl=en&oi=ao",
  },
  {
    title: "Web Development & AI/ML Intern",
    company: "Racloop Technologies, Gurgaon",
    duration: "May. 2024 - Jul. 2024",
    description: `<p className="mt-2">I designed and built custom chatbots from scratch using transformer-based architectures with up to 124 million parameters, tailored to meet specific company use cases. In addition, I contributed to multiple web development projects using Next.js, delivering over 4 responsive and high-performance web applications as part of a collaborative 5-member team. I also performed in-depth data analysis on more than 50,000 data points, generating actionable insights that led to a 15% improvement in workflow optimization.</p>`,
    website: "https://whilter.ai/",
  },
  {
    title: "Web Development & AI/ML Intern",
    company: "Delhi Police",
    duration: "Mar 2024 - May 2024",
    description: `<p className="mt-2">I created a mobile application, DelhiCOP, to streamline crime tracking and daily reporting, significantly enhancing operational efficiency, also built a crime detection model leveraging advanced computer vision techniques such as LRCN, Conv-LSTM, and Vision Transformer, achieving 92% accuracy. Additionally, I conducted an in-depth analysis of over 10,000 crime records, uncovering patterns that led to a 20% improvement in resource allocation. I collaborated with a 15-member team, contributing to UI/UX design and implementing four intuitive front-end interfaces.</p>`,
    website: "https://www.delhicop.in",
  },
];

const ExperienceSection = () => {
  return (
    <div className="bg-bgDark text-white mt-4 mx-auto w-full md:w-[60%] max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      <div className="relative">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative pl-6 sm:pl-10 pb-8 flex flex-col sm:flex-row"
          >
            <div className="z-10 absolute top-1 left-0 w-4 h-4 sm:w-5 sm:h-5 bg-white border border-4 border-textSecondary rounded-full"></div>{" "}
            {/* Dot */}
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
