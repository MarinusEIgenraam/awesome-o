import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetail(props) {
  const [movie, setMovie] = useState("");
  const location = useParams();
  const data = props.data;

  console.log("what is my location?", location);

  const search = async () => {
    const specific_movie = `http://www.omdbapi.com/?i=${location.id}&apikey=e8f84148`;
    const response = await axios.get(specific_movie);
    console.log("response", response.data);
    setMovie(response.data);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="card styled-shadow">
          <div className="card-body">
            <img src={movie.Poster} />
          </div>
        </div>
        <div className="card styled-shadow ml-4 col-3">
          <div className="card-body">
            <h4 className="card-title">{movie.Title}</h4>
            <p className="card-text">{movie.Actors}</p>
            <p className="card-text">{movie.Year}</p>
            <br></br>
            <p className="card-text">{movie.Plot}</p>
            <br></br>
            <br></br>
            <blockquote className="card-blockquote">
              <p>Metascore: {movie.Metascore}</p>
              <footer>
                <big>
                  <strong>{movie.Awards}</strong>
                </big>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
