import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const SearchCharactersFilters = (url) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  return (
    <div className="search-form__filters">
      <span>
        Filters<i className="fa-solid fa-angle-down"></i>
      </span>
      <div className="filters">
        <div className="triangle"></div>

        <span className="filters__gender">
          GENDER
          <i className="fa-solid fa-mars man" data-gender="male"></i>
          <i className="fa-solid fa-venus woman" data-gender="female"></i>
          <i
            className="fa-solid fa-genderless genderless"
            data-gender="genderless"
          ></i>
          <i className="fa-solid fa-question unknown" data-gender="unknown"></i>
        </span>

        <span className="filters__status">
          STATUS
          <i className="fa-solid fa-skull skull" data-status="dead"></i>
          <i className="fa-solid fa-heart heart" data-status="alive"></i>
          <i className="fa-solid fa-question unknown" data-status="unknown"></i>
        </span>

        <button className="filters__reset">RESET</button>
      </div>
    </div>
  );
};

export default SearchCharactersFilters;
