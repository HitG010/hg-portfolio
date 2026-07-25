import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {/* Both icons stay mounted and cross-fade, so the swap animates
          instead of popping between two different elements. */}
      <span className="relative block h-5 w-5">
        <Sun
          aria-hidden="true"
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 motion-reduce:transition-none ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          aria-hidden="true"
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 motion-reduce:transition-none ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
