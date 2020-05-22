import React, { useState, useEffect } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  const onClickAddPlayer = () => {
    props.addPlayer(name);
  };

  return (
    <div className="">
      <p>
        New player:
        <input
          onChange={(event) => {
            set_name(event.target.value);
          }}
          value={name}
          type="text"
          placeholder="Name"
        />{" "}
        <button onClick={onClickAddPlayer}>Add</button>
      </p>
    </div>
  );
  useEffect(() => {
    console.log("The useEffect action!");
  }, [name]);
}
