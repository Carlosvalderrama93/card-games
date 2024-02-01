import { createSlice } from "@reduxjs/toolkit";
import { createDeck } from "../../Others/cards";

const initialState = createDeck();

const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    takecard: (state, payload) => {
      debugger;
    },
  },
});

export const { takecard } = deckSlice.actions;
export default deckSlice.reducer;
