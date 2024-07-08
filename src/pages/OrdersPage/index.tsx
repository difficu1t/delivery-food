import { useTypedSelector } from "../../utils/hooks/useTypedSelector"

const OrdersPage = () => {

  const { orders } = useTypedSelector(state => state.orders)

  return (
    <div>
      <p>id:{orders[0].id}</p>
      <p>price:{orders[0].price}</p>
    </div>
  )
}

export default OrdersPage;