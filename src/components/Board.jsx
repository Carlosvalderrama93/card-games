import React from "react";

import Card from "../components/card/Card";

function Board() {
  const board = (
    <div className="board-cards">
      <div className="board-cards-position">
        <Card suite={"heart"} rank={"J"} color={"blue"} />
      </div>
      <div className="board-cards-position">
        <Card suite={"club"} rank={"Q"} color={"red"} />
      </div>
      <div className="board-cards-position">
        <Card suite={"spade"} rank={"K"} color={"red"} />
      </div>
      <div className="board-cards-position">
        <Card suite={"diamont"} rank={"A"} color={"blue"} />
      </div>
    </div>
  );
  return <div className="board">{board}</div>;
}

export default Board;
