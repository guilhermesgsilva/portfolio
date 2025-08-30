import { createContext, useContext, useEffect, useState } from "react";

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

const DEFAULT_THEME = ThemeEnum.SYSTEM;
const STORAGE_KEY = "vite-ui-theme";

type Theme = ThemeEnum;

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: ThemeEnum.SYSTEM,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(STORAGE_KEY) as Theme) || DEFAULT_THEME
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(mediaQuery.matches ? ThemeEnum.DARK : ThemeEnum.SYSTEM);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(ThemeEnum.SYSTEM, ThemeEnum.DARK);

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? ThemeEnum.DARK
        : ThemeEnum.SYSTEM;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(STORAGE_KEY, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
