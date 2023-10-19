import { Card, Cards, Color, Hand, Players, Rank, Suite } from "./allTypes";
import { handScore } from "./handScore";
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

export function takeCard(rawDeck: Cards): {
  card: Card;
  deck: Cards;
} {
  const deck: Cards = [...rawDeck];
  const card: Card = deck[deck.length - 1];
  deck.pop();
  return { card, deck };
}

export function takeCards(
  rawDeck: Cards,
  toTake: number
): { cards: Cards; deck: Cards } {
  let deck: Cards = [...rawDeck];
  const cards: Cards = [];
  for (let i: number = 0; i < toTake; i++) {
    const { card, deck: uDeck } = takeCard(deck);
    deck = uDeck;
    cards.push(card);
  }

  return { cards, deck };
}

export function dealCards(
  rawDeck: Cards,
  rawPlayers: Players,
  toTake: number = 2
): { deck: Cards; players: Players } {
  const players: Players = [...rawPlayers];
  let deck: Cards = [...rawDeck];
  players.forEach((player) => {
    const { cards, deck: uDeck } = takeCards(deck, toTake);
    player.hand.cards.push(...cards);
    player.hand.cards.forEach((card, index) => {
      card.owner = player.name.toLocaleLowerCase();
      if (player.name === "Dealer" && index === 1)
        player.hand.cards[index].show = false;
    });
    deck = uDeck;
  });

  players.forEach((player) => {
    player.hand.score = handScore(player.hand.cards);
  });

  return { deck, players };
}

export function createHand(id: string): Hand {
  const hand: Hand = {
    id,
    cards: [],
    score: 0,
    state: { won: false, lost: false },
  };
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
