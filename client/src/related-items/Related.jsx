import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      relatedProducts: [],
      current: {}
    })
    this.getRelated = this.getRelated.bind(this);
  }

  componentDidMount() {
    this.getRelated();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product_id !== this.props.product_id) {
      this.getRelated();
    }
  }

  getRelated() {
    axios.get('/products/' + this.props.product_id + '/related')
      .then((responses) => {
      this.setState({
        relatedProducts: responses.data,
        current: this.props.productData
      })
    }).catch(errors => {
      console.log("related", errors);
    })
  }

  render() {
    return (
      <div onClick={(e) => {this.props.postInteraction(e, 'Related Products')}}>
       <RelatedProducts
         products={this.state.relatedProducts}
         current={this.state.current}
         outfits={this.props.outfits}
         addOutfit={this.props.addOutfit}
         deleteOutfit={this.props.deleteOutfit}
         productClick={this.props.productClick}
         outfitIDs={this.props.outfitIDs}
         product_id={this.props.product_id}/>
      </div>
    )
  }
}
export default Related



