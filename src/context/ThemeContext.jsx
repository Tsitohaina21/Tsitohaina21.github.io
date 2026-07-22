import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

/**
 * Fournit le thème (clair/sombre) à toute l'application.
 * Respecte la préférence système au premier chargement, puis
 * mémorise le choix de l'utilisateur pour la session en cours.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const stored = typeof window !== "undefined" ? window.__theme : null;
    if (stored) return stored;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.__theme = theme;
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme doit être utilisé dans ThemeProvider");
  return ctx;
}
