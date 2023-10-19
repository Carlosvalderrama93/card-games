export type Rank = Record<string, number>;
export type Color = "RED" | "BLUE";
export enum Suite {
  CLUB = "CLUB",
  DIAMOND = "DIAMOND",
  HEART = "HEART",
  SPADE = "SPADE",
}
type Actions = {
  hit: boolean;
  stand: boolean;
  doubleDown: boolean;
  split: boolean;
  surrender: boolean;
};
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
type HandState = { won: boolean; lost: boolean };

export type Cards = Card[];

export type Hand = {
  id: string;
  cards: Cards;
  score: number;
  state: HandState;
};

export type Player = {
  img: string;
  name: string;
  nickname: string;
  score: number;
  id: string;
  hand: Hand;
  actions: Actions;
};

export type Players = Player[];
export type DefaultPlayer = Omit<Player, "id" | "hand">;

export type StartGame = {
  deck: Cards;
  players: Players;
};
