import React, { useState } from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

function Card({ rank, suite, color, show, handleUpdateScore, cards }) {
  const [showCard, setShowCard] = useState(show);
  function handleFlip(cards) {
    setShowCard(true);
    handleUpdateScore(cards, true);
  }

  return showCard ? (
    <CardFront rank={rank} suite={suite} />
  ) : (
    <CardBack color={color} handleFlip={handleFlip} cards={cards} />
  );
}

export default Card;
