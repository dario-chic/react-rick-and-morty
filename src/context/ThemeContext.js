import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const initialTheme = localStorage.getItem("RaMTheme") || "light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("RaMTheme", JSON.stringify(theme));
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
