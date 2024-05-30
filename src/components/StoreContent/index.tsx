import { useTypedSelector } from "../../utils/hooks/useTypedSelector"
import Cart from "../Cart"
import Categories from "../Categories"
import Menu from "../Menu"  
import "./index.css"

const StoreContent = () => {

  const { restaurants } = useTypedSelector(state => state.restaurants);

  return (
    <div>
      <div className="content">
        <Categories restaurant={restaurants[0]}/>
        <Menu restaurant={restaurants[0]}/>
        <Cart />
      </div>
      <footer style={{height: "300px", backgroundColor: "white", borderTop: "1px solid lightgray"}}>
        Footer
      </footer>
    </div>
  )
}

export default StoreContent;