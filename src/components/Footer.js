import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ActiveNavContext from "../context/ActiveNavContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { handleActiveNav } = useContext(ActiveNavContext);
  return (
    <footer
      className={`footer ${theme}`}
      onClick={() => {
        handleActiveNav(false);
      }}
    >
      <div className="footer__links">
        <Link
          to="/"
          className="footer__links-home"
          onClick={(e) => window.scrollTo(0, 0)}
        >
          {texts.footer.home}
        </Link>
        <Link
          to="characters"
          className="footer__links-characters"
          onClick={(e) => window.scrollTo(0, 0)}
        >
          {texts.footer.characters}
        </Link>
        <Link
          to="episodes"
          className="footer__links-episodes"
          onClick={(e) => window.scrollTo(0, 0)}
        >
          {texts.footer.episodes}
        </Link>
      </div>
      <span className="footer__copyright">© 2022 | Dario Chic</span>
      <div className="footer__social-media">
        <a
          href="https://www.linkedin.com/in/dario-chic-11a22a228/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="mailto:dariochic@gmail.com" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://github.com/Dario-Chic"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <a href="https://www.dariochic.com" className="footer__personal-website">
        www.dariochic.com
      </a>
    </footer>
  );
};

export default Footer;
