import React from "react";
import { useState } from "react";
import SearchCharactersFilters from "./SearchCharactersFilters";
import SearchInput from "./SearchInput";

const SearchForm = ({ type, url, handleUrl }) => {
  const [filter, setFilter] = useState({});

  const handleFilters = (name, value) => {
    console.log(name, value);
    setFilter({ ...filter, [name]: value });
  };

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleUrl(filter);
      }}
    >
      <SearchInput url={url} filter={filter} handleFilters={handleFilters} />
      {type === "characters" && (
        <SearchCharactersFilters url={url} handleFilters={handleFilters} />
      )}
    </form>
  );
};

export default SearchForm;
