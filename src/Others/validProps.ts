export type Rank = Record<string, number>;
export enum Suite {
  CLUB = "CLUB",
  DIAMOND = "DIAMOND",
  HEART = "HEART",
  SPADE = "SPADE",
}

type ValidProps = {
  rank: Rank[];
  suite: Suite[];
  color: boolean;
};

const validProps: ValidProps = {
  rank: [
    { P: 0 },
    { 2: 2 },
    { 3: 3 },
    { 4: 4 },
    { 5: 5 },
    { 6: 6 },
    { 7: 7 },
    { 8: 8 },
    { 9: 9 },
    { 10: 10 },
    { J: 10 },
    { Q: 10 },
    { K: 10 },
    { A: 11 },
  ],
  suite: [Suite.CLUB, Suite.DIAMOND, Suite.HEART, Suite.SPADE],
  color: true,
};

export default validProps;
