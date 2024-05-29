import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Restaurant } from "../../common/types/restaurant"
import { chooseRestaurant } from "../../utils/chooseRestaurant"
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
          title: "Drinks",
          dishes: [{
            name: "water",
            price: 50
          },
          {
            name: "soda",
            price: 70
          },
          {
            name: "soda",
            price: 70
          },
          {
            name: "soda",
            price: 70
          },
          {
            name: "soda",
            price: 70
          },
          {
            name: "soda",
            price: 70
          },
        ],
          active: true
        },
        {
          title: "Breakfast",
          dishes: [{
            name: "fried eggs",
            price: 150
          }],
          active: false
        },
        {
          title: "Lunch",
          dishes: [{
            name: "lasagna",
            price: 240
          }],
          active: false
        },
        {
          title: "Diner",
          dishes: [{
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