import React from "react"; // <- note the added import of useState

export default function BoxTemplate(props) {
  return (
    <div className="card styled-shadow">
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
        {props.children}
      </div>
    </div>
  );
}
