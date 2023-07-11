function getCard(deck, quantity = 1) {
  if (!deck || typeof quantity !== "number") return undefined;
  const toDeliverCards = deck.slice(0, quantity);
  const updatedDeck = deckUpdater(deck, toDeliverCards);
  return {
    toDeliverCards,
    updatedDeck,
  };
}

function deckUpdater(previousDeck, cardsToDelete) {
  const cardsIds = cardsToDelete.map((card) => card.id);
  const preserveCard = (card) => cardsIds.some((id) => !(id === card.id));
  const updatedDeck = previousDeck.filter(preserveCard);
  return updatedDeck;
}
export default getCard;
