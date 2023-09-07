import React from 'react'
import CategoryCard from '../CategoryCard';
import s from './index.module.css'

export default function CategoriesContainer({categories}) {

  return (
    <div className={s.categories_container}>
      
      <div className={s.container_box}>
        {
          categories.map((el, index) => <CategoryCard key={index} category={el} />)
        }
      </div>
    </div>
  )
}         
