import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function MovieSearch() {
  const [searchText, set_searchText] = useState("The Terminator");
  const [searchState, set_searchState] = useState("Idle");

  const inputHandler = (event) => {
    set_searchText(event.target.value);
  };
  const clickHandler = (event) => {
    set_searchState("Searching..");
    console.log(`user ask me to search for...${searchText}..`);
    navigateToSearch();
  };

  const history = useHistory();

  const navigateToSearch = async () => {
    const search_movies = `http://www.omdbapi.com/?apikey=44086c16&s=${searchText}`;
    const response = await axios.get(search_movies);
    console.log("response", response.data.Search);
    set_searchState("Search completed");
    history.push(`/discover/${searchText}`);
  };

  console.log("what is ST", searchText);

  return (
    <div>
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
  );
}
