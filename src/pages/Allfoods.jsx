import React, { useContext } from 'react'
import Foods from '../components/Foods'
import { FoodContext } from '../context/FoodContext'

const Allfoods = () => {
  const { food_list } = useContext(FoodContext)

  return (
    <div className="product">
      <div className="product-item">
        {food_list.map((food) => {
          return <Foods name={food.name} price={food.price} id={food._id} image={food.image} desc={food.desc} />
        })}
      </div>
    </div>
  )
}

export default Allfoods