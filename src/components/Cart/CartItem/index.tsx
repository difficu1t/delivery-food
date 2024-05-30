import { Product } from "../../../common/types/product"
import QuantityButton from "../../QuantityButton";
import "./index.css"

const CartItem = ({ product }: { product: Product }) => {

  return (
    <div className="product">
      <div className="product__image">
        
      </div>
      <div className="product__info">
        <div className="product__name">{product.dish.name}</div>
        <QuantityButton product={product}></QuantityButton>
      </div>
      <div className="product__price">
        {product.dish.price * product.quantity}₽
      </div>
    </div>
  )
}

export default CartItem;