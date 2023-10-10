import React from "react";

import Card from "./card/Card";

function DrawHand({ hand, handleUpdateScore }) {
  return hand.cards.map(({ suite, rank, color, show }) => {
    return (
      <Card
        suite={suite}
        rank={rank}
        color={color}
        show={show}
        handleUpdateScore={handleUpdateScore}
        cards={hand.cards}
      />
    );
  });
}

export default DrawHand;
