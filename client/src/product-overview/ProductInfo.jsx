import React from 'react';

let ProductInfo = (props) => {
  return <div>
    <h3>Product Information</h3>
    <div className='stars'>
      <span> * </span>
      <span> * </span>
      <span> * </span>
      <span> * </span>
      <span> * </span>
      <a> Read all [#] reviews </a>
    </div>
    <p>Category</p>
    <h4>Product Title</h4>
    <span>Price</span>
    <p>Product Overview</p>
    <button>Add To Outfit</button>
  </div>
}

export default ProductInfo;