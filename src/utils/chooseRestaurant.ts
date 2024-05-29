import { Restaurant } from "../common/types/restaurant"

export const chooseRestaurant = (restaurants: Restaurant[], restaurantName: string) => {
  return restaurants.findIndex(restaurant => restaurant.name === restaurantName);
}
