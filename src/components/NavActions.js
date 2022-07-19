import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const NavActions = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { language, handleLanguage } = useContext(LanguageContext);
  return (
    <div className="nav__actions">
      <div>
        <i
          className={`fa-solid ${
            theme === "light" ? "fa-moon" : "fa-sun"
          } theme-changer`}
          onClick={() => handleTheme(theme === "light" ? "dark" : "light")}
        ></i>
        <select
          name=""
          id=""
          defaultValue={language}
          className="language-changer"
          onChange={handleLanguage}
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
    </div>
  );
};

export default NavActions;
