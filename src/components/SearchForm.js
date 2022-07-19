import React from "react";
import { createRef } from "react";
import { useState } from "react";
import SearchCharactersFilters from "./SearchCharactersFilters";
import SearchInput from "./SearchInput";

const SearchForm = ({ type, url, handleUrl }) => {
  const [filters, setFilter] = useState({});
  const form = createRef();

  const sendFilter = () => {
    handleUrl(filters);
  };

  const handleFilters = (name, value) => {
    setFilter({ ...filters, [name]: value });
  };

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        sendFilter();
      }}
      ref={form}
    >
      <SearchInput url={url} filters={filters} handleFilters={handleFilters} />
      {type === "characters" && (
        <SearchCharactersFilters
          url={url}
          handleFilters={handleFilters}
          sendFilter={sendFilter}
          filters={filters}
        />
      )}
    </form>
  );
};

export default SearchForm;
