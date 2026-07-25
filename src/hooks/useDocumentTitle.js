import { useEffect } from "react";

const BASE = "Hitesh Gupta | Portfolio";

/**
 * Every route shared one static <title> until now, which made individual
 * posts indistinguishable in history, tabs and search results.
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Hitesh Gupta` : BASE;
    return () => {
      document.title = BASE;
    };
  }, [title]);
}
