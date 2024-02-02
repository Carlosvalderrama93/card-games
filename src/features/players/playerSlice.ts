import { createSlice } from "@reduxjs/toolkit";
import { createPlayers } from "../../Others/player";

const initialState = createPlayers(1);

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    takedCard: (state, action) => {
      const { card, playerId } = action.payload;
      const index = state.findIndex(({ id }) => id === playerId);
      const ownerUpdated = state[index].name.toLocaleLowerCase();
      const scoreUpdated = state[index].hand.cards.reduce((acc, curr) => {
        acc + curr.score;
      }, card.score);

      state[index].hand.cards.push({ ...card, owner: ownerUpdated });
      state[index].hand.score = scoreUpdated;
    },
  },
});

export default playerSlice.reducer;
export const { takedCard } = playerSlice.actions;
