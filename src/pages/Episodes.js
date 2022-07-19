import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Episodes = () => {
  const { theme } = useContext(ThemeContext);
  return <div className={`episodes ${theme}`}>Episodes</div>;
};

export default Episodes;
