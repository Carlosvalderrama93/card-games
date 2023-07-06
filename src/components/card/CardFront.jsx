import React from "react";

import propsValidator from "../../Others/propsValidator";
import FigureMain from "../icons/FigureMain";
import CardCorner from "./CardCorner";
import IconMain from "../icons/IconMain";
import Title from "../Title";

function CardFront(props) {
  const isValid = propsValidator(props, 2);
  if (!isValid) return null;
  
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
