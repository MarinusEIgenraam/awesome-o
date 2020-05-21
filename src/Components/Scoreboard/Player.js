// src/components/Player.js
import React from "react";
import "./Player.scss";

export default function Player(props) {
  // the event listener callback
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };

  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>{`${props.id} ${props.name} has a score of: ${props.score}`}</p>
      <p>
        <button onClick={onClickIncrement}>increment</button>
      </p>
    </li>
  );
}

// import React from 'react'

// // import React from "react";

// // export default function Country(props) {
// //   const buttonHandler = () => {
// //     props.incrementScore(props.data.id);
// //   };

// //   return (
// //     <div>
// //       {props.data.name}
// //       <ul>
// //         <li>{`Capital: ${props.data.capital}`} </li>
// //         <li>{`Population: ${props.data.population / 1000000} M `} </li>
// //         <li>{`Size: ${props.data.area}`} </li>
// //         <li>{`PatientCounter: ${props.data.patientCounter}`} </li>
// //         <button onClick={buttonHandler}>Add a patient</button>
// //       </ul>
// //     </div>
// //   );
// // }
