import { configureStore } from "@reduxjs/toolkit";

import deckReducer from "../features/cards/deckSlice";
import playersReducer from "../features/players/playerSlice";

export default configureStore({
  reducer: {
    deck: deckReducer,
    players: playersReducer,
  },
});
