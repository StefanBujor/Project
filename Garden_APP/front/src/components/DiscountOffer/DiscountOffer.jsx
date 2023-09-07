import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products_req';
import { Link } from 'react-router-dom';
import s from "./DiscountOffer.module.css"
import ProductsContainer from '../ProductsContainer';

const DiscountOffer = () => {

  const [ checked, setChecked ] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), []);

  const products_state = useSelector(state => state.allProducts);

  const filteredProducts = products_state.filter((el) => el.discont_price !== null);

  const discountOfferProducts = filteredProducts.slice(0, 4)


  return (
    <section className={s.section} >
        <div className={s.title}>
            <h2 className={s.title_name}>Sale</h2>
            <Link className={s.title_button} to="/allsale">All sales</Link>
        </div>
        <ProductsContainer products={discountOfferProducts}/>
    </section>
  )
}

export default DiscountOffer