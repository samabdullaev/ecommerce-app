import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function AboutSlider() {
  return (
    <>
      <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="assets/imgs/page/about-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/imgs/page/about-3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/imgs/page/about-4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/imgs/page/about-2.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
