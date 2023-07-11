function deckGenerator(rawDataDeck) {
  if (!rawDataDeck) return undefined;
  const { suite, rank, color } = rawDataDeck;
  const areValid = suite && rank && color;
  if (!areValid) return undefined;

  const rawDeck = suite.map((toSuite) => {
    return rank.map((toRank, index) => {
      const id = (toSuite + "_" + index).toLocaleLowerCase();
      const cardRaw = {
        id,
        suite: toSuite,
        rank: toRank,
        color: "blue",
      };
      return cardRaw;
    });
  });

  const flattedDeck = rawDeck.flat();
  return flattedDeck;
}

export default deckGenerator;
