import React, { useEffect } from 'react'
import { getSingleProduct } from '../../requests/products_req';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './index.module.css'
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function SingleProductPage() {

  const dispatch = useDispatch();

  const { product_id } = useParams();

  useEffect(() => dispatch(getSingleProduct(product_id)), []);

  const product_state = useSelector(state => state.singleProduct);
  
  let id, image, title, price, description, discont_price;

  if (product_state.length > 0) {
    // Если в массиве есть данные, деструктурируем их
    ({ id, image, title, price, description, discont_price } = product_state[0]);
  } else {
    // Обработка случая, когда массив пуст
    // Можно установить значения по умолчанию или выполнить другую логику
  }


  return (
    <div className={s.single_product_container}>
      <h3>{ title }</h3>
      <div className={s.single_product}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <div>
          <div>
            {discont_price ? 
              <div className={s.price_with_discount}>
                <p>{discont_price}$</p>
                <p>{ price }$</p>
                <p>-{Math.floor(((price - discont_price)/price)*100)}%</p>
              </div> :<p className={s.price_withuot_discount}>{ price }$</p>} 
          </div>
          <div 
          className={s.add_to_cart_btn}
          onClick={() => dispatch(addToCartAction({ id, title, price, image }))}
          >
            Add to cart
          </div>
          <p>Description</p>
          <p>{ description }</p>
        </div>
      </div>
    </div>
    
  )
}
