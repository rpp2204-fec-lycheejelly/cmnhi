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
      reviews: {}
    }
  }

  componentDidMount() {
    this.getProduct()
      .then(() => {
        this.getReviews();
      })
  }

  getProduct() {
    return axios.get('/products/71697')
    .then(result => {
      // console.log(result.data);
      this.setState({
        product: result.data
      })
    })
  }

  getReviews() {
    return axios.get('/reviews/meta/71697')
      .then(result => {
        this.setState({
          reviews: result.data.ratings
        })
      })
  }

  render() {
    return <div>
      <ProductInfo product={this.state.product} reviews={this.state.reviews}/>
      <StyleSelect />
      <ImageGallery />
      <AddCart />
    </div>
  }
}

export default Product

