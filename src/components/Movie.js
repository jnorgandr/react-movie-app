import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, summary, year, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie-data">
        <h3 className="movie-title">{title}</h3>
        <h5 className="movie-year">{year}</h5>
        <ul className="movie-genres">
          {genres.map((genre, key) => (
            <li key={key} className="genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie-summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
