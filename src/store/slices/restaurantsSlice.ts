import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Restaurant } from "../../common/types/restaurant"
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
            price: 50
          },
          {
            id: 2,
            name: "Газировка",
            price: 70
          },
          {
            id: 3,
            name: "Сода",
            price: 70
          },
          {
            id: 4,
            name: "Газировка без сахара",
            price: 70
          },
          {
            id: 5,
            name: "Сода без сахара",
            price: 70
          },
        ],
          active: true
        },
        {
          title: "Завтрак",
          dishes: [{
            id: 6,
            name: "fried eggs",
            price: 150
          }],
          active: false
        },
        {
          title: "Обед",
          dishes: [{
            id: 7,
            name: "lasagna",
            price: 240
          }],
          active: false
        },
        {
          title: "Ужин",
          dishes: [{
            id: 8,
            name: "carbonara",
            price: 320
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
    } 
  }
})

export const { actions } = restaurantsSlice;
export default restaurantsSlice.reducer;