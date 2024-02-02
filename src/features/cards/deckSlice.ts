import { createSlice } from "@reduxjs/toolkit";
import { createDeck } from "../../Others/cards";

const initialState = createDeck();

const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    deletedcard: (state, action) => {
      const cardId = action.payload;
      return state.filter((card) => card.id !== cardId);
    },
  },
});

export const { deletedcard } = deckSlice.actions;
export default deckSlice.reducer;
