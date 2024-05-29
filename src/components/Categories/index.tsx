import { Restaurant } from "../../common/types/restaurant";
import Category from "./Category";
import "./index.css"

const Categories = ({ restaurant }: { restaurant: Restaurant }) => {
  
  return (
    <nav className="categories">
      <div className="categories__container">
        <h2 className="categories__title">Меню</h2>
        <ul className="categories__list">
          {restaurant.categories.map(category => {
            return <Category category={category} restaurant={restaurant}/>
          })} 
        </ul>
      </div>
    </nav>
  )
}

export default Categories;