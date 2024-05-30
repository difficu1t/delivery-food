import { Restaurant } from "../../common/types/restaurant"
import DishesList from "./DishesList"

const Menu = ({ restaurant }: { restaurant: Restaurant }) => {

  return (
    <main className="menuContainer">
      {restaurant.categories.map(category => {
        return <DishesList category={category} key={category.title}/>
      })}
    </main>
  )
}

export default Menu;