import React from 'react';
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {

  const { id, image, title } = category

  return (
    <Link to={`/categories/${id}`}>    
      <div className={s.card}>

        <img src={ `http://localhost:3333${image}` } alt={ title } />
        <p>{ title }</p>
      </div>
    </Link>

  )
}
