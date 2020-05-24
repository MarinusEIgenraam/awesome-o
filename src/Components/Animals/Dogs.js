import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Dog() {
  const [dog, setDog] = useState({ message: "placeholder" });
  const [fetching, setFetching] = useState(false);
  const [count, setCount] = useState(0);

  async function getDog() {
    console.log(fetching);
    try {
      const url = "https://dog.ceo/api/breeds/image/random";
      const response = await axios.get(url);

      console.log("response.data test:", response.data);
      // {
      // "message": "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_1590.jpg",
      // "status": "success"
      // }
      console.log("typeof data test:", response.data);

      setDog(response.data);
    } catch (error) {
      console.log(error.message);
    }
    console.log(fetching);
  }

  function onClickMe() {
    // count = count + 1
    setCount(count + 1);
    console.log(fetching);
    console.log(dog);
    setFetching(!fetching);
  }

  useEffect(() => {
    getDog();
  }, [fetching]);

  return (
    <>
      <button onClick={onClickMe}>New dog</button>
      <p>There where {count} dogs shown here</p>
      <p className="mb-0">
        <img
          className="image-fit border border-primary"
          src={dog.message}
          alt="1"
        />
      </p>
    </>
  );
}
