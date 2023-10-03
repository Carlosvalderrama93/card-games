import React from "react";

function CardCorner({ children }) {
  if (!children) return undefined;

  return <div className="card-front-title">{children}</div>;
}

export default CardCorner;
