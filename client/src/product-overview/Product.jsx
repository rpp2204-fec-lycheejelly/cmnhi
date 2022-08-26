import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelect from './StyleSelect.jsx';
import AddCart from './AddCart.jsx';


class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      styles: [],
      currentStyle: {photos: [{thumbnail_url: "placeholder"}]}
    }
  }

  componentDidMount() {
    this.getProduct()
  }

  getProduct() {
    return axios.get('/products/71701')
    .then(result => {
      console.log('HARRY STYLES',result.data.styles);
      this.setState({
        product: result.data,
        styles: result.data.styles,
        currentStyle: result.data.styles[0]
      })
    })
    .catch(error => {
      throw error;
    })
  }

  render() {
    return <div className='product-overview'>
            <ImageGallery style={this.state.currentStyle}/>
              <div className='product-information'>
                <ProductInfo product={this.state.product}
                             reviews={this.state.product.ratings}
                             style={this.state.currentStyle}/>
                <StyleSelect styles={this.state.styles}
                             currentStyle={this.state.currentStyle}/>
                <AddCart clasName='add-cart'/>
              </div>
          </div>
  }
}

export default Product

