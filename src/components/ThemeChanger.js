import React from "react";

import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeChanger = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <i
      className={`fa-solid ${
        theme === "light" ? "fa-moon" : "fa-sun"
      } theme-changer`}
      onClick={() => handleTheme(theme === "light" ? "dark" : "light")}
    ></i>
  );
};

export default ThemeChanger;
