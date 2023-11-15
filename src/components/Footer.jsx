import React from 'react'

const Footer = () => {
  return (
    <footer className="main">
    <section className="section-padding footer-mid">
      <div className="container pt-15 pb-20">
        <div className="row">
          <div className="col">
            <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
              <div className="logo mb-30">
                <a href="index.html" className="mb-15"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
                <p className="font-lg text-heading">Awesome grocery store website template</p>
              </div>
            </div>
          </div>
          <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
            <h4 className="widget-title">Company</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
          </div>
          <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
            <h4 className="widget-title">Account</h4>
            <ul className="footer-list mb-sm-5 mb-md-0">
              <li><a href="#">Sign In</a></li>
              <li><a href="#">View Cart</a></li>
              <li><a href="#">My Wishlist</a></li>
            </ul>
          </div>
          <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
            <h4 className="widget-title">Corporate</h4>
            <ul className="footer-list mb-sm-5 mb-md-0">
              <li><a href="#">Become a Vendor</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Farm Business</a></li>
            </ul>
          </div>
          <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
            <h4 className="widget-title">Popular</h4>
            <ul className="footer-list mb-sm-5 mb-md-0">
              <li><a href="#">Milk &amp; Flavoured Milk</a></li>
              <li><a href="#">Butter and Margarine</a></li>
              <li><a href="#">Eggs Substitutes</a></li>
            </ul>
          </div>
        </div>
      </div></section>
    <div className="container pb-30 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
      <div className="row align-items-center">
        <div className="col-12 mb-30">
          <div className="footer-bottom" />
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <p className="font-sm mb-0">© 2022, <strong className="text-brand">Nest</strong> - HTML Ecommerce Template <br />All rights reserved</p>
        </div>
        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
          <div className="hotline d-lg-inline-flex mr-30">
            <img src="assets/imgs/theme/icons/phone-call.svg" alt="hotline" />
            <p>1900 - 6666<span>Working 8:00 - 22:00</span></p>
          </div>
          <div className="hotline d-lg-inline-flex">
            <img src="assets/imgs/theme/icons/phone-call.svg" alt="hotline" />
            <p>1900 - 8888<span>24/7 Support Center</span></p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
          <div className="mobile-social-icon">
            <h6>Follow Us</h6>
            <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
          </div>
          <p className="font-sm">Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer