import React from "react";

function CardBack({ color = "blue", flipCard }) {
  color = color.toLocaleLowerCase();
  return (
    <div className="card-back card" key={color} onClick={() => flipCard(true)}>
      <img src={`/card-back-${color}.svg`} alt={`cardColor ${color}`} />
    </div>
  );
}

export default CardBack;
