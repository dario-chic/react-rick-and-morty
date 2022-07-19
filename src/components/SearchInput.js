import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const SearchInput = ({ theme, filters, handleFilters }) => {
  const { texts } = useContext(LanguageContext);
  let { searchForm } = texts;

  return (
    <div className={`search-form__i-search ${theme}`}>
      {" "}
      <input
        type="text"
        name="name"
        placeholder={`${searchForm.searchInput}...`}
        value={filters.name || ""}
        onChange={(e) => handleFilters(e.target.name, e.target.value, false)}
      />
      <button className="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchInput;
