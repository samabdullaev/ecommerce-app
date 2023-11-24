import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {removeProducts} from '../../../store/features/cartSlice'

const CartProductCardSm = ({item}) => {
    const dispatch = useDispatch();
    
    const removeProductFromCart = (id) => {
        dispatch(removeProducts(id))
    }


  return (
    <li>
        <div className="shopping-cart-img">
            <Link to={`/products/${item.id}`}><img alt="Nest" src={item.image} /></Link>
        </div>
        
        <div className="shopping-cart-title">
            <h4><Link to={`/products/${item.id}`}>{item.title}</Link></h4>
            <h4><span>{item.qty} × </span>${item.price}</h4>
        </div>
        
        <div className="shopping-cart-delete">
            <span role="button" onClick={() => removeProductFromCart(item.id)}><i className="fi-rs-cross-small" /></span>
        </div>
    </li>
  )
}

export default CartProductCardSm