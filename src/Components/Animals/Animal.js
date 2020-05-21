// src/components/LikeCounter.js
import React from "react"; // <- note the added import of useState

export default function Animal(props) {
  console.log("these are the animal props:", props);
  return <p>{props}</p>;
}
