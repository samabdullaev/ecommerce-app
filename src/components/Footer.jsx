import React from 'react'
import { Link } from 'react-router-dom'
import footerData from '../data/footer.data'

const Footer = () => {
  return (
    <footer className="main">
    <section className="section-padding footer-mid">
      <div className="container d-flex align-items-center">
            <div className="widget-about font-md mb-xl-0 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
              <div className="logo">
                <Link to="/"><img src="assets/imgs/theme/logo.svg" alt="logo" /></Link>
              </div>
            </div>

            <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                  <ul className="footer-list mb-sm-5 mb-md-0 d-flex justify-content-evenly">
                      {footerData.map((item, index) => (
                        <li key={index}><Link to={item.path}>{item.title}</Link></li>
                      ))}
                    </ul>
            </div>
      </div>
    </section>
    <div className="container pb-30 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
      <div className="row align-items-center">
        <div className="col-12 mb-30">
          <div className="footer-bottom" />
        </div>
          <p className="font-sm mb-0 text-center">© 2023, <strong className="text-brand">Nest</strong> - HTML Ecommerce Template. All rights reserved</p>
        </div>
      </div>
  </footer>
  )
}

export default Footer