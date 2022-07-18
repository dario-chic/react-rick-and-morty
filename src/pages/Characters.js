import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Characters = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`characters ${theme}`}>
      <div className="characters__container"></div>
      <Outlet />
    </div>
  );
};

export default Characters;
