import React from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";
function CardGhost(props) {
  const { title, typeFront, typeBack } = props;
  return (
    <div className="card-ghost">
      <CardFront title={title} type={typeFront} />
      <CardBack type={typeBack} />
    </div>
  );
}

export default CardGhost;
