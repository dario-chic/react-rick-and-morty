import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const LanguageContext = createContext();

const initialLanguage = localStorage.getItem("RaMLanguage") || "es";

const translations = {
  es: {
    es: true,
    header: { home: "Inicio", characters: "Personajes", episodes: "Episodios" },
    footer: { home: "Inicio", characters: "Personajes", episodes: "Episodios" },
    home: {
      resume:
        "Rick y Morty es una comedia animada estadounidense de ciencia ficción para adultos creada por Justin Roiland y Dan Harmon para el bloque de programación nocturna Adult Swim de Cartoon Network.\n\n La serie sigue las desventuras del cínico científico loco Rick Sanchez y su nieto de buen corazón pero inquieto Morty Smith, que dividía su tiempo entre la vida doméstica y las aventuras interdimensionales.",
      mainCharactersTitle: "Personajes Principales",
    },
    searchForm: {
      searchInput: "Buscar",
      searchFilters: {
        title: "Filtros",
        gender: "Genero",
        status: "Estado",
        reset: "reset",
      },
    },
    episodeProfile: {
      summary: "Resumen",
      airdate: "Estreno",
      episode: "Episodio",
      rating: "Puntaje",
    },
  },
  en: {
    en: true,
    header: { home: "Home", characters: "Characters", episodes: "Episodes" },
    footer: { home: "Home", characters: "Characters", episodes: "Episodes" },
    home: {
      resume:
        "Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim.\n\n The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted, but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.",
      mainCharactersTitle: "Main Characters",
    },
    searchForm: {
      searchInput: "Search",
      searchFilters: {
        title: "Filters",
        gender: "Gender",
        status: "Status",
        reset: "reset",
      },
    },
    episodeProfile: {
      summary: "Summary",
      airdate: "Airdate",
      episode: "Episode",
      rating: "Rating",
    },
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
