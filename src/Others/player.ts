import { newHand } from "./cards";
import { Hand } from "./handScore";

type Player = {
  id: string | null;
  img: string;
  hand: Hand[];
  name: string;
  nickName: string;
  score: number;
};

type DefaultPlayerConfig = Omit<Player, "id" | "hand">;

const defaultPlayerConfig: DefaultPlayerConfig = {
  img: "/img/default-avatar.png",
  name: "Anonymous",
  nickName: "",
  score: 0,
};

export function createPlayer(
  id: number,
  playerConfig: Partial<DefaultPlayerConfig> = defaultPlayerConfig
): Player {
  const rawInfo: string = "player_" + id;
  const newPlayer: Player = {
    ...defaultPlayerConfig,
    ...playerConfig,
    id: rawInfo,
    hand: newHand(rawInfo),
  };

  return newPlayer;
}

export function createPlayers(totalPlayers: number) {
  const players: Player[] = [];
  for (let i = 0; i <= totalPlayers; i++) {
    const player: Player = createPlayer(i);
    players.push(player);
  }

  return players;
}

export function updatePlayers(players, quantity = 1) {
  if (!players || typeof quantity !== "number") return undefined;
  for (let i = 0; i < quantity; i++) {
    const newPlayer = createPlayer();
    players.push(newPlayer);
  }
}
