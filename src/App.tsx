import { RouterProvider } from "react-router-dom"
import CustomThemeProvider from "./components/CustomThemeProvider"
import { router } from "./utils/router"


function App() {

  return (
    <CustomThemeProvider>
      <RouterProvider router={router}/>
    </CustomThemeProvider>
  )
}

export default App
