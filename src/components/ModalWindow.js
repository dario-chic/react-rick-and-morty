import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { helpHttp } from "../helpers/helpHttp";
import CharacterInfo from "./CharacterInfo";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

const ModalWindow = ({ type, url }) => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    setError(false);
    setLoader(true);
    setData(null);

    if (type === "character") {
      helpHttp()
        .get(`https://rickandmortyapi.com/api/${type}/${id}`)
        .then((res) => {
          if (!res.err) {
            setData(res);
          } else {
            console.log(res);
            setError(res);
          }
          setLoader(false);
        });
    }
    console.log(`https://rickandmortyapi.com/api/${type}/${id}`);
  }, [id, type]);

  useEffect(() => {
    console.log(data, error);
  }, [data, error]);

  return (
    <div className={`modal-window-container ${theme}`}>
      <div className={`modal-window ${theme} info-window`}>
        {loader && <Loader />}
        {error && (
          <ErrorMessage
            error={error}
            url={url + location.search}
            home={false}
          />
        )}
        {data && type === "character" ? (
          <CharacterInfo data={data} url={url + location.search} />
        ) : (
          data && type === "episode" && true
        )}
      </div>
    </div>
  );
};

export default ModalWindow;
