import React from "react";

import Card from "./card/Card";

function CardGenerator({ deck }) {
  return deck.map((card) => {
    return (
      <div className="board-cards-position" key={card.id}>
        <Card
          key={card.id}
          suite={card.suite}
          rank={card.rank}
          color={card.color}
        />
      </div>
    );
  });
}

export default CardGenerator;
