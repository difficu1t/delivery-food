import "./index.css"

const Categories = () => {
  
  return (
    <nav className="categories">
      <div className="categories__container">
        <h2 className="categories__title">Меню</h2>
        <ul className="categories__list">
          <li>
            <button className="categories__item categories__item_selected">Item 1</button>
          </li>
          <li>
            <button  className="categories__item">Item 2</button>
          </li>
          <li>
            <button  className="categories__item">Item 3</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Categories;