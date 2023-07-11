function deckGenerator(data) {
  const rawDeck = data.suite.map((toSuite) => {
    return data.rank.map((toRank, index) => {
      const cardRaw = {
        id: toSuite + index,
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
