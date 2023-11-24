import React, { useState } from 'react'
import navbarData from '../data/navbar.data'
import { Link } from 'react-router-dom'
import categoryData from '../data/category.data'
import { useSelector } from 'react-redux'
import CartProductCardSm from './cart/CartProductCardSm'
import { CALCULATE_SUB_TOTAL } from '../utils'

const Navbar = () => {
  const cartProducts = useSelector(state => state.cart.products);
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const totalPrice = useSelector(state => CALCULATE_SUB_TOTAL(state.cart.products))

  return (
    <>
    <header className="header-area header-style-1 header-style-5 header-height-2">
      <div className="mobile-promotion">
        <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
      </div>
      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <Link to="/"><img src="assets/imgs/theme/logo.svg" alt="logo" /></Link>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                  <input type="text" placeholder="Search for items..." />
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link to="/compare">
                      <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-compare.svg" />
                      <span className="pro-count blue">3</span>
                    </Link>
                    <Link to="/compare"><span className="lable ml-0">Compare</span></Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link to="/wishlist">
                      <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                      <span className="pro-count blue">6</span>
                    </Link>
                    <Link to="/wishlist"><span className="lable">Wishlist</span></Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link to="/cart" className="mini-cart-icon">
                      <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                      {cartProducts.length ? <span className="pro-count blue">{cartProducts.length}</span> : null}
                    </Link>
                    <Link to="/cart"><span className="lable">Cart</span></Link>
                    {cartProducts.length ? <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        {
                          cartProducts.map((item, index) => (
                            <CartProductCardSm key={index} item={item} />
                          ))
                        }
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>Total <span>${totalPrice.toFixed(2)}</span></h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link to="/cart" className="outline">View cart</Link>
                          <Link to="/checkout">Checkout</Link>
                        </div>
                      </div>
                    </div> : null}
                  </div>
                  <div className="header-action-icon-2">
                    <Link to="/account">
                      <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-user.svg" />
                    </Link>
                    <Link to="/account"><span className="lable ml-0">Account</span></Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      <ul>
                        <li>
                          <Link to="/account"><i className="fi fi-rs-user mr-10" />My Account</Link>
                        </li>
                        <li>
                          <Link to="/account"><i className="fi fi-rs-location-alt mr-10" />Order Tracking</Link>
                        </li>
                        <li>
                          <Link to="/account"><i className="fi fi-rs-label mr-10" />My Voucher</Link>
                        </li>
                        <li>
                          <Link to="/wishlist"><i className="fi fi-rs-heart mr-10" />My Wishlist</Link>
                        </li>
                        <li>
                          <Link to="/account"><i className="fi fi-rs-settings-sliders mr-10" />Setting</Link>
                        </li>
                        <li>
                          <Link to="/auth/signin"><i className="fi fi-rs-sign-out mr-10" />Sign out</Link>
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
              <Link to="/"><img src="assets/imgs/theme/logo.svg" alt="logo" /></Link>
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
                  <Link to="/wishlist">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                    <span className="pro-count white">4</span>
                  </Link>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="#">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                    {cartProducts.length ? <span className="pro-count white">{cartProducts.length}</span> : null}
                  </a>
                  {cartProducts.length ? <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      {
                        cartProducts.map((item, index) => (
                          <CartProductCardSm key={index} item={item} />
                        ))
                      }
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                      <h4>Total <span>${totalPrice.toFixed(2)}</span></h4>
                      </div>
                      <div className="shopping-cart-button">
                        <Link to="/cart">View cart</Link>
                        <Link to="/checkout">Checkout</Link>
                      </div>
                    </div>
                  </div> : null}
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
            <Link to="/"><img src="assets/imgs/theme/logo.svg" alt="logo" /></Link>
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
              <Link to="/auth/signin"><i className="fi-rs-user" />Log In / Sign Up </Link>
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