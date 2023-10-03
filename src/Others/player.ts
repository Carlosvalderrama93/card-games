import { DefaultPlayer, Player, Players } from "./allTypes";
import { createHand } from "./cards";

const defaultPlayerConfig: DefaultPlayer = {
  img: "/img/default-avatar.png",
  name: "Player",
  nickname: "Player",
  score: 0,
};

export function createPlayer(
  id: number,
  playerConfig: DefaultPlayer = defaultPlayerConfig
): Player {
  const rawInfo: string = "player_" + id;
  const player: Player = {
    ...defaultPlayerConfig,
    ...playerConfig,
    id: rawInfo,
    hand: createHand(rawInfo),
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

export function updatePlayers(players: Players, quantity: number = 1): void {
  if (players && typeof quantity === "number") {
    for (let i = 0; i < quantity; i++) {
      const newPlayer: Player = createPlayer(i);
      players.push(newPlayer);
    }
  }
}
