import React, { useRef, useState } from 'react'
import categoryData from '../data/category.data'
import { Link } from 'react-router-dom'

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import {FreeMode, Navigation, Pagination} from 'swiper/modules';

const HomeSlider = () => {
  const [toggle, setToggle] = useState(false);
  const sliderRef = useRef(null);

  return (
    <section className="home-slider position-relative mb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 d-none d-lg-flex">
            <div className="categories-dropdown-wrap style-2 font-heading mt-30">
              <div className="d-flex categori-dropdown-inner">
                <ul>
                  {categoryData.slice(0, 10).map((item) => (
                    <li key={item.id}>
                    <Link to={`/filter/${item.id}`}> <img src="assets/imgs/theme/icons/category-1.svg" alt="" />{item.name}</Link>
                  </li>
                  ))}
                </ul>
              </div>
              <div className={`more_slide_open ${!toggle && "d-none"}`}>
                <div className="d-flex categori-dropdown-inner">
                <ul>
                  {categoryData.slice(10).map((item) => (
                    <li key={item.id}>
                    <Link to={`/filter/${item.id}`}> <img src="assets/imgs/theme/icons/category-1.svg" alt="" />{item.name}</Link>
                  </li>
                  ))}
                </ul>
                </div>
              </div>
              
              {categoryData.length > 10 && <div
                onClick={() => setToggle(!toggle)} 
                className={`more_categories ${toggle && "show"}`}
                style={{cursor: 'pointer'}}
                ><span className="icon" /> <span className="heading-sm-1">Show more...</span>
                </div>}
            </div>
          </div>
          <div className="col-lg-7">

<div className="home-slide-cover mt-30">
        <Swiper
            ref={sliderRef}
            style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                border: "0px",
                overflow: "hidden",
                marginBottom: "10px"
            }}
            loop={true}
            spaceBetween={10}
            navigation={false}
            pagination={true}
            modules={[FreeMode, Navigation, Pagination]}
            className='hero-slider-1 style-5 dot-style-1 dot-style-1-position-2'
        >

                    <SwiperSlide className='border-radius-10'>
                       <div className="single-hero-slider single-animation-wrap" style={{backgroundImage: 'url(assets/imgs/slider/slider-7.png)'}}>
                  <div className="slider-content">
                    <h1 className="display-2 mb-40">
                      Don’t miss amazing<br />
                      grocery deals
                    </h1>
                  </div>
                </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="single-hero-slider single-animation-wrap" style={{backgroundImage: 'url(assets/imgs/slider/slider-8.png)'}}>
                  <div className="slider-content">
                    <h1 className="display-2 mb-40">
                      Fresh Vegetables<br />
                      Big discount
                    </h1>
                    <p className="mb-65">Save up to 50% off on your first order</p>
                  </div>
                </div>
                    </SwiperSlide>
        </Swiper>
    </div>


          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-md-6 col-lg-12">
                <div className="banner-img style-4 mt-30">
                  <img src="assets/imgs/banner/banner-14.png" alt="" />
                  <div className="banner-text">
                    <h4 className="mb-30">
                      Everyday Fresh &amp; <br />Clean with Our<br />
                      Products
                    </h4>
                    <a href="shop-grid-right.html" className="btn btn-xs mb-50">Shop Now <i className="fi-rs-arrow-small-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="banner-img style-5 mt-5 mt-md-30">
                  <img src="assets/imgs/banner/banner-15.png" alt="" />
                  <div className="banner-text">
                    <h5 className="mb-20">
                      The best Organic <br />
                      Products Online
                    </h5>
                    <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSlider