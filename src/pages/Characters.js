import React from "react";
import { Outlet } from "react-router-dom";

const Characters = () => {
  return (
    <div>
      <h2>Characters</h2>
      <Outlet />
    </div>
  );
};

export default Characters;
