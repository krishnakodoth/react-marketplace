import { configureStore } from "@reduxjs/toolkit";
import offersReducer from "./offers-slice";

/**
 * DO NOT MODIFY this
 */

export const store = configureStore({
  reducer: {
    offers: offersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // H