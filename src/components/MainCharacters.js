import React, { useEffect, useState } from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import Button from "./Button";
import Character from "./Character";
import GridContainer from "./GridContainer";
import { helpHttp } from "../helpers/helpHttp";

const MainCharacters = () => {
  const { texts } = useContext(LanguageContext);
  const [characters, setCharacters] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
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

  const handleElement = (el, index) => <Character data={el} key={index} />;

  return (
    <div className="g-container">
      <h2 className="main-characters__title">
        {texts.home.mainCharactersTitle.toUpperCase()}
      </h2>

      <GridContainer
        data={characters}
        loader={loader}
        error={error}
        texts={texts}
        element={handleElement}
        btnOptions={{ home: false, goBack: false }}
      />

      <Button url="characters">{texts.es ? "Ver mas" : "See more"}</Button>
    </div>
  );
};

export default MainCharacters;
