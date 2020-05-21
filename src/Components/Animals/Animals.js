// src/components/LikeCounter.js
import React from "react"; // <- note the added import of useState

export default function Animals(props) {
  const animals = [
    "Chicken",
    "Sloth",
    "Porcupine",
    "Killer whale",
    "Velociraptor",
  ];
  return (
    <>
      <ul className="list-group list-group-flush">
        {animals.map((animal, index) => {
          return (
            <>
              <li className="list-group-item">
                Awesomeness level {index + 1} : {animal}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
