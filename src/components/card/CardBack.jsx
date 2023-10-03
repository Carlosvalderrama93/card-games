import React from "react";

function cardBack({ color = "BLUE" }) {
  const isBlue = color.toUpperCase() === "BLUE";
  const cardBlue = (
    <div className="card-back">
      <img src="/card-back-blue.svg" alt="cardColor blue" />
    </div>
  );
  const cardRed = (
    <div className="card-back">
      <img src="/card-back-red.svg" alt="cardColor red" />
    </div>
  );

  return isBlue ? cardBlue : cardRed;
}

export default cardBack;
