import DrawHand from "./DrawHand";

function DrawHands({ hand, id }) {
  return (
    <div className="board-area" key={id}>
      <DrawHand cards={hand.cards} />
    </div>
  );
}

export default DrawHands;

import React from "react";
