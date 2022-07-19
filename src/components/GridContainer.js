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
  const { texts } = useContext(LanguageContext);
  const [searchParams] = useSearchParams();

  return (
    <div className="g-container">
      {loader && <Loader />}
      <NextPrev nextPrev={nextPrev} />
      <div className="grid-container">
        {data
          ? data.map((el, index) => element(el, index, url))
          : error && (
              <ErrorMessage
                error={error}
                url={btnOptions.url}
                home={btnOptions.home}
                goBack={btnOptions.goBack}
              />
            )}
      </div>

      <NextPrev nextPrev={nextPrev} />
    </div>
  );
};

export default GridContainer;
