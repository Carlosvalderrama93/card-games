import React, { useRef, useState } from "react";

import startGame from "../Others/startGame";
import DrawHands from "./DrawHands";

function Board() {
  const [toFlip, setToFlip] = useState(false);
  const { players, deck } = startGame();
  const refDeck = useRef(deck);

  return (
    <div className="board">
      {players.map((player) => (
        <DrawHands
          player={player}
          deck={refDeck}
          toFlip={{ state: toFlip, set: setToFlip }}
        />
      ))}
    </div>
  );
}

export default Board;
