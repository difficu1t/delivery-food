import Categories from "../Categories"
import "./index.css"

const StoreContent = () => {

  return (
    <div>
      <div className="content">
        <Categories />
        {/* 70rem - 1920, 41.5rem 1920< */}
        <main style={{height: "3000px", width: "41.5rem"}}>
          Content
        </main>
        <aside style={{width: "20rem"}}>
          SideBar
        </aside>
      </div>
      <footer style={{height: "700px"}}>
        Footer
      </footer>
    </div>
  )
}

export default StoreContent;