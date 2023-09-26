import React, { useEffect, useState } from 'react'
import { getProductsByCategory } from '../../requests/products_req'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductsContainer from '../../components/ProductsContainer';
import { filterProductsByPriceAction, getDiscountProductsAction, sortProductsAction } from '../../store/reducers/allProductsReducer';
import s from './index.module.css'

export default function ProductsByCategoryPage() {

  const [ checked, setChecked ] = useState(false);

  const { category } = useParams();
  const dispatch = useDispatch();
  const productsByCategory = useSelector(state => state.productsByCategory);

  useEffect(() => {
    dispatch(getProductsByCategory(category))
  }, [category])


  const filter_price = e => {
    e.preventDefault();
    const { min, max } = e.target;
    const min_value = +min.value || 0;
    const max_value = +max.value || Infinity;
    dispatch(filterProductsByPriceAction({ min_value, max_value }));
  }

  const sort = e => dispatch(sortProductsAction((e.target.value)));

  const handleClick = e => dispatch(getDiscountProductsAction(e.target.checked));

  const handleChange = () => setChecked(!checked);

  return (
    <div className={s.product_bycategory_container}>
      <h3>{productsByCategory.category.title}</h3>
      <div className={s.filter_container}>
          <div className={s.filter_box}>
            <form onSubmit={filter_price} className={s.form_filter}>
              <button className={s.price_fillter}>Price:</button>
              <input type='number' placeholder='from' name='min' />
              <input type='number' placeholder='to' name='max' />
            </form>
          </div>
          <div className={s.ceck_box}>
            <label>
              <span>Discounted items</span>
              <input type='checkbox' onClick={handleClick} checked={checked} onChange={handleChange} />
            </label>
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
      <ProductsContainer products={productsByCategory.data} />
    </div>
  )
}
