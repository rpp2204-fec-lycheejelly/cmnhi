import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      relatedProducts: [],
      relatedDetails: [],
      outfit: [],
      current: {}
    })
    this.getRelated = this.getRelated.bind(this);
  }

  componentDidMount() {
    this.getRelated();
  }

  getRelated() {
    axios.get('/products/' + this.props.product_id + '/related')
      .then((responses) => {
      console.log("related", responses);
      this.setState({
        relatedProducts: responses.data,
        current: this.props.productData
      })
      // use/access the results
    }).catch(errors => {
      // react on errors.
      console.log(errors);
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product_id !== this.props.product_id) {
      this.getRelated();
    }
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
         productClick={this.props.productClick}/>
      </div>
    )
  }
}
export default Related



