import { useCallback, useEffect, useState } from "react";
import { STORAGE_KEY, ThemeContext } from "./themeContext";

const prefersDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

function readStoredTheme() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    // Private browsing or blocked storage: fall back to the OS preference.
    return null;
  }
}

function getInitialTheme() {
  return readStoredTheme() ?? (prefersDark() ? "dark" : "light");
}

export function ThemeProvider({ children }) {
  // The inline script in index.html has already put the right class on
  // <html> before paint; this just keeps React's copy of that in sync.
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#111111" : "#ffffff");
    }
  }, [theme]);

  // Track the OS only until the user makes an explicit choice, which is
  // why persistence happens in toggleTheme rather than in the effect above.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      if (readStoredTheme()) return;
      setTheme(event.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 240);

    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Persisting is best-effort; the toggle still works this session.
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
