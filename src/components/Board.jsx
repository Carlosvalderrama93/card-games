import React from "react";

import startGame from "../Others/startGame";
import DrawHands from "./DrawHands";

function Board() {
  const { players } = startGame();

  return (
    <div className="board">
      {players.map((player) => (
        <DrawHands hand={player.hand} key={player.id} />
      ))}
      <div className="control-panel">Control Panel</div>
    </div>
  );
}

export default Board;
