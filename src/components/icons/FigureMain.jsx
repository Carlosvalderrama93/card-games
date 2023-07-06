import React from "react";

import FigureClub from "./FigureClub";
import FigureDiamont from "./FigureDiamont";
import FigureHeart from "./FigureHeart";
import FigureSpade from "./FigureSpade";
import propsValidator from "../../Others/propsValidator";

function FigureMain({ suite, children }) {
  const isValid = propsValidator({ suite }, 1);
  if (children || !isValid) return null;
  suite = suite.toUpperCase();

  return suite === "CLUB" ? (
    <div className="card-front-img">{<FigureClub />}</div>
  ) : suite === "DIAMONT" ? (
    <div className="card-front-img">{<FigureDiamont />}</div>
  ) : suite === "HEART" ? (
    <div className="card-front-img">{<FigureHeart />}</div>
  ) : suite === "SPADE" ? (
    <div className="card-front-img">{<FigureSpade />}</div>
  ) : null;
}

export default FigureMain;
