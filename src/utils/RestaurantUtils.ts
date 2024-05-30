import { Product } from "../common/types/product"
import { Restaurant } from "../common/types/restaurant"

export const chooseRestaurant = (restaurants: Restaurant[], restaurantName: string) => {
  return restaurants.findIndex(restaurant => restaurant.name === restaurantName);
}

export const chooseProduct = (products: Product[], productID: number) => {
  return products.findIndex(product => product.dish.id === productID);
}
