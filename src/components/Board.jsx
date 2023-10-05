import React from "react";

import startGame from "../Others/startGame";
import DrawHands from "./DrawHands";

function Board() {
  const { players } = startGame();

  return (
    <div className="board">
      {players.map(({ hand, id }) => (
        <DrawHands hand={hand} id={id} />
      ))}
    </div>
  );
}

export default Board;
