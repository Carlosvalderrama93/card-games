import React from "react";
import CardGhost from "./CardGhost";

function Card(props) {
  const { title, typeFront, typeBack } = props;
  return (
    <div className="card">
      <CardGhost title={title} typeFront={typeFront} typeBack={typeBack} />
    </div>
  );
}

export default Card;
