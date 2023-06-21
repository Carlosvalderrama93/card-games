import React from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";
function CardGhost() {
  return (
    <div className="card-ghost">
      <CardFront />
      <CardBack type={"two"} />
    </div>
  );
}

export default CardGhost;
