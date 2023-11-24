import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import CartProductCard from '../../components/cart/CartProductCard'
import CartTotalInfo from '../../components/cart/CartTotalInfo'
import { useSelector } from 'react-redux'

const CartPage = () => {

  const cart = useSelector(state => state.cart.products)

  const setCart = () => {}
const clearCart = () => {
  setCart([]);
};

const toggleSelectProducts = (id) => {
  if(id) {

  } else {

  }
};

return (
  <>
    <Breadcrumb title="Cart" />
  <div className="container mb-80 mt-50">
    <div className="row">
      <div className="col-lg-8 mb-40">
        <h1 className="heading-2 mb-10">Your Cart</h1>
        <div className="d-flex justify-content-between">
          <h6 className="text-body">There are <span className="text-brand">{cart.length}</span> products in your cart</h6>
          <h6 className="text-body"><span onClick={clearCart} href="#" className="text-muted" role="button"><i className="fi-rs-trash mr-5" />Clear Cart</span></h6>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8">
        <div className="table-responsive shopping-summery">
          <table className="table table-wishlist">
            <thead>
              <tr className="main-heading">
                <th className="custome-checkbox start pl-30">
                  <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" defaultChecked={true} />
                  <label className="form-check-label" htmlFor="exampleCheckbox11" />
                </th>
                <th scope="col" colSpan={2}>Product</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col" className="end">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <CartProductCard 
                  item={item} key={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-lg-4">
        <CartTotalInfo />
      </div>
    </div>
  </div>
</>

  )
}

export default CartPage