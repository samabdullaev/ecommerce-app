import React from 'react'
import { Link } from 'react-router-dom'
import ProductTag from './ProductTag'

const ProductCard = ({item, index, openQuickView, type="grid"}) => {
  return type==="grid" ? (
    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div 
                    className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" 
                    data-wow-delay={`.${index}s`}
                >
                  <div className="product-img-action-wrap">
                    <div 
                        className="product-img product-img-zoom"
                    >
                    <Link 
                        to={`/products/${item.id}`}
                        style={{
                            height: '200px'
                        }}
                    >
                        <img style={{
                            height: '100%',
                            objectFit: 'contain'
                        }} className="default-img" src={item.image} alt="" />
                        <img style={{
                            height: '100%',
                            objectFit: 'contain'
                        }} className="hover-img" src={item.image} alt="" />
                      </Link>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                      <a onClick={openQuickView} aria-label="Quick view" className="action-btn"><i className="fi-rs-eye" /></a>
                    </div>
                    
                    {index % 6 !== 0 && (
                        <ProductTag type={index%2===0 ? 'Hot' : index%3===0 ? "Sale" : index%5===0 ? "New" : "-10%"} />
                    )}
                  
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Snack</a>
                    </div>
                    <h2><Link to={`products/${item.id}`}>{item.title}</Link></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: `${item.rating.rate * 20}%`}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> ({item.rating.rate})</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>${item.price}</span>
                        <span className="old-price">${(item.price+10).toFixed(2)}</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  ) :
  (
    <div className="product-cart-wrap" data-wow-delay={`.${index}s`}>
  <div 
    className="product-img-action-wrap"
    style={{
      width: "200px!important",
      overflow: "visible"
    }}
  >
    <div className="product-img product-img-zoom">
      <div 
        // className="product-img-inner"
        style={{
          height: "300px",
          width: "220px",
          // background: "yellow"
        }}
      >
        <Link 
          to={`/products/${item.id}`}
          style={{
            height: "100%",
            width: "100%"
          }}
        >
          <img style={{
            height: "300px",
            width: "220px",
            objectFit: "contain"
          }} className="default-img" src={item.image} alt="" />
          <img style={{
            height: "100%",
            width: "100%",
            objectFit: "contain"
          }} className="hover-img" src={item.image} alt="" />
        </Link>
      </div>
    </div>
    <div className="product-action-1">
      <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
      <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
      <a aria-label="Quick view" className="action-btn" onClick={openQuickView}><i className="fi-rs-eye" /></a>
    </div>
    {index % 6 !== 0 && (
                        <ProductTag type={index%2===0 ? 'Hot' : index%3===0 ? "Sale" : index%5===0 ? "New" : "-10%"} />
                    )}
  </div>
  <div className="product-content-wrap">
    <div className="product-category uppercase">
      <a>{item.category.replaceAll('-', ' ')}</a>
    </div>
    <h2><Link to={`/products/${item.id}`}>{item.title}</Link></h2>
    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: `${item.rating.rate * 20}%`}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> ({item.rating.rate})</span>
                    </div>
    <p className="mt-15 mb-15">{item.description}</p>
    <div className="product-price">
      <span>${item.price}</span>
      <span className="old-price">${(item.price + 10).toFixed(2)}</span>
    </div>
    <div className="mt-30">
      <a aria-label="Buy now" className="btn" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add to Cart</a>
      <a href="#" className="add-wishlish ml-30 text-body font-sm font-heading font-weight-bold"><i className="fi-rs-shuffle mr-5" />Add Compare</a>
    </div>
  </div>
</div>

  )
}

export default ProductCard