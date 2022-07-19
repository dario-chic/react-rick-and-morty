import React from "react";
import { useState } from "react";
import SearchCharactersFilters from "./SearchCharactersFilters";
import SearchInput from "./SearchInput";

const SearchForm = ({ type, url, handleUrl }) => {
  const [filter, setFilter] = useState({});

  const handleFilters = (e) => {
    e.preventDefault();
    // setFilter({ name: e.target.name.value });
    handleUrl(filter);
  };

  const handleSearch = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <form className="search-form" onSubmit={handleFilters}>
      <SearchInput url={url} filter={filter} handleSearch={handleSearch} />
      {type === "characters" && <SearchCharactersFilters url={url} />}
    </form>
  );
};

export default SearchForm;
