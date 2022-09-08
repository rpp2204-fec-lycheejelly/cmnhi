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
      sku: null,
      frontIdx: 0,
      backIdx: 7,
      mainIdx: 0,
      carousel: []
    }
  }

  componentDidMount() {
    this.getProduct()
  }

  getProduct() {
    return axios.get(`/products/${this.props.product_id}`)
    .then(result => {
      // console.log('HARRY STYLES',result.data);
      this.setState({
        product: result.data,
        styles: result.data.styles,
        currentStyle: result.data.styles[0]
      })
    })
    .catch(error => {
      throw new Error(error);
    })
  }

  changeStyle(style) {
    this.setState({
      currentStyle: style,
      sku: null,
    })
  }

  updateSku(sku) {
    this.setState({
      sku
    })
  }

  addToBag(count) {
    axios.post('/cart', {
      sku_id: this.state.sku,
      count
    })
    .then(result => {
      console.log('Successful POST to /cart')
    })
    .catch(error => {
      console.log('Error POST to /cart', error)
    })
  }

  changeImage(index) {
      this.setState({
        mainIdx: index
      })
  }

  scrollRight() {
    this.setState({
      mainIdx: this.state.mainIdx + 1
    })
  }

  scrollLeft() {
    this.setState({
      mainIdx: this.state.mainIdx - 1
    })
  }

  incrementIdx(newCarousel) {
    this.setState({
      carousel: newCarousel,
      frontIdx: this.state.frontIdx + 1,
      backIdx: this.state.backIdx + 1,
    })
  }

  decrementIdx(newCarousel) {
    this.setState({
      carousel: newCarousel,
      frontIdx: this.state.frontIdx - 1,
      backIdx: this.state.backIdx - 1,
    })
  }

  spliceCarousel(carousel) {
    this.setState({
      carousel: carousel.splice(this.state.frontIdx, 7)
    })
  }

  render() {
    return <>
           <div className='product-overview'>
             <ImageGallery photos={this.state.currentStyle.photos || []}
                           frontIdx={this.state.frontIdx}
                           backIdx={this.state.backIdx}
                           mainIdx={this.state.mainIdx}
                           carousel={this.state.carousel}
                           changeImage={this.changeImage.bind(this)}
                           incrementIdx={this.incrementIdx.bind(this)}
                           decrementIdx={this.decrementIdx.bind(this)}
                           scrollLeft={this.scrollLeft.bind(this)}
                           scrollRight={this.scrollRight.bind(this)}
                           spliceCarousel={this.spliceCarousel.bind(this)}
                           />
             <div className='product-information'>
                 <ProductInfo product={this.state.product}
                              reviews={this.state.product.ratings}
                              style={this.state.currentStyle}/>
                 <StyleSelect styles={this.state.styles}
                              currentStyle={this.state.currentStyle}
                              changeStyle={this.changeStyle.bind(this)}/>
                 <AddCart className='add-cart' skus={this.state.currentStyle.skus || {}}
                                               sku={this.state.sku}
                                               updateSku={this.updateSku.bind(this)}
                                               add={this.addToBag.bind(this)}/>
            </div>
          </div>
          <ProductDesc slogan={this.state.product.slogan}
                       description={this.state.product.description}
                       features={this.state.product.features}/>
          </>
  }
}

export default Product

