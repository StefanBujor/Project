import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import CartIcon from '../../Icons/CartIcon'
import LogoImg from '../../assets/logo.svg'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
        <div className={s.logo_container}>
        <Link to='/'><img src={LogoImg} alt="Logo" /></Link>
        <Link to='/categories' className={s.catalog_btn}>Catalog</Link>
        </div>
        <div className={s.nav_container}>
        <Link to='/'>Main Page</Link>
        <Link to='/products'>All products</Link>
        <Link to='/allsale'>All sales</Link>
        <Link to='/cart' className={s.cart_icon}><CartIcon /></Link>
        </div>
    </div>
  )
}
