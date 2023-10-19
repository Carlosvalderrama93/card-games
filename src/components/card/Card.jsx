import React, { useState } from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

function Card({
  rank,
  suite,
  color,
  show,
  handleUpdateScore,
  cards,
  disableButton,
  flip,
  stand,
  hit,
}) {
  const [showCard, setShowCard] = useState(show);
  function handleFlip(cards) {
    if (flip) {
      setShowCard(true);
      handleUpdateScore(cards, true);
      disableButton(false);
      stand(false);
      hit(false);
    }
  }

  return showCard ? (
    <CardFront rank={rank} suite={suite} />
  ) : (
    <CardBack color={color} handleFlip={handleFlip} cards={cards} />
  );
}

export default Card;
