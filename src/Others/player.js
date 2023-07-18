import { createHand } from "./cards";

export function createPlayer(id, data) {
  const rawInfo = "player_" + id;
  const hand = createHand(rawInfo);
  const player = {
    id: data?.id ?? rawInfo,
    img: data?.img ?? null,
    hand: data?.hand ?? hand,
    name: data?.name ?? rawInfo,
    nickName: data?.nickName ?? rawInfo,
  };

  return player;
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
