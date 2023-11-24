import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {removeProducts, changeQty} from '../../../store/features/cartSlice';
import { PARSE_PRICE } from '../../../utils';

const CartProductCard = ({item}) => {

  const dispatch = useDispatch();

  return (
    <tr className="pt-30">
                <td className="custome-checkbox pl-30">
                  <input className="form-check-input" type="checkbox" name="checkbox" id={`checkbox-${item.id}`} defaultValue />
                  <label className="form-check-label" htmlFor={`checkbox-${item.id}`} />
                </td>
                <td className="image product-thumbnail pt-40">
                    <img 
                        style={{
                            height: "100px",
                            width: "80px",
                            marginRight: "20px",
                            objectFit: "contain",
                        }}
                        src={item.image} alt="#" 
                    />
                </td>
                <td className="product-des product-name">
                  <h6 className="mb-5"><Link to={`/products/${item.id}`} className="product-name mb-10 text-heading">{item.title}</Link></h6>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: `${item.rating.rate * 20}%`}}>
                      </div>
                    </div>
                    <span className="font-small ml-5 text-muted"> ({item.rating.rate})</span>
                  </div>
                </td>
                <td className="price" data-title="Price">
                  <h4 className="text-body">${item.price} </h4>
                </td>
                <td className="text-center detail-info" data-title="Stock">
                  <div className="detail-extralink mr-15">
                    <div className="detail-qty border radius">
                      <span onClick={() => dispatch(changeQty({id: item.id, type: "dec"}))} role='button' className="qty-down"><i className="fi-rs-angle-small-down" /></span>
                      <p className="qty-val">{item.qty}</p>
                      <span onClick={() => dispatch(changeQty({id: item.id, type: "inc"}))} role='button' className="qty-up"><i className="fi-rs-angle-small-up" /></span>
                    </div>
                  </div>
                </td>
                <td className="price" data-title="Price">
                  <h4 className="text-brand">${PARSE_PRICE(item.price * item.qty)} </h4>
                </td>
                <td className="action text-center" data-title="Remove"><span onClick={() => dispatch(removeProducts(item.id))} className="text-body" role="button"><i className="fi-rs-trash" /></span></td>
              </tr>
  )
}

export default CartProductCard