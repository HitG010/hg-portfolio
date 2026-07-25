import { socialLinks } from "../data/socials";

const sizes = {
  sm: { box: "w-10 h-10 md:w-12 md:h-12", pad: "p-2.5 md:p-3" },
  lg: { box: "w-12 h-12 md:w-16 md:h-16", pad: "p-2.5 md:p-4" },
};

/**
 * These were previously onClick handlers bolted onto bare SVGs inside
 * divs, which meant no keyboard user could reach any of them. Real
 * anchors give focus, Enter activation and a name in the a11y tree.
 */
const SocialLinks = ({ ids, size = "sm", className = "" }) => {
  const { box, pad } = sizes[size] ?? sizes.sm;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {ids.map((id) => {
        const link = socialLinks[id];
        if (!link) return null;

        const { label, href, Icon } = link;
        const isExternal = !href.startsWith("mailto:");

        return (
          <li key={id}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={`group relative block overflow-hidden rounded-lg border border-border text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${box}`}
            >
              <Icon aria-hidden="true" className={`h-full w-full ${pad}`} />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-2 bg-secondary opacity-30 blur-lg transition duration-300 group-hover:opacity-100 motion-reduce:transition-none"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
