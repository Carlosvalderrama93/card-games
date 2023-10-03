import React from "react";

import CardTop from "./CardTop";

function Card(props) {
  return (
    <div className="card">
      <CardTop rank={props.rank} suite={props.suite} color={props.color} />
    </div>
  );
}

export default Card;
