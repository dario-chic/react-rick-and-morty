import React from "react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import NextPrev from "./NextPrev";

const GridContainer = ({
  data,
  loader,
  element,
  error,
  btnOptions,
  url,
  nextPrev,
}) => {
  if (!data) return;

  return (
    <div className="g-container">
      {loader && <Loader />}
      <NextPrev nextPrev={nextPrev} />
      <div className="grid-container">
        {error && (
          <ErrorMessage
            error={error}
            url={btnOptions.url}
            home={btnOptions.home}
            goBack={btnOptions.goBack}
          />
        )}
        {data.length > 0 && data.map((el, index) => element(el, index, url))}
      </div>

      <NextPrev nextPrev={nextPrev} />
    </div>
  );
};

export default GridContainer;
