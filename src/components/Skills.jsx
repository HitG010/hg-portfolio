import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { fadeUp, staggerChildren, VIEWPORT_ONCE } from "../lib/motion";
import { skillGroups } from "../data/skills";

/**
 * Skills by discipline. Hovering a group lifts it and fades its siblings
 * back, so the eye settles on one area at a time instead of scanning a
 * uniform grid of pills.
 */
const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  const listProps = prefersReducedMotion
    ? {}
    : {
        variants: staggerChildren(0.03),
        initial: "hidden",
        whileInView: "visible",
        viewport: VIEWPORT_ONCE,
      };

  return (
    <section>
      {/* Home already uses "What I work with" for the icon grid; this needs
          its own name so the two sections do not read as duplicates. */}
      <Reveal as="h2" className="text-2xl font-semibold">
        Skills
      </Reveal>

      <div className="group/list mt-8 flex flex-col gap-8">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.name}
            delay={index * 0.06}
            className="grid gap-3 transition-opacity duration-300 md:grid-cols-[160px_minmax(0,1fr)] md:gap-6 motion-reduce:transition-none group-hover/list:opacity-45 hover:!opacity-100"
          >
            <h3 className="pt-1 text-sm font-medium uppercase tracking-wider text-secondary">
              {group.name}
            </h3>
            <motion.ul {...listProps} className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  variants={prefersReducedMotion ? undefined : fadeUp}
                  className="rounded-lg border border-border bg-surface/50 px-3 py-1.5 text-sm text-primary transition-colors duration-200 hover:border-accent hover:text-accent motion-reduce:transition-none"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
