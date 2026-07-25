import { createContext } from "react";

export const STORAGE_KEY = "theme";

// Kept in its own module so ThemeProvider.jsx exports only a component,
// which is what React Fast Refresh needs to hot-reload it cleanly.
export const ThemeContext = createContext(null);
