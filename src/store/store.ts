import { configureStore } from "@reduxjs/toolkit"
import restaurantsReducer from "./slices/restaurantsSlice"

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
  },
  devTools: true
}) 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

