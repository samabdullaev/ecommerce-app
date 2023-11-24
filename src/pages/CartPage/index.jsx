import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import CartProductCard from '../../components/cart/CartProductCard'
import CartTotalInfo from '../../components/cart/CartTotalInfo'
import { useDispatch, useSelector } from 'react-redux'
import CheckboxIcon from '../../assets/icons/CheckboxIcon'
import { clearCart, toggleSelect } from '../../store/features/cartSlice'

const CartPage = () => {
  const cart = useSelector(state => state.cart.products)
  const allSelected = useSelector(state => state.cart.products.length === state.cart.products.filter(item => item.selected).length);
  const dispatch = useDispatch();

return (
  <>
    <Breadcrumb title="Cart" />
    {cart.length ? <div className="container mb-80 mt-50">
      <div className="row">
        <div className="col-lg-8 mb-40">
          <h1 className="heading-2 mb-10">Your Cart</h1>
          <div className="d-flex justify-content-between">
            <h6 className="text-body">There are <span className="text-brand">{cart.length}</span> products in your cart</h6>
            <h6 className="text-body"><span onClick={() => dispatch(clearCart)} href="#" className="text-muted" role="button"><i className="fi-rs-trash mr-5" />Clear Cart</span></h6>
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
                    <span onClick={() => dispatch(toggleSelect({type: !allSelected ? "check" : "uncheck"}))} role='button'>
                      <CheckboxIcon isEmpty={!allSelected} />
                    </span>
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
    : <div className="container mb-80 mt-50">
      <h3 style={{textAlign: "center"}}>Your cart is empty :(</h3>
    </div>
    }
</>

  )
}

export default CartPage