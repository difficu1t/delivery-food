import { Product } from "../../common/types/product"
import { IconPlus, IconMinus } from "@tabler/icons-react"
import { useCartActions } from "../../utils/hooks/useCartActions"
import { useEffect, useState } from "react"
import { useTypedSelector } from "../../utils/hooks/useTypedSelector"
import { chooseProduct } from "../../utils/RestaurantUtils"
import { useRestaurantsActions } from "../../utils/hooks/useRestaurantsActions"
import { Restaurant } from "../../common/types/restaurant"
import "./index.css"

const QuantityButton = ({ product, restaurant }: { product: Product, restaurant: Restaurant }) => {

  const { decreaseQunatity, increaseQuantity } = useCartActions();
  const { removeFromCart } = useRestaurantsActions();
  const [ quantity, setQuantity ] = useState(product.quantity);
  const { products } = useTypedSelector(state => state.cart);

  const addProduct = () => {
    increaseQuantity(product.dish.id);
  }

  const removeProduct = () => {
    decreaseQunatity(product.dish.id);
  } 

  useEffect(() => {
    products.map((cartProduct) => { if(cartProduct.dish.id === product.dish.id) setQuantity(cartProduct.quantity) }); 
    if(chooseProduct(products, product.dish.id) === -1) {
      removeFromCart({ dishID: product.dish.id, restaurantName: restaurant.name })
    }
  }, [product])

  return (
    <div className="quantity">
      <div className="quantity__container">
        <button className="quantity__button" onClick={removeProduct}>
          <IconMinus width="1rem" height="1rem"/>
        </button>
          {quantity}
        <button className="quantity__button" onClick={addProduct}>
          <IconPlus width="1rem" height="1rem"/>
        </button>
      </div>
    </div>
  )
}

export default QuantityButton;