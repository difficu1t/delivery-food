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
  name: string;
  price: number;
}