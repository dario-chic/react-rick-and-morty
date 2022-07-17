import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Resume = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <div className="home__resume">
      <img src="./tileburnedin.jpeg" alt="Rick and Morty" />
      <p>{texts.home.resume}</p>
    </div>
  );
};

export default Resume;
