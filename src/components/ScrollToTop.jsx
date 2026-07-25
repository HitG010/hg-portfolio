import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Client-side navigation keeps the previous scroll offset, so moving from
 * halfway down the projects list to a detail page used to land you halfway
 * down that page too.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "instant",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
