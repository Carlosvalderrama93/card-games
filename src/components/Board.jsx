import React, { useRef, useState } from "react";

import startGame from "../Others/startGame";
import DrawHands from "./DrawHands";

function Board() {
  const [flip, setFlip] = useState(false);
  const { players, deck } = startGame();
  const refDeck = useRef(deck);

  return (
    <div className="board">
      {players.map((player) => (
        <DrawHands
          player={player}
          deck={refDeck}
          flip={{ state: flip, set: setFlip }}
        />
      ))}
    </div>
  );
}

export default Board;
