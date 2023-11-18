import React from 'react'

const ComparePage = () => {
  return (
    <main className="main">
  <div className="page-header breadcrumb-wrap">
    <div className="container">
      <div className="breadcrumb">
        <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
        <span /> Shop <span /> Compare
      </div>
    </div>
  </div>
  <div className="container mb-80 mt-50">
    <div className="row">
      <div className="col-xl-10 col-lg-12 m-auto">
        <h1 className="heading-2 mb-10">Products Compare</h1>
        <h6 className="text-body mb-40">There are <span className="text-brand">3</span> products to compare</h6>
        <div className="table-responsive">
          <table className="table text-center table-compare">
            <tbody>
              <tr className="pr_image">
                <td className="text-muted font-sm fw-600 font-heading mw-200">Preview</td>
                <td className="row_img"><img src="assets/imgs/shop/product-2-1.jpg" alt="compare-img" /></td>
                <td className="row_img"><img src="assets/imgs/shop/product-1-1.jpg" alt="compare-img" /></td>
                <td className="row_img"><img src="assets/imgs/shop/product-3-1.jpg" alt="compare-img" /></td>
              </tr>
              <tr className="pr_title">
                <td className="text-muted font-sm fw-600 font-heading">Name</td>
                <td className="product_name">
                  <h6><a href="shop-product-full.html" className="text-heading">J.Crew Mercantile Women's Short</a></h6>
                </td>
                <td className="product_name">
                  <h6><a href="shop-product-full.html" className="text-heading">Amazon Essentials Women's Tanks</a></h6>
                </td>
                <td className="product_name">
                  <h6><a href="shop-product-full.html" className="text-heading">Amazon Brand - Daily Ritual Wom</a></h6>
                </td>
              </tr>
              <tr className="pr_price">
                <td className="text-muted font-sm fw-600 font-heading">Price</td>
                <td className="product_price">
                  <h4 className="price text-brand">$12.00</h4>
                </td>
                <td className="product_price">
                  <h4 className="price text-brand">$14.00</h4>
                </td>
                <td className="product_price">
                  <h4 className="price text-brand">$15.00</h4>
                </td>
              </tr>
              <tr className="pr_rating">
                <td className="text-muted font-sm fw-600 font-heading">Rating</td>
                <td>
                  <div className="rating_wrap">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="rating_num">(121)</span>
                  </div>
                </td>
                <td>
                  <div className="rating_wrap">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="rating_num">(35)</span>
                  </div>
                </td>
                <td>
                  <div className="rating_wrap">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="rating_num">(125)</span>
                  </div>
                </td>
              </tr>
              <tr className="description">
                <td className="text-muted font-sm fw-600 font-heading">Description</td>
                <td className="row_text font-xs">
                  <p className="font-sm text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                </td>
                <td className="row_text font-xs">
                  <p className="font-sm text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                </td>
                <td className="row_text font-xs">
                  <p className="font-sm text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                </td>
              </tr>
              <tr className="pr_stock">
                <td className="text-muted font-sm fw-600 font-heading">Stock status</td>
                <td className="row_stock"><span className="stock-status in-stock mb-0">In Stock</span></td>
                <td className="row_stock"><span className="stock-status out-stock mb-0">Out of stock</span></td>
                <td className="row_stock"><span className="stock-status in-stock mb-0">In Stock</span></td>
              </tr>
              <tr className="pr_weight">
                <td className="text-muted font-sm fw-600 font-heading">Weight</td>
                <td className="row_weight">320 gram</td>
                <td className="row_weight">370 gram</td>
                <td className="row_weight">380 gram</td>
              </tr>
              <tr className="pr_dimensions">
                <td className="text-muted font-sm fw-600 font-heading">Dimensions</td>
                <td className="row_dimensions">N/A</td>
                <td className="row_dimensions">N/A</td>
                <td className="row_dimensions">N/A</td>
              </tr>
              <tr className="pr_add_to_cart">
                <td className="text-muted font-sm fw-600 font-heading">Buy now</td>
                <td className="row_btn">
                  <button className="btn btn-sm"><i className="fi-rs-shopping-bag mr-5" />Add to cart</button>
                </td>
                <td className="row_btn">
                  <button className="btn btn-sm btn-secondary"><i className="fi-rs-headset mr-5" />Contact Us</button>
                </td>
                <td className="row_btn">
                  <button className="btn btn-sm"><i className="fi-rs-shopping-bag mr-5" />Add to cart</button>
                </td>
              </tr>
              <tr className="pr_remove text-muted">
                <td className="text-muted font-md fw-600" />
                <td className="row_remove">
                  <a href="#" className="text-muted"><i className="fi-rs-trash mr-5" /><span>Remove</span> </a>
                </td>
                <td className="row_remove">
                  <a href="#" className="text-muted"><i className="fi-rs-trash mr-5" /><span>Remove</span> </a>
                </td>
                <td className="row_remove">
                  <a href="#" className="text-muted"><i className="fi-rs-trash mr-5" /><span>Remove</span> </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default ComparePage