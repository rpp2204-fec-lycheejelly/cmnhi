import React from 'react';
import axios from 'axios';
import CompareCard from './CompareCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.products.length !== prevProps.products.length) {
      let ids = this.props.products;
      let details = [];
      let promises = [];
      for (var i = 0; i < ids.length; i++) {
        promises.push(
          axios.get('/products/' + ids[i])
            .then(response => {
            // do something with response
            details.push(response.data);
          })
        )
      }
      Promise.all(promises).then(() => {
        this.setState({
          productsList: details
        }, () => {
          console.log(this.state);
        })
      });
    }
  }

  render () {
    return (
      <>
        <p>Related Products</p>
        <CompareCard related={this.state.productsList}/>
      </>
    )
  }
}
export default RelatedProducts