import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const EpisodeInfo = ({ data }) => {
  console.log(data);
  const { texts } = useContext(LanguageContext);

  return (
    <>
      {" "}
      <figure className="profile episode">
        <img src={data.image.medium} alt="" />
        <figcaption>{data.name.toUpperCase()}</figcaption>
      </figure>
      <div className="episode-summarize">
        <details>
          <summary>{texts.episodeProfile.summary} </summary>
          <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
        </details>
      </div>
      <table className="features episode">
        <tr>
          <th>{texts.episodeProfile.airdate.toUpperCase()}</th>
          <td className="airdate">{data.airdate}</td>
        </tr>
        <tr>
          <th>{texts.episodeProfile.episode.toUpperCase()}</th>
          <td className="episode">
            <span className="s">S{data.season}</span>{" "}
            <span className="e">E{data.number}</span>
          </td>
        </tr>
        <tr>
          <th>{texts.episodeProfile.rating.toUpperCase()}</th>
          <td className="rating">{data.rating.average}</td>
        </tr>
      </table>
    </>
  );
};

export default EpisodeInfo;
