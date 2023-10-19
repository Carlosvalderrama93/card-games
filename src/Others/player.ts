import { DefaultPlayer, Player, Players } from "./allTypes";
import { createHand } from "./cards";

const defaultPlayerConfig: DefaultPlayer = {
  img: "/img/default-avatar.png",
  name: "Player",
  nickname: "Player",
  score: 0,
  actions: {
    hit: false,
    stand: false,
    doubleDown: false,
    split: false,
    surrender: false,
  },
};

export function createPlayer(
  id: number,
  playerConfig: Partial<DefaultPlayer> = defaultPlayerConfig
): Player {
  const rawId: string = `${playerConfig.name}_${id}`;
  const player: Player = {
    ...defaultPlayerConfig,
    ...playerConfig,
    id: rawId,
    hand: createHand(rawId),
  };

  return player;
}

export function createPlayers(totalPlayers: number): Players {
  const players: Players = [];
  for (let i: number = 0; i <= totalPlayers; i++) {
    if (!i) {
      const dealerConfig = {
        name: "Dealer",
        nickname: "Dealer",
      };
      const player: Player = createPlayer(i, dealerConfig);
      players.push(player);
    } else {
      const player: Player = createPlayer(i);
      players.push(player);
    }
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
