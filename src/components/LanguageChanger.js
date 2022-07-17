import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const LanguageChanger = () => {
  const { language, handleLanguage } = useContext(LanguageContext);
  return (
    <select
      name=""
      id=""
      defaultValue={language}
      className="language-changer"
      onChange={handleLanguage}
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageChanger;
