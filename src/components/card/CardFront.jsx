import React from "react";

import FigureMain from "../icons/FigureMain";
import CardCorner from "./CardCorner";
import IconMain from "../icons/IconMain";
import Title from "../Title";

function CardFront({ suite, rank }) {
  return (
    <div className="card-front card" key={`${suite}_${rank}`}>
      <CardCorner>
        <Title>{rank}</Title>
        <IconMain suite={suite} />
      </CardCorner>
      <FigureMain suite={suite} />
      <CardCorner>
        <Title>{rank}</Title>
        <IconMain suite={suite} />
      </CardCorner>
    </div>
  );
}

export default CardFront;
