import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const SearchCharactersFilters = ({ handleFilters, filters, resetFilters }) => {
  const { texts } = useContext(LanguageContext);
  let { searchFilters } = texts.searchForm;

  const selectFilter = (name, value) => {
    handleFilters(name, value, true);
  };

  return (
    <div className="search-form__filters">
      <span>
        {searchFilters.title} <span> </span>
        <i className="fa-solid fa-angle-down"></i>
      </span>
      <div className="background"></div>
      <div className="filters">
        <div className="triangle"></div>

        <div className="filters__gender">
          <span>{searchFilters.gender.toUpperCase()}</span>
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
            className={`fa-solid fa-genderless genderless ${
              filters.gender === "genderless" && "active"
            }`}
            onClick={(e) => selectFilter("gender", "genderless")}
          ></i>
          <i
            className={`fa-solid fa-question unknown ${
              filters.gender === "unknown" && "active"
            }`}
            onClick={(e) => selectFilter("gender", "unknown")}
          ></i>
        </div>

        <div className="filters__status">
          <span>{searchFilters.status.toUpperCase()}</span>
          <i
            className={`fa-solid fa-skull skull ${
              filters.status === "dead" && "active"
            }`}
            onClick={(e) => selectFilter("status", "dead")}
          ></i>
          <i
            className={`fa-solid fa-heart heart ${
              filters.status === "alive" && "active"
            }`}
            onClick={(e) => selectFilter("status", "alive")}
          ></i>
          <i
            className={`fa-solid fa-question unknown ${
              filters.status === "unknown" && "active"
            }`}
            onClick={(e) => selectFilter("status", "unknown")}
          ></i>
        </div>

        <button className="filters__reset" onClick={resetFilters}>
          {searchFilters.reset.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default SearchCharactersFilters;
