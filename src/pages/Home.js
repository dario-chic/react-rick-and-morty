import React from "react";
import { useContext } from "react";
import Resume from "../components/Resume";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home ${theme}`}>
      <Resume theme={theme} />
    </div>
  );
};

export default Home;
