export type Hand = {
  id: number;
  cards: Card[];
  score: number;
};

export type Card = {
  id: string;
  value: number;
  suite: string;
  rank: string;
  color: boolean;
};

export function setHandScore(hand: Hand): void {
  let score: number = hand.cards.reduce((score, card) => score + card.value, 0);
  let numberAces: number = hand.cards.filter(
    (card) => card.rank === "A"
  ).length;

  while (numberAces) {
    if (score < 21) break;
    score -= 10;
    numberAces -= 1;
  }

  hand.score = score;
}
