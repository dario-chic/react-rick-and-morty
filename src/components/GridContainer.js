import React from "react";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

const GridContainer = ({ data, loader, element, error, btnOptions, url }) => {
  // console.log(data[1]);

  return (
    <div className="g-container">
      {loader && <Loader />}
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
    </div>
  );
};

export default GridContainer;
