import React from "react";

// Array of skills and their proficiency (out of 100)
const skills = [
  { name: "C/C++", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 80 },
  { name: "PyTorch", level: 70 },
  { name: "TensorFlow", level: 70 },
  { name: "scikit-learn", level: 70 },
  { name: "MATLAB", level: 70 },
  { name: "OpenCV", level: 70 },
  { name: "Langchain", level: 70 },
  { name: "AI Agents", level: 70 },
  // {name : ""}
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "React", level: 90 },
  { name: "TailwindCSS", level: 85 },
  { name: "Bootstrap", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 80 },
  { name: "Flask", level: 70 },
  { name: "Git/Github", level: 95 },
  { name: "GCP", level: 65 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 70 },
  { name: "NextJS", level: 50 },
];

const ProgressBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <span className="text-md font-semibold">{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="bg-secondary/50 h-2 rounded-full mt-2">
        <div
          className="bg-primary h-2 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

// const SkillSet = () => {
//   return (
//     <div className="p-6 bg-surface/50 text-primary rounded-xl">
//       <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
//       <div className="flex flex-col flex-wrap h-[350px] gap-4">
//       {skills.map((skill, index) => (
//         <ProgressBar key={index} skill={skill.name} level={skill.level} />
//       ))}
//       </div>
//     </div>
//   );
// };
const SkillSet = () => {
  return (
    <div className="text-primary rounded-xl">
      <h2 className="text-2xl font-semibold mb-6">My Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div className="flex justify-center items-center px-3 py-1 bg-surface/50 rounded-lg border border-secondary/20 transition-all duration-300 hover:bg-secondary/20 ">
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
