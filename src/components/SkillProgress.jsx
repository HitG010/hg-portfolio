import React from 'react';

// Array of skills and their proficiency (out of 100)
const skills = [
  { name: "C/C++", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 80 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "React", level: 90 },
  { name: "TailwindCSS", level: 85 },
  { name: "Bootstrap", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 80 },
  { name: "Flask", level: 70 },
  { name: "Solidity", level: 75 },
  { name: "Git/Github", level: 95 },
  { name: "GCP", level: 65 },
  { name: "Firebase", level: 75 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 70 },
  { name: "Figma", level: 70 },
  { name: "NextJS", level: 50 },
  { name: "Web Sockets", level: 75 },
];

const ProgressBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <span className="text-md font-semibold">{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="bg-textSecondary/50 h-2 rounded-full mt-2">
        <div
          className="bg-textPrimary h-2 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

// const SkillSet = () => {
//   return (
//     <div className="p-6 bg-darkCard/50 text-white rounded-xl">
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
    <div className="text-white rounded-xl">
      <h2 className="text-2xl font-semibold mb-6">My Skills</h2>
      <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <div className='flex justify-center items-center px-3 py-1 bg-darkCard/50 rounded-lg border border-1 border-textSecondary/20 transition-all duration-300 hover:bg-textSecondary/20 '>
            {skill.name}
        </div>
      ))}
      </div>
    </div>
  );
};

export default SkillSet;
