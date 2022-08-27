import React from 'react';
import Stars from './Stars.jsx';

let ProductInfo = ({product, reviews, style}) => {
  return <div>
          <Stars reviews={reviews}/>
          <p>{product.category}</p>
          <h4>{product.name}</h4>
          <span className={style.sale_price ? 'discounted' : ''}>${style.original_price} </span>
          {style.sale_price && <span className="sale-price">${style.sale_price}</span>}
        </div>
}

export default ProductInfo;