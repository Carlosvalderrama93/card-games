import React from "react";

import Card from "./card/Card";

function DrawHand({ cards, handleUpdateScore, sb }) {
  return cards.map(({ suite, rank, color, show }) => {
    return (
      <Card
        suite={suite}
        rank={rank}
        color={color}
        show={show}
        handleUpdateScore={handleUpdateScore}
        cards={cards}
        sb={sb}
      />
    );
  });
}

export default DrawHand;
