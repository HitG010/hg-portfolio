// Shared motion vocabulary, so reveals are consistent instead of reinvented
// per component.
//
// On durations: the old page transition ran for 1.1s, and while chasing a bug
// I watched it sit part-way through indefinitely in a throttled tab with the
// content invisible. requestAnimationFrame resumes when a tab is focused, so
// that self-heals and a real visitor never sees it — but it is a good argument
// for short reveals on individual sections rather than one long fade gating
// the whole page. Nothing here runs longer than 0.5s.

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.25,
  base: 0.45,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT_EXPO },
  },
};

export const staggerChildren = (gap = 0.05) => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap } },
});

// `once` matters: without it, scrolling back up replays every reveal, which
// reads as the page glitching rather than as motion.
export const VIEWPORT_ONCE = { once: true, amount: 0.15 };
