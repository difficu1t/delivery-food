import { Menu } from "@mantine/core"
import { Link } from "react-router-dom"

type Props = {
  children: string,
  path: string
}

const MenuItem = ({ children, path }: Props) => {

  return (  
    <Link to={path} className="menu-item-container">
      <Menu.Item>
        <h2 className="menu-item">
          {children}
        </h2>
      </Menu.Item>
    </Link>
  )
}

export default MenuItem