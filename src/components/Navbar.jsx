import React, { useState } from 'react'
import navbarData from '../data/navbar.data'
import { Link } from 'react-router-dom'
import categoryData from '../data/category.data'

const Navbar = () => {
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <>
      <div className="modal fade custom-modal" id="quickViewModal" tabIndex={-1} aria-labelledby="quickViewModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                <div className="detail-gallery">
                  <span className="zoom-icon"><i className="fi-rs-search" /></span>
                  {/* MAIN SLIDES */}
                  <div className="product-image-slider">
                    <figure className="border-radius-10">
                      <img src="assets/imgs/shop/product-16-2.jpg" alt="product image" />
                    </figure>
                    <figure className="border-radius-10">
                      <img src="assets/imgs/shop/product-16-1.jpg" alt="product image" />
                    </figure>
                    <figure className="border-radius-10">
                      <img src="assets/imgs/shop/product-16-3.jpg" alt="product image" />
                    </figure>
                    <figure className="border-radius-10">
                      <img src="assets/imgs/shop/product-16-4.jpg" alt="product image" />
                    </figure>
                    <figure className="border-radius-10">
                      <img src="assets/imgs/shop/product-16-5.jpg" alt="product image" />
                    </figure>
                    <figure className="border-radius-10">
                      <img src="assets/imgs/shop/product-16-6.jpg" alt="product image" />
                    </figure>
                    <figure className="border-radius-10">
                      <img src="assets/imgs/shop/product-16-7.jpg" alt="product image" />
                    </figure>
                  </div>
                  {/* THUMBNAILS */}
                  <div className="slider-nav-thumbnails">
                    <div><img src="assets/imgs/shop/thumbnail-3.jpg" alt="product image" /></div>
                    <div><img src="assets/imgs/shop/thumbnail-4.jpg" alt="product image" /></div>
                    <div><img src="assets/imgs/shop/thumbnail-5.jpg" alt="product image" /></div>
                    <div><img src="assets/imgs/shop/thumbnail-6.jpg" alt="product image" /></div>
                    <div><img src="assets/imgs/shop/thumbnail-7.jpg" alt="product image" /></div>
                    <div><img src="assets/imgs/shop/thumbnail-8.jpg" alt="product image" /></div>
                    <div><img src="assets/imgs/shop/thumbnail-9.jpg" alt="product image" /></div>
                  </div>
                </div>
                {/* End Gallery */}
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="detail-info pr-30 pl-30">
                  <span className="stock-status out-stock"> Sale Off </span>
                  <h3 className="title-detail"><a href="shop-product-right.html" className="text-heading">Seeds of Change Organic Quinoa, Brown</a></h3>
                  <div className="product-detail-rating">
                    <div className="product-rate-cover text-end">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '90%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                    </div>
                  </div>
                  <div className="clearfix product-price-cover">
                    <div className="product-price primary-color float-left">
                      <span className="current-price text-brand">$38</span>
                      <span>
                        <span className="save-price font-md color3 ml-15">26% Off</span>
                        <span className="old-price font-md ml-15">$52</span>
                      </span>
                    </div>
                  </div>
                  <div className="detail-extralink mb-30">
                    <div className="detail-qty border radius">
                      <a href="#" className="qty-down"><i className="fi-rs-angle-small-down" /></a>
                      <span className="qty-val">1</span>
                      <a href="#" className="qty-up"><i className="fi-rs-angle-small-up" /></a>
                    </div>
                    <div className="product-extra-link2">
                      <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart" />Add to cart</button>
                    </div>
                  </div>
                  <div className="font-xs">
                    <ul>
                      <li className="mb-5">Vendor: <span className="text-brand">Nest</span></li>
                      <li className="mb-5">MFG:<span className="text-brand"> Jun 4.2022</span></li>
                    </ul>
                  </div>
                </div>
                {/* Detail Info */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <header className="header-area header-style-1 header-style-5 header-height-2">
      <div className="mobile-promotion">
        <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
      </div>
      <div className="header-top header-top-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4">
              <div className="header-info">
                <ul>
                  <li><a href="https://wp.alithemes.com/html/nest/demo/page-about.htlm">About Us</a></li>
                  <li><a href="page-account.html">My Account</a></li>
                  <li><a href="shop-wishlist.html">Wishlist</a></li>
                  <li><a href="https://wp.alithemes.com/html/nest/demo/shop-order.html">Order Tracking</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="text-center">
                <div id="news-flash" className="d-inline-block">
                  <ul>
                    <li>100% Secure delivery without contacting the courier</li>
                    <li>Supper Value Deals - Save more with coupons</li>
                    <li>Trendy 25silver jewelry, save up 35% off today</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="header-info header-info-right">
                <ul>
                  <li>Need help? Call Us: <strong className="text-brand"> + 1800 900</strong></li>
                  <li>
                    <a className="language-dropdown-active" href="#">English <i className="fi-rs-angle-small-down" /></a>
                    <ul className="language-dropdown">
                      <li>
                        <a href="#"><img src="assets/imgs/theme/flag-fr.png" alt="" />Français</a>
                      </li>
                      <li>
                        <a href="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />Deutsch</a>
                      </li>
                      <li>
                        <a href="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />Pусский</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="language-dropdown-active" href="#">USD <i className="fi-rs-angle-small-down" /></a>
                    <ul className="language-dropdown">
                      <li>
                        <a href="#"><img src="assets/imgs/theme/flag-fr.png" alt="" />INR</a>
                      </li>
                      <li>
                        <a href="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />MBP</a>
                      </li>
                      <li>
                        <a href="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />EU</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form action="#">
                  <select className="select-active">
                    <option>All Categories</option>
                    <option>Milks and Dairies</option>
                    <option>Wines &amp; Alcohol</option>
                    <option>Clothing &amp; Beauty</option>
                    <option>Pet Foods &amp; Toy</option>
                    <option>Fast food</option>
                    <option>Baking material</option>
                    <option>Vegetables</option>
                    <option>Fresh Seafood</option>
                    <option>Noodles &amp; Rice</option>
                    <option>Ice cream</option>
                  </select>
                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="search-location">
                    <form action="#">
                      <select className="select-active">
                        <option>Your Location</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Delaware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Indiana</option>
                        <option>Maryland</option>
                        <option>Nevada</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                      </select>
                    </form>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="shop-compare.html">
                      <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-compare.svg" />
                      <span className="pro-count blue">3</span>
                    </a>
                    <a href="shop-compare.html"><span className="lable ml-0">Compare</span></a>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="shop-wishlist.html">
                      <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                      <span className="pro-count blue">6</span>
                    </a>
                    <a href="shop-wishlist.html"><span className="lable">Wishlist</span></a>
                  </div>
                  <div className="header-action-icon-2">
                    <a className="mini-cart-icon" href="shop-cart.html">
                      <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                      <span className="pro-count blue">2</span>
                    </a>
                    <a href="shop-cart.html"><span className="lable">Cart</span></a>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4><a href="shop-product-right.html">Daisy Casual Bag</a></h4>
                            <h4><span>1 × </span>$800.00</h4>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#"><i className="fi-rs-cross-small" /></a>
                          </div>
                        </li>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-2.jpg" /></a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4><a href="shop-product-right.html">Corduroy Shirts</a></h4>
                            <h4><span>1 × </span>$3200.00</h4>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#"><i className="fi-rs-cross-small" /></a>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>Total <span>$4000.00</span></h4>
                        </div>
                        <div className="shopping-cart-button">
                          <a href="shop-cart.html" className="outline">View cart</a>
                          <a href="shop-checkout.html">Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="page-account.html">
                      <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-user.svg" />
                    </a>
                    <a href="page-account.html"><span className="lable ml-0">Account</span></a>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      <ul>
                        <li>
                          <a href="page-account.html"><i className="fi fi-rs-user mr-10" />My Account</a>
                        </li>
                        <li>
                          <a href="page-account.html"><i className="fi fi-rs-location-alt mr-10" />Order Tracking</a>
                        </li>
                        <li>
                          <a href="page-account.html"><i className="fi fi-rs-label mr-10" />My Voucher</a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html"><i className="fi fi-rs-heart mr-10" />My Wishlist</a>
                        </li>
                        <li>
                          <a href="page-account.html"><i className="fi fi-rs-settings-sliders mr-10" />Setting</a>
                        </li>
                        <li>
                          <a href="page-login.html"><i className="fi fi-rs-sign-out mr-10" />Sign out</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom header-bottom-bg-color sticky-bar">
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
              <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div className="main-categori-wrap d-none d-lg-block">
                <button 
                  onClick={() => setCategoryToggle(!categoryToggle)}
                  className="categories-button-active">
                  <span className="fi-rs-apps" /> <span className="et">Trending</span> Categories
                  <i className={categoryToggle ? "fi-rs-angle-up": "fi-rs-angle-down"} />
                </button>
                <div className={`categories-dropdown-wrap categories-dropdown-active-large font-heading ${categoryToggle && "open"}`}>
                  <div className="d-flex categori-dropdown-inner">
                    <ul>
                      {
                        categoryData.filter((_, index)=> index%2 === 0).map((item, index) => (
                          <li key={index}>
                        <Link to={"/filter/${item.id}"}> <img src="assets/imgs/theme/icons/category-1.svg" alt="" />{item.name}</Link>
                      </li>
                        ))
                      }
                    </ul>
                    <ul>
                      {
                        categoryData.filter((_, index)=> index%2 !== 0).map((item, index) => (
                          <li key={index}>
                        <Link to={"/filter/${item.id}"}> <img src="assets/imgs/theme/icons/category-1.svg" alt="" />{item.name}</Link>
                      </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="more_slide_open" style={{display: 'none'}}>
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        <li>
                          <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />Milks and Dairies</a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />Clothing &amp; beauty</a>
                        </li>
                      </ul>
                      <ul className="end">
                        <li>
                          <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />Wines &amp; Drinks</a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />Fresh Seafood</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="more_categories"><span className="icon" /> <span className="heading-sm-1">Show more...</span></div>
                </div>
              </div>
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                  <ul>
                    {navbarData.map((item, index) => (
                      <li key={index}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hotline d-none d-lg-flex">
              <img src="assets/imgs/theme/icons/icon-headphone-white.svg" alt="hotline" />
              <p>1900 - 888<span>24/7 Support Center</span></p>
            </div>
            <div className="header-action-icon-2 d-block d-lg-none">
              <div 
                onClick={() => setSidebarToggle(true)}
                className="burger-icon burger-icon-white">
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
            <div className="header-action-right d-block d-lg-none">
              <div className="header-action-2">
                <div className="header-action-icon-2">
                  <a href="shop-wishlist.html">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                    <span className="pro-count white">4</span>
                  </a>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="#">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                    <span className="pro-count white">2</span>
                  </a>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4><a href="shop-product-right.html">Plain Striola Shirts</a></h4>
                          <h3><span>1 × </span>$800.00</h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#"><i className="fi-rs-cross-small" /></a>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-4.jpg" /></a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4><a href="shop-product-right.html">Macbook Pro 2022</a></h4>
                          <h3><span>1 × </span>$3500.00</h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#"><i className="fi-rs-cross-small" /></a>
                        </div>
                      </li>
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                        <h4>Total <span>$383.00</span></h4>
                      </div>
                      <div className="shopping-cart-button">
                        <a href="shop-cart.html">View cart</a>
                        <a href="shop-checkout.html">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className={`mobile-header-active mobile-header-wrapper-style ${sidebarToggle && "sidebar-visible"}`}>
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-top">
          <div className="mobile-header-logo">
            <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
          </div>
          <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
            <button
              onClick={() => setSidebarToggle(false)} 
              className="close-style search-close">
              <i className="icon-top" />
              <i className="icon-bottom" />
            </button>
          </div>
        </div>
        <div className="mobile-header-content-area">
          <div className="mobile-search search-style-3 mobile-header-border">
            <form action="#">
              <input type="text" placeholder="Search for items…" />
              <button type="submit"><i className="fi-rs-search" /></button>
            </form>
          </div>
          <div className="mobile-menu-wrap mobile-header-border">
            {/* mobile menu start */}
            <nav>
              <ul className="mobile-menu font-heading">
                {navbarData.map((item, index) => (
                  <li onClick={() => setSidebarToggle(false)} key={index} className="menu-item">
                  <Link to={item.path}>{item.title}</Link>
                </li>
                ))}
              </ul>
            </nav>
            {/* mobile menu end */}
          </div>
          <div className="mobile-header-info-wrap">
            <div className="single-mobile-header-info">
              <a href="page-contact.html"><i className="fi-rs-marker" /> Our location </a>
            </div>
            <div className="single-mobile-header-info">
              <a href="page-login.html"><i className="fi-rs-user" />Log In / Sign Up </a>
            </div>
            <div className="single-mobile-header-info">
              <a href="#"><i className="fi-rs-headphones" />(+01) - 2345 - 6789 </a>
            </div>
          </div>
          <div className="mobile-social-icon mb-50">
            <h6 className="mb-15">Follow Us</h6>
            <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
          </div>
          <div className="site-copyright">Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Navbar