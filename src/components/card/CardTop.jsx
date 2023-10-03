import React from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

function CardTop(props) {
  return (
    <div className="card-top">
      <CardFront rank={props.rank} suite={props.suite} />
      <CardBack color={props.color} />
    </div>
  );
}

export default CardTop;
