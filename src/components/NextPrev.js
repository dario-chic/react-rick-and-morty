import React from "react";
import { useSearchParams } from "react-router-dom";

const NextPrev = ({ nextPrev }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  if (!nextPrev) return;

  const nextAndPrev = (direction) => {
    let params = {};

    for (const entry of searchParams.entries()) {
      let entries = [];
      entries.push(entry);
      params = { ...params, [entry[0]]: entry[1] };
    }

    let result = direction
      ? parseInt(params.page) + 1
      : parseInt(params.page) - 1;

    setSearchParams({ ...params, page: result });
    window.scrollTo(0, 0);
  };

  return (
    <div className="next-and-prev-buttons ">
      {nextPrev.prev && (
        <button className="prev">
          <i
            className="fa-solid fa-circle-arrow-left"
            onClick={(e) => nextAndPrev(false)}
          ></i>
        </button>
      )}
      {nextPrev.next && (
        <button className="next" onClick={(e) => nextAndPrev(true)}>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      )}
    </div>
  );
};

export default NextPrev;
