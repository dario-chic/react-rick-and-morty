import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import Button from "./Button";
import Character from "./Character";
import GridContainer from "./GridContainer";
import ErrorMessage from "./ErrorMessage";

const MainCharacters = ({ data, loader, error }) => {
  const { texts } = useContext(LanguageContext);

  const handleElement = (el, index) => {
    return <Character data={el} key={index} />;
  };

  return (
    <div className="c-characters">
      <h2 className="main-characters__title">
        {texts.home.mainCharactersTitle.toUpperCase()}
      </h2>

      {data ? (
        <GridContainer
          data={data}
          loader={loader}
          texts={texts}
          element={handleElement}
        />
      ) : (
        <ErrorMessage error={error} url={"/"} home={false} goBack={false} />
      )}
      <Button url="characters">{texts.es ? "Ver mas" : "See more"}</Button>
    </div>
  );
};

export default MainCharacters;
