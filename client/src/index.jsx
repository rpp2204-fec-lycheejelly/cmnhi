import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Product from './product-overview/Product.jsx';
import Related from './related-items/Related.jsx';
import QandA from './q-a/QandA.jsx';
import styles from './assets/styles.css';
import comnhi from './assets/comnhi.png';
import WithInteractions from './WithInteractions.jsx';
// import Ratings from './ratings-reviews/Ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_id: window.location.pathname.slice(1) || '71701',
      productData: {},
      outfits: JSON.parse(localStorage.getItem("outfits")),
      outfitIDs: JSON.parse(localStorage.getItem("ids"))
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
      console.log('PRODUCT DATA',result.data);
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
    var id = this.state.product_id;
    if (this.state.outfits.length === 0 || this.state.outfits === null) {
      this.setState({
        outfits: [this.state.productData],
        outfitIDs: [Number(this.state.product_id)]
      }, () => {
        localStorage.setItem("outfits", JSON.stringify(this.state.outfits));
        localStorage.setItem("ids", JSON.stringify(this.state.outfitIDs));
      })
    } else {
      this.state.outfits.forEach(outfit => {
        if (outfit.id === this.state.productData.id) {
          repeat = true;
        }
      });
      if (!repeat) {
        this.setState({
          outfits: [...this.state.outfits, this.state.productData],
          outfitIDs: [...this.state.outfitIDs, Number(this.state.product_id)]
        }, () => {
          localStorage.setItem("outfits", JSON.stringify(this.state.outfits));
          localStorage.setItem("ids", JSON.stringify(this.state.outfitIDs))
        });
      }
    }
  }

  deleteOutfit(id) {
    const index = this.state.outfits.map(outfit => outfit.id).indexOf(id);
    const deleted = this.state.outfits;
    const deleteID = this.state.outfitIDs;
    deleted.splice(index, 1);
    deleteID.splice(index, 1);
    this.setState({
      outfits: deleted,
      outfitIDs: deleteID
    }, () => {
      localStorage.setItem("outfits", JSON.stringify(this.state.outfits));
      localStorage.setItem("ids", JSON.stringify(this.state.outfitIDs));
    })
    // let allOutfits = this.state.outfits;
    // allOutfits.delete(id);
    // this.setState({
    //   outfits: allOutfits
    // }, () => {
    //   localStorage.setItem("outfits", JSON.stringify(this.state.outfits));
    // })
  }

  updateProductID(id) {
    this.setState({
      product_id: id
    }, () => {
      this.getProductData();
    })
  }

  render () {
    const ProductWithInteractions = WithInteractions(Product);
    const RelatedWithInteractions = WithInteractions(Related);
    const QandAWithInteractions = WithInteractions(QandA);

    return (
      <div>
        <img id="logo" src={comnhi} alt="company-logo"></img>
        <ProductWithInteractions product_id={this.state.product_id}
                                 productData={this.state.productData}
                                 outfits={this.state.outfits}
                                 addOutfit={this.addToOutfit}/>
        <RelatedWithInteractions product_id={this.state.product_id}
                                 productData={this.state.productData}
                                 outfits={this.state.outfits}
                                 addOutfit={this.addToOutfit}
                                 deleteOutfit={this.deleteOutfit}
                                 productClick={this.updateProductID}
                                 outfitIDs={this.state.outfitIDs}/>
        <QandAWithInteractions product_id={this.state.product_id}
                               productData={this.state.productData}/>
        {/*<Ratings /> */}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;