import { Product } from "./product"

export type OrderActions = {
  products: Product[],
  price: number
}