import React from 'react';
import categoryData from '../../data/category.data';
import productsData from '../../data/products.data';

const CategoryFilter = () => {
  return (
    <div className="sidebar-widget widget-category-2 mb-30">
          <h5 className="section-title style-1 mb-30">Category</h5>
          <ul>
            {
              categoryData.slice(0, 4).map((item, index) => (
                <li key={index}>
                  <a> 
                    <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                      {item.name}
                  </a>
                  <a 
                    className="count"
                  >
                    {productsData.filter(p=> p.category===item.id).length}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
  )
}

export default CategoryFilter