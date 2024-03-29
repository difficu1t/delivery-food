import { AppShell } from "@mantine/core"
import SiteHeader from "../SiteHeader"

const MainWrapper = ({ children }: { children: React.ReactNode }) => {

  return (
    <AppShell
      header={{ height: "5rem" }}
      // aside={{ breakpoint: "md", width:"15rem" }}
      // navbar={{ breakpoint: "md", width: "15rem" }}
      padding="1.5rem"
    >
      <AppShell.Header px="1.5rem">
        <SiteHeader></SiteHeader>
      </AppShell.Header>
      {/* <AppShell.Navbar>
        <div>
          Navbar 
        </div>
      </AppShell.Navbar>
      <AppShell.Aside>
        <div>
          Aside 
        </div>
      </AppShell.Aside> */}
      <AppShell.Main mih={2500}>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

export default MainWrapper