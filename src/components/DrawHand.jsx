import React from "react";

import Card from "./card/Card";

function DrawHand({ cards }) {
  return cards.map(({ suite, rank, color, show }) => {
    return <Card suite={suite} rank={rank} color={color} show={show} />;
  });
}

export default DrawHand;
