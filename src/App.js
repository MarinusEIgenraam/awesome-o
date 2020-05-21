import React from "react";
import Axios from "axios";
import "./CSS/App.scss";

import Navigation from "./Components/Navigation";
import Animals from "./Components/Animals/Animals";
import Title from "./Components/Title";
import Pokemon from "./Components/Pokemon";
import LikeCounter from "./Components/LikeCounter";
import Dogs from "./Components/Animals/Dogs";
import Scoreboard from "./Components/Scoreboard/Scoreboard";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <>
      <div className="col-md p-5">
        <Navigation />
      </div>

      <div className="main pt-4">
        <main className="container-fluid">
          <div className="row">
            <div className="col-md col-lg-3">
              <div className="card box">
                <div class="card-body pb-0">
                  <Title content="Pokemon" />
                  <div className="">
                    {all_pokemon.map((pokemon) => (
                      <>
                        <Pokemon
                          name={pokemon.name}
                          weight={pokemon.weight}
                          awesome={pokemon.awesome}
                          terrifying={pokemon.terrifying}
                          abilities={pokemon.abilities}
                        />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="card mb-4 mainCard box">
                <div class="card-body pb-0">
                  <Title content="Like couter" />
                  <LikeCounter />
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="card mb-4 mainCard box">
                <div class="card-body pb-0">
                  <Title content="Scoreboard" />
                  <Scoreboard />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card mb-4 mainCard box">
                <div class="card-body pb-0">
                  <Title content="Dog watch" />
                  <Dogs />
                </div>
              </div>
            </div>

            <div className="col-md-3"></div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
