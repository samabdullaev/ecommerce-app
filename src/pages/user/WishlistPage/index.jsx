import React from 'react'

const WishlistPage = () => {
  return (
    <main className="main">
  <div className="page-header breadcrumb-wrap">
    <div className="container">
      <div className="breadcrumb">
        <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
        <span /> Shop <span /> Fillter
      </div>
    </div>
  </div>
  <div className="container mb-30 mt-50">
    <div className="row">
      <div className="col-xl-10 col-lg-12 m-auto">
        <div className="mb-50">
          <h1 className="heading-2 mb-10">Your Wishlist</h1>
          <h6 className="text-body">There are <span className="text-brand">5</span> products in this list</h6>
        </div>
        <div className="table-responsive shopping-summery">
          <table className="table table-wishlist">
            <thead>
              <tr className="main-heading">
                <th className="custome-checkbox start pl-30">
                  <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" defaultValue />
                  <label className="form-check-label" htmlFor="exampleCheckbox11" />
                </th>
                <th scope="col" colSpan={2}>Product</th>
                <th scope="col">Price</th>
                <th scope="col">Stock Status</th>
                <th scope="col">Action</th>
                <th scope="col" className="end">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className="pt-30">
                <td className="custome-checkbox pl-30">
                  <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" defaultValue />
                  <label className="form-check-label" htmlFor="exampleCheckbox1" />
                </td>
                <td className="image product-thumbnail pt-40"><img src="assets/imgs/shop/product-1-1.jpg" alt="#" /></td>
                <td className="product-des product-name">
                  <h6><a className="product-name mb-10" href="shop-product-right.html">Field Roast Chao Cheese Creamy Original</a></h6>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                </td>
                <td className="price" data-title="Price">
                  <h3 className="text-brand">$2.51</h3>
                </td>
                <td className="text-center detail-info" data-title="Stock">
                  <span className="stock-status in-stock mb-0"> In Stock </span>
                </td>
                <td className="text-right" data-title="Cart">
                  <button className="btn btn-sm">Add to cart</button>
                </td>
                <td className="action text-center" data-title="Remove">
                  <a href="#" className="text-body"><i className="fi-rs-trash" /></a>
                </td>
              </tr>
              <tr>
                <td className="custome-checkbox pl-30">
                  <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2" defaultValue />
                  <label className="form-check-label" htmlFor="exampleCheckbox2" />
                </td>
                <td className="image product-thumbnail"><img src="assets/imgs/shop/product-2-1.jpg" alt="#" /></td>
                <td className="product-des product-name">
                  <h6><a className="product-name mb-10" href="shop-product-right.html">Blue Diamond Almonds Lightly Salted</a></h6>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                </td>
                <td className="price" data-title="Price">
                  <h3 className="text-brand">$3.2</h3>
                </td>
                <td className="text-center detail-info" data-title="Stock">
                  <span className="stock-status in-stock mb-0"> In Stock </span>
                </td>
                <td className="text-right" data-title="Cart">
                  <button className="btn btn-sm">Add to cart</button>
                </td>
                <td className="action text-center" data-title="Remove">
                  <a href="#" className="text-body"><i className="fi-rs-trash" /></a>
                </td>
              </tr>
              <tr>
                <td className="custome-checkbox pl-30">
                  <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" defaultValue />
                  <label className="form-check-label" htmlFor="exampleCheckbox3" />
                </td>
                <td className="image product-thumbnail"><img src="assets/imgs/shop/product-3-1.jpg" alt="#" /></td>
                <td className="product-des product-name">
                  <h6><a className="product-name mb-10" href="shop-product-right.html">Fresh Organic Mustard Leaves Bell Pepper</a></h6>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                </td>
                <td className="price" data-title="Price">
                  <h3 className="text-brand">$2.43</h3>
                </td>
                <td className="text-center detail-info" data-title="Stock">
                  <span className="stock-status in-stock mb-0"> In Stock </span>
                </td>
                <td className="text-right" data-title="Cart">
                  <button className="btn btn-sm">Add to cart</button>
                </td>
                <td className="action text-center" data-title="Remove">
                  <a href="#" className="text-body"><i className="fi-rs-trash" /></a>
                </td>
              </tr>
              <tr>
                <td className="custome-checkbox pl-30">
                  <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox4" defaultValue />
                  <label className="form-check-label" htmlFor="exampleCheckbox4" />
                </td>
                <td className="image product-thumbnail"><img src="assets/imgs/shop/product-4-1.jpg" alt="#" /></td>
                <td className="product-des product-name">
                  <h6><a className="product-name mb-10" href="shop-product-right.html">Angie’s Boomchickapop Sweet &amp; Salty </a></h6>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                </td>
                <td className="price" data-title="Price">
                  <h3 className="text-brand">$3.21</h3>
                </td>
                <td className="text-center detail-info" data-title="Stock">
                  <span className="stock-status out-stock mb-0"> Out Stock </span>
                </td>
                <td className="text-right" data-title="Cart">
                  <button className="btn btn-sm btn-secondary">Contact Us</button>
                </td>
                <td className="action text-center" data-title="Remove">
                  <a href="#" className="text-body"><i className="fi-rs-trash" /></a>
                </td>
              </tr>
              <tr>
                <td className="custome-checkbox pl-30">
                  <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox5" defaultValue />
                  <label className="form-check-label" htmlFor="exampleCheckbox5" />
                </td>
                <td className="image product-thumbnail"><img src="assets/imgs/shop/product-5-1.jpg" alt="#" /></td>
                <td className="product-des product-name">
                  <h6><a className="product-name mb-10" href="shop-product-right.html">Foster Farms Takeout Crispy Classic</a></h6>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                </td>
                <td className="price" data-title="Price">
                  <h3 className="text-brand">$3.17</h3>
                </td>
                <td className="text-center detail-info" data-title="Stock">
                  <span className="stock-status in-stock mb-0"> In Stock </span>
                </td>
                <td className="text-right" data-title="Cart">
                  <button className="btn btn-sm">Add to cart</button>
                </td>
                <td className="action text-center" data-title="Remove">
                  <a href="#" className="text-body"><i className="fi-rs-trash" /></a>
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

export default WishlistPage