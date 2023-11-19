import React, { useState } from 'react'
import CartCoupon from '../CartCoupon'

const CartTotalInfo = ({total, deliveryCost}) => {
    const [discount, setDiscount] = useState(0)
  return (
    <div className="border p-md-4 cart-totals ml-30">
    <div className="table-responsive">
      <table className="table no-border">
        <tbody>
          <tr>
            <td className="cart_total_label">
              <h6 className="text-muted">Subtotal</h6>
            </td>
            <td className="cart_total_amount">
                <h4 className="text-brand text-end">
                    ${total.toFixed(2)}
                </h4>
            </td>
          </tr>
          <tr>
            <td scope="col" colSpan={2}>
              <div className="divider-2 mt-10 mb-10" />
            </td>
          </tr>
            <tr>
                <td className="cart_total_label">
                    <h6 className="text-muted">Shipping</h6>
                </td>
                <td className="cart_total_amount">
                    <h5 className="text-heading text-end">{deliveryCost}% </h5>
                </td>
            </tr>
            <tr>
                <td colSpan={2} className="cart_total_amount">
                    <CartCoupon setDiscount={setDiscount} />
                </td>
            </tr>
            
            <tr>
            <td scope="col" colSpan={2}>
              <div className="divider-2 mt-10 mb-10" />
            </td>
          </tr>
          <tr>
            <td className="cart_total_label">
              <h6 className="text-muted">Total</h6>
            </td>
            <td className="cart_total_amount">
                <h4 className="text-brand text-end">
                    {discount !== 0 && (
                    <span 
                        style={{
                            color: "gray",
                            marginRight: "10px",
                            textDecoration: "line-through",
                            opacity: "50%"
                        }}
                    >
                        ${(total + (total * deliveryCost)/100).toFixed(2)}
                    </span>
                    )}
                    ${(total + (total * deliveryCost)/100).toFixed(2) - discount}
                </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <a href="#" className="btn mb-20 w-100">Proceed To CheckOut<i className="fi-rs-sign-out ml-15" /></a>
  </div>
  )
}

export default CartTotalInfo