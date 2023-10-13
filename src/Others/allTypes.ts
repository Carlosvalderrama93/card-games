export type Rank = Record<string, number>;
export type Color = "RED" | "BLUE";
export enum Suite {
  CLUB = "CLUB",
  DIAMOND = "DIAMOND",
  HEART = "HEART",
  SPADE = "SPADE",
}
export type Show = true | false;

export type ValidProps = {
  rank: Rank[];
  color: Color;
  suite: Suite[];
};

export type Card = {
  id: string;
  rank: string;
  score: number;
  suite: Suite;
  color: Color;
  show: Show;
  owner: string;
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
};
