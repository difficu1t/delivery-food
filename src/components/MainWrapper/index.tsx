import { AppShell, Box, Container, Flex } from "@mantine/core"

const MainWrapper = () => {
  return (
    <AppShell
      header={{ height: "5rem" }}
      aside={{breakpoint: "md", width:"15rem"}}
    >
      <AppShell.Header mx="1.5rem">
        <Container h="5rem" fluid px={0}>
          <Flex
            justify="space-between"
          >
            <Box>Tune Food</Box>
            <Box>You</Box>
          </Flex>
        </Container>
      </AppShell.Header>
      <AppShell.Navbar>
        <div>
          Navbar 
        </div>
      </AppShell.Navbar>
      <AppShell.Aside>
        <div>
          Aside 
        </div>
      </AppShell.Aside>
    </AppShell>
  )
}

export default MainWrapper