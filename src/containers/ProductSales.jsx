import React from 'react'
import ProductCardSmall from '../components/ProductCardSmall'

const ProductSales = ({title, data}) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
                <h4 className="section-title style-1 mb-30 animated animated">{title}</h4>
                <div className="product-list-small animated animated">
                  {data.map((item, index) => (
                    <ProductCardSmall key={index} item={item} />
                  ))}
                </div>
              </div>
  )
}

export default ProductSales