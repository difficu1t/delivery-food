import { Box, Button, Container, Flex } from "@mantine/core"
import { Link, useNavigate } from "react-router-dom"
import ToggleMenu from "../ToggleMenu"

const SiteHeader = () => {

  const navigate = useNavigate();

  return (
    <Container h="5rem" fluid px={0}>
      <Flex
        mih="5rem"
        justify="space-between"
        align="center"
      >
        <Box onClick={() => navigate("/")}>Tune Food</Box>
        <Box>
          <Flex>
            <Link to="/orders">
              <Button color="orange" mx="1.5rem">
                Заказы
              </Button>
            </Link>
            <ToggleMenu></ToggleMenu>
          </Flex>
        </Box>
      </Flex>
    </Container>
  )
}

export default SiteHeader