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
      product_id: window.location.pathname.slice(1) || '71701',
      productData: {},
      outfits: JSON.parse(localStorage.getItem("outfits"))
    }
    this.addToOutfit = this.addToOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
    this.updateProductID = this.updateProductID.bind(this);
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

  addToOutfit() {
    var repeat = false;
    if (!this.state.outfits) {
      this.setState({outfits: [this.state.productData]}, () => {
        localStorage.setItem("outfits", JSON.stringify(this.state.outfits));
      })
    } else {
      this.state.outfits.forEach(outfit => {
        console.log(outfit.id);
        if (outfit.id === this.state.productData.id) {
          repeat = true;
        }
      });
      if (!repeat) {
        this.setState({outfits: [...this.state.outfits, this.state.productData] }, () => {
          localStorage.setItem("outfits", JSON.stringify(this.state.outfits));
        });
      }
    }
  }

  deleteOutfit(id) {
    const index = this.state.outfits.map(outfit => outfit.id).indexOf(id);
    const deleted = this.state.outfits;
    deleted.splice(index, 1);
    this.setState({outfits: deleted}, () => {
      localStorage.setItem("outfits", JSON.stringify(this.state.outfits));
    })
  }

  updateProductID(id) {
    this.setState({
      product_id: id
    }, () => {
      this.getProductData();
    })
  }

  render () {
    return (
      <div>
        <img id="logo" src={comnhi} alt="company-logo"></img>
        <Product product_id={this.state.product_id}
                 productData={this.state.productData}
                 outfits={this.state.outfits}
                 addOutfit={this.addToOutfit}/>
        <Related product_id={this.state.product_id}
                 productData={this.state.productData}
                 outfits={this.state.outfits}
                 addOutfit={this.addToOutfit}
                 deleteOutfit={this.deleteOutfit}
                 productClick={this.updateProductID}/>
        <QandA   product_id={this.state.product_id}
                 productData={this.state.productData}/>
        {/*<Ratings /> */}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;