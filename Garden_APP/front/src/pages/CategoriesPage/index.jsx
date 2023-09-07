// import React from 'react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../requests/categories_req';
import CategoriesContainer from '../../components/CategoriesContainer'
import s from './index.module.css'

export default function CategoriesPage() {
  
  const dispatch = useDispatch();

  useEffect(() => dispatch(getCategories), []);

  const categories_state = useSelector(state => state.allcategories);

  return (
    <div className={s.categories_container}>
      <h2>Categories</h2>
      <CategoriesContainer categories={categories_state}/>
    </div>
  )
}
