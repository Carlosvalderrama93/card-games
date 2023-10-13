import { Cards } from "./allTypes";

export function handScore(rawCards: Cards, show: boolean = false): number {
  const cards: Cards = [...rawCards];
  if (show) cards.forEach((card) => (card.show = true));
  const validCards: Cards = cards.filter((card) => card.show === true);
  let score: number = validCards.reduce((ac, cv) => ac + cv.score, 0);
  let numberAces: number = cards.filter((card) => card.rank === "A").length;

  while (numberAces) {
    if (score <= 21) break;
    score -= 10;
    numberAces -= 1;
  }

  return score;
}
