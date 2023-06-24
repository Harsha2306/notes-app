import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notesSlice";

const store = configureStore({
  reducer: {
    notesReducer: notesSlice.reducer,
  },
});

export default store;
