// src/components/Scoreboard.js
import React, { useState } from "react";
import Player from "./Player";
import Title from "../Title";

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const players_sorted = [...players].sort(compare_score);

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  function compare_score(player_a, player_b) {
    if (sort_by === "score") {
      return player_b.score - player_a.score;
      console.log(player_a.name.localeCompare(player_b.score - player_a.score));
    }
    if (sort_by === "name") {
      return player_a.name.localeCompare(player_b.name);
      console.log(player_a.name.localeCompare(player_b.name));
    }
  }

  const incrementScore = (id) => {
    console.log("this is the function in the parent", id);
    const newArray = players.map((player) => {
      if (player.id === id) {
        const playerCard = player;
        playerCard.score = player.score + 1;
        return playerCard;
      }
      return player;
    });
    set_players(newArray);
  };

  const randomScore = () => {
    const newArray = players.map((player) => {
      const playerCard = player;
      playerCard.score = Math.floor(Math.random() * 100) + 1;
      return playerCard;
    });
    set_players(newArray);
  };

  const resetScore = () => {
    const newArray = players.map((player) => {
      const playerCard = player;
      playerCard.score = 0;
      return playerCard;
    });
    set_players(newArray);
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button onClick={resetScore}>Reset</button>
      <button onClick={randomScore}>Lucky Score</button>
      {players_sorted.map((player) => (
        <>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            // Passing it down as a prop
            incrementScore={incrementScore}
          />
        </>
      ))}
    </div>
  );
}
