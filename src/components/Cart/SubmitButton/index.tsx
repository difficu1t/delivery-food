import { useMemo, useState } from "react"
import { Product } from "../../../common/types/product"
import { useOrdersActions } from "../../../utils/hooks/useOrdersActions"
import { useNavigate } from "react-router-dom"
import "./index.css"

const SubmitButton = ({ products }: { products: Product[] }) => {

  const [ orderPrice, setOrderPrice] = useState<number>(0);
  const { createOrder } = useOrdersActions();
  const navigate = useNavigate();

  useMemo(() => {
    setOrderPrice(products.reduce((price, product) => price + product.dish.price * product.quantity, 0));
  }, [products])
  
  const submitOrder = () => {
    navigate("/orders");
    createOrder({products, price: orderPrice});
  }

  return (
    <div className="submit">
      <button className="submit__button" onClick={submitOrder}>
        <span className="submit__text">Заказать</span>
        <span className="submit__price">{orderPrice}₽</span>
      </button>
    </div>
  )
}

export default SubmitButton;