import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Character from "../components/Character";
import GridContainer from "../components/GridContainer";
import SearchForm from "../components/SearchForm";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import { helpHttp } from "../helpers/helpHttp";

const initialUrl = { page: 1 };

const Characters = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const [url, setUrl] = useState(initialUrl);
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let apiUrl = `?page=${searchParams.get("page") || 1}${
      searchParams.get("name") ? "&name=" + searchParams.get("name") : ""
    }${
      searchParams.get("status") ? "&status=" + searchParams.get("status") : ""
    }${
      searchParams.get("gender") ? "&gender=" + searchParams.get("gender") : ""
    }
    `;

    // console.log(apiUrl);

    setCharacters([]);
    setError(false);
    setLoader(true);

    helpHttp()
      .get(`https://rickandmortyapi.com/api/character/${apiUrl}`)
      .then((res) => {
        if (!res.err) {
          setCharacters(res.results);
        } else {
          setError(res);
        }
        setLoader(false);
      });
  }, [searchParams]);

  const handleElement = (el, index) => <Character data={el} key={index} />;

  const handleUrl = (object) => {
    let copyFilter = object;

    if (copyFilter.name === "") {
      delete copyFilter.name;
      searchParams.delete("name");
    }

    setSearchParams({ page: searchParams.get("page") || 1, ...copyFilter });
    setUrl({ page: searchParams.get("page") || 1, ...copyFilter });
    // console.log(url);
  };

  return (
    <div className={`characters ${theme}`}>
      <SearchForm
        type="characters"
        url={url}
        handleUrl={handleUrl}
        texts={texts}
      />
      <GridContainer
        data={characters}
        loader={loader}
        error={error}
        texts={texts}
        element={handleElement}
        btnOptions={{ url: "/characters", home: true, goBack: true }}
      />
      <Outlet />
    </div>
  );
};

export default Characters;
