import { Product } from "../../common/types/product"
import { IconPlus, IconMinus } from "@tabler/icons-react"
import "./index.css"
import { useCartActions } from "../../utils/hooks/useCartActions"

const QuantityButton = ({ product }: { product: Product }) => {

  const { decreaseQunatity, increaseQuantity } = useCartActions();

  const addProduct = () => {
    increaseQuantity(product.dish.id);
  }

  const removeProduct = () => {
    decreaseQunatity(product.dish.id);
  } 

  return (
    <div className="quantity">
      <div className="quantity__container">
        <button className="quantity__button" onClick={removeProduct}>
          <IconMinus width="1rem" height="1rem" />
        </button>
          {product.quantity}
        <button className="quantity__button" onClick={addProduct}>
          <IconPlus width="1rem" height="1rem" />
        </button>
      </div>
    </div>
  )
}

export default QuantityButton;