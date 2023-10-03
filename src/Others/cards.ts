import {
  Card,
  Cards,
  Color,
  Hand,
  Player,
  Players,
  Rank,
  Suite,
} from "./allTypes";
import { setHandScore } from "./handScore";
import validProps from "./validProps";

export function createCard(
  rawId: number,
  rank: Rank,
  suite: Suite,
  color: Color = "BLUE"
): Card {
  const id: string = `${suite}_${rawId}_${color}`.toLocaleLowerCase(); // check dinamyc value of "ACE:A = [1, 11]"
  const [key, value] = Object.entries(rank)[0];
  const card: Card = {
    id,
    color,
    suite,
    rank: key,
    score: value,
  };

  return card;
}

export function createDeck(): Cards {
  const { suite: suites, rank: ranks } = validProps;
  const rawDeck: Cards = suites
    .map((suite) => {
      const cards: Cards = ranks.map((rank, index) =>
        createCard(index, rank, suite)
      );
      return cards;
    })
    .flat();

  const deckFlat: Cards = rawDeck.flat();
  const deck: Cards = shuffleDeck(deckFlat);
  return deck;
}

export function eatCard(deck: Cards): Card | void {
  const card: Card | undefined = deck.pop();
  if (card) return card;
}

export function takeCard(player: Player, deck: Cards): void {
  const card: Card | undefined = deck.pop();
  if (card) player.hand.cards.push(card);
}

export function takeCards(player: Player, deck: Cards, toTake: number): void {
  for (let i: number = 0; i < toTake; i++) {
    takeCard(player, deck);
    setHandScore(player.hand);
  }
}

export function dealCards(
  deck: Cards,
  players: Players,
  toTake: number = 2
): void {
  players.forEach((player) => {
    takeCards(player, deck, toTake);
  });
}

export function createHand(id: string): Hand {
  const hand: Hand = { id, cards: [], score: 0 };
  return hand;
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
