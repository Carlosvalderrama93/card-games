import cardCreator from "./cardCreator";
import validProps from "./validProps";

function deckGenerator() {
  const { suite: suites, rank: ranks } = validProps;
  const rawDeck = suites.map((suite) => {
    const cards = ranks.map((rank, index) => cardCreator(index, rank, suite));
    return cards;
  });

  const deck = rawDeck.flat();
  return deck;
}

export default deckGenerator;
