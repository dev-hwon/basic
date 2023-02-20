import { createContext, useContext, useState } from "react";

const ColorThemeContext = createContext();

export default function ColorThemeProvider({ children }) {
  const [colortheme, setColorTheme] = useState("light");
  const toggleColorTheme = () =>
    setColorTheme((mode) => (mode === "default" ? "dark" : "default"));
  return (
    <ColorThemeContext.Provider value={{ colortheme, toggleColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export const useColorTheme = () => useContext(ColorThemeContext);
