import React from "react";
import "./project.css";

function Project({ item }) {
  return (
    <div className="card rounded-xl">
      <img src={item.image} alt="Project" />
      <div className="container">
        <h4>
          <b>{item.name}</b>
        </h4>
        <p>{item.link}</p>
        <h4>{item.src}</h4>
      </div>
    </div>
  );
}

export default Project;
