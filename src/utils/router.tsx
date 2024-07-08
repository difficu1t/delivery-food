import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import StorePage from "../pages/StorePage"
import OrdersPage from "../pages/OrdersPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StorePage />,
  },
  {
    path: "/orders",
    element: <OrdersPage />
  }
])