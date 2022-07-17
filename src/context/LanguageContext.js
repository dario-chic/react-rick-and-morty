import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const LanguageContext = createContext();

const initialLanguage = localStorage.getItem("RaMLanguage") || "es";

const translations = {
  es: {
    header: { home: "Inicio", characters: "Personajes", episodes: "Episodios" },
  },
  en: {
    header: { home: "Home", characters: "Characters", episodes: "Episodes" },
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("RaMLanguage", e.target.value);
  };

  const data = { language, handleLanguage, texts };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
