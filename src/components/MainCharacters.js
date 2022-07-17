import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { helpHttp } from "../helpers/helpHttp";
import Button from "./Button";
import Character from "./Character";
import Loader from "./Loader";

const MainCharacters = () => {
  const { texts } = useContext(LanguageContext);
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);

    helpHttp()
      .get("https://rickandmortyapi.com/api/character/1,2,3,4,5")
      .then((res) => {
        if (!res.ok) {
          setCharacters(res);
        } else {
          console.log(res);
        }
        setLoader(false);
      });
  }, []);

  return (
    <div className="main-characters">
      <h2 className="main-characters__title">
        {texts.home.mainCharactersTitle.toUpperCase()}
      </h2>
      <div className="main-characters__container">
        {loader && <Loader />}
        {characters.length > 0 &&
          characters.map((el, index) => <Character key={index} data={el} />)}
      </div>
      <Button url="characters">{texts.es ? "Ver mas" : "See more"}</Button>
    </div>
  );
};

export default MainCharacters;
