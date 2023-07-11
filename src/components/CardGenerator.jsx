import React from "react";

import Card from "./card/Card";
import validProps from "../Others/validProps";
import deckGenerator from "../Others/deckGenerator";

function CardGenerator({ cards }) {
  return cards.map((card) => {
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
