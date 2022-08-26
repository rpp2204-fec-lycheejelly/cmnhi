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
      currentStyle: {}
    }
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    return axios.get('/products/71699')
    .then(result => {
      // console.log(result.data);
      this.setState({
        product: result.data,
        styles: result.data.styles,
        currentStyle: result.data.styles[0]
      })
    })
  }

  render() {
    return <div className='product-overview'>
            <ImageGallery className='image-gallery'/>
              <div className='product-information'>
                <ProductInfo product={this.state.product}
                            reviews={this.state.product.ratings}
                            style={this.state.currentStyle}/>
                <StyleSelect className='stlye-select' styles={this.state.styles}/>
                <AddCart clasName='add-cart'/>
              </div>

          </div>
  }
}

export default Product

