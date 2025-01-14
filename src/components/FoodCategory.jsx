import React, { useContext } from 'react'
import Foods from './Foods'
import { FoodContext } from '../context/FoodContext'

const FoodCategory = ({ category }) => {
  const { food_list } = useContext(FoodContext)

  return (
    <div className="product">
        <div className="product-item">
            {food_list.map((food) => {
                if(category === food.category) {
                  return <Foods name={food.name}  price={food.price} id={food._id} image={food.image} desc={food.desc}/>
                }
            })}
        </div>
    </div>
  )
}

export default FoodCategory