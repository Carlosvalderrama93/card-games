import React from "react";

import FigureClub from "./FigureClub";
import FigureDiamont from "./FigureDiamont";
import FigureHeart from "./FigureHeart";
import FigureSpade from "./FigureSpade";

function FigureMain({ suite, children }) {
  if (children) return null;
  
  return suite === "club" ? (
    <div className="card-front-img">{<FigureClub />}</div>
  ) : suite === "diamont" ? (
    <div className="card-front-img">{<FigureDiamont />}</div>
  ) : suite === "heart" ? (
    <div className="card-front-img">{<FigureHeart />}</div>
  ) : suite === "spade" ? (
    <div className="card-front-img">{<FigureSpade />}</div>
  ) : null;
}

export default FigureMain;
