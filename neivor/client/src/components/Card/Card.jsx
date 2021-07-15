import React from "react";
import "./Card.css"

function Card({ data }) {

  return (
    <div className="card">
      <div className="image">
        {/* <img src={data.image} alt={data.name} /> */}
        <h1>neivor</h1>
        <div className="detail">
          <h3>{data.id}</h3>
          <p>{" " + data.name }</p>
          <p>To Pay ${data.total}</p>
          </div>
        </div>
      </div>
  );
}

export default Card;