import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE_OUT_EXPO, VIEWPORT_ONCE } from "../lib/motion";

/**
 * Scroll reveal for a block of content.
 *
 * Under prefers-reduced-motion this renders a plain element with no initial
 * state at all — not a zero-duration animation — so there is no window in
 * which the content is hidden.
 */
const Reveal = ({
  as = "div",
  delay = 0,
  y = 16,
  className,
  children,
  ...rest
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (prefersReducedMotion) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: DURATION.base, ease: EASE_OUT_EXPO, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
