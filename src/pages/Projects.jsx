import ProjectCompo from "../components/Projects";

// Width and padding live in Container, inside ProjectCompo. The vertical
// offset belongs here rather than in the component, because on the home page
// Home already supplies its own rhythm.
const Projects = () => (
  <div className="pb-24 pt-28 md:pt-32">
    <ProjectCompo />
  </div>
);

export default Projects;
