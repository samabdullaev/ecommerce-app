import React from 'react'
import { Link } from 'react-router-dom'

const ProductCardSmall = ({item}) => {
  return (
    <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                        <Link to={`/products/${item.id}`}>
                            <img
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    objectFit: "contain"
                                }} 
                                src={item.image} alt="" />
                        </Link>
                    </figure>
                    
                    <div className="col-md-8 mb-0">
                        <h6>
                            <Link to={`/products/${item.id}`}>{item.title}</Link>
                        </h6>
                        
                    <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{width: `${item.rating.rate * 20}%`}} />
                        </div>
                        <span className="font-small ml-5 text-muted"> ({item.rating.rate})</span>
                    </div>
                    
                        <div className="product-price">
                            <span>${item.price}</span>
                            <span className="old-price">${(item.price + 10).toFixed(2)}</span>
                        </div>
                    </div>
                </article>
  )
}

export default ProductCardSmall