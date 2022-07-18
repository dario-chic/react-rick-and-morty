import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchInput = ({ theme }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    let name = e.target.value;

    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className={`search-form__i-search ${theme}`}>
      {" "}
      <input
        type="search"
        name="search"
        placeholder="Search..."
        value={searchParams.get("name") || ""}
        onChange={handleSearch}
      />
      <button className="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchInput;
