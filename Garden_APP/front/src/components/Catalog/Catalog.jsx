// import React, { useEffect } from 'react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../requests/categories_req';
import { Link } from 'react-router-dom';
import s from "./Catalog.module.css"
import CategoriesContainer from '../CategoriesContainer/';

const Catalog = () => {

    const dispatch = useDispatch();

    useEffect(() => dispatch(getCategories), []);
  
    const categories_state = useSelector(state => state.allcategories);

    const catalogCategories = categories_state.slice(0, 4);

    return (
        <section className={s.section}>
        <div className={s.title}>
            <h2 className={s.title_name}>Catalog</h2>
            <Link className={s.title_button} to="/categories">All categories</Link>
        </div>
        <CategoriesContainer categories={catalogCategories}/>
        </section>
    );
    };

export default Catalog;