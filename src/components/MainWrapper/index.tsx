import SiteHeader from "../SiteHeader"

const MainWrapper = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  )
}

export default MainWrapper;