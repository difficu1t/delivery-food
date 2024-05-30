import { Dish } from "../../../../common/types/restaurant"
import { useCartActions } from "../../../../utils/hooks/useCartActions"
import "./index.css"

const DishCard = ({ dish }: { dish: Dish }) => {

  const { addProduct } = useCartActions();

  const addDishToCart = () => {
    addProduct(dish);
  }

  return (
    <li className="dishCard">
      <div>
        <div style={{ height: "8.5rem", width: "12.5rem" }}>
          <div style={{height:" 8.5rem", width: "12.5rem", backgroundColor: "lightGray"}} />
        </div> 
        <div className="description">
          <div className="info">
            <div className="info__name">{dish.name}</div>
            <div className="info__price">{dish.price}₽</div>
          </div>
          <button className="dishCard__button" onClick={addDishToCart}>+</button>
        </div>
      </div>
    </li>
  ) 
}

export default DishCard;