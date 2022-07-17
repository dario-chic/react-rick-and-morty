import React from "react";
import { useContext } from "react";
import Resume from "../components/Resume";
import ActiveNavContext from "../context/ActiveNavContext";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { handleActiveNav } = useContext(ActiveNavContext);

  return (
    <div className={`home ${theme}`} onClick={handleActiveNav}>
      <div className="home__header"></div>
      <Resume theme={theme} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
