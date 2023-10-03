import React from "react";

import FigureMain from "../icons/FigureMain";
import CardCorner from "./CardCorner";
import IconMain from "../icons/IconMain";
import Title from "../Title";

function CardFront(props) {
  return (
    <div className="card-front">
      <CardCorner>
        <Title>{props.rank}</Title>
        <IconMain suite={props.suite} />
      </CardCorner>
      <FigureMain suite={props.suite} />
      <CardCorner>
        <Title>{props.rank}</Title>
        <IconMain suite={props.suite} />
      </CardCorner>
    </div>
  );
}

export default CardFront;
