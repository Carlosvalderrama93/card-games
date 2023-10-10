import React from "react";

function CardBack({ color = "blue", handleFlip, cards }) {
  color = color.toLocaleLowerCase();
  return (
    <div
      className="card-back card"
      key={color}
      onClick={() => handleFlip(cards)}
    >
      <img src={`/card-back-${color}.svg`} alt={`cardColor ${color}`} />
    </div>
  );
}

export default CardBack;
