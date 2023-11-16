import React, { useState } from 'react';
import './styles.css';

const SortByFilter = ({type, setType, qty, setQty, productsQty}) => {
  const [toggleQty, setToggleQty] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);
  return (
    <div className="shop-product-fillter">
          <div className="totall-product">
            <p>We found <strong className="text-brand">{productsQty}</strong> items for you!</p>
          </div>
          <div className="sort-by-product-area">
          <div className="sort-by-cover mr-10">
              <div 
                className="sort-by-product-wrap"
                style={{
                  paddingLeft: "10px",
                  paddingRight: 0
                }}
              >
                <div className="sort-by">
                  <span onClick={() => setType("grid")}><i className={`fi-rs-apps card__type ${type==="grid" && "card__type--active"}`} /></span>
                </div>
                <div className="sort-by">
                  <span onClick={() => setType("list")}><i className={`fi-rs-list card__type ${type==="list" && "card__type--active"}`} /></span>
                </div>
              </div>
            </div>
            
            <div className="sort-by-cover mr-10">
              <div className="sort-by-product-wrap">
                <div className="sort-by">
                  <span><i className="fi-rs-apps" />Show:</span>
                </div>
                <div 
                  onClick={() => setToggleQty(!toggleQty)}
                  className="sort-by-dropdown-wrap"
                >
                  <span> {qty} <i className="fi-rs-angle-small-down" /></span>
                </div>
              </div>
              <div className={`sort-by-dropdown ${toggleQty && "show"}`}>
                <ul>
                  {
                    [5, 10, 20, 50, 100].map((item) => (
                      <li>
                        <a
                          onClick={() => {
                            setQty(item)
                            setToggleQty(false)
                          }} 
                          className={`uppercase ${item===qty && "active"}`}>{item}
                        </a>
                      </li>
                    ) )
                  }
                </ul>
              </div>
            </div>
            <div className="sort-by-cover">
              <div
                onClick={() => setToggleSort(!toggleSort)}
                className="sort-by-product-wrap"
              >
                <div className="sort-by">
                  <span><i className="fi-rs-apps-sort" />Sort by:</span>
                </div>
                <div className="sort-by-dropdown-wrap">
                  <span> Featured <i className="fi-rs-angle-small-down" /></span>
                </div>
              </div>
              <div className={`sort-by-dropdown ${toggleSort && "show"} `}>
                <ul>
                  <li><a className="active" href="#">Featured</a></li>
                  <li><a href="#">Price: Low to High</a></li>
                  <li><a href="#">Price: High to Low</a></li>
                  <li><a href="#">Release Date</a></li>
                  <li><a href="#">Avg. Rating</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SortByFilter