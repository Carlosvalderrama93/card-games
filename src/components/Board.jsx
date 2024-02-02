import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import DrawHands from "./DrawHands";

function Board() {
  const [toFlip, setToFlip] = useState(false);
  const deck = useSelector((state) => state.deck);
  const players = useSelector((state) => state.players);

  return (
    <div className="board">
      {players.map((player) => (
        <DrawHands
          key={player.id}
          player={player}
          deck={deck}
          toFlip={{ state: toFlip, set: setToFlip }}
        />
      ))}
    </div>
  );
}

export default Board;
