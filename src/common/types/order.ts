import { Product } from "./product"

export type Order = {
  id: number;
  price: number;
  products: Product[]
} 