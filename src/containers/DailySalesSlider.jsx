import React from 'react'

const DailySalesSlider = () => {
  return (
    <section className="section-padding pb-5">
      <div className="container">
        <div className="section-title wow animate__animated animate__fadeIn">
          <h3 className>Daily Best Sells</h3>
          <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="nav-tab-one-1" data-bs-toggle="tab" data-bs-target="#tab-one-1" type="button" role="tab" aria-controls="tab-one" aria-selected="true">Featured</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="nav-tab-two-1" data-bs-toggle="tab" data-bs-target="#tab-two-1" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Popular</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="nav-tab-three-1" data-bs-toggle="tab" data-bs-target="#tab-three-1" type="button" role="tab" aria-controls="tab-three" aria-selected="false">New added</button>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
            <div className="banner-img style-2">
              <div className="banner-text">
                <h2 className="mb-100">Bring nature into your home</h2>
                <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
            <div className="tab-content" id="myTabContent-1">
              <div className="tab-pane fade show active" id="tab-one-1" role="tabpanel" aria-labelledby="tab-one-1">
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-arrows" />
                  <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Save 15%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">Save 35%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet and womnies</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy Classic </a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Save 15%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                  </div>
                </div>
              </div>
              {/*End tab-pane*/}
              <div className="tab-pane fade" id="tab-two-1" role="tabpanel" aria-labelledby="tab-two-1">
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-2-arrows" />
                  <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns-2">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Save 15%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-15-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-15-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">Save 35%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-12-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-12-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish </a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-13-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-13-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-14-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-14-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Save 15%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Italian-Style Chicken Meatball</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-three-1" role="tabpanel" aria-labelledby="tab-three-1">
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-3-arrows" />
                  <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns-3">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Save 15%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Perdue Simply Smart Organics Gluten Free</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">Save 35%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Signature Wood-Fired Mushroom</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-13-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-13-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Simply Lemonade with Raspberry Juice</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-14-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-14-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                          <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                          <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Save 15%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2><a href="shop-product-right.html">Organic Quinoa, Brown, &amp; Red Rice</a></h2>
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '80%'}} />
                        </div>
                        <div className="product-price mt-10">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="sold mt-15 mb-15">
                          <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="font-xs text-heading"> Sold: 90/120</span>
                        </div>
                        <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                      </div>
                    </div>
                    {/*End product Wrap*/}
                  </div>
                </div>
              </div>
            </div>
            {/*End tab-content*/}
          </div>
          {/*End Col-lg-9*/}
        </div>
      </div>
    </section>
  )
}

export default DailySalesSlider