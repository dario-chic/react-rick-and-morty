import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import GridContainer from "../components/GridContainer";
import SearchCharactersFilters from "../components/SearchCharactersFilters";
import SearchForm from "../components/SearchForm";
import SearchInput from "../components/SearchInput";
import ThemeContext from "../context/ThemeContext";

const Characters = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  return (
    <div className={`characters ${theme}`}>
      {/* <form>
        <SearchInput />
        <SearchCharactersFilters />
      </form> */}
      <SearchForm type="characters" />
      {data.length > 0 && <GridContainer />}
      <Outlet />
    </div>
  );
};

export default Characters;
