import React from "react";
import "./CSS/App.scss";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Components/Navigation";

// Pages
import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage";
import MovieDetail from "./Pages/MovieDetails";

// Templates
import BoxTemplate from "./Components/Templates/BoxTemplate";

// Componements
import Dogs from "./Components/Animals/Dogs";
import Scoreboard from "./Components/Scoreboard/Scoreboard";
import Pokedex from "./Components/Pokemon/PokeDex";
// import Animals from "./Components/Animals/Animals";
// import Title from "./Components/Title";
import LikeCounter from "./Components/LikeCounter";
import ArticleList from "./Components/Articlelist/ArticleList";
import MovieSearch from "./Components/Movies/MovieSearch";
import Animals from "./Components/Animals/Animals";
import CocktailSearch from "./Components/Cocktails/CocktailSearch";
import CocktailDetails from "./Pages/CocktailDetails";
import CocktailBrowser from "./Pages/CocktailBrowser";

function App() {
  return (
    <>
      <div className="col-md p-5">
        <Navigation />
      </div>
      <div className="row m-4"></div>
      <Switch>
        <Route path="/moviedetails/:id" component={MovieDetail} />
        <Route path="/discover/:searchtext" component={DiscoverMoviesPage} />
        {/* <Route path="/cocktail/:id" component={CocktailDetails} />
        <Route path="/explore/:searchtext" component={CocktailBrowser} /> */}
        <Route
          path="/"
          render={(props) => (
            <div>
              <div className="container-fluid">
                <div className="card-columns">
                  <BoxTemplate title="Movie finder">
                    <MovieSearch />
                  </BoxTemplate>
                  <BoxTemplate title="Cocktail finder">
                    <CocktailSearch />
                  </BoxTemplate>
                  <BoxTemplate title="ArticleList">
                    <ArticleList />
                  </BoxTemplate>
                  <BoxTemplate title="Dogs" text="Many dogs">
                    <Dogs />
                  </BoxTemplate>
                  <BoxTemplate title="Animals" text="How awsome are animals?">
                    <Animals />
                  </BoxTemplate>
                  <BoxTemplate
                    title="Scoreboard"
                    text="Check my player statistics"
                  >
                    <Scoreboard />
                  </BoxTemplate>
                  <BoxTemplate
                    title="LikeCounter"
                    text="How many likes did we get?"
                  >
                    <LikeCounter />
                  </BoxTemplate>
                  <BoxTemplate title="Pokemon" text="The pokedex">
                    <Pokedex />
                  </BoxTemplate>
                </div>
              </div>
            </div>
          )}
        />
      </Switch>
    </>
  );
}

export default App;

/* <div className="card">
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
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
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
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                  <div className="card card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
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
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card card-body card-inverse card-primary text-xs-center">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat.
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
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
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
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div> */
