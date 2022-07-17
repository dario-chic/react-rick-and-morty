import React from "react";
import { Link } from "react-router-dom";

const Character = ({ data }) => {
  const { id, name, image } = data;

  return (
    <>
      <Link
        to={`character/${id}`}
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

export default Character;
