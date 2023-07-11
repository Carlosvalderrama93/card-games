function deckUpdater(oldDeck, cards) {
  // oldDeck is an array of objects [].lenght = 48
  // cards is an array of objects [1,3,4,9].lenght = 4 = 4(card.id)
  const cardsIds = cards.map((card) => card.id);
  const validCard = !((card) => cardsIds.some((id) => id === card.id));
  const deckUpdated = oldDeck.filter(validCard);
  return deckUpdated;
}

function getCard(deck, quantity = 1) {
  //const isNumber = (typeof quantity === "number")
  // if(!isNumber) return null;
  const cards = [];
  let i = 0;
  while (i < quantity) {
    cards.push(deck[i]);
    i++;
  }

  const deckUpdated = deckUpdater(deck, cards);

  const result = {
    cards,
    deckUpdated,
  };

  return result;
}

export default getCard;
