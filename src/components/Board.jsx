import React, { useRef, useState } from "react";

import startGame from "../Others/startGame";
import DrawHands from "./DrawHands";
import { useSelector } from "react-redux";

function Board() {
  const [toFlip, setToFlip] = useState(false);
  const { players, deck } = startGame();

  return (
    <div className="board">
      {players.map((player) => (
        <DrawHands
          player={player}
          deck={deck}
          toFlip={{ state: toFlip, set: setToFlip }}
        />
      ))}
    </div>
  );
}

export default Board;
