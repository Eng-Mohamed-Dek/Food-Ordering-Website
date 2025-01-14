import React, { useContext, useState } from 'react'
import add from '../assets/add_icon_green.png'
import remove from '../assets/remove_icon_red.png'
import { FoodContext } from '../context/FoodContext'

const Foods = ({ image, name, price, id, desc }) => {
  const { cartitem, AddtoCart, removeCart } = useContext(FoodContext)
  // const [count, setCount] = useState(0)

  return (
    <div className="item">
        <img src={image} />
        <div className="item-prices">
            <p>{name}</p>
            <div className="price">{price}</div>
        </div>
        <div>{desc}</div>
            {!cartitem[id] ? 
            <img src={add} className='add' onClick={() => AddtoCart(id)} />
            :
            <div className="item-container">
                <img src={remove} alt="" onClick={() => removeCart(id)} />
                <p>{cartitem[id]}</p>
                <img src={add} onClick={() => AddtoCart(id)}/>
            </div>
            }
    </div>
  )
}

export default Foods