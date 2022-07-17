import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Resume = ({ theme }) => {
  const { texts } = useContext(LanguageContext);
  return (
    <div className={`home__resume ${theme}`}>
      <div className="home__resume-text">
        <p>
          <img src="./Rick-And-Morty-Logo.png" alt="Rick and Morty Logo" />
          {texts.home.resume}
        </p>
        <div className="img">
          <img
            src="http://pm1.narvii.com/7712/9910621b327d6f2e0e0f597238f94a1054f2e953r1-600-600v2_00.jpg"
            alt="Rick"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
