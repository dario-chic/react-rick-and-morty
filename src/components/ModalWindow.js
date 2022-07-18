import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";

const ModalWindow = ({ type }) => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);

    if (type === "character") {
      helpHttp()
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
          if (!res.ok) {
            setData(res);
          } else {
            console.log(res);
          }
          setLoader(false);
        });
    }
  }, [id, type]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={`modal-window-container ${theme}`}>
      {loader && <Loader />}
      <div className={`modal-window ${theme}`}></div>
    </div>
  );
};

export default ModalWindow;
