import { motion, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Reveal from "./Reveal";
import { staggerChildren, fadeUp, VIEWPORT_ONCE } from "../lib/motion";
import { techStackIcons } from "../assets/tech/icons";

const TechStack = () => {
  const prefersReducedMotion = useReducedMotion();

  const gridProps = prefersReducedMotion
    ? {}
    : {
        variants: staggerChildren(0.02),
        initial: "hidden",
        whileInView: "visible",
        viewport: VIEWPORT_ONCE,
      };

  return (
    <Container as="section">
      {/* Was an <h1>, which gave the home page two top-level headings. */}
      <Reveal as="h2" className="text-3xl font-bold sm:text-4xl">
        What I work with
      </Reveal>

      <motion.ul
        {...gridProps}
        className="mt-8 grid grid-cols-4 gap-3 xs:grid-cols-5 sm:grid-cols-7 sm:gap-5 lg:grid-cols-10"
      >
        {techStackIcons.map((tech) => (
          <motion.li
            key={tech.name}
            variants={prefersReducedMotion ? undefined : fadeUp}
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
              // Full greyscale made 29 logos read as one grey mass. A partial
              // desaturation keeps the grid cohesive while letting each mark
              // stay recognisable; hover restores full colour.
              className={`h-8 w-8 opacity-90 xs:h-9 xs:w-9 grayscale-[0.45] sm:h-12 sm:w-12 transition duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
                tech.invertOnDark ? "dark:invert" : ""
              }`}
            />
            {/* Was positioned with top/left but no `absolute`, so it sat in
                flow and shoved the icon on hover instead of floating below. */}
            <span // Hover-only, so it is dead weight on touch and its absolute position
              // pushed past the viewport edge at narrow widths.
              className="pointer-events-none absolute left-1/2 top-full z-10 hidden -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 text-xs text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none sm:block">
              {tech.name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </Container>
  );
};

export default TechStack;
