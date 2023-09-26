import { Cards, Players, StartGame } from "./allTypes";
import { createDeck, dealCards } from "./cards";
import { createPlayers } from "./player";

function startGame(initialPlayers: number = 1): StartGame {
  const deck: Cards = createDeck();
  const players: Players = createPlayers(initialPlayers);
  dealCards(deck, players, 2);
  const score: number = 0; // previous value was 'null' intead of '0'

  return { deck, players, score };
}

export default startGame;
