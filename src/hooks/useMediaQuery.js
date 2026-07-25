import { useCallback, useSyncExternalStore } from "react";

/**
 * Rendering both the sticky showcase and the stacked cards and hiding one
 * with CSS would duplicate every project image in the DOM. This picks one.
 *
 * useSyncExternalStore rather than useState + useEffect: a media query is an
 * external store, and subscribing this way avoids the extra render pass that
 * setting state inside an effect would cause.
 */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onStoreChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    [query]
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query]
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
