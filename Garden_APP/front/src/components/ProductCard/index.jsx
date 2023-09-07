import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function ProductCard({ id, image, title, price, discont_price }) {

  const dispatch = useDispatch();

  return (
    <div className={s.card}>
      <Link to={`/products/${id}`}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <div>
            {discont_price ? 
              <div className={s.price_with_discount}>
                <p>{discont_price}$</p>
                <p>{ price }$</p>
                <p>-{Math.floor(((price - discont_price)/price)*100)}%</p>
              </div> :<p className={s.price_withuot_discount}>{ price }$</p>} 
          </div>
        <p>{ title }</p>
      </Link>
      <div 
        className={s.add_to_cart_btn}
        onClick={() => dispatch(addToCartAction({ id, image, title, price, discont_price }))}
      >
        Add to cart
      </div>
    </div>
  )
}
