import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "../../common/types/product"
import { chooseProduct } from "../../utils/RestaurantUtils"
import { Dish } from "../../common/types/restaurant"

export type CartState = {
  products: Product[]
}

const initialState: CartState = {
  products: [
    
  ]
}

const cartSlice = createSlice({ 
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, actions: PayloadAction<Dish>) => { 
      state.products.push({dish: actions.payload, quantity: 1});
    },
    increaseQuantity: (state, actions: PayloadAction<number>) => {
      const productIndex = chooseProduct(state.products, actions.payload);
      state.products[productIndex].quantity += 1;
    },
    decreaseQunatity: (state, actions: PayloadAction<number>) => {
      const productIndex = chooseProduct(state.products, actions.payload);
      state.products[productIndex].quantity > 1 
      ? state.products[productIndex].quantity -= 1
      : state.products.splice(productIndex, 1);
    } 
  }
})

export const { actions } = cartSlice;
export default cartSlice.reducer;