import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Order } from "../../common/types/order"
import { OrderActions } from "../../common/types/orderActions"

export type OrdersState = {
  orders: Order[]
}

const initialState: OrdersState = {
  orders: []
}

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createOrder: (state, actions: PayloadAction<OrderActions>) => {
      state.orders.push({
        id: Date.now(),
        price: actions.payload.price,
        products: actions.payload.products
      })
    }
  }
})

export const { actions } = ordersSlice;
export default ordersSlice.reducer;