import React from "react";

import deckGenerator from "../Others/deckGenerator";
import CardGenerator from "./CardGenerator";
import validProps from "../Others/validProps";
import getCard from "../Others/getCard";

function Board() {
  const startingDeck = deckGenerator(validProps);
  const startingCards = getCard(startingDeck, 4);

  const board = (
    <div className="board-cards">
      <CardGenerator cards={startingCards.cards} />
    </div>
  );
  return <div className="board">{board}</div>;
}

export default Board;
