import { Restaurant } from "../../common/types/restaurant";
import CategoryButton from "./CategoryButton";
import "./index.css"

const Categories = ({ restaurant }: { restaurant: Restaurant }) => {
  
  return (
    <nav className="categories">
      <div className="categories__container">
        <h2 className="categories__title">Меню</h2>
        <ul className="categories__list">
          {restaurant.categories.map(category => {
            return <CategoryButton category={category} restaurant={restaurant} key={category.title}/>
          })} 
        </ul>
      </div>
    </nav>
  )
}

export default Categories;