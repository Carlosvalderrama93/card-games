import React from "react";

import startGame from "../Others/startGame";
import DrawHands from "./DrawHands";

function Board() {
  const { players } = startGame();

  return (
    <div className="board">
      {players.map(({ hand }) => (
        <DrawHands hand={hand} />
      ))}
    </div>
  );
}

export default Board;
