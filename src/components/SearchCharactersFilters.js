import React from "react";

const SearchCharactersFilters = ({ handleFilters, filters, sendFilter }) => {
  const selectFilter = (name, value) => {
    // console.log(name, value);
    handleFilters(name, value);
    sendFilter();
  };

  return (
    <div className="search-form__filters">
      <span>
        Filters<i className="fa-solid fa-angle-down"></i>
      </span>
      <div className="filters">
        {/* <div className="triangle"></div> */}

        <div className="filters__gender">
          <span>GENDER</span>
          <i
            className={`fa-solid fa-mars man ${
              filters.gender === "male" && "active"
            }`}
            onClick={(e) => selectFilter("gender", "male")}
          ></i>
          <i
            className={`fa-solid fa-venus woman ${
              filters.gender === "female" && "active"
            }`}
            onClick={(e) => selectFilter("gender", "female")}
          ></i>
          <i
            className="fa-solid fa-genderless genderless"
            onClick={(e) => selectFilter("gender", "genderless")}
          ></i>
          <i
            className="fa-solid fa-question unknown"
            onClick={(e) => selectFilter("gender", "unknown")}
          ></i>
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
