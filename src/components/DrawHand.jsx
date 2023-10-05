import React from "react";

import Card from "./card/Card";

function DrawHand({ cards }) {
  return cards.map(({ id, suite, rank, color, show }) => {
    return <Card id={id} suite={suite} rank={rank} color={color} show={show} />;
  });
}

export default DrawHand;
