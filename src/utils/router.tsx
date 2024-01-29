import { createBrowserRouter, Navigate } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Orders from "../pages/Orders"
import ShopWrapper from "../components/ShopWrapper"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "orders",
        element: <Orders />,
      }
    ]
  },
  {
    path: "shop",
    element: <ShopWrapper />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace/>
  }
])