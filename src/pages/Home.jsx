import React, { useState } from 'react'
import Hero from '../components/Hero'
import CategoryFilter from '../components/CategoryFilter'
import FoodCategory from '../components/FoodCategory'

const Home = () => {
  const [category, setCategory] = useState('Salad')

  return (
    <>
    <Hero />
    <CategoryFilter  category={category} setCategory={setCategory} />
    <FoodCategory category={category}/>
    </>
  )
}

export default Home
