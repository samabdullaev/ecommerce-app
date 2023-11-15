import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import {Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import categoryData from '../../data/category.data';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css';

const settings = {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 20,
    }
  }   
};

const CategorySlider = () => {
  const sliderRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="popular-categories section-padding">
      <div className="container wow animate__animated animate__fadeIn">
        <div className="section-title">
          <div className="title">
            <h3>Featured Categories</h3>
        
          </div>
          <div 
            className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" 
            id="carausel-10-columns-arrows" 
          >
            <div 
              onClick={handlePrev}
              className='swiper__arrow'>
              <i class="fi-rs-arrow-small-left"></i>
            </div>

            <div
              onClick={handleNext} 
              className='swiper__arrow'>
              <i class="fi-rs-arrow-small-right"></i>
            </div>            
          </div>
        </div>

        <Swiper
          ref={sliderRef}
          slidesPerView={8}
          spaceBetween={30}
          loop={true}
          modules={[Navigation]}
          className='mySwiper'
          {...settings}
        >
          {categoryData.map((item, index) => (
            <SwiperSlide>
              <div 
              className={`card-2 wow animate__animated animate__fadeInUp bg-${
                index + 1
              }`} 
              data-wow-delay={`0.${index+1}s`}>
                <figure className="img-hover-scale overflow-hidden">
                  <Link to={`/filters/${item.id}`}>
                    <img src="assets/imgs/shop/cat-13.png" alt="" />
                  </Link>
                </figure>
                <h6><a href="shop-grid-right.html">{item.name}</a></h6>
                <span>26 items</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default CategorySlider