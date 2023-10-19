import React from "react";

import Card from "./card/Card";

function DrawHand({
  cards,
  updateScore,
  disableButton,
  toFlip,
  stand,
  hit,
}) {
  return cards.map(({ suite, rank, color, show }) => {
    return (
      <Card
        suite={suite}
        rank={rank}
        color={color}
        show={show}
        updateScore={updateScore}
        cards={cards}
        disableButton={disableButton}
        toFlip={toFlip}
        stand={stand}
        hit={hit}
      />
    );
  });
}

export default DrawHand;
