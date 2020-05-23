import React from "react";
import { NavLink } from "react-router-dom";

export default function Country(props) {
  const buttonHandler = () => {
    props.addAPatientToACountry(props.data.id);
  };

  const { capital, population, area, patientCounter, alpha3Code } = props.data;
  return (
    <div>
      {props.data.name}
      <ul>
        <NavLink to={`/country/${alpha3Code}`}>
          <li>{`Capital: ${capital}`} </li>
          <li>{`Population: ${population / 1000000} M `} </li>
          <li>{`Size: ${area}`} </li>
          <li>{`PatientCounter: ${patientCounter}`} </li>
          <button onClick={buttonHandler}>Add a patient</button>
        </NavLink>
      </ul>
    </div>
  );
}
