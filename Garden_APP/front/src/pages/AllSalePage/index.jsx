import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products_req';
import ProductsContainer from '../../components/ProductsContainer';
import { filterProductsByPriceAction, sortProductsAction } from '../../store/reducers/allProductsReducer';
import s from './index.module.css'


export default function AllSalePage() {

  
  const [ checked, setChecked ] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), []);

  const products_state = useSelector(state => state.allProducts);
  
  const filteredProducts = products_state.filter((el) => el.discont_price !== null);

  const filter_price = e => {
    e.preventDefault();
    const { min, max } = e.target;
    const min_value = +min.value || 0;
    const max_value = +max.value || Infinity;
    dispatch(filterProductsByPriceAction({ min_value, max_value }));
  }

  const sort = e => dispatch(sortProductsAction((e.target.value)));


  return (
    <div className={s.all_sale_container}>
      <h3>Products with sale</h3>

      <div className={s.filter_container}>
          <div className={s.filter_box}>
            <form onSubmit={filter_price} className={s.form_filter}>
              <button className={s.price_fillter}>Price:</button>
              <input type='number' placeholder='from' name='min' />
              <input type='number' placeholder='to' name='max' />
            </form>
          </div>
          <div className={s.sorted_box}>
            <label>
              <span>Sorted</span>
              <select onInput={sort}>
                <option value='default'>by default</option>
                <option value='title'>by title A-Z</option>
                <option value='price_asc'>by price ASC</option>
                <option value='price_desc'>by price DESC</option>
              </select>
            </label>
          </div>
        </div>
      <ProductsContainer products={filteredProducts} />
    </div>
  )
}
