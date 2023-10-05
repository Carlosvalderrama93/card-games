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
    player.hand.cards.forEach((card, index) => {
      card.owner = player.name.toLocaleLowerCase();
      if (player.name === "Dealer" && index === 1)
        player.hand.cards[index].show = false;
    });
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
