import { useSelector } from "react-redux";
import { StartGame } from "./allTypes";
import { dealCards } from "./cards";

function startGame(initialPlayers: number = 1): StartGame {
  const deck = useSelector((state) => state.deck);
  const players = useSelector((state) => state.players);
  //  const { deck, players } = dealCards(rawDeck, rawPlayers, 2);

  return { deck, players };
}

export default startGame;
