import React from "react";

import Card from "./card/Card";

function DrawHand({ cards }) {
  return cards.map((card) => {
    return (
      <Card
        key={card.id}
        suite={card.suite}
        rank={card.rank}
        color={card.color}
        show={card.show}
      />
    );
  });
}

export default DrawHand;
