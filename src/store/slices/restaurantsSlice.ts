import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AddOrRemoveToCartActions, Restaurant } from "../../common/types/restaurant"
import { chooseRestaurant } from "../../utils/RestaurantUtils"
import { RestaurantActions } from "../../common/types/restaurantsActions"

export type RestaurantsState = {
  restaurants: Restaurant[]
}

const initialState: RestaurantsState = {
  restaurants: [
    {
      name: "Claude Monet",
      categories: [
        {
          title: "Напитки",
          dishes: [{
            id: 1,
            name: "Вода",
            price: 50,
            inCart: false,
          },
          {
            id: 2,
            name: "Газировка",
            price: 70,
            inCart: false,
          },
          {
            id: 3,
            name: "Сода",
            price: 70,
            inCart: false,
          },
          {
            id: 4,
            name: "Газировка без сахара",
            price: 70,
            inCart: false,
          },
          {
            id: 5,
            name: "Сода без сахара",
            price: 70,
            inCart: false,
          },
        ],
          active: true
        },
        {
          title: "Завтрак",
          dishes: [{
            id: 6,
            name: "fried eggs",
            price: 150,
            inCart: false,
          }],
          active: false
        },
        {
          title: "Обед",
          dishes: [{
            id: 7,
            name: "lasagna",
            price: 240,
            inCart: false,
          }],
          active: false
        },
        {
          title: "Ужин",
          dishes: [{
            id: 8,
            name: "carbonara",
            price: 320,
            inCart: false,
          }],
          active: false
        }
      ]
    }
  ]
}

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: { 
    changeCategory: (state, actions: PayloadAction<RestaurantActions>) => {
      const restaurantIndex = chooseRestaurant(state.restaurants, actions.payload.restaurantName);
      for(const category of state.restaurants[restaurantIndex].categories) {
        if(category.title === actions.payload.categoryTitle) {
          category.active = true;
        } else {
          category.active = false;  
        }
      }
    },
    addToCart: (state, actions: PayloadAction<AddOrRemoveToCartActions>) => {
      const restaurantIndex = chooseRestaurant(state.restaurants, actions.payload.restaurantName);
      state.restaurants[restaurantIndex].categories.map((category, categoryIndex) => {
        category.dishes.map((dish, dishIndex) => {
          if(dish.id === actions.payload.dishID) state.restaurants[restaurantIndex].categories[categoryIndex].dishes[dishIndex].inCart = true;
        })
      })
    },
    removeFromCart: (state, actions: PayloadAction<AddOrRemoveToCartActions>) => {
      const restaurantIndex = chooseRestaurant(state.restaurants, actions.payload.restaurantName);
      state.restaurants[restaurantIndex].categories.map((category, categoryIndex) => {
        category.dishes.map((dish, dishIndex) => {
          if(dish.id === actions.payload.dishID) state.restaurants[restaurantIndex].categories[categoryIndex].dishes[dishIndex].inCart = false;
        })
      })
    }
  }
})

export const { actions } = restaurantsSlice;
export default restaurantsSlice.reducer;