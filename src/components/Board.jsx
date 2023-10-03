import React from "react";

import startGame from "../Others/startGame";
import DrawHand from "./DrawHand";

function Board() {
  const { players } = startGame(2);

  return (
    <div className="board-cards">
      <DrawHand hand={players[0].hand.cards} />
      {players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <h4>Player Score: {player.hand.score ?? "Null"}</h4>
          <div>
            <h5>
              {player.hand.cards.map((card) => (
                <p key={card.id}>{card.rank + " of " + card.suite}</p>
              ))}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Board;
