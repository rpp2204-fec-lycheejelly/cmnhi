import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import StyleSelect from './StyleSelect.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddCart from './AddCart.jsx';


class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      style: null,
      reviews: null
    }
  }

  componentDidMount() {
    axios.get('/products/71697')
      .then(result => {
        console.log(result.data);
        this.setState({
          product: result.data
        })
      })
  }

  render() {
    return <div>
      <ProductInfo product={this.state.product}/>
      <StyleSelect />
      <ImageGallery />
      <AddCart />
    </div>
  }
}

export default Product

