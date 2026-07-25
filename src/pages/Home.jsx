import Section from "../components/Section";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

// Vertical rhythm lives here rather than as ad-hoc mt-* on each section, so
// the spacing between blocks is consistent and adjustable in one place.
const Home = () => (
  <div className="flex flex-col gap-20 pb-24 pt-28 md:gap-28 md:pt-32">
    <Section />
    <TechStack />
    <Experience />
    <Projects />
  </div>
);

export default Home;
