import React from "react";
import FigureMain from "../icons/FigureMain";
import IconMain from "../icons/IconMain";

function CardFront() {
  return (
    <div className="card-front">
      <div className="card-front-title">
        <p>A</p>
        <IconMain type={"heart"} />
      </div>
      <div className="card-front-img">
        <FigureMain type={"heart"} />
      </div>
      <div className="card-front-title">
        <p>A</p>
        <IconMain type={"heart"} />
      </div>
    </div>
  );
}

export default CardFront;
