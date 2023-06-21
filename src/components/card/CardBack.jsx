import React from "react";

function CardBack({ type }) {
  let cardBack;
  type === "one"
    ? (cardBack = <img src="/card-back-one.svg" alt="CardBack One" />)
    : (cardBack = <img src="/card-back-two.svg" alt="CardBack Two" />);

  return <div className="card-back">{cardBack}</div>;
}

export default CardBack;
