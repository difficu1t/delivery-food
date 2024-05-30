import { Dish, Restaurant } from "../../../../common/types/restaurant"
import { useCartActions } from "../../../../utils/hooks/useCartActions"
import { useRestaurantsActions } from "../../../../utils/hooks/useRestaurantsActions"
import { useTypedSelector } from "../../../../utils/hooks/useTypedSelector"
import QuantityButton from "../../../QuantityButton"
import "./index.css"

const DishCard = ({ dish, restaurant }: { dish: Dish, restaurant: Restaurant }) => {

  const { addProduct } = useCartActions();
  const { addToCart } = useRestaurantsActions();
  const { products } = useTypedSelector(state => state.cart);

  const addDishToCart = () => {
    addProduct(dish);
    addToCart({dishID: dish.id, restaurantName: restaurant.name });
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
          {dish.inCart 
          ? <QuantityButton product={{dish: dish, quantity: 1}} restaurant={restaurant}></QuantityButton>
          : <button className="dishCard__button" onClick={addDishToCart}>+</button>
          }
        </div>
      </div>
    </li>
  ) 
}

export default DishCard;