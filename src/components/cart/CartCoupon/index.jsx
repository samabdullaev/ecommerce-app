import React, { useRef } from 'react'

const coupons = {
    "wow10": 10,
    "wow20": 20,
    "wow30": 30,
    "wow40": 40,
    "wow50": 50
}

const CartCoupon = ({setDiscount}) => {
    const ref = useRef(null)

    const submit = (e) => {
        e.preventDefault();
        const value = ref.current.value;
        setDiscount(coupons[value] || 0);
    }

    return (
        <form onSubmit={submit}>
            <div className="d-flex justify-content-between">
                <input ref={ref} className="font-medium mr-15 coupon" name="Coupon" placeholder="Enter Your Coupon" />
                <button type='submit' className="btn"><i className="fi-rs-label mr-10" />Apply</button>
            </div>
        </form>
  )
}

export default CartCoupon