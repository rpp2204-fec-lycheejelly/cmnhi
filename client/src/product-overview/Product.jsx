import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';


class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      style: null
    }
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    return axios.get('/products/71702')
    .then(result => {
      console.log(result.data);
      this.setState({
        product: result.data
      })
    })
  }

  render() {
    return <div className='product-overview'>
      <ImageGallery className='image-gallery'/>
      <ProductInfo product={this.state.product} reviews={this.state.product.ratings}/>
    </div>
  }
}

export default Product

