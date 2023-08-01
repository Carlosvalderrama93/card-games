export function setHandScore(hand) {
  let score = hand.cards.reduce((score, card) => score + card.value, 0);
  let numberAces = hand.cards.filter((card) => card.rank === "A").length;

  while (numberAces) {
    if (score < 21) break;
    score -= 10;
    numberAces -= 1;
  }

  hand.score = score;
}
