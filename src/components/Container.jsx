const sizes = {
  default: "max-w-[1100px]",
  narrow: "max-w-[760px]",
};

/**
 * The single source of horizontal rhythm.
 *
 * This replaces nine competing formulas (`w-[90%] md:w-[60%]`,
 * `container mx-auto`, `max-w-7xl`, per-section `px-*`). Their outer widths
 * were similar but their inner padding was not, which is why the hero, the
 * icon grid and the timeline each started at a different left edge.
 *
 * `className` is additive only — vary the width through `size`, not by
 * passing a competing `max-w-*`. That constraint is what lets this use plain
 * string concatenation instead of tailwind-merge, which costs ~7 kB gzipped
 * and would resolve no conflicts at any current call site.
 */
const Container = ({ as: Tag = "div", size = "default", className = "", children }) => (
  <Tag
    className={`mx-auto w-full px-6 md:px-8 ${sizes[size] ?? sizes.default} ${className}`}
  >
    {children}
  </Tag>
);

export default Container;
