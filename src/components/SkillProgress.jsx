// TODO (content): nothing here is newer than 2024 — no TypeScript, Docker,
// AWS or anything picked up since. The `level` numbers were only ever used
// by a ProgressBar that was deleted; keeping them until the redesign
// decides whether skill levels come back.
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

const SkillSet = () => {
  return (
    <div className="text-primary rounded-xl">
      <h2 className="text-2xl font-semibold mb-6">My Skills</h2>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex justify-center items-center px-3 py-1 bg-surface/50 rounded-lg border border-secondary/20 transition-colors duration-300 hover:bg-secondary/20"
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSet;
