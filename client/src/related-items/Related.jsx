import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      relatedProducts: [],
      outfit: []
    })
  }

  componentDidMount() {
    axios.get('/products/71697')
      .then(results => {
        console.log(results);
      })
  }

  render() {
    return (
      <div>
       <RelatedProducts />
       <YourOutfit />
      </div>
    )
  }
}
export default Related



