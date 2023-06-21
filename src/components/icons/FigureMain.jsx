import React from "react";

import FigureClub from "./FigureClub";
import FigureDiamont from "./FigureDiamont";
import FigureHeart from "./FigureHeart";
import FigureSpade from "./FigureSpade";

function FigureMain({ type }) {
  let figure;

  if (type === "club") {
    figure = <FigureClub />;
  } else if (type === "diamont") {
    figure = <FigureDiamont />;
  } else if (type === "heart") {
    figure = <FigureHeart />;
  } else if (type === "spade") {
    figure = <FigureSpade />;
  } else {
    figure = <p>Nothing here</p>;
  }

  return <>{figure}</>;
}

export default FigureMain;
