import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const ColorThemeContext = createContext();

export default function ColorThemeProvider({ children }) {
  const [colortheme, setColorTheme] = useState("default");
  const toggleColorTheme = () => {
    setColorTheme((mode) => (mode === "default" ? "dark" : "default"));
    updateColorTheme(colortheme);
  };
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-sheme:dark)").matches);
    setColorTheme(isDark);
    updateColorTheme(isDark);
  }, []);

  return (
    <ColorThemeContext.Provider value={{ colortheme, toggleColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}

function updateColorTheme(colortheme) {
  if (colortheme !== "default") {
    document.documentElement.classList.add("theme_dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("theme_dark");
    localStorage.theme = "default";
  }
}
export const useColorTheme = () => useContext(ColorThemeContext);
