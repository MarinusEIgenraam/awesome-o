import React, { useState } from "react";

export default function State() {
  const initialValue = [
    { name: "Karel", age: 3, gender: "female", noBrothers: 0, noSisters: 1 },
    { name: "Pien", age: 3, gender: "female", noBrothers: 0, noSisters: 1 },
    { name: "Diva", age: 3, gender: "female", noBrothers: 0, noSisters: 1 },
    { name: "Pibi", age: 3, gender: "female", noBrothers: 0, noSisters: 1 },
    { name: "Guusje", age: 3, gender: "female", noBrothers: 0, noSisters: 1 },
    { name: "Gijs", age: 3, gender: "female", noBrothers: 0, noSisters: 1 },
  ];

  const [petList, set_petList] = useState(initialValue);
  const [petName, set_petName] = useState("Fill in a pet name");

  const buttonHandler = () => {
    set_petList([...petList, { name: petName, age: 0 }]);
    set_petName("");
  };

  const inputHandler = (event) => {
    set_petName(event.target.value);
  };

  const crazyAnimal = { name: { firstname: "Dragonita", Surname: "Flaming" } };

  const print = () => {
    const { firstname, Surname } = crazyAnimal.name;

    console.log("name:", firstname);
    console.log("name:", Surname);
    console.log("name:", Surname);
    console.log("name:", Surname);
  };

  print();
  return (
    <div>
      {petList.map((animal) => (
        <p>{animal.name}</p>
      ))}
      <button onClick={buttonHandler}>Click me please</button>

      <input type="text" value={petName} onChange={inputHandler} />
    </div>
  );
}
