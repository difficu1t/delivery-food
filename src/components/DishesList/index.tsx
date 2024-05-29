import DishCard from "./DishCard"
import "./index.css"

const DishesList = () => {

  const array = [
    {
      name: "First Dish",
      price: 7,
    },
    {
      name: "Second Dish",
      price: 8,
    },
    {
      name: "Third Dish",
      price: 9,
    },
    {
      name: "Third Dish",
      price: 9,
    },
    {
      name: "Third Dish",
      price: 9,
    },
    
  ]

  return (
    <main className="dishes">
      <ul className="dishes__dishesList">
        {array.map(dish => {
          return <DishCard name={dish.name} price={dish.price}></DishCard>
        })}
      </ul>
    </main>
  )
}

export default DishesList;