import React, { useState } from 'react'
import CategoryFilter from '../components/filter/CategoryFilter'
import AttributeFilter from '../components/filter/AttributeFilter'
import SortByFilter from '../components/filter/SortByFilter'
import BreadcrumbFilter from '../components/filter/BreadcrumbFilter'
import productsData from '../data/products.data'
import ProductCard from '../components/ProductCard'

const FilterPage = () => {
  const [type, setType] = useState('grid');
  const [qty, setQty] = useState(10);
  return (
    <main className="main">
      <BreadcrumbFilter />
  <div className="container mb-30">
    <div className="row flex-row-reverse">
      <div className="col-lg-4-5">
        <SortByFilter type={type} setType={setType} qty={qty} setQty={setQty} productsQty={productsData.length} />
        <div className="row product-grid">
          {
            productsData.slice(0, qty).map((item, index) => (
              <div 
                key={index} 
                className={type==="list" ? `product-list` : `col-lg-3 col-md-4 col-12 col-sm-6 d-none d-xl-block`}
              >
              <ProductCard item={item} index={index} type={type} />
              </div>
            ))
          }
        </div>
        {/* <Pagination /> */}
      </div>
      <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
        <CategoryFilter />
        <AttributeFilter />
      </div>
    </div>
  </div>
</main>

  )
}

export default FilterPage