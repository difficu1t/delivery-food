import "./index.css"

const DishCard = ({ name, price }: { name: string, price: number }) => {

  return (
    <li className="dishCard">
      <div className="dishCard__container">
        <div style={{ height: "7.5rem" }}>
          <div style={{height:" 7.5rem", width: "12.5rem", backgroundColor: "teal"}} />
        </div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </li>
  ) 
}

export default DishCard;