import React from 'react';
import axios from 'axios';
import CompareCard from './CompareCard.jsx';
import YourOutfit from './YourOutfit.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      allProducts: []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //if array of related ids changes
    if (JSON.stringify(prevProps.products) !== JSON.stringify(this.props.products)) {
      let ids = this.props.products;
      let promises = [];
      for (var i = 0; i < ids.length; i++) {
        var request = axios.get('/products/' + ids[i]);
        promises.push(request);
      }

      axios.all(promises).then(axios.spread((...responses) => {
        this.setState({
          productsList: responses,
        })
      })).catch(errors => {
        console.log("related component", errors);
      })
    }
  }

  render () {
    return (
      <>
        <p>RELATED PRODUCTS</p>
        <CompareCard related={this.state.productsList}
                     current={this.props.current}
                     productClick={this.props.productClick}
                     relatedIds={this.props.products}/>
        <p>YOUR OUTFIT</p>
        <YourOutfit outfits={this.props.outfits}
                    addOutfit={this.props.addOutfit}
                    current={this.props.current}
                    deleteOutfit={this.props.deleteOutfit}
                    productClick={this.props.productClick}
                    outfitIDs={this.props.outfitIDs}
                    product_id={this.props.product_id}/>
      </>
    )
  }
}
export default RelatedProducts