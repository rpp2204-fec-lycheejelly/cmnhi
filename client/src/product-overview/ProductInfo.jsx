import React from 'react';
import Stars from './Stars.jsx';

let ProductInfo = (props) => {
  return <div>
    <h3>Product Information</h3>
    <Stars />
    <p>Category</p>
    <h4>Product Title</h4>
    <span>Price</span>
    <p>Product Overview</p>
    <button>Add To Outfit</button>
  </div>
}

export default ProductInfo;