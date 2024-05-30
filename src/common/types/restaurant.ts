export type Restaurant = {
  name: string;
  categories: Category[];
}

export type Category = {
  title: string;
  dishes: Dish[];
  active: boolean;
} 

export type Dish = {
  id: number;
  name: string;
  price: number;
}