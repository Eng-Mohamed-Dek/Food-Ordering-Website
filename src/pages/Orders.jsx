import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext'

const Orders = () => {
  const  { food_list, cartitem } = useContext(FoodContext)

  return (
    <div className="product">
      <div className="product-item">
      {food_list.map((food) => {
        if(cartitem[food._id]) {
          return (
          <div className="item">
            <img src={food.image} />
            <div className="item-prices">
              <p>{food.name}</p>
            </div>
            <div>{food.desc}</div>
          </div>
          )
        }
    })}
      </div>
    </div>
  )
}

export default Orders