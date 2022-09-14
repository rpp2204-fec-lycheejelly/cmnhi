import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Product from './product-overview/Product.jsx';
import Related from './related-items/Related.jsx';
import QandA from './q-a/QandA.jsx';
import styles from './assets/styles.css';
import comnhi from './assets/comnhi.png';
// import Ratings from './ratings-reviews/Ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // product_id: window.location.pathname.slice(1) || '71701'
      product_id: '71701',
      productData: {},
      outfits: []
    }
    this.addToOutfit = this.addToOutfit.bind(this);
  }

  //How to append product ID onto url?
  componentDidMount() {
    this.getProductData();
  }

  getProductData() {
    return axios.get(`/products/${this.state.product_id}`)
    .then(result => {
      console.log('HARRY STYLES',result.data);
      this.setState({
        productData: result.data
      })
    })
    .catch(error => {
      throw new Error(error);
    })
  }

  addToOutfit(newOutfit) {
    var repeat = false;
    this.state.outfits.forEach(outfit => {
      if (JSON.stringify(outfit) === JSON.stringify(newOutfit)) {
        repeat = true;
      }
    })
    if (!repeat) {
      this.setState({outfits: [...this.state.outfits, newOutfit] });
    }
  }

  render () {
    return (
      <div>
        <img id="logo" src={comnhi} alt="company-logo"></img>
        <Product product_id={this.state.product_id}
                 productData={this.state.productData}
                 outfits={this.state.outfits} />
        <Related product_id={this.state.product_id}
                 productData={this.state.productData}
                 outfits={this.state.outfits}/>
        <QandA product_id={this.state.product_id}/>
        {/*<Ratings /> */}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;