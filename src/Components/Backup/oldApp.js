import React, { useState, useEffect } from "react";
import axios from "axios";

import Future from "./Future";

function App() {
  const [dog, setDog] = useState({ message: "placeholder" });
  const [fetching, setFetching] = useState(false);
  const [count, setCount] = useState(0);
  const [votes, setVotes] = useState(["placeholder"]);

  async function getDog() {
    try {
      const url = "https://dog.ceo/api/breeds/image/random";
      const response = await axios.get(url);

      console.log("response.data test:", response.data);
      // {
      // "message": "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_1590.jpg",
      // "status": "success"
      // }
      console.log("typeof data test:", typeof response.data);

      setDog(response.data);
      // setFetching(false)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(
    () => {
      getDog();
    }, // callback - what should happen
    [fetching] // [] - only run once at the beginning
    // If any element of the array changes, run again
  );

  // const stateArray = useState(0)
  // const count = stateArray[0] // value
  // const setCount = stateArray[1] // setter

  // const letters = ['a', 'b', 'c']
  // const a = letters[0]
  // const b = letters[1]
  // const c = letters[2]
  // const [a, b, c] = letters

  function onClickMe() {
    // count = count + 1
    setCount(count + 1);

    setFetching(true);
  }

  function yes() {
    const newVotes = [...votes, "Yes"];

    setVotes(newVotes);
  }

  function no() {
    const newVotes = [...votes, "No"];

    setVotes(newVotes);
  }

  console.log("dog render test:", dog);

  return (
    <>
      <h1>Welcome User</h1>
      <div>
        <h1>Dog</h1>
        <img src={dog.message} />
      </div>
      <div>
        <h1>Votes</h1>
        {votes}

        <button onClick={yes}>Yes</button>

        <button onClick={no}>No</button>
      </div>
      <button onClick={onClickMe}>New dog</button>
      It was clicked {count} times
      {/* 1) 0 */}
      <h1>hello world</h1>
      <Future distance={5} />
      <Future distance={10} />
    </>
  );
}

export default App;
