import React from "react"; // <- note the added import of useState
import { NavLink } from "react-router-dom";

export default function Navigation(props) {
  return (
    <>
      <nav class="navbar fixed-top navbar-dark bg-dark">
        <a class="navbar-brand m-4" href="/">
          Marinus Eigenraam
        </a>
        <NavLink to="/">Home</NavLink>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="/discover/">
              Movies
            </a>
            <a class="nav-item nav-link" href="#">
              Pricing
            </a>
            <a
              class="nav-item nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
