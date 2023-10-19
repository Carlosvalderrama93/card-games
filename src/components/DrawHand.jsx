import React from "react";

import Card from "./card/Card";

function DrawHand({
  cards,
  handleUpdateScore,
  disableButton,
  flip,
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
        handleUpdateScore={handleUpdateScore}
        cards={cards}
        disableButton={disableButton}
        flip={flip}
        stand={stand}
        hit={hit}
      />
    );
  });
}

export default DrawHand;
