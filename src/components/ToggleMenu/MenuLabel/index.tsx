import { Avatar, Flex, Menu } from "@mantine/core"

type Props = {
  nickName: string
}

const MenuLabel = ({ nickName }: Props) => {

  return (  
    <Menu.Label>
      <Flex
        justify="space-between"
        align="center"
      >
        <h1 className="menu-label">{nickName}</h1> 
        <Avatar>You</Avatar>
      </Flex>
    </Menu.Label>
  )
}

export default MenuLabel