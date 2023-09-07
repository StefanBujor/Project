import React from 'react'
import Banner from '../../components/Banner/Banner'
import Catalog from '../../components/Catalog/Catalog'
import GetDiscount from '../../components/GetDiscount/GetDiscount'
import DiscountOffer from '../../components/DiscountOffer/DiscountOffer'

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Catalog />
      <GetDiscount />
      <DiscountOffer />
    </div>
  )
}
