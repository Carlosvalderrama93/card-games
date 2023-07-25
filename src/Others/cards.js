import { setHandScore } from "./handScore";
import validProps from "./validProps";

export function createCard(rawId, rank, suite, color = true) {
  const id = (suite + "_" + rawId).toLocaleLowerCase(); // check dinamyc value of "ACE:A = [1, 11]"
  const [key, value] = Object.entries(rank)[0];
  const card = {
    id,
    value: value,
    suite,
    rank: key,
    color: !color,
  };

  return card;
}

export function createDeck() {
  const { suite: suites, rank: ranks } = validProps;
  const rawDeck = suites.map((suite) => {
    const cards = ranks.map((rank, index) => createCard(index, rank, suite));
    return cards;
  });

  const deckFlat = rawDeck.flat();
  const deck = shuffleDeck(deckFlat);
  return deck;
}

export function eatCard(deck) {
  if (!deck) return undefined;
  const card = deck.pop();
  return card;
}

export function takeCard(player, deck) {
  const card = deck.pop();
  card.rank = "A";
  card.value = 11;
  player.hand.cards.push(card);
}

export function takeCards(player, deck, toTake) {
  for (let i = 0; i < toTake; i++) {
    takeCard(player, deck);
    setHandScore(player.hand);
  }
}

export function dealCards(deck, players, toTake = 1) {
  players.forEach((player) => {
    takeCards(player, deck, toTake);
  });
}

export function newHand(id) {
  const hand = { id, cards: [], score: 0 };
  return hand;
}

export function shuffleDeck(deck) {
  const shuffledDeck = [];
  const positions = [];
  const size = deck.length;

  let i = 0;
  while (i < size) {
    const randomNumber = Math.random() * size;
    const roundedNumber = Math.floor(randomNumber);
    if (positions.includes(roundedNumber)) return undefined;
    shuffledDeck.push(deck[roundedNumber]);
    positions.push[roundedNumber];
    i++;
  }

  deck.length = 0;
  deck = [...shuffledDeck];
  return deck;
}
