import React from "react";

import CardGenerator from "./CardGenerator";
import startGame from "../Others/startGame";

function Board() {
  const { players } = startGame(2);

  const board = (
    <div className="board-cards">
      <CardGenerator deck={players[0].hand.cards} />
      {players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <h4>Player Score: {player.hand.score ?? "Null"}</h4>
          <div>
            <p>
              {player.hand.cards.map((card) => (
                <p key={card.id}>{card.rank + " of " + card.suite}</p>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
  return <div className="board">{board}</div>;
}

export default Board;
