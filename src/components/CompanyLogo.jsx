/**
 * Falls back to a monogram when a company has no logo file yet, so the
 * timeline reads as deliberate rather than as broken images while the assets
 * are still missing. Drop a file into src/assets/logos/ and set `logo` in
 * src/data/experience.js to replace it.
 */
const monogram = (company) =>
  company
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const CompanyLogo = ({ company, logo }) => (
  <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg">
    {logo ? (
      <img
        src={logo}
        alt=""
        width="48"
        height="48"
        loading="lazy"
        decoding="async"
        className="h-7 w-7 object-contain"
      />
    ) : (
      <span
        aria-hidden="true"
        className="text-sm font-semibold tracking-tight text-secondary"
      >
        {monogram(company)}
      </span>
    )}
  </span>
);

export default CompanyLogo;
