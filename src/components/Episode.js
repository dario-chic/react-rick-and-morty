import React from "react";
import { Link, useLocation } from "react-router-dom";

const Episode = ({ data }) => {
  const location = useLocation();
  const { id, name, image } = data;

  // console.log(data);
  return (
    <>
      <Link
        to={`${location.pathname}${
          location.pathname.slice(-1) === "/" ? "character" : "/character"
        }/${id}${location.search}`}
        rel="noreferrer"
        style={{ margin: "1rem" }}
        className="character"
      >
        <figure className="character__figure">
          <img src={image} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
      </Link>
    </>
  );
};

export default Episode;
