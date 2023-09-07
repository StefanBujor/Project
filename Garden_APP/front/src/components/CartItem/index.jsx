import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer';

export default function CartItem({ id, title, price, count, image, discont_price }) {

  const dispatch = useDispatch();

  return (
    <div className={s.item}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p>{ title }</p> 
        <div className={s.count_btn}>
        <button onClick={() => dispatch(decrementCountAction(id))}>-</button>
        <p>{ count }</p>
        <button onClick={() => dispatch(incrementCountAction(id))}>+</button>
        </div>
      </div>
      
      <div>
        {discont_price ? 
          <div className={s.price_with_discount}>
            <p>{discont_price * count}$</p>
            </div> :<p className={s.price_withuot_discount}>{ price * count }$</p>} 
      </div>
     
      <p onClick={() => dispatch(deleteFromCartAction(id))} className={s.delete_card_item}>
        X
      </p>
    </div>
  )
}
