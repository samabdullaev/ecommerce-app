import React, {useCallback, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

import {FreeMode, Navigation, Thumbs} from 'swiper/modules';

export default function ProductThumbnailSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
        <>

        <div className='swiper' style={{position: "relative"}}>
                <div 
                    onClick={handlePrev}
                    className='swiper__arrow swiper__arrow--left'
                >
                    <i class="fi-rs-arrow-small-left"></i>
                </div>
                
            <div
              onClick={handleNext} 
              className='swiper__arrow swiper__arrow--right'>
              <i class="fi-rs-arrow-small-right"></i>
            </div>            


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
            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
            modules={[FreeMode, Navigation, Thumbs]}
            className='product-image-slider'
        >
            {
                [1,2,3,4,5,6,7,8,9,10].map((item) => (
                    <SwiperSlide className='border-radius-10'>
                        <img src={`https://swiperjs.com/demos/images/nature-${item}.jpg`} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </div>

        <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={15}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='slider-nav-thumbnails'
        >
            {
                [1,2,3,4,5,6,7,8,9,10].map((item) => (
                    <SwiperSlide 
                        style={{
                            overflow: "hidden",
                            borderRadius: "20px",
                            height: "80px"
                        }}
                    >
                        <img src={`https://swiperjs.com/demos/images/nature-${item}.jpg`} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </>
    )
}