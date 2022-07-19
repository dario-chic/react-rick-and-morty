import React from "react";

const SearchInput = ({ theme, filter, handleSearch }) => {
  return (
    <div className={`search-form__i-search ${theme}`}>
      {" "}
      <input
        type="text"
        name="name"
        placeholder="Search..."
        value={filter.name || ""}
        onChange={handleSearch}
      />
      <button className="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchInput;
