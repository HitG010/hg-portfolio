import Container from "./Container";
import { techStackIcons } from "../assets/techStackIcons/techStackIcons";

const TechStack = () => {
  return (
    <Container as="section">
      {/* Was an <h1>, which gave the home page two top-level headings. */}
      <h2 className="text-4xl font-bold">What I work with</h2>
      <ul className="mt-8 grid grid-cols-5 gap-5 sm:grid-cols-7 lg:grid-cols-10">
        {techStackIcons.map((tech) => (
          <li
            key={tech.name}
            className="group relative flex flex-col items-center justify-center"
          >
            {/* Deliberately eager: this grid sits in the first viewport,
                where lazy loading delays paint and leaves blank slots
                whenever the heuristic does not fire. */}
            <img
              src={tech.img}
              alt={tech.alt}
              width="48"
              height="48"
              decoding="async"
              className={`h-12 w-12 opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 motion-reduce:transition-none ${
                tech.invertOnDark ? "dark:invert" : ""
              }`}
            />
            {/* Was positioned with top/left but no `absolute`, so it sat in
                flow and shoved the icon on hover instead of floating below. */}
            <span className="pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 text-xs text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none">
              {tech.name}
            </span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TechStack;
