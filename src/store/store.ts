import { configureStore } from "@reduxjs/toolkit"
import restaurantsReducer from "./slices/restaurantsSlice"
import cartReducer from "./slices/cartSlice"
import ordersReducer from "./slices/ordersSlice"

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
  devTools: true
}) 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

