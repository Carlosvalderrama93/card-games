import React, { useState } from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

function Card({ rank, suite, color, show, id }) {
  const [showCard, setShowCard] = useState(show);

  return showCard ? (
    <CardFront rank={rank} suite={suite} id={id} />
  ) : (
    <CardBack color={color} id={id} handleShowCard={setShowCard} />
  );
}

export default Card;
