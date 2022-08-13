import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelect from './StyleSelect.jsx';
import AddCart from './AddCart.jsx';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <ProductInfo />
      <ImageGallery />
      <StyleSelect />
      <AddCart />
    </div>
  }
}

export default Product