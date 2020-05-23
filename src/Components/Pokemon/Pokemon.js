import React from "react";

export default function Pokemon(props) {
  return (
    <div className="card">
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <h6 class="text">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p className="card-text">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability) => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
  );
}

// <div className="card">
// <img
//   className="card-img-top img-fluid"
//   src="//placehold.it/800x560"
//   alt="Card image cap"
// ></img>
// <div className="card-body">
//   <h4 className="card-title">
//     Card title that wraps to a new line
//   </h4>
//   <p className="card-text">
//     This is a longer card with supporting text below as a natural
//     lead-in to additional content. This content is a little bit
//     longer.
//   </p>

// </div>
// </div>
