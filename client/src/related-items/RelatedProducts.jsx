import React from 'react';
import axios from 'axios';
import CompareCard from './CompareCard.jsx';
import YourOutfit from './YourOutfit.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevProps.products) !== JSON.stringify(this.props.products)) {
      let ids = this.props.products;
      let details = [];
      let promises = [];
      for (var i = 0; i < ids.length; i++) {
        var request = axios.get('/products/' + ids[i]);
        promises.push(request);
      }

      axios.all(promises).then(axios.spread((...responses) => {
        this.setState({
          productsList: responses
        })
        // use/access the results
      })).catch(errors => {
        // react on errors.
        console.log(errors);
      })
    }
  }

  render () {
    return (
      <>
        <p>Related Products</p>
        <CompareCard related={this.state.productsList} current={this.props.current} productClick={this.props.productClick}
                     relatedIds={this.props.products}/>
        <p>Your Outfit</p>
        <YourOutfit outfits={this.props.outfits}
                    addOutfit={this.props.addOutfit}
                    current={this.props.current}
                    deleteOutfit={this.props.deleteOutfit}
                    productClick={this.props.productClick}/>
      </>
    )
  }
}
export default RelatedProducts