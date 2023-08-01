import { newHand } from "./cards";

const defaultPlayerConfig = {
  img: "/img/default-avatar.png",
  name: "Anonymous",
  nickName: "",
  score: 0,
};

export function createPlayer(id, playerConfig = defaultPlayerConfig) {
  const rawInfo = "player_" + id;
  const newPlayer = {
    ...defaultPlayerConfig,
    ...playerConfig,
    id: rawInfo,
    hand: newHand(rawInfo),
  };

  return newPlayer;
}

export function createPlayers(totalPlayers) {
  const players = [];
  for (let i = 0; i <= totalPlayers; i++) {
    const player = createPlayer(i);
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
