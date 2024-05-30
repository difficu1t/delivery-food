import { useTypedSelector } from "../../utils/hooks/useTypedSelector"
import CartItem from "./CartItem";
import "./index.css"

const Cart = () => {

  const { products } = useTypedSelector(state => state.cart);

  return (
    <div className="cart">
      <div className="cart__container">
        <h2 className="cart__title">Корзина</h2>
        {products.map(product => {
          return <CartItem product={product} key={product.dish.id}/>
        })}
      </div>
    </div>
  )
}

export default Cart;