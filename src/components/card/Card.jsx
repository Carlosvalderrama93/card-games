import React, { useState } from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

function Card({ rank, suite, color, show }) {
  const [showCard, setShowCard] = useState(show);

  return showCard ? (
    <CardFront rank={rank} suite={suite} />
  ) : (
    <CardBack color={color} flipCard={setShowCard} />
  );
}

export default Card;
