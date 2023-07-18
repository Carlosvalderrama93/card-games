import validProps from "./validProps";

export function createCard(rawId, rank, suite, color = "BLUE") {
  const id = (suite + "_" + rawId).toLocaleLowerCase();
  const card = {
    id,
    rank,
    suite,
    color,
  };

  return card;
}
export function takeCard(deck) {
  if (!deck) return undefined;
  const card = deck.pop();
  return card;
}
export function dealCards(deck, players, toTake = 1) {
  players.forEach((player) => {
    drawCards(player, deck, toTake);
  });
}
export function drawCard(player, deck) {
  const card = deck.pop();
  player.hand.cards.push(card);
}
export function drawCards(player, deck, toTake) {
  for (let i = 0; i < toTake; i++) {
    drawCard(player, deck);
  }
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
export function createHand(id) {
  const hand = { id, cards: [] };
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
