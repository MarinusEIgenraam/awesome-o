import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("The Terminator");
  const [data, set_data] = useState([]);
  const [searchState, set_searchState] = useState("Idle");

  const history = useHistory();
  const url = `https://www.omdbapi.com/?apikey=44086c16&s=${searchText}`;

  const inputHandler = (event) => {
    set_searchText(event.target.value);
  };
  const clickHandler = (event) => {
    console.log(`user ask me to search for...${searchText}..`);
    navigateToSearch();
  };

  useEffect(() => {
    navigateToSearch();
  }, []);

  const navigateToSearch = async () => {
    const search_movies = url;
    const response = await axios.get(search_movies);
    console.log("response", response.data.Search);
    set_data(response.data.Search);
    set_searchState("Search completed");
    history.push(`/discover/${searchText}`);
  };

  console.log("what is ST", searchText);

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
        <div className="">
          <div className="card-columns">
            <ul className="">
              {data.map((film) => (
                <Link to={`/moviedetails/${film.imdbID}`}>
                  <div className="">
                    <li className="card styled-shadow">
                      <img
                        className="card-img-top img-fluid"
                        src={film.Poster}
                        alt={film.title}
                      />
                      <div className="card-body">
                        <h5> {film.Title} </h5>
                        <h6> {film.Year} </h6>
                      </div>
                    </li>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
