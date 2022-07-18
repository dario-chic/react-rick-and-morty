import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import MainCharacters from "../components/MainCharacters";
import Resume from "../components/Resume";
import ActiveNavContext from "../context/ActiveNavContext";
import ThemeContext from "../context/ThemeContext";
import { helpHttp } from "../helpers/helpHttp";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { handleActiveNav } = useContext(ActiveNavContext);
  const [characters, setCharacters] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);
    setCharacters(null);

    helpHttp()
      .get("https://rickandmortyapi.com/api/character/1,2,3,4,5")
      .then((res) => {
        if (!res.err) {
          setCharacters(res);
        } else {
          setError(res);
        }
        setLoader(false);
      });
  }, []);

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
      <MainCharacters data={characters} loader={loader} error={error} />
      <Outlet />
    </div>
  );
};

export default Home;
