import React from "react";
import Loader from "./Loader";

const GridContainer = ({ data, loader, element }) => {
  return (
    <div className="g-container">
      <div className="grid-container">
        {loader && <Loader />}
        {data.length > 0 && data.map((el, index) => element(el, index))}
      </div>
    </div>
  );
};

export default GridContainer;
