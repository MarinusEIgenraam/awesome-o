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
      console.log("typeof data test:", typeof response.data);

      setDog(response.data);
    } catch (error) {
      console.log(error.message);
    }
    console.log(fetching);
  }

  useEffect(() => {
    getDog();
  }, [fetching]);

  function onClickMe() {
    // count = count + 1
    setCount(count + 1);
    console.log(fetching);
    setFetching(!fetching);
  }

  return (
    <>
      <div className="card shadow-sm mb-4">
        <div class="card-body pb-0">
          <h5 class="card-title">{dog.message.title}</h5>
          <h6 class="card-subtitle mb-3 text-primary"></h6>
          <button onClick={onClickMe}>New dog</button>
          <p>There where {count} dogs shown here</p>
          <p className="mb-0">
            <img className="image-fit" src={dog.message} alt="1" />
          </p>
        </div>
      </div>
    </>
  );
}
