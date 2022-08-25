import React from 'react';
import Stars from './Stars.jsx';
import StyleSelect from './StyleSelect.jsx';
import AddCart from './AddCart.jsx';

let ProductInfo = ({product, reviews}) => {
  return <div className='product-information'>
            <div>
              <Stars reviews={reviews}/>
              <p>Category: {product.category}</p>
              <h4>{product.name}</h4>
              <span>{product.default_price}</span>
              <p>{product.description}</p>
            </div>
            <StyleSelect className='stlye-select' />
            <AddCart clasName='add-cart'/>
         </div>
}

export default ProductInfo;