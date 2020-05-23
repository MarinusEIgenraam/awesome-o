import React from "react";
import Axios from "axios";
import "./CSS/App.scss";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Components/Navigation";

// Pages
// import MovieSearch from "./Pages/MovieSearch";

// Templates
import BoxTemplate from "./Components/Templates/BoxTemplate";

// Componements
import Dogs from "./Components/Animals/Dogs";
import Scoreboard from "./Components/Scoreboard/Scoreboard";
import Pokedex from "./Components/Pokemon/PokeDex";
import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage";
// import Animals from "./Components/Animals/Animals";
// import Title from "./Components/Title";
// import LikeCounter from "./Components/LikeCounter";
// import { Switch, Route } from "react-router-dom";
import MovieDetail from "./Pages/MovieDetails";
// import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage";

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
      <div className="row m-4"></div>
      <Switch>
        <Route path="/moviesearch" component={DiscoverMoviesPage} />
        <Route path="/moviedetails/:id" component={MovieDetail} />
        <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
      </Switch>
      <div className="container-fluid">
        <div className="card-columns">
          <BoxTemplate title="Dogs" text="Many dogs">
            <Dogs />
          </BoxTemplate>
          <BoxTemplate title="Scoreboard" text="Check my player statistics">
            <Scoreboard />
          </BoxTemplate>
          <BoxTemplate title="Pokemon" text="The pokedex">
            <Pokedex />
          </BoxTemplate>
          <BoxTemplate title="Movie finder">
            <DiscoverMoviesPage />
          </BoxTemplate>
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src="//placehold.it/800x560"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h4 className="card-title">
                Card title that wraps to a new line
              </h4>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src="//placehold.it/800x560"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h4 className="card-title">
                Card title that wraps to a new line
              </h4>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card card-body">
            <blockquote className="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer>
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src="//placehold.it/800x400"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card card-body card-inverse card-primary text-xs-center">
            <blockquote className="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat.
              </p>
              <footer>
                <small>
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card card-body text-xs-center">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <div className="card">
            <img
              className="card-img img-fluid"
              src="//placehold.it/800x600"
              alt="Card image"
            ></img>
          </div>
          <div className="card card-body text-right">
            <blockquote className="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer>
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row make-columns">
          <BoxTemplate
            column="col-md-3 m-2"
            padding="card-body panel panel-default"
          >
            <Dogs />
          </BoxTemplate>
          <BoxTemplate column="col-md-3 m-2" padding="card-body">
            <Scoreboard />
          </BoxTemplate>
          <BoxTemplate
            column="col-md-3 m-2 w-100"
            padding="card-body no-padding panel panel-default"
          >
            <Pokedex />
          </BoxTemplate>
          <div className="clearfix"></div>
          <BoxTemplate
            column="col-md-3 m-2 w-100"
            padding="card-body no-padding panel panel-default"
          >
            <Pokedex />
          </BoxTemplate>

          <BoxTemplate
            column="col-md-3 m-2 w-100"
            padding="card-body no-padding panel panel-default"
          >
            <Pokedex />
          </BoxTemplate>
        </div>
      </div> */}

      {/* <div className="main pt-4 col-md-12">
        <main className="container-fluid">
          <div className="row">
            <BoxTemplate>
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
            </BoxTemplate>

            <div className="col-md">
              <div className="col-lg-5">
                <div className="card mb-4 mainCard box">
                  <div className="card-body pb-0">
                    <Title content="Like couter" />
                    <LikeCounter />
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="card mb-4 mainCard box">
                  <div className="card-body pb-0">
                    <Title content="Scoreboard" />
                    <Scoreboard />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-5">
                <div className="card mb-4 mainCard box">
                  <div className="card-body pb-0">
                    <Title content="Dog watch" />
                    <Dogs />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div> */}
    </>
  );
}

export default App;
