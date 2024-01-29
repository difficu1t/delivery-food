import { AppShell } from "@mantine/core"
import SiteHeader from "../SiteHeader"
import { Outlet } from "react-router-dom"

const ShopWrapper = () => {

  return (
    <AppShell
      header={{ height: "5rem" }}
      aside={{ breakpoint: "md", width:"15rem" }}
      navbar={{ breakpoint: "md", width: "15rem" }}
      padding="1.5rem"
    >
      <AppShell.Header px="1.5rem">
        <SiteHeader></SiteHeader>
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
      <AppShell.Main mih={2500}>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  )
}

export default ShopWrapper