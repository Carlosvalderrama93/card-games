import { useDispatch, useSelector } from "react-redux";
import { Card, Cards, Color, Players, Rank, Suite } from "./allTypes";
import validProps from "./validProps";
import { deletedcard } from "../features/cards/deckSlice";
import { takedCard } from "../features/players/playerSlice";

export function createDeck(): Cards {
  const { suite: suites, rank: ranks } = validProps;
  let color: Color = "BLUE";
  const rawDeck: Cards = suites
    .map((suite) => {
      color === "BLUE" ? (color = "RED") : (color = "BLUE");
      const cards: Cards = ranks.map((rank) => createCard(rank, suite, color));
      return cards;
    })
    .flat();

  const deckFlat: Cards = rawDeck.flat();
  const deck: Cards = shuffleDeck(deckFlat);
  return deck;
}

export function createCard(
  rank: Rank,
  suite: Suite,
  color: Color = "BLUE"
): Card {
  const [key, value] = Object.entries(rank)[0];
  const id: string = `${suite}_${key}_${color}`.toLocaleLowerCase(); // check dinamyc value of "ACE:A = [1, 11]"
  const owner: string = "deck";
  const card: Card = {
    id,
    color,
    suite,
    rank: key,
    score: value,
    show: true,
    owner,
  };

  return card;
}

export function dealCards(toTake: number = 2): void {
  const players: Players = useSelector((state) => state.players);
  players.forEach(({ id }) => takeCards({ playerId: id, toTake }));
}

export function takeCards({
  playerId,
  toTake,
}: {
  playerId: string;
  toTake: number;
}): void {
  for (let i: number = 0; i < toTake; i++) takeCard(playerId);
}

export function takeCard(playerId: string): void {
  const deck = useSelector((state) => state.deck);
  const dispatch = useDispatch();
  const card: Card = deck[deck.length - 1];
  const idCard = card.id;

  dispatch(deletedcard(idCard));
  dispatch(takedCard({ card, playerId }));
}

export function shuffleDeck(deck: Cards): Cards {
  const shuffledDeck: Cards = [];
  const positions: number[] = [];
  const size: number = deck.length;

  let i: number = 0;
  while (i < size) {
    const randomNumber: number = Math.random() * size;
    const roundedNumber: number = Math.floor(randomNumber);
    if (!positions.includes(roundedNumber)) {
      shuffledDeck.push(deck[roundedNumber]);
      positions.push(roundedNumber);
      i++;
    }
  }

  deck.length = 0;
  deck = [...shuffledDeck];
  return deck;
}
