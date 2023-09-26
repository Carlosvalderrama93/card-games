export type Rank = Record<string, number>;
export type Color = boolean;
export enum Suite {
  CLUB = "CLUB",
  DIAMOND = "DIAMOND",
  HEART = "HEART",
  SPADE = "SPADE",
}

export type ValidProps = { rank: Rank[]; color: Color; suite: Suite[] };

export type Card = {
  id: string;
  score: number;
  suite: Suite;
  rank: string;
  color: Color;
};

export type Cards = Card[];

export type Hand = { id: string; cards: Cards; score: number };

export type Player = {
  img: string;
  name: string;
  nickname: string;
  score: number;
  id: string;
  hand: Hand;
};

export type Players = Player[];
export type DefaultPlayer = Omit<Player, "id" | "hand">;

export type StartGame = {
  deck: Cards;
  players: Players;
  score: number;
};
