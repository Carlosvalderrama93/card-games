import React from "react";

import startGame from "../Others/startGame";
import DrawHands from "./DrawHands";

function Board() {
  const { players } = startGame();

  return (
    <div className="board">
      {players.map((player) => (
        <DrawHands player={player} />
      ))}
    </div>
  );
}

export default Board;
