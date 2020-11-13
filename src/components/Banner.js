import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";

const imgBaseURL = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomMovie]);
      return request;
    }
    fetchData();
  }, []);

  const textTruncate = (str, length, ending) => {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), darkred), url('${imgBaseURL}${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        {/* <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p className="banner-description">{movie?.overview}</p> */}

        <div className="hero-text">
          <h1 className="banner-heading">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <p className="banner-description">
            {textTruncate(`${movie?.overview}`) === "undefined"
              ? ""
              : textTruncate(`${movie?.overview}`)}
          </p>

          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
