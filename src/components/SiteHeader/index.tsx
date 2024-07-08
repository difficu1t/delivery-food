import { IoCartOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import "./index.css"

const SiteHeader = () => {
  const navigate = useNavigate()
  return (
    <header className="header">
      <div>
        Food Delivery
      </div>
      <button className="header__button" onClick={() => navigate("/orders")}>
        <IoCartOutline size={30}/>
        <span>Заказы</span>  
      </button>
    </header>
  )
}

export default SiteHeader;