import React from "react";
import propsValidator from "../../Others/propsValidator";

function cardBack({ color }) {
  const isValid = propsValidator({ color }, 1);
  if (!isValid) return null;
  const isBlue = color === "blue";
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
