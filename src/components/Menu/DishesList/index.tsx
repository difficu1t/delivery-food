import { Category, Restaurant } from "../../../common/types/restaurant"
import DishCard from "./DishCard"
import "./index.css"

const DishesList = ({ category, restaurant }: { category: Category, restaurant: Restaurant }) => {

  return (  
    <div className="dishes" id={`${category.title}`}>
    <h1 className="dishes__categoryTitle">{category.title}</h1>
      <ul className="dishes__dishesList" id={`${category.title}`}>
        {category.dishes.map(dish => {
          return <DishCard dish={dish} restaurant={restaurant} key={dish.id}/>
        })}
      </ul>
    </div>
  )
}

export default DishesList;