import React from "react";
import { createRef } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ActiveNavContext from "../context/ActiveNavContext";
import LanguageContext from "../context/LanguageContext";
import ScrollContext from "../context/ScrollContext";
import ThemeContext from "../context/ThemeContext";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "./ThemeChanger";

const Header = () => {
  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const { scroll } = useContext(ScrollContext);
  const { navIsActive, handleActiveNav } = useContext(ActiveNavContext);
  const header = createRef();

  const delayNav = () => {
    setTimeout(() => {
      header.current.classList.toggle("scrollTop");
    }, 1000);

    return "scrollTop";
  };

  return (
    <div
      className={`header ${theme} ${scroll ? "up" : "down"} ${
        navIsActive ? "scrollTop" : () => delayNav()
      }`}
      ref={header}
    >
      <img
        src="Rick-And-Morty-Logo.png"
        alt="Rick and Morty"
        className="header__logo"
      />
      <i
        className="fa-solid fa-bars nav__bar"
        onClick={() => {
          handleActiveNav(true);
        }}
      ></i>
      <nav className={`nav ${theme} ${navIsActive && "active"}`}>
        <NavLink
          to="/"
          activeclassname="active"
          className="nav__link"
          onClick={handleActiveNav}
        >
          {texts.header.home}
        </NavLink>
        <NavLink
          to="/characters?page=1"
          activeclassname="active"
          className="nav__link"
          onClick={handleActiveNav}
        >
          {texts.header.characters}
        </NavLink>
        <NavLink
          to="/episodes"
          activeclassname="active"
          className="nav__link"
          onClick={handleActiveNav}
        >
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
