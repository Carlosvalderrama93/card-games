import { createSlice } from "@reduxjs/toolkit";
import { createPlayers } from "../../Others/player";
import { dealCards } from "../../Others/cards";

const initialState = createPlayers(1);

// const { deck, players } = dealCards(rawDeck, rawPlayers, 2)

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer: () => {},
    dealCards: (state, action) => {
      const { cards, players } = action.payload;
      const {  } = dealCards;
    },
  },
});

export default playerSlice.reducer;
export const { addPlayer } = playerSlice.actions;
