import { Category } from "../../../common/types/restaurant"
import DishCard from "./DishCard"
import "./index.css"

const DishesList = ({ category }: { category: Category }) => {

  return (
    <div className="dishes">
      <h1 className="dishes__categoryTitle">{category.title}</h1>
      <ul className="dishes__dishesList">
        {category.dishes.map(dish => {
          return <DishCard dish={dish} key={dish.id}/>
        })}
      </ul>
    </div>
  )
}

export default DishesList;