import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Episode from "../components/Episode";
import GridContainer from "../components/GridContainer";
import SearchForm from "../components/SearchForm";
import ThemeContext from "../context/ThemeContext";
import { helpHttp } from "../helpers/helpHttp";

const Episodes = () => {
  const { theme } = useContext(ThemeContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [episodes, setEpisodes] = useState([]);
  const [nextPrev, setNextPrev] = useState({ next: false, prev: false });
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleElement = (el, index) => <Episode data={el} key={index} />;

  useEffect(() => {
    if (!searchParams.get("page")) {
      setSearchParams({ page: 1 });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    let apiUrl = `?page=${searchParams.get("page") || 1}${
      searchParams.get("name") ? "&name=" + searchParams.get("name") : ""
    }
    `;

    setEpisodes([]);
    setNextPrev({ next: false, prev: false });
    setError(false);
    setLoader(true);

    helpHttp()
      .get(`https://rickandmortyapi.com/api/episode/${apiUrl}`)
      .then((res) => {
        if (!res.err) {
          res.results.forEach(async (el) => {
            let episodeAndSeason = [...el.episode.matchAll(/\d+/gi)];
            let info = {
              season: episodeAndSeason[0][0],
              episode: episodeAndSeason[1][0],
            };

            helpHttp()
              .get(
                `https://api.tvmaze.com/shows/216/episodebynumber?season=${info.season}&number=${info.episode}`
              )
              .then((res) => {
                if (!res.err) {
                  let episodio = {
                    id: res.id,
                    name: res.name,
                    image: res.image.original,
                  };
                  setEpisodes((episodes) => [...episodes, episodio]);
                }
              });
          });
          setNextPrev({ next: res.info.next, prev: res.info.prev });
        } else {
          setError(res);
        }
        setLoader(false);
      });
  }, [searchParams]);

  const handleUrl = () => {
    console.log("a");
  };

  return (
    <div className={`episodes ${theme}`}>
      <SearchForm type="episodes" handleUrl={handleUrl} />
      <GridContainer
        data={episodes}
        loader={loader}
        error={error}
        element={handleElement}
        btnOptions={{ url: "/characters", home: true, goBack: true }}
        nextPrev={nextPrev}
      />
      <Outlet />
    </div>
  );
};

export default Episodes;
