import React from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

function Card({ rank, suite, color, show, key }) {
  return show ? (
    <CardFront rank={rank} suite={suite} key={key} />
  ) : (
    <CardBack color={color} key={key} />
  );
}

export default Card;
