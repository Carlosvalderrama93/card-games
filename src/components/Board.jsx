import React, { useRef } from "react";

import startGame from "../Others/startGame";
import DrawHands from "./DrawHands";

function Board() {
  const { players, deck } = startGame();
  const refDeck = useRef(deck);

  return (
    <div className="board">
      {players.map((player) => (
        <DrawHands player={player} deck={refDeck} />
      ))}
    </div>
  );
}

export default Board;
