import React, { forwardRef, useImperativeHandle, useState } from 'react'
import ProductThumbnailSlider from './ProductThumbnailSlider';
import QuickViewContent from '../containers/QuickViewContent';

const QuickViewModal = (props, ref) => {
    const [toggle, setToggle] = useState(false);
    const [product, setProduct] = useState({});

    const open = () => {
        setToggle(true);
    }

    const close = () => {
        setToggle(false);
    }

    useImperativeHandle(
        ref,
        () => ({
            open: (item) => {
                setProduct(item);
                open();
            },
        }),
        []
    );

    if (!toggle) return null;

  return (
    <div 
        className="modal custom-modal" 
        style={{
            display: toggle ? "block": "none",
        }}
    >
    <div className="modal-dialog">
      <div className="modal-content">
        <button 
            onClick={close}
            type="button" 
            className="btn-close" />
        <div className="modal-body">
          <QuickViewContent product={product} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default forwardRef(QuickViewModal);