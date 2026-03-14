"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    const initial = saved ?? preferred;
    setTheme(initial);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";

    const apply = () => {
      setTheme(next);
      localStorage.setItem("theme", next);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(next);
    };

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };

    if (!doc.startViewTransition) {
      apply();
      return;
    }

    doc.startViewTransition(apply);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
