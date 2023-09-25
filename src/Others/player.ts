import { newHand } from "./cards";
import { Suite } from "./validProps";

export type Card = {
  id: string;
  suite: Suite;
  rank: string;
  score: number;
  color: boolean;
};

export type Cards = Card[];

export type Hand = {
  id: string;
  score: number;
  cards: Cards;
};

export type Player = {
  img: string;
  name: string;
  nickname: string;
  score: number;
  id: string;
  hand: Hand;
};

export type Players = Player[];

export type DefaultPlayerConfig = Omit<Player, "id" | "hand">;

const defaultPlayerConfig: DefaultPlayerConfig = {
  img: "/img/default-avatar.png",
  name: "Anonymous",
  nickname: "",
  score: 0,
};

export function createPlayer(
  id: number,
  playerConfig: Partial<DefaultPlayerConfig> = defaultPlayerConfig
): Player {
  const rawInfo: string = "player_" + id;
  const player: Player = {
    ...defaultPlayerConfig,
    ...playerConfig,
    id: rawInfo,
    hand: newHand(rawInfo),
  };

  return player;
}

export function createPlayers(totalPlayers: number): Players {
  const players: Players = [];
  for (let i: number = 0; i <= totalPlayers; i++) {
    const player: Player = createPlayer(i);
    players.push(player);
  }

  return players;
}

export function updatePlayers(players: Players, quantity: number = 1) {
  if (players && typeof quantity === "number") {
    for (let i: number = 0; i < quantity; i++) {
      const newPlayer: Player = createPlayer(i);
      players.push(newPlayer);
    }
  }
}
