import React, { useState } from 'react';
import categoryData from '../data/category.data';
import productsData from '../data/products.data'
import ProductCard from '../components/ProductCard';

const PopularProducts = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <section className="product-tabs section-padding position-relative">
      <div className="container">
        <div className="section-title style-2 wow animate__animated animate__fadeIn">
          <h3>Popular Products</h3>
          <ul className="nav nav-tabs links" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button 
                className={`nav-link ${activeTab==="all" && "active"}`}
                id="nav-tab-one" 
                type="button" 
                role="tab"
                onClick={()=> setActiveTab("all")}
              >
                All
              </button>
            </li>

            {
            categoryData
            .slice(0,4)
            .map((item, index) => (
              <li className="nav-item" role="presentation">
              <button 
                className={`nav-link ${activeTab===item.id && "active"}`}
                type="button" 
                role="tab" 
                onClick={()=> setActiveTab(item.id)}
                >
                  {item.name}
                </button>
            </li>
            ))}
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
            <div className="row product-grid-4">
              {
                productsData
                .filter((item) => activeTab==="all" ? true : item.category===activeTab)
                .map((item, index) => (
                  <ProductCard item={item} index={index} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts