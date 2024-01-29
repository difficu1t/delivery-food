import { Menu, Box, Avatar } from "@mantine/core"
import { useState } from "react"
import MenuItem from "./MenuItem";
import MenuLabel from "./MenuLabel";
import "./index.css"

const ToggleMenu = () => {

  const [ opened, setOpened ] = useState(false);

  window.addEventListener("scroll", () => {
    setOpened(false)
  });

  const closeMenu = () => {
    setOpened(false);
  }

  const openMenu = () => {
    setOpened(true);
  }

  return (
    <Menu opened={opened} onClose={closeMenu} position={"bottom-end"} offset={-70}>
      <Menu.Target>
        <Avatar onClick={openMenu} radius={"xl"}>You</Avatar>
      </Menu.Target>

      <Menu.Dropdown style={{ borderRadius: "2rem" }} p="lg" mt={"lg"}>
        <Box component="div" w="25rem" className="menu-container">
          <MenuLabel nickName="Your NickName" />
          <MenuItem path="/">Мои данные</MenuItem>
          <MenuItem path="/orders">Заказы</MenuItem>
          <MenuItem path="/">Уведомления</MenuItem>
          <MenuItem path="/">Выйти</MenuItem>
        </Box>
      </Menu.Dropdown>
    </Menu>
  )
}

export default ToggleMenu