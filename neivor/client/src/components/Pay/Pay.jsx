import React from "react";
import Card from "../Card/Card";
import "./Pay.css"

function Pay(props) {
  return (
    <div className="full">
      <div className="showing">
        {props.tiket.length > 0 ? props.tiket.map((data) => (
          <Card key={data.id} data={data} />
        )) : ""
        }
      </div>
    </div>
  );
}

export default Pay;