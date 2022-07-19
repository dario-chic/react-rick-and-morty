import React from "react";

const SearchCharactersFilters = ({ url, handleFilters }) => {
  return (
    <div className="search-form__filters">
      <span>
        Filters<i className="fa-solid fa-angle-down"></i>
      </span>
      <div className="filters">
        {/* <div className="triangle"></div> */}

        <div className="filters__gender">
          <span>GENDER</span>
          <i className="fa-solid fa-mars man" data-gender="male"></i>
          <i className="fa-solid fa-venus woman" data-gender="female"></i>
          <i
            className="fa-solid fa-genderless genderless"
            data-gender="genderless"
          ></i>
          <i className="fa-solid fa-question unknown" data-gender="unknown"></i>
        </div>

        <div className="filters__status">
          <span>STATUS</span>
          <i className="fa-solid fa-skull skull" data-status="dead"></i>
          <i className="fa-solid fa-heart heart" data-status="alive"></i>
          <i className="fa-solid fa-question unknown" data-status="unknown"></i>
        </div>

        <button
          className="filters__reset"
          onClick={(e) => handleFilters("status", "dead")}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default SearchCharactersFilters;
