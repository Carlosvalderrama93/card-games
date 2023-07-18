import { createDeck, dealCards } from "./cards";
import { createPlayers } from "./player";

function startGame(initialPlayers = 1) {
  const deck = createDeck();
  const players = createPlayers(initialPlayers);
  dealCards(deck, players, 2);
  const score = null;

  return { deck, players, score };
}

export default startGame;
