import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ url, children, modifiers }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(url)} className={`btn ${modifiers}`}>
      {children}
    </button>
  );
};

export default Button;
