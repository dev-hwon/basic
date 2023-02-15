import { createContext, useState } from "react";

export const ColorThemeContext = createContext();

export default function ColorThemeProvider({ children }) {
  const [colortheme, setColorTheme] = useState("light");
  const toggleColorTheme = () =>
    setColorTheme((mode) => (mode === "light" ? "dark" : "light"));
  return (
    <ColorThemeContext.Provider value={{ colortheme, toggleColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}
