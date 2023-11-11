import React from 'react'

const ProductTag = ({type}) => {
    const styles = {
        hot: 'hot',
        sale: 'sale',
        new: 'new'
    };

    return (
        <div className="product-badges product-badges-position product-badges-mrg">
            <span className={styles[type.toLowerCase() ] || 'best'}>{type}</span>
        </div>
    )
}

export default ProductTag