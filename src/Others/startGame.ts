import { Cards, Players, StartGame } from "./allTypes";
import { createDeck, dealCards } from "./cards";
import { createPlayers } from "./player";

function startGame(initialPlayers: number = 1): StartGame {
  const rawDeck: Cards = createDeck();
  const rawPlayers: Players = createPlayers(initialPlayers);
  const { deck, players } = dealCards(rawDeck, rawPlayers, 2);

  return { deck, players };
}

export default startGame;
