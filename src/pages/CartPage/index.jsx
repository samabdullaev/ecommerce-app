import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import CartProductCard from '../../components/cart/CartProductCard'
import CartTotalInfo from '../../components/cart/CartTotalInfo'

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "mens-clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      },
      selected: true,
      qty: 1
      },
      {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "mens-clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
      "rate": 4.1,
      "count": 259
      },
      selected: true,
      qty: 1
      },
      {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "mens-clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
      "rate": 4.7,
      "count": 500
      },
      selected: true,
      qty: 1
      },
      {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "mens-clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
      "rate": 2.1,
      "count": 430
      },
      selected: true,
      qty: 1
      }
  ])

const clearCart = () => {
  setCart([]);
};

const removeProduct = (id) => {
  setCart(cart.filter((item) => item.id !== id))
};

const changeQty = (id, action) => {
  if(action==="inc") {
    setCart(cart.map(item => item.id === id ? ({
      ...item,
      qty: item.qty + 1
    }) : item))
  } else {
    const product = cart.find(item => item.id === id);
    if (product.qty === 1) {
      removeProduct(id)
    } else {
      setCart(cart.map(item => item.id === id ? ({
        ...item,
        qty: item.qty - 1
      }) : item))
    }
  }
};

const toggleSelectProducts = (id) => {
  if(id) {

  } else {

  }
};

const calculateSubTotal = () => {
  let total = 0;
  for (let c of cart) {
    if(c.selected) {
      total += c.qty * c.price
    }
  }
  return total;
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
                  removeProduct={removeProduct} 
                  changeQty={changeQty}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-lg-4">
        <CartTotalInfo total={calculateSubTotal()} deliveryCost={5} />
      </div>
    </div>
  </div>
</>

  )
}

export default CartPage