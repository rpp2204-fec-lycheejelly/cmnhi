import React from 'react';
import Stars from './Stars.jsx';

let ProductInfo = ({product, reviews, style}) => {
  return <div>
          <div className="rating-container">
              <Stars reviews={reviews}/>
              <a className='review-link'>Read All Reviews</a>
          </div>
            <p className="product-category">{product.category}</p>
            <h4 className="product-title">{product.name}</h4>
            <span className={style.sale_price ? 'discounted price' : 'product-price'}>${style.original_price} </span>
            {style.sale_price && <span className="sale-price product-price">${style.sale_price}</span>}
        </div>
}

export default ProductInfo;