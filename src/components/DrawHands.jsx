import DrawHand from "./DrawHand";

function DrawHands({ hand, key }) {
  return (
    <div className="board-area" key={key}>
      <DrawHand cards={hand.cards} />
    </div>
  );
}

export default DrawHands;

import React from "react";
