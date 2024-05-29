import { useTypedSelector } from "../../utils/hooks/useTypedSelector"
import Cart from "../Cart"
import Categories from "../Categories"
import DishesList from "../DishesList"
import "./index.css"

const StoreContent = () => {

  const { restaurants } = useTypedSelector(state => state.restaurants);

  return (
    <div>
      <div className="content">
        <Categories restaurant={restaurants[0]}/>
        {/* 70rem - 1920, 41.5rem 1920< */}
        <DishesList />
        <Cart />
      </div>
      <footer style={{height: "700px", backgroundColor: "gray"}}>
        Footer
      </footer>
    </div>
  )
}

export default StoreContent;