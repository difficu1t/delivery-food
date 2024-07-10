import { useCartActions } from "../../utils/hooks/useCartActions"
import { useTypedSelector } from "../../utils/hooks/useTypedSelector"
import CartItem from "./CartItem"
import SubmitButton from "./SubmitButton";
import "./index.css"

const Cart = () => {

  const { products } = useTypedSelector(state => state.cart);
  const { clearCart } = useCartActions();


  return (
    <div className="cart">
      <div className="cart__container">
        <div>
          <div className="cart__header">
            <h2 className="cart__title">Корзина</h2>
            {products.length
              ? <button className="cart__clear" onClick={() => clearCart()}>Очистить</button>
              : null
            }
          </div>
          {products.map(product => {
            return <CartItem product={product} key={product.dish.id}/>
          })}
        </div>
        {products.length
          ? <SubmitButton products={products} /> 
          : null
        }
      </div>
    </div>
  )
}

export default Cart;