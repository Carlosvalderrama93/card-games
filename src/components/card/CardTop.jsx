import React from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";
import propsValidator from "../../Others/propsValidator";

function CardGhost(props) {
  const areValid = propsValidator(props, 3);
  if (!areValid) return null;

  return (
    <div className="card-ghost">
      <CardFront rank={props.rank} suite={props.suite} />
      <CardBack color={props.color} />
    </div>
  );
}

export default CardGhost;
