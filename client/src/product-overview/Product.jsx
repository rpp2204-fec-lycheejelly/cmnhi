import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelect from './StyleSelect.jsx';
import AddCart from './AddCart.jsx';
import ProductDesc from './ProductDesc.jsx';


class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      styles: [],
      currentStyle: {},
      sku: null
    }
  }

  componentDidMount() {
    this.getProduct()
  }

  getProduct() {
    return axios.get('/products/71701')
    .then(result => {
      console.log('HARRY STYLES',result.data);
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

  changeStyle(style) {
    this.setState({
      currentStyle: style,
      sku: null
    })
  }

  updateSku(e) {
    this.setState({
      sku: e.target.value
    })
  }

  render() {
    return <div>
           <div className='product-overview'>
             <ImageGallery style={this.state.currentStyle}/>
             <div className='product-information'>
                 <ProductInfo product={this.state.product}
                             reviews={this.state.product.ratings}
                             style={this.state.currentStyle}/>
                 <StyleSelect styles={this.state.styles}
                             currentStyle={this.state.currentStyle}
                             changeStyle={this.changeStyle.bind(this)}/>
                 <AddCart className='add-cart' skus={this.state.currentStyle.skus || {}}
                                              sku={this.state.sku}
                                              updateSku={this.updateSku.bind(this)}/>
            </div>
          </div>
          <ProductDesc slogan={this.state.product.slogan}
                       description={this.state.product.description}
                       features={this.state.product.features}/>
          </div>
  }
}

export default Product

