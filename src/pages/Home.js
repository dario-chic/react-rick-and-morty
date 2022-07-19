import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import MainCharacters from "../components/MainCharacters";
import Resume from "../components/Resume";
import ActiveNavContext from "../context/ActiveNavContext";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { handleActiveNav } = useContext(ActiveNavContext);

  return (
    <div
      className={`home ${theme}`}
      onClick={() => {
        handleActiveNav(false);
      }}
    >
      <div className="home__header"></div>
      <Resume theme={theme} />
      <hr />
      <MainCharacters />
      <Outlet />
    </div>
  );
};

export default Home;
