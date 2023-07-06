import React from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";
import propsValidator from "../../Others/propsValidator";

function CardTop(props) {
  const isValid = propsValidator(props, 3);
  if (!isValid) return null;

  return (
    <div className="card-top">
      <CardFront rank={props.rank} suite={props.suite} />
      <CardBack color={props.color} />
    </div>
  );
}

export default CardTop;
