import React from "react";
import FigureMain from "../icons/FigureMain";
import IconMain from "../icons/IconMain";
import Title from "../Title";

function CardFront(props) {
  const { title, type } = props;
  return (
    <div className="card-front">
      <div className="card-front-title">
        <Title>{title}</Title>
        <IconMain type={type} />
      </div>
      <div className="card-front-img">
        <FigureMain type={type} />
      </div>
      <div className="card-front-title">
        <Title>{title}</Title>
        <IconMain type={type} />
      </div>
    </div>
  );
}

export default CardFront;
