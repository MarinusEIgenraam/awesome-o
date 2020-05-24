import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetail() {
  const [movie, setMovie] = useState("");
  const location = useParams();
  const [searchText, set_searchText] = useState("The Terminator");
  const [searchState, set_searchState] = useState("Idle");

  const history = useHistory();

  console.log("what is my location?", location);

  const inputHandler = (event) => {
    set_searchText(event.target.value);
  };
  const clickHandler = (event) => {
    set_searchState("Searching..");
    console.log(`user ask me to search for...${searchText}..`);
    navigateToSearch();
  };
  const navigateToSearch = async () => {
    const search_movies = `http://www.omdbapi.com/?apikey=44086c16&s=${searchText}`;
    const response = await axios.get(search_movies);
    console.log("response", response.data.Search);
    set_searchState("Search completed");
    history.push(`/discover/${searchText}`);
  };

  const search = async () => {
    const specific_movie = `http://www.omdbapi.com/?i=${location.id}&apikey=44086c16&`;
    const response = await axios.get(specific_movie);
    console.log("response", response.data);
    setMovie(response.data);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row-fluid styled-shadow m-4">
          <div className="card card-body">
            <div className="row">
              <p>Where are you searching for? </p>
              <input
                type="text"
                onChange={inputHandler}
                placeholder="Please type a search term here"
                value={searchText}
              />
              <button onClick={clickHandler}> Please search</button>
              <div className="movieData">
                <p>{searchState}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="card styled-shadow">
            <div className="card-body">
              <img src={movie.Poster} alt={movie.title} />
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
    </>
  );
}
