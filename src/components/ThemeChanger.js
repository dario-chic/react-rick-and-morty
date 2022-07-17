import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeChanger = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return theme === "light" ? (
    <i
      className="fa-solid fa-sun theme-changer"
      onClick={() => handleTheme("dark")}
    ></i>
  ) : (
    <i
      className="fa-solid fa-moon theme-changer"
      onClick={() => handleTheme("light")}
    ></i>
  );
};

export default ThemeChanger;
