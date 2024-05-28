import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StorePage from "../pages/StorePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StorePage />,
  }
])