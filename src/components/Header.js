import React from "react";
import { useContext } from "react";

import { NavLink } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "./ThemeChanger";

const Header = () => {
  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`header ${theme}`}>
      <img
        src="Rick-And-Morty-Logo.png"
        alt="Rick and Morty"
        className="header__logo"
      />
      <i className="fa-solid fa-bars nav__bar"></i>
      <nav className="nav">
        <NavLink to="/" activeclassname="active" className="nav__link">
          {texts.header.home}
        </NavLink>
        <NavLink
          to="/characters"
          activeclassname="active"
          className="nav__link"
        >
          {texts.header.characters}
        </NavLink>
        <NavLink to="/episodes" activeclassname="active" className="nav__link">
          {texts.header.episodes}
        </NavLink>

        <div className="nav__actions">
          <div>
            <ThemeChanger className="theme-changer" />
            <LanguageChanger className="language-changer" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
