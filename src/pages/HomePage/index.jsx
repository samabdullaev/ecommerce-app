import React from 'react';
import CategorySlider from '../../containers/CategorySlider';
import PopularProducts from '../../containers/PopularProducts';
import HomeSlider from '../../containers/HomeSlider';
import FeaturedBanners from '../../containers/FeaturedBanners';
import ProductSales from '../../containers/ProductSales';
import productsData from '../../data/products.data';

const HomePage = () => {
  return (
    <>
        <HomeSlider />
        <CategorySlider />
        <FeaturedBanners />
        <PopularProducts />
        {/*Products Tabs*/}
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="banner-img style-6 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
                  <img src="assets/imgs/banner/banner-16.png" alt="" />
                  <div className="banner-text">
                    <h6 className="mb-10 mt-30">Everyday Fresh with<br />Our Products</h6>
                    <p>Go to supplier</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="banner-img style-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                  <img src="assets/imgs/banner/banner-17.png" alt="" />
                  <div className="banner-text">
                    <h6 className="mb-10 mt-30">100% guaranteed all<br />Fresh items</h6>
                    <p>Go to supplier</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="banner-img style-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                  <img src="assets/imgs/banner/banner-18.png" alt="" />
                  <div className="banner-text">
                    <h6 className="mb-10 mt-30">Special grocery sale<br />off this month</h6>
                    <p>Go to supplier</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="banner-img style-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                  <img src="assets/imgs/banner/banner-19.png" alt="" />
                  <div className="banner-text">
                    <h6 className="mb-10 mt-30">
                      Enjoy 15% OFF for all<br />
                      vegetable and fruit
                    </h6>
                    <p>Go to supplier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*End Deals*/}
        <section className="section-padding mb-30">
          <div className="container">
            <div className="row">
              <ProductSales title="Top Selling" data={productsData.slice(0, 3)}/>
              <ProductSales title="Trending Products" data={productsData.slice(3, 6)}/>
              <ProductSales title="Recently added" data={productsData.slice(6, 9)}/>
              <ProductSales title="Top Rated" data={productsData.slice(9, 12)}/>
            </div>
          </div>
        </section>
        {/*End 4 columns*/}
</>

  )
}

export default HomePage