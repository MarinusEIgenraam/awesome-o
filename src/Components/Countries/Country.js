import React from "react";

export default function Country(props) {
  const buttonHandler = () => {
    props.addAPatientToACountry(props.data.id);
  };

  return (
    <div>
      {props.data.name}
      <ul>
        <li>{`Capital: ${props.data.capital}`} </li>
        <li>{`Population: ${props.data.population / 1000000} M `} </li>
        <li>{`Size: ${props.data.area}`} </li>
        <li>{`PatientCounter: ${props.data.patientCounter}`} </li>
        <button onClick={buttonHandler}>Add a patient</button>
      </ul>
    </div>
  );
}
