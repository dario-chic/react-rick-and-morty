import React from "react";

const SearchInput = ({ theme, filters, handleFilters }) => {
  return (
    <div className={`search-form__i-search ${theme}`}>
      {" "}
      <input
        type="text"
        name="name"
        placeholder="Search..."
        value={filters.name || ""}
        onChange={(e) => handleFilters(e.target.name, e.target.value)}
      />
      <button className="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchInput;
