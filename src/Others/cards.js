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

  const deck = rawDeck.flat();
  return deck;
}
export function createHand(id) {
  const hand = { id, cards: [] };
  return hand;
}
