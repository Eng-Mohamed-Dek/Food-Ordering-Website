import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext'

const CategoryFilter = ({setCategory, category}) => {
  const { menu_list } = useContext(FoodContext)
  
  return (
    <div className='category-changer'>
        {menu_list.map((item, index) => (
            <div className="changer" onClick={() => setCategory(item.menu_name)}>
                <img className={`${category === item.menu_name && 'active'}`} src={item.menu_image} />
                <p>{item.menu_name}</p>
            </div>
        ))}
    </div>
  )
}

export default CategoryFilter