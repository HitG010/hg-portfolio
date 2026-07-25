import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Container from "./Container";
import Reveal from "./Reveal";
import CompanyLogo from "./CompanyLogo";
import { VIEWPORT_ONCE } from "../lib/motion";
import { experiences } from "../data/experience";

const ExperienceSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const listRef = useRef(null);

  // The spine fills as you read down it. Offsets are chosen so the fill
  // tracks roughly where your eye is — starting when the list reaches the
  // lower part of the viewport and completing as the last entry leaves.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 65%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Container as="section">
      <Reveal as="h2" className="mb-12 text-4xl font-bold">
        Experience
      </Reveal>

      <ol ref={listRef} className="relative">
        {/* Two lines stacked: a static track, and an accent fill scaled by
            scroll progress on top of it. */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-6 top-6 w-px -translate-x-1/2 bg-border"
        />
        <motion.span
          aria-hidden="true"
          className="absolute bottom-6 left-6 top-6 w-px -translate-x-1/2 origin-top bg-accent"
          style={{ scaleY: prefersReducedMotion ? 1 : fill }}
        />

        {experiences.map((role, index) => (
          <li key={`${role.company}-${role.duration}`} className="relative pb-14 last:pb-0">
            <div className="flex gap-5">
              {/* The logo is what "arrives" as each role scrolls in. */}
              <motion.div
                initial={
                  prefersReducedMotion ? false : { scale: 0.4, opacity: 0 }
                }
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={VIEWPORT_ONCE}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.05,
                }}
                className="relative z-10"
              >
                <CompanyLogo company={role.company} logo={role.logo} />
              </motion.div>

              <Reveal delay={index * 0.04} className="min-w-0 flex-1 pt-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    {role.title}
                  </h3>
                  <span className="text-sm tabular-nums text-secondary">
                    {role.duration}
                  </span>
                </div>

                <p className="mt-1 flex flex-wrap items-center gap-x-2 text-secondary">
                  <a
                    href={role.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative font-medium text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none"
                  >
                    {role.company}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full motion-reduce:transition-none"
                    />
                  </a>
                  {role.location && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-sm">{role.location}</span>
                    </>
                  )}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-5 text-sm leading-relaxed text-secondary sm:text-base"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-secondary"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default ExperienceSection;
