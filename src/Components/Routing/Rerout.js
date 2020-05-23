import React from "react";
import { NavLink } from "react-router-dom";

export default function Rerout() {
  return (
    <div>
      This is a different component!
      <NavLink to="/other">goto Other </NavLink>
      <br />
      <NavLink to="/homepage">goto Home </NavLink>
    </div>
  );
}
