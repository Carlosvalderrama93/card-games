import React from "react";

import startGame from "../Others/startGame";
import DrawHands from "./DrawHands";

function Board() {
  const { players, deck } = startGame();

  return (
    <div className="board">
      {players.map((player) => (
        <DrawHands player={player} deck={deck} />
      ))}
    </div>
  );
}

export default Board;
