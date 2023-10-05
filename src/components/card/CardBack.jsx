import React from "react";

function CardBack({ color = "BLUE", handleShowCard, id }) {
  const isBlue = color.toUpperCase() === "BLUE";
  return (
    <div
      key={id}
      className="card-back card"
      onClick={() => handleShowCard(true)}
    >
      {isBlue ? (
        <img src="/card-back-red.svg" alt="cardColor red" />
      ) : (
        <img src="/card-back-blue.svg" alt="cardColor blue" />
      )}
    </div>
  );
}

export default CardBack;
