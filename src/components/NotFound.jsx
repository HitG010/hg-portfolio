import { Link } from "react-router-dom";

/**
 * Shared empty state. Visiting an unknown route, or a project id that does
 * not exist, previously rendered a blank page with no explanation.
 */
const NotFound = ({
  code = "404",
  title = "Page not found",
  message = "That link does not lead anywhere. It may have moved, or never existed.",
  actionTo = "/",
  actionLabel = "Back to home",
}) => (
  <main className="mx-auto mt-32 flex w-full max-w-xl flex-col items-center px-4 text-center">
    <p className="text-6xl font-bold tracking-tight text-secondary">{code}</p>
    <h1 className="mt-4 text-3xl font-semibold">{title}</h1>
    <p className="mt-3 text-secondary">{message}</p>
    <Link
      to={actionTo}
      className="mt-8 rounded-lg bg-primary px-4 py-2 font-semibold text-bg transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {actionLabel}
    </Link>
  </main>
);

export default NotFound;
