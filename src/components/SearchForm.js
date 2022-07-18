import React from "react";
import SearchCharactersFilters from "./SearchCharactersFilters";
import SearchInput from "./SearchInput";

const SearchForm = ({ type }) => {
  return (
    <div>
      <form className="search-form">
        <SearchInput />
        {/* {type === "characters" && <SearchCharactersFilters />} */}
      </form>
    </div>
  );
};

export default SearchForm;
