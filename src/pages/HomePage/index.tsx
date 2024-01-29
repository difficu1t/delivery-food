import { Outlet } from "react-router-dom"
import MainWrapper from "../../components/MainWrapper"

const HomePage = () => {
  return (
    <MainWrapper>
        <Outlet />
    </MainWrapper>
  )
}

export default HomePage